import { LinkIconEntity } from "@/entities/components/link/icon/LinkIconEntity";
import { LinkIconEnum } from "@/entities/components/link/icon/LinkIconEnum";
import { useScreen } from "@/hooks/useScreen";
import {
  EnvelopeSimple,
  GithubLogo,
  Icon,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

export type TLinkIconProps = Readonly<LinkIconEntity>;

const iconComponents: Record<LinkIconEnum, Icon> = {
  [LinkIconEnum.linkedin]: LinkedinLogo,
  [LinkIconEnum.email]: EnvelopeSimple,
  [LinkIconEnum.github]: GithubLogo,
  [LinkIconEnum.instagram]: InstagramLogo,
};

export function useLinkIcon(props: TLinkIconProps) {
  const { isMobile } = useScreen();

  return {
    IconComponent: iconComponents[props.icon],
    size: isMobile ? 28 : 24,
  };
}
