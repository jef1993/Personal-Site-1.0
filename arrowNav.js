const paths = ["index.html", "about.html", "skills.html", "projects.html"];

const host = document.location.hostname;
const repo = document.location.href.split("/")[3];

const pages = paths.map((el) => `https://${host}/${repo}/${el}`);

let currentPage = `${window.location.href}`;

if (currentPage == `https://${host}/${repo}/`) currentPage += "index.html";

const currentIndex = pages.indexOf(currentPage);

document.addEventListener("keydown", function (e) {
  if (e.code == "ArrowRight" && currentIndex < pages.length - 1)
    window.location.href = pages[currentIndex + 1];
  if (e.code == "ArrowLeft" && currentIndex > 0)
    window.location.href = pages[currentIndex - 1];
});
