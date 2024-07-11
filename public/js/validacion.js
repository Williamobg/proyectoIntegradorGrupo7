const nombre = document.getElementById("name")
const apellido = document.getElementById("lastname")
const mail = document.getElementById("email")
const telefono = document.getElementById("telefono")
const aviso = document.getElementById("warning")
const form = document.getElementById("formulario")


form.addEventListener("submit",e=> {
    e.preventDefault()
    let alerta = ""
    let regEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let regTel =/[0-9]{3}\s[0-9]{4}\s[0-9]{4}/g
    let entrar= false
    aviso.innerHTML = ""
    if(nombre.value.length <3){
        alerta += `el nombre no es valido <br>`
        entrar=true
    }
    if(apellido.value.length <2){
        alerta += `el apellido no es valido<br>`
        entrar=true
    }
    
    if(!regEmail.test(mail.value)){
    alerta += `el email no es valido<br>`
    entrar=true
    
    }
    if(!regTel.test(telefono.value)){
        alerta += `el telefono no es valido<br>`
        entrar=true
        
        }

    if(entrar){
        aviso.innerHTML= alerta
    }
    else
    {aviso.innerHTML= "enviado"

    }
    
})