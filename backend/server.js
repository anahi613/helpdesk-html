const express = require("express");
const cors = require("cors");
require("dotenv").config();

const pool = require("./config/db");
const ticketRoutes = require("./routes/ticketRoutes");
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/tickets", ticketRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("🚀 API Help Desk funcionando correctamente");
});

// Probar conexión a PostgreSQL
app.get("/conexion", async (req, res) => {
    try {
        const resultado = await pool.query("SELECT NOW()");
        res.json({
            mensaje: "Conexión exitosa",
            fecha: resultado.rows[0]
        });
    } catch (error) {
        console.error("ERROR:", error);

        res.status(500).json({
            mensaje: "Error al conectar con PostgreSQL",
            error: error.message
        });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});