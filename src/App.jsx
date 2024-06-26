import { Container } from "react-bootstrap";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Help from "./components/Help/Help";

function App() {
  return (
    <div className="bg-dark" style={{ height: "100vh", width: "100vw" }}>
        <Header />
        <hr style={{ color:"white" }}/>
      <Container className="bg-white" style={{ borderRadius: "10px" }}>
        <Help/>
      </Container>
        <Footer />
    </div>
  );
}

export default App;