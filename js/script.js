
/*MI APP 1*/
var app = new Vue({ 
    el: '#miapp',
    data: {
        message: 'Hoooola mundo!'
    }
});


app.message = 'he cambiado los datos!'

/*MI APP 2*/
var app2 = new Vue({ 
    el: '#miapp2',
    data: {
        seen: true
    }
});


/*MI APP 3 UN ARRAY*/
var app3 = new Vue({ 
    el: '#miapp3',
  data: {
    todos: [
      { text: 'jose' },
      { text: 'maria' },
      { text: 'carlos' },
        { text: 'carlos' },
          { text: 'carlos' },
            { text: 'carlos' }

    ]
  }
});

app3.todos.push({ text: 'New item' })




var app4 = new Vue({
  el: '#app4',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')

      alert("hola");
    }
  }
})
