import React from "react";
import Head from "next/head";

export default function HomeComponent() {
  return (
    <>
      <Head>
        <title>Unpuzzle</title>
        <meta name="description" content="unpuzzle" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <nav>
          <div className="mx-auto px-10">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-3">
                <img className="h-8 w-auto" src="/logo.png" alt="Logo" />
                <span className="ml-2 text-xl font-bold text-white">
                  Unpuzzle
                </span>
              </div>
            </div>
          </div>
        </nav>
        <main className="flex flex-col items-center justify-center pt-0">
          <div className="container flex flex-col items-center justify-center px-4">
            <h1
              className="text-center text-8xl font-extrabold leading-tight tracking-tight text-white"
              style={{ wordSpacing: "0.2em" }}
            >
              <span className="text-[hsl(200,100%,60%)]"> Watch. </span>
              <span className="whitespace-nowrap text-[hsl(240,100%,70%)]">
                Complete.
              </span>
              <span className="text-[hsl(280,100%,60%)]"> Repeat.</span>{" "}
            </h1>
            <h2 className="text-4xl font-bold text-white">
              Complete Edpuzzles with just one click.
            </h2>
            <video
              src="https://github.com/aidanbunch/Unpuzzle/assets/44245721/1f5e803b-d73e-4ce8-99b6-303cb9128106"
              loop
              autoPlay
              muted
              playsInline
              style={{
                width: "65%",
                height: "100%",
                marginTop: "2rem",
                borderRadius: "8px",
                display: "block",
                objectFit: "cover",
                backgroundColor: "rgba(0,0,0,0)",
                objectPosition: "50% 50%",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
              className="mt-6"
            ></video>
            <div className="mt-8 flex w-full items-center justify-center gap-4">
              <a
                href="https://www.unpuzzle.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex cursor-pointer items-center rounded-full bg-gray-100 px-3 py-2 text-xl font-semibold text-slate-800 transition-colors duration-500 hover:bg-gray-200 hover:no-underline hover:shadow hover:shadow-[#300171] lg:px-6 lg:py-4"
              >
                Get Started
                <svg
                  className="stroke -mr-1 ml-2 mt-0.5 h-3 stroke-current stroke-2"
                  fill="none"
                  viewBox="0 0 10 10"
                  aria-hidden="true"
                >
                  <path
                    className="opacity-0 transition group-hover:opacity-100"
                    d="M0 5h7"
                  ></path>
                  <path
                    className="transition group-hover:translate-x-[3px]"
                    d="M1 1l4 4-4 4"
                  ></path>
                </svg>
              </a>
              <a
                href="https://github.com/aidanbunch/Unpuzzle"
                target="_blank"
                rel="noopener noreferrer"
                className=" inline-flex cursor-pointer items-center rounded-full  bg-white/10 px-6 py-4 text-xl font-semibold text-white transition-colors hover:bg-white/20 hover:no-underline"
              >
                GitHub
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="ml-2 h-3 fill-white"
                >
                  <path d="M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z"></path>
                </svg>
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
