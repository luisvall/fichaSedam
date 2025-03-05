export default function Empresa() {
  return (
    <form className="formBussiness">
      <div className="data">
        <label htmlFor="empresa">Empresa</label>
        <input type="text" placeholder="los almendros spa" />
      </div>
      <div className="data">
        <label htmlFor="posicion">Posición/Cargo</label>
        <input type="text" placeholder="Técnico en enfermería" />
      </div>
      <div className="tiempo">
        <div>
          <label htmlFor="">Desde</label>
          <input type="date" />
        </div>
        <div>
          <label htmlFor="">Hasta</label>
          <input type="date" />
        </div>
      </div>
    </form>
  );
}
