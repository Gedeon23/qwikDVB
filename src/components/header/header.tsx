import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { GithubLogo } from '../icons/github';

export default component$(() => {

  return (
    <header class="text-2xl flex items-center sm:p-2 lg:p-4 font-bold">
      <div class="logo">
        <a href="/" title="qwik">
          qwikDVB
        </a>
      </div>
    </header>
  );
});
