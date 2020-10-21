function imprimir(msg : string) {
  var lectura = null;
 
  lectura =<HTMLElement> document.getElementById('log');

//console.log(lectura);
  lectura.innerHTML = msg;
}