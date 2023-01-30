document.addEventListener('DOMContentLoaded', () => {
    const filterButton = document.querySelector('#filter');
    const filter = function () {
        let filters = {
            "id": document.querySelector('#id').value,
            "name": document.querySelector('#name').value,
            "type": document.querySelector('#type').value
        };
        const tbody = document.querySelector('#pkmn-list tbody');

        // remove tbody to append a new one
        if (!!tbody) {
            tbody.remove();
        }

        // get a response
        fetch('pokemon.json')
            // use result with anonymous function
            .then((response) => {
                // convert response to json format
                return response.json();
            })
            .then((json) => {
                // for (const f in filters) {
                //     if (Object.hasOwnProperty.call(filters, f)) {
                //         const filter = filters[f];
                //         console.log(typeof filter);
                //     }
                // }
                const table = document.querySelector('#pkmn-list'),
                    createTbody = document.createElement('tbody');

                for (let i = 0; i < json.length; i++) {

                    // FILTER AND

                    let idFiltered = filters.id == '' || i == filters.id - 1,
                        nameFiltered = filters.name == '' || Object.values(json[i].name).includes(filters.name),
                        typeFiltered = filters.type == '' || json[i].type.includes(filters.type);

                    if (idFiltered && nameFiltered && typeFiltered) {
                        const createTr = document.createElement('tr'),
                            stats = {
                                "id": json[i].id,
                                "name": json[i].name.french,
                                // test if there is a second type
                                "type": typeof json[i].type[1] != 'undefined' ? json[i].type[0] + ', ' + json[i].type[1] : json[i].type[0],
                                "hp": json[i].base.HP,
                                "attack": json[i].base.Attack,
                                "defense": json[i].base.Defense,
                                "spAttack": json[i].base['Sp. Attack'],
                                "spDefense": json[i].base['Sp. Defense'],
                                "speed": json[i].base.Speed,
                            };

                        console.log(json[i].type[1]);

                        for (const s in stats) {
                            if (Object.hasOwnProperty.call(stats, s)) {
                                // const stat = stats[s];
                                const createTd = document.createElement('td');
                                createTd.innerHTML = stats[s];
                                createTr.append(createTd);
                            }
                        }
                        createTbody.append(createTr);

                    }

                    // console.log(filteredList);


                    // FILTER OR

                    // if (filters.id != '' && i == filters.id - 1) {
                    //     console.log(json[i].name.french);
                    // }

                    // if (filters.type != '' && Object.values(json[i].type).includes(filters.type)) {
                    //     // console.log()
                    //     console.log(json[i].name.french);
                    //     let entry = document.createElement('tr'),
                    //         id = document.createElement('td'),
                    //         name;
                    // }
                    // if (filters.name != '' && json[i].type.includes(filters.type)) {
                    //     console.log(json[i].name.french);
                    // }
                }
                // tableBody.innerHTML = filteredList;
                table.append(createTbody);



            });
    }

    filterButton.addEventListener('click', filter);
});
