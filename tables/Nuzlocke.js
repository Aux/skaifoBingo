var bingoListNuzlocke;
var nuzlockeTiles;

function Nuzlocke() {

    nuzlockeTiles = [
        'A pokemon dies',
        'A pokemon dies in one hit',
        'A legendary pokemon where it shouldn\'t be',
        'A custom sprite does 👁️👄👁️',
        'A custom sprite stunlocks Skai for more than 10 seconds',
        'Skai defeats a gym leader',
        'A pokemon is revived with Sacred Ash',
        'Vore themed pokemon',    // Suggested by HydroChromatic
        'Skai finds a Sacred Ash',    // Suggested by HydroChromatic
        'A custom sprite references toast racks',    // Suggested by HydroChromatic
        'A custom sprite references Jet 2 Holiday',    // Suggested by HydroChromatic
        'Skai sees a Charizard',    // Suggested by BlurTheFur
        'Skai kills a Charizard',    // Suggested by BlurTheFur
        'A custom sprite references TECO/Tesco',    // Suggested by BlurTheFur
        'A custom sprite references Popcorn',    // Suggested by BlurTheFur
        'Skai gets called a Pikachu by an NPC',    // Suggested by BlurTheFur
        'A custom sprite references Feetza',    // Suggested by BlurTheFur
        'A custom sprite references Pufferfish',    // Suggested by BlurTheFur
        'Skai runs out of pokeballs',    // Suggested by BlurTheFur
        'A custom sprite references Otomatones',    // Suggested by BlurTheFur
        'A custom sprite is a minger',    // Suggested by BlurTheFur
        'Skai gets a masterball',    // Suggested by PerynCapybara
        '3 pixel AK',    // Suggested by PerynCapybara
        'Sweet message from a defeated trainer',    // Suggested by PerynCapybara
        'Cantch',    // Suggested by PerynCapybara
    ];

    bingoListNuzlocke = [..._.sample(nuzlockeTiles, 24)];
    console.log('bingoListNuzlocke loaded ' + bingoListNuzlocke.length  + ' tiles');
}
