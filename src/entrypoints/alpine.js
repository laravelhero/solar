// Custom Alpine entrypoint. The @astrojs/alpinejs integration calls the default
// export with the Alpine instance before it starts — register stores/plugins here.
export default (Alpine) => {
  Alpine.store('ui', {
    mobileMenu: false,
    scrolled: false,
    toggleMobile() {
      this.mobileMenu = !this.mobileMenu;
      document.documentElement.classList.toggle('overflow-hidden', this.mobileMenu);
    },
    closeMobile() {
      this.mobileMenu = false;
      document.documentElement.classList.remove('overflow-hidden');
    },
  });

  // Track scroll state for the sticky-header glass transition.
  const onScroll = () => {
    Alpine.store('ui').scrolled = window.scrollY > 24;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  document.addEventListener('alpine:initialized', onScroll);
};
