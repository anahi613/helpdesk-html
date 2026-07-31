import { useState } from "react";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import FormularioTicket from "./components/FormularioTicket";
import ListaTickets from "./components/ListaTickets";
import Footer from "./components/Footer";

function App() {

  const [recargar, setRecargar] = useState(false);

  const actualizarLista = () => {
    setRecargar(!recargar);
  };

  return (
    <>
      <Navbar />
      <Dashboard />

      <FormularioTicket
        onTicketCreado={actualizarLista}
      />

      <ListaTickets
        recargar={recargar}
      />

      <Footer />
    </>
  );
}

export default App;