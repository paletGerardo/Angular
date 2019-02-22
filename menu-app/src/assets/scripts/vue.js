
var app = new Vue({                 // creo la variable

    el: "#app",                     // indico en que elemento del dom va a funcionar

    created: function(){
        this.listarProductosPorId(-1);
        this.get_categorias();

    },

    data: {
        listaDeCategorias: [],      // carga lista de categorias en el menu
        listadeProductosPorId:[],   // carga todos los productos al principio y despues los carga por id
        listaDePedidos: [],         // lista para los pedidos
        mostrarLista: false,        // flag para no mostrar la lista al principio.
        mostrarGracias: false,        // flag para no mostrar la lista al principio.
        graciasMensaje: false,
        precioTotal: 0,             // suma los precios de los productos y se muetra en la lista.
        isActive: false,
        textoBtn: 'agregar',
        mostrarPresentacion: true,
    },

    methods: {

      mostrarGraciasYocultar: function (){

        this.mostrarLista = false;
        this.graciasMensaje = true;
        //agregar tiempo

        this.mostrarGracias = true;
        setTimeout(function(){
          this.mostrarPresentacion = true;
          alert("entro");
          alert(this.mostrarGracias);
        },3000);

      },



        listarProductosPorId: function (id) {
            if(id < 0){
                this.$http.get('../ajax/productos/listarProductosPorId.php?id='+id).then(function (response) {
                    this.listadeProductosPorId = response.data.productos;
                })
            }else{
                this.$http.get('../ajax/productos/listarProductosPorId.php?id='+id).then(function (response) {
                    this.listadeProductosPorId = response.data.productos;
                })
            }
        },

        get_categorias: function () {
            this.$http.get('../ajax/categorias/listarCategorias.php').then(function (response) {
                this.listaDeCategorias = response.data.categorias;
            })
        },

        agregarALaLista: function ( nombre, precio, id) {
            this.precioTotal = 0;
            precio = parseInt(precio);
            this.isActive = true;
            this.textoBtn = 'agregado a la lista';



            this.listaDePedidos.push({
                nombre: nombre,
                precio: precio,
                cantidad: 1,
            });
            for(var i=0 ; i <= this.listaDePedidos.length ; i++){
                this.precioTotal += (this.listaDePedidos[i].precio * this.listaDePedidos[i].cantidad);
            }

            for(var j=0 ; j <= this.listadeProductosPorId.length ; j++){
                if (this.listadeProductosPorId[j].id == id){
                    this.listadeProductosPorId[j].condicion = 0;
                }
            }
        },

        addCantidad: function(id){
            this.precioTotal=0;
            this.listaDePedidos[id].cantidad ++;
            for(var i=0 ; i <= this.listaDePedidos.length ; i++){
                this.precioTotal += (this.listaDePedidos[i].precio * this.listaDePedidos[i].cantidad);
            }
        },

        quitarCantidad: function(id){
            if(this.listaDePedidos[id].cantidad > 1){ //pregunto si la posicion del array es mayor a uno
                this.listaDePedidos[id].cantidad --, // si es mayor se le puede restar uno
                    this.precioTotal -= this.listaDePedidos[id].precio //
            }else{
                this.listaDePedidos[id].cantidad = 1 //si es menor que uno, lo reinicia
            }

        },

        quitarDeLista : function(index){

        },

        guardarListaDePedidos: function () {
            //enviar la lista a la bdd
        },



    }

});
