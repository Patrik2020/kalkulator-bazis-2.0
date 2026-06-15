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
<link rel="icon" type="image/png" href="${basePath}/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="${basePath}/favicon.svg" />
<link rel="shortcut icon" href="${basePath}/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="${basePath}/apple-touch-icon.png" />
<meta name="apple-mobile-web-app-title" content="Kalkulátor Bázis" />
<link rel="manifest" href="${basePath}/site.webmanifest" />
`;

document.head.insertAdjacentHTML("beforeend", headContent);
