import type { IBodyGlowProps } from "../types/widgets.types";
import "./BodyPinkGlow.css";

const BodyPinkGlow = ({ children }: IBodyGlowProps) => {
  return (
    <div className="background">
      <div className="glowDiv"></div>
      <div className="z-1">{children}</div>
    </div>
  );
};

export default BodyPinkGlow;
