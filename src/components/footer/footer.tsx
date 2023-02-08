import { component$ } from '@builder.io/qwik';
import { GithubLogo } from '../icons/github';
import { FooterItem } from './footeritem';

export const Footer = component$(() => {
  return (
    <footer class="bg-slate-900 text-white p-10 grid grid-cols-1 md:grid-cols-3 grid-rows-3 grid-flow-col space-y-2">
          <FooterItem label="view Code" url="https://github.com/Gedeon23/qwikDVB" />
          <FooterItem label="support development" url="/" />
          <FooterItem label="Datenschutz" url="/datenschutz" />
          <FooterItem label="FAQ" url="/faq" />
      </footer>
  )
});