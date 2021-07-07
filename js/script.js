
const burgerBtn = document.querySelector(".icon-burger-top");

burgerBtn.onclick = function () {
  this.classList.toggle("icon-burger-top--active");
}

let scrolTop = document.querySelector('.scrol-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 1000) {
        scrolTop.classList.add('active');
    } else {
        scrolTop.classList.remove('active');
    }
})





