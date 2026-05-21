(function () {
  var copyButtons = document.querySelectorAll("[data-share-url]");
  var nativeShareLinks = document.querySelectorAll("[data-native-share]");

  nativeShareLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      var url = link.getAttribute("data-share-url");
      var title = link.getAttribute("data-share-title") || document.title;

      if (!navigator.share || !url) {
        return;
      }

      event.preventDefault();

      navigator.share({
        title: title,
        url: url
      }).catch(function () {
        window.location.href = link.href;
      });
    });
  });

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
