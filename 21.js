const readlineSync = require("readline-sync");

function obtenerCarta() {
    return Math.floor(Math.random() * 10) + 1;
}

let puntosJugador1 = obtenerCarta() + obtenerCarta();
let puntosJugador2 = obtenerCarta() + obtenerCarta();

console.log("Ronda inicial:");
console.log("Jugador 1: " + puntosJugador1);
console.log("Jugador 2: " + puntosJugador2);

function turnoJugador(jugador, puntos) {
    while (puntos <= 21) {
        let decision = readlineSync.question(`Jugador ${jugador}, ¿quieres otra carta? (s/n): `);
        if (decision.toLowerCase() === "s") {
            let nuevaCarta = obtenerCarta();
            puntos += nuevaCarta;
            console.log(`Jugador ${jugador} saca: ${nuevaCarta} | Total: ${puntos}`);
        } else {
            break;
        }
    }
    return puntos;
}

console.log("\nTurno de Jugador 1");
puntosJugador1 = turnoJugador(1, puntosJugador1);

console.log("\nTurno de Jugador 2");
puntosJugador2 = turnoJugador(2, puntosJugador2);

console.log("\nResultados finales:");
console.log("Jugador 1: " + puntosJugador1);
console.log("Jugador 2: " + puntosJugador2);

if (puntosJugador1 > 21 && puntosJugador2 > 21) {
    console.log("Ambos jugadores se pasaron de 21. Empate final");
} else if (puntosJugador1 > 21) {
    console.log("Jugador 1 se paso de 21. Jugador 2 gana");
} else if (puntosJugador2 > 21) {
    console.log("Jugador 2 se pas0 de 21. Jugador 1 gana");
} else if (puntosJugador1 > puntosJugador2) {
    console.log("Jugador 1 gana con " + puntosJugador1 + " puntos");
} else if (puntosJugador2 > puntosJugador1) {
    console.log("Jugador 2 gana con " + puntosJugador2 + " puntos");
} else {
    console.log("Empate final");
}