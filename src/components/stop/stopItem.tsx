import { component$ } from '@builder.io/qwik';

export interface Stop {
  city: String;
  coords: [];
  name: String;
  id: String;
  type: String;
}

export interface Prop {
  stop: Stop;
}

export const StopItem = component$<Prop>((prop) => {
  return (
    <div class="bg-slate-100 p-3 border-t-2 ">
      <h1>{ prop.stop.name }</h1>
      <h3>{ prop.stop.city }</h3>
    </div>
  );
});