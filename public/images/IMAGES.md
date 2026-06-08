# Apex Solar — Image SEO Manifest

Drop production photography into the folders below using the exact filenames.
Until then, the site renders a branded gradient placeholder showing each image's
alt text (see `src/layouts/Layout.astro`). Every image is referenced from a data
file or component, so updating a photo never requires touching markup.

**Recommended dimensions**
- Hero / banner: `1920×1080` (16:9) or `1920×820` (21:9)
- OG / social share: `1200×630`
- Cards (service/blog/project): `800×500` (16:10) or `600×450` (4:3)
- Square gallery: `1000×1000`
- Use modern formats (`.webp`/`.avif`) where possible; `.jpg` filenames below
  are the references the code expects — Astro's image pipeline can convert.

Every entry includes **Alt**, **Title**, **Caption**, **Description** and
**Keywords** as required for image SEO.

---

## /brand
| File | Purpose |
| --- | --- |
| `apex-solar-logo.svg` | Primary logo (also rendered inline in `Logo.astro`). |
| `apex-solar-og.jpg` | `1200×630` default social-share / Open Graph image. |

**apex-solar-og.jpg**
- **Alt:** Apex Solar — premium solar, battery storage and EV charging across the USA
- **Title:** Apex Solar Energy — American Solar Installer
- **Caption:** Premium solar installation across America
- **Description:** Branded social-share card featuring a residential solar installation at golden hour with the Apex Solar logo.
- **Keywords:** solar company usa, apex solar, residential solar, solar installer

---

## /home
**hero-solar-home.jpg** — Homepage hero (`1920×1080`)
- **Alt:** Premium residential solar installation at golden hour
- **Title:** Residential Solar Energy System at Sunset
- **Caption:** A modern American home powered by rooftop solar
- **Description:** A contemporary single-family home with a full rooftop solar array glowing in warm golden-hour light, conveying premium quality and energy independence.
- **Keywords:** residential solar installation, rooftop solar, home solar panels, clean energy home

---

## /services
One hero image per service (`1920×800` recommended). Filenames match
`heroImage` in `src/data/services.ts`.

| File | Alt | Keywords |
| --- | --- | --- |
| `services-hero.jpg` | Solar technicians reviewing plans on a rooftop installation | solar services, solar installers |
| `mega-menu-feature.jpg` | Free solar estimate promotional image | free solar quote, solar estimate |
| `residential-solar-installation.jpg` | Technicians installing solar panels on an American home roof | residential solar installation, home solar |
| `solar-panel-installation.jpg` | Solar panels being precisely mounted on rooftop racking | solar panel installation, solar mounting |
| `solar-financing.jpg` | Homeowner reviewing solar financing options on a tablet | solar financing, $0 down solar |
| `commercial-solar-systems.jpg` | Large commercial solar array on a flat business rooftop | commercial solar, business solar |
| `warehouse-solar.jpg` | Solar panels covering a large warehouse rooftop | warehouse solar, distribution center solar |
| `industrial-solar.jpg` | Industrial-scale ground-mount solar field beside a manufacturing plant | industrial solar, utility scale solar |
| `solar-battery-storage.jpg` | Sleek home battery storage units mounted in a garage | solar battery storage, home battery |
| `whole-home-backup.jpg` | Family home lit during a neighborhood power outage | whole home backup, battery backup |
| `ev-charger-installation.jpg` | Electric vehicle charging from a home wall charger beside solar panels | ev charger installation, solar ev charging |
| `agricultural-solar.jpg` | Solar panels mounted above farmland with crops growing beneath | agricultural solar, agrivoltaics |
| `solar-roofing.jpg` | Modern home with integrated solar roof shingles | solar roofing, solar shingles |
| `community-solar.jpg` | Community solar farm in an open field serving local subscribers | community solar, shared solar |
| `off-grid-solar.jpg` | Off-grid cabin powered entirely by a solar and battery system | off grid solar, cabin solar |
| `solar-repair.jpg` | Technician diagnosing a rooftop solar inverter | solar repair, inverter repair |
| `solar-inspection.jpg` | Inspector reviewing a solar array with a thermal camera | solar inspection, thermal imaging |
| `solar-panel-cleaning.jpg` | Technician cleaning rooftop solar panels with purified water | solar panel cleaning, solar maintenance |
| `monitoring-maintenance.jpg` | Solar production monitoring dashboard on a laptop screen | solar monitoring, maintenance plan |

> **Per-service SEO template** — for each, set:
> **Title:** `<Service Name> | Apex Solar`,
> **Caption:** the service tagline (see `services.ts`),
> **Description:** 1–2 sentences expanding the alt text with the U.S. location/context,
> **Keywords:** the service's `seo.keywords` array.

---

## /projects
Filenames match `image` in `src/data/projects.ts`. Each project also needs three
gallery images: `<slug>-1.jpg`, `<slug>-2.jpg`, `<slug>-3.jpg`
(installed array / close-up / inverter & monitoring).

Card hero (`600×450`), gallery (`1000×1000`). Example metadata pattern:

**austin-net-zero-home.jpg**
- **Alt:** Net-zero family home with rooftop solar in Austin, Texas
- **Title:** Austin Net-Zero Home Solar Project
- **Caption:** 11.2 kW residential solar + battery in Austin, TX
- **Description:** A South Austin family home with a roof-filling 28-panel array and whole-home battery that reached true net-zero.
- **Keywords:** austin solar project, net zero home texas, residential solar case study

Remaining project heroes (alt text = `imageAlt` field in `projects.ts`):
`phoenix-warehouse-array`, `fort-myers-hurricane-backup`,
`bakersfield-agrivoltaic-farm`, `denver-solar-ev-home`, `charlotte-office-campus`,
`tucson-desert-villa`, `las-vegas-strip-retail`, `houston-industrial-microgrid`,
`atlanta-suburban-home`, `san-diego-luxury-estate`, `dallas-school-district`,
`raleigh-net-zero-build`, `sacramento-cold-storage`, `boulder-mountain-cabin`,
`savannah-historic-home`, `reno-tech-office`, `miami-condo-community`,
`san-antonio-grocery-chain`, `colorado-springs-veteran-home`.
Plus `projects-hero.jpg` and `case-studies-hero.jpg`.

---

## /blog
Featured image per article (`800×500`). Filenames match `featuredImage` in each
markdown file's frontmatter; alt text matches `featuredImageAlt`.

| File | Keywords |
| --- | --- |
| `cost-of-solar-panels-2026.jpg` | cost of solar panels, solar price 2026 |
| `federal-solar-tax-credit.jpg` | federal solar tax credit, 30% itc |
| `do-you-need-a-solar-battery.jpg` | solar battery, home battery storage |
| `commercial-solar-roi.jpg` | commercial solar roi, business solar |
| `charging-ev-with-solar.jpg` | charge ev with solar, solar ev charging |
| `clean-solar-panels.jpg` | clean solar panels, solar maintenance |
| `net-metering-explained.jpg` | net metering, nem 3.0 |
| `zero-down-solar-financing.jpg` | $0 down solar, solar financing |
| `is-your-roof-right-for-solar.jpg` | roof for solar, solar suitability |
| `sizing-solar-battery.jpg` | solar battery sizing, whole home backup |

---

## /team
| File | Alt | Keywords |
| --- | --- | --- |
| `about-team.jpg` | The Apex Solar installation team in front of a completed project | solar team, solar installers |
| `about-install.jpg` | Apex Solar crew installing rooftop panels | solar installation crew |
| `about-engineer.jpg` | Solar engineer designing a system | solar design engineer |
| `about-panels.jpg` | Close-up of premium solar panels | premium solar panels |
| `careers-hero.jpg` | Apex Solar team members collaborating on a project | solar jobs, solar careers |
| `review-*.jpg` | Customer headshots (see `testimonials.ts`) | solar reviews, customer testimonial |

---

## /locations
Filenames match `image` in `src/data/locations.ts`; alt = `imageAlt`.
`solar-installation-texas.jpg`, `solar-installation-california.jpg`,
`solar-installation-florida.jpg`, `solar-installation-arizona.jpg`,
`solar-installation-nevada.jpg`, `solar-installation-colorado.jpg`,
`solar-installation-north-carolina.jpg`, `solar-installation-georgia.jpg`,
plus `locations-hero.jpg`.

**Per-location SEO template:**
- **Title:** `Solar Installation <State> | Apex Solar`
- **Caption:** `<City> solar installation`
- **Description:** A home/business in `<State>` with a rooftop solar array, referencing the local climate and incentives.
- **Keywords:** the location's `seo.keywords` array (e.g. `solar installation texas, austin solar`).
