var bingoListGeneric;
var skaifoTiles, chatTiles, donationTiles;

function Generic() {

    skaifoTiles = [
        'Shirt is stolen',
        'Game controller\'s batteries die',
        'In the intro for at least 37 minutes',
        'skaifo example 4',
        'skaifo example 5',
        'skaifo example 6',
        'skaifo example 7',
        'skaifo example 8',
        'skaifo example 9',
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
        'chat example 2',
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

    bingoListGeneric = [..._.sample(skaifoTiles, 15), ..._.sample(chatTiles, 8), ..._.sample(donationTiles, 1)];
    console.log('bingoListGeneric loaded ' + bingoListGeneric.length  + ' tiles');
}
