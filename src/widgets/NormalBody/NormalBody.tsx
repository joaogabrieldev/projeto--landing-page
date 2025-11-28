import type React from "react";
import "./NormalBody.css";

interface NormalBodyProps {
  children: React.ReactNode;
}

const NormalBody = ({ children }: NormalBodyProps) => {
  return <div className="normalBody">{children}</div>;
};

export default NormalBody;
