
 function aleatorrio(min, max) {return Math.floor(Math.random() * (max - min + 1) + (min))}
            
    //hacer una funcion
    function eleccion(jugada) {
        let resultado = ""
        //copiar el codigo de alert("jugador") y modificarlo para hacer funciones.
            if(jugada == 1){ resultado = "Piedra ⚫️ " } 
            else if(jugada == 2){ resultado = "Papel🧻" } 
            else if(jugada == 3) { resultado ="Tijeras✂️ " }
            else {resultado = "Mal elegido"}
            return resultado
    }

    // 1 es piedra, 2 papel, 3 tiejera
    let jugador = 0
    let pc = 0
    let triunfos = 0 
    let perdidas = 0
    while(triunfos < 3 && perdidas < 3){
        pc = aleatorrio(1,3)
        jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
        //alert("Elege/es " + eleccion)
        alert("Pc elige: " + eleccion(pc))
        alert("Tu eliges: " + eleccion(jugador))
    
        // COMBATE
        if (pc == jugador) {
            alert("EMPATE")
        } else if(jugador == 1 && pc == 3 || jugador == 2 && pc == 1 || jugador == 3 && pc == 2) {
            alert("GANASTE") 
            triunfos =triunfos + 1
        } else {
            alert("PERDISTE") 
            perdidas =perdidas + 1
        } 
    }
    alert("GANASTE " + triunfos + "veces. Perdiste " + perdidas + "veces." )