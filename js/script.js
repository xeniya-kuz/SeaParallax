// $(document).ready(function () {
//     $('.sea-parallax__li').addClass('layer');
//     $('.sea-parallax__list').parallax();
//     $('.sea-wrapper').addClass('active');
// });

///////////////////////////////////////////////////////////////////

"use strict"

document.addEventListener("DOMContentLoaded", function () {
    const parallax = document.querySelector('.sea-parallax__list');// /page  /sea-parallax
    const wrapper = document.querySelector('.sea-wrapper');
    wrapper.classList.add("active");

    if (parallax) {

        let positionX = 0, positionY = 0;
        let coordX = 0, coordY = 0;

        function setMouseParallaxStyle() {
            const distX = coordX - positionX;
            const distY = coordY - positionY;

            let speed = 0.5;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            let li = document.querySelectorAll('.sea-parallax__li');
            li.forEach(element => {
                element.style.transform = `translate(${positionX * element.getAttribute('data-depth') / 5}px, -${positionY * element.getAttribute('data-depth') / 7}px)`;
            });

            requestAnimationFrame(setMouseParallaxStyle);
        }


        setMouseParallaxStyle();

        parallax.addEventListener('mousemove', function (event) {
            coordX = event.pageX;
            coordY = event.pageY;
        });
    }
}, false);
