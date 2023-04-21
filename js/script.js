let precio = 0;
//document.getElementById('precio').innerHTML='$'+precio;



function verMensaje(id){
    document.getElementById(id).classList.add('mostrar');
}

function ocultarMensaje(id){
    document.getElementById(id).classList.remove('mostrar');
}

function agregar(id){
    document.getElementById(id).classList.add('mostrar');
}

function cerrar(id){
        document.getElementById(id).classList.remove('mostrar');
    }

    function calcularcuadro(costo){
        precio = precio + costo;
        document.getElementById('precio').innerHTML='$'+precio;
    }       

    function restar(costo){
        precio = precio - costo;
        
        if(costo==null)
        precio=0;

        document.getElementById('precio').innerHTML='$'+precio;
    }       

document.getElementById('generar').addEventListener('click',function(){generarConceptos()});
document.getElementById('agregar').addEventListener('click',function(){generarUNConceptos()});
let conceptos = document.getElementById('conceptor').innerHTML;

let generarConceptos = function(){
    let num = document.getElementById('n-conceptos').value;     

    if(num>0){
        for(let i = 0; i<num; i++ ){
            conceptos +='<div id="concepto' +i+ '">';
            conceptos += estructuraConcepto(i);
            conceptos +='</div>'
        }
        document.getElementById('conceptor').innerHTML=conceptos;
        document.getElementById('titulo-conceptos').classList.add('quitar-titulo-conceptos');
        document.getElementById('agregar').classList.add('mostrar-agregar');
        document.getElementById('previsualizar').classList.add('mostrar-agregar');
        
    }
}

let generarUNConceptos = function(){
    
    let C= document.getElementsByName('cantidad'); //cuenta los que se presentaron anteriormente a su nueva creaion
    let LC = C.length; //numero creado o cuantos hay en la tabla
    
    //---generador de nodo 
     let nerd;      //genera de variable
     nerd=document.createElement("div");    //llama al div de ddonde se saco la cantiddad
     nerd.setAttribute('id','concepto' +LC);    //se le llama al i que tiene el nombre de concepto para agregar el numero de canitidad
     nerd.innerHTML += estructuraConcepto(LC); //se le agrega el campo de conceto al la generacion de la tabla
    
     document.getElementById('conceptor').appendChild(nerd);

     //String x = document.getElementById('cantidad');     x.substring(9);
}

function estructuraConcepto(num){      //las comillas invertidas ( `` ) se diran que son templates y agregan este codigo comom html
     return`
            <label>
            <img src="iconos/borrar.png" onclick="borrarConcepto(${num})"/>
            </label>

            <label><p>Cantidad</p>
                <input type="number" name="cantidad" id="cantidad${num}" min="0" value="0" onblur="calcularImporte(${num})"/>
            </label>
            <label >
                <p>Descripción</p>
                <input type="text" name="descripcion" placeholder="Descripción"/>
            </label>
            <label >
                <p>Valor Unitario</p>
                <input type="number" name="valorUnitario" id="valorUnitario${num}"min="0" value="0.00" step="0.01" onblur="calcularImporte(${num})"/>
            </label>
            <label >
                <p>Importe:</p>
                <input type="number" name="importe" id="importe${num}" value="0.00" step="0.01" disabled/>
            </label>`
}

let calcularImporte = function(x){
    document.getElementById('importe'+x).value =
    document.getElementById('cantidad'+x).value *
    document.getElementById('valorUnitario'+x).value;

    /*document.getElementById('subTotal').value = document.getElementById*/
    calcularRestantes();
    }

let calcularRestantes = function(){
    let importes = document.getElementsByName('importe');

    let j = subtotal = 0;

    while(j<importes.length){
        subtotal += parseFloat(importes[j].value);
        j++;
    }
    //for y while para recorrer ciclos, la difenrentic aes el acomodo de los datos
    //for(i=0;i<importes.lengt;i++)
    document.getElementById('subTotal').innerText = subtotal.toFixed(2);
    document.getElementById("iva").innerText = (subtotal*0.16).toFixed(2);
    document.getElementById("total").innerText = (subtotal*1.16).toFixed(2);
}

let borrarConcepto=function(num){
    let totalConceptos = document.getElementById('conceptor');
    let posicion = totalConceptos.querySelector('#concepto'+num); //me dira donde esta el concepto
    totalConceptos.removeChild(posicion);
    calcularRestantes();
    
}


document.getElementById('previsualizar').addEventListener('click', function(){generarFactura()});

let generarFactura=function(){
    let generales = document.getElementsByClassName('datos-receptor');

    let receptor = [generales[0].value, generales[1].value];

    //console.table(receptor);

    let cantidades = document.getElementsByName('cantidad');
    let descripciones = document.getElementsByName('descripcion');
    let valoresUnitarios = document.getElementsByName('valorUnitario');
    let importes = document.getElementsByName('importe');

    let factura = [];
    
    for(let i =0; i<cantidades.length;i++){
        factura[i]={
                    cantidad: cantidades [i].value,
                    descripcion: descripciones [i].value,
                    valoresUnitario: valoresUnitarios [i].value,
                    importe: importes [i].value,
        };
    }
    //console.table(factura);

    let totales = document.getElementById('tablar').innerHTML;
    //console.log(totales);

    //STORAGE                           //JSON.stringify() los convierte en texto plano a arreglos o objetos
        //Session Storage    ------- EN CUANTO SE CIERRE EL NAVEGADOR
        
        /*sessionStorage.setItem('receptor',JSON.stringify(receptor));
        sessionStorage.setItem('conceptos',JSON.stringify(factura));
        sessionStorage.setItem('totales',totales);*/

        //Local Storage           ----- SE QUEDA EN EL HISTORIAL DEL NAVEGADOR
        
        localStorage.setItem('receptor',JSON.stringify(receptor));
        localStorage.setItem('conceptos',JSON.stringify(factura));
        localStorage.setItem('totales',totales);       

    window.open('factura.html');
}



// hora del show
// obtiene la capa y la caja
var modal = document.getElementById("myModal");
var modalContent = document.querySelector(".modal-content");

// obtiene el botón de cerrar
var closeBtn = document.getElementsByClassName("close")[0];

// abre la ventana modal
function openModal() {
  modal.style.display = "block";
}

// cierra la ventana modal
function closeModal() {
  modal.style.display = "none";
}

// cierra la ventana modal al hacer clic en el botón de cerrar
closeBtn.onclick = function() {
  closeModal();
};

// cierra la ventana modal al hacer clic fuera de la caja
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
};




















/////Saulo 

// zoom de imagen


document.onmousemove=mtrack;
					function mtrack(e) {
						var x,y,x1,x2,y1,y2;
						fact=800/400;
						opp=100;
			
						if (e==null) e=window.event;
						x=e.clientX;
						y=e.clientY;
			
						x1=-opp+(x)*fact;
						y1=-opp+(y)*fact; 
						x2=+opp+(x)*fact; 
						y2=+opp+(y)*fact; 
			
						document.images.big.style.display="inline";
						document.images.big.style.left=(x)*(1-fact);
						document.images.big.style.top=(y)*(1-fact);
						document.images.big.style.clip="rect("+y1+"px,"+x2+"px,"+y2+"px,"+x1+"px)";
					}
                    

function openModal() {
    // Obtén la ventana modal
    var modal = document.getElementById("myModal");

    // Muestra la ventana modal
    modal.style.display = "block";
  }



//document.getElementById('precio').innerHTML='$'+precio;



function verMensaje(id){
    document.getElementById(id).classList.add('mostrar');
}

function ocultarMensaje(id){
    document.getElementById(id).classList.remove('mostrar');
}

function agregar(id){
    document.getElementById(id).classList.add('mostrar');
}

function cerrar(id){
        document.getElementById(id).classList.remove('mostrar');
    }

    function calcularcuadro(costo){
        precio = precio + costo;
        document.getElementById('precio').innerHTML='$'+precio;
    }       

    function restar(costo){
        precio = precio - costo;
        
        if(costo==null)
        precio=0;

        document.getElementById('precio').innerHTML='$'+precio;
    }       



















    /////Saulo Carro

    

