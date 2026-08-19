import ContainerPrimary from "@/components/container/primary";
import { ReactNode } from "react";

type LayoutPrimaryProps = Readonly<{ children: ReactNode }>;

export default function LayoutPrimary(props: LayoutPrimaryProps) {
  return (
    <ContainerPrimary>
      <main className="portfolio-main">{props.children}</main>
    </ContainerPrimary>
  );
}
