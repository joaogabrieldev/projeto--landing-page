import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { defaultSelection } from "@/utils/defaultVariables";
import type { IAccordaionItemProps } from "../types/pieces.types";

const ItemAccordaion = ({
  questionID,
  questionTitle,
  questionBody,
}: IAccordaionItemProps) => {
  return (
    <AccordionItem value={`item-${questionID}`}>
      <AccordionTrigger className="text-xl text-white select-none">
        {questionTitle}
      </AccordionTrigger>
      <AccordionContent className="flex justify-center border-r border-b border-l border-slate-700 px-2 shadow-md shadow-gray-500">
        <p
          className={`text-center text-[16px] font-semibold text-white ${defaultSelection} py-4`}
        >
          {questionBody}
        </p>
      </AccordionContent>
    </AccordionItem>
  );
};

export default ItemAccordaion;
