
Vue.component('dog-info', {
  props: [ 'name', 'roundness' ],
  data: function(){
    return {
      age: 5
    };
  },
  methods: {
    incrementAge: function(){
      this.age++;
    } // incrementAge()
  },
  template: `
    <div>
      <h3 @click="incrementAge">{{ name }}</h3>
      <p>
        Roundness: {{ roundness }}
      </p>
      <p>
        Age: {{ age }}
      </p>
    </div>
  `
}); // end of dog-info component



const myApp = new Vue({
  // Where does this Vue app attach to on the DOM?
  el: '#app',

  // What is the 'state' of the app?
  // i.e. What is the collection of variables
  // that change as a user interacts with your app
  data: {
    bills: [
      'http://www.fillmurray.com/200/200',
      'http://www.fillmurray.com/300/300',
    ],
    todoList: [
      { text: 'Learn Vue' },
      { text: 'Finish Homework' },
      { text: 'Relax' },
    ],
    errorStatus: 'allgood',
    showDiv: true,
    message: 'Hello Vuorld!',
    secretGreeting: 'You loaded this page on ' + new Date().toLocaleString()
  },

  methods: {
    changeMessage: function(){
      console.log('Button clicked!');
      this.message = this.message.toUpperCase();
      this.showDiv = !this.showDiv;
    }, // changeMessage

    reverseMessage: function(){
      this.message = this.message.split('').reverse().join('');
    } // reverseMessage

  }, // methods


}); // end of new Vue()
