

const app=require('electron').app;
const BrowserWindow=require('electron').BrowserWindow;
const path = require('path'); //muestra la ruta del archivo
const url = require('url'); // carga una página
// ECMASCRIPT = 6
let PantallaPrincipal;

function muestraPantallaPrincipal(){
	PantallaPrincipal = new BrowserWindow({width:320,height:425});
	PantallaPrincipal.loadURL(url.format({
		pathname: path.join(__dirname,'index.html'),
		protocol: 'file',
		slashes: true
	}))
	PantallaPrincipal.show;
}
app.on('ready',muestraPantallaPrincipal)