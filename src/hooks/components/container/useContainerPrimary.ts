import { CSSProperties } from "react";

export type TContainerPrimaryProps = Readonly<{
  children?: React.ReactNode;
}>;

export function useContainerPrimary(props: TContainerPrimaryProps) {
  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    width: "100%",
    maxWidth: "1200px",
    minHeight: "100vh",
    margin: "0 auto",
    padding: "1rem",
  };

  return {
    containerStyle,
  };
}
