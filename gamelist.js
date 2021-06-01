let graham = ["Bioshock Infinite",
    "Curse of Monkey Island",
    "Dark Souls",
    "Dead Cells",
    "Fez",
    "Mirror’s Edge",
    "Metal Gear Solid",
    "Monkey Island 2: LeChuck’s Revenge",
    "Paper Mario: The Thousand Year Door",
    "Portal",
    "Portal 2",
    "Psychonauts",
    "Spelunky",
    "Super Mario World",
    "The Elder Scrolls V: Skyrim",
    "They Are Billions",
    "Titanfall 2",
    "The Last of Us",
    "Zombies Ate My Neighbors"];
let al = ["Command and Conquer",
    "Dark Souls",
    "Fallout 3",
    "Far Cry 3",
    "Gone Home",
    "Grand Theft Auto 3",
    "Half Life",
    "Halo: Combat Evolved",
    "Metal Gear Solid",
    "Nomad Soul",
    "Resident Evil (1996)",
    "Resident Evil 4",
    "Sekiro: Shadows Die Twice",
    "Shenmue",
    "Silent Hill",
    "Sonic The Hedgehog",
    "Super Mario World",
    "Telltale's The Walking Dead",
    "Toejam and Earl"];
let mick = ["Bioshock",
    "Bloodborne",
    "Diablo 2",
    "Donkey Kong Country",
    "Doom (1993)",
    "Duke Nukem 3D",
    "Counterstrike Source",
    "Goldeneye",
    "Half Life 2",
    "Legend of Zelda: Ocarina of Time",
    "Max Payne",
    "Metal Gear Solid 3",
    "Portal",
    "Red Alert 2",
    "Red Dead Redemption",
    "Super Mario Bros. 3",
    "Worms 2",
    "XCOM:Enemy Unknown"];
let stu = ["Batman: Arkham Asylum",
    "Bloodborne",
    "Fallout: New Vegas",
    "Goldeneye 007",
    "Gone Home",
    "Mario Kart 8",
    "Mass Effect 2",
    "Player Unknown's Battlegrounds",
    "Pokémon: Red/Blue",
    "Red Dead Redemption",
    "Rocket League",
    "Shenmue",
    "Skies of Arcadia (Legends)",
    "Sonic The Hedgehog",
    "Stardew Valley",
    "Telltale's The Walking Dead",
    "The Last of Us",
    "Tony Hawks Pro Skater 2",
    "WWF No Mercy"];

let list = graham.concat(al, mick, stu);

function chooseGame() {
    let randomPosition = Math.floor(Math.random()*list.length);
    randomGame = list[randomPosition];
    console.log('Chosen game is '+randomGame);
    list.splice(randomPosition, 1); //Remove the chosen game from the pool
    checkDupe(list);
};

function checkDupe() {
    if(list.includes(randomGame)){
        console.log('Duplicate entry also removed from list');
        list.splice(list.indexOf(randomGame),1);
        checkDupe(list);
    };
};

chooseGame();
console.log('list is now: ', list);