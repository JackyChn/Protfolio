"use client";

import React from "react";
import Form from "./Form";
import FormRow from "./FromRow";
import FormInputBox from "./FormInputBox";
import { useForm } from "react-hook-form";
import useSubmission from "@/app/api/reactQuery/useSubmitInfo";

export default function ContactWindow() {
  const { register, handleSubmit, getValues, formState, reset } = useForm();
  const { errors } = formState;
  useSubmission();

  function submit({ fullName, email, password }) {}
  return (
    <div className="text-center py-20">
      <Form onSubmit={handleSubmit}>
        {/* fullName row */}
        <FormRow label="Name">
          <FormInputBox
            type="text"
            id="fullName"
            disabled={false}
            {...register("fullName", {
              required: "Please enter your full name~",
            })}
          />
        </FormRow>

        {/* phone row*/}
        <FormRow label="Email">
          <FormInputBox
            type="text"
            id="email"
            disabled={false}
            {...register("email", {
              required: "Please enter your email address~",
            })}
          />
        </FormRow>

        <FormRow label="Phone">
          <FormInputBox
            type="text"
            id="phone"
            disabled={false}
            {...register("phone", {
              required: "Please enter your phone number~",
            })}
          />
        </FormRow>

        <FormRow label="Name">
          <FormInputBox
            type="text"
            id="message"
            disabled={false}
            {...register("message", {
              required: false,
            })}
          />
        </FormRow>
      </Form>
    </div>
  );
}
