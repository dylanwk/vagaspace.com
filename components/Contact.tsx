"use client";

import { sendEmail } from "@/app/actions/sendEmail";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast"

export type FormData = {
  email: string;
  name: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const { toast } = useToast()


  function validateForm(): boolean {
    const newErrors = { email: "", name: "", subject: "", message: "" };
    let isValid = true;

    if (!formData.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email is required";
      isValid = false;
    }
    if (!formData.subject) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }
    if (!formData.message) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (validateForm()) {
      sendEmail(formData);
      console.log(formData);
      toast({
        title: `Email Sent: Thank You ${formData.name}`
      })
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            name="name"
            className="peer p-4 block w-full bg-neutral-200 border-transparent rounded-lg text-sm text-black placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
              focus:pt-6
              focus:pb-2
              [&:not(:placeholder-shown)]:pt-6
              [&:not(:placeholder-shown)]:pb-2
              autofill:pt-6
              autofill:pb-2"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

          <label
            htmlFor="name"
            className="absolute top-0 start-0 p-4 h-full text-neutral-600 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-neutral-600
                peer-[:not(:placeholder-shown)]:text-xs
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-neutral-600"
          >
            Name
          </label>
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            className="peer p-4 block w-full bg-neutral-200 border-transparent rounded-lg text-sm text-black placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
              focus:pt-6
              focus:pb-2
              [&:not(:placeholder-shown)]:pt-6
              [&:not(:placeholder-shown)]:pb-2
              autofill:pt-6
              autofill:pb-2"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email}</p>
          )}

          <label
            htmlFor="email"
            className="absolute top-0 start-0 p-4 h-full text-neutral-600 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-neutral-600
                peer-[:not(:placeholder-shown)]:text-xs
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-neutral-600"
          >
            Email
          </label>
        </div>

        <div className="relative">
          <input
            type="text"
            name="subject"
            className="peer p-4 block w-full bg-neutral-200 border-transparent rounded-lg text-sm text-black placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
              focus:pt-6
              focus:pb-2
              [&:not(:placeholder-shown)]:pt-6
              [&:not(:placeholder-shown)]:pb-2
              autofill:pt-6
              autofill:pb-2"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && (
            <p className="text-red-500 text-xs">{errors.subject}</p>
          )}

          <label
            htmlFor="subject"
            className="absolute top-0 start-0 p-4 h-full text-neutral-600 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-neutral-600
                peer-[:not(:placeholder-shown)]:text-xs
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-neutral-600"
          >
            Subject
          </label>
        </div>

        <div className="relative">
          <textarea
            name="message"
            className="peer p-4 block w-full bg-neutral-200 border-transparent rounded-lg text-sm text-black placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
              focus:pt-6
              focus:pb-2
              [&:not(:placeholder-shown)]:pt-6
              [&:not(:placeholder-shown)]:pb-2
              autofill:pt-6
              autofill:pb-2"
            placeholder="Leave us a commet.."
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <p className="text-red-500 text-xs">{errors.message}</p>
          )}

          <label
            htmlFor="message"
            className="absolute top-0 start-0 p-4 h-full text-neutral-600 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-neutral-600
                peer-[:not(:placeholder-shown)]:text-xs
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-neutral-600"
          >
            Leave us a comment..
          </label>
        </div>
      </div>

      <div className="mt-2">
        <p className="text-xs text-neutral-500">All fields are required</p>

        <p className="mt-5">
          <button
            className="group inline-flex items-center gap-x-2 py-2 px-3 bg-primary font-medium text-sm text-white rounded-full focus:outline-none"
            type="submit"
          >
            Submit
            <svg
              className="shrink-0 size-4 transition   group-focus:translate-x-0"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
