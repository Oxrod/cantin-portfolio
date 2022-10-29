import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center text-[#2E4057] justify-center h-[10vh] bg-[#E0E2DB]">
      <h1 className="text-center mr-1">© charles-cantin.fr</h1>
      <p className="mx-1">|</p>
      <div className="flex items-center">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png"
          alt="Icône Instagram"
          width={20}
          height={20}
          layout="fixed"
        />
        <p className="ml-1 font-light">@charles_cantin_photo</p>
      </div>
      <p className="mx-1">|</p>
      <Link href="/contact">
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
          <p className="ml-1 group-hover:text-[#F18F01]">Me contacter</p>
        </div>
      </Link>
    </footer>
  );
}
