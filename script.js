document.addEventListener('DOMContentLoaded', () => {
    const flipCardInner = document.querySelector('.flip-card-inner');

    // Flip the card on click
    flipCardInner.addEventListener('click', () => {
        const isFlipped = flipCardInner.style.transform === 'rotateY(180deg)';
        flipCardInner.style.transform = isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)';
    });

    // Auto-flip after 10 seconds
    setTimeout(() => {
        flipCardInner.style.transform = 'rotateY(180deg)';
    }, 10000); // 10000 ms = 10 seconds
});
