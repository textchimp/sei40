
const gameApp = new Vue({
  el: '#main',
  data: {
    winMessage: '', // game over message, also used as game over flag
    moveCount: 0,
    turnSymbols: ['X', 'O'],  // just used to help us switch players without a conditional
    score: { X:0, O:0 },  // score as an object keyed by player symbol, for easy update
    board: [ null, null, null, null, null, null, null, null, null ], // board: new Array(9).fill(null)  //ES6
    winningCombo: [],  // for the fun colour animation (stores winning squares)
    winCombos: [
      [0,1,2], [3,4,5], [6,7,8], //rows
      [0,3,6], [1,4,7], [2,5,8], //cols
      [0,4,8], [2,4,6]           //diags
    ],
  },
  methods: {
    checkWin: function( board, symbol ){
      return this.winCombos.find(function( [a,b,c] ){
        // array destructuring in argument ^^^^^^^ (google it) to get each number in combo
        return (symbol + symbol + symbol) === (board[a] + board[b] + board[c]);
      });
    },

    getCellWin: function( position ){
      // Used to set class of each cell; after win, the winning cells get the 'celebrate' class
      return this.winningCombo.includes(position) ? 'celebrate' : '';
    },

    playMove: function( position ){

      if( this.board[position] || this.winMessage ){
        return; // ignore clicks if square taken or game is over (i.e. winMessage is truthy)
      }

      // no need for an if-else to switch turns when you use a move counter, modulus, and an array
      const turn = this.turnSymbols[ this.moveCount % 2 ]; // alternates between [0] and [1]

      // GOTCHA: Vue re-renders the page when it detects changes to your data,
      // but it can't detect changes to the individual elements of an array in your data:
      // this.board[position] = 'x';  // normal assignment; Vue can't see this, no re-render
      // Instead, you need to use Vue.set()  - see https://vuejs.org/v2/guide/list.html#Caveats
      // (Note, could also do this.$forceUpdate(); but considered inelegant)
      Vue.set(this.board, position, turn);  // instead of this.board[position] = turn;
      this.moveCount++;

      // Result from checkWin() will either be the array of winning positions, or if
      // no winner found, it will be undefined - that's how Array.find() works.
      // The || here sets winningCombo to be an empty array if something falsey
      // (like undefined) is returned by checkWin(). We use winningCombo in getCellWin()
      // to set the class for the winning cells, triggering the CSS colour animation.
      this.winningCombo = this.checkWin(this.board, turn) || [];
      if( this.winningCombo.length ){
        this.winMessage = `${turn} wins`;
        this.score[turn] += 1; // update winner score using player as key... no if-else
      } else if( this.moveCount >= 9 ){
        this.winMessage = 'Draw';
      }

    }, // playMove()

   restartGame: function(){
     this.board = []; // Vue *can* detect if you just resassign the whole array to be blank
     this.winningCombo = [];
     this.moveCount = 0;
     this.winMessage = '';
   },

  }
});
