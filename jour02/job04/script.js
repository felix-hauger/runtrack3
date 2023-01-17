document.addEventListener('DOMContentLoaded', () => {
    const keylogger = function (event) {
        const htmlKeylogger = document.querySelector('#keylogger');

        // test length because tab, backspaces & other key are captured by keydown
        if (event.key.length == 1 && /['a-zA-Z']/.test(event.key)) {
            htmlKeylogger.value += event.key;
        }
    }

    document.addEventListener('keydown', keylogger);
});