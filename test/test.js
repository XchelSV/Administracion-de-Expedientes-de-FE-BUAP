var assert = require('assert');
describe('Func String#split', function(){
  it('Debe regresar un arreglo', function(){
    assert(Array.isArray('a,b,c'.split(',')));
  });
});
var Persona = require('../Objetos.js').Persona;
describe('Persona#Saludo', function(){
  it('La persona debe saludar', function(){
    assert.equal(Persona.saludar(), "Hola que hace Marco");
  });
});