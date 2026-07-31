import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/tickets.css";

function ListaTickets({ recargar }) {

    const [tickets, setTickets] = useState([]);

    // Cargar todos los tickets
    async function cargarTickets() {

        try {

            const respuesta = await api.get("/tickets");
            setTickets(respuesta.data);

        } catch (error) {

            console.error(error);

        }

    }

    // Eliminar un ticket
    const eliminarTicket = async (id) => {

        const confirmar = window.confirm(
            "¿Desea eliminar este ticket?"
        );

        if (!confirmar) return;

        try {

            await api.delete(`/tickets/${id}`);

            alert("Ticket eliminado correctamente");

            cargarTickets();

        } catch (error) {

            console.error(error);

            alert("No se pudo eliminar el ticket.");

        }

    };
       const cambiarEstado = async (ticket, nuevoEstado) => {

       try {

          await api.put(`/tickets/${ticket.id}`, {
            titulo: ticket.titulo,
            descripcion: ticket.descripcion,
            categoria: ticket.categoria,
            prioridad: ticket.prioridad,
            estado: nuevoEstado
          });

         cargarTickets();

       } catch (error) {

        console.error(error);

        alert("Error al actualizar el estado.");

    }

    };
    // Cargar los tickets al iniciar y cuando se registre uno nuevo
    useEffect(() => {

        cargarTickets();

    }, [recargar]);

    return (

        <div className="contenedor-tickets">

            <h2>Listado de Tickets</h2>

            <table>

                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Título</th>
                        <th>Categoría</th>
                        <th>Prioridad</th>
                        <th>Estado</th>
                        <th>Acciones</th>

                    </tr>

                </thead>

                <tbody>

                    {tickets.length === 0 ? (

                        <tr>
                            <td colSpan="6">
                                No hay tickets registrados.
                            </td>
                        </tr>

                    ) : (

                        tickets.map((ticket) => (

                            <tr key={ticket.id}>

                                <td>{ticket.id}</td>
                                <td>{ticket.titulo}</td>
                                <td>{ticket.categoria}</td>
                                <td>{ticket.prioridad}</td>
              <td>
                   <select
                       value={ticket.estado}
                       onChange={(e) => cambiarEstado(ticket, e.target.value)}
                   >
                      <option value="Abierto">Abierto</option>
                      <option value="En proceso">En proceso</option>
                      <option value="Cerrado">Cerrado</option>
                      </select>
              </td>

                                <td>

                                    <button
                                        className="btn-eliminar"
                                        onClick={() => eliminarTicket(ticket.id)}
                                    >
                                        Eliminar
                                    </button>

                                </td>

                            </tr>

                        ))

                    )}

                </tbody>

            </table>

        </div>

    );

}

export default ListaTickets;