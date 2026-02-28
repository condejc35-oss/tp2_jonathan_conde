import path from 'path';

//Esto sirve para definir la ruta del ejemplo
const filePath='./data/example.txt';


//Acá obtengo el directorio base
const dirName=path.dirname(filePath);


//Acá obtengo el nombre del archivo sin extensión
console.log('Directorio base:', dirName);


//Con esto obtengo la extensión del archivo
const baseName=path.basename(filePath, '.txt');
console.log('Nombre del archivo:', baseName);


//Acá obtengo la extensión del archivo
const extName=path.extname(filePath);
console.log('Extensión del archivo:', extName);


//Acá creo una nueva ruta
const newPath=path.join('/user', 'docs', 'newfile.txt');
console.log('Nueva ruta:', newPath);

