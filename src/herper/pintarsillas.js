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
                fotosilla.src="../../assets/img/silla-de-cine (2).png"
                
            }else if (asiento.estado==2) {
                fotosilla.src="../../assets/img/silla-de-cine (1).png"
                
            }
           
    
            // padres e hijos
            columna.appendChild(fotosilla)
            fila.appendChild(columna)
        })
    
        cinema.appendChild(fila)
    
    })
  
    }   