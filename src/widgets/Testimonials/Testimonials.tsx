import { motion } from "motion/react";
import ModSection from "../ModSection/ModSection";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
import { testimonials } from "../../assets/testimonials";

const Testimonials = () => {
  return (
    <ModSection id="depoimentos">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.75 }}
        viewport={{ once: true }}
        className="mx-auto my-30 max-w-7xl rounded-3xl border-2 border-slate-800 bg-slate-500/5 px-8 pt-20 pb-30 text-white"
      >
        <div className="">
          <h1 className="text-center text-3xl font-bold select-none">
            Quem usou, aprovou!
          </h1>
          <p className="mt-1 -mb-2 text-center font-semibold text-gray-400 select-none">
            Algumas de Nossas Avaliações...
          </p>
          <div className="my-16">
            <div className="flex justify-around">
              <div className="grid grid-cols-3 gap-x-10">
                {testimonials.map((item, index) => {
                  return (
                    <TestimonialCard
                      key={index}
                      clientName={item.clientName}
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
