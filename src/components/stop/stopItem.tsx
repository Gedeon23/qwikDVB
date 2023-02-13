import { component$, useContext, $ } from "@builder.io/qwik";
import { AppState } from "~/routes";

export interface Stop {
    city: String;
    coords: [];
    name: String;
    id: String;
    type: String;
}

// enum ClickPurpose {
//     setStart = 0,
//     setStop,
//     displayDetail,
// }

export interface Prop {
    stop: Stop;
    // purpose: ClickPurpose;
}

export const StopItem = component$<Prop>((prop) => {
    if (prop.stop == undefined) {
        prop.stop.name = "search for a stop";
    }

    const globalState = useContext(AppState);

    return (
        <div>
            <h1>{prop.stop.name}</h1>
            <h3>{prop.stop.city}</h3>
            <i class="text-xs text-gray-500">{prop.stop.id}</i>
        </div>
    );
});
