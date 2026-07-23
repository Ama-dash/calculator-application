import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import App from "../App";

describe("Calculator Application", () => {

  it("shows calculator title", () => {

    render(<App />);

    const title = screen.getByText(
      "Calculator"
    );

    expect(title).toBeInTheDocument();

  });



it("has two number input fields", () => {

    render(<App />);

    const inputs = screen.getAllByRole("spinbutton");

    expect(inputs).toHaveLength(2);

  });

  it("has four operation buttons", () => {

    render(<App />);

    expect(
      screen.getByText("+")
    ).toBeInTheDocument();

    expect(
      screen.getByText("-")
    ).toBeInTheDocument();

    expect(
      screen.getByText("×")
    ).toBeInTheDocument();

    expect(
      screen.getByText("÷")
    ).toBeInTheDocument();

  });


  it("adds two numbers correctly", async () => {


    global.fetch = vi.fn(() =>
        Promise.resolve({
            text: () =>
                Promise.resolve("15")
        })
    );


    render(<App />);


    const inputs = screen.getAllByRole("spinbutton");


    fireEvent.change(inputs[0], {
        target: { value: "10" }
    });


    fireEvent.change(inputs[1], {
        target: { value: "5" }
    });


    const addButton = screen.getByText("+");


    fireEvent.click(addButton);


    await waitFor(() => {

        expect(
            screen.getByText("Result: 15")
        ).toBeInTheDocument();

    });


});

afterEach(() => {
  cleanup();
});

});
 