$("#home").click(function(e){e.preventDefault();$(this).tab("show")});$("#registrar").click(function(e){e.preventDefault();$(this).tab("show")});$("#search").click(function(e){e.preventDefault();$(this).tab("show")});$("#queue").click(function(e){e.preventDefault();$(this).tab("show")});$(document).ready(function(){$("#showModal").click(function(){$("#alertModal").modal("show")});$("#btnSaveFI").click(function(){$("#Collapsible").collapse("hide")})});var app=angular.module("Estoma",["ngRoute","ngCookies"]);app.controller("indexController",function($scope,$http,$window){var i=0;var NoEnfCardio=0;var NoFamCardio=0;var NoEnfEndo=0;var NoFamEndo=0;var NoFamNeuro=0;var NoEnfResp=0;var NoFamResp=0;var NoFamNeo=0;$scope.array=[0];$scope.enfCardio=[0];$scope.famCardio=[0];$scope.enfEndo=[0];$scope.famEndo=[0];$scope.famNeuro=[0];$scope.enfResp=[0];$scope.famResp=[0];$scope.famNeo=[0];$scope.responsable=false;$scope.pushVacuna=function(){i++;$scope.array.push(i);console.log($scope.array)};$scope.popVacuna=function(){if(i===0){}else{$scope.array.pop(i);i--;console.log($scope.array)}};$scope.pushEnfCardio=function(){NoEnfCardio++;$scope.enfCardio.push(NoEnfCardio)};$scope.popEnfCardio=function(){if(NoEnfCardio===0){}else{$scope.enfCardio.pop(NoEnfCardio);NoEnfCardio--}};$scope.pushFamCardio=function(){NoFamCardio++;$scope.famCardio.push(NoFamCardio)};$scope.popFamCardio=function(){if(NoFamCardio===0){}else{$scope.famCardio.pop(NoFamCardio);NoFamCardio--}};$scope.pushEnfEndo=function(){NoEnfEndo++;$scope.enfEndo.push(NoEnfEndo)};$scope.popEnfEndo=function(){if(NoEnfEndo===0){}else{$scope.enfEndo.pop(NoEnfEndo);NoEnfEndo--}};$scope.pushFamEndo=function(){NoFamEndo++;$scope.famEndo.push(NoFamEndo)};$scope.popFamEndo=function(){if(NoFamEndo===0){}else{$scope.famEndo.pop(NoFamEndo);NoFamEndo--}};$scope.pushFamNeuro=function(){NoFamNeuro++;$scope.famNeuro.push(NoFamNeuro)};$scope.popFamNeuro=function(){if(NoFamNeuro===0){}else{$scope.famNeuro.pop(NoFamNeuro);NoFamNeuro--}};$scope.pushEnfResp=function(){NoEnfResp++;$scope.enfResp.push(NoEnfResp)};$scope.popEnfResp=function(){if(NoEnfResp===0){}else{$scope.enfResp.pop(NoEnfResp);NoEnfResp--}};$scope.pushFamResp=function(){NoFamResp++;$scope.famResp.push(NoFamResp)};$scope.popFamResp=function(){if(NoFamResp===0){}else{$scope.famResp.pop(NoFamResp);NoFamResp--}};$scope.pushFamNeo=function(){NoFamNeo++;$scope.famNeo.push(NoFamNeo)};$scope.popFamNeo=function(){if(NoFamNeo===0){}else{$scope.famNeo.pop(NoFamNeo);NoFamNeo--}};$scope.input="";$scope.validateInput=function(input,div){var divisor=angular.element(document.querySelector("#"+div));if(input!==""){divisor.removeClass("has-error");divisor.addClass("has-success")}else{divisor.removeClass("has-success");divisor.addClass("has-error")}};$scope.full=false;$scope.saveFicha=function(){var vacunasArray=[];for(var w=0;w<$scope.array.length;w++){var vac=angular.element(document.querySelector("#vacuna"+w));vacunasArray.push(vac.val())}var ficha_Identificacion={nombre:{nombre:$scope.input.name,apellidoP:$scope.input.apellidoP,apellidoM:$scope.input.apellidoM},fechaNac:$scope.input.fechaNac,sexo:$scope.input.genero,lugarNac:$scope.input.lugarNac,ocupacion:$scope.input.ocupacion,escolaridad:$scope.input.escolaridad,edoCivil:$scope.input.edoCivil,domicilio:{calle:$scope.input.calle,numeroInt:$scope.input.interior,numeroExt:$scope.input.exterior,cp:$scope.input.cp,colonia:$scope.input.colonia,municipio:$scope.input.municipio,estado:$scope.input.estado},telefono:{telFijo:$scope.input.telFijo,telMovil:$scope.input.telMovil,telOficina:$scope.input.telOficina},curp:$scope.input.curp,email:$scope.input.email,ingresos:$scope.input.ingresos,sangre:$scope.input.sangre,vacunas:vacunasArray};console.log(ficha_Identificacion);$http.post("/fichaDeIdentificacion",ficha_Identificacion).success(function(data,status,headers,config){var panel=angular.element(document.querySelector("#FIPanel"));panel.removeClass("panel-default");panel.addClass("panel-success");$scope.full=true;console.log($scope.full)}).error(function(){alert("AJAX error in post fichaDeIdentificacion")})}});