
const app = new Vue({
  el:'#app',
  data:{
    clicked: false,
    wrongAuth: 0,
    active: true
  },
  methods: {
    checkAuth: function(){


      if (this.username == "user" && this.password == "pass")
      {
        this.wrongAuth = 2;
        this.toggle();
      }else this.wrongAuth = 1;
      //alert(this.wrongAuth === 2);
      return this.username == "user" && this.password == "pass";
    },

    toggle: function(){
      this.active = !this.active;
    }


  }
});
