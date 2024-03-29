
const setEvents = () => {
    document.querySelectorAll("input").forEach(el => {
        el.removeEventListener("keyup", calcularFila);
        el.addEventListener("keyup", calcularFila);
    });
};
setEvents();
 
function calcularFila() {
    const tr=this.closest("tr")
    const num=tr.querySelectorAll("input[type=number]");
    tr.querySelector(".subtotal").innerText=(parseFloat(num[0].value)*parseFloat(num[1].value) || 0).toFixed(2);
 
    calcularTotal();
    agregarFila();
}

function calcularTotal() {
    const suma=[...document.querySelectorAll(".subtotal")].reduce((acum, el) => acum+parseFloat(el.innerText), 0);
    document.querySelector(".total").innerText=(suma).toFixed(2);
}

function agregarFila() {
    const tr=document.querySelectorAll("tr");
    const ultimaFila=tr[tr.length-2];
    const vacio=[...ultimaFila.querySelectorAll("input")].every(el => el.value=="");
    if (vacio==false) {
        ultimaFila.insertAdjacentElement('afterend', crearFila());
        setEvents();
    }
}
 
function crearFila() {
    
    const td1 = document.getElementById("td1").cloneNode(true);
    const td2 = document.getElementById("td2").cloneNode(true);
    const td3 = document.getElementById("td3").cloneNode(true);
    const td4 = document.getElementById("td4").cloneNode(true);
    const td8 = document.getElementById("td8").cloneNode(true);

    const td5=document.createElement("td");
    const input1=document.createElement("input");
    input1.type="text";
    td5.appendChild(input1);

    const td6=document.createElement("td");
    const input2=document.createElement("input");
    input2.type="number";
    td6.appendChild(input2);

    const td7 = document.createElement("td");
    const input3 = document.createElement("input");
    input3.type="number";
    
    td7.appendChild(input3);
    
    const tr=document.createElement("tr");

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tr.appendChild(td8);
 
    return tr;
    
}

var inventario = new Inventario();

function ingresarTelevisor() {

    let seleccionConsumo = document.getElementById("comboConsumo").value;
    let seleccionProcedencia = document.getElementById("comboProcedencia").value;
    let seleccionSincronizador= document.getElementById("comboSincronizador").value;
    let tamanoPantalla = document.getElementById("tamanoPantalla").value;
    let cantidad = document.getElementById("cantidadTelevisores").value;

    let televisor = null;

    for(let i=0; i < cantidad; i++){
        televisor = new Televisor(seleccionConsumo, seleccionProcedencia, tamanoPantalla, seleccionSincronizador);
        inventario.agregarAlInventario("Televisor",televisor);
    }
    
    console.log(inventario.inventario);
}

function ingresarComun() {

    let seleccionConsumo = document.getElementById("comboConsumo").value;
    let seleccionProcedencia = document.getElementById("comboProcedencia").value;
    let cantidad = document.getElementById("cantidadComunes").value;

    let comun = null;

    for(let i=0; i < cantidad; i++){
        comun = new Electrodomestico(seleccionConsumo, seleccionProcedencia); 
        inventario.agregarAlInventario("Comun",comun);
    }
    console.log(inventario.inventario);
}

function ingresarNevera() {

    let seleccionConsumo = document.getElementById("comboConsumo").value;
    let seleccionProcedencia = document.getElementById("comboProcedencia").value;
    let capacidad = document.getElementById("capacidad").value;
    let cantidad = document.getElementById("cantidadNeveras").value;

    let nevera = null;

    for(let i=0; i < cantidad; i++){
        nevera = new Nevera(seleccionConsumo, seleccionProcedencia, capacidad); 
        inventario.agregarAlInventario("Nevera",nevera);
    }
    console.log(inventario.inventario);
}

var btnAgregarItem = document.getElementById("btnAgregarItem");

function agregarItem() {

    let seleccionElectrodomestico = document.getElementById("menuElectrodomestico").value;
    btnAgregarItem.disabled=true;

    switch (seleccionElectrodomestico) {
        case "Comun":
            document.getElementById("formularioComun").classList.remove('ocultar');
            document.getElementById("formularioComun").classList.add('mostrar');
            break;
    
        case "Televisor":
            document.getElementById("formularioTelevisor").classList.remove('ocultar');
            document.getElementById("formularioTelevisor").classList.add('mostrar');
            break;

        case "Nevera":
            document.getElementById("formularioNevera").classList.remove('ocultar');
            document.getElementById("formularioNevera").classList.add('mostrar');
            break;
    } 
}

function guardarItem() {

    let seleccionElectrodomestico = document.getElementById("menuElectrodomestico").value;

    switch (seleccionElectrodomestico) {
        case "Comun":
            ingresarComun();
            document.getElementById("formularioComun").classList.remove('mostrar');
            document.getElementById("formularioComun").classList.add('ocultar');
            break;
    
        case "Televisor":
            ingresarTelevisor();
            //realizarCompra("A","Internacional");
            //mostrarInventario();
            document.getElementById("formularioTelevisor").classList.remove('mostrar');
            document.getElementById("formularioTelevisor").classList.add('ocultar');
            break;

        case "Nevera":
            ingresarNevera();
            document.getElementById("formularioNevera").classList.remove('mostrar');
            document.getElementById("formularioNevera").classList.add('ocultar');
            break;
    } 
    btnAgregarItem.disabled=false;
}

function realizarCompra(filtro1, filtro2) {
    console.log(inventario.verificarStockTelevisores(filtro1, filtro2));
}


function mostrarInventario() {

    var body = document.getElementsByTagName("body")[0];
  
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    for (var i = 0; i < inventario.inventario.length; i++) {

      var hilera = document.createElement("tr");
  
      for (var j = 0; j < 8; j++) {

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode("c"+i+","+j);
        if(j==0 ){
            textoCelda = document.createTextNode(inventario.inventario[0]);
        }
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
      }
  
      tblBody.appendChild(hilera);
    }
  
    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    tabla.setAttribute("border", "2");
  }

  