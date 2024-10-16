async function fetchCharacterData() {
    const currentUrl = new URL(window.location.href);
    const parameters = currentUrl.searchParams;
    const characterId = parameters.get("id");

    const responseData = await fetch(`https://hp-api.onrender.com/api/character/${characterId}`);
    const characterDetails = await responseData.json();

    const character = characterDetails[0];

    const detailsContainer = document.querySelector(".perso__right");
    detailsContainer.innerHTML = "";
    document.getElementById("character-name").textContent = character.name;
    document.getElementById("character-image").src = character.image !== "" ? character.image : "./images/characters/troll.jpg";
    detailsContainer.innerHTML = `
        <div>
            <p class="attr">Gender</p>
            <p>${character.gender}</p>
        </div>
        <div>
            <p class="attr">Eye Color</p>
            <p>${character.eyeColour}</p>
        </div>
        <div>
            <p class="attr">Hair Color</p>
            <p>${character.hairColour}</p>
        </div>
        <div>
            <p class="attr">Birth Date</p>
            <p>${character.dateOfBirth}</p>
        </div>
        <div>
            <p class="attr">Patronus</p>
            <p>${character.patronus}</p>
        </div>
    `;
}

fetchCharacterData();
