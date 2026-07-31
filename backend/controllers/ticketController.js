const ticketModel = require("../models/ticketModel");


// GET todos los tickets
const listarTickets = async (req, res) => {
    try {
        const tickets = await ticketModel.obtenerTickets();
        res.json(tickets);

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};


// GET por ID
const buscarTicket = async (req, res) => {

    try {

        const ticket = await ticketModel.obtenerTicketPorId(req.params.id);

        if (!ticket) {
            return res.status(404).json({
                mensaje: "Ticket no encontrado"
            });
        }

        res.json(ticket);

    } catch(error){
        res.status(500).json({
            error:error.message
        });
    }
};


// POST crear ticket
const registrarTicket = async (req,res)=>{

    try{

        const nuevo = await ticketModel.crearTicket(req.body);

        res.status(201).json(nuevo);

    }catch(error){

        res.status(500).json({
            error:error.message
        });
    }
};


// PUT actualizar
const modificarTicket = async (req, res) => {

    try {

        console.log("ID:", req.params.id);
        console.log("BODY:", req.body);

        const actualizado = await ticketModel.actualizarTicket(
            req.params.id,
            req.body
        );

        res.json(actualizado);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: error.message
        });
    }
};


// DELETE eliminar
const borrarTicket = async(req,res)=>{

    try{

        const eliminado = await ticketModel.eliminarTicket(
            req.params.id
        );

        res.json(eliminado);

    }catch(error){

        res.status(500).json({
            error:error.message
        });
    }
};


module.exports={
    listarTickets,
    buscarTicket,
    registrarTicket,
    modificarTicket,
    borrarTicket
};