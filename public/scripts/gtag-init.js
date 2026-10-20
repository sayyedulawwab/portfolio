// Loaded from BaseLayout.astro with the GA measurement ID in data-ga-id.
const gaId = document.currentScript?.dataset.gaId;
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
if (gaId) gtag('config', gaId);
