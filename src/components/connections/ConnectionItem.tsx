import { component$, useSignal } from '@builder.io/qwik';
import { IRoute } from 'dvbjs';

export interface Props {
  connection: IRoute
}

export const ConnectionItem = component$<Props>((props) => {
  return (
    <div>
      <h2>{ props.connection.origin?.name }</h2>
      <h2>{ props.connection.destination?.name }</h2>
      {
        props.connection.trips.map((trip) => {
            <span>{ trip.duration.toString() }</span>
            <span>{ trip.interchanges.toString() }</span>
        })
      }
    </div>
  );
});