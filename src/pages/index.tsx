import HeaderPrimary from "@/components/header/primary";
import portfolio from "@/data/portfolio.json";
import { usePageIndex } from "@/hooks/pages/usePageIndex";

type Badge = {
  name: string;
  badge: string;
};

function BadgeList({ badges }: Readonly<{ badges: ReadonlyArray<Badge> }>) {
  return (
    <div className="badge-list">
      {badges.map((technology) => (
        <img
          key={technology.name}
          src={technology.badge}
          alt={technology.name}
        />
      ))}
    </div>
  );
}

export default function PageIndex() {
  const { totalWorkTime } = usePageIndex();
  const { profile, focus, contributions } = portfolio;

  return (
    <article className="portfolio-page">
      <section className="portfolio-intro" aria-labelledby="introduction-title">
        <HeaderPrimary />

        <div className="portfolio-intro-content">
          <p className="portfolio-eyebrow">{profile.greeting}</p>
          <h1 id="introduction-title">{profile.role}</h1>
          <p>
            {profile.role} com {totalWorkTime} anos de experiência.{" "}
            {profile.summary}
          </p>
        </div>
      </section>

      <section className="portfolio-section" aria-labelledby="focus-title">
        <h2 id="focus-title">{focus.title}</h2>
        <div className="focus-grid">
          {focus.items.map((item) => (
            <div className="focus-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {portfolio.technologySections.map((section) => (
        <section
          className="portfolio-section"
          aria-labelledby={`${section.id}-title`}
          key={section.id}
        >
          <h2 id={`${section.id}-title`}>{section.title}</h2>
          <BadgeList badges={section.items} />
        </section>
      ))}

      <section
        className="portfolio-section"
        aria-labelledby="contributions-title"
      >
        <h2 id="contributions-title">{contributions.title}</h2>
        <ul className="contribution-list">
          {contributions.items.map((contribution) => (
            <li key={contribution}>{contribution}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
