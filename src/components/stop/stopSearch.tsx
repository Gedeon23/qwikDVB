import {
    component$,
    useContext,
    useStore,
    useTask$,
    $,
} from "@builder.io/qwik";
import { AppState } from "~/routes";
import { StopItem } from "./stopItem";
import * as dvb from "dvbjs";

export const StopSearch = component$(({ StopSelectorState }) => {
    const state = useStore({
        searchQuery: "",
        stops: [], // holds stop suggestions
    });

    // updating results whenever searchQuery changes
    useTask$(async ({ track }) => {
        track(() => state.searchQuery);
        console.log("updating search");
        try {
            state.stops = await dvb.findStop(state.searchQuery);
        } catch (error) {
            console.log(error, state.searchQuery);
            console.log(state.searchQuery);
        }
    });

    const selectStop = $((stop) => {
        StopSelectorState.searching = false;
        StopSelectorState.selectedStop = stop;
    });

    return (
        <div class="rounded-md bg-slate-100 p-2">
            <input
                type="text"
                class="w-full text-lg p-4 h-16 shadow-inner bg-slate-50"
                value={state.searchQuery}
                onInput$={(event) =>
                    (state.searchQuery = (
                        event.target as HTMLInputElement
                    ).value)
                }
                autoFocus
            />
            <div class="grid grid-cols-1 md:grid-cols-2 md:gap-6 p-4 bg-slate-100">
                {state.stops.map((stop, i) => (
                    <button
                        class="bg-slate-100 p-4 border-t-2 w-full hover:border-4 hover:p-3 h-24 rounded-sm"
                        onClick$={() => selectStop(stop)}
                    >
                        <StopItem stop={stop} />
                    </button>
                ))}
            </div>
        </div>
    );
});
