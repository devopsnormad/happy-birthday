document.addEventListener("DOMContentLoaded", function () {
    // Confetti Creation Logic
    const confettiContainer = document.querySelector(".confetti-container");

    function createConfettiPiece() {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confettiContainer.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }

    setInterval(createConfettiPiece, 200);

    const fireworksSound = document.getElementById("fireworks-sound");

    // Attempt to play the sound on page load
    fireworksSound.play().catch(error => {
      console.log("Autoplay was prevented. User interaction needed:", error);

      // Add an event listener for user interaction
      document.addEventListener("click", () => {
        fireworksSound.play();
      }, { once: true }); 
    });

    // Carousel for h1
    const carouselH1 = document.querySelector(".carousel-h1");
    const texts = [
        "Happy BIG 30 BABY",
        "Wishing you a fantastic year!",
        "You're the best!",
        "Celebrating you today!",
        "Happy Birthday my love!"
    ];
    let currentIndex = 0;

    function changeText() {
        carouselH1.textContent = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
        setTimeout(changeText, 3000); 
    }

    changeText();
    



    // Event listener for card (amazing things)
    card.addEventListener("click", function () {
        if (currentIndexPopup < amazingThings.length) {
            card.textContent = amazingThings[currentIndexPopup];
            currentIndexPopup++;
        } else {
            card.classList.add("hidden");
            prayer.classList.remove("hidden");
            popupMessage.textContent = ""; 
        }
    });

    
});
let popup = document.getElementById('popup');
let swiper;

function openPopup() {
    popup.classList.add('open-popup');
    popup.classList.remove('hidden');
    
    // Delay Swiper initialization to ensure popup is visible
    setTimeout(() => {
        if (!swiper) {
            swiper = new Swiper('.mySwiper', {
                grabCursor: true,
                effect: 'creative',
                loop: false,
                creativeEffect: {
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                },
                on: {
                    slideChange: function () {
                        const swiperInstance = this;
                        if (swiperInstance.activeIndex === swiperInstance.slides.length - 1) {
                            swiperInstance.allowSlideNext = false; 
                        } else {
                            swiperInstance.allowSlideNext = true; 
                        }
                    }
                }
            });
        } else {
            swiper.update();
        }
    }, 100);
}

function closePopup() {
    popup.classList.remove('open-popup');
    setTimeout(() => {
        popup.classList.add('hidden');
    }, 400); 
}
