import { useReducer, useEffect, useMemo } from 'react';
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import ActivityList from "./components/ActivityList";
import CalorieTracker from './components/CalorieTracker';


function App() {
  const[state, dispatch] = useReducer(activityReducer,initialState);
  const canRestartApp = useMemo(()=>state.activities.length,[state.activities])
  //!SECTION adding activities to the localstorage
  useEffect(()=>localStorage.setItem("activities",JSON.stringify(state.activities)) ,[state.activities])
  return (
    <>
      <header className="p-4 bg-lime-600 ">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-lg text-white font-bold uppercase">Contador de calorias</h1>
          <button 
            className='bg-gray-800 hover:bg-gray-900 p-2 font-bold text-white rounded-md uppercase disabled:opacity-10'
            onClick={()=>dispatch({type:"restart-app"})}
            disabled={!canRestartApp}>
            Reiniciar App
          </button>
        </div>
      </header>
      <section className="bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form
            dispatch={dispatch}
            state={state}
          />
        </div>
      </section>
      <section className="bg-gray-800 p-10">
        <div className="max-w-4xl mx-auto">
          <CalorieTracker
            activities={state.activities}
          />
        </div>
      </section>
      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList
          activities={state.activities}
          dispatch = {dispatch}
        />
      </section>
    </>
  )
}

export default App
