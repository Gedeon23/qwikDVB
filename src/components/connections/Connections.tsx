import { AppState } from "~/routes";
import { component$, useContext, useStore } from "@builder.io/qwik";
import { ConnectionItem } from "./ConnectionItem";

export const Connections = component$(() => {
    const globalState = useContext(AppState);

    return (
        <div>
            {globalState.connections.map((connection, i) => (
                <button
                    class="bg-slate-100 p-4 border-t-2 w-full hover:border-4 hover:p-3 h-24 rounded-sm"
                    onClick$={() => globalState.chosenConnection = connection}
                >
                    <ConnectionItem connection={connection} />
                </button>
            ))}
        </div>
    );
});
