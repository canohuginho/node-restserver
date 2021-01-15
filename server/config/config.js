//Puerto
process.env.PORT = process.env.PORT || 3000;

//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Base de datos
let urlBD;

if (process.env.NODE_ENV === 'dev') {
    urlBD = 'mongodb://localhost:27017/cafe';
} else {
    urlBD = process.env.MONGO_URL //'mongodb+srv://admin:7bTaLoUahW7kG74Y@cluster0.5ux0c.mongodb.net/Cafe'; //canohuginho:1.2,gfda
}

process.env.urlBD = urlBD;