"use strict";

{
    const students = [
        {
            name: "BJ Clark",
            from: "Grand Rapids",
            favoriteFood: "Pizza",
            hobbies: ["running", "moutain biking", "reading"]
        },
        {
            name: "Blair Brown",
            from: "",
            favoriteFood: "",
            hobbies: []

        },
        {
            name: "Tiia Kansa",
            from: "",
            favoriteFood: "",
            hobbies: []

        },
        {
            name: "Alessia	Hoey",
            from: "",
            favoriteFood: "",
            hobbies: []

        },
        {
            name: "Andrea	Flanders",
            from: "",
            favoriteFood: "",
            hobbies: []

        },
        {
            name: "April	Topolewski",
            from: "",
            favoriteFood: "",
            hobbies: []

        },
        {
            name: "Ashley	Cane",
            from: "",
            favoriteFood: "",
            hobbies: []

        },
        {
            name: "Asia	Watts",
            from: "Detroit",
            favoriteFood: "Pizza",
            hobbies: [shopping, reading]

        },
        {
            name: "Carol	Ferenc",
            from: "",
            favoriteFood: "",
            hobbies: []

        },
        {
            name: "Charissa	Wersen",
            from: "",
            favoriteFood: "",
            hobbies: []

        },
        {
            name: "Cherina	Brownlee",
            from: "",
            favoriteFood: "",
            hobbies: []

        },
        {
            name: "Christina	Evans",
            from: "",
            favoriteFood: "",
            hobbies: []

        },
        {
            name: "Deborah	Giammarco",
            from: "",
            favoriteFood: "",
            hobbies: []

        },
        {
            name: "Elizabeth	Collacott",
            from: "",
            favoriteFood: "",
            hobbies: []

        },
        {
            name: "Hannah	Crisler",
            from: "",
            favoriteFood: "",
            hobbies: []

        },
        {
            name: "Jamie	Nolan",
            from: "",
            favoriteFood: "",
            hobbies: []

        },
        {
            name: "Katie	Vancleve",
            from: "",
            favoriteFood: "",
            hobbies: []

        },
        {
            name: "Kim	Hicks",
            from: "",
            favoriteFood: "",
            hobbies: []

        },
        {
            name: "Kristina	Kuzmanovski",
            from: "",
            favoriteFood: "",
            hobbies: []

        },
        {
            name: "Rachel	Szczembara",
            from: "",
            favoriteFood: "",
            hobbies: []

        },
        {
            name: "Rose	Peruski",
            from: "",
            favoriteFood: "",
            hobbies: []

        },
        {
            name: "Shannon	Hoey",
            from: "",
            favoriteFood: "",
            hobbies: []

        },
        {
            name: "Stacey	Folsom",
            from: "",
            favoriteFood: "",
            hobbies: []

        },
        {
            name: "Stephanie	Wahl",
            from: "",
            favoriteFood: "",
            hobbies: []

        },
        {
            name: "Suguna	Mitrowski",
            from: "",
            favoriteFood: "",
            hobbies: []

        },
        {
            name: "Tiffany	Rathbun",
            from: "",
            favoriteFood: "",
            hobbies: []

        },
        {
            name: "Venus	Wilborn",
            from: "",
            favoriteFood: "",
            hobbies: []

        },
        {
            name: "Zina	Haddad",
            from: "",
            favoriteFood: "",
            hobbies: []

        },
    ];

    const bios = () => {
        for (const student of students) {
            let bio = `Hello! My name is ${student.name}. I am from ${student.from}. My favorite food is: ${student.favoriteFood}. My hobbies include:`;

            student.hobbies.forEach((hobby, index) => {
                bio += ` ${hobby}`;
                
                if (index !== student.hobbies.length -1 ) {
                    bio += `,`;
                } else {
                    bio += '.';
                }

                if (index === student.hobbies.length - 2) {
                    bio += ' and ';
                }



            })

            const p = document.createElement('p');
            p.innerHTML = bio;
            document.getElementById('container').appendChild(p);
            console.log(bio);
        }

        return
    }

    bios();
}