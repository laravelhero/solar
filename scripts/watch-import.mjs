#!/usr/bin/env node
/**
 * watch-import.mjs — auto-runs your import tool's "Re-scan & Import" CLI
 * whenever anything in this project changes.
 *
 * Zero dependencies (uses Node's built-in recursive fs.watch — works on macOS
 * and Windows; on Linux it falls back to watching the top-level dirs).
 *
 * USAGE
 *   1. Set the import command. Either:
 *        - export IMPORT_CMD="your-tool import --path ."      (recommended)
 *        - or edit DEFAULT_CMD below.
 *   2. Run:  npm run watch:import
 *
 * It debounces rapid saves, skips noise (node_modules, dist, .git, .astro),
 * and never overlaps runs — if changes land mid-run, it re-runs once after.
 */
import { watch } from 'node:fs';
import { spawn } from 'node:child_process';
import { resolve } from 'node:path';

// ---- Config ----------------------------------------------------------------
// 👉 Replace this with your import tool's actual CLI command, or set IMPORT_CMD.
const DEFAULT_CMD = 'echo "[watch-import] set IMPORT_CMD to your import tool CLI"';
const CMD = process.env.IMPORT_CMD || DEFAULT_CMD;

const ROOT = resolve(process.cwd());
const DEBOUNCE_MS = Number(process.env.IMPORT_DEBOUNCE_MS || 800);

// Paths we never care about (build artifacts, deps, vcs, editor noise).
const IGNORE = [
  'node_modules', 'dist', '.git', '.astro', '.vscode', '.idea',
  '.DS_Store', '.cache', 'scripts/watch-import.mjs',
];
const shouldIgnore = (file = '') =>
  !file || IGNORE.some((p) => file === p || file.startsWith(p + '/') || file.includes('/' + p + '/') || file.endsWith('~') || file.includes('.tmp'));

// ---- Run management --------------------------------------------------------
let timer = null;
let running = false;
let queued = false;

function ts() {
  return new Date().toLocaleTimeString('en-US', { hour12: false });
}

function runImport(reason) {
  if (running) { queued = true; return; }
  running = true;
  console.log(`\n[${ts()}] ⟳ Re-scan & Import  (${reason})`);

  const child = spawn(CMD, { shell: true, stdio: 'inherit', cwd: ROOT });
  child.on('exit', (code) => {
    running = false;
    console.log(
      code === 0
        ? `[${ts()}] ✓ Import finished. Watching for changes…`
        : `[${ts()}] ✗ Import exited with code ${code}. Watching for changes…`,
    );
    if (queued) { queued = false; schedule('queued changes'); }
  });
  child.on('error', (err) => {
    running = false;
    console.error(`[${ts()}] ✗ Failed to run import command: ${err.message}`);
  });
}

function schedule(reason) {
  clearTimeout(timer);
  timer = setTimeout(() => runImport(reason), DEBOUNCE_MS);
}

// ---- Watcher ---------------------------------------------------------------
console.log(`[${ts()}] 👀 Watching ${ROOT}`);
console.log(`[${ts()}]    Command: ${CMD}`);
console.log(`[${ts()}]    Debounce: ${DEBOUNCE_MS}ms — Ctrl+C to stop.\n`);

try {
  watch(ROOT, { recursive: true }, (_event, filename) => {
    const file = filename ? filename.toString().replaceAll('\\', '/') : '';
    if (shouldIgnore(file)) return;
    console.log(`[${ts()}] • changed: ${file}`);
    schedule(file);
  });
} catch (err) {
  console.error(`[${ts()}] Recursive watch unavailable (${err.message}). ` +
    `On Linux, install a watcher like chokidar, or run the import manually.`);
  process.exit(1);
}

// Optional: do an initial import on startup.
if (process.env.IMPORT_ON_START === '1') schedule('startup');

process.on('SIGINT', () => { console.log('\n[watch-import] stopped.'); process.exit(0); });
