// consumir datos del spotify

// uri=url+ep

const URI="https://api.spotify.com/v1/artists/7Ey4PD4MYsKc5I2dolUwbH/top-tracks?market=us"

// 2 token
const TOKEN="Bearer BQB2_CEdEkKBMzPLnFqT7GzQNhDW_6679actaIo_Jm3Dasgtg4VOBbRA8bFOs-nYNyCbYWRLyguj9fSJxA6kkVo75vyc3WMEOblNR9gOZdPUGuexZh09-T4iprKQWqysRBlDHeCgoj75sicab0cKOlg5fOFcagM10k5kIKvFDDeOAXfwfOIodXm8fIPlhT_dLHU"

// 3 PETICION
const PETICION={
    method:"GET",
    headers:{Authorization:TOKEN},
}
//04 usamos la promesa fetch para consumir el api

let fila =document.getElementById("fila")
fetch(URI,PETICION)
.then(function (respuesta) {
    return respuesta.json()
})
.then (function (respuesta) {
  let canciones=(respuesta.tracks)

     canciones.forEach(function(cancion){
        console.log(cancion.name)
        console.log(cancion.preview_url)

        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100")

        let audio=document.createElement("audio")
       audio.setAttribute("controls","controls")
       audio.src=cancion.preview_url;

       let nombre=document.createElement("h1")
       nombre.classList.add("text-center")
       nombre.textContent=cancion.name

        tarjeta.appendChild(nombre)
       tarjeta.appendChild(audio);
       columna.appendChild(tarjeta);
       fila.appendChild(columna);

     })
      
     

     })

.catch(function(error) {
    console.log(error)
})