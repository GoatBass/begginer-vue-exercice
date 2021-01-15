const app = Vue.createApp({
    data(){
        return {
            myName: 'Edu',
            myAge: 26,
            favNum: 0.13,
            imgUrl: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_843,w_1500,x_0,y_10/v1555172614/shape/mentalfloss/iStock-177369626_1.jpg?itok=YfyNMOBR'
        }
    },
    methods:{
        plusAge(age){
            return age + 5
        },

        randomNum(){
            return Math.random().toFixed(2)
        }
    }
})

app.mount('#assignment')