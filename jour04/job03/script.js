document.addEventListener('DOMContentLoaded', () => {
    const filterButton = document.querySelector('#filter');
    const filter = function() {
        let id = document.querySelector('#id').value,
            name = document.querySelector('#name').value,
            type = document.querySelector('#type').value;

        console.log(id, name, type);
        fetch('pokemon.json')
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((json) => {
                console.log(json);
                // for (let i = 0; i < json.length; i++) {
                //     console.log(json[i].name.french);
                // }
            });
    }

    filterButton.addEventListener('click', filter);
});
