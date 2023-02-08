import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';
import { Footer } from '~/components/footer/footer';
import { GithubLogo } from '~/components/icons/github';

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
        <Footer />
      </main>
    </>
  );
});
