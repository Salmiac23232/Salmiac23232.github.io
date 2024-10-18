window.onload = function () {
    Array.from(document.getElementsByClassName("menu-item"))
        .forEach((item, index) => {
            item.onmouseover = () => {
                menu.dataset.activeIndex = index;
            }
        }); 
    loaded = true;
};

