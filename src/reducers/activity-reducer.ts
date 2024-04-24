import type { Activity } from "../types"


export type ActivityActions = 
    {type:"save-activity", payload: {newActivity:Activity}}|
    {type:"set-activeId", payload: {id:Activity["id"]}}|
    {type:"delete-activity", payload: {id:Activity["id"]}}|
    {type:"restart-app"}

 
export type ActivityState = {
    activities:Activity[],
    activeId:Activity["id"]
}

export const initialState:ActivityState ={
    activities: localStorageActivities(),
    activeId:""
}

export function activityReducer(
    state:ActivityState = initialState,
    action:ActivityActions 

){
    if(action.type === "save-activity"){
      
        let updatedActivities:Activity[] = []

        if (state.activeId) {
            //SECTION - asi recorro las actividades en el reducer y encuentro la que tiene el id actual, hecho esto retorno el valor que el usuario acaba de ingresar
            updatedActivities = state.activities.map(e=>e.id===state.activeId?action.payload.newActivity:e)
        } else {
            updatedActivities = [...state.activities, action.payload.newActivity]
        }

        return{
            ...state,
            activities:updatedActivities,
            activeId:""//!SECTION cada que se cree o modifique una nueva actividad, reiniciar 
        }
    }

    if(action.type==="set-activeId"){
        return{
            ...state,
            activeId:action.payload.id
        }
    }

    if(action.type === "delete-activity"){
        
        return{
            ...state,
            activities: state.activities.filter(e=>e.id !== action.payload.id)
        }
    }

    if(action.type==="restart-app"){
        return {
            activities: [],
            activeId:""
        }
    }
    return state;
    
}

function localStorageActivities(){
    const activities =localStorage.getItem("activities");
    return activities?JSON.parse(activities):[]
}