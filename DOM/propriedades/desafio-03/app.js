new Vue({
    el:"#desafio",
    data: {
        valor: 0,

    },

    watch:{
        resultado(antigo, novo){
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }
    },

    computed: {
        resultado(){
            return this.valor == 37 ? 
            "Valor igual a 37" : "Diferente que  37"
        }
    },

})