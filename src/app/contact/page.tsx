"use client";
import "./contact.css";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (data: FormData) => {
    setStatus("idle");

    try {
      await sendEmail(data);
      setStatus("success");
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
    } finally {
    }
  };

  return (
    <div className="page">
      <div className="left-side">
        <h1>Let&apos;s Get in Touch</h1>
        <p>
          Whether you have a question or a project idea, feel free to drop a
          message. We will get back to you as soon as possible!
        </p>
        <p>You can also reach us via email directly at:</p>
        {/* <p> */}
        <a href="mailto:ibaconstruction23@gmail.com">
          ibaconstruction23@gmail.com
        </a>
        {/* </p> */}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            {...register("name", { required: true })}
          />
        </div>

        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            {...register("email", { required: true })}
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={4}
            placeholder="Type your message..."
            {...register("message", { required: true })}
          ></textarea>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>

        {status === "success" && (
          <p className="success">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="error">Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  );
};

export default Contact;
