import mongoose from 'mongoose';
import * as model from './models/estudiantes.js';

mongoose.connect('mongodb://localhost:27017/colegio')
    .then(() => console.log('Base de datos conectada'))
    .catch(err => console.log(err))

// model.estudianteModel.find()
//     .then(users => console.log(users))
//     .catch(err => console.log(err))

// const estudiantes = [
//     { nombre: 'Pedro', apellido: 'Mei', edad: 21, dni: '31155898', curso: '1A', nota: 7 },
//     { nombre: 'Ana', apellido: 'Gonzalez', edad: 32, dni: '27651878', curso: '1A', nota: 8 },
//     { nombre: 'José', apellido: 'Picos', edad: 29, dni: '34554398', curso: '2A', nota: 6 },
//     { nombre: 'Lucas', apellido: 'Blanco', edad: 22, dni: '30355874', curso: '3A', nota: 10 },
//     { nombre: 'María', apellido: 'García', edad: 36, dni: '29575148', curso: '1A', nota: 9 },
//     { nombre: 'Federico', apellido: 'Perez', edad: 41, dni: '320118321', curso: '2A', nota: 5 },
//     { nombre: 'Tomas', apellido: 'Sierra', edad: 19, dni: '38654790', curso: '2B', nota: 4 },
//     { nombre: 'Carlos', apellido: 'Fernández', edad: 33, dni: '26935670', curso: '3B', nota: 2 },
//     { nombre: 'Fabio', apellido: 'Pieres', edad: 39, dni: '4315388', curso: '1B', nota: 9 },
//     { nombre: 'Daniel', apellido: 'Gallo', edad: 25, dni: '37923460', curso: '3B', nota: 2 }
// ]

// const estudiantesSaveModels = estudiantes.map(estudiante => new model.estudianteModel(estudiante));

// model.estudianteModel.insertMany(estudiantesSaveModels)
//     .then(estudiantes => console.log(estudiantes))
//     .catch(err => console.log(err))

// // Estudiantes ordenados alfabeticamente
// model.estudianteModel.find().sort({ nombre: 1})
//     .then(estudiantes => console.log(estudiantes))
//     .catch(err => console.log(err))

// // Estudiante mas joven
// model.estudianteModel.find().sort({ edad: 1}).limit(1)
//     .then(estudiantes => console.log(estudiantes))
//     .catch(err => console.log(err))

// // Estudiantes de 2A
// model.estudianteModel.find({ curso: "2A"})
//     .then(estudiantes => console.log(estudiantes))
//     .catch(err => console.log(err))


// // Segundo estudiante mas joven
// model.estudianteModel.find().sort({ edad: 1}).limit(1).skip(1)
//     .then(estudiantes => console.log(estudiantes))
//     .catch(err => console.log(err))

// // Nombre y apellido de estudiantes
// model.estudianteModel.find({}, {nombre:1, apellido:1})
//     .then(estudiantes => console.log(estudiantes))
//     .catch(err => console.log(err))

// // Estudiantes con 10
// model.estudianteModel.find({ nota: 10 })
//     .then(estudiantes => console.log(estudiantes))
//     .catch(err => console.log(err))

// // Promedio de notas
// model.estudianteModel.find()
//     .then(estudiantes => promedioNota(estudiantes))
//     .catch(err => console.log(err))

// const promedioNota = estudiantes =>{
//     const sum = estudiantes.reduce(function (cont, estudiante) {
//         return cont + estudiante.nota;
//     }, 0);
//     console.log('Promedio de las notas', sum / estudiantes.length);
// }


// // Promedio de notas 1A
// model.estudianteModel.find({ curso: "1A"})
//     .then(estudiantes => promedioNota(estudiantes))
//     .catch(err => console.log(err))

// const promedioNota = estudiantes =>{
//     const sum = estudiantes.reduce(function (cont, estudiante) {
//         return cont + estudiante.nota;
//     }, 0);
//     console.log('Promedio de las notas', sum / estudiantes.length);
// }


// MongoDB CRUD

// model.estudianteModel.updateOne( { nombre: "Lucas", apellido: "Blanco" }, { 
//     $set: { dni: 20355875 } })
//     .then(estudiante => console.log(estudiante))
//     .catch(err => console.log(err))


// model.estudianteModel.updateMany({}, { 
//     $set: { ingreso: false } })
//     .then(() => console.log('Ingreso agregado'))
//     .catch(err => console.log(err))

// model.estudianteModel.updateMany({ curso: "1A" }, {
//     $set: { ingreso: true } })
//     .then(() => console.log('Ingreso modificado para 1A'))
//     .catch(err => console.log(err))

// model.estudianteModel.find({ nota: { $gte: 4 }}, { _id: 0, __v: 0})
//     .then(estudiantes => console.log(estudiantes))
//     .catch(err => console.log(err))

// model.estudianteModel.find({ ingreso: true }, { _id: 0, __v: 0})
//     .then(estudiantes => console.log(estudiantes))
//     .catch(err => console.log(err))

// model.estudianteModel.deleteMany({ ingreso: true})
//     .then(() => console.log('Estudiantes ingreso true eliminado'))
//     .catch(err => console.log(err))