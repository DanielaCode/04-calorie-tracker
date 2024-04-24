import { useReducer, Dispatch } from 'react';
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import ActivityList from "./components/ActivityList";


function App() {
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
            state={state}
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
