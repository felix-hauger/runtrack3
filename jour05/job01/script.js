const connectButton = document.querySelector("#connect"),
    registerButton = document.querySelector("#register");

console.log(connectButton, registerButton);

const connect = function() {
    fetch('connect.php')
        .then((response) => {
            // console.log(response);
            if (response.ok) {
                return response.text();
            }
        })
        .then((html) => {
            const container = document.querySelector('#form-container');
            console.log(container);
            container.innerHTML = html;
            console.log(html);
    });
}

const register = function() {
    fetch('register.php')
        .then((response) => {
            // console.log(response);
            if (response.ok) {
                return response.text();
            }
        })
        .then((html) => {
            const container = document.querySelector('#form-container');
            console.log(container);
            container.innerHTML = html;
            console.log(html);
    });
}


connectButton.addEventListener("click", connect);
registerButton.addEventListener("click", register);