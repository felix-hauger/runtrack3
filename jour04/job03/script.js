document.addEventListener('DOMContentLoaded', () => {
    const filterButton = document.querySelector('#filter');
    const filter = function() {
        let id = document.querySelector('#id').value,
            name = document.querySelector('#name').value,
            type = document.querySelector('#type').value;
        let filters = {
            "id": document.querySelector('#id').value,
            "name": document.querySelector('#name').value,
            "type": document.querySelector('#type').value
        };
        // console.log(id, name, type);
        fetch('pokemon.json')
            .then((response) => {
                // console.log(response);
                // console.log(id);
                return response.json();
            })
            .then((json) => {
                // console.log(json);
                // if (id >= 1) {
                //     console.log(json[filters.id-1].name.french);
                //     console.log(filters.id);
                // }
                // console.log(filters);
                // console.log(filters.id);
                // console.log(json[filters.id - 1].name.french);
                for (const filter in filters) {
                    if (Object.hasOwnProperty.call(filters, filter)) {
                        const element = filters[filter];
                        console.log(typeof element);
                    }
                }

                for (let i = 0; i < json.length; i++) {
                    // console.log(Object.entries(json[i]));
                    // console.log(json[i]);
                    // console.log(filters.id - i)

                    if (filters.id != '' && i == filters.id - 1) {
                        console.log(json[i].name.french);
                        let entry = document.createElement('tr'),
                            id = document.createElement('td'),
                            name;

                    }
                    if (filters.type != '' && Object.values(json[i].type).includes(filters.type)) {
                        // console.log()
                        console.log(json[i].name.french);
                        let entry = document.createElement('tr'),
                            id = document.createElement('td'),
                            name;

                    }
                    if (filters.name != '' && Object.values(json[i].name).includes(filters.name)) {
                        console.log(json[i].name.french);
                    }
                        
                    
                }
            });
    }

    filterButton.addEventListener('click', filter);
});
