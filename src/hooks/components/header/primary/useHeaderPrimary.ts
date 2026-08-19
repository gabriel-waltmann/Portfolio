import portfolio from "@/data/portfolio.json";
import { LinkIconEnum } from "@/entities/components/link/icon/LinkIconEnum";

const iconsByName: Record<string, LinkIconEnum> = {
  email: LinkIconEnum.email,
  github: LinkIconEnum.github,
  instagram: LinkIconEnum.instagram,
  linkedin: LinkIconEnum.linkedin,
};

const links = portfolio.socialLinks
  .filter((link) => link.showInHeader)
  .map((link) => ({
    icon: iconsByName[link.icon],
    href: link.href,
  }));

export type THeaderPrimaryProps = Readonly<{}>;

export function useHeaderPrimary(props: THeaderPrimaryProps) {
  return {
    links,
  };
}
