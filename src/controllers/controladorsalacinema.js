import { pintarsillas } from "../herper/pintarsillas.js"

let asientos=[
    [{id:"a1",estado:0},{id:"b1",estado:0},{id:"c1",estado:0},{id:"d1",estado:0}],
    [{id:"a2",estado:0},{id:"b2",estado:2},{id:"c2",estado:2},{id:"d2",estado:0}],
    [{id:"a3",estado:0},{id:"b3",estado:0},{id:"c3",estado:0},{id:"d3",estado:0}]
]

// pintar desde js mi sala de cine:

let cinema=document.getElementById("salacinema")

// recorrer los asientos y aplicar traversing



pintarsillas(asientos,cinema)

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
                  evento.target.src="../../assets/img/silla-de-cine.png"  
                }else if(asiento.estado==1){
                    asiento.estado=0
                    evento.target.src="../../assets/img/silla-de-cine (2).png"  
                }
                
            }
        })
      })

  
        
      }
   
    }
    
)
