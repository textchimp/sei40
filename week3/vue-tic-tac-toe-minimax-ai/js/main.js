// All the AI player Minimax code lives in this object
const ai = {

  getFreePositions: function( board ){
    return board.reduce( (acc, pos, ind) => {
      if( pos === null ){
        acc.push(ind);
      }
      return acc;
    }, [] );
  },

  findWinner: function( board ){
    // reuse the game checkWin function
    if( gameApp.checkWin(board, 'X') ){
      return 'human';
    } else if( gameApp.checkWin(board, 'O') ){
      return 'ai';
    } else if( !board.includes(null) ){
      return 'draw';
    }
    return false; // no winner
  },

  totalGamesTried: 0,   // keep track of total calls to minimax() for a move

  minimax: function( board, maxPlayer, depth ){

    this.totalGamesTried++;

    // Base cases: game over or draw
    const winner = this.findWinner(board);
    if( winner === 'draw' ){
      return 0;
    } else if( winner ){
      const sign = (winner === 'ai') ? 1 : -1;   // always want AI to win, they get +ve scores
      return (sign * 10) - (sign * depth);
    }


    let symbol, sign, nextPlayer;
    if( maxPlayer === 'ai' ){
      sign = -1;  // for max/min comparison; depends on who we want to win; in this case, the AI
      symbol = 'O'; // use AI symbol
      nextPlayer = 'human';
    } else {
      sign = 1;
      symbol = 'X';
      nextPlayer = 'ai';
    }

    // ensures the first > or < comparison we do always wins:
    let maxScore = sign * Infinity;
    let bestIndex = -1;

    this.getFreePositions(board).forEach( freePos => {

      board[ freePos ] = symbol; // try out a move into the free spot
      const score = this.minimax(board, nextPlayer, depth + 1);
      board[ freePos ] = null; // reset (undo) move before next iteration

      // work out if the move is the best/worst for the current board
      if( ((sign < 0) && score > maxScore) || ((sign > 0) && score < maxScore) ){
        maxScore = score;
        bestIndex = freePos;
      }

    }); // check each free position

    // This saves us from needing to return both values all the time, as an
    // object or array: always return the score, except when returning from
    // the first call, when we want the winning index
    return (depth === 1) ? bestIndex : maxScore;

  } // minimax()

};


const gameApp = new Vue({
  el: '#main',
  data: {
    useAI: true,
    winMessage: '', // game over message, also used as game over flag
    moveCount: 0,
    turnSymbols: ['X', 'O'],  // just used to help us switch players without a conditional
    score: { X: 0, O: 0 },  // score as an object keyed by player symbol, for easy update
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
      if( !this.winMessage ){
        return ''; // don't even check until game is over
      }
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
      // this.board[position] = 'x';  // normal assignment; (Vue can't see this, no re-render)
      // Instead, you need to use Vue.set()  - see https://vuejs.org/v2/guide/list.html#Caveats
      // (Note, could also do this.$forceUpdate(); but considered inelegant)
      Vue.set(this.board, position, turn);  // instead of this.board[position] = turn;

      this.moveCount++;

      const stillGoing = this.checkGameState(turn);

      if( stillGoing && this.useAI ){
        this.playAI();
      }

    }, // playMove()


    checkGameState: function(turn){

      if( this.moveCount < 5 ){
        return true;  // game can't be won until 5th move at earliest
      }

      // Result from checkWin() will either be the array of winning positions, or if
      // no winner found, it will be undefined - that's how Array.find() works.
      // The || here sets winningCombo to be an empty array if something falsey
      // (like undefined) is returned by checkWin(). We use winningCombo in getCellWin()
      // to set the class for the winning cells, triggering the CSS colour animation.
      this.winningCombo = this.checkWin(this.board, turn) || [];

      if( this.winningCombo.length ){
        this.winMessage = `${turn} wins`;
        this.score[turn] += 1; // update winner score using player symbol as key... no if-else
      } else if( this.moveCount >= 9 ){
        this.winMessage = 'Draw';
      } else {
        return true; // used to trigger AI play, i.e. game not over
      }
    },

    playAI: function(){

      ai.totalGamesTried = 0;
      // const {maxScore, bestIndex} = ai.minimax(this.board, 'ai', 1);
      // console.log(`%cbest move: ${bestIndex}`, 'font-size: 20pt', `(score: ${maxScore}, tried: ${ai.totalGamesTried})`);
      const moveIndex = ai.minimax(this.board, 'ai', 1);
      console.log(`Best move: ${moveIndex} (tried: ${ai.totalGamesTried})`);

      // Play move into board, check for win
      Vue.set(this.board, moveIndex, 'O');  // instead of this.board[position] = turn;
      this.moveCount++;
      this.checkGameState('O');
    }, // playAI()

   restartGame: function(){
     // Vue *can* detect if you just resassign the whole array
     this.board = [null, null, null, null, null, null, null, null, null];
     this.winningCombo = [];
     this.moveCount = 0;
     this.winMessage = '';
   },

  }
});
