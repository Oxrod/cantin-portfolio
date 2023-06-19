import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-2 flex flex-col grow md:flex-row items-center max-h-min md:max-h-32 text-[#2E4057] justify-center bg-[#E0E2DB]">
      <p className="text-center">© charles-cantin.fr</p>
      <p className="mx-1">-</p>
      <div className="flex ml-1 items-center">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png"
          alt="Icône Instagram"
          width={20}
          height={20}
          layout="fixed"
        />
        <p className="ml-1 font-light">@charles_cantin_photo</p>
      </div>
      <p className="mx-1">-</p>
      <Link href="/contact" legacyBehavior>
        <div className="cursor-pointer group flex items-center underline underline-offset-2">
          <div className="flex">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/1250/1250663.png"
              alt="Icône Contact"
              width={25}
              height={25}
              layout="fixed"
            />
          </div>
          <a className="ml-1 group-hover:text-[#F18F01]">Me contacter</a>
        </div>
      </Link>
    </footer>
  );
}
