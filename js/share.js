(function () {
  var copyButtons = document.querySelectorAll("[data-share-url]");

  copyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var url = button.getAttribute("data-share-url");
      var label = button.querySelector("span");
      var originalText = label ? label.textContent : "";

      function showCopied() {
        button.classList.add("is-copied");
        if (label) {
          label.textContent = "Copied";
        }

        window.setTimeout(function () {
          button.classList.remove("is-copied");
          if (label) {
            label.textContent = originalText;
          }
        }, 1800);
      }

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(url).then(showCopied);
        return;
      }

      window.prompt("Copy this link:", url);
    });
  });
})();
