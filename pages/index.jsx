import Head from "next/head";
import Image from "next/image";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../public/images", false, /\.(png|jpe?g|svg)$/)
);

const bgImageSrc =
  "https://images.unsplash.com/photo-1574446615002-35ec8a8f0da2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

export default function Home() {
  return (
    <>
      <Head>
        <title>Charles Cantin</title>
      </Head>
      <div className="flex h-[75vh] md:h-full w-full bg-slate-600 grow relative">
        <div className="flex w-full relative z-50 text-white h-full items-center text-center">
          <p className="mx-auto text-3xl md:text-5xl text-[#2E4057] bg-[#E0E2DB] w-5/6 sm:w-max font-normal p-6 rounded-md">
            Charles Cantin
            <br />
            -
            <br />
            Photographe
          </p>
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
