import { ReactNode } from "react";

type ContainerProp = {
  children: ReactNode | ReactNode[];
};
export default function Container({ children }: ContainerProp) {
  return <div className="container mx-auto">{children}</div>;
}
