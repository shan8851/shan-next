import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { type NextPage } from "next";
import Head from "next/head";
import { CALENDLY_LINK } from "@/constants";

const Contact: NextPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState('');

  // Please update the Access Key in the .env
  const apiKey = process.env.NEXT_PUBLIC_ACCESS_KEY;

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey!,
    settings: {
      from_name: "Shan - Personal Site",
      subject: "New contact message for Shan",
    },
    onSuccess: (msg) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  return (
    <>
      <Head>
        <title>Shan - Contact</title>
        <meta name="description" content="Contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="p-4 md:p-8 lg:p-16 flex flex-col align-center items-center w-screen justify-center max-w-3xl mx-auto">
          <h1 className="mb-4 text-3xl font-extrabold lg:text-4xl ">Let&apos;s Chat!</h1>
          <p className="mb-6 text-md font-normal lg:text-lg  ">
            Hey there! Thanks for stopping by my digital playground. If you&apos;re itching to chat about web3, crypto, modern web development, or just life in general, I&apos;m all ears. Let&apos;s connect and share ideas, collaborate, or even embark on a new adventure together. Fill out the contact form below, and I&apos;ll be in touch faster than you can say &rdquo;ReactRoles.&rdquo; If you prefer a face-to-face conversation, <a target="_blank"
              rel="noopener noreferrer"
              href={CALENDLY_LINK}
              className="link link-primary text-md lg:text-lg font-bold">book a video call with me</a>. Looking forward to our chat!
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
            <input
              type="checkbox"
              id=""
              className="hidden"
              style={{ display: "none" }}
              {...register("botcheck")}
            />
            <div className="form-control w-full">
              <label className={`input-group input-group-vertical border-4 ${errors.name ? 'border-error' : 'border-neutral'}`}>
                <span className="py-2">What shall we call you?</span>
                <input
                  type="text"
                  placeholder="Joe Bloggs"
                  className="input w-full outline-none"
                  {...register("name", {
                    required: "Name is required",
                    maxLength: 80,
                  })}
                />
              </label>
              {errors.name && (
                <div className="mt-1 text-error">
                  <small>{errors.name.message as string}</small>
                </div>
              )}
            </div>
            <div className="form-control w-full">
              <label htmlFor="email_address" className={`input-group input-group-vertical border-4 ${errors.email ? 'border-error' : 'border-neutral'}`}>
                <span className="py-2">What&apos;s your email?</span>
                <input
                  id="email_address"
                  type="email"
                  placeholder="joe@bloggs.com"
                  className="input w-full outline-none"
                  {...register("email", {
                    required: "Enter your email",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email",
                    },
                  })}
                />
              </label>
              {errors.email && (
                <div className="mt-1 text-error">
                  <small>{errors.email.message as string}</small>
                </div>
              )}
            </div>
            <div className="form-control w-full">
              <label className={`input-group input-group-vertical border-4 ${errors.message ? 'border-error' : 'border-neutral'}`}>
                <span className="py-2">What&apos;s on your mind?</span>

                <textarea
                  className="textarea textarea-bordered textarea-lg w-full outline-none"
                  placeholder="Hey shan, have you seen this..."
                  {...register("message", {
                    required: "Enter your Message",
                  })}
                />
              </label>
              {errors.message && (
                <div className="mt-1 text-error">
                  {" "}
                  <small>{errors.message.message as string}</small>
                </div>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-block my-4">
              {isSubmitting ? (
                <svg
                  className="w-5 h-5 mx-auto animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
          {isSubmitSuccessful && isSuccess && (
            <div className="mt-3 text-md w-full  bg-secondary py-2">
              {message || "Success. Message sent successfully"}
            </div>
          )}
          {isSubmitSuccessful && !isSuccess && (
            <div className="mt-3 text-md  bg-error w-full py-2">
              {message || "Something went wrong. Please try later."}
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default Contact;

