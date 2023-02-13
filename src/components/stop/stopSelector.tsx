import { component$, useContext, useStore, useTask$ } from "@builder.io/qwik";
import { AppState } from "~/routes";
import { StopItem } from "./stopItem";
import { StopSearch } from "./stopSearch";

export interface StopSelectorProps {
    stopSlot: 0;
    selectedStop: {};
}

export const StopSelector = component$<StopSelectorProps>((props) => {
    const globalState = useContext(AppState);

    const state = useStore({
        searching: false,
        stopSlot: props.stopSlot,
        selectedStop: props.selectedStop,
    });

    // Update global route whenever search changes selected Stop
    useTask$(async ({ track }) => {
        track(() => state.selectedStop);
        console.log("selecting new stop");
        console.log(state.selectedStop);
        globalState.stops[state.stopSlot] = state.selectedStop;
    });

    return (
        <div>
            {state.searching && <StopSearch StopSelectorState={state} />}
            {state.searching || (
                <button
                    onClick$={() => (state.searching = true)}
                    class="bg-slate-100 h-24 p-6 rounded-md border-2 border-black col-span-2 w-full"
                >
                    <StopItem stop={state.selectedStop} />
                </button>
            )}
        </div>
    );
});
