import { component$, useStore, useTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import * as dvb from "dvbjs"; 
import { Stop, StopItem } from '~/components/stop/stopItem';


export default component$(() => {
  const state = useStore({
    search: 'postplatz',
    stops: []
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
  } )

  return (
    <div class="flex-auto items-center bg-slate-200">
      <div class="flex items-center p-8">
      <input type="text" class="sm:w-3/4 lg:w-1/2 p-3 rounded-lg flex-auto shadow-inner" value={state.search} onInput$={(event) => (
        state.search = (event.target as HTMLInputElement).value
      )}/>
      </div>
      <div class="
        grid grid-cols-1 md:grid-cols-2 md:gap-6
        p-4 rounded-md bg-slate-100 mx-2
      ">
        { state.stops.map((stop) =>
            <StopItem stop={ stop } />
        )}
      </div>

    </div>
  );
});

export const head: DocumentHead = {
  title: 'qwikest way',
  meta: [
    {
      name: 'QwikDVB',
      content: 'Navigation in Dresden with DVB',
    },
  ],
};
