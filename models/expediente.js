var mongoose = require('mongoose'); 

var expedienteSchema = mongoose.Schema({
     datosParticulares:{
         nombre:{
            nombre: String,
            apellidoP: String,
            apellidoM: String
         },
         fechaNac: Date,
         sexo: Boolean,
         lugarNac: String,
         ocupacion: String,
         escolaridad: Number,
         edoCivil: Number,
         domicilio: {
             calle: String,
             numeroInt: String,
             numeroExt: String,
             cp: String,
             colonia: String,
             municipio: String,
             estado: String
         },
         telefono: {
            telFijo: String,
            telMovil: String,
            telOficina: String
         },
         curp: String, 
         email: String,
         ingresos: Number,
         sangre: Number,
         vacunas:[String],
         responsable:[]
     },
    datosSalud:{
        heredofamiliares:{
            endrocrinos: [],
            neurologicos: [],
            respiratorios: [],
            neoplasicos: []
        },
        patologicos:{
            congenitas:[],//Los siguientes se llenan con strings
            infecciosas:[],
            respiratorias:[],
            cardiovasculares:[],
            gastroIntestinales:[],
            genitaUrinarios:[],
            endocrinologicos:[],
            neurologicos:[],
            psiquiatricos:[],
            dermatologicos:[],
            anestesicos:[],
            tratamientos:[],//{tratamiento:string, dosis:str}
            hospitalizaciones:[]//{fecha:date,motivo:string}
        },
        noPatologicos:{
            vivienda:{
                //Insertar documento Rural o Urbana
                habitos:{
                    bañoCorporal: Number,
                    ropaInt: Number,
                    aseoBucal: String,
                    golosinas: String,
                    deporte: [], //Objeto {nombre: deporte, tiempo: x horas semana}
                    alimentación: String,
                    tatuajes:[],//{Sanitizado: str, fecha: date}
                    adicciones:[]//{sustancia: str, cantidad: Number, via: str, frecuencia: str, unidad: str}
                    
                }
            }
        }
        
    },
    expediente:[]//{fecha:date,motivo:string,padecimiento:str}
    });

module.exports = mongoose.model('Expediente', expedienteSchema);