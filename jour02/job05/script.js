document.addEventListener('DOMContentLoaded', () => {
    const changeColor = function () {
        const footer = document.querySelector('footer'),
              html = document.querySelector('html');

        // check the level of scroll of a scrollable element
        let scrollLevel = html.scrollTop;

        if (scrollLevel <= 900) {
            footer.style.background = 'lightcoral';
        } else if (scrollLevel > 900 && scrollLevel <= 1800) {
            footer.style.background = 'lightblue';
        } else if (scrollLevel > 1800 && scrollLevel <= 2700) {
            footer.style.background = 'brown';
        } else if (scrollLevel > 2700) {
            footer.style.background = 'royalblue';
        }
    }

    document.addEventListener('scroll', changeColor);
});