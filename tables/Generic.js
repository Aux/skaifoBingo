var bingoListGeneric;
var skaifoTiles, chatTiles, donationTiles;

function Generic() {

    skaifoTiles = [
        'Shirt is stolen',
        'Game controller\'s batteries die',
        'In the intro for at least 37 minutes',
        'Belly Drum',
        'Technical Difficulties',
        'Everyone spams the Fish redeem',
        'Tonya says some Action Movie Shit',    // Suggested by BlurTheFur
        'Maws mentioned',    // Suggested by BlurTheFur
        'Paws mentioned',    // Suggested by BlurTheFur
        'Bellies mentioned',    // Suggested by BlurTheFur
        'FWEET',    // Suggested by BlurTheFur
        'ENGERLAND',    // Suggested by BlurTheFur
        '53 !!!',    // Suggested by BlurTheFur
        '67 !!!',    // Suggested by BlurTheFur
        'Skorb'    // Suggested by BlurTheFur
    ];
    chatTiles = [
        'A chatter loses the roulette',
        'halp 🐸',
        'Perfectly timed PS1 redeem',
        'Perfectly timed !hawk',
        'Skai reacts poorly to a scan'
    ];
    donationTiles = [
        'Someone resubs for over a year',
        'A founder resubs',
        '10 gift subs',
        '25 gift subs',
        '50 gift subs',
        '100 gift subs',
        '200 bits redeem',
        '500 bits redeem',
        '550 bits redeem',
        '666 bits redeem',
        '700 bits redeem',
        '800 bits redeem',
        '911 bits redeem',
        '1337 bits redeem',
        '1979 bits redeem',
        '2000+ bits redeem',
        '2500 bits redeem',
        '5000 bits redeem',
        '6666 bits redeem',
        '9000+ bits redeem'
    ];

    bingoListGeneric = [..._.sample(skaifoTiles, 15), ..._.sample(chatTiles, 4), ..._.sample(donationTiles, 1)];
    console.log('bingoListGeneric loaded ' + bingoListGeneric.length  + ' tiles');
}
