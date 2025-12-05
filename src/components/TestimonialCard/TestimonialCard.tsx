import { renderStars } from "../../assets/testimonials";
import { defaultSelection } from "../../utils/defaultVariables";
import type { ITestimonialProps } from "../types/components.types";

const TestimonialCard = ({
  clientStatus,
  clientName,
  description,
  testimonialRating,
}: ITestimonialProps) => {
  const firstName = clientName!.trim().split(" ")[0];

  const fullStatus = `${firstName}, ${clientStatus}`;

  return (
    <div
      className={`rounded-xl border border-slate-700 px-6 py-8 ${defaultSelection}`}
    >
      <div className="-mt-1 mb-2.5 flex flex-row justify-start gap-2">
        {renderStars(testimonialRating)}
      </div>
      <p>{description}</p>
      <div className="my-4 flex flex-row gap-1.5 select-none">
        <span className="font-semibold">&mdash;</span>
        <span className="font-semibold">{fullStatus}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
