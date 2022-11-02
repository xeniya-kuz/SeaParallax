// $(document).ready(function () {
//     $('.sea-parallax__li').addClass('layer');
//     $('.sea-parallax__list').parallax();
//     $('.sea-wrapper').addClass('active');
// });

///////////////////////////////////////////////////////////////////

"use strict"

document.addEventListener("DOMContentLoaded", function () {
    const parallax = document.querySelector('.sea-parallax__list');
    const wrapper_active = document.querySelector('.sea-wrapper').classList.add("active");

    if (parallax) {
        let positionX = 0, positionY = 0;
        let li = document.querySelectorAll('.sea-parallax__li');

        function setMouseParallaxStyle() {
            li.forEach(element => {
                let speed = element.getAttribute('data-depth');
                element.style.transform = `translate(${positionX * speed / 5}px, -${positionY * speed / 7}px)`;
            });

            requestAnimationFrame(setMouseParallaxStyle);
        }

        setMouseParallaxStyle();

        parallax.addEventListener('mousemove', function (event) {
            positionX = event.pageX;
            positionY = event.pageY;
        });
    }
}, false);
