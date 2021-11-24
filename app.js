
const app = Vue.createApp({
    data() {
        return{
           fieldType : "password",
           showHide : "Show Password"
        }
      },

      methods: {
        switchField(){
          this.fieldType =
          this.fieldType === "password" ? "text" :"password";
    
           this.showHide =
         this.showHide === "Hide Password" ? "Show Password" : "Hide Password"
    
          },
    },
})

app.mount('#Show-Hide')