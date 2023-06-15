import Image from "next/image";

function PricingCard({ imgSrc, headerTxt, desc, price }) {
  return (
    <div className="flex flex-col w-72 h-[500px] bg-[#F4FFF8] border-[3px] border-solid border-[#E0E2DB] rounded-lg shadow-lg hover:scale-[101%] hover:transition-all border-separate">
      {/* Card Image Container */}
      <div className="group flex h-1/2 w-full rounded-top-lg relative">
        <Image
          className="rounded-t-lg top-5 group-hover:opacity-70"
          src={imgSrc}
          alt=""
          sizes="100%"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      </div>
      {/* Description Container */}
      <div className="flex flex-col px-6 py-4 h-1/2 overflow-auto border-t-[3px] border-[#E0E2DB] rounded-b-lg">
        <h3 className="text-lg font-bold mb-3 shrink">{headerTxt}</h3>
        <p className="flex text-sm grow">{desc}</p>
        <p className="flex">Prix : {!isNaN(price) ? price + "€" : price}</p>
      </div>
    </div>
  );
}

export default PricingCard;
