(function () {
    let toggleRedirectBtn = document.getElementById("toggleRedirect");

    function updateToggleRedirectBtn(isEnabled) {
        toggleRedirectBtn.classList.remove("warning", "success");
        if (isEnabled) {
            toggleRedirectBtn.classList.add("warning");
            toggleRedirectBtn.textContent = "Disable redirecting temporarily";
        } else {
            toggleRedirectBtn.classList.add("success");
            toggleRedirectBtn.textContent = "Re-enable redirecting";
        }
    }

    browserAPI.api.storage.local.get({isEnabled: true}, data => {
        updateToggleRedirectBtn(data.isEnabled);
    });

    toggleRedirectBtn.addEventListener("click", () => {
        browserAPI.sendMessage({action: "toggleEnabled"}, updateToggleRedirectBtn);
    });
})();
