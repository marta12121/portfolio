document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', function() {
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });

    // Typed text effect
    const typedText = document.getElementById('typed-text');
    const textArray = ["Web Developer", "Designer", "Freelancer"];
    let textIndex = 0;
    let charIndex = 0;
    let typingDelay = 200;
    let erasingDelay = 100;
    let newTextDelay = 2000;

    function type() {
        if (charIndex < textArray[textIndex].length) {
            typedText.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textIndex++;
            if (textIndex >= textArray.length) textIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    setTimeout(type, newTextDelay + 250);

    // Counter Animation
    // const counters = document.querySelectorAll('.counterwrap__counter');
    // counters.forEach(counter => {
    //     const updateCount = () => {
    //         const target = +counter.getAttribute('data-speed');
    //         const count = +counter.innerText;
    //         const speed = target / 200;

    //         if (count < target) {
    //             counter.innerText = Math.ceil(count + speed);
    //             setTimeout(updateCount, 1);
    //         } else {
    //             counter.innerText = target;
    //         }
    //     };

    //     updateCount();
    // });
});