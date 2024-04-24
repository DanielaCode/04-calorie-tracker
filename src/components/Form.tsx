import { Dispatch, useEffect, useState } from "react";
import { categories } from "../data/categories";
import type { Activity } from "../types";
import { ActivityActions, ActivityState } from '../reducers/activity-reducer';
import {v4 as uuidv4} from "uuid";

type FormProps = {
  dispatch:Dispatch<ActivityActions>,
  state:ActivityState,
}

function Form({dispatch,state}:FormProps) {
  //!SECTION recordar que  useEffect es útil cuando necesitas realizar alguna acción después de que el componente se monte, actualice o desmonte
  useEffect(() => {
    if(state.activeId){
      const activityFinded:Activity = state.activities.filter(e=>e.id===state.activeId)[0];//because the ID is unique so it will only find one
      setActivity(activityFinded);
    }

  }, [state.activeId])
  
 const initialState:Activity = {
  id:uuidv4(),
  category:1,
  name:" ",
  calories:0
}
 const[activity,setActivity] = useState<Activity>(initialState);

 const handleChange=(e:React.ChangeEvent<HTMLSelectElement>|React.ChangeEvent<HTMLInputElement>)=>{
    //console.log(e.target.id+": "+e.target.value)
    
    const isNumberField = ["category","calories"].includes(e.target.id)
    
    setActivity({
      ...activity,
      [e.target.id]: isNumberField?+e.target.value:e.target.value
    })
 }

 const isValidActivity=()=>{
    const {name,calories} = activity
    return name.trim() !== '' && calories > 0
  }

  function handleSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    dispatch({
      type:"save-activity",
      payload:{newActivity:activity}
    })
    setActivity({...initialState,id:uuidv4()});
  }
  return (
    <form className="p-10 space-y-5 bg-white rounded-lg shadow-md" onSubmit={handleSubmit}>
      <section className="grid grid-cols-1 gap-3">
        <label htmlFor="caregory" className="font-bold">
          Categoria:
        </label>
        <select
          id="category"
          name="category"
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          value={activity.category}
          onChange={handleChange}
        >
          {categories.map((e) => (
            <option key={e.id} value={e.id}>
              {e.name}
            </option>
          ))}
        </select>
      </section>
      
      <section className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold">
          Actividad:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          placeholder="EJ. comida, jugo de naranja, ensalada"
          value={activity.name}
          onChange={handleChange}
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
          value={activity.calories}
          onChange={handleChange}
        />
      </section>
      
      <input 
        type="submit" 
        value={activity.category===1?"Guardar comida":"Guardar ejercicio"}
        className=" text-white bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-w disabled:opacity-10"
        disabled={!isValidActivity()}
      />
    </form>
  );
}

export default Form;
