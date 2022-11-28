import React, { ReactElement, FC } from "react";

interface Props {
  check: boolean | string | number | unknown;
  children: ReactElement | ReactElement[];
}

export const ShouldRender: FC<Props> = ({ check, children }) => {
  const component = (children as React.ReactElement) || <React.Fragment />;
  return check ? component : <React.Fragment />;
};
