import Head from "next/head";
import Pricings from "../helpers/Pricings";
import PricingCard from "./components/PricingCard";

function Pricing() {
  return (
    <>
      <Head>
        <title>Tarifs</title>
      </Head>
      <div className="w-full h-full flex justify-center">
        <ul className="flex flex-col sm:grid sm:grid-flow-row sm:grid-cols-2 lg:flex lg:flex-row overflow-auto p-2 gap-3 lg:gap-2 justify-center items-center text-[#2E4057] bg-[#F4FFF8]">
          {Pricings.map((pricing, index) => {
            return (
              <PricingCard
                key={index}
                imgSrc={pricing.image}
                headerTxt={pricing.header}
                price={pricing.price}
                desc={pricing.desc}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Pricing;
