import TypographyTitle from "@/components/typography/title";
import { LinkIcon } from "@/components/link/icon";
import AvatarPrimary from "@/components/avatar/primary";
import portfolio from "@/data/portfolio.json";
import {
  THeaderPrimaryProps,
  useHeaderPrimary,
} from "@/hooks/components/header/primary/useHeaderPrimary";

export default function Header(props: THeaderPrimaryProps): JSX.Element {
  const { links } = useHeaderPrimary(props);

  return (
    <header className="portfolio-profile">
      <AvatarPrimary src={portfolio.profile.avatar} />

      <div className="portfolio-profile-content">
        <TypographyTitle>{portfolio.profile.name}</TypographyTitle>

        <ul className="portfolio-social-links">
          {links.map((link, index) => (
            <li key={index + "header-link-icon"}>
              <LinkIcon icon={link.icon} href={link.href} />
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
