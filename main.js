const { createApp } = Vue;

createApp({
    data(){
        return{
            error: false,
            newTask:'',
            tasks: [
                { text: 'Fare i compiti', done: false }, 
                { text: 'Fare la spesa', done: true }, 
                { text: 'Fare il bucato', done: false }
            ]
        }
        
    },

    methods: {

        addItem(){
            if( this.newTask.length < 5 || this.newTask === ''){
                this.error = true;
                 
            }

            else {
                this.tasks.unshift ({
                    text: this.newTask,
                })
            }

            this.newTask = '';

            

        },

        removeItem(index){
            this.tasks.splice(index, 1)

        }
    }
    
}).mount('#app')