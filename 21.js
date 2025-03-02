function obtenerCarta() {
    return Math.floor(Math.random() * 10) + 1;
}

function turnoJugador(jugador, puntos) {
    while (puntos <= 21) {
        let decision = prompt(`Jugador ${jugador}, ¿quieres otra carta? (s/n)`).toLowerCase().trim();
        if (decision === "s") {
            let nuevaCarta = obtenerCarta();
            puntos += nuevaCarta;
            alert(`Jugador ${jugador} saca: ${nuevaCarta} | Total: ${puntos}`);
        } else {
            break;
        }
    }
    return puntos;
}

function jugarRonda() {
    let puntosJugador1 = obtenerCarta() + obtenerCarta();
    let puntosJugador2 = obtenerCarta() + obtenerCarta();

    alert(`Ronda inicial:\nJugador 1: ${puntosJugador1}\nJugador 2: ${puntosJugador2}`);

    puntosJugador1 = turnoJugador(1, puntosJugador1);
    puntosJugador2 = turnoJugador(2, puntosJugador2);

    let mensajeResultado = `Resultados finales:\nJugador 1: ${puntosJugador1}\nJugador 2: ${puntosJugador2}\n\n`;

    if (puntosJugador1 > 21 && puntosJugador2 > 21) {
        mensajeResultado += "Ambos jugadores se pasaron de 21. Empate final.";
    } else if (puntosJugador1 > 21) {
        mensajeResultado += "Jugador 1 se paso de 21. ¡Jugador 2 gana!";
    } else if (puntosJugador2 > 21) {
        mensajeResultado += "Jugador 2 se paso de 21. ¡Jugador 1 gana!";
    } else if (puntosJugador1 > puntosJugador2) {
        mensajeResultado += `Jugador 1 gana con ${puntosJugador1} puntos`;
    } else if (puntosJugador2 > puntosJugador1) {
        mensajeResultado += `Jugador 2 gana con ${puntosJugador2} puntos`;
    } else {
        mensajeResultado += "Empate final.";
    }

    alert(mensajeResultado);
}

do {
    jugarRonda();
    var jugarOtraVez = prompt("¿Quieres jugar otra ronda? (s/n)").toLowerCase().trim();
} while (jugarOtraVez === "s");