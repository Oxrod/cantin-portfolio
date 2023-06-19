import Head from "next/head";
import Image from "next/image";

const bgImageSrc =
  "https://images.unsplash.com/photo-1574446615002-35ec8a8f0da2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

export default function Home() {
  return (
    <>
      <Head>
        <title>Charles Cantin</title>
      </Head>
      <div className="flex h-[75vh] md:h-full w-full bg-slate-600 grow relative items-center justify-center">
        <div className="flex w-5/6 h-2/3 sm:w-96 sm:h-96 relative z-50 text-white items-center text-center">
          {/* <h1 className="mx-auto text-3xl md:text-5xl text-[#2E4057] bg-[#E0E2DB] w-5/6 sm:w-max font-normal p-6 rounded-md">
            Charles Cantin
            <br />
            -
            <br />
            Photographe
          </h1> */}
          <Image 
            alt=""
            src="/images/logo.jpg"
            sizes="100%"
            fill="true"
            objectFit="cover"
            className="text-3xl md:text-5xl text-[#2E4057] bg-[#E0E2DB] w-full sm:w-max font-normal rounded-md" />
        </div>
        <Image
          src={bgImageSrc}
          alt="Change me"
          sizes="100%"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </>
  );
}
