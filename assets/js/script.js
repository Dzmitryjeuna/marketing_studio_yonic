const links = document.querySelectorAll('.nav__list-link');

links.forEach((link) => {
  link.addEventListener('click', () => {

    links.forEach((otherLink) => {
      if (otherLink !== link) {
        otherLink.classList.remove('nav__list-link--active');
      }
    });

    link.classList.toggle('nav__list-link--active');
  });
});

const menuBtn = document.querySelector('.nav-btn');
const menu = document.querySelector('.header__nav-list');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('header__nav-list--active');
});

const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  }
});

const animItems = document.querySelectorAll(`.--anim-items`)
if (animItems.length > 0) {
    window.addEventListener(`scroll`, animOnScroll)

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index]
            const animItemHeight = animItem.offsetHeight
            const animItemOffSet = offset(animItem).top
            const animStart = 4
            let animItemPoint = window.innerHeight - animItemHeight / animStart
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }
            if ((pageYOffset > animItemOffSet - animItemPoint) && pageYOffset < (animItemOffSet + animItemHeight)) {
                animItem.classList.add(`--active`)
            } else {
                // if (!(animItem.classList.contains(`--anim-no-hide`))) {
                    // animItem.classList.remove(`--active`)
                // }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect()
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    setTimeout(() => {
        animOnScroll()
    }, 300)
}