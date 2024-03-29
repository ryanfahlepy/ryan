"use client"

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      {/* <div
        className="
                bg-blue-500
                sm:bg-green-500
                md:bg-yellow-500
                lg:bg-orange-500
                xl:bg-red-500"
      >
        Screen Width Test{" "}
      </div> */}
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-96 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[20px] sm:text-[30px] md:text-[40px] lg:text-[45px] xl:text-[50px] text-white font-semibold">
            Junior Developer<br></br>
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              Ryan Fahlepy Sinaga
            </span>
          </h1>
          <p className="text-gray-200 text-[10px] sm:text-[15px] md:text-[18px] lg:text-[19px] xl:text-[20px] pr-[100px] md:pr-[0px] mt-[-10px]">
            Welcome to my portofolio! <br></br>I am website developer specializing in front-end designing and back-end coding. My background from informatics study program and i love what i do now {"<3"}
          </p>

          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Learn more
            </Link>
            <Link
              href="/projects"
              className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              My projects
            </Link>
            <Link
              href="/contact"
              className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Contact me
            </Link>
          </div>
        </div>
      </div>

      <div className=" absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/skills"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-sm md:text-lg text-white max-w-[150px] md:max-w-[200px] self-center"
        >
          Learn more
        </Link>

        <Link
          href="/projects"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-white text-sm md:text-lg max-w-[150px] md:max-w-[200px] self-center"
        >
          My projects
        </Link>
        <Link
          href="/contact"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-white text-sm md:text-lg max-w-[150px] md:max-w-[200px] self-center"
        >
          Contact me
        </Link>
      </div>

      <div className="absolute bottom-0 right-0 z-[10] size-[50%] lg:size-auto">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right:5 top-10 lg:right-40 lg:top-40 md:top-28 md:right-32"
        />

        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
    </main>
  );
}