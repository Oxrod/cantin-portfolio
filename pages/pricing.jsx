import Image from "next/image";
import Pricings from "../helpers/Pricings";
import PricingCard from "./components/PricingCard";

const debugImgLink =
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";

function Pricing() {
  return (
    <div className="flex h-full items-center text-[#2E4057] justify-center relative bg-[#F4FFF8]">
      <>
        {/* <PricingCard
          imgSrc={debugImgLink}
          headerTxt="Juste pour moi"
          price={130}
          desc="Séance pour une personne, en extérieur ou en duo"
        /> */}
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
      </>
    </div>
  );
}

export default Pricing;
