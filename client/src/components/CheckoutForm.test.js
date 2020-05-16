import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const form = render(<CheckoutForm />);

    const headerText = form.queryByText(/Checkout Form/i);

    expect(headerText).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    const form = render(<CheckoutForm />);
    const button = document.getElementsByTagName('button');
    fireEvent.click(button[0]);
    const successText = form.queryByText(/Woo-hoo!/i)
    expect(successText).toBeInTheDocument();
});
