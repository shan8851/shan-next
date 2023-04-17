import Image from "next/image";
import { FC } from "react";
import Logo from '@/assets/punk.png'
import Link from "next/link";

export const Hero: FC = () => (
    <div className="hero min-h-96 bg-base-200 py-28 md:py-56">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-48 lg:w-96 mask mask-hexagon">
          <Image src={Logo} alt="logo" height={720} />
        </div>
        <div>
          <h1 className="text-3xl md:text-5xl font-bold">👋 Hey, I&apos;m Shan!</h1>
          <p className="py-6">Welcome to my corner of the internet, where web3, modern development, and creative ventures collide. I&apos;m all about mentoring, building cool projects, and living a balanced life. Dive in to discover more about my work, passions, and adventures. Ready to connect and create something awesome together?</p>
          <div className="flex gap-4">
            <Link href="/now" className="btn btn-primary">Explore my world</Link>
          <Link href="/contact" className="btn btn-secondary">Let&apos;s Connect</Link>
          </div>
        </div>
      </div>
    </div>
)
