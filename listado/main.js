

// const app=require('electron').app;
// const BrowserWindow=require('electron').BrowserWindow;

//Abreviando lo de arriba mediante el uso de llaves
const {app,BrowserWindow} = require('electron');
const path = require('path'); //muestra la ruta del archivo
const url = require('url'); // carga una página
// ECMASCRIPT = 6
let PantallaPrincipal;

function muestraPantallaPrincipal(){
	PantallaPrincipal = new BrowserWindow({width:320,height:450});
	PantallaPrincipal.loadURL(url.format({
		pathname: path.join(__dirname,'index.html'),
		protocol: 'file',
		slashes: true
	}))
	
	
	//PantallaPrincipal.webContents.openDevTools();
	PantallaPrincipal.show;
}
app.on('ready',muestraPantallaPrincipal)