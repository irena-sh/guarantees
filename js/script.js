var acc = document.getElementsByClassName("questions__btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var menuElem = document.getElementById('language');
var titleElem = menuElem.querySelector('.language__link');

titleElem.onclick = function() {
  menuElem.classList.toggle('open');
}

var langElem = document.getElementById('sorting__checkbox');
var nameElem = langElem.querySelector('.sorting__checkbox--link');

nameElem.onclick = function() {
  langElem.classList.toggle('show');
}

document.querySelector('.btn').onclick = loader;
/*====================================
*     LOADER
======================================*/
function loader(_success) {
    var obj = document.querySelector('.preloader'),
    inner = document.querySelector('.preloader_inner'),
    page = document.querySelector('.price__count-btn');
    obj.classList.add('show');
    page.classList.remove('show');
    var w = 0,
        t = setInterval(function() {
            w = w + 1;
            inner.textContent = w+'%';
            if (w === 100){
                obj.classList.remove('show');
                page.classList.add('show');
                clearInterval(t);
                w = 0;
                if (_success){
                    return _success();
                }
            }
        }, 20);
}
