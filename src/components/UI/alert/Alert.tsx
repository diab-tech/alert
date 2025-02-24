import { ReactNode } from "react";
import "./index.scss";
import { AlertTypes } from "../../../types";

interface IProps {
  type: AlertTypes;
  icon: ReactNode;
  description: string;
  closeIcon: ReactNode;
}

const Alert = ({
  type = "alert-default",
  icon,
  description,
  closeIcon,
}: IProps) => {
  return (
    <>
      <div className={type}>
        <div className="header">
          <div className="title">
            <span className="bell">{icon}</span>
            <h3>{type}</h3>
          </div>
          <span className="close">{closeIcon}</span>
        </div>
        <p>{description} </p>
      </div>
    </>
  );
};

export default Alert;
