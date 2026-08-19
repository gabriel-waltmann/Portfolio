import ContainerPrimary from "@/components/container/primary";
import ThemeToggle from "@/components/theme/toggle";
import { ReactNode } from "react";

type LayoutPrimaryProps = Readonly<{ children: ReactNode }>;

export default function LayoutPrimary(props: LayoutPrimaryProps) {
  return (
    <ContainerPrimary>
      <div className="theme-toolbar">
        <ThemeToggle />
      </div>
      <main className="portfolio-main">{props.children}</main>
    </ContainerPrimary>
  );
}
