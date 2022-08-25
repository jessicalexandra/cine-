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
        duracion:220,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejs-ee0c2.appspot.com/o/0ad765992f80-575x810.png?alt=media&token=54c74a37-6614-4509-80bc-6e6e0e0612fa",
        sinopsis:"Thor está buscando la paz interior, pero la irrupción de Gorr, el asesino de dioses, le obliga a volver al combate. Thor recluta a la Reina Valkiria, Korg y su exnovia, Jane Foster, para que lo ayuden a evitar la extinción de los dioses. ",
        clasificacion:"general",
        idioma: " En subtitulado"
    },
    {
        nombre:"Vértigo",
        genero:"Drama",
        duracion:"120",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejs-ee0c2.appspot.com/o/3a4a300b2d2d-2_poster_480x670.png?alt=media&token=77065d7e-9fa0-490d-bfd7-d837cade71c1",
        sinopsis: "Para Becky y Hunter, la vida trata de superar tus miedos y empujar tus límites. Sin embargo, después de subir hasta la cima de una torre de comunicaciones abandonada, se encuentran atrapadas y sin forma de bajar. A 600 metros del suelo y totalmente alejadas de la civilización, las chicas pondrán a prueba sus habilidades de escaladoras expertas y lucharán desesperadamente por sobrevivir aunque lo tengan todo en contra. ¿Lo lograrán?",
        clasificacion:"general",
        idioma: "Español",

    },
    {
        nombre:"Tren bala",
        genero:"Accion",
        duracion:"120",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejs-ee0c2.appspot.com/o/578048330292-805x575.jpg?alt=media&token=230cad57-2fa6-4c68-a66e-6821ca04fa0f",
        sinopsis: "En un tren de alta velocidad que se dirige de Tokio a Morioka, cinco asesinos profesionales descubren que van tras el mismo objetivo.",
        clasificacion:"General",
        idioma: "En",
    },
    {
        nombre:"Gemelo Siniestro",
        genero:"Terror",
        duracion:"220",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejs-ee0c2.appspot.com/o/5f4b371387a0-2_poster_480x670.png?alt=media&token=c60904a1-7b03-4f37-8e91-a787207b9b0f",
        sinopsis: "Tras la muerte de uno de sus hijos gemelos, Rachel y Anthony se instalan en el campo escandinavo para sanar las heridas anímicas. Allí, sin embargo, ella descubre que una fuerza sobrenatural y maligna quiere llevarse al pequeño que le queda.",
        clasificacion:"General",
        idioma: "Español",
    },
    {
        nombre:"Bestia",
        genero:"Terror,Drama",
        duracion:"93",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejs-ee0c2.appspot.com/o/773244278719-bst_cineco_2-poster_480x670.jpg?alt=media&token=66022bea-31c9-4249-a5ba-6b641cd19408",
        sinopsis: "El Doctor Nate Samuels, que se ha quedado viudo recientemente, regresa a Sudáfrica, lugar en el que conoció a su mujer, para visitar una reserva de animales con sus hijas. Pero lo que empieza siendo un viaje de relax se convierte en una lucha por la supervivencia cuando un león que ha escapado de unos cazadores furtivos empieza a perseguirles.",
        clasificacion:"General",
        idioma: "Español",
    },
    {
        nombre:"The Black Phone",
        genero:"Terror",
        duracion:"120",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejs-ee0c2.appspot.com/o/7b749dad9006-575.png?alt=media&token=88fa6f96-189c-46a0-9b8f-2046b64188aa",
        sinopsis: "Un homicida sádico y enmascarado mantiene a Finney, un niño de 13 años, secuestrado en un sótano incomunicado. A través de un teléfono averiado que hay en la pared, Finney se comunica con otras víctimas del criminal, quienes quieren ayudarlo.",
        clasificacion:"General",
        idioma: "Español",
    },
    {
        nombre:"El demonio en el espejo",
        genero:"Terror",
        duracion:"90",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejs-ee0c2.appspot.com/o/7c53c1374a5c-480670.jpg?alt=media&token=080e5776-a59e-42e8-8c80-421433d1b989",
        sinopsis: "Sin saber lo que está haciendo, una niña libera a un demonio que atormentó a su madre y su tía en el pasado.",
        clasificacion:"General",
        idioma: "Español",
    },
    {
        nombre:"Perro samurai",
        genero:"Anime",
        duracion:"90",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejs-ee0c2.appspot.com/o/80d80cb5ba5c-480x670.png?alt=media&token=82eddea4-19df-47f5-a87a-37e73f51b6f4",
        sinopsis: "Un pueblo de gatos se encuentra en peligro y un héroe inesperado surge para ayudarlos: ¡un perro llamado Hank!",
        clasificacion:"General",
        clasificacion:"",
        idioma: "En",
    },
    {
        nombre:"Invitación al infierno",
        genero:"Terror",
        duracion:"120",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejs-ee0c2.appspot.com/o/a9fefd66b48a-480x670.png?alt=media&token=5a637d23-cc8f-4993-b03c-31c9ce95b980",
        sinopsis: "Tras la muerte de su madre y quedarse sin parientes conocidos, Evie (Nathalie Emmanuel) se hace un test de ADN… y descubre a un primo lejano que nunca supo que tuvo. Al ser invitada por su recién encontrada nueva familia a una fastuosa boda en la campiña inglesa, se verá pronto seducida por el sexy aristócrata anfitrión, pero acabará envuelta en una pesadilla de supervivencia al destapar los retorcidos secretos en la historia de su familia y las inconfesables intenciones que se esconden detrás de su pecaminosa generosidad.",
        clasificacion:"General",
        idioma: "Español",
    },
    {
        nombre:"El leopardo de las nieves",
        genero:"Aventura",
        duracion:"120",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejs-ee0c2.appspot.com/o/cine.png?alt=media&token=acd0ce28-3ce2-47ca-a1df-4eb54bc9ec44",
        sinopsis: "Las altas mesetas del Tibet. En el corazón de los valles vírgenes e inaccesibles se encuentra uno de los últimos santuarios de la vida salvaje, habitada por una fauna desconocida y poco común. Vincent Munier, uno de los fotógrafos de naturaleza más famosos del mundo, viaja junto al aventurero y escritor Sylvain Tesson, por quien siente una gran admiración.",
        clasificacion:"General",
        idioma: "En",
    }


 ]
 // recorriendo un arreglo en js

 peliculas.forEach(function(pelicula){
    // console.log(pelicula)
    console.log(pelicula.nombre)
    console.log(pelicula.genero)
    console.log(pelicula.duracion)
    console.log(pelicula.poster)
    console.log(pelicula.sinopsis)
    console.log(pelicula.clasificacion)
    console.log(pelicula.idioma)

 })
