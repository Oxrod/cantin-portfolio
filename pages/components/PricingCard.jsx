import Image from "next/image";

function PricingCard({ imgSrc, headerTxt, desc, price }) {
  return (
    <>
      {/* Entire card container */}
      <div className="flex flex-col mx-2 w-60 h-5/6 bg-[#F4FFF8] border-[3px] border-solid border-[#E0E2DB] rounded-lg shadow-lg hover:scale-105 hover:transition-all border-separate">
        {/* Card Image Container */}
        <div className="group flex h-1/2 rounded-top-lg relative">
          <Image
            className="rounded-t-lg top-5 group-hover:opacity-70"
            src={imgSrc}
            // src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
            sizes="100%"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
          <div className="hidden group-hover:flex h-full w-full justify-center items-center rounded-t-lg absolute group-hover:bg-black group-hover:text-white opacity-80 transition-all">
            <p className="border-2 cursor-pointer rounded-lg px-2 hover:shadow-md hover:shadow-slate-400 hover:scale-105 ">
              Choisir ce plan
            </p>
          </div>
        </div>
        {/* Description Container */}
        <div className="flex-auto px-6 py-4 h-fit border-t-[3px] border-[#E0E2DB] rounded-b-lg">
          <h3 className="text-lg font-bold mb-3">{headerTxt}</h3>
          <p className="text-justify text-sm mb-5">{desc}</p>
          <p>Prix : {!isNaN(price) ? price + "€" : price}</p>
        </div>
      </div>
    </>
  );
}

export default PricingCard;
