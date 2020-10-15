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
            from: "Farmington Hills",
            favoriteFood: "Anything with Nutella",
            hobbies: ['cooking', 'videogames', 'reading']

        },
        {
            name: "Andrea Flanders",
            from: "Ann Arbor",
            favoriteFood: "Pizza",
            hobbies: ["bowling", "hiking", "dancing"]

        },
        {
            name: "April	Topolewski",
            from: "Warren",
            favoriteFood: "Enchiladas",
            hobbies: ['Outdoors/Nature', 'Soccer', 'D&D', 'Home Projects']

        },
        {
            name: "Ashley	Cane",
            from: "",
            favoriteFood: "",
            hobbies: []

        },
        {
            name: "Asia	Watts",
            from: "",
            favoriteFood: "",
            hobbies: []

        },
        {
            name: "Carol	Ferenc",
            from: "",
            favoriteFood: "",
            hobbies: []

        },
        {
            name: "Charissa	Wersen",
            from: "Brooklyn",
            favoriteFood: "Nachos",
            hobbies: ["hiking," "cooking," "netflix"]

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
            name: "EliLizabeth	Collacott",
            from: "FCA Stellantis",
            favoriteFood: "Key Lime Pie",
            hobbies: ['Quilting']

        },
        {
            name: "Hannah	Crisler",
            from: "",
            favoriteFood: "",
            hobbies: []

        },
        {
            name: "Jamie	Nolan",
            from: "Ferndale",
            favoriteFood: "Tacos",
            hobbies: ['travel', 'writing', 'music']

        },
        {
            name: "Katie	Vancleve",
            from: "Clawson",
            favoriteFood: "Tacos",
            hobbies: ["Painting", "sudoku", "softball"]

        },
        {
            name: "Kim	Hicks",
            from: "Detroit",
            favoriteFood: "Seafood",
            hobbies: ['spending time with family', 'travel', 'crafting']

        },
        {
            name: "Kristina	Kuzmanovski",
            from: "",
            favoriteFood: "",
            hobbies: []

        },
        {
            name: "Rachel	Szczembara",
            from: "Garden City, MI",
            favoriteFood: "Tacos",
            hobbies: ["Yoga", "Watching cat videos", "Cooking"]

        },
        {
            name: "Rose	Peruski",
            from: "South Lyon",
            favoriteFood: "Pizza or Pierogie",
            hobbies: ["Cat Foster Mom", "Rewatching Schitt's Creek and The Office ad nausuem :)"]

        },
        {
            name: "Shannon	Hoey",
            from: "Clarence, NY",
            favoriteFood: "mashed potatoes",
            hobbies: ['snowboarding', 'sewing', 'biking']

        },
        {
            name: "Stacey Folsom",
            from: "East Lansing",
            favoriteFood: "Chips and dip",
            hobbies: ["reading", "sewing", "playing with my kid"]

        },
        {
            name: "Stephanie	Wahl",
            from: "Grand Rapids",
            favoriteFood: "Chocolate anything",
            hobbies: ["enjoy time with family", "nature walks", "playing at the dog park"]

        },
        {
            name: "Suguna	Mitrowski",
            from: "",
            favoriteFood: "",
            hobbies: []

        },
        {
            name: "Tiffany	Rathbun",
            from: "Waterford",
            favoriteFood: "Banana Creme Pie",
            hobbies: ["Video Games", "Painting"]

        },
        {
            name: "Venus	Wilborn",
            from: "Detroit, MI",
            favoriteFood: "Tacos",
            hobbies: [Crafting]

        },
        {
            name: "Zina	Haddad",
            from: "Troy, MI",
            favoriteFood: "Pasta",
            hobbies: [Painting]

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
