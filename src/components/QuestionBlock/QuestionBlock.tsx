import ItemAccordaion from "@/pieces/ItemAccordaion/ItemAccordaion";
import type { IQuestionBlockProps } from "../types/components.types";

const defaultTitleFAQgradient = `bg-gradient-to-bl from-fuchsia-50 via-fuchsia-200 to-fuchsia-400 bg-clip-text text-transparent`;

const QuestionBlock = ({ title, questions, index }: IQuestionBlockProps) => {
  const isFirst = index == 0 ? "rounded-t-2xl " : "";

  const isLast = index == 2 ? "rounded-b-2xl " : "";

  return (
    <div
      className={`flex flex-col justify-center gap-4 border border-x-0 border-y border-slate-700 ${isFirst} ${isLast}`}
    >
      <div className="fuchsia border-b-slate-700 py-4 text-center">
        <span
          className={`text-2xl font-bold ${defaultTitleFAQgradient} select-none`}
        >
          {title}
        </span>
      </div>
      <div className="px-12 py-4">
        {questions.map((item) => {
          return (
            <ItemAccordaion
              key={item.questionID}
              questionID={item.questionID}
              questionTitle={item.questionTitle}
              questionBody={item.questionBody}
            />
          );
        })}
      </div>
    </div>
  );
};

export default QuestionBlock;
