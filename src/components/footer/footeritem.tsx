import { component$ } from "@builder.io/qwik";

export interface FooterItemProps {
    label: String
    url: String
}

export const FooterItem = component$<FooterItemProps>((props) => {
  return (
    <a href={ props.url } class="">
        { props.label }
    </a>
  );
});