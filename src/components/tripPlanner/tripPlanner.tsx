import { component$, useContext } from "@builder.io/qwik";
import { AppState } from "~/routes";
import { StopSelector } from "../stop/stopSelector";

export const TripPlanner = component$(() => {
    const globalState = useContext(AppState);

    return (
        <div class="grid grid-cols-5 p-2 min-h-screen">
            {globalState.stops.map((stop, stopSlot) => (
                <div class="col-span-2">
                    <StopSelector selectedStop={stop} stopSlot={stopSlot} />
                </div>
            ))}
        </div>
    );
});
