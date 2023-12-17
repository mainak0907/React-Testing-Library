import { screen , render } from "@testing-library/react";
import { Greet } from "./greet";
describe("Group 1",()=>{
    test("Greet is working properly", ()=>{
    render(<Greet/>)
    const text = screen.getByText(/hello/i)
    expect(text).toBeInTheDocument()
})
test("Greet renders with a name",()=>{
    render(<Greet name="Mainak"/>)
    const text=screen.getByText("Hello Mainak")
    expect(text).toBeInTheDocument()
})
})
