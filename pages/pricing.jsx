import Pricings from "../helpers/Pricings";
import PricingCard from "./components/PricingCard";

function Pricing() {
  return (
    <div className="flex h-full items-center text-[#2E4057] justify-center relative bg-[#F4FFF8]">
      <>
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
