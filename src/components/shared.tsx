import { Component, ParentProps } from 'solid-js';
import { A } from 'solid-start';

export type ChildrenProps = ParentProps;

export interface ContainerProps extends ChildrenProps {
  class?: string;
}

export interface ButtonProps extends ContainerProps {
  to?: string;
  target?: string;
}

export const Container: Component<ContainerProps> = (props) => {
  const composedStyle = () => `max-w-4xl px-8 mx-auto ${props.class}`;
  return <div class={composedStyle()}>{props.children}</div>;
};

export function ButtonLink(props: ButtonProps) {
  const composedStyle = () => `
    uppercase inline-block px-8 py-2 text-sm font-medium transition border border-current
    rounded hover:scale-110 hover:shadow-xl active:opacity-50
    focus:outline-none focus:ring ${props.class}
  `;
  return (
    <A class={composedStyle()} href={props.to ?? ''} target={props.target}>
      {props.children}
    </A>
  );
}
