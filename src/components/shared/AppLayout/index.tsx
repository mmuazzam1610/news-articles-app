import { FC } from "react";
import { NavMenu } from "../NavMenu";
import cx from "classnames";
import { ShouldRender } from "../ShouldRender";
import "./applayout.css";

interface AppLayoutModel {
  children: JSX.Element | JSX.Element[];
  noNav?: boolean; // for no footer
}

export const AppLayout: FC<AppLayoutModel> = ({ children, noNav = false }) => {
  return (
    <>
      <div>
        <ShouldRender check={!noNav}>
          <NavMenu />
        </ShouldRender>
        <div className={cx("container", { noNav: "noNav" })}>{children}</div>
      </div>
    </>
  );
};
