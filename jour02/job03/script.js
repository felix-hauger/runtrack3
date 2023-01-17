document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#button'),
        addOne = function () {
            const count = document.querySelector('#count');
            count.textContent = parseInt(count.textContent) + 1;
        }

    button.addEventListener('click', addOne);
});