import {
    component$,
    useStore,
    createContext,
    useContextProvider,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { TripPlanner } from "~/components/tripPlanner/tripPlanner";

export const AppState = createContext("app-state");

export default component$(() => {
    const state = useStore({
        stops: [{}, {}],
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
