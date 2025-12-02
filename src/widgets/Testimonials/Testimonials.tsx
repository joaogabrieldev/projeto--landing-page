import { motion } from "motion/react";
import ModSection from "../ModSection/ModSection";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
import { testimonials } from "../../assets/testimonials";

const Testimonials = () => {
  return (
    <ModSection>
      <motion.div className="mx-auto my-28 max-w-7xl rounded-xl border-2 border-slate-800 bg-slate-500/5 px-8 pt-20 pb-30 text-white">
        <div className="">
          <h1 className="bg-red-400 text-end text-2xl font-bold">
            Quem usou, aprovou!
          </h1>
          <div className="my-16 border-2 border-white py-16">
            <div className="flex justify-around">
              <div className="grid grid-cols-3 gap-x-10 border-2 border-red-500">
                {testimonials.map((item, index) => {
                  return (
                    <TestimonialCard
                      key={index}
                      clientStatus={item.clientStatus}
                      description={item.description}
                      testimonialRating={item.rating}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </ModSection>
  );
};

export default Testimonials;
