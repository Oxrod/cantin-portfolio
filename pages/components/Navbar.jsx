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
      <nav className="w-full flex justify-center py-3 bg-[#E0E2DB]">
        <div className="w-auto flex flex-col md:flex-row gap-3 md:gap-5 justify-around items-center">
          <Link href="/">
            <div className="font-medium text-[#2E4057] hover:text-[#F18F01]">
              Accueil
            </div>
          </Link>
          <Link href="/gallery">
            <div className=" font-medium text-[#2E4057] hover:text-[#F18F01]">
              Galerie
            </div>
          </Link>
          <Link href="/pricing">
            <div className="font-medium text-[#2E4057] hover:text-[#F18F01]">
              Tarifs et prestations
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}
