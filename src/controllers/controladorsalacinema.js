import { pintarsillas } from "../herper/pintarsillas.js"

let asientos=[
    [{id:"a1",estado:0},{id:"b1",estado:0},{id:"c1",estado:0},{id:"d1",estado:0}],
    [{id:"a2",estado:0},{id:"b2",estado:2},{id:"c2",estado:2},{id:"d2",estado:0}],
    [{id:"a3",estado:0},{id:"b3",estado:0},{id:"c3",estado:0},{id:"d3",estado:0}]
]

// pintar desde js mi sala de cine:

let cinema=document.getElementById("salacinema")

// recorrer los asientos y aplicar traversing





let contadorseleccionado=0;

let asientosocupados=JSON.parse(localStorage.getItem("local"))
if (asientosocupados!=null) {
  pintarsillas(Object.values(asientosocupados),cinema);
  asientos=(Object.values(asientosocupados));
}else{
  pintarsillas(asientos,cinema)
}

// evento de clic en la sala de cine 
cinema.addEventListener("click",function (evento) {
    if(evento.target.tagName=="IMG"){
      let idAsientoSelecconado=evento.target.id

      asientos.forEach (function(hilera){
        hilera.forEach(function(asiento){
            if (asiento.id==idAsientoSelecconado) {
                //encontre el asiento donde el usu se quiere sentar
                if (asiento.estado==0) {
                  asiento.estado=1
                  contadorseleccionado++;
                  evento.target.src="../../assets/img/verde.png"  
                }else if(asiento.estado==1){
                    asiento.estado=0
                    contadorseleccionado--;
                    evento.target.src="../../assets/img/negra.png"  
                }
                
            }
        })
      })

  
        
      }
   
    }
    
)
let validareserva= document.getElementById("validareserva");
let pelicula=JSON.parse(localStorage.getItem("peliculaSeleccionada"));
  let pintarreserva=document.getElementById("pintarreserva")
  validareserva.addEventListener("click",function () {


  let puesto= [];
  cinema.innerHTML="";
  pintarreserva.innerHTML='';

  asientos.forEach (function(hilera){
    hilera.forEach(function(asiento){
        if (asiento.estado==1) {
          asiento.estado=2
          puesto.push(asiento.id)
        }
    })
  })
  

  let divBody=document.createElement("div");
  divBody.classList.add("card-body")

  let h5=document.createElement("h5");
  h5.classList.add("card-title");

  h5.textContent=pelicula.nombre;
  

  let mostrarpuesto="";
  mostrarpuesto = puesto.join(', ');


  let p=document.createElement("p");
  p.classList.add("card-text");
  p.textContent="Puesto: "+ mostrarpuesto
  let precio=7000;

  let divPrecio=document.createElement("p");
  divPrecio.classList.add("card-text");
  divPrecio.textContent = "precio: "+ precio;

  let cantidad=document.createElement("p");
  cantidad.classList.add("card-text");
  cantidad.textContent = "cantidad: "+ contadorseleccionado;

  let valortotal=document.createElement("p");
  valortotal.classList.add("card-text");
  valortotal.textContent = "valor total: "+(precio*contadorseleccionado);

  divBody.appendChild(h5);
  divBody.appendChild(p);
  divBody.appendChild(divPrecio);
  divBody.appendChild(cantidad);
  divBody.appendChild(valortotal);
  pintarreserva.appendChild(divBody);



pintarsillas(asientos,cinema)
 contadorseleccionado=0;

})
