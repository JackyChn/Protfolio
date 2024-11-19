"use client";

import React from "react";
import Form from "./Form";
import FormRow from "./FromRow";
import FormInputBox from "./FormInputBox";
import { useForm } from "react-hook-form";
import useSubmission from "@/app/api/reactQuery hook/useSubmission";

export default function ContactWindow() {
  const { register, handleSubmit, getValues, formState, reset } = useForm();
  const { errors } = formState;
  const { isSubmitting, createSubmission } = useSubmission();

  function submit({
    fullName,
    email,
    phone,
    message,
  }: {
    fullName: string;
    email: string;
    phone: string;
    message: string;
  }) {
    createSubmission(
      { fullName, email, phone, message },
      {
        onSettled: () => reset,
      }
    );
  }
  return (
    <div className="text-center py-20">
      <Form onSubmit={handleSubmit(submit)}>
        {/* fullName row */}
        <FormRow label="Name">
          <FormInputBox
            type="text"
            id="fullName"
            disabled={isSubmitting}
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
            disabled={isSubmitting}
            {...register("email", {
              required: "Please enter your email address~",
            })}
          />
        </FormRow>

        <FormRow label="Phone">
          <FormInputBox
            type="text"
            id="phone"
            disabled={isSubmitting}
            {...register("phone", {
              required: "Please enter your phone number~",
            })}
          />
        </FormRow>

        <FormRow label="Name">
          <FormInputBox
            type="text"
            id="message"
            disabled={isSubmitting}
            {...register("message", {
              required: false,
            })}
          />
        </FormRow>

        <button disabled={isSubmitting}>
          <span className="bg-purple text-white-200">Submit</span>
        </button>
      </Form>
    </div>
  );
}
