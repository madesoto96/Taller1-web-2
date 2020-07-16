
//1. necesito un objeto  AJAX para comunicare
let objetoAJAX = new XMLHttpRequest();

//2. necesito una url del servicio
let url="https://api.spotify.com/v1/artists/1r4hJ1h58CWwUQe3MxPuau/top-tracks?country=US";

//3. saber si necesito permiso
let token="Bearer BQARX47yQX0vzsGPfnjmdCFVgMv2Bqz2h5_WExqKnhwcBzYE0cbjeOb7AtbumXdXdwa3Ocx0tTs_DkaCy97yQuF1gAWVSAO2-aJTBFrtfFdFcWGGMfGTMLzkri8ecIFTGnW_iVve-F5F";

//4.abra la conexion
objetoAJAX.open('GET',url,true);

//5.pedir permiso o enviar headers
objetoAJAX.setRequestHeader("Authorization",token);

//6. cargar la informacion del servicio
objetoAJAX.onload=function(){

    let respuesta= JSON.parse(this.responseText);
    
    console.log(respuesta.tracks[0].preview_url);
    console.log(respuesta.tracks[0].album.images[0].url);
    console.log(respuesta.tracks[0].album.name);


    let imagen1 = document.getElementById("imagen1");
    imagen1.src= respuesta.tracks[1].album.images[0].url;
    
    let titulo1=document.getElementById("titulo1");
    titulo1.textContent=respuesta.tracks[1].album.name;

    let audio1=document.getElementById("audio1");
    audio1.src=respuesta.tracks[1].preview_url;

    ////////////////////////////////////

    let imagen2 = document.getElementById("imagen2");
    imagen2.src= respuesta.tracks[4].album.images[0].url;

    let titulo2=document.getElementById("titulo2");
    titulo2.textContent=respuesta.tracks[4].album.name;

    let audio2=document.getElementById("audio2");
    audio2.src=respuesta.tracks[4].preview_url;
    ///////////////////////////////////

    let imagen3 = document.getElementById("imagen3");
    imagen3.src= respuesta.tracks[3].album.images[0].url;

    let titulo3=document.getElementById("titulo3");
    titulo3.textContent=respuesta.tracks[3].album.name;

    let audio3=document.getElementById("audio3");
    audio3.src=respuesta.tracks[3].preview_url;
   ///////////////////////////////////

}

//7. cierre y envie
objetoAJAX.send();