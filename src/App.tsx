import { useReducer } from "react"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import ActivityList from "./components/ActivityList";


function App() {
  //!SECTION nuestro codigo no sabe cuando ejecutar las acciones del reducer, por eso distpatcher se usa para decirle donde
  //NOTE - COMO PUEDO TENER VARIOS REDUCERS POR ESO NECESITO PASAR COMO PRIMER PARAMETRO CUAL REDUCER(ACTIVITYREDUCER)
  const[state, dispatch] = useReducer(activityReducer,initialState);
  return (
    <>
      <header className="p-4 bg-lime-600 ">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-lg text-white font-bold uppercase">Contador de calorias</h1>
        </div>
      </header>
      <section className="bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form
            dispatch={dispatch}
          />
        </div>
      </section>
      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList
          activities={state.activities}
        />
      </section>
    </>
  )
}

export default App

//SECTION -para instalar Tailwind: npm i -D tailwindcss postcss autoprefixer
//SECTION - luego para generar archivo de tailwind.config.js: npx tailwind init -p
