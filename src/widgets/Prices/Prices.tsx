import { motion } from "motion/react";

const Prices = () => {
  return (
    <section className="relative z-1 overflow-hidden border-2 border-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.75 }}
        viewport={{ once: true }}
        className="mx-auto max-w-5xl border-2 border-white px-8 pt-20 pb-60"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="border-2 text-center text-5xl font-bold text-white text-shadow-sm"
        >
          Escolha o{" "}
          <span
            className="bg-linear-to-tr from-violet-500 via-violet-300 to-white bg-clip-text text-transparent"
            id="textGlow"
          >
            Seu Plano!
          </span>
        </motion.h1>
        <motion.p className="font-semibold text-gray-500">
          Encontre a solução perfeita para alavancar seu negócio. Nossos pacotes
          garantem excelência técnica, layout moderno e uma estrutura pensada
          para gerar crescimento e credibilidade.
        </motion.p>
        <div className="flex justify-center py-8"></div>
      </motion.div>
    </section>
  );
};

export default Prices;
