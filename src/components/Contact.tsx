import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import * as React from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSent, setIsSent] = useState<boolean>(false);
  const form = useRef<HTMLFormElement | null>(null);

  const toastNotification = () => {
    toast.success("Message sent successfully! 😄", {
      style: {
        background: "linear-gradient(to right, #8c40be, #af31c9)",
      },
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      console.log("form submitted")
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_etjh4ak",
        "template_17fyw15",
        form.current,
        "PVm91mDeUP6ZpigL6"
      )
      .then(
        (result) => {
          setIsSent(true);
          toastNotification();
          console.log("submitted");
        },
        (error) => {
          console.error(error);
          setIsSent(false);
        }
      );

    // Clear the form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="relative p-8 text-center w-full">
      <p className="text-4xl tracking-tight font-semibold text-primary dark:text-white md:text-6xl">
        Contact Me
      </p>
      <div className="mt-6 sm:flex w-full lg:max-w-sm mx-auto">
        <form
          className="w-full"
          onSubmit={handleSubmit}
          id="contact_form" 
          ref={form}
        >
          <div className="flex flex-col sm:flex-row">
            <div className="mb-4 sm:mr-2 w-full sm:w-1/2">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="from_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-transparent dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4 sm:ml-2 w-full sm:w-1/2">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="from_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-transparent dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="block w-full px-4 py-2 text-sm text-zinc-500 bg-transparent dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="SubmitButton text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-white/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-center"
          >
            Submit
          </button>
        </form>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default ContactForm;
