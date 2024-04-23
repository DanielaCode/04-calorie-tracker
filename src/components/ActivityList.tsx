import type { Activity } from "../types"
import { categories } from '../data/categories';
import { useMemo } from "react";

type ActivityListProps = {
    activities: Activity[]
}

function ActivityList({activities}:ActivityListProps) {
    const categoryNameById = useMemo(()=>(e:Activity["category"])=> categories.map(i=>i.id===e?i.name:""),[activities]);
  return (
    <>
        <h2 className="text-4xl font-bold text-slate-600 text-center">Comida y actividades</h2>
        {
            activities.map(e=>(
                <div key={e.id} className="px-5 py-10 bg-white mt-5 flex justify-between shadow-md">
                    <div className="space-y-2 relative">
                        <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${e.category===1?"bg-lime-500":"bg-orange-500"}`}
                        >{categoryNameById(+e.category)}</p>
                        <p className="text-3xl font-black">{e.name}</p>
                        <p className="text-4xl text-lime-500 font-black">{e.calories} Calories</p>
                    </div>
                    <div>

                    </div>
                </div>
            ))
        }
    </>
  )
}

export default ActivityList