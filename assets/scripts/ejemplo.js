(function(){

  var Autor = function(name){
    this.name = name || "Anónimo";
    this.articulos = [];
  };

  Autor.prototype.escribirArticulo = function(titulo){
    this.articulos.push(titulo);
  };

  Autor.prototype.listaArticulos = function(){
    return this.name + " escribió: " + this.articulos.join(", ");
  };

  exports.Autor = Autor;

  var juan = new Autor("Juan Perez");
  juan.escribirArticulo("Exportaciones de México a China");
  juan.escribirArticulo("¿Cómo afecta el precio del dólar a la economía?");
  juan.listaArticulos();
})();