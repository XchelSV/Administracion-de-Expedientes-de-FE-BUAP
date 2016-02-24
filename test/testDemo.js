var assert = require("assert");
var Autor = require("../assets/scripts/ejemplo.js").Autor;

describe("Autor", function(){
  describe("constructor", function(){
    it("debe tener un nombre por defecto", function(){
      var autor = new Autor();
      assert.equal("Anónimo", autor.name);
    });
  });

  describe("#escribirArticulo", function(){
    it("debe guardar los articulos", function(){
      var autor = new Autor();
      assert.equal(0, autor.articulos.length);
      autor.escribirArticulo("Articulo de Prueba");
      assert.equal(1, autor.articulos.length);
    });
  });

  describe("#listaArticulos", function(){
    it("debe enlistar los articulos", function(){
      var autor = new Autor("Pedro");
      autor.escribirArticulo("Excelente Artículo");
      assert.equal("Pedro escribió: Excelente Artículo", autor.listaArticulos());
    });
  });
});