document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#button');
    let addOne = function () {
        const countParagraph = document.querySelector('#count');
        let count = parseInt(countParagraph.textContent);
        count++;
        countParagraph.textContent = count;
    }

    button.addEventListener('click', addOne);
});