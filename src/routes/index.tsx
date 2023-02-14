import {
    component$,
    useStore,
    createContext,
    useContextProvider,
    useTask$,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { TripPlanner } from "~/components/tripPlanner/tripPlanner";
import * as dvb from "dvbjs";

export const AppState = createContext("app-state");

export default component$(() => {
    const state = useStore({
        stops: [{}, {}],
        connections: [],
        chosenConnection: {},
    });

    useTask$(async ({ track }) => {
        track(() => state.stops);
        console.log("updating connections");
        try {
            state.connections = await dvb.route(
                state.stops[0].id,
                state.stops[1].id
            );
        } catch (error) {
            console.log(error, state.stops);
        }
        console.log(state.connections);
    });

    useContextProvider(AppState, state);

    return (
        <div>
            <TripPlanner />
        </div>
    );
});

export const head: DocumentHead = {
    title: "qwikest way",
    meta: [
        {
            name: "QwikDVB",
            content: "Navigation in Dresden with DVB",
        },
    ],
};
