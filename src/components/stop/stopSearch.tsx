import { component$, useContext, useStore, useTask$ } from "@builder.io/qwik";
import { AppState } from "~/routes";
import { StopItem } from "./stopItem";
import * as dvb from "dvbjs"; 

export const StopSearch = component$(() => {
    const globalState = useContext(AppState);

  const state = useStore({
    search: 'postplatz',
    stops: [],
  })
  
  useTask$( async ({track}) => {
    track(() => state.search);
    console.log("updating");
    try {
      state.stops = await dvb.findStop(state.search);
    } catch (error) {
      console.log(error, state.search)
      console.log(state.search)
    }
  })

  return <div class="rounded-md bg-slate-100 p-2">
      <input type="text" class="w-full text-lg p-4 h-16 shadow-inner bg-slate-50" value={state.search} onInput$={(event) => (
        state.search = (event.target as HTMLInputElement).value
      )}/>
      <div class="grid grid-cols-1 md:grid-cols-2 md:gap-6 p-4 bg-slate-100">
        { state.stops.map((stop, i) =>
            <StopItem stop={ stop } />
        )}
      </div>
  </div>
});
