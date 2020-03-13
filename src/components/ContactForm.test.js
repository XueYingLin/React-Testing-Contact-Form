import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("render correctly", () => {
    render(<ContactForm />);
});

test("contact form adds new member to the contact list", ()=> {
    const {getByLabelText, getByText, findAllByText } = render(<ContactForm />);

    //query for the form inputs
    const firstNameInput = getByLabelText(/first Name/i);
    const lastNameInput = getByLabelText(/last Name/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);

    //fireEvent function from RTL(React Test Library) to fill in the inputs
    fireEvent.change(firstNameInput, {
        target: { name: "firstName", value: "Nikki"}
    });

    fireEvent.change(lastNameInput, {
        target: { name: "lastName", value: "Lin"}
    });

    fireEvent.change(emailInput, {
        target: { name: "email", value: "Nikkiylin@gmail.com"}
    });

    fireEvent.change(messageInput, {
        target: { name: "message", value: "Hi"}
    });

    //query for the submit button
    const submitButton = getByText(/submit/i);

    //clicking the button
    fireEvent.click(submitButton);

    //assertion
    findAllByText(/Nikki/i);


})