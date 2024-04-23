//NOTE - los reducers son un hook que esta basado en useState, es para manejar el state osea que el state esta dentro de usereducer
/*
    administra el estado, es ideal para manejar estados donde el nuevo estado depende del anterior o
    cuando hay multiples subvalores, o logiac condicional a considerar
    TERMINOS IMPORTANTES:
    -> STATE: VALOR CUYA LOGICA ES MANEJADA DENTRO DEL REDUCER
    -> INITIAL STATE: STATE INICIAL CON EL QUE ES CREADO EL REDUCER
    -> ACTIONS: ACTIONES O FUNCIONES QUE MANEJAN LA LOGICA PARA MODIFICAR EL STATE
    -> PAYLOAD: LA INFO QUE MODIFICA EL STATE
    -> DISPATCH: FUNCION QUE MANDA A LLAMAR LA ACCION CON EL PAYLOAD, UN TRIGGER 
*/

import type { Activity } from "../types"


//SECTION - Types

export type ActivityActions = 
    {type:"save-activity", payload: {newActivity:Activity}}
    //NOTE - puede ser mas de una con join asi-> |{type:"delete-activity", payload: {id:id}}

type ActivityState = {
    activities:Activity[]
}


//SECTION - Estado inicial del estado
export const initialState:ActivityState ={
    //lista de actividades que se va llenando cuando el usuario escribe una nueva actividad en el form
    activities: []
}

//SECTION - Reducer
export function activityReducer(
    state:ActivityState = initialState,
    action:ActivityActions 

){
    if(action.type === "save-activity"){
        //ESTE CODIGO MANEJA LA LOGICA PARA ACTUALIZAR EL STATE
        console.log("DESDE SAVE-ACTIVITY ESTE ES EL PAYLOAD PASADO DESDE EL FORM: " + action.payload.newActivity)

        //NOTE - EN ESTOS IF SE TIENE QUE TENER EL RETURN QUE ES EL ESTADO ACTUALIZADO
        return{
            ...state, //copia de mi state
            activies: [...state.activities, action.payload.newActivity]//seting the payload in the state
        }
    }
}