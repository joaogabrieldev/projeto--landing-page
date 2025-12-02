import { renderStars } from "../../assets/testimonials";
import StarFilled from "../../pieces/StarFilled/StarFilled";

interface ITestimonialProps {
  description: string;
  clientStatus: string;
  testimonialRating: number;
}

const TestimonialCard = ({
  clientStatus,
  description,
  testimonialRating,
}: ITestimonialProps) => {
  return (
    <div className="rounded-xl border border-slate-600 px-6 py-8">
      <div className="-mt-1 mb-2.5 flex flex-row justify-start gap-2">
        {renderStars(testimonialRating)}
      </div>
      <p>{description}</p>
      <div className="my-4 flex flex-row gap-1.5 border-2 border-white">
        <span className="font-semibold">&mdash;</span>
        <span className="font-semibold">{clientStatus}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
