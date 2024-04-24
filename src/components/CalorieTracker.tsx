import { useMemo } from "react";
import type { Activity } from "../types";
import CalorieDisplay from "./CalorieDisplay";

type CalorieTrackerProps = {
  activities: Activity[];
};

function CalorieTracker({ activities }: CalorieTrackerProps) {
  const caloriesCount = useMemo(
    () =>
      activities.reduce(
        (total, item) => (item.category === 1 ? total + +item.calories : total),
        0
      ),
    [activities]
  );
  const caloriesBurn = useMemo(
    () =>
      activities.reduce(
        (total, item) => (item.category === 2 ? total + +item.calories : total),
        0
      ),
    [activities]
  );
  const netCalories = useMemo(() => caloriesCount - caloriesBurn, [activities]);
  return (
    <>
      <h2 className="text-4xl font-black text-white text-center">
        Resumen de Calorias
      </h2>
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
        <CalorieDisplay calories={caloriesCount} text={"consumidas"} />
        <CalorieDisplay calories={caloriesBurn} text={"quemadas"} />
        <CalorieDisplay calories={netCalories} text={"diferencia"} />
      </div>
    </>
  );
}

export default CalorieTracker;
