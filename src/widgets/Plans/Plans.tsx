import { motion } from "motion/react";

import { plans } from "../../assets/plans";
import PlanCard from "../../components/PlanCard/PlanCard";
import ModSection from "../ModSection/ModSection";

const Prices = () => {
  return (
    <ModSection id="precos">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.75 }}
        viewport={{ once: true }}
        className="mx-auto min-w-full px-8 pt-20 pb-60"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-center text-5xl font-bold text-white text-shadow-sm"
        >
          Escolha o{" "}
          <span
            className="bg-linear-to-tr from-fuchsia-500 via-fuchsia-200 to-white bg-clip-text text-transparent"
            id="textGlow"
          >
            Seu Plano!
          </span>
        </motion.h1>
        <motion.p className="my-1.5 flex max-w-4xl justify-self-center text-center font-semibold text-gray-500">
          Encontre a solução perfeita para alavancar seu negócio. Nossos pacotes
          garantem excelência técnica, layout moderno e uma estrutura pensada
          para gerar crescimento e credibilidade.
        </motion.p>
        <div className="flex justify-center py-8">
          <div className="grid grid-cols-3 items-start gap-x-3">
            {plans.map((item, index) => {
              return (
                <PlanCard
                  key={index}
                  title={item.title}
                  price={item.price}
                  originalPrice={item.originalPrice}
                  emphasis={item.emphasis}
                  description={item.description}
                  beneficts={item.beneficts}
                  recommendation={item.recommendation}
                />
              );
            })}
          </div>
        </div>
      </motion.div>
    </ModSection>
  );
};

export default Prices;
