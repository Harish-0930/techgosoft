document.querySelectorAll('.faq-item').forEach(item => {
    const toggleIcon = item.querySelector('.toggle-icon');
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        const answer = item.querySelector('.answer');

        if (item.classList.contains('active')) {
            answer.style.maxHeight = "fit-content"
        } else {
            answer.style.maxHeight = 0;
        }
    });
});
