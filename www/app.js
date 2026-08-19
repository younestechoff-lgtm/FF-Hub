document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const splash = document.getElementById("splash");
    const app = document.getElementById("app");

    splash.classList.add("hide");

    setTimeout(function () {
      splash.style.display = "none";
      app.classList.remove("hidden");
    }, 500);

  }, 2000);
});

function openCodes() {
  window.location.href = "codes.html";
}

function openTools() {
  window.location.href = "tools.html";
}

function openTips() {
  window.location.href = "tips.html";
}

function openNews() {
  window.location.href = "news.html";
}
