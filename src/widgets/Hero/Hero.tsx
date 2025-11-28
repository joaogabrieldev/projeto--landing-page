import { motion } from "motion/react";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import BenefictCard from "../../components/BenefictCard/BenefictCard";
import { beneficts } from "../../assets/beneficts";
import { defaultSelection } from "../../utils/defaultVariables";

const Hero = () => {
  return (
    <section className="relative overflow-hidden border-2 border-white">
      <div className="relative mx-auto max-w-5xl px-4 pt-20 pb-60 font-sans">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 1 }}
          className="border-2 text-start text-5xl font-extrabold text-white select-none"
        >
          Acelere sua presença online com uma landing page{" "}
          <span className="bg-linear-to-r from-fuchsia-400 to-violet-200 bg-clip-text text-transparent">
            simples e eficaz
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 2 }}
          className={`my-2.5 max-w-2xl border-2 font-semibold text-gray-400 ${defaultSelection}`}
        >
          Converta visitantes em clientes com um design limpo, rápido e
          responsivo, construido com React + Tailwind
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 3 }}
          className="mt-4 mb-8"
        >
          <div className="flex flex-row gap-6 border-2 border-white">
            <PrimaryButton width={20} label="Começar agora!" slug="/" />
            <SecondaryButton label={"Ver Recursos"} slug="/recursos" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 4 }}
          className="flex flex-row justify-center gap-5"
        >
          {beneficts.map((benefict) => {
            return (
              <BenefictCard
                benefict={{
                  title: benefict.title,
                  description: benefict.description,
                  icon: benefict.icon,
                }}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
