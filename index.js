const textoIngresado = document.getElementById('textoIngresado');
const textoResultado = document.getElementById('resultado');
const conteResultado = document.getElementById('conte_resultado');
const conteVacio = document.getElementById('conte_vacio');

const alertas = document.getElementById('alerta')
// Botones
const encriptar = document.getElementById('encrip');
const desencriptar = document.getElementById('desencrip');
const copiaTexto = document.getElementById('copiar');

// este evento manda a llamar la funcion de encriptar
encriptar.addEventListener('click', ()=>{
    let frase = encripta(encriptar.value);
    if(frase !==" "){
        view()
        textoResultado.value = frase
        textoIngresado.value = ""
    }else{
        let p = document.createElement('p')
        p.innerHTML ="Usted no ingreso ningún texto"
        alertas.appendChild(p);
        alertas.classList.remove('ocultar')
        setTimeout(()=>{
            alertas.classList.add('ocultar')
        },2000)
    }
});

// este evento manda a llamar la funcion de desencriptar
desencriptar.addEventListener('click', ()=>{
    let frase = encripta(desencriptar.value)
    if(frase !==""){
        view()
        textoResultado.value = frase;
        textoIngresado.value = ""
    }
    else{
        let p = document.createElement('p');
        p.innerHTML ="Usted no ingreso ningún texto"
        alertas.appendChild(p);
        alertas.classList.remove('ocultar')
        setTimeout(()=>{
            alertas.classList.add('ocultar')
            alertas.innerHTML = "";
        },2000)
    }
});

//este evento click copia el texto resultado 
copiaTexto.addEventListener('click',()=>{
    navigator.clipboard.writeText(textoResultado.value)
    let p = document.createElement('p')
    p.innerHTML ="Usted a copiado el texto con exito"
    alertas.style.background="#0a6adf"
    alertas.appendChild(p);
    alertas.classList.remove('ocultar')
    setTimeout(()=>{
        alertas.classList.add('ocultar')
    },2000)
})

// funcion muestra cuando hay resultado
function view(){
    conteResultado.classList.remove("ocultar");
    conteVacio.classList.add("ocultar");

}

function encripta (e){
    let textActual = textoIngresado.value;
    let resultado = " ";
    if(e ==='Encriptar'){
    // for encripta las palabras
        for(i in textActual){
            let letra = textActual[i]
            if(letra == " "){
                resultado= resultado + " ";
                continue;
            }
            let letraR = encriptador(letra);
            resultado = resultado + letraR;
        }
        return resultado;
    }

    if(e === "Desencriptar"){
    // for desencriptar las palabras
        return resultado= textActual.replaceAll('enter','e')
                                    .replaceAll('imes','i')
                                    .replaceAll('ai','a')
                                    .replaceAll('ober','o')
                                    .replaceAll('ufat','u');
    }
}

function encriptador(texto){
    let valor = " ";
    if(texto == "e")return valor = "enter";
    if(texto == "i")return valor = "imes";
    if(texto == "a")return valor = "ai";
    if(texto == "o")return valor = "ober";
    if(texto == "u")return valor = "ufat";
    return texto;
}