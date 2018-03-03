"use strict";

document.addEventListener("click", function (event) {
    var target = event.target;
    if (target.dataset.rola !== "tab") return;

    [].forEach.call(target.parentElement.children, function (tab) {
        tab.classList.remove("active");
    });
    target.classList.add("active");

    var content = document.querySelector("." + target.dataset.view);
    if (content) {
        [].forEach.call(content.parentElement.children, function (child) {
            child.style.display = "none";
        });
        content.style.display = "block";
        if (content.classList.contains("rank-view")) {
            lazyload(document.querySelectorAll(".lazyload"));
        }
    }
});
//# sourceMappingURL=navbar.js.map