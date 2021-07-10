const app = new Vue({
   el: '#app',
   data: {
      titulo: 'Frutas',
      frutas: [
         {nombre: "platano", cantidad: 0},
         {nombre: "manzana", cantidad: 0},
         {nombre: "durazno", cantidad: 0}
      ],
      nuevaFruta:'',
      totalFrutas: 0
   },
   methods: {
      agregarFruta(){
         // this es para acceder a distintas propiedades de la instancia de VUE
         this.frutas.push({
            nombre: this.nuevaFruta, cantidad: 0
         })
         this.nuevaFruta = ''
      }
   },
   computed: {
      sumarFrutas(){
         this.totalFrutas = 0;
         for(fruta of this.frutas){
            this.totalFrutas = this.totalFrutas + fruta.cantidad
         }
         return this.totalFrutas
      }
   }
})