import { CALENDLY_LINK } from "@/constants";
import Link from "next/link";
import { FC } from "react";

export const ContactSection: FC = () => (
<div className="flex flex-col items-center justify-center w-full bg-secondary py-24 px-3">
  <div className="max-w-3xl mx-auto flex flex-col gap-6 items-center justify-center">
    <h3 className="mb-6 text-3xl font-extrabold lg:text-4xl text-center max-w-xl">📞 Let&apos;s Connect!
    </h3>
    <p className="mb-6 text-md font-normal lg:text-lg  ">
      Whether you&apos;re looking for web3 expertise, mentorship, or collaboration, I&apos;d love to hear from you! Get in touch via my contact form, book a face-to-face call, or reach out on social media.
    </p>
    <div className="flex gap-12">
      <Link href="/contact" className="btn btn-lg">💬 Contact Form</Link>
      <a href={CALENDLY_LINK} className="btn btn-lg">🗓️ Book a Call</a>
    </div>
  </div>
</div>
)
