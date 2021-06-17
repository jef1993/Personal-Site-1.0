const enableLogo = function (idArr, btn) {
  idArr.forEach((el) => {
    document.querySelector(`#${el}`).classList.toggle("enable");
  });

  document.querySelector(`#${btn}`).classList.toggle("btn-enable");
};

document.querySelector("#frontend").addEventListener("click", function () {
  enableLogo(["js", "html5", "css3", "bs5", "jquery"], "frontend");
});

document.querySelector("#backend").addEventListener("click", function () {
  enableLogo(["python", "mongodb", "express", "node"], "backend");
});
