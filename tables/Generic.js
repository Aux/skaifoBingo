var bingoListGeneric;
var skaifoTiles, chatTiles, donationTiles;

function Generic() {

    skaifoTiles = [
        'Shirt is stolen',
        'Game controller\'s batteries die',
        'In the intro for at least 37 minutes',
        'Belly Drum',
        'Tonya says some Action Movie Shit',    // Suggested by BlurTheFur
        'Maws mentioned',    // Suggested by BlurTheFur
        'Paws mentioned',    // Suggested by BlurTheFur
        'Bellies mentioned',    // Suggested by BlurTheFur
        'FWEET',    // Suggested by BlurTheFur
        'ENGERLAND',    // Suggested by BlurTheFur
        '53 !!!',    // Suggested by BlurTheFur
        '67 !!!',    // Suggested by BlurTheFur
        'Skorb',    // Suggested by BlurTheFur
        'skaifo example 10',
        'skaifo example 11',
        'skaifo example 12',
        'skaifo example 13',
        'skaifo example 14',
        'skaifo example 15',
        'skaifo example 16',
        'skaifo example 17',
        'skaifo example 18',
        'skaifo example 19',
        'skaifo example 20'
    ];
    chatTiles = [
        'A chatter loses the roulette',
        'halp 🐸',
        'chat example 3',
        'chat example 4',
        'chat example 5',
        'chat example 6',
        'chat example 7',
        'chat example 8',
        'chat example 9',
        'chat example 10'
    ];
    donationTiles = [
        'Someone resubs for over a year',
        'A founder resubs',
        '10 gift subs',
        '25 gift subs',
        '50 gift subs',
        '100 gift subs',
        '200 bits redeem',
        '666 bits redeem',
        '1000 bits redeem',
        '10000 bits redeem'
    ];

    bingoListGeneric = [..._.sample(skaifoTiles, 19), ..._.sample(chatTiles, 4), ..._.sample(donationTiles, 1)];
    console.log('bingoListGeneric loaded ' + bingoListGeneric.length  + ' tiles');
}
