new Vue({
    el: "#desafio",
    data: {
        nome: 'Gutemberg Mauricio',
        idade: 22,
        numero: 0,
        imagem: 'https://image.freepik.com/fotos-gratis/foto-de-foco-seletivo-dos-ramos-de-erva-doce-nas-colinas_181624-39484.jpg',
        place: 'Gutemberg'
     },

     methods: {
         numeroRand(){
             this.numero = Math.random(1, 10)
             return this.numero
         }
     }
})