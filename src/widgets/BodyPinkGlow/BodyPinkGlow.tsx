import type React from "react";
import "./BodyPinkGlow.css";

interface IBodyProps {
  children: React.ReactNode;
}

const BodyPinkGlow = ({ children }: IBodyProps) => {
  return (
    <div className="background">
      <div className="glowDiv"></div>
      <div className="z-1">{children}</div>
    </div>
  );
};

export default BodyPinkGlow;
