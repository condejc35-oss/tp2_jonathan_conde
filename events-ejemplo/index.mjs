import { EventEmitter } from 'events';

//Crar una instancia de EventEmitter
const emisor = new EventEmitter();

//Definir un evento personalizado
emisor.on('saludo', (nombre) => {
    console.log(`¡Hola, ${nombre}!`);
});

//Emitir el evento Saludo
emisor.emit('saludo','Mundo');

