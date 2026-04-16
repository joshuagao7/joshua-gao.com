import Image from 'next/image'

const stuff = [
  { label: 'Franciscus Summer Travel Fellowship in Entrepreneurship', year: '2025' },
  { label: 'Tsai CITY Summer Fellow', year: '2025' },
  {
    label:
      'Guest Lecture, Columbia University M.S. in Technology Management',
    year: '2024',
  },
  { label: 'Praxis Emerging Founder', year: '2024' },
  { label: 'Yale China · Yuna Biscuit', year: '2024' },
  { label: 'MassChallenge', year: '2024' },
  { label: 'VentureWell', year: '2024' },
  { label: 'NSF I-Corps', year: '2023' },
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

/**
 * Course numbers follow Yale College Programs of Study (four-digit listings where the bulletin uses them).
 * For cross-listed courses, put every subject code in `code`, separated by " / " (same object may appear in
 * more than one bucket). Hrefs use Yale catalog search; statistical methods also links a syllabus PDF.
 */
type YaleFavoriteCourse = {
  code: string
  title: string
  href: string
}

const aphyStatisticalMethods: YaleFavoriteCourse = {
  code: 'APHY 4700 / ECON 4446',
  title: 'Statistical Methods with Applications in Science and Finance',
  href: 'https://volga.eng.yale.edu/sites/default/files/files/Syllabus-aphy470-2019.pdf',
}

/** Twelve economics-focused courses (APHY 4700 also appears under engineering). */
const yaleCoursesEconomics: YaleFavoriteCourse[] = [
  {
    code: 'ECON 2121',
    title: 'Intermediate Microeconomics',
    href: 'https://catalog.yale.edu/search/?P=ECON%202121',
  },
  {
    code: 'ECON 2122',
    title: 'Intermediate Macroeconomics',
    href: 'https://catalog.yale.edu/search/?P=ECON%202122',
  },
  {
    code: 'ECON 2123 / ECON 117',
    title: 'Introductory Econometrics',
    href: 'https://catalog.yale.edu/search/?P=ECON%202123',
  },
  {
    code: 'ECON 2259 / GLBL 2159',
    title: 'Game Theory',
    href: 'https://catalog.yale.edu/search/?P=ECON%202259',
  },
  {
    code: 'ECON 2251',
    title: 'Financial Economics',
    href: 'https://catalog.yale.edu/search/?P=ECON%202251',
  },
  {
    code: 'ECON 3361',
    title: 'Corporate Finance',
    href: 'https://catalog.yale.edu/search/?P=ECON%203361',
  },
  {
    code: 'ECON 4456',
    title: 'Private Equity Investing',
    href: 'https://catalog.yale.edu/search/?P=ECON%204456',
  },
  {
    code: 'ECON 4450',
    title: 'Investment Analysis',
    href: 'https://catalog.yale.edu/search/?P=ECON%204450',
  },
  {
    code: 'ECON 6672',
    title: 'Behavioral Finance',
    href: 'https://catalog.yale.edu/search/?P=ECON%206672',
  },
  {
    code: 'MGT 612 / ENV 632',
    title: 'Social Entrepreneurship Lab',
    href: 'https://catalog.yale.edu/search/?P=MGT%20612',
  },
  {
    code: 'MATH 2220 / AMTH 2220',
    title: 'Linear Algebra with Applications',
    href: 'https://catalog.yale.edu/search/?P=MATH%202220',
  },
  aphyStatisticalMethods,
]

/** Twelve engineering-focused courses (APHY 4700 cross-listed here from economics). */
const yaleCoursesEngineering: YaleFavoriteCourse[] = [
  {
    code: 'ENAS 1180',
    title: 'Introduction to Engineering, Innovation, and Design',
    href: 'https://catalog.yale.edu/search/?P=ENAS%201180',
  },
  {
    code: 'ENAS 1300',
    title: 'Introduction to Computing for Engineers and Scientists',
    href: 'https://catalog.yale.edu/search/?P=ENAS%201300',
  },
  {
    code: 'MATH 1200',
    title: 'Calculus of Functions of Several Variables (multivariable calculus)',
    href: 'https://catalog.yale.edu/search/?P=MATH%201200',
  },
  {
    code: 'PHYS 1800 & PHYS 1810',
    title: 'University Physics (year sequence)',
    href: 'https://catalog.yale.edu/search/?P=PHYS%201800',
  },
  {
    code: 'PHYS 1650L & PHYS 1660L',
    title: 'General Physics Laboratory',
    href: 'https://catalog.yale.edu/search/?P=PHYS%201650L',
  },
  {
    code: 'ENAS 1940',
    title: 'Ordinary and Partial Differential Equations with Applications',
    href: 'https://catalog.yale.edu/search/?P=ENAS%201940',
  },
  {
    code: 'MENG 2311',
    title: 'Mechanical Engineering I: Strength and Deformation of Mechanical Elements',
    href: 'https://catalog.yale.edu/search/?P=MENG%202311',
  },
  {
    code: 'MENG 2050',
    title: 'Computer-Aided Engineering',
    href: 'https://catalog.yale.edu/search/?P=MENG%202050',
  },
  {
    code: 'MENG 2511',
    title: 'Thermodynamics for Mechanical Engineers',
    href: 'https://catalog.yale.edu/search/?P=MENG%202511',
  },
  {
    code: 'MENG 3422',
    title: 'Mechanical Engineering II: Fluid Mechanics',
    href: 'https://catalog.yale.edu/search/?P=MENG%203422',
  },
  {
    code: 'MENG 3323',
    title: 'Mechanical Engineering III: Dynamics',
    href: 'https://catalog.yale.edu/search/?P=MENG%203323',
  },
  aphyStatisticalMethods,
]

/** Language, arts, writing, and advanced math not placed in the econ or engineering buckets above. */
const yaleCoursesExploration: YaleFavoriteCourse[] = [
  {
    code: 'MATH 1150',
    title: 'Calculus of Functions of One Variable II',
    href: 'https://catalog.yale.edu/search/?P=MATH%201150',
  },
  {
    code: 'MATH 2320 / AMTH 2320',
    title: 'Advanced Linear Algebra with Applications',
    href: 'https://catalog.yale.edu/search/?P=MATH%202320',
  },
  {
    code: 'ARCH 2000 / EVST 2000 / URBN 2000',
    title: 'Scales of Design',
    href: 'https://catalog.yale.edu/search/?P=ARCH%202000',
  },
  {
    code: 'ART 1838',
    title: 'Digital Photography: Seeing in Color',
    href: 'https://catalog.yale.edu/search/?P=ART%201838',
  },
  {
    code: 'FILM 1620 / ART 1942',
    title: 'Introductory Documentary Filmmaking',
    href: 'https://catalog.yale.edu/search/?P=FILM%201620',
  },
  {
    code: 'FILM 2320 / THST 241',
    title: 'Classical Hollywood Narrative, 1920–1960',
    href: 'https://catalog.yale.edu/search/?P=FILM%202320',
  },
  {
    code: 'ENGL 3450',
    title: 'Daily Themes',
    href: 'https://catalog.yale.edu/search/?P=ENGL%203450',
  },
  {
    code: 'SPAN 1100',
    title: 'Elementary Spanish I',
    href: 'https://catalog.yale.edu/search/?P=SPAN%201100',
  },
  {
    code: 'SPAN 1200',
    title: 'Elementary Spanish II',
    href: 'https://catalog.yale.edu/search/?P=SPAN%201200',
  },
  {
    code: 'SPAN 1300',
    title: 'Intermediate Spanish I',
    href: 'https://catalog.yale.edu/search/?P=SPAN%201300',
  },
]

function YaleCourseBucket({
  label,
  bucketId,
  courses,
}: {
  label: string
  bucketId: string
  courses: YaleFavoriteCourse[]
}) {
  return (
    <div className="yale-course-column">
      <p className="subsection-label">{label}</p>
      <ul className="books-list">
        {courses.map((item) => (
          <li key={`${bucketId}-${item.code}-${item.title}`}>
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              <span className="books-title">{item.title}</span>
              <span className="books-author">{item.code}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

type ResearchProject = {
  title: string
  year: string
  href: string
  image: string
  internal?: boolean
}

const researchProjects: ResearchProject[] = [
  {
    title: 'Corn Fields 2026',
    year: '2026',
    href: '/papers/corn-fields.pdf',
    image: '/projects/corn-fields.png',
  },
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
                {...(project.internal ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                aria-label={project.internal ? project.title : `${project.title} (opens in new tab)`}
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
          </p>
        </div>
      </details>

      <details className="fold classes" aria-label="Yale College">
        <summary className="fold-summary">
          <span className="section-label">Yale College</span>
        </summary>
        <div className="fold-body">
          <div className="yale-courses-grid">
            <YaleCourseBucket label="Economics" bucketId="econ" courses={yaleCoursesEconomics} />
            <YaleCourseBucket label="Engineering" bucketId="eng" courses={yaleCoursesEngineering} />
            <YaleCourseBucket
              label="Further exploration"
              bucketId="explore"
              courses={yaleCoursesExploration}
            />
          </div>
          <p className="classes-footnote">
            Each line shows Yale College Programs of Study–style numbers (four digits where the bulletin uses
            them). Cross-listed subjects are written out in full (for example APHY 4700 / ECON 4446). My
            transcript sometimes used older listings (ECON 361 for corporate finance, MENG 280 for strength,
            THST 241 for classical Hollywood); the codes here follow the current catalog. In-progress courses
            (ARCH 2000, ECON 2121, ECON 4450, ECON 6672) may appear without grades until the term posts. APHY
            4700 is intentionally listed under both economics and engineering; that row still links to a public
            departmental syllabus PDF. For syllabi by term, try{' '}
            <a href="https://coursetable.com/" target="_blank" rel="noopener noreferrer">
              CourseTable
            </a>
            . General physics lab was taken as PHYS 166L and PHYS 165L on the transcript (PHYS 1660L / PHYS
            1650L in the current catalog).
          </p>
        </div>
      </details>
    </main>
  )
}
