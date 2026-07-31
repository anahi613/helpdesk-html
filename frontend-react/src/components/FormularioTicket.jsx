import { useState } from "react";
import DOMPurify from "dompurify";
import api from "../services/api";
import "../styles/formulario.css";

function FormularioTicket({ onTicketCreado }) {

  const [ticket, setTicket] = useState({
    titulo: "",
    descripcion: "",
    categoria: "",
    prioridad: "Media",
    estado: "Abierto"
  });

  const manejarCambio = (e) => {
    setTicket({
      ...ticket,
      [e.target.name]: e.target.value
    });
  };

  const guardarTicket = async (e) => {

    e.preventDefault();

    const datos = {
      titulo: DOMPurify.sanitize(ticket.titulo),
      descripcion: DOMPurify.sanitize(ticket.descripcion),
      categoria: DOMPurify.sanitize(ticket.categoria),
      prioridad: ticket.prioridad,
      estado: ticket.estado
    };

    try {

      await api.post("/tickets", datos);
      if (onTicketCreado) {
          onTicketCreado();
         }

      alert("Ticket registrado correctamente");

      setTicket({
        titulo: "",
        descripcion: "",
        categoria: "",
        prioridad: "Media",
        estado: "Abierto"
      });

      if (onTicketCreado) {
        onTicketCreado();
      }

    } catch (error) {

      console.error(error);

      alert("Error al registrar el ticket");

    }
  };

  return (

    <form className="formulario" onSubmit={guardarTicket}>

      <h2>Registrar Incidente</h2>

      <input
        type="text"
        name="titulo"
        placeholder="Título"
        value={ticket.titulo}
        onChange={manejarCambio}
        required
      />

      <textarea
        name="descripcion"
        placeholder="Descripción"
        value={ticket.descripcion}
        onChange={manejarCambio}
        required
      />

      <input
        type="text"
        name="categoria"
        placeholder="Categoría"
        value={ticket.categoria}
        onChange={manejarCambio}
        required
      />

      <select
        name="prioridad"
        value={ticket.prioridad}
        onChange={manejarCambio}
      >
        <option>Alta</option>
        <option>Media</option>
        <option>Baja</option>
      </select>

      <button type="submit">
        Guardar Ticket
      </button>

    </form>

  );
}

export default FormularioTicket;