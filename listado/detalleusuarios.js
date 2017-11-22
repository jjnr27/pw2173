const{BrowserWindow} = require('electron').remote;
const app = require('electron').app;
const path = require('path');
const url = require('url');
const $ = require('jquery');

 var nombre = require('electron').remote.getGlobal('infoUsuarios').nombre;
 var genero = require('electron').remote.getGlobal('infoUsuarios').genero;
 var foto = require('electron').remote.getGlobal('infoUsuarios').foto;  
 var direccion = require('electron').remote.getGlobal('infoUsuarios').direccion;
 var telefono = require('electron').remote.getGlobal('infoUsuarios').telefono;

$("#idNombre").html(nombre);
$("#idGenero").html(genero);
$("#idDireccion").html(direccion);
$("#idTelefono").html(telefono);
$("#idFoto").attr("src",foto); 