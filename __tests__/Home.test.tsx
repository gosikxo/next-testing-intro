import { render, screen } from "@testing-library/react"
import Home from "../src/app/page"

it("should have Docs text", () => {
  render(<Home />)

  const myElement = screen.getByText("Docs")
  expect(myElement).toBeInTheDocument()
})
