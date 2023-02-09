import { component$, useStore, useTask$, createContext, useContext, useContextProvider } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import { Stop, StopItem } from '~/components/stop/stopItem';
import { StopSearch } from '~/components/stop/stopSearch';

export const AppState = createContext('app-state');

export default component$(() => {

  const state = useStore({
    fromStation: '',
    toStation: ''
  })

  useContextProvider(AppState, state)


  return (
    <div class="flex-auto items-center p-2">
      <StopSearch />
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
