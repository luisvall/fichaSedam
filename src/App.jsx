import { useState } from "react";
import reactLogo from "./assets/react.svg";
import html2pdf from "html2pdf.js";
import Empresa from "./Empresa";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const [skill, setSkill] = useState(1);
  function addWork(element) {
    element.preventDefault();
    setCount(count + 1);
    if (count <= 0) {
      setCount(1);
    }
    console.log(count);
  }
  function addSkill(element) {
    element.preventDefault();
    setSkill(skill + 1);
    if (skill <= 0) {
      setSkill(1);
    }
    console.log(skill);
  }
  const ficha = document.querySelector(".datosPersonales");
  const opt = {
    margin: 1,
    filename: "ficha.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "letter", orientation: "portrait" },
  };

  function handlerSubmit(element) {
    element.preventDefault();
    const worker = html2pdf().from(ficha).set(opt).save();
    console.log(worker);
  }

  return (
    <>
      <div className="datosPersonales">
        <form>
          <div className="header">
            <img src="./logo-sedam-cuidados.svg" alt="LOGO" />
            <h1 className="title">FICHA DE PERSONAL</h1>
          </div>
          <div className="data">
            <label htmlFor="name">Nombre</label>
            <input type="text" placeholder="Juan" />
          </div>
          <div className="data">
            <label htmlFor="lastName">Apellidos</label>
            <input type="text" placeholder="Hernadez Pérez" />
          </div>
          {/* <div className="data">
            <label htmlFor="run">RUN o Pasaporte</label>
            <input type="text" placeholder="11111111-1" />
          </div> */}
          <div className="data">
            <label htmlFor="nacionalidad">Nacionalidad</label>
            <input type="text" placeholder="chilena" />
          </div>
          <div className="data">
            <label htmlFor="region">Región</label>
            <input type="text" placeholder="Metropolitana" />
          </div>
          <div className="data">
            <label htmlFor="comuna">Comuna</label>
            <input type="text" placeholder="Peñalolén" />
          </div>
          <div className="data">
            <label htmlFor="direccion">Dirección</label>
            <input type="text" placeholder="Calle falsa, 1234" />
          </div>
          <div className="data">
            <label htmlFor="telefono">Teléfono</label>
            <input type="text" placeholder="+56912345678" />
          </div>
          <br />
        </form>
        <div className="empresas">
          {[...Array(count)].map((_, index) => (
            <Empresa key={index} />
          ))}
        </div>
        <form className="oneCol">
          <h1 className="header">HABILIDADES</h1>
          <ol>
            {[...Array(skill)].map((_, index) => (
              <li>
                <input type="text" className="" />
              </li>
            ))}
          </ol>
        </form>
        <div className="terminos dflex">
          <input type="checkbox" name="terminos" />
          <label htmlFor="terminos">
            Certifico que todas las respuestas proporcionadas en esta solicitud
            de empleo son verdaderas y completas. Asimismo, autorizo la
            investigación de todas las declaraciones contenidas en este
            formulario, según sea necesario.
          </label>
        </div>
        <div>
          <div className="firma"><span>Nombre completo y firma</span> <div><label htmlFor="today">Fecha</label> <input type="date" /></div></div>
        </div>
      </div>

      <div className="settings">
        <button className="submitBtn btn" onClick={handlerSubmit}>
          Guardar
        </button>
        <button onClick={addWork} className="btn">
          agregar empresa
        </button>
        <button onClick={addSkill} className="btn">
          agregar habilidad
        </button>
      </div>
      <br /><br /><br /><br /><br />
    </>
  );
}

export default App;
