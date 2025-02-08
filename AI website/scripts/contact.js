const submitBtn = document.getElementById('submit-btn');
const closeBtn = document.getElementById('close-btn');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');

submitBtn.addEventListener('click', () => {
    setTimeout(() => {
        overlay.style = "display : block";
        popup.style = "transform: translate(-50%, -50%) scale(1)";
    }, 500);
});

closeBtn.addEventListener('click', () => {
    overlay.style = "display : none";
    popup.style = "transform: translate(-50%, -50%) scale(0)";
});
