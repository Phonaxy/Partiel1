    async function fetchCharacters(house = null) {
        const response = await fetch("https://hp-api.onrender.com/api/characters");
        const characterList = await response.json();

        let selectedCharacters = house ? characterList.filter((char) => char.house === house).slice(0, 12) : characterList.slice(0, 12);

        let container = document.querySelector(".characters");
        container.innerHTML = "";

        selectedCharacters.forEach((char) => {
            let charDiv = document.createElement("div");

            charDiv.addEventListener("mouseenter", (e) => {
                let hoveredImg = e.target.querySelector("img");
                hoveredImg.style.borderColor = assignHouseColor(char.house);
            });

            charDiv.addEventListener("mouseleave", (e) => {
                let hoveredImg = e.target.querySelector("img");
                hoveredImg.style.borderColor = "#b99049";
            });

            charDiv.innerHTML = `
                <a href="details.html?id=${char.id}">
                    <img src="${char.image ? char.image : "./../images/characters/troll.jpg"}" alt="${char.name}" />
                    <p>${char.name}</p>
                </a>
            `;

            container.appendChild(charDiv);
        });
    }

    function generateHouseButtons() {
        let houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

        let houseContainer = document.querySelector(".houses");

        houses.forEach((house) => {
            let houseDiv = document.createElement("div");

            houseDiv.addEventListener("click", () => {
                fetchCharacters(house);
            });

            houseDiv.innerHTML = `
                <img src="./images/logo/${house}.png" alt="${house}" />
            `;

            houseContainer.appendChild(houseDiv);
        });
    }

    function assignHouseColor(house) {
        switch (house) {
            case "Gryffindor":
                return "#b71713";
            case "Hufflepuff":
                return "#e1b50c";
            case "Ravenclaw":
                return "#078cb1";
            case "Slytherin":
                return "#124b10";
            default:
                return "#b99049";
        }
    }

    fetchCharacters();
    generateHouseButtons();
