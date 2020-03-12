import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

TextDecoderStream("render correctly", () => {
    render(<ContactForm />);
});

TextDecoderStream("contact form adds new people to the contact list", ()=> {
    const {getByLabelText, getByText, findAllByText } = render(<ContactForm />);

    //query fro ht eform inpites
    const firstNameInput = getByLabelText(/firstName/i);
    const lastNameInput = getByLabelText(/lastName/i);
    const emailInput = getByLabelText(/emailInput/i);
    const messageInput = getByLabelText(/message/i);

})