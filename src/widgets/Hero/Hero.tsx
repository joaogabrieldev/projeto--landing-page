import { motion } from "motion/react";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import { beneficts } from "../../assets/beneficts";
import { defaultSelection } from "../../utils/defaultVariables";
import Card from "../../components/Card/Card";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-5xl px-4 pt-20 pb-70 font-sans">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 1 }}
          className="text-start text-5xl font-extrabold text-white select-none"
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
          className={`my-2.5 max-w-2xl font-semibold text-gray-400 ${defaultSelection}`}
        >
          Converta visitantes em clientes com um design limpo, rápido e
          responsivo, construido com React + Tailwind
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 3 }}
          className="mt-6 mb-8"
        >
          <div className="flex flex-row gap-6">
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
              <Card
                array={{
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
