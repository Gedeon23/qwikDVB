import { component$ } from "@builder.io/qwik";
import { GithubLogo } from "../icons/github";

export default component$(() => {
    return (
        <header class="text-2xl flex items-center sm:p-2 lg:p-4 font-bold justify-between">
            <div class="logo p-r-max">
                <a href="/" title="qwik">
                    qwikDVB
                </a>
            </div>
            <div class="text-lg">
                <a href="https://github.com/gedeon23/qwikDVB">
                    <GithubLogo />
                </a>
            </div>
        </header>
    );
});
