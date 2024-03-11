// import "./App.css";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import home from "./Components/Pages/home";
import AcercadeNosotros from "./Components/Pages/AcercadeNosotros";
import Administracion from "./Components/Pages/Administracion";

// empezar limpiando el proyecto

//en app se conecta con todo el resto de las paginas
//declarar las rutas , instalar reac router, crear archivos dentro de page, importar, y renderizar componente
//para que los link me lleven a la pagina hay q conectar en nadvar.Ir a ese componente
function App() {
  return (
    <>
      <div>
       <BrowserRouter> 
       <header>
          <NavBar />
        </header>
        <main>
          
            <Routes>
              <Route path="/" element={<home/>}></Route>
              <Route
                path="/AcercadeNosotros"
                element={<AcercadeNosotros/>}
              ></Route>
              <Route
                path="/Administracion"
                element={<Administracion/>}
              ></Route>
            </Routes>
          
        </main>
        <body></body>
        <footer>
          <Footer />
        </footer>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
