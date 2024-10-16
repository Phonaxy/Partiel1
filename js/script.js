async function fetchCharacters(house = null) {
    const result = await fetch("https://hp-api.onrender.com/api/characters/students");
    const charactersList = await result.json();

    let filteredCharacters = house ? charactersList.filter((char) => char.house === house).slice(0, 8) : charactersList.slice(0, 12);

    let container = document.querySelector(".characters");
    container.innerHTML = "";

    filteredCharacters.forEach((char) => {
        let charDiv = document.createElement("div");

        charDiv.innerHTML = `
            <a href="details.html?id=${char.id}">
                <img 
                    src="${char.image ? char.image : "./../images/characters/default.jpg"}" 
                    alt="${char.name}"  
                />
                <p>${char.name}</p>
            </a>
        `;
        container.appendChild(charDiv);
    });
}

fetchCharacters();

