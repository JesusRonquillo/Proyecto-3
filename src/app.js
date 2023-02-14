const express = require("express");
const postsRouter = require("./posts/posts.router");
const db = require("./utils/database");

const app = express();

app.use(express.json());

require("dotenv").config();

db.authenticate() // mostrar en consola de manera informativa si la conexion se hizo de manera correcta
    .then(() => {
        console.log("Database authenticaded");
    })
    .catch((err) => {
        console.log(err); //errores de autenticacion
    });
db.sync() //sincronizar nuestra base de datos con los modelos que tenemos definidos
    .then(() => {
        console.log("la base de datos se sincronizo correctamente");
    })
    .catch((err) => {
        console.log(err); // error de tablas
    });

app.get("/", (req, res) => {
    res.json({
        message: "Server ok",
        routes: {
            posts: "http://localhost:9000/api/v1/posts",
        },
    });
});
app.use("/api/v1", postsRouter); // nombre del router
app.listen(9000, () => {
    console.log("Server started at port 9000");
});

module.exports = app;
