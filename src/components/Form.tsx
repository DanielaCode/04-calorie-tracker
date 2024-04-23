import { categories } from "../data/categories";

function Form() {
  return (
    <form className="p-10 space-y-5 bg-white rounded-lg shadow-md">
      <section className="grid grid-cols-1 gap-3">
        <label htmlFor="caregory" className="font-bold">
          Categoria:
        </label>
        <select
          id="category"
          name="category"
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
        >
          {categories.map((e) => (
            <option key={e.id} value={e.id}>
              <label htmlFor={e.name}>{e.name}</label>
              <input type="text" name={e.name} />
            </option>
          ))}
        </select>
      </section>
      
      <section className="grid grid-cols-1 gap-3">
        <label htmlFor="activity" className="font-bold">
          Actividad:
        </label>
        <input
          type="text"
          name="activity"
          id="activity"
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          placeholder="EJ. comida, jugo de naranja, ensalada"
        />
      </section>

      <section className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">
          Calorias:
        </label>
        <input
          type="number"
          name="calories"
          id="calories"
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          placeholder="EJ calorias. 200, 500"
        />
      </section>
      
      <input 
        type="submit" 
        value="Guardar comida o ejercicio"
        className=" text-white bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-w"
      />
    </form>
  );
}

export default Form;
