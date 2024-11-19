"use client";

import React from "react";
import FormInputBox from "./FormInputBox";
import { useForm } from "react-hook-form";
import useSubmission from "@/app/api/reactQuery hook/useSubmission";
import FormRow from "./FromRow";

export default function ContactWindow() {
  const { register, handleSubmit, formState, reset } = useForm();
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
        onSettled: () => reset(),
      }
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen py-20">
      <form
        onSubmit={handleSubmit(submit)}
        className="flex flex-wrap p-6 bg-black-200 border border-gray-600 items-center justify-center rounded-md md:w-[60vh] lg:w-[80vh] relative bg-gray-800 flex-col space-y-4"
      >
        {/* fullName row */}
        <FormRow
          label={
            <>
              Name <span className="text-red-500">*</span>
            </>
          }
        >
          <FormInputBox
            type="text"
            id="fullName"
            disabled={isSubmitting}
            {...register("fullName", {
              required: "Please enter your full name~",
            })}
          />
        </FormRow>

        {/* phone row */}
        <FormRow
          label={
            <>
              Email <span className="text-red-500">*</span>
            </>
          }
        >
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

        <FormRow label="Message">
          <textarea
            className="bg-black-200 border border-gray-300 rounded-sm px-3 py-2 shadow-sm min-h-40"
            id="message"
            disabled={isSubmitting}
            {...register("message", {
              required: false,
            })}
          />
        </FormRow>

        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="flex px-8 py-2 items-center bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent gap-2">
            Submit
          </div>
        </button>
      </form>
    </div>
  );
}
