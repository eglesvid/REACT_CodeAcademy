import { render, screen } from "@testing-library/react";
import Card from "../Card";

describe("Card", () => {
  test("Card should be rendered if heading and author are given", async () => {
    render(
      <Card
        heading={
          "There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors."
        }
        author={"Jeff Atwood"}
      />
    );
    const card = await screen.findByText(
      "There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors."
    );
    const buttons = await screen.findAllByRole("button");

    expect(card).toBeInTheDocument();
    expect(buttons.length).toBe(2);
  });

  test("Card should have heading", async () => {
    render(
      <Card
        heading={
          "There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors."
        }
      />
    );
    const heading = await screen.findByText(
      "There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors."
    );

    expect(heading).toBeInTheDocument();
  });

  test("Card should have two buttons", async () => {
    render(<Card />);
    const buttons = await screen.findAllByRole("button");

    expect(buttons.length).toBe(2);
  });
});
