var Persona = {
  nombre : "Marco",
  saludar : function(){
    return "Hola que hace "+ this.nombre;
  }
};

exports.Persona = Persona;