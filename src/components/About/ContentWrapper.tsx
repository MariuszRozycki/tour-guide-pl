import { ReactNode } from "react";

type ContentWrapperProps = {
  children: ReactNode;
  className: string;
};

const ContentWrapper = ({ children, className }: ContentWrapperProps) => {
  return <div className={`content-wrapper ${className}`}>{children}</div>;
};

export default ContentWrapper;
