"use client";

import React from "react";
import FormRow from "./FromRow";
import FormInputBox from "./FormInputBox";
import useSubmission from "@/app/api/reactQuery hook/useSubmission";
import { useForm, SubmitHandler } from "react-hook-form";
import { NewGuest } from "@/app/services/apiSubmitInfo";

export default function ContactWindow() {
  const { register, handleSubmit, formState, reset } = useForm<NewGuest>();
  const { errors } = formState;
  const { isSubmitting, createSubmission } = useSubmission();

  const submit: SubmitHandler<NewGuest> = (data) => {
    createSubmission(data, {
      onSettled: () => reset(),
    });
  };

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

        {/* email row */}
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

        {/* phone row */}
        <FormRow label="Phone">
          <FormInputBox
            type="text"
            id="phone"
            disabled={isSubmitting}
            {...register("phone")}
          />
        </FormRow>

        {/* message row */}
        <FormRow label="Message">
          <textarea
            className="bg-black-200 border border-gray-300 rounded-sm px-3 py-2 shadow-sm min-h-40"
            id="message"
            disabled={isSubmitting}
            {...register("message")}
          />
        </FormRow>

        {/* submit button */}
        <button type="submit" className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="flex px-8 py-2 items-center bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent gap-2">
            Submit
          </div>
        </button>
      </form>
    </div>
  );
}
