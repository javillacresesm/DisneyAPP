const express  = require("express");
var cors = require('cors');
const app = express();
const PORT = 3000;
const {Pool} = require("pg");

const pool = new Pool({
    user: "postgre",
    host: "postgre.ctmyk2qy21vm.us-east-1.rds.amazonaws.com",
    database: "postgres",
    password: "11052502", // Considera usar variables de entorno para gestionar contraseñas
    port: 5432,
    ssl: {
      rejectUnauthorized: false, // Cambia a false si tienes problemas de certificados pero trata de evitarlo por seguridad
      // ca: fs.readFileSync('/path/to/server-ca.pem').toString(),
      // Es posible que AWS RDS requiera parámetros SSL específicos o archivos CA.
      // Comprueba la documentación de AWS RDS para obtener los detalles exactos.
    },
  });

app.use(cors());

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.get("/peliculas", async (req, res) => {
    const {rows} = await pool.query(
      "SELECT * FROM PELICULAS;"
    );
    res.json(rows);
    //res.send("Bienvenido a mi API DISNEY");
});

