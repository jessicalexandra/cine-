// declarando arreglos en js
// un arreglo es una variable especial que me permite almacenar multiples datos en una sola variable
// let numeros=[5,2,3,6]
// console.log(numeros[2])

// un objeto es una variable especial q permite que yo almacene  multiples datos en una sola variable 

// let persona={

//     nombre: "juan",
//     profesion: "ingeniero",
//     edad: 33,
//     hincha:true,
//     materiasDitadas:["web2","avanzada","nuevas"],
//     equiposfavoritos:["nacional","liverpool"],
//     comida:{
//         nombre:"bandejapaisa",
//         precio:25000

//     }

// }
// console.log(persona.edad)
// console.log(persona.materiasDitadas)
// console.log(persona.comida.precio)

//----------------------------------------


 let peliculas=[
    {
        nombre:"Thor",
        genero:"Accion",
        duracion:"220 min",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejs-ee0c2.appspot.com/o/0ad765992f80-575x810.png?alt=media&token=54c74a37-6614-4509-80bc-6e6e0e0612fa",
        sinopsis:"Thor está buscando la paz interior, pero la irrupción de Gorr, el asesino de dioses, le obliga a volver al combate. Thor recluta a la Reina Valkiria, Korg y su exnovia, Jane Foster, para que lo ayuden a evitar la extinción de los dioses. ",
        clasificacion:"general",
        idioma: " En subtitulado",
        Director: " Taika Waititi",
        Actores :["Natalie Portman","Karen Gillan","Chris ","Vin Diesel"]
    },
    {
        nombre:"Vértigo",
        genero:"Drama",
        duracion:"120 min",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejs-ee0c2.appspot.com/o/3a4a300b2d2d-2_poster_480x670.png?alt=media&token=77065d7e-9fa0-490d-bfd7-d837cade71c1",
        sinopsis: "Para Becky y Hunter, la vida trata de superar tus miedos y empujar tus límites. Sin embargo, después de subir hasta la cima de una torre de comunicaciones abandonada, se encuentran atrapadas y sin forma de bajar. A 600 metros del suelo y totalmente alejadas de la civilización, las chicas pondrán a prueba sus habilidades de escaladoras expertas y lucharán desesperadamente por sobrevivir aunque lo tengan todo en contra. ¿Lo lograrán?",
        clasificacion:"general",
        idioma: "Español",
        Director: "Scott Mann",
        Actores :["Jeffrey Dean Portman","Virginia Gardner","Grace Caroline Curre"]

    },
    {
        nombre:"Tren bala",
        genero:"Accion",
        duracion:"120 min",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejs-ee0c2.appspot.com/o/578048330292-805x575.jpg?alt=media&token=230cad57-2fa6-4c68-a66e-6821ca04fa0f",
        sinopsis: "En un tren de alta velocidad que se dirige de Tokio a Morioka, cinco asesinos profesionales descubren que van tras el mismo objetivo.",
        clasificacion:"General",
        idioma: "En",
        Director: "David Leitch",
        Actores :["Aaron ","Brad ","Andrew Koji","Benito A Martínez"]
    },
    {
        nombre:"Gemelo Siniestro",
        genero:"Terror",
        duracion:"220 min",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejs-ee0c2.appspot.com/o/5f4b371387a0-2_poster_480x670.png?alt=media&token=c60904a1-7b03-4f37-8e91-a787207b9b0f",
        sinopsis: "Tras la muerte de uno de sus hijos gemelos, Rachel y Anthony se instalan en el campo escandinavo para sanar las heridas anímicas. Allí, sin embargo, ella descubre que una fuerza sobrenatural y maligna quiere llevarse al pequeño que le queda.",
        clasificacion:"General",
        idioma: "Español",
        Director: "Taneli Mustonen",
        Actores :["Teresa Palmer","Tristan Ruggeri","Steven Cree","Barbara Marten"]
    },
    {
        nombre:"Bestia",
        genero:"Terror,Drama",
        duracion:"93 min",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejs-ee0c2.appspot.com/o/773244278719-bst_cineco_2-poster_480x670.jpg?alt=media&token=66022bea-31c9-4249-a5ba-6b641cd19408",
        sinopsis: "El Doctor Nate Samuels, que se ha quedado viudo recientemente, regresa a Sudáfrica, lugar en el que conoció a su mujer, para visitar una reserva de animales con sus hijas. Pero lo que empieza siendo un viaje de relax se convierte en una lucha por la supervivencia cuando un león que ha escapado de unos cazadores furtivos empieza a perseguirles.",
        clasificacion:"General",
        idioma: "Español",
        Director: "Baltasar Kormákur",
        Actores :["Idris Elba","Sharlto Copley","Leah Jeffries","Mel Jarnson"]
    },
    {
        nombre:"The Black Phone",
        genero:"Terror",
        duracion:"120 min",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejs-ee0c2.appspot.com/o/7b749dad9006-575.png?alt=media&token=88fa6f96-189c-46a0-9b8f-2046b64188aa",
        sinopsis: "Un homicida sádico y enmascarado mantiene a Finney, un niño de 13 años, secuestrado en un sótano incomunicado. A través de un teléfono averiado que hay en la pared, Finney se comunica con otras víctimas del criminal, quienes quieren ayudarlo.",
        clasificacion:"General",
        idioma: "Español",
        Director: "Scott Derrickson",
        Actores :["James Ransone","Ethan Hawke","Jeremy Davies","Madeleine McGraw"]
    },
    {
        nombre:"El demonio en el espejo",
        genero:"Terror",
        duracion:"90 min",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejs-ee0c2.appspot.com/o/7c53c1374a5c-480670.jpg?alt=media&token=080e5776-a59e-42e8-8c80-421433d1b989",
        sinopsis: "Sin saber lo que está haciendo, una niña libera a un demonio que atormentó a su madre y su tía en el pasado.",
        clasificacion:"General",
        idioma: "Español",
        Director: "Andrew Mecham",
        Actores :["Jan Broberg","Philip ","Brodie","Chadwick"]
    },
    {
        nombre:"Perro samurai",
        genero:"Anime",
        duracion:"90 min",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejs-ee0c2.appspot.com/o/80d80cb5ba5c-480x670.png?alt=media&token=82eddea4-19df-47f5-a87a-37e73f51b6f4",
        sinopsis: "Un pueblo de gatos se encuentra en peligro y un héroe inesperado surge para ayudarlos: ¡un perro llamado Hank!",
        clasificacion:"General",
        clasificacion:"",
        idioma: "En",
        Director: "Mark ",
        Actores :["Michael Cera","Ricky Gervais","Hounsou","Samuel "]
    },
    {
        nombre:"Invitación al infierno",
        genero:"Terror",
        duracion:"120 min",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejs-ee0c2.appspot.com/o/a9fefd66b48a-480x670.png?alt=media&token=5a637d23-cc8f-4993-b03c-31c9ce95b980",
        sinopsis: "Tras la muerte de su madre y quedarse sin parientes conocidos, Evie (Nathalie Emmanuel) se hace un test de ADN… y descubre a un primo lejano que nunca supo que tuvo. Al ser invitada por su recién encontrada nueva familia a una fastuosa boda en la campiña inglesa, se verá pronto seducida por el sexy aristócrata anfitrión, pero acabará envuelta en una pesadilla de supervivencia al destapar los retorcidos secretos en la historia de su familia y las inconfesables intenciones que se esconden detrás de su pecaminosa generosidad.",
        clasificacion:"General",
        idioma: "Español",
        Director: "Jessica ",
        Actores :["Nathalie Emmanuel","Thomas","Courtney ","Taylor"]
    },
    {
        nombre:"El leopardo de las nieves",
        genero:"Aventura",
        duracion:"120 min",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejs-ee0c2.appspot.com/o/cine.png?alt=media&token=acd0ce28-3ce2-47ca-a1df-4eb54bc9ec44",
        sinopsis: "Las altas mesetas del Tibet. En el corazón de los valles vírgenes e inaccesibles se encuentra uno de los últimos santuarios de la vida salvaje, habitada por una fauna desconocida y poco común. Vincent Munier, uno de los fotógrafos de naturaleza más famosos del mundo, viaja junto al aventurero y escritor Sylvain Tesson, por quien siente una gran admiración.",
        clasificacion:"General",
        idioma: "En",
        Director: "Marie Amiguet",
        Actores :["Kobalann","Bureau","Sylvain"]
    }


 ]
 let estrenos=[
    {
        nombre:"Peleando por mi Vida",
        genero:"Accion",
        duracion:"220 min",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejs-ee0c2.appspot.com/o/5e48938a9c00-srv_poster-dsktp_480x670.png?alt=media&token=56d392cd-b225-447a-9297-040a4c54df78",
        sinopsis:"Después de la Segunda Guerra Mundial, Harry Haft es un boxeador que luchó contra sus compañeros prisioneros en los campos de concentración para sobrevivir. Atormentado por los recuerdos y la culpa, intenta usar peleas de alto perfil contra leyendas del boxeo como Rocky Marciano como una forma de encontrar a su primer amor nuevamente ",
        clasificacion:"general",
        idioma: " En subtitulado",
        Director: " Barry Levinson",
        Actores :["Ben Foster","Billy Magnussen","CVicky Krieps"]
    },
    {
        nombre:"Érase Una Vez un Genio",
        genero:"Fantasia",
        duracion:"120 min",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejs-ee0c2.appspot.com/o/04e340701e48-480x670.png?alt=media&token=2b87e86d-33ea-42f9-b911-2c01dd3ce46e",
        sinopsis: " Una aventura fantástica donde una mujer, Alithea(Tilda Swinton) descubre un genio (Idris Elba) en una lámpara. Ella es consciente que ninguna historia sobre deseos concedidos tiene un final feliz, así se niega a pedir sus 3 deseos que liberarían al genio",
        clasificacion:"general",
        idioma: "Español",
        Director: "Scott Mann",
        Actores :["Idris Elba","Virginia Gardner","Alyla  Caroline Curre"]

    },
    {
        nombre:"Tren La Ciudad de las Fieras",
        genero:"Accion",
        duracion:"120 min",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejs-ee0c2.appspot.com/o/8185fab4fbab-480x670.png?alt=media&token=bbbb7192-a633-4d72-9e51-ed77c2cc440d",
        sinopsis: "Tras la muerte de su madre, Tato, un joven amante del rap, se rehúsa a dejar Medellín para vivir en el campo con un abuelo que no sabía que tenía.",
        clasificacion:"General",
        idioma: "En",
        Director: "Henry E. Rincón",
        Actores :["Héctor","Valeria  ","Octavio","Rogelio"]
    },
    {
        nombre:"Cuando el Diablo Llama",
        genero:"Terror",
        duracion:"220 min",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejs-ee0c2.appspot.com/o/16b26d47ff53-480x670.png?alt=media&token=57356c95-3056-45d3-abda-2d21aba748e4",
        sinopsis: "Shirin se acaba de mudar a una casa adosada en las afueras de la ciudad con su compañero Fredrik y el hijo de este, Lucas",
        clasificacion:"General",
        idioma: "Español",
        Director: "Tord Danielsson",
        Actores :["TeWahlgren","James","Jarneheim","Norlén"]
    },
    {
        nombre:"Gallo de Pelea",
        genero:"Comedia,Drama",
        duracion:"93 min",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejs-ee0c2.appspot.com/o/c47e0a99fe9e-gallo-de-pelea-480x670.jpg?alt=media&token=f5868687-98aa-47c5-9cb6-6e44272e8398",
        sinopsis: "A raíz del extraño asesinato de su hijo y después de afrontar muchos años en soledad desde el fallecimiento de su esposa, Gilberto, un humilde y silencioso cultivador, decide ponerle cara a su destino, inspirado por la valentía de un gallo de pelea que misteriosamente aparece en su vida",
        clasificacion:"General",
        idioma: "Español",
        Director: "Harold De Vasten",
        Actores :["Gilberto ","Héctor ","Leah Jeffries","Héctor Mejía"]
    }
]

 // recorriendo un arreglo en js

 let fila=document.getElementById("fila")

 peliculas.forEach(function(pelicula){
    // console.log(pelicula)
    console.log(pelicula.nombre)
    console.log(pelicula.genero)
    console.log(pelicula.duracion)
    console.log(pelicula.poster)
    console.log(pelicula.sinopsis)
    console.log(pelicula.clasificacion)
    console.log(pelicula.idioma)


    
    // // TRAVERSING (CREAR ETIQUETAS DE HTML DESDE JS)
    // let poster=document.createElement("img")
    // poster.src=pelicula.poster
  

    // let nombre=document.createElement("h3")
    // nombre.textContent=pelicula.nombre

    // // padres e hijos
    // fila.appendChild(poster)
    // fila.appendChild(nombre)

    // 1.creamos una columna para casa pelicula

    let columna=document.createElement("div")
    columna.classList.add("col")

    //2 creamos una card para cada pelicula

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100")

    // 3 creamos una foto para cada pelicula

    let poster=document.createElement("img")
    poster.classList.add("card-img-top")
    poster.src=pelicula.poster

    // 4 creamos el nombre de la pelicula
    let nombre =document.createElement("h3")
    nombre.classList.add("card-title","text-center")
    nombre.textContent=pelicula.nombre

    // 5  creamos el genero de cada pelicula 

    let genero=document.createElement("p")
    genero.classList.add("text-start")
    genero.textContent="Genero: "+ pelicula.genero

    //6 creamos el idioma de cada pelicula 

    let idioma =document.createElement("h7")
    idioma.classList.add("fw-bold")
    idioma.textContent= "Idioma: "+pelicula.idioma

    // 7  creamos la sipnosis

    let sipnosis=document.createElement("p")
    sipnosis.classList.add("d-block")
    sipnosis.textContent=pelicula.sinopsis.substring(0,150)+"..."

    // crear la duracion
     let duracion=document.createElement("P")
     duracion.classList.add("text-left","tamano")
     duracion.textContent="Duracion: "+pelicula.duracion

     // crear acores
     let Actores=document.createElement("P")
     Actores.classList.add("text-left","tamano")
     Actores.textContent="Actores: "+pelicula.Actores

     // clasificacion
      
      let clasificacion=document.createElement("P")
      clasificacion.classList.add("text-left","tamano","fw-bold")
      clasificacion.textContent="Clasificacion: "+pelicula.clasificacion




      // // padres e hijos
       tarjeta.appendChild(poster)
       tarjeta.appendChild(nombre)
       tarjeta.appendChild(genero)
       tarjeta.appendChild(idioma)
       tarjeta.appendChild(sipnosis)
       tarjeta.appendChild(duracion)
       tarjeta.appendChild(Actores)
       tarjeta.appendChild(clasificacion)
       columna.appendChild(tarjeta)
       fila.appendChild(columna)



 })

 // detectando seleccion de una pelicula 
 fila.addEventListener("click",function(){
    alert("esta seleccionando una pelicula")
 })
 let fila2=document.getElementById("fila2")

 

 estrenos.forEach(function(pelicula){
    // console.log(pelicula)

    let columna=document.createElement("div")
    columna.classList.add("col")

    //2 creamos una card para cada pelicula

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100")

    // 3 creamos una foto para cada pelicula

    let poster=document.createElement("img")
    poster.classList.add("card-img-top")
    poster.src=pelicula.poster

    // 4 creamos el nombre de la pelicula
    let nombre =document.createElement("h3")
    nombre.classList.add("card-title","text-center")
    nombre.textContent=pelicula.nombre

    // 5  creamos el genero de cada pelicula 

    let genero=document.createElement("p")
    genero.classList.add("text-start")
    genero.textContent="Genero: "+ pelicula.genero

    //6 creamos el idioma de cada pelicula 

    let idioma =document.createElement("h7")
    idioma.classList.add("fw-bold")
    idioma.textContent= "Idioma: "+pelicula.idioma

    // 7  creamos la sipnosis

    let sipnosis=document.createElement("p")
    sipnosis.classList.add("d-block")
   sipnosis.textContent=pelicula.sinopsis.substring(0,150)+"..."

    // crear la duracion
     let duracion=document.createElement("P")
     duracion.classList.add("text-left","tamano")
     duracion.textContent="Duracion: "+pelicula.duracion

     // crear actores
     let Actores=document.createElement("P")
     Actores.classList.add("text-left","tamano","")
     Actores.textContent="Actores: "+pelicula.Actores



      // // padres e hijos
       tarjeta.appendChild(poster)
       tarjeta.appendChild(nombre)
       tarjeta.appendChild(genero)
       tarjeta.appendChild(idioma)
       tarjeta.appendChild(sipnosis)
       tarjeta.appendChild(duracion)
       tarjeta.appendChild(Actores)
       tarjeta.appendChild(clasificacion)
       columna.appendChild(tarjeta)
       fila2.appendChild(columna)

   
 })
