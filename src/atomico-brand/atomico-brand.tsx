import { c, css, Props } from "atomico";

function brand({ color, width }: Props<typeof brand>) {
  return (
    <host shadowDom>
      <h1 class="title">Devu</h1>
    </host>
  );
}

brand.styles = css`
  :host,
  .title {
    color: #800080;
  }
`;
brand.props = {
  color: {
    type: String,
    value: "#232323",
  },
  width: {
    type: String,
    value: "20rem",
  },
};

export const Brand = c(brand);

customElements.define("atomico-brand", Brand);
