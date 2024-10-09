import { Activity } from "../types";

export type ActivityActions = {
  type: "save-activity";
  payload: { newActivity: Activity }; // se puese aniadir multiples acions con la union |
};

type ActivityState = {
  activities: Activity[];
};
export const initialState: ActivityState = {
  activities: [],
};
export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityActions
) => {
  if (action.type === "save-activity") {
    // Este codigo maneja la logica para actualizar el state
    //console.log(action.payload.newActivity); // gracias a esto muestra en la consola lo que estamos ingresanto
    return {
      ...state,
      activities: [...state.activities, action.payload.newActivity],
    };
  }
  return state; // se debe poner siempre para quitar errores
};
