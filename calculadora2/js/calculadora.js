//constantes de electron
const {BrowserWindow}= require('electron').remote;
const app= require('electron').app;
const path= require('path');
const url= require('url');

//Otra ventana
let ventanaCalcCient;
function calculadoraCientifica(){
	ventanaCalcCient= new BrowserWindow({width:320,height:350});
	ventanaCalcCient.loadURL(url.format({
		pathname: path.join(__dirname,'calccientifica.html'),
		protocol:'file',
		slashes: true
	}));
	ventanaCalcCient.webContents.openDevTools();
	ventanaCalcCient.show();
}
//Variable global
var operador ="";
function numeros(num){
	if(operador==""){ //operando1
		var valorInicial=document.calculadora.operando1.value;
		if(valorInicial == 0){
			document.calculadora.operando1.value="";
		}
		//Concatena los valores de num con los del operando1
		document.calculadora.operando1.value=
		document.calculadora.operando1.value+num;
	}else{//operando2
		var valorInicial=document.calculadora.operando2.value;
		if(valorInicial == 0){
			document.calculadora.operando2.value="";
		}
		//Concatena los valores de num con los del operando1
		document.calculadora.operando2.value=
		document.calculadora.operando2.value+num;

	}

}
function operadores(ope){
	operador=ope;
}
function igual(){
	var valor1 = document.calculadora.operando1.value;
	var valor2 = document.calculadora.operando2.value;
	document.calculadora.resultado.value = eval(valor1+operador+valor2);
	
}
function borrar(){
	document.calculadora.operando1.value=0;
	document.calculadora.operando2.value=0;
	document.calculadora.resultado.value=0;
}