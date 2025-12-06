import { Accordion } from "@/components/ui/accordion";
import QuestionBlock from "./../../components/QuestionBlock/QuestionBlock";
import { questions } from "./../../assets/faq";
import ModSection from "../ModSection/ModSection";
import { motion } from "motion/react";

const FAQ = () => {
  return (
    <ModSection id="faq">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="pt-10 text-center">
          <h1 className="text-3xl font-semibold text-white select-none">
            Ficou com alguma dúvida?
          </h1>
          <p className="font-semibold text-gray-500 select-none">
            Entenda melhor como funciona nosso processo de trabalho e o que está
            incluso em cada pacote.
          </p>
        </div>
        <div className="mx-auto block max-w-7xl pt-10 pb-30">
          <Accordion type="multiple">
            {questions.map((item, index) => {
              return (
                <QuestionBlock
                  title={item.title}
                  questions={item.questions}
                  index={index}
                />
              );
            })}
          </Accordion>
        </div>
      </motion.div>
    </ModSection>
  );
};

export default FAQ;
