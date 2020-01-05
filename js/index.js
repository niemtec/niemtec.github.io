particlesJS("particles-js", {
    particles: {
        number: {value: 10, density: {enable: true, value_area: 100}},
        color: {value: "#2e9cca"},
        shape: {
            type: "circle",
            stroke: {width: 0, color: "#2e9cca"},
            polygon: {nb_sides: 5},
            // image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
            value: 0.9,
            random: false,
            anim: {enable: false, speed: 10, opacity_min: 0.2, sync: false}
        },
        size: {
            value: 3,
            random: true,
            anim: {enable: true, speed: 5, size_min: 1.5, sync: false}
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#2e9cca",
            opacity: 0.6,
            width: 0.70
        },
        move: {
            enable: true,
            speed: 0.9,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce",
            bounce: true,
            attract: {enable: false, rotateX: 100, rotateY: 100}
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {enable: true, mode: "grab"},
            onclick: {enable: true, mode: "push"},
            resize: true
        },
        modes: {
            grab: {distance: 150, line_linked: {opacity: 0.5}},
            bubble: {distance: 150, size: 40, duration: 2, opacity: 8, speed: 3},
            repulse: {distance: 150, duration: 0.4},
            push: {particles_nb: 1},
            remove: {particles_nb: 2}
        }
    },
    retina_detect: true
});
// var count_particles, stats, update;
// stats = new Stats();
// stats.setMode(0);
// stats.domElement.style.position = "absolute";
// stats.domElement.style.left = "0px";
// stats.domElement.style.top = "0px";
// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector(".js-count-particles");
update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);
