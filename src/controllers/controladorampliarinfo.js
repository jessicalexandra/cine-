// perguntando por un dato que esta almacenado en la memoria 

let datosPeliculaSeleccionada=JSON.parse(localStorage.getItem("peliculaSeleccionada"))

console.log(datosPeliculaSeleccionada)

let poster=datosPeliculaSeleccionada.poster
let nombre=datosPeliculaSeleccionada.nombre
let genero=datosPeliculaSeleccionada.genero
let sipnosis=datosPeliculaSeleccionada.sipnosis
let duracion=datosPeliculaSeleccionada.duracion
let actores=datosPeliculaSeleccionada.actores
let clasificacion=datosPeliculaSeleccionada.clasificacion
let idioma=datosPeliculaSeleccionada.idioma
let director=datosPeliculaSeleccionada.director

// cargando datos 

let foto=document.getElementById("foto")
foto.src=datosPeliculaSeleccionada.poster

let Titulopeli=document.getElementById("Titulopeli")
Titulopeli.textContent=nombre

let  Sipnopeli=document.getElementById("Sipnopeli")
Sipnopeli.textContent=sipnosis

let peligenero=document.getElementById("peligenero")
peligenero.textContent=genero

let duracionpeli=document.getElementById("duracionpeli")
duracionpeli.textContent=duracion

let actorespeli=document.getElementById("actorespeli")
actorespeli.textContent=actores

let clasificapeli=document.getElementById("clasificapeli")
clasificapeli.textContent=clasificacion


let idiomapeli=document.getElementById("idiomapeli")
idiomapeli.textContent=idioma

let direcpeli=document.getElementById("direcpeli")
direcpeli.textContent=director

