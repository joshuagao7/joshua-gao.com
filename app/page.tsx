import Image from 'next/image'

const stuff = [
  { label: 'Franciscus Summer Travel Fellowship in Entrepreneurship', year: '2025' },
  { label: 'Tsai CITY Summer Fellow', year: '2025' },
  {
    label:
      'Guest Lecturer, Columbia University M.S. in Technology Management — Stories from Early-Stage Customer Discovery at Vault',
    year: '2024',
  },
  { label: 'Praxis Emerging Founder', year: '2024' },
  { label: 'Yale China · Yuna Biscuit', year: '2024' },
  { label: 'MassChallenge', year: '2024' },
  { label: 'VentureWell Propel Fellowship', year: '2024' },
  { label: 'Thomas J. Watson Memorial Scholar', year: '2023' },
  { label: 'Yale Engineering Scholar', year: '2022' },
  { label: 'Opening Plenary Speaker, Nexus at the United Nations', year: '2019' },
  { label: "Hive GLS '19 Talk", year: '2019' },
  { label: 'Tufts $100K Summer Fellow', year: '2019' },
  { label: 'Hive GLS Young Innovator of the Year', year: '2019' },
  { label: 'Pete Conrad Scholar', year: '2019' },
  { label: 'Gore Innovation Excellence Award', year: '2019' },
]

const booksList = [
  {
    title: 'Analysis I',
    author: 'Terence Tao',
    href: 'https://link.springer.com/book/10.1007/978-981-19-7261-4',
  },
  {
    title: 'Chip War: The Fight for the World’s Most Critical Technology',
    author: 'Chris Miller',
    href: 'https://www.barnesandnoble.com/w/chip-war-chris-miller/1140630504',
  },
  {
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    href: 'https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/',
  },
  {
    title: 'Diary of a Confused Educator',
    author: 'Ashanti Branch',
    href: 'https://www.barnesandnoble.com/w/diary-of-a-confused-educator-ashanti-branch/1147452508',
    authorConnection: true,
    mentionedInBook: true,
  },
  {
    title:
      'Diary of a Very Bad Year: Confessions of an Anonymous Hedge Fund Manager',
    author: 'Anonymous hedge fund manager & Keith Gessen',
    href: 'https://www.barnesandnoble.com/w/diary-of-a-very-bad-year-anonymous-hedge-fund-manager/1103372664',
  },
  {
    title: "In the Roundest of Places: One Teacher's Journey",
    author: 'Richard Lydon',
    href: 'https://www.amazon.com/Roundest-Places-One-Teachers-Journey/dp/1494977788',
    authorConnection: true,
  },
  {
    title: 'Linear Algebra and Learning from Data',
    author: 'Gilbert Strang',
    href: 'https://math.mit.edu/~gs/learningfromdata/',
  },
  {
    title: 'Pioneering Portfolio Management',
    author: 'David Swensen',
    href: 'https://yalebooks.yale.edu/book/9780300124978/pioneering-portfolio-management/',
  },
  {
    title: "Poor Charlie's Almanack",
    author: 'Charlie Munger',
    href: 'https://www.stripe.press/poor-charlies-almanack',
  },
  {
    title: 'Principles of Cartel Disruption',
    author: 'David Radlo',
    href: 'https://www.barnesandnoble.com/w/principles-of-cartel-disruption-david-radlo/1137052973',
    authorConnection: true,
    mentionedInBook: true,
  },
  {
    title: 'Shoe Dog',
    author: 'Phil Knight',
    href: 'https://www.barnesandnoble.com/w/shoe-dog-phil-knight/1120401492',
  },
  {
    title: 'Spectral and Algebraic Graph Theory',
    author: 'Daniel Spielman',
    href: 'http://cs-www.cs.yale.edu/homes/spielman/sagt/sagt.pdf',
  },
  {
    title: 'The Holy Bible',
    author: 'English Standard Version',
    href: 'https://www.crossway.org/bibles/esv-study-bible-hardcover/',
  },
  {
    title: 'Value: The Four Cornerstones of Corporate Finance',
    author: 'Tim Koller, Richard Dobbs & Bill Huyett',
    href: 'https://www.amazon.com/Value-Four-Cornerstones-Corporate-Finance/dp/0470424605',
  },
]

const researchProjects = [
  {
    title:
      'Eigenjumps: analyzing human movement on tactile sensors via singular value decomposition and other linear algebra techniques',
    year: '2025',
    href: '/papers/eigenjumps.pdf',
    image: '/projects/eigenjumps.png',
  },
  {
    title: 'Pressure Plates: Can Computers be Taught to Detect Jumps?',
    year: '2025',
    href: '/papers/pressure-plates.pdf',
    image: '/projects/pressure-plates.png',
  },
  {
    title:
      'Vault One Mark I: Internal Validation Study of Uncalibrated Force-Sensing Mat for Vertical Jump Assessment',
    year: '2025',
    href: '/papers/vault-one-mark-i.pdf',
    image: '/projects/vault-one-mark-i.png',
  },
  {
    title: 'U.S. Patent — Force Sensors for Motion Assessment',
    year: '2025',
    href: '/papers/patent-force-sensors.pdf',
    image: '/projects/patent-force-sensors.png',
  },
  {
    title: 'U.S. Patent — Method, Apparatus, and Systems for Fire Suppression Using Sound Waves',
    year: '2020',
    href: '/papers/patent-fire-sound.pdf',
    image: '/projects/patent-fire-sound.png',
  },
]

const articles = [
  {
    title:
      'Four Nashua South students win Conrad International Entrepreneurship Challenge',
    source: 'The Nashua Telegraph · May 7, 2019',
    href: 'https://www.nashuatelegraph.com/news/local-news/2019/05/07/four-nashua-south-students-win-conrad-international-entrepreneurship-challenge/',
  },
  {
    title:
      'Nashua South students create company to help in college application process',
    source: 'The Nashua Telegraph · June 16, 2020',
    href: 'https://www.nashuatelegraph.com/news/2020/06/16/nashua-south-students-create-company-to-help-in-college-application-process/',
  },
  {
    title: 'As COVID cases rise, tense debates in Nashua over school reopening',
    source: 'New Hampshire Public Radio · Nov 9, 2020',
    href: 'https://www.nhpr.org/post/covid-cases-rise-tense-debates-nashua-over-school-reopening',
  },
  {
    title: 'HS Roundup: Close wins for BG, HB and Merrimack softball',
    source: 'The Nashua Telegraph · May 13, 2021',
    href: 'https://www.nashuatelegraph.com/sports/high-schools/2021/05/13/hs-roundup-close-wins-for-bg-hb-and-merrimack-softball/',
  },
  {
    title: 'Alumni Story — Joshua Gao',
    source: 'Conrad Challenge · YouTube · June 17, 2021',
    href: 'https://www.youtube.com/watch?v=7umljrm7U0o',
  },
  {
    title: 'City of Nashua — archived meeting minutes',
    source: 'Nashua, NH · June 22, 2021',
    href: 'https://www.nashuanh.gov/AgendaCenter/ViewFile/ArchivedMinutes/_06222021-5182',
  },
  {
    title: 'High School Golf: Will there be any area plaques this fall?',
    source: 'The Nashua Telegraph · Aug 25, 2021',
    href: 'https://www.nashuatelegraph.com/sports/high-schools/2021/08/25/high-school-golf-will-there-be-any-area-plaques-this-fall/',
  },
  {
    title: 'New Hampshire Boys Division I — player leaderboard (2020–2021)',
    source: 'HighSchoolGolf.org · 2020–2021 season',
    href: 'https://highschoolgolf.org/app/golf-tournaments/4276-high-school-boys-2020-2021-new-hampshire-boys-division-1-boys-nh/player-leaderboard',
  },
  {
    title:
      'Rotary Club of Nashua West — Four Way Speech Contest and scholarship recipients',
    source: 'Rotary Club of Nashua West · 2022',
    href: 'https://rotarynashuawest.com/stories/rotary-club-of-nashua-west-four-way-speech-contest-and-scholarship-recipients-announced',
  },
  {
    title:
      "Jeanne D'Arc Credit Union awards $2,500 to Jeanne D'Arc Tank student pitch competition winner (HiveAid)",
    source: 'CU Insight · Press release',
    href: 'https://www.cuinsight.com/press-release/jeanne-darc-credit-union-awards-2500-to-jeanne-darc-tank-student-pitch-competition-winner-hiveaid/',
  },
  {
    title: 'Joshua Gao: Global Champion',
    source: 'Ever Forward Club · YouTube · Nov 1, 2023',
    href: 'https://www.youtube.com/watch?v=qynHHiX3sB0',
  },
  {
    title: 'Students find belonging center stage at Yale Schwarzman Center',
    source: 'Yale Schwarzman Center · April 15, 2024',
    href: 'https://schwarzman.yale.edu/news/students-find-belonging-center-stage-yale-schwarzman-center',
  },
  {
    title: 'Yale Technology Spotlight: Vault Kinetics',
    source: 'Yale Ventures · June 1, 2024',
    href: 'https://ventures.yale.edu/news/yale-technology-spotlight-vault-kinetics',
  },
  {
    title: 'With high-tech mat, students are electrifying sports data',
    source: 'Yale School of Engineering & Applied Science · Aug 27, 2024',
    href: 'https://engineering.yale.edu/news-and-events/news/high-tech-mat-students-are-electrifying-sports-data',
  },
  {
    title: 'Vault Kinetics: Fit tech startup with roots in faith and ENAS 118',
    source: 'Yale Daily News · Sept 5, 2024',
    href: 'https://yaledailynews.com/articles/vault-kinetics-fit-tech-startup-with-roots-in-faith-and-enas-118',
  },
  {
    title:
      'From biotech to fit-tech: Startups pitched to win a $25K prize at MC|Innovate 2024 in Dallas',
    source: 'Dallas Innovates · Sept 25, 2024',
    href: 'https://dallasinnovates.com/startups-from-biotech-to-fit-tech-pitched-to-win-a-25000-prize-at-mc-innovate-2024-in-dallas/',
  },
  {
    title: 'Vault Kinetics',
    source: 'Startup Yale · Program profile',
    href: 'https://startup.yale.edu/person/vault-kinetics/',
  },
  {
    title: 'Meet the Winter 2025 E-Team Program cohort',
    source: 'VentureWell · Winter 2025',
    href: 'https://venturewell.org/winter-2025-e-team-program/',
  },
  {
    title:
      'New season, new solutions: Celebrating Tsai CITY’s 2025 Summer Fellowship cohort',
    source: 'Tsai Center for Innovative Thinking · April 22, 2025',
    href: 'https://city.yale.edu/stories/2025/4/22/new-season-new-solutions-celebrating-tsai-citys-2025-summer-fellowship-cohort',
  },
  {
    title: 'Student-run startup finalizes athletic performance tracking device',
    source: 'Yale Daily News · Sept 18, 2025',
    href: 'https://yaledailynews.com/articles/student-run-startup-finalizes-athletic-performance-tracking-device',
  },
  {
    title:
      'Yalies plan to pack a Bay Area house, seeking investors for start-ups',
    source: 'Yale Daily News · March 4, 2026',
    href: 'https://yaledailynews.com/articles/yalies-plan-to-pack-a-bay-area-house-seeking-investors-for-start-ups',
  },
]

export default function Home() {
  return (
    <main className="page">
      <h1 className="name">Joshua Gao</h1>

      <section className="fold projects" aria-label="Projects">
        <div className="projects-grid">
          {researchProjects.map((project) => (
            <article key={project.title} className="project-item">
              <a
                className="project-slot"
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} (opens in new tab)`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="project-image"
                  sizes="(max-width: 520px) 100vw, (max-width: 900px) 50vw, 25vw"
                />
              </a>
              <span className="project-title">{project.title}</span>
              <span className="project-year">{project.year}</span>
            </article>
          ))}
        </div>
      </section>

      <details className="fold stuff" aria-label="Stuff">
        <summary className="fold-summary">
          <span className="section-label">Stuff</span>
        </summary>
        <div className="fold-body">
          <ul className="stuff-list">
            {stuff.map((item) => (
              <li key={item.label}>
                <span className="stuff-title">{item.label}</span>
                <span className="stuff-year">{item.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </details>

      <details className="fold links" aria-label="Links">
        <summary className="fold-summary">
          <span className="section-label">Links</span>
        </summary>
        <div className="fold-body">
          <ul className="books-list">
            {articles.slice().reverse().map((article) => (
              <li key={article.href}>
                <a href={article.href} target="_blank" rel="noopener noreferrer">
                  <span className="books-title">{article.title}</span>
                  <span className="books-author">{article.source}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </details>

      <details className="fold books" aria-label="Books">
        <summary className="fold-summary">
          <span className="section-label">Books</span>
        </summary>
        <div className="fold-body">
          <ul className="books-list">
            {booksList.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={
                    item.authorConnection
                      ? item.mentionedInBook
                        ? `${item.title} — ${item.author} (personal connection to the author; Joshua Gao may appear in this book)`
                        : `${item.title} — ${item.author} (personal connection to the author)`
                      : `${item.title} — ${item.author}`
                  }
                >
                  <span className="books-title">
                    {item.title}
                    {item.authorConnection ? (
                      <span className="books-appearance" aria-hidden="true">
                        *
                      </span>
                    ) : null}
                  </span>
                  <span className="books-author">{item.author}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="books-footnote">
            {
              "An asterisk means my personal life has intersected with the author's in some way, and I may appear in the book."
            }
            {
            }
          </p>
        </div>
      </details>
    </main>
  )
}
