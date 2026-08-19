import ContainerPrimary from "@/components/container/primary";
import HeaderPrimary from "@/components/header/primary";
import { CSSProperties, ReactNode } from "react";

type LayoutPrimaryProps = Readonly<{ children: ReactNode }>;

const mainStyles: CSSProperties = {
  flex: 1,
  marginTop: "1rem",
  paddingBottom: "1rem",
};

export default function LayoutPrimary(props: LayoutPrimaryProps) {
  return (
    <ContainerPrimary>
      <HeaderPrimary />

      <main style={mainStyles}>{props.children}</main>
    </ContainerPrimary>
  );
}
