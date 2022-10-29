import Image from "next/image";
import Link from "next/link";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../../public/images", false, /\.(png|jpe?g|svg)$/)
);

export default function Navbar() {
  return (
    <>
      <nav className="width-100 flex justify-center h-[10vh] bg-[#E0E2DB]">
        {/* <div className="relative h-full w-24 mx-7">
          <Image src={images[0]} alt="icon" sizes="100%" layout="fill" />
        </div> */}

        <div className="w-1/3 flex justify-between items-center">
          <Link href="/">
            <a className="font-medium text-[#2E4057] hover:text-[#F18F01]">
              Accueil
            </a>
          </Link>
          <Link href="/gallery">
            <a className=" font-medium text-[#2E4057] hover:text-[#F18F01]">
              Galerie
            </a>
          </Link>
          <Link href="/pricing">
            <a className="font-medium text-[#2E4057] hover:text-[#F18F01]">
              Tarifs et prestations
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
}
