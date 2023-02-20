import { memo, ReactNode, VFC } from "react";
import { Header } from "../organisms/layout/Header";

type PropsHL = {
  children: ReactNode;
};

export const HeaderLayout: VFC<PropsHL> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
