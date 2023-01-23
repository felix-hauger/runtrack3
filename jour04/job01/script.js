document.addEventListener('DOMContentLoaded', () => {
    const myButton = document.querySelector('button'),
        displayExpression = function () {
            // fetch infos from file into a response
            fetch('expression.txt')
                .then((response) => {
                    console.log(response);
                    // if the request is fetched return a text, can also return a blob for a file non readable by js, like an image
                    if (response.ok) {
                        return response.text();
                    }
                })
                // put the returned text into the document
                .then((text) => {
                    const myParagraph = document.createElement('p'),
                          body = document.querySelector('body');
                    myParagraph.innerText = text;
                    body.append(myParagraph);
                    
                });
    }

    myButton.addEventListener('click', displayExpression);
});