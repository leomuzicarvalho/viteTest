import { render } from "@testing-library/vue";
import HelloWorld from "./HelloWorld.vue";

test("it should display text passed as prop", () => {
  const { getByText } = render(HelloWorld, {
    props: {
      msg: "Hi vitest",
    },
  });

  getByText("Hi vitest");
});
