console.log('Shakespearean Insult Generator');

const firstAdjectives = [
  'artless',
  'bawdy',
  'beslubbering',
  'bootless',
  'churlish',
  'cockered',
  'clouted',
  'craven',
  'currish',
  'dankish',
  'dissembling',
  'droning',
  'errant',
  'fawning',
  'fobbing',
  'froward',
  'frothy',
  'gleeking',
  'goatish',
  'gorbellied',
  'impertinent',
  'infectious',
  'jarring',
  'loggerheaded',
  'lumpish',
  'mammering',
  'mangled',
  'mewling',
  'paunchy',
  'pribbling',
  'puking',
  'puny',
  'qualling',
  'rank',
  'reeky',
  'roguish',
  'ruttish',
  'saucy',
  'spleeny',
  'spongy',
  'surly',
  'tottering',
  'unmuzzled',
  'vain',
  'venomed',
  'villainous',
  'warped',
  'wayward',
  'weedy',
  'yeasty'
];

const secondAdjectives = [
  'base-court',
  'bat-fowling',
  'beef-witted',
  'beetle-headed',
  'boil-brained',
  'clapper-clawed',
  'clay-brained',
  'common-kissing',
  'crook-pated',
  'dismal-dreaming',
  'dizzy-eyed',
  'doghearted',
  'dread-bolted',
  'earth-vexing',
  'elf-skinned',
  'fat-kidneyed',
  'fen-sucked',
  'flap-mouthed',
  'fly-bitten',
  'folly-fallen',
  'fool-born',
  'full-gorged',
  'guts-griping',
  'half-faced',
  'hasty-witted',
  'hedge-born',
  'hell-hated',
  'idle-headed',
  'ill-breeding',
  'ill-nurtured',
  'knotty-pated',
  'milk-livered',
  'motley-minded',
  'onion-eyed',
  'plume-plucked',
  'pottle-deep',
  'pox-marked',
  'reeling-ripe',
  'rough-hewn',
  'rude-growing',
  'rump-fed',
  'shard-borne',
  'sheep-biting',
  'spur-galled',
  'swag-bellied',
  'tardy-gaited',
  'tickle-brained',
  'toad-spotted',
  'unchin-snouted',
  'weather-bitten'
];

const nouns = [
  'apple-john',
  'baggage',
  'barnacle',
  'bladder',
  'boar-pig',
  'bugbear',
  'bum-bailey',
  'canker-blossom',
  'clack-dish',
  'clotpole',
  'coxcomb',
  'codpiece',
  'death-token',
  'dewberry',
  'flap-dragon',
  'flax-wench',
  'flirt-gill',
  'foot-licker',
  'fustilarian',
  'giglet',
  'gudgeon',
  'haggard',
  'harpy',
  'hedge-pig',
  'horn-beast',
  'hugger-mugger',
  'joithead',
  'lewdster',
  'lout',
  'maggot-pie',
  'malt-worm',
  'mammet',
  'measle',
  'minnow',
  'miscreant',
  'moldwarp',
  'mumble-news',
  'nut-hook',
  'pigeon-egg',
  'pignut',
  'puttock',
  'pumpion',
  'ratsbane',
  'scut',
  'skainsmate',
  'strumpet',
  'varlot',
  'vassal',
  'whey-face',
  'wagtail'
];

// PSEUDOCODE
//
// Goal: print out a randomly-generated insult
//
// 1. Pick a random adjective from the first array
//     -> how do i pick a random element from an array?
//        a. Generate and store a random number between 0 ... length - 1
//        b. use that random number as an index into the array, and
//        c. store whatever is found at that index

// 2. Pick a random adjective from the second array
// 3. Pick a random noun from the third array
// 4. Concatenate (join) them together with spaces and print out (with 'Thou' at the start)


const generateRandomInt = function( max ){
  const randomNum = Math.random() * max;
  const randomInt = Math.floor( randomNum );
  return randomInt;
  // return Math.floor(Math.random() * max);
}; // generateRandomInt()


const getRandomElementFromArray = function( array ){
  const randomIndex = generateRandomInt( array.length );
  return array[ randomIndex ];
}; // getRandomElementFromArray()


const generateInsult = function(){
  // debugger;
  const adjectiveOne = getRandomsElementFromArray( firstAdjectives );
  const adjectiveTwo = getRandomElementFromArray( secondAdjectives );
  const finalNoun = getRandomElementFromArray( nouns );
  return `Thou ${adjectiveOne} ${adjectiveTwo} ${finalNoun}!`;

}; // generateInsult()



/* Full version of code with all the earlier attempts
const generateInsult = function(){

  // const randomFirstNum = Math.random() * firstAdjectives.length;
  // const randomFirstIndex =  Math.floor( randomFirstNum );

  // const randomFirstIndex = generateRandomInt( firstAdjectives.length );
  // const adjectiveOne = firstAdjectives[ randomFirstIndex ];

  const adjectiveOne = getRandomElementFromArray( firstAdjectives );
  console.log('adjectiveOne:', adjectiveOne);

  // Second adjective:

  // const randomSecondNum = Math.random() * secondAdjectives.length;
  // const randomSecondIndex =  Math.floor( randomSecondNum );
  // const randomSecondIndex = generateRandomInt( secondAdjectives.length );
  // const adjectiveTwo = secondAdjectives[ randomSecondIndex ];

  const adjectiveTwo = getRandomElementFromArray( secondAdjectives );
  console.log('adjectiveTwo', adjectiveTwo);

  const finalNoun = getRandomElementFromArray( nouns );
  console.log('finalNoun:', finalNoun);

  const insult = `Thou ${adjectiveOne} ${adjectiveTwo} ${finalNoun}!`;
  // console.log(insult);

  return insult;

}; // generateInsult()
*/
