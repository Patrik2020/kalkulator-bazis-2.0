const pathParts = window.location.pathname.split("/").filter(Boolean);
const sectionIndex = ["kalkulatorok", "landing-pages"].reduce((found, section) => {
  const index = pathParts.indexOf(section);
  return found === -1 || (index !== -1 && index < found) ? index : found;
}, -1);
const rootParts =
  sectionIndex > -1
    ? pathParts.slice(0, sectionIndex)
    : pathParts.length > 1
      ? pathParts.slice(0, 1)
      : [];
const projectRoot = rootParts.length ? `/${rootParts.join("/")}` : "";
const basePath = `${projectRoot}/favicon`;

const headContent = `
<link rel="icon" type="image/png" href="${basePath}/favicon-16x16.png" sizes="16x16" />
<link rel="icon" type="image/png" href="${basePath}/favicon-32x32.png" sizes="32x32" />
<link rel="icon" type="image/png" href="${basePath}/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="${basePath}/favicon.svg" />
<link rel="shortcut icon" href="${basePath}/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="${basePath}/apple-touch-icon.png" />
<meta name="application-name" content="KalkulátorBázis" />
<meta name="apple-mobile-web-app-title" content="KalkulátorBázis" />
<meta name="theme-color" content="#0b66f2" />
<link rel="manifest" href="${basePath}/site.webmanifest" />
`;

document.head.insertAdjacentHTML("beforeend", headContent);
