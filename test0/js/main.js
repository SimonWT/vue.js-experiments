function truth() {
  alert("Ты Пидор!!!")
};

// truth();

var app = new Vue({
  el: '#app',
  data: { name: 'Tom' },
  methods: {
    surprise: function(){
      truth();
    },
  }
});
