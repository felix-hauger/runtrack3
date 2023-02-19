document.addEventListener('DOMContentLoaded', () => {
    const konami = function(event) {
        // to compare with user input using session variable count as an index
        const konamiCodeArray = [
            'ArrowUp', 
            'ArrowUp',
            'ArrowDown',
            'ArrowDown',
            'ArrowLeft',
            'ArrowRight',
            'ArrowLeft',
            'ArrowRight',
            'b',
            'a'
        ];

        // set the variable in the session storage
        if (sessionStorage.getItem('count') == null) {
            sessionStorage.setItem('count', 0);
        } else {
            // if the input correspond to the count of the array
            if (event.key == konamiCodeArray[sessionStorage.getItem('count')]) {

                // increment session variable
                sessionStorage.setItem('count' , parseInt(sessionStorage.getItem('count')) + 1)
            } else {
                // else reset count variable
                sessionStorage.setItem('count', 0);
            }
        }

        // if all inputs match the count will be equal to array size (10)
        if (sessionStorage.getItem('count') == 10) {
            console.log('KOMONEY');
            const body = document.querySelector('body'),
                myTitle = document.createElement('h1');
            myTitle.innerHTML = 'Mon beau titre';
            body.append(myTitle);
            document.querySelector('*').style = 'background-color: #336699; color: white;';
        }
    }

    document.addEventListener('keydown', konami);
});