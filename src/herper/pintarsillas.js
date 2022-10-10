export function pintarsillas(asientos,cinema){
    asientos.forEach(function(hilera){
        let fila=document.createElement("div")
        fila.classList.add("row")
        hilera.forEach(function(asiento){
    
            let columna=document.createElement("div")
            columna.classList.add("col-2")
            
            let fotosilla=document.createElement("img")
            fotosilla.classList.add("img-fluid","w-100")
            fotosilla.setAttribute("id",asiento.id)
    
            if (asiento.estado==0) {
                fotosilla.src="../../assets/img/negra.png"
                
            }else if (asiento.estado==1) {
                
                fotosilla.src="../../assets/img/verde.png"
            }else  {
                fotosilla.src="../../assets/img/rojo.png"
                
            }
    
            // padres e hijos
            columna.appendChild(fotosilla)
            fila.appendChild(columna)
        })
    
        cinema.appendChild(fila)
    
    })
  
    }   