import { motion } from "motion/react";
import Card from "../../components/Card/Card";
import { resources } from "../../assets/resources";
import ModSection from "./../ModSection/ModSection";

const Resources = () => {
  return (
    <ModSection id={"recursos"}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.75 }}
        viewport={{ once: true }}
        className="mx-auto max-w-5xl px-8 pt-20 pb-60"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-2xl font-bold text-white"
        >
          Tudo o que você precisa
        </motion.h1>
        <motion.p className="font-semibold text-gray-500">
          Estrutura enxuta com componentes reutilizáveis, performance de sobre e
          visual moderno.
        </motion.p>
        <div className="flex justify-center py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ amount: 0.2, once: true }}
            className="grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-5"
          >
            {resources.map((resource) => {
              return (
                <Card
                  array={{
                    title: resource.title,
                    description: resource.description,
                    icon: resource.icon,
                  }}
                />
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </ModSection>
  );
};

export default Resources;
