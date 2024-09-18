import { render, screen } from "@testing-library/react";
import App from "./App";

describe("React Demo", () => {
  beforeAll(() => {
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterAll(() => {
    console.warn.mockRestore();
    console.error.mockRestore();
  });

  it("displays title in page", () => {
    render(<App />); // Render the component
    const title = screen.getByText("React Demo"); // Find the title element
    expect(title).toMatchSnapshot(); // Snapshot the specific element
  });
});
