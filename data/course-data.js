/**
 * GSEA Semester 1 - General English & Aeronautical English
 * Complete Course Data Architecture
 * Author: Phil PARRIS (LH/LAN)
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.COURSE_DATA = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  const agData = {
  "1": {
    "id": 1,
    "name": "Module 1",
    "title": "Travel, Transport & Leisure",
    "ddrs": {
      "title": "D\u00e9veloppement Durable & Responsabilit\u00e9 Soci\u00e9tale : Tags et D\u00e9finitions Officielles",
      "summary": "Le R\u00e9f\u00e9rentiel National DD&RS de l'Enseignement Sup\u00e9rieur et de la Recherche (Label DD&RS) structure les engagements \u00e9cologiques, soci\u00e9taux et \u00e9thiques des \u00e9tablissements et des grands projets de transport selon 5 axes strat\u00e9giques et leurs domaines transversaux d'application.",
      "pageUrl": "ddrs1.html",
      "axes": [
        {
          "badge": "Axe 1",
          "num": "1.",
          "title": "Gouvernance et Strat\u00e9gie",
          "desc": "Int\u00e9gration du d\u00e9veloppement durable dans la vision, le projet d'\u00e9tablissement et le pilotage d\u00e9cisionnel. Dialogue continu avec les parties prenantes (\u00e9tudiants, personnels, collectivit\u00e9s, partenaires), allocation de budgets d\u00e9di\u00e9s et suivi d'indicateurs d'impact mesurables."
        },
        {
          "badge": "Axe 2",
          "num": "2.",
          "title": "Formation et P\u00e9dagogie",
          "desc": "Sensibilisation et formation de 100 % des apprenants aux enjeux de la transition socio-\u00e9cologique (limites plan\u00e9taires, climat, biodiversit\u00e9). Int\u00e9gration transversale des comp\u00e9tences DD&RS (rapport Jouzel / socle MESR) pour pr\u00e9parer les ing\u00e9nieurs \u00e0 la prise de d\u00e9cision \u00e9thique et responsable."
        },
        {
          "badge": "Axe 3",
          "num": "3.",
          "title": "Recherche et Innovation",
          "desc": "Orientation et valorisation de l'activit\u00e9 scientifique et technologique en r\u00e9ponse aux Objectifs de D\u00e9veloppement Durable (ODD). Soutien aux programmes interdisciplinaires, recherche sobre et responsable, \u00e9co-conception et transfert de technologies vertes au service de la soci\u00e9t\u00e9."
        },
        {
          "badge": "Axe 4",
          "num": "4.",
          "title": "Gestion Environnementale",
          "desc": "Ma\u00eetrise et r\u00e9duction continue des impacts \u00e9cologiques directs : d\u00e9carbonation des mobilit\u00e9s pendulaires et professionnelles, efficacit\u00e9 et sobri\u00e9t\u00e9 \u00e9nerg\u00e9tique du patrimoine b\u00e2ti, gestion circulaire des d\u00e9chets, pr\u00e9servation de la biodiversit\u00e9 sur site et achats publics responsables."
        },
        {
          "badge": "Axe 5",
          "num": "5.",
          "title": "Politique Sociale et Inclusion",
          "desc": "Engagement institutionnel pour la responsabilit\u00e9 soci\u00e9tale : \u00e9galit\u00e9 professionnelle femmes-hommes, inclusion et accessibilit\u00e9 des personnes en situation de handicap, \u00e9galit\u00e9 des chances, am\u00e9lioration de la qualit\u00e9 de vie et sant\u00e9 globale, et pr\u00e9vention de toute forme de discrimination."
        }
      ],
      "items": [
        {
          "badge": "Axe 1",
          "num": "1.",
          "title": "Gouvernance et Strat\u00e9gie",
          "desc": "Int\u00e9gration du d\u00e9veloppement durable dans la vision, le projet d'\u00e9tablissement et le pilotage d\u00e9cisionnel. Dialogue continu avec les parties prenantes (\u00e9tudiants, personnels, collectivit\u00e9s, partenaires), allocation de budgets d\u00e9di\u00e9s et suivi d'indicateurs d'impact mesurables.",
          "isMuted": false
        },
        {
          "badge": "Axe 2",
          "num": "2.",
          "title": "Formation et P\u00e9dagogie",
          "desc": "Sensibilisation et formation de 100 % des apprenants aux enjeux de la transition socio-\u00e9cologique (limites plan\u00e9taires, climat, biodiversit\u00e9). Int\u00e9gration transversale des comp\u00e9tences DD&amp;RS (rapport Jouzel / socle MESR) pour pr\u00e9parer les ing\u00e9nieurs \u00e0 la prise de d\u00e9cision \u00e9thique et responsable.",
          "isMuted": false
        },
        {
          "badge": "Axe 3",
          "num": "3.",
          "title": "Recherche et Innovation",
          "desc": "Orientation et valorisation de l'activit\u00e9 scientifique et technologique en r\u00e9ponse aux Objectifs de D\u00e9veloppement Durable (ODD). Soutien aux programmes interdisciplinaires, recherche sobre et responsable, \u00e9co-conception et transfert de technologies vertes au service de la soci\u00e9t\u00e9.",
          "isMuted": false
        },
        {
          "badge": "Axe 4",
          "num": "4.",
          "title": "Gestion Environnementale",
          "desc": "Ma\u00eetrise et r\u00e9duction continue des impacts \u00e9cologiques directs : d\u00e9carbonation des mobilit\u00e9s pendulaires et professionnelles, efficacit\u00e9 et sobri\u00e9t\u00e9 \u00e9nerg\u00e9tique du patrimoine b\u00e2ti, gestion circulaire des d\u00e9chets, pr\u00e9servation de la biodiversit\u00e9 sur site et achats publics responsables.",
          "isMuted": false
        },
        {
          "badge": "Axe 5",
          "num": "5.",
          "title": "Politique Sociale et Inclusion",
          "desc": "Engagement institutionnel pour la responsabilit\u00e9 soci\u00e9tale : \u00e9galit\u00e9 professionnelle femmes-hommes, inclusion et accessibilit\u00e9 des personnes en situation de handicap, \u00e9galit\u00e9 des chances, am\u00e9lioration de la qualit\u00e9 de vie et sant\u00e9 globale, et pr\u00e9vention de toute forme de discrimination.",
          "isMuted": true
        },
        {
          "badge": "Tag",
          "num": "6.",
          "title": "Mobilit\u00e9 Durable &amp; Report Modal (Sustainable Mobility)",
          "desc": "Strat\u00e9gie d'optimisation des transports articul\u00e9e autour de la hi\u00e9rarchie \u00ab \u00c9viter - Transf\u00e9rer - Am\u00e9liorer \u00bb (ASI). Promotion active du report modal vers le ferroviaire, les transports en commun et les mobilit\u00e9s douces face \u00e0 l'autosolisme et aux vols court-courriers.",
          "isMuted": true
        },
        {
          "badge": "Tag",
          "num": "7.",
          "title": "Bilan d'\u00c9missions de GES (BEGES / Bilan Carbone)",
          "desc": "Comptabilisation r\u00e9glementaire des gaz \u00e0 effet de serre (m\u00e9thode ADEME / ISO 14064) sur les trois p\u00e9rim\u00e8tres : Scope 1 (\u00e9missions directes), Scope 2 (\u00e9missions indirectes \u00e9nerg\u00e9tiques) et Scope 3 (\u00e9missions indirectes amont/aval : d\u00e9placements, achats, logistique et cycle de vie).",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "8.",
          "title": "Sobri\u00e9t\u00e9 \u00c9nerg\u00e9tique &amp; Efficacit\u00e9",
          "desc": "D\u00e9marche articulant la sobri\u00e9t\u00e9 (questionnement et r\u00e9duction des consommations par la modification des comportements et des usages collectifs) et l'efficacit\u00e9 (optimisation technique des rendements \u00e9nerg\u00e9tiques pour un m\u00eame niveau de service).",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "9.",
          "title": "Pr\u00e9servation de la Biodiversit\u00e9 &amp; Z\u00e9ro Artificialisation Nette (ZAN)",
          "desc": "Protection des \u00e9cosyst\u00e8mes et des continuit\u00e9s \u00e9cologiques (trames vertes et bleues). Application des exigences l\u00e9gales (loi Climat et R\u00e9silience) visant \u00e0 stopper la disparition nette d'espaces naturels et agricoles caus\u00e9e par les infrastructures et l'am\u00e9nagement.",
          "isMuted": true
        },
        {
          "badge": "Tag",
          "num": "10.",
          "title": "\u00c9quit\u00e9 Territoriale &amp; Accessibilit\u00e9 (Territorial Equity)",
          "desc": "Principe de justice spatiale garantissant un acc\u00e8s universel, abordable et s\u00e9curis\u00e9 aux r\u00e9seaux de transport et aux services d'int\u00e9r\u00eat g\u00e9n\u00e9ral pour l'ensemble des territoires (urbains, p\u00e9riurbains et ruraux), luttant contre la fracture et la pr\u00e9carit\u00e9 mobilit\u00e9.",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "11.",
          "title": "Achats Responsables &amp; Analyse du Cycle de Vie (ACV / LCA)",
          "desc": "Int\u00e9gration syst\u00e9matique de crit\u00e8res environnementaux et sociaux dans la commande publique et priv\u00e9e. \u00c9valuation globale des impacts de chaque produit, infrastructure ou service de son extraction jusqu'\u00e0 son recyclage ou \u00e9limination finale.",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "12.",
          "title": "Objectifs de D\u00e9veloppement Durable (ODD - Agenda 2030)",
          "desc": "Cadre universel des Nations Unies comprenant 17 objectifs interd\u00e9pendants pour concilier prosp\u00e9rit\u00e9 \u00e9conomique, progr\u00e8s social et protection de la biosph\u00e8re. Les politiques de transport et d'ing\u00e9nierie s'articulent principalement autour des ODD 9, 11, 12 et 13.",
          "isMuted": false
        }
      ]
    },
    "sessions": {
      "1": {
        "session": 1,
        "objectives": {
          "title": "Session 1 - Introduction & Travel Anecdotes Objectives",
          "summary": "By the end of this session, you will be able to navigate the TOEIC exam structure with confidence, use high-frequency travel and DDRS collocations, construct complex narrative sentences, and prepare for the Session 5 Formative Evaluation.",
          "items": [
            {
              "num": 1,
              "title": "Understand the TOEIC Exam",
              "description": "Master the structure, scoring system, and strategic pacing of the TOEIC Listening & Reading test, shifting from general language study to targeted exam technique."
            },
            {
              "num": 2,
              "title": "Master High-Frequency Travel & Professional Collocations",
              "description": "Identify and correctly utilize essential B2/C1-level travel collocations and idioms in professional and conversational contexts."
            },
            {
              "num": 3,
              "title": "Use Narrative Past Tenses & Emphasis",
              "description": "Use narrative past tenses (Past Simple vs. Past Continuous) and emphasis structures (Hardly had I..., No sooner had we...) to tell clear, engaging travel stories."
            },
            {
              "num": 4,
              "title": "Integrate DDRS Principles into Professional Travel",
              "description": "Connect global travel scenarios to concepts of sustainable mobility, cultural respect, and responsible tourism."
            },
            {
              "num": 5,
              "title": "Prepare for the Class 5 Formative Evaluation (FE)",
              "description": "Understand the exact assessment criteria\u2014vocabulary, fluency, grammar, and TOEIC-readiness\u2014for your Session 5 speaking evaluation, graded against official communication criteria."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 1 Lesson Plan (2 Hours)",
          "summary": "A structured 2-hour introductory agenda incorporating professional icebreakers, comprehensive TOEIC diagnostics and pacing strategies, travel and DDRS vocabulary building, structured narrative discussions, and formative evaluation guidelines.",
          "items": [
            {
              "time": "0-15",
              "title": "Part 1: Icebreaker Activity \u2014 Two Truths & One Goal (15 mins)",
              "description": "Students write down two professional/life facts and one personal English/TOEIC goal, then share in pairs to build rapport and articulate semester objectives."
            },
            {
              "time": "15-45",
              "title": "Part 2: TOEIC Diagnostic & Exam Strategy (30 mins)",
              "description": "Full breakdown of the 200-question Listening & Reading exam, scaled scoring (10\u2013990), common pitfalls (sound-alikes, literal translation), and time management benchmarks (Parts 5 & 6 in 20\u201322 mins; 10-second rule for listening)."
            },
            {
              "time": "45-65",
              "title": "Part 3: Warm-Up & Vocabulary Builder (20 mins)",
              "description": "Introduction to high-frequency travel collocations (book a flight, clear customs, miss a connection), 10 common travel idioms (hit the road, in the driver's seat), and core DDRS terms (carbon footprint, eco-certification, circular hospitality)."
            },
            {
              "time": "65-95",
              "title": "Part 4: Structured Discussion \u2014 Travel Anecdotes (30 mins)",
              "description": "In pairs or small groups of 3, students share a memorable travel experience or disruption using newly learned travel vocabulary and narrative past tenses."
            },
            {
              "time": "95-115",
              "title": "Part 5: Grammar Focus \u2014 Narrative Tenses & Emphasis (20 mins)",
              "description": "Review Past Simple vs. Past Continuous, followed by emphasis patterns to tell engaging travel stories (Hardly had I arrived when..., No sooner had we cleared customs than...)."
            },
            {
              "time": "115-120",
              "title": "Part 6: Class Wrap-Up & Next Steps (5 mins)",
              "description": "Review how today's skills connect to your Session 5 Formative Evaluation and note down personal study priorities."
            }
          ]
        },
        "revision": {
          "title": "Session 1: Introduction & Travel Anecdotes",
          "summary": "Review the 18 key terms for Introduction & Travel Anecdotes to build your fluency in discussions, professional reading, and TOEIC practice.",
          "terms": [
            {
              "num": "01",
              "term": "Itinerary",
              "definition": "A planned route or journey, detailing scheduled stops, transport connections, and activities."
            },
            {
              "num": "02",
              "term": "Layover",
              "definition": "A period of waiting between two connecting flights or segments of a travel journey."
            },
            {
              "num": "03",
              "term": "Catch the Travel Bug",
              "definition": "To suddenly develop a strong enthusiasm, passion, or desire for traveling to new places."
            },
            {
              "num": "04",
              "term": "Baggage Allowance",
              "definition": "The maximum weight and volume of luggage a passenger can check in or carry on without penalty."
            },
            {
              "num": "05",
              "term": "Off the Beaten Track",
              "definition": "Traveling to secluded, quiet, or uncommon destinations away from crowded tourist hotspots."
            },
            {
              "num": "06",
              "term": "Round-Trip",
              "definition": "A journey to a destination and back to the original starting location."
            },
            {
              "num": "07",
              "term": "Hit the Road",
              "definition": "To depart on a journey, begin travel, or set out on a road trip."
            },
            {
              "num": "08",
              "term": "Miss a Connection",
              "definition": "To arrive too late for a scheduled connecting flight, train, or ferry due to prior delays."
            },
            {
              "num": "09",
              "term": "All-Inclusive",
              "definition": "A vacation package where meals, drinks, and resort leisure activities are bundled into one price."
            },
            {
              "num": "10",
              "term": "Extend a Stay",
              "definition": "To prolong the duration of a trip, holiday, or hotel booking beyond the original departure date."
            },
            {
              "num": "11",
              "term": "In the Driver&#x27;s Seat",
              "definition": "To be in full control of a situation, project, or travel plan rather than letting events decide."
            },
            {
              "num": "12",
              "term": "Customs Declaration",
              "definition": "An official document listing goods being brought into a country for tax and security screening."
            },
            {
              "num": "13",
              "term": "Boarding Pass",
              "definition": "A document or digital barcode permitting a passenger to board an aircraft or vessel."
            },
            {
              "num": "14",
              "term": "Direct Flight",
              "definition": "A flight that travels between two cities without changing aircraft, though intermediate stops may occur."
            },
            {
              "num": "15",
              "term": "Peak Season",
              "definition": "The period of the year when travel demand, tourist numbers, and accommodation rates are highest."
            },
            {
              "num": "16",
              "term": "Red-Eye Flight",
              "definition": "A commercial flight scheduled to depart late at night and arrive early the next morning."
            },
            {
              "num": "17",
              "term": "Eco-Tourism",
              "definition": "Responsible travel to natural areas that conserves the environment and improves local well-being."
            },
            {
              "num": "18",
              "term": "Carbon Footprint",
              "definition": "The total amount of greenhouse gases generated directly and indirectly by an individual&#x27;s travel activities."
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: The Art of the Travel Story",
              "watchUrl": "https://www.youtube.com/watch?v=eH6n4YgN3U4",
              "tag": "Storytelling",
              "videoId": "eH6n4YgN3U4",
              "embedUrl": "https://www.youtube-nocookie.com/embed/eH6n4YgN3U4",
              "caption": "Focus: Analyze how travelers share personal anecdotes, unexpected encounters, and narrative reflections with conversational fluency."
            },
            {
              "title": "Video 2: TOEIC Listening",
              "watchUrl": "https://www.youtube.com/watch?v=SaV2m8jtaRI",
              "tag": "Strategy",
              "videoId": "SaV2m8jtaRI",
              "embedUrl": "https://www.youtube-nocookie.com/embed/SaV2m8jtaRI",
              "caption": "Focus: Analyze conversational tone in airport announcements and multi-speaker dialogues (TOEIC Parts 3 & 4)."
            },
            {
              "title": "Video 3: Airport Operations",
              "watchUrl": "https://www.youtube.com/watch?v=cjxn0z1f7Pk",
              "tag": "Case Study",
              "videoId": "cjxn0z1f7Pk",
              "embedUrl": "https://www.youtube-nocookie.com/embed/cjxn0z1f7Pk",
              "caption": "Focus: Evaluate regional transit hubs, electric ground support equipment (e-GSE), and terminal energy efficiency."
            }
          ],
          "grammar": {
            "title": "How to Use the Present Perfect",
            "badge": "B1\u2013B2 Grammar Focus",
            "patternTitle": "Sentence Pattern",
            "formula": "Subject + have / has + Past Participle (V3)",
            "rulesTitle": "When to Use It",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. Actions continuing now:</strong> Started in the past and continue into the present, signaled by <span style=\"font-weight: 700; color: #c0684f;\">since</span> (+ starting point, e.g., <em>since 2021</em>) or <span style=\"font-weight: 700; color: #c0684f;\">for</span> (+ duration, e.g., <em>for three years</em>).",
              "<strong style=\"color: #1e293b;\">2. Past action with a present result:</strong> The exact past time is not mentioned; what matters is the result right now (*\"We have updated our safety procedures\"*).",
              "<strong style=\"color: #1e293b;\">3. Recent updates:</strong> Marked by signal words like <span style=\"font-weight: 600; color: #334155;\">already</span>, <span style=\"font-weight: 600; color: #334155;\">yet</span>, <span style=\"font-weight: 600; color: #334155;\">recently</span>, <span style=\"font-weight: 600; color: #334155;\">just</span>, or <span style=\"font-weight: 600; color: #334155;\">lately</span>."
            ],
            "trap": "<strong>\u26a0\ufe0f The #1 Past vs. Present Perfect Trap:</strong> Never use <em>have / has + V3</em> with finished past dates or times (like <em>yesterday</em>, <em>in 2020</em>, <em>two hours ago</em>, or <em>last year</em>). When you see a specific completed time, always choose the <strong>Past Simple</strong> (*introduced*, *allocated*)!",
            "examplesTitle": "Workplace & Transit Examples",
            "examples": [
              "<em>\"The European Commission <strong>has allocated</strong> new funding for high-speed rail corridors <strong>since 2021</strong>.\"</em>",
              "<em>\"Airport ground staff <strong>have not finalized</strong> the passenger rebooking procedures <strong>yet</strong>.\"</em>"
            ]
          },
          "toeic": {
            "stem": "The European Transport Commission ________ several new high-speed rail corridors across member states over the past three years.",
            "options": [
              {
                "letter": "A",
                "text": "introduces"
              },
              {
                "letter": "B",
                "text": "was introduced"
              },
              {
                "letter": "C",
                "text": "has introduced"
              },
              {
                "letter": "D",
                "text": "is introducing"
              }
            ],
            "correctLetter": "C",
            "correctText": "has introduced",
            "analysis": "The phrase \"over the past three years\" describes an action starting in the past and continuing up to the present. An action stretching into the present requires the Present Perfect (have / has + past participle).",
            "strategy": "Time markers such as \"over the past/last [period]\", \"since [date]\", \"lately\", and \"so far\" are primary TOEIC Part 5 clues that signal have / has + V3."
          },
          "resources": [
            {
              "url": "https://www.etsglobal.org/fr/fr",
              "tag": "01 \u2022 Exam Prep",
              "name": "Official ETS TOEIC Hub",
              "desc": "Review sample test questions, test timing rubrics, and the official score mapping guide for B2/C1 levels."
            },
            {
              "url": "https://www.iata.org/en/programs/sustainability/",
              "tag": "02 \u2022 Sustainability",
              "name": "IATA NetZero & Aviation Sustainability",
              "desc": "Authoritative data on the international airline industry's roadmap to net-zero carbon emissions by 2050."
            },
            {
              "url": "https://www.unwto.org/sustainable-development",
              "tag": "03 \u2022 DD&RS Guidelines",
              "name": "UN Tourism Sustainable Development",
              "desc": "Global framework policies outlining sustainable destination management and community-based tourism (CBT)."
            },
            {
              "url": "https://dictionary.cambridge.org",
              "tag": "04 \u2022 Collocations",
              "name": "Cambridge English Collocations & Idioms",
              "desc": "Check high-frequency B2/C1 travel combinations, prepositions with transit verbs, and formal business phrases."
            },
            {
              "url": "https://www.bbc.com/travel",
              "tag": "05 \u2022 Travel Anecdotes",
              "name": "BBC Travel Features & Culture",
              "desc": "Engaging journalistic articles and personal narrative essays to inspire your Session 1 travel anecdotes."
            },
            {
              "url": "https://www.icao.int/environmental-protection/CORSIA/Pages/default.aspx",
              "tag": "06 \u2022 Environmental Policy",
              "name": "ICAO CORSIA & Climate Action",
              "desc": "International Civil Aviation Organization carbon offsetting and reduction scheme policies for international aviation."
            }
          ],
          "pageUrl": "session1/admat1.html",
          "articles": [
            {
              "topic": "Travel &amp; Communication",
              "sourceTag": "Cultural Insights",
              "heading": "The Art of the Travel Anecdote: Why Personal Journeys Build Spoken Fluency",
              "snippet": "Sharing personal travel anecdotes and navigating unexpected transit disruptions provides the ideal foundation for natural narrative tenses, descriptive vocabulary, and conversational confidence in English.",
              "readTime": "Estimated read: 4 mins",
              "url": "https://www.bbc.com/travel"
            },
            {
              "topic": "Exam Preparation",
              "sourceTag": "ETS Global Insights",
              "heading": "Understanding the Global TOEIC Benchmark: Essential Strategies for B2 Learners",
              "snippet": "Learn how the 990-point scaled scoring system maps to CEFR B2 and C1 competencies, and why time management pacing in Parts 5, 6, and 7 is decisive for overall test success.",
              "readTime": "Estimated read: 5 mins",
              "url": "https://www.etsglobal.org/fr/fr"
            }
          ],
          "toeicQuestions": [
            {
              "stem": "The European Transport Commission ________ several new high-speed rail corridors across member states over the past three years.",
              "options": [
                {
                  "letter": "A",
                  "text": "introduces"
                },
                {
                  "letter": "B",
                  "text": "was introduced"
                },
                {
                  "letter": "C",
                  "text": "has introduced"
                },
                {
                  "letter": "D",
                  "text": "is introducing"
                }
              ],
              "correctLetter": "C",
              "correctText": "has introduced",
              "analysis": "The phrase \"over the past three years\" describes an action starting in the past and continuing up to the present. An action stretching into the present requires the Present Perfect (have / has + past participle).",
              "strategy": "Time markers such as \"over the past/last [period]\", \"since [date]\", \"lately\", and \"so far\" are primary TOEIC Part 5 clues that signal have / has + V3."
            },
            {
              "stem": "The regional railway operator ________ new electric locomotives last November to replace aging diesel units on suburban commuter lines.",
              "options": [
                {
                  "letter": "A",
                  "text": "has purchased"
                },
                {
                  "letter": "B",
                  "text": "purchased"
                },
                {
                  "letter": "C",
                  "text": "purchases"
                },
                {
                  "letter": "D",
                  "text": "is purchasing"
                }
              ],
              "correctLetter": "B",
              "correctText": "purchased",
              "analysis": "The specific completed past time marker \"last November\" requires the Past Simple (\"purchased\"). Never use the Present Perfect with finished past dates or times.",
              "strategy": "When you see specific completed time markers like yesterday, last [month/year], in [year], or [time] ago, immediately rule out have/has + V3."
            },
            {
              "stem": "Airport ground handling staff ________ the updated passenger rebooking procedures yet, so flight boarding remains temporarily delayed.",
              "options": [
                {
                  "letter": "A",
                  "text": "has not finalized"
                },
                {
                  "letter": "B",
                  "text": "did not finalize"
                },
                {
                  "letter": "C",
                  "text": "have not finalized"
                },
                {
                  "letter": "D",
                  "text": "will not finalize"
                }
              ],
              "correctLetter": "C",
              "correctText": "have not finalized",
              "analysis": "\"Staff\" in this context takes plural agreement, and the adverb \"yet\" is a signature marker for negative Present Perfect sentences.",
              "strategy": "The word \"yet\" at the end of a clause strongly points to negative Present Perfect (have not / has not + V3)."
            },
            {
              "stem": "Mr. Dupont ________ for the civil aviation agency since he graduated from the National School of Civil Aviation in 2018.",
              "options": [
                {
                  "letter": "A",
                  "text": "works"
                },
                {
                  "letter": "B",
                  "text": "worked"
                },
                {
                  "letter": "C",
                  "text": "has worked"
                },
                {
                  "letter": "D",
                  "text": "was working"
                }
              ],
              "correctLetter": "C",
              "correctText": "has worked",
              "analysis": "The preposition \"since\" followed by a past event (\"since he graduated\") indicates an action that began in the past and continues into the present, requiring the Present Perfect.",
              "strategy": "Formula: Present Perfect + since + Past Simple point in time. Look for \"since\" as an immediate trigger for have / has + V3."
            },
            {
              "stem": "The airline customer service center ________ more than five thousand compensation claims during the flight attendant strike last week.",
              "options": [
                {
                  "letter": "A",
                  "text": "has processed"
                },
                {
                  "letter": "B",
                  "text": "processed"
                },
                {
                  "letter": "C",
                  "text": "processes"
                },
                {
                  "letter": "D",
                  "text": "had been processed"
                }
              ],
              "correctLetter": "B",
              "correctText": "processed",
              "analysis": "The time expression \"during the strike last week\" refers to a completed past duration, demanding the Past Simple tense (\"processed\").",
              "strategy": "Actions completed within a finished past period (last week, during the conference) require the simple past, not the present perfect."
            }
          ]
        }
      },
      "2": {
        "session": 2,
        "objectives": {
          "title": "Session 2 - The Evolution of Transport & Sustainable Mobility Objectives",
          "summary": "By the end of this session, you will be able to analyze multi-modal transport infrastructure, express complex cause and effect relationships, apply TOEIC workplace strategies, and formulate modal-shift recommendations.",
          "items": [
            {
              "num": 1,
              "title": "Analyze Multi-Modal Transport (DDRS)",
              "description": "Compare trains, flights, and road travel along a 600 km corridor, balancing travel time, emissions, and fair transport access for all regions."
            },
            {
              "num": 2,
              "title": "Express Cause, Effect & Comparisons (Grammar)",
              "description": "Accurately use formal cause-and-effect words (owing to, as a result of) and double comparatives (The more..., the less...) in professional discussions."
            },
            {
              "num": 3,
              "title": "Master TOEIC Workplace Strategies",
              "description": "Identify high-frequency transport collocations and sentence patterns under timed reading conditions."
            },
            {
              "num": 4,
              "title": "Resolve Real-World Mobility Dilemmas",
              "description": "Review business travel routes and propose practical green travel options that balance time, cost, and carbon footprints."
            },
            {
              "num": 5,
              "title": "Track Formative Evaluation (FE) Readiness",
              "description": "Build speaking fluency by practicing how to describe words and ideas without hesitating, and set study goals for Session 5."
            },
            {
              "num": 6,
              "title": "Integrate DD&RS Principles into Professional Travel",
              "description": "Connect global travel scenarios to concepts of sustainable mobility, cultural respect, and responsible tourism."
            },
            {
              "num": 7,
              "title": "Prepare for the Class 5 Formative Evaluation (FE)",
              "description": "Understand the exact assessment criteria\u2014vocabulary, fluency, grammar, and TOEIC-readiness\u2014for your Session 5 speaking evaluation, graded against official communication criteria."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 2 Lesson Plan (2 Hours)",
          "summary": "A 2-hour session investigating how travel has evolved, comparing trains and flights along key routes, cause-and-effect grammar, TOEIC reading practice, and vocabulary fluency games.",
          "items": [
            {
              "time": "0-15",
              "title": "Part 1: Warm-Up & Rapid Retrieval \u2014 The Timeline Clash (15 mins)",
              "description": "In pairs, students analyze 4 historical transport phases (1830s steam railways, 1950s post-war jet/car boom, 1980s containerization, Present\u20132030+ electrification and SAF) to weigh economic gains against environmental costs."
            },
            {
              "time": "15-40",
              "title": "Part 2: Media & Critical Analysis \u2014 The Multi-Modal Pitch (25 mins)",
              "description": "Analyzing the European Commission's High-Speed Rail plan. Teams pitch trains vs. flights using travel time, total carbon footprint, and fair transport access for all regions."
            },
            {
              "time": "40-60",
              "title": "Part 3: Grammar in Context \u2014 Cause, Effect & Complex Comparison (20 mins)",
              "description": "Replacing basic linkers with formal cause/result prepositions (owing to, as a consequence of, resulted in) and double comparatives (The more efficiently... the less...)."
            },
            {
              "time": "60-80",
              "title": "Part 4: TOEIC Workplace Application (20 mins)",
              "description": "Timed reading practice and transport vocabulary in Parts 5 & 7 (accelerate, owing to, sentence patterns, greenhouse gas emissions)."
            },
            {
              "time": "80-95",
              "title": "Part 5: DDRS Case Discussion \u2014 The Decarbonisation Dilemma (15 mins)",
              "description": "\"The ENAC Transit Audit\" \u2014 Auditing corporate travel dilemmas (50-minute domestic flights vs. 3h15 TGV producing 6\u20138x fewer emissions) and formulating spoken policy recommendations."
            },
            {
              "time": "95-110",
              "title": "Part 6: Vocabulary Speaking Game \u2014 Taboo (15 mins)",
              "description": "45-second fluency game where students describe key concepts without saying forbidden words: Modal Shift, Carbon Footprint, High-Speed Rail, Lifecycle, and Sustainable Aviation Fuel (SAF)."
            },
            {
              "time": "110-120",
              "title": "Part 7: Class Wrap-Up & Self-Study Plan (10 mins)",
              "description": "Review key learnings, note grammar to practice for Session 5, and review homework assignments."
            }
          ]
        },
        "revision": {
          "title": "Session 2: Evolution of Transport",
          "summary": "Review the 18 key terms for Evolution of Transport to build your fluency in discussions, professional reading, and TOEIC practice.",
          "terms": [
            {
              "num": "01",
              "term": "Modal Shift",
              "definition": "Encouraging travelers or cargo to switch from high-carbon transport (like cars or planes) to greener options (like trains or buses)."
            },
            {
              "num": "02",
              "term": "High-Speed Rail (HSR)",
              "definition": "Electrified passenger trains operating over 250 km/h, providing a low-carbon competitor to domestic flights."
            },
            {
              "num": "03",
              "term": "Life-Cycle Emissions",
              "definition": "The total greenhouse gas emissions generated throughout vehicle manufacturing, operation, maintenance, and disposal."
            },
            {
              "num": "04",
              "term": "Territorial Equity",
              "definition": "Ensuring that rural and remote areas have fair access to reliable, affordable public transport\u2014not just big cities."
            },
            {
              "num": "05",
              "term": "Intermodal Hub",
              "definition": "A transit node seamlessly integrating rail, metro, bus, shared mobility, and pedestrian corridors."
            },
            {
              "num": "06",
              "term": "Decarbonization",
              "definition": "The process of eliminating carbon dioxide emissions from transportation fuels and propulsion systems."
            },
            {
              "num": "07",
              "term": "Electrification",
              "definition": "Converting transit lines from fossil fuels to electric power supplied by renewable grids."
            },
            {
              "num": "08",
              "term": "Active Mobility",
              "definition": "Human-powered travel modes, primarily cycling and walking, producing zero operational emissions."
            },
            {
              "num": "09",
              "term": "Corridor Capacity",
              "definition": "The maximum passenger or freight volume that a transit route can transport within a given timeframe."
            },
            {
              "num": "10",
              "term": "Fleet Modernization",
              "definition": "Systematic replacement of aging vehicles with energy-efficient, low-emission models."
            },
            {
              "num": "11",
              "term": "Containerisation",
              "definition": "The standardized shipping container system developed in the late 20th century that transformed global trade."
            },
            {
              "num": "12",
              "term": "Point-to-Point Transit",
              "definition": "A network architecture where vehicles travel directly between origin and destination without intermediate hubs."
            },
            {
              "num": "13",
              "term": "Sustainable Aviation Fuel (SAF)",
              "definition": "Non-petroleum-based drop-in aviation fuel derived from waste oils, agricultural residues, or captured carbon."
            },
            {
              "num": "14",
              "term": "Traffic Congestion",
              "definition": "Gridlock conditions when traffic volume exceeds roadway capacity, causing delays and excess idling emissions."
            },
            {
              "num": "15",
              "term": "Micro-Mobility",
              "definition": "Small, lightweight transportation devices operating at low speeds, such as e-scooters and e-bikes."
            },
            {
              "num": "16",
              "term": "Induced Demand",
              "definition": "The phenomenon where increasing roadway capacity results in increased vehicular traffic rather than congestion relief."
            },
            {
              "num": "17",
              "term": "Modal Split",
              "definition": "The percentage of total passenger journeys completed using each transport mode within a given region."
            },
            {
              "num": "18",
              "term": "Low-Emission Zone (LEZ)",
              "definition": "A designated geographic area where access by polluting vehicles is restricted or subject to penalty fees."
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: Transport Evolution",
              "watchUrl": "https://www.youtube.com/watch?v=FaLCQo8NJFA",
              "tag": "History & Shifts",
              "videoId": "FaLCQo8NJFA",
              "embedUrl": "https://www.youtube-nocookie.com/embed/FaLCQo8NJFA",
              "caption": "Focus: Trace key technological milestones from early steam and combustion engines to interconnected multimodal hubs."
            },
            {
              "title": "Video 2: High-Speed Rail",
              "watchUrl": "https://www.youtube.com/watch?v=KrCnJjW0qp0",
              "tag": "Modal Shift",
              "videoId": "KrCnJjW0qp0",
              "embedUrl": "https://www.youtube-nocookie.com/embed/KrCnJjW0qp0",
              "caption": "Focus: The European Commission's plan to expand high-speed rail corridors, reduce regional flight emissions, and drive modal shift across the EU."
            },
            {
              "title": "Video 3: Future Decarbonization",
              "watchUrl": "https://www.youtube.com/watch?v=7KkBE0HgNJQ",
              "tag": "Case Study",
              "videoId": "7KkBE0HgNJQ",
              "embedUrl": "https://www.youtube-nocookie.com/embed/7KkBE0HgNJQ",
              "caption": "Focus: Analyze fleet renewal economics, hydrogen/electric propulsion, and the business case for sustainable corporate mobility."
            }
          ],
          "grammar": {
            "title": "The \"Past Before the Past\"",
            "badge": "B1\u2013B2 Grammar Focus",
            "patternTitle": "Sentence Pattern",
            "formula": "Subject + had + Past Participle (V3)",
            "rulesTitle": "When to Use It",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. Two past events in order:</strong> The <strong>earlier</strong> event uses <span style=\"font-weight: 700; color: #c0684f;\">had + past participle</span> (*had dominated*), while the <strong>later</strong> event uses the <strong>Past Simple</strong> (*entered service*).",
              "<strong style=\"color: #1e293b;\">2. Finished before a past deadline:</strong> Look for time connectors like <span style=\"font-weight: 700; color: #c0684f;\">by the time</span>, <span style=\"font-weight: 700; color: #c0684f;\">before</span>, <span style=\"font-weight: 600; color: #334155;\">already</span>, and <span style=\"font-weight: 600; color: #334155;\">until</span> (*\"By the time the inspectors arrived, the crew had already fixed the issue\"*)."
            ],
            "trap": "<strong>\u26a0\ufe0f Past vs. Present Perfect Trap:</strong> If a sentence already talks about a past moment (like <em>By the time they arrived...</em>), you cannot use <em>has / have</em>. You must look backward into the past with <strong>had + past participle</strong>!",
            "examplesTitle": "Transport Evolution Examples",
            "examples": [
              "<em>\"By the time commercial jetliners entered service in the late 1950s, transcontinental rail networks <strong>had dominated</strong> international passenger travel for half a century.\"</em>",
              "<em>\"The regional carrier <strong>had already phased out</strong> its older turboprop fleet before new carbon regulations took effect.\"</em>"
            ]
          },
          "toeic": {
            "stem": "All international passenger flight manifests must ________ to the border security agency at least thirty minutes prior to departure.",
            "options": [
              {
                "letter": "A",
                "text": "submit"
              },
              {
                "letter": "B",
                "text": "be submitted"
              },
              {
                "letter": "C",
                "text": "been submitted"
              },
              {
                "letter": "D",
                "text": "being submitted"
              }
            ],
            "correctLetter": "B",
            "correctText": "be submitted",
            "analysis": "The modal auxiliary \"must\" requires the passive infinitive \"be + past participle\" (\"be submitted\") because manifests receive the action.",
            "strategy": "Modal passive pattern: modal (must/should/can/will) + be + V3. Verify whether the subject performs or receives the action."
          },
          "resources": [
            {
              "url": "https://www.itf-oecd.org",
              "tag": "01 \u2022 Global Policy",
              "name": "ITF / OECD International Transport Forum",
              "desc": "Access global transport outlook models, carbon abatement pathways, and policy research on infrastructure life-cycle sustainability."
            },
            {
              "url": "https://www.eea.europa.eu/themes/transport",
              "tag": "02 \u2022 Emissions Data",
              "name": "European Environment Agency (EEA) Transport Hub",
              "desc": "Review empirical greenhouse gas inventory datasets comparing passenger-kilometer emissions between rail, road, and commercial aviation."
            },
            {
              "url": "https://uic.org/passenger/highspeed/",
              "tag": "03 \u2022 Rail Infrastructure",
              "name": "UIC International Union of Railways",
              "desc": "Explore technical benchmarks on high-speed rail corridors, signaling modernization (ERTMS), and rail decarbonization strategies."
            },
            {
              "url": "https://www.icao.int/environmental-protection/CORSIA/Pages/default.aspx",
              "tag": "04 \u2022 Aviation Policy",
              "name": "ICAO Environmental Protection & CORSIA",
              "desc": "Official International Civil Aviation Organization framework governing aviation emissions standards, CORSIA, and SAF targets."
            },
            {
              "url": "https://ourworldindata.org/co2-emissions-from-transport",
              "tag": "05 \u2022 Interactive Data",
              "name": "Our World in Data: Transport Emissions",
              "desc": "Interactive charts illustrating the historical evolution of mobility emissions and per-capita travel carbon intensity since 1950."
            },
            {
              "url": "https://www.etsglobal.org/fr/fr",
              "tag": "06 \u2022 Exam Prep",
              "name": "Official ETS TOEIC Practice Hub",
              "desc": "Practice timed workplace transport reading comprehension, corporate travel memos, and correlative inversion sentence completions."
            }
          ],
          "pageUrl": "session2/admat1.html",
          "articles": [
            {
              "topic": "Modal Shift &amp; Rail Policy",
              "sourceTag": "Industry Press",
              "heading": "The European Rail Revival: Banning Short-Haul Domestic Flights Where Rail Alternatives Exist",
              "snippet": "European policymakers have implemented statutory restrictions on domestic short-haul flights connecting cities with high-speed rail links under 2.5 hours. Explore how airlines are restructuring their feeder networks, forming intermodal partnerships, and auditing corporate travel emissions.",
              "readTime": "Estimated read: 5 mins",
              "url": "https://www.railtech.com"
            },
            {
              "topic": "European Commission Policy",
              "sourceTag": "EU Mobility Hub",
              "heading": "Reshaping the European Transport Network: The High-Speed Rail Action Plan",
              "snippet": "Examine the European Commission&#39;s strategic blueprint for expanding cross-border high-speed passenger rail, tripling HSR traffic by 2030, and accelerating the decarbonization of European transport corridors.",
              "readTime": "Estimated read: 4 mins",
              "url": "https://transport.ec.europa.eu/transport-modes/rail/high-speed-rail-plan_en"
            }
          ],
          "toeicQuestions": [
            {
              "stem": "All international passenger flight manifests must ________ to the border security agency at least thirty minutes prior to departure.",
              "options": [
                {
                  "letter": "A",
                  "text": "submit"
                },
                {
                  "letter": "B",
                  "text": "be submitted"
                },
                {
                  "letter": "C",
                  "text": "been submitted"
                },
                {
                  "letter": "D",
                  "text": "being submitted"
                }
              ],
              "correctLetter": "B",
              "correctText": "be submitted",
              "analysis": "The modal auxiliary \"must\" requires the passive infinitive \"be + past participle\" (\"be submitted\") because manifests receive the action.",
              "strategy": "Modal passive pattern: modal (must/should/can/will) + be + V3. Verify whether the subject performs or receives the action."
            },
            {
              "stem": "High-speed rail track inspections are ________ conducted by certified technicians every four thousand kilometers of service.",
              "options": [
                {
                  "letter": "A",
                  "text": "routine"
                },
                {
                  "letter": "B",
                  "text": "routinely"
                },
                {
                  "letter": "C",
                  "text": "routinize"
                },
                {
                  "letter": "D",
                  "text": "routineness"
                }
              ],
              "correctLetter": "B",
              "correctText": "routinely",
              "analysis": "The space between the auxiliary \"are\" and the past participle \"conducted\" requires an adverb (\"routinely\") to modify the verb.",
              "strategy": "Classic TOEIC Part 5 structure: [Be-verb] + [ADVERB] + [Past Participle]. Look for words ending in -ly to fill the middle gap."
            },
            {
              "stem": "The trans-European rail freight corridor was ________ by the European Infrastructure Bank to encourage modal shift away from highway trucking.",
              "options": [
                {
                  "letter": "A",
                  "text": "financial"
                },
                {
                  "letter": "B",
                  "text": "finances"
                },
                {
                  "letter": "C",
                  "text": "financed"
                },
                {
                  "letter": "D",
                  "text": "financing"
                }
              ],
              "correctLetter": "C",
              "correctText": "financed",
              "analysis": "Passive construction with \"was\" followed by the agent \"by the European Infrastructure Bank\" requires the past participle \"financed\".",
              "strategy": "When you see was/were followed later by \"by [agent]\", choose the past participle (V3)."
            },
            {
              "stem": "Passengers are ________ that carry-on luggage dimensions strictly conform to cabin storage restrictions.",
              "options": [
                {
                  "letter": "A",
                  "text": "are reminded"
                },
                {
                  "letter": "B",
                  "text": "reminded"
                },
                {
                  "letter": "C",
                  "text": "reminding"
                },
                {
                  "letter": "D",
                  "text": "have reminded"
                }
              ],
              "correctLetter": "B",
              "correctText": "reminded",
              "analysis": "\"Passengers are [V3] that...\" requires the passive past participle \"reminded\".",
              "strategy": "Watch out for repeated auxiliary verbs in options. Since \"are\" already appears in the sentence stem, only \"reminded\" is grammatically sound."
            },
            {
              "stem": "New zero-emission electric shuttle buses ________ at Toulouse-Blagnac Airport early next quarter.",
              "options": [
                {
                  "letter": "A",
                  "text": "will introduce"
                },
                {
                  "letter": "B",
                  "text": "will be introduced"
                },
                {
                  "letter": "C",
                  "text": "were introduced"
                },
                {
                  "letter": "D",
                  "text": "have introduced"
                }
              ],
              "correctLetter": "B",
              "correctText": "will be introduced",
              "analysis": "The time clue \"next quarter\" indicates future, and buses receive the action, requiring future passive: will be + past participle.",
              "strategy": "Check both tense clue (next quarter = future) and voice (buses are introduced, they do not introduce themselves)."
            }
          ]
        }
      },
      "3": {
        "session": 3,
        "objectives": {
          "title": "Session 3 - Overtourism Objectives",
          "summary": "By the end of this session, you will be able to discuss mass tourism challenges with confidence, explain city regulations clearly, balance opposing viewpoints using contrast words, and take part in group debates.",
          "items": [
            {
              "num": 1,
              "title": "Use Key Overtourism Terms (Vocabulary)",
              "description": "Accurately use essential terms related to mass tourism (tourist tax, visitor limits, de-marketing, water shortages) in speaking and writing."
            },
            {
              "num": 2,
              "title": "Describe Tourism Challenges in Your Own Words (Fluency & Paraphrasing)",
              "description": "Explain tourism problems clearly under time pressure using synonyms, examples, and descriptions when you cannot recall an exact word."
            },
            {
              "num": 3,
              "title": "Explain City Rules (Grammar: have / make / get)",
              "description": "Use structures like \"The city had the cruise terminal moved\" or \"Officials made operators adjust schedules\" to explain municipal regulations."
            },
            {
              "num": 4,
              "title": "Balance Two Sides of an Argument (Grammar: despite / in spite of)",
              "description": "Construct clear sentences that balance economic benefits with environmental protection using contrast words like despite and in spite of."
            },
            {
              "num": 5,
              "title": "Pronounce Long Tourism Words Clearly (Pronunciation)",
              "description": "Place stress on the correct syllable and pronounce vowel sounds clearly in key policy words (reg-u-la-to-ry, sat-u-ra-tion, sus-tain-a-ble, ca-pa-ci-ty)."
            },
            {
              "num": 6,
              "title": "Defend Stakeholder Solutions in a Group Debate (Fluency & Interaction)",
              "description": "Participate in a role-play discussion balancing local jobs with destination protection, defending your point of view and responding to opposing opinions smoothly."
            },
            {
              "num": 7,
              "title": "Spot Common Grammar Traps in Business Contexts (TOEIC Practice)",
              "description": "Identify common test traps and wrong answer choices (especially causative verbs and contrast words) in TOEIC Parts 5 & 6, and log your mistakes to improve your score."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 3 Lesson Plan (2 Hours)",
          "summary": "A 2-hour session exploring visitor limits for popular destinations, city regulations against overcrowding, grammar for contrast and rules, TOEIC practice, and a group debate on sustainable island tourism.",
          "items": [
            {
              "time": "0-15",
              "title": "Part 1: Warm-Up Discussion \u2014 How Crowded Is Too Crowded? (15 mins)",
              "description": "Compare visitor numbers with local populations in famous destinations (Venice, Dubrovnik, Maya Bay) to identify when crowding harms everyday life and natural sites."
            },
            {
              "time": "15-40",
              "title": "Part 2: Case Study & Pitch \u2014 New City Tourism Rules (25 mins)",
              "description": "Teams choose and pitch a municipal policy to the mayor (Venice entry fee, cruise ship bans, or campaigns discouraging rowdy crowds), anticipating business criticisms and delivering counterarguments."
            },
            {
              "time": "40-60",
              "title": "Part 3: Grammar in Context \u2014 Causatives & Contrast Words (20 mins)",
              "description": "Structuring formal municipal rules using structures like have/make/get someone do something, and contrasting benefits with local impacts using words like despite and in spite of."
            },
            {
              "time": "60-80",
              "title": "Part 4: TOEIC Practice & Error Logging \u2014 Parts 5 & 6 (20 mins)",
              "description": "Timed practice on incomplete sentences and text completion regarding tourism management; analyzing common wrong answer choices and updating the study log."
            },
            {
              "time": "80-95",
              "title": "Part 5: DDRS Case Discussion \u2014 Setting Limits for Sustainable Tourism: Isla Serena (15 mins)",
              "description": "4-role simulation resolving an acute summer water crisis (320% surge) vs. airport runway expansion. Roles: Town Mayor, Hotel Association President, Organic Farmer, Environmental Regulator. Teams agree on a 3-point policy resolution."
            },
            {
              "time": "95-110",
              "title": "Part 6: Vocabulary Speaking Game \u2014 Taboo (15 mins)",
              "description": "Fast-paced fluency challenge where students describe key concepts without saying forbidden words: tourist tax, overcrowding, de-marketing, seasonal limits, and cruise ship ban."
            },
            {
              "time": "110-120",
              "title": "Part 7: Class Wrap-Up & Portfolio Check (10 mins)",
              "description": "Continuous assessment entry, personal study goals, and FE portfolio review."
            }
          ]
        },
        "revision": {
          "title": "Session 3: Overtourism",
          "summary": "Review the 18 key terms for Overtourism to build your fluency in discussions, professional reading, and TOEIC practice.",
          "terms": [
            {
              "num": "01",
              "term": "Carrying Capacity",
              "definition": "The maximum number of visitors an area or historic city can welcome without damaging nature, local culture, or public infrastructure."
            },
            {
              "num": "02",
              "term": "Overtourism",
              "definition": "Excessive tourist numbers resulting in environmental harm, resident displacement, and diminished visitor experiences."
            },
            {
              "num": "03",
              "term": "Visitor Dispersal",
              "definition": "Encouraging tourists to visit less crowded areas or travel during off-peak seasons to spread economic benefits and avoid crowding."
            },
            {
              "num": "04",
              "term": "Tourist Tax",
              "definition": "A municipal levy assessed on overnight lodging or day visitors to fund public infrastructure and sanitation."
            },
            {
              "num": "05",
              "term": "De-Marketing",
              "definition": "Campaigns that discourage too many tourists or target respectful travelers instead of rowdy party crowds (e.g. Amsterdam's \"Stay Away\" campaign)."
            },
            {
              "num": "06",
              "term": "Resident Displacement",
              "definition": "The pricing out of long-term local residents caused by short-term vacation rental conversions."
            },
            {
              "num": "07",
              "term": "Heritage Conservation",
              "definition": "The scientific and policy preservation of historical monuments and archaeological sites against tourist wear."
            },
            {
              "num": "08",
              "term": "Advance Reservation",
              "definition": "A mandatory timed-entry booking system used by museums and national parks to control hourly crowd density."
            },
            {
              "num": "09",
              "term": "Cruise Ship Ceiling",
              "definition": "A statutory limit placed on the number of large cruise vessels allowed to berth at a port daily."
            },
            {
              "num": "10",
              "term": "Seasonal Compression",
              "definition": "The high concentration of visitor traffic into a brief summer or holiday window, straining local resources."
            },
            {
              "num": "11",
              "term": "Spatial Saturation",
              "definition": "Severe physical overcrowding where visitor numbers overwhelm streets, historic sites, and public amenities."
            },
            {
              "num": "12",
              "term": "Community Stewardship",
              "definition": "Local resident participation in formulating municipal tourism guidelines and revenue allocations."
            },
            {
              "num": "13",
              "term": "Dynamic Pricing",
              "definition": "Fluctuating ticket tariffs calibrated to demand to incentivize off-peak visiting hours."
            },
            {
              "num": "14",
              "term": "Infrastructure Strain",
              "definition": "The overwhelming of sewage, potable water, waste collection, and electrical grids during high season."
            },
            {
              "num": "15",
              "term": "Short-Term Vacation Rental (STVR)",
              "definition": "Furnished residential apartments rented to tourists on a nightly basis through digital booking platforms."
            },
            {
              "num": "16",
              "term": "Authenticity Erosion",
              "definition": "The transformation of genuine residential neighborhoods into commercialized souvenir corridors."
            },
            {
              "num": "17",
              "term": "Zoning Ordinance",
              "definition": "Municipal legal statutes establishing where commercial hospitality establishments may legally operate."
            },
            {
              "num": "18",
              "term": "Aquifer Depletion",
              "definition": "The severe loss of underground freshwater reserves caused by summer tourism demand and resort overuse."
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: Managing Overtourism",
              "watchUrl": "https://www.youtube.com/watch?v=8yJ3O_9zLCA",
              "tag": "Policy",
              "videoId": "8yJ3O_9zLCA",
              "embedUrl": "https://www.youtube-nocookie.com/embed/8yJ3O_9zLCA",
              "caption": "Focus: How European destinations like Barcelona and Amsterdam enforce tourist caps, short-term rental bans, and visitor controls."
            },
            {
              "title": "Video 2: Carrying Capacity & Balance",
              "watchUrl": "https://www.youtube.com/watch?v=l1WJsGNqoeo",
              "tag": "Environment",
              "videoId": "l1WJsGNqoeo",
              "embedUrl": "https://www.youtube-nocookie.com/embed/l1WJsGNqoeo",
              "caption": "Focus: Measuring ecological carrying capacity, visitor dispersal strategies, and infrastructure limits across popular tourist hotspots."
            },
            {
              "title": "Video 3: Visitor Fees & Regulation",
              "watchUrl": "https://www.youtube.com/watch?v=tb8dz6Rr0Vk",
              "tag": "Policy Action",
              "videoId": "tb8dz6Rr0Vk",
              "embedUrl": "https://www.youtube-nocookie.com/embed/tb8dz6Rr0Vk",
              "caption": "Focus: Examine municipal access ticket systems, entry gate turnstiles, and legal strategies to manage peak day-tripper visitor flows."
            }
          ],
          "grammar": {
            "title": "Modal Verbs & Meanings",
            "badge": "B1\u2013B2 Grammar Focus",
            "patternTitle": "The Golden Rule",
            "formula": "Subject + Modal (must / should / can / may) + Base Verb (V1 without \"to\")",
            "rulesTitle": "Core Meanings",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. Obligation &amp; Rules (Must / Have to):</strong> Something is mandatory by law or safety regulation (*\"Carriers <strong>must submit</strong> their manifests\"*).",
              "<strong style=\"color: #1e293b;\">2. Advice &amp; Recommendations (Should / Ought to):</strong> Suggesting the best thing to do (*\"Authorities <strong>should encourage</strong> off-peak travel\"*).",
              "<strong style=\"color: #1e293b;\">3. Permission &amp; Bans (May / Must not):</strong> <em>May</em> means you are allowed to; <em>must not</em> means something is strictly forbidden.",
              "<strong style=\"color: #1e293b;\">4. Possibility &amp; Ability (Can / Could / Might):</strong> Stating what is possible or capable of happening."
            ],
            "trap": "<strong>\u26a0\ufe0f The #1 Modal Rule in TOEIC:</strong> A modal verb (<em>must, should, can, could, will, would, may, might</em>) is <strong>always</strong> followed by the simple <strong>base verb</strong> (V1) with NO <em>-s</em>, NO <em>-ing</em>, NO <em>-ed</em>, and NO <em>to</em> (e.g., <em>must submit</em>, never <em>must to submit</em> or <em>must submitting</em>)!",
            "examplesTitle": "Carrying Capacity Examples",
            "examples": [
              "<em>\"To protect fragile canal banks, maritime authorities <strong>must regulate</strong> daily cruise disembarkation tallies.\"</em>",
              "<em>\"Regional transit boards <strong>should promote</strong> off-peak rail incentives to disperse peak crowd density.\"</em>"
            ]
          },
          "toeic": {
            "stem": "Due to severe visitor overcrowding in historic quarters, city officials ________ impose strict daily tourist caps next season.",
            "options": [
              {
                "letter": "A",
                "text": "must"
              },
              {
                "letter": "B",
                "text": "had to"
              },
              {
                "letter": "C",
                "text": "should have"
              },
              {
                "letter": "D",
                "text": "were able to"
              }
            ],
            "correctLetter": "A",
            "correctText": "must",
            "analysis": "The modal \"must\" expresses necessary future action, fitting the time marker \"next season\". \"Had to\" and \"should have\" are past forms.",
            "strategy": "Match modal tense with time clues: \"next season\" requires a present/future modal (must, will have to), never a past modal form."
          },
          "resources": [
            {
              "url": "https://www.unwto.org/sustainable-development",
              "tag": "01 \u2022 Global Policy",
              "name": "UN Tourism (UNWTO)",
              "desc": "United Nations agency dedicated to responsible, sustainable, and accessible tourism."
            },
            {
              "url": "https://www.gstcouncil.org",
              "tag": "02 \u2022 Destination Standards",
              "name": "GSTC Global Criteria",
              "desc": "Global Sustainable Tourism Council baseline standards for destinations."
            },
            {
              "url": "https://cda.ve.it",
              "tag": "03 \u2022 Ecological Impact",
              "name": "EEA Tourism & Nature",
              "desc": "European Environment Agency briefs on tourism pressures on biodiversity."
            },
            {
              "url": "https://cda.ve.it",
              "tag": "04 \u2022 Municipal Access Portal",
              "name": "Venice Access Fee Official",
              "desc": "Municipal overview of city access regulations and reservation mechanics."
            },
            {
              "url": "https://ourworldindata.org/tourism",
              "tag": "05 \u2022 Data & Trends",
              "name": "Our World in Data",
              "desc": "Global trends in international arrivals, travel expenditure, and tourism growth."
            },
            {
              "url": "https://www.etsglobal.org/fr/fr",
              "tag": "06 \u2022 TOEIC Reading",
              "name": "ETS Global TOEIC",
              "desc": "Advanced reading strategies for regulatory announcements and policy documents."
            }
          ],
          "pageUrl": "session3/admat1.html",
          "articles": [
            {
              "topic": "UN Tourism Policy Brief",
              "sourceTag": "Industry Analysis",
              "heading": "Carrying Capacity Indicators in European Heritage Centers",
              "snippet": "A comparative framework analyzing visitor ratios, local resident sentiment, and infrastructure strain.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://www.unwto.org/sustainable-development"
            },
            {
              "topic": "Journal of Sustainable Tourism",
              "sourceTag": "Industry Analysis",
              "heading": "The Economics of Tourist Taxation &amp; Crowd Dispersal",
              "snippet": "Evaluating whether dynamic pricing diverts crowds or merely generates municipal revenue.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://cda.ve.it"
            }
          ],
          "toeicQuestions": [
            {
              "stem": "Due to severe visitor overcrowding in historic quarters, city officials ________ impose strict daily tourist caps next season.",
              "options": [
                {
                  "letter": "A",
                  "text": "must"
                },
                {
                  "letter": "B",
                  "text": "had to"
                },
                {
                  "letter": "C",
                  "text": "should have"
                },
                {
                  "letter": "D",
                  "text": "were able to"
                }
              ],
              "correctLetter": "A",
              "correctText": "must",
              "analysis": "The modal \"must\" expresses necessary future action, fitting the time marker \"next season\". \"Had to\" and \"should have\" are past forms.",
              "strategy": "Match modal tense with time clues: \"next season\" requires a present/future modal (must, will have to), never a past modal form."
            },
            {
              "stem": "Venice dynamic access fee ________ collected directly through accommodation bookings rather than physical turnstiles.",
              "options": [
                {
                  "letter": "A",
                  "text": "ought to be"
                },
                {
                  "letter": "B",
                  "text": "ought be"
                },
                {
                  "letter": "C",
                  "text": "ought to being"
                },
                {
                  "letter": "D",
                  "text": "ought"
                }
              ],
              "correctLetter": "A",
              "correctText": "ought to be",
              "analysis": "\"Ought\" must always be followed by \"to\" plus the base form. In passive voice: \"ought to be + V3\".",
              "strategy": "\"Ought\" always takes \"to\". Never choose \"ought + base verb\" without \"to\"."
            },
            {
              "stem": "If fragile historical landmarks sustain further erosion, local authorities ________ reduce daily admission quotas even further.",
              "options": [
                {
                  "letter": "A",
                  "text": "could"
                },
                {
                  "letter": "B",
                  "text": "had"
                },
                {
                  "letter": "C",
                  "text": "would have been"
                },
                {
                  "letter": "D",
                  "text": "were"
                }
              ],
              "correctLetter": "A",
              "correctText": "could",
              "analysis": "In a real/possible conditional (First Conditional), the modal \"could\" expresses future consequence/possibility in the main clause.",
              "strategy": "In If-clauses with Present Simple (\"sustain\"), the main clause takes will/can/could/may + base verb."
            },
            {
              "stem": "There were significantly ________ international tourists visiting the alpine valley following the introduction of mandatory transit permits.",
              "options": [
                {
                  "letter": "A",
                  "text": "fewer"
                },
                {
                  "letter": "B",
                  "text": "less"
                },
                {
                  "letter": "C",
                  "text": "least"
                },
                {
                  "letter": "D",
                  "text": "little"
                }
              ],
              "correctLetter": "A",
              "correctText": "fewer",
              "analysis": "\"Tourists\" is a countable plural noun. Use \"fewer\" with countable nouns and \"less\" with uncountable nouns.",
              "strategy": "Rule: Countable nouns (tourists, flights, tickets) take \"fewer\"; uncountable nouns (traffic, luggage, fuel) take \"less\"."
            },
            {
              "stem": "The municipal council ________ introduced stricter short-term rental limits years ago before the housing shortage escalated.",
              "options": [
                {
                  "letter": "A",
                  "text": "must"
                },
                {
                  "letter": "B",
                  "text": "should have"
                },
                {
                  "letter": "C",
                  "text": "can"
                },
                {
                  "letter": "D",
                  "text": "might"
                }
              ],
              "correctLetter": "B",
              "correctText": "should have",
              "analysis": "\"Should have + past participle\" expresses regret or a recommendation that was not followed in the past.",
              "strategy": "When a sentence expresses past criticism or missed opportunity (\"years ago before...\"), look for should have + V3."
            }
          ]
        }
      },
      "4": {
        "session": 4,
        "objectives": {
          "title": "Session 4 - Ecotourism & Sustainable Destination Design Objectives",
          "summary": "By the end of this session, you will be able to distinguish authentic ecotourism from greenwashing, structure mixed conditional sentences, apply formal connectors of purpose and condition, and pitch a sustainable destination design.",
          "items": [
            {
              "num": 1,
              "title": "Use Key Ecotourism Terms (Vocabulary)",
              "description": "Accurately define and use essential sustainability concepts (carbon offset, biodiversity corridor, community-based tourism, greenwashing, rewilding) in spoken pitches and written notes."
            },
            {
              "num": 2,
              "title": "Describe Ecotourism Projects (Fluency & Paraphrasing)",
              "description": "Explain environmental initiatives clearly under time pressure using synonyms, examples, and descriptions when you cannot recall an exact word."
            },
            {
              "num": 3,
              "title": "Talk About Past Choices & Present Results (Mixed Conditionals)",
              "description": "Use mixed conditional sentences (\"If the reserve had invested in solar pumps earlier, it would not depend on diesel today\") to evaluate past environmental choices."
            },
            {
              "num": 4,
              "title": "Express Goals and Conditions (Grammar: so that, provided that)",
              "description": "Use formal connecting words like provided that, so as to, and in order that to set project rules and environmental targets."
            },
            {
              "num": 5,
              "title": "Pronounce Long Environmental Words Clearly (Pronunciation)",
              "description": "Place word stress on the correct syllable and pronounce vowel sounds clearly in key sustainability words (bio-di-VER-si-ty, cer-ti-fi-CA-tion, al-TER-na-tive, eco-SYS-tem)."
            },
            {
              "num": 6,
              "title": "Pitch and Defend an Ecotourism Initiative in Pairs or Triads (Fluency & Interaction)",
              "description": "Research live data, design a viable micro-project, and present a structured pitch balancing commercial viability with conservation needs."
            },
            {
              "num": 7,
              "title": "Spot Common Grammar Traps in Business Contexts (TOEIC Practice)",
              "description": "Identify common test traps and wrong answer choices (specifically conditional sentences and connecting words) in TOEIC Parts 5 & 6 to improve exam accuracy."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 4 Lesson Plan (2 Hours)",
          "summary": "A 2-hour interactive session comparing genuine ecotourism with greenwashing, practicing mixed conditionals and connectors, solving TOEIC reading questions, and designing a sustainable eco-resort.",
          "items": [
            {
              "time": "0-15",
              "title": "Part 1: Warm-Up Discussion \u2014 Real Eco-Tourism vs. Greenwashing (15 mins)",
              "description": "Examine three real-world travel projects (in Costa Rica, Kenya, and Norway) to see how much money stays in the local community and the real environmental benefits created, compared to superficial marketing."
            },
            {
              "time": "15-35",
              "title": "Part 2: Grammar in Context \u2014 Mixed Conditionals & Connecting Words (20 mins)",
              "description": "Contrasting past conservation decisions with present outcomes (If + had + V3, would + V1), present status with past outcomes (If + were, would have + V3), and formal connecting words for goals and rules (so as to, in order that, provided that, on condition that)."
            },
            {
              "time": "35-55",
              "title": "Part 3: TOEIC Practice & Error Logging \u2014 Parts 5 & 6 (20 mins)",
              "description": "Timed reading set on sustainable tourism certification notices; practicing conditional sentences, connecting words, and logging errors."
            },
            {
              "time": "55-85",
              "title": "Part 4: Collaborative Project Workshop \u2014 The Eco-Resort Blueprint (30 mins)",
              "description": "Internet-enabled team challenge with a \u20ac2,500,000 green endowment. Teams choose a fragile ecosystem (temperate fjord, Mediterranean wetland, or alpine valley) and design a low-impact, community-owned resort integrating target grammar."
            },
            {
              "time": "85-100",
              "title": "Part 5: Project Pitches & Stakeholder Q&A \u2014 The Green Investor Forum (15 mins)",
              "description": "2-minute pitches where peer groups act as the Sustainability Investment Board, asking teams about visitor limits, clean energy, local community benefits, and connecting words."
            },
            {
              "time": "100-110",
              "title": "Part 6: Vocabulary Speaking Game \u2014 Taboo (10 mins)",
              "description": "Fast-paced 45-second fluency game reinforcing critical sustainable tourism vocabulary: Greenwashing, Biodiversity Corridor, Community-Based Tourism, Carbon Offset, and Rewilding."
            },
            {
              "time": "110-120",
              "title": "Part 7: Class Wrap-Up & FE Check (10 mins)",
              "description": "Continuous assessment log, reviewing genuine ecotourism vs. greenwashing, applying grammar to the FE portfolio, and final preparation for Session 5."
            }
          ]
        },
        "revision": {
          "title": "Session 4: Sustainable and Eco-tourism",
          "summary": "Review the 18 key terms for Sustainable and Eco-tourism to build your fluency in discussions, professional reading, and TOEIC practice.",
          "terms": [
            {
              "num": "01",
              "term": "Eco-Certification",
              "definition": "A third-party seal verifying that a tourism enterprise complies with rigorous environmental standards."
            },
            {
              "num": "02",
              "term": "Greenwashing",
              "definition": "Misleading marketing that portrays products or travel practices as environmentally friendly without empirical proof."
            },
            {
              "num": "03",
              "term": "Carbon Offsetting",
              "definition": "Compensating for carbon emissions through financial investment in certified re-forestation or clean energy projects."
            },
            {
              "num": "04",
              "term": "Zero-Waste Travel",
              "definition": "A travel methodology prioritizing reusable gear, local organic food, and composting to eliminate single-use waste."
            },
            {
              "num": "05",
              "term": "Community-Based Tourism (CBT)",
              "definition": "Tourism where local communities manage operations and receive direct economic proceeds."
            },
            {
              "num": "06",
              "term": "Biodiversity Conservation",
              "definition": "Protecting endangered fauna, flora, and native habitats from tourist disruption."
            },
            {
              "num": "07",
              "term": "Low-Impact Hospitality",
              "definition": "Accommodations designed with passive solar cooling, rainwater harvesting, and non-toxic materials."
            },
            {
              "num": "08",
              "term": "Biodiversity Corridor",
              "definition": "A protected natural strip connecting separated wildlife habitats to allow safe migration across tourist areas."
            },
            {
              "num": "09",
              "term": "Slow Travel",
              "definition": "A travel ethos emphasizing longer stays, surface transit, and deep cultural immersion over hurried flights."
            },
            {
              "num": "10",
              "term": "Regenerative Tourism",
              "definition": "Travel practices designed to actively improve and restore local ecosystems rather than merely minimizing harm."
            },
            {
              "num": "11",
              "term": "Measurable Eco-Benefit (Additionality)",
              "definition": "A real, measurable environmental improvement created by a conservation project that would not have happened on its own."
            },
            {
              "num": "12",
              "term": "Carbon-Neutral Itinerary",
              "definition": "A holiday schedule where all transit, food, and accommodation emissions have been eliminated or verified offset."
            },
            {
              "num": "13",
              "term": "Native Habitat Restoration",
              "definition": "Ecological work rehabilitating damaged terrain to re-establish indigenous flora and wildlife corridors."
            },
            {
              "num": "14",
              "term": "Leave No Trace (LNT)",
              "definition": "A set of seven universal outdoor ethics promoting minimal impact in wilderness exploration."
            },
            {
              "num": "15",
              "term": "Fair Trade Tourism",
              "definition": "Certification ensuring fair wages, safe labor conditions, and ethical treatment across tourism supply chains."
            },
            {
              "num": "16",
              "term": "Renewable Powered Transit",
              "definition": "Travel systems propelled exclusively by certified solar, wind, or hydro-electric generation."
            },
            {
              "num": "17",
              "term": "Rewilding",
              "definition": "Restoring natural wilderness ecosystems and re-introducing native species, often funded by low-impact tourism."
            },
            {
              "num": "18",
              "term": "Sustainable Development Goals (SDGs)",
              "definition": "The 17 United Nations global benchmarks guiding responsible tourism, poverty reduction, and climate action."
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: What is Ecotourism?",
              "watchUrl": "https://www.youtube.com/watch?v=HVaXhEw0dJQ",
              "tag": "DDRS",
              "videoId": "HVaXhEw0dJQ",
              "embedUrl": "https://www.youtube-nocookie.com/embed/HVaXhEw0dJQ",
              "caption": "Focus: Understanding ecotourism core pillars, environmental audits, and distinguishing genuine sustainability from greenwashing."
            },
            {
              "title": "Video 2: Community Tourism",
              "watchUrl": "https://www.youtube.com/watch?v=c4HPeylJ_3s",
              "tag": "Case Study",
              "videoId": "c4HPeylJ_3s",
              "embedUrl": "https://www.youtube-nocookie.com/embed/c4HPeylJ_3s",
              "caption": "Focus: Principles of community empowerment, local revenue distribution, and low-impact sustainable tourism models."
            },
            {
              "title": "Video 3: Carbon Offsets",
              "watchUrl": "https://www.youtube.com/watch?v=xh3Tvrr_6UM",
              "tag": "Analysis",
              "videoId": "xh3Tvrr_6UM",
              "embedUrl": "https://www.youtube-nocookie.com/embed/xh3Tvrr_6UM",
              "caption": "Focus: Critical business evaluation of carbon offsets, additionality hurdles, and authentic net-zero corporate travel strategies."
            }
          ],
          "grammar": {
            "title": "AT, IN, and ON for Places",
            "badge": "B1\u2013B2 Grammar Focus",
            "patternTitle": "The Three Place Prepositions",
            "formula": "AT (Point / Desk) \u2022 IN (Enclosed Room / City) \u2022 ON (Surface / Floor / Line)",
            "rulesTitle": "Core Rules",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. AT (Specific Points &amp; Desks):</strong> Exact service counters, meeting points, and transit stops (<span style=\"font-weight: 700; color: #c0684f;\">at the desk</span>, <span style=\"font-weight: 700; color: #c0684f;\">at the solar charging hub</span>, <span style=\"font-weight: 700; color: #c0684f;\">at the gate</span>).",
              "<strong style=\"color: #1e293b;\">2. IN (Enclosed Spaces &amp; Areas):</strong> Rooms, buildings, cities, and regions (<span style=\"font-weight: 700; color: #c0684f;\">in the terminal</span>, <span style=\"font-weight: 700; color: #c0684f;\">in the national park</span>, <span style=\"font-weight: 700; color: #c0684f;\">in Copenhagen</span>).",
              "<strong style=\"color: #1e293b;\">3. ON (Surfaces, Floors &amp; Public Transport):</strong> Flat surfaces, specific floors, and public transit (<span style=\"font-weight: 600; color: #334155;\">on the roof</span>, <span style=\"font-weight: 600; color: #334155;\">on the second floor</span>, <span style=\"font-weight: 600; color: #334155;\">on the train</span>).",
              "<strong style=\"color: #1e293b;\">4. Relational Words:</strong> <span style=\"font-weight: 600; color: #334155;\">next to</span> / <span style=\"font-weight: 600; color: #334155;\">adjacent to</span> (beside), <span style=\"font-weight: 600; color: #334155;\">between</span> (between two points), and <span style=\"font-weight: 600; color: #334155;\">throughout</span> (all across an area)."
            ],
            "trap": "<strong>\u26a0\ufe0f TOEIC Trap Alert:</strong> Watch out for movement words! Static places use <em>at</em>, <em>in</em>, or <em>on</em>. Movement uses <em>to</em>, <em>into</em>, <em>onto</em>, or <em>toward</em>. If the action is stationary (e.g., <em>purchase</em>, <em>wait</em>, <em>meet</em>, <em>sit</em>), do not choose movement words!",
            "examplesTitle": "Green Tourism & Transit Examples",
            "examples": [
              "<em>\"Visitors can collect reusable guidebooks <strong>at</strong> the eco-tourism kiosk located in the primary lobby.\"</em>",
              "<em>\"Electric shuttle buses run continuously <strong>between</strong> the high-speed rail terminus and the regional biosphere reserve.\"</em>"
            ]
          },
          "toeic": {
            "stem": "If large corporations ________ corporate business travel by twenty percent, their overall carbon footprint would decline noticeably.",
            "options": [
              {
                "letter": "A",
                "text": "reduce"
              },
              {
                "letter": "B",
                "text": "reduced"
              },
              {
                "letter": "C",
                "text": "will reduce"
              },
              {
                "letter": "D",
                "text": "have reduced"
              }
            ],
            "correctLetter": "B",
            "correctText": "reduced",
            "analysis": "Second conditional: If + Past Simple in the condition, would + base verb in the result (\"would decline\").",
            "strategy": "Second conditional formula: If + [Past Simple] ..., [would/could/might + base verb]. Spot \"would decline\" to pick \"reduced\"."
          },
          "resources": [
            {
              "url": "https://www.gstcouncil.org",
              "tag": "01 \u2022 Global Accreditation",
              "name": "Global Sustainable Tourism Council",
              "desc": "Authoritative international standards for sustainable travel and ecotourism."
            },
            {
              "url": "https://www.greenkey.global",
              "tag": "02 \u2022 Hospitality Eco-Label",
              "name": "Green Key International",
              "desc": "Leading international eco-label award for accommodations and hospitality."
            },
            {
              "url": "https://www.eea.europa.eu",
              "tag": "03 \u2022 Environmental Audits",
              "name": "EEA Environmental Management",
              "desc": "European guidance on corporate environmental auditing and EMAS compliance."
            },
            {
              "url": "https://www.unwto.org",
              "tag": "04 \u2022 Climate Action",
              "name": "UN Tourism Decarbonization",
              "desc": "Glasgow Declaration on Climate Action in Tourism frameworks and commitments."
            },
            {
              "url": "https://ourworldindata.org",
              "tag": "05 \u2022 Transport Intensity",
              "name": "Our World in Data",
              "desc": "Comparative data on transportation carbon intensity per passenger-kilometer."
            },
            {
              "url": "https://www.etsglobal.org/fr/fr",
              "tag": "06 \u2022 Evaluation Rubrics",
              "name": "ETS Global TOEIC",
              "desc": "Official TOEIC Speaking & Writing evaluation benchmarks and sample responses."
            }
          ],
          "pageUrl": "session4/admat1.html",
          "articles": [
            {
              "topic": "Harvard Business Review",
              "sourceTag": "Industry Analysis",
              "heading": "Auditing Corporate Travel: The Scope 3 Emissions Challenge",
              "snippet": "How international corporations measure and reduce business travel emissions through clear guidelines.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://hbr.org"
            },
            {
              "topic": "Stanford Social Innovation Review",
              "sourceTag": "Industry Analysis",
              "heading": "The Rise of Regenerative Tourism",
              "snippet": "Shifting the paradigm from &#x27;leaving no trace&#x27; to actively restoring degraded ecosystems and supporting communities.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://ssir.org"
            }
          ],
          "toeicQuestions": [
            {
              "stem": "If large corporations ________ corporate business travel by twenty percent, their overall carbon footprint would decline noticeably.",
              "options": [
                {
                  "letter": "A",
                  "text": "reduce"
                },
                {
                  "letter": "B",
                  "text": "reduced"
                },
                {
                  "letter": "C",
                  "text": "will reduce"
                },
                {
                  "letter": "D",
                  "text": "have reduced"
                }
              ],
              "correctLetter": "B",
              "correctText": "reduced",
              "analysis": "Second conditional: If + Past Simple in the condition, would + base verb in the result (\"would decline\").",
              "strategy": "Second conditional formula: If + [Past Simple] ..., [would/could/might + base verb]. Spot \"would decline\" to pick \"reduced\"."
            },
            {
              "stem": "The corporate travel policy will not authorize business-class flights ________ written justification is submitted by the department vice-president.",
              "options": [
                {
                  "letter": "A",
                  "text": "unless"
                },
                {
                  "letter": "B",
                  "text": "without"
                },
                {
                  "letter": "C",
                  "text": "despite"
                },
                {
                  "letter": "D",
                  "text": "although"
                }
              ],
              "correctLetter": "A",
              "correctText": "unless",
              "analysis": "\"Unless\" is a conjunction meaning \"if not\", introducing the conditional clause with a subject and verb (\"written justification is submitted\").",
              "strategy": "\"Unless\" introduces a full clause (subject + verb); \"without\" and \"despite\" are prepositions and must be followed only by a noun/gerund."
            },
            {
              "stem": "Provided that regional trains ________ punctual and affordable, corporate travelers will choose rail over domestic flights.",
              "options": [
                {
                  "letter": "A",
                  "text": "remain"
                },
                {
                  "letter": "B",
                  "text": "remained"
                },
                {
                  "letter": "C",
                  "text": "will remain"
                },
                {
                  "letter": "D",
                  "text": "have remained"
                }
              ],
              "correctLetter": "A",
              "correctText": "remain",
              "analysis": "\"Provided that\" functions like \"if\" in a First Conditional, taking the Present Simple (\"remain\") while the main clause uses \"will choose\".",
              "strategy": "Conjunctions of condition (provided that, as long as, if) take the present tense when the main clause has \"will + verb\"."
            },
            {
              "stem": "If the national carrier ________ in sustainable aviation fuel supply chains earlier, it would have met its 2025 decarbonization target.",
              "options": [
                {
                  "letter": "A",
                  "text": "invests"
                },
                {
                  "letter": "B",
                  "text": "invested"
                },
                {
                  "letter": "C",
                  "text": "had invested"
                },
                {
                  "letter": "D",
                  "text": "would invest"
                }
              ],
              "correctLetter": "C",
              "correctText": "had invested",
              "analysis": "Third conditional: If + Past Perfect (\"had invested\"), would have + past participle (\"would have met\").",
              "strategy": "Third conditional formula: If + [had + V3], [would have + V3]. Look at \"would have met\" to immediately identify \"had invested\"."
            },
            {
              "stem": "Corporate sustainability guidelines require employees to calculate transit emissions ________ booking multi-leg international flights.",
              "options": [
                {
                  "letter": "A",
                  "text": "prior to"
                },
                {
                  "letter": "B",
                  "text": "except"
                },
                {
                  "letter": "C",
                  "text": "in spite of"
                },
                {
                  "letter": "D",
                  "text": "since"
                }
              ],
              "correctLetter": "A",
              "correctText": "prior to",
              "analysis": "\"Prior to\" is a compound preposition meaning \"before\", properly taking the gerund \"booking\".",
              "strategy": "\"Prior to\" + gerund (-ing) is a high-frequency business English synonym for \"before\" in TOEIC Part 5."
            }
          ]
        }
      }
    }
  },
  "2": {
    "id": 2,
    "name": "Module 2",
    "title": "Weather & the Environment",
    "ddrs": {
      "title": "D\u00e9veloppement Durable & Responsabilit\u00e9 Soci\u00e9tale : Tags et D\u00e9finitions Officielles",
      "summary": "Le R\u00e9f\u00e9rentiel National DD&RS de l'Enseignement Sup\u00e9rieur et de la Recherche (Label DD&RS) structure les engagements \u00e9cologiques, soci\u00e9taux et \u00e9thiques des \u00e9tablissements et des grands projets de transport selon 5 axes strat\u00e9giques et leurs domaines transversaux d'application.",
      "pageUrl": "ddrs2.html",
      "axes": [
        {
          "badge": "Axe 1",
          "num": "1.",
          "title": "Gouvernance et Strat\u00e9gie",
          "desc": "Int\u00e9gration du d\u00e9veloppement durable dans la vision, le projet d'\u00e9tablissement et le pilotage d\u00e9cisionnel. Dialogue continu avec les parties prenantes (\u00e9tudiants, personnels, collectivit\u00e9s, partenaires), allocation de budgets d\u00e9di\u00e9s et suivi d'indicateurs d'impact mesurables."
        },
        {
          "badge": "Axe 2",
          "num": "2.",
          "title": "Formation et P\u00e9dagogie",
          "desc": "Sensibilisation et formation de 100 % des apprenants aux enjeux de la transition socio-\u00e9cologique (limites plan\u00e9taires, climat, biodiversit\u00e9). Int\u00e9gration transversale des comp\u00e9tences DD&RS (rapport Jouzel / socle MESR) pour pr\u00e9parer les ing\u00e9nieurs \u00e0 la prise de d\u00e9cision \u00e9thique et responsable."
        },
        {
          "badge": "Axe 3",
          "num": "3.",
          "title": "Recherche et Innovation",
          "desc": "Orientation et valorisation de l'activit\u00e9 scientifique et technologique en r\u00e9ponse aux Objectifs de D\u00e9veloppement Durable (ODD). Soutien aux programmes interdisciplinaires, recherche sobre et responsable, \u00e9co-conception et transfert de technologies vertes au service de la soci\u00e9t\u00e9."
        },
        {
          "badge": "Axe 4",
          "num": "4.",
          "title": "Gestion Environnementale",
          "desc": "Ma\u00eetrise et r\u00e9duction continue des impacts \u00e9cologiques directs : d\u00e9carbonation des mobilit\u00e9s pendulaires et professionnelles, efficacit\u00e9 et sobri\u00e9t\u00e9 \u00e9nerg\u00e9tique du patrimoine b\u00e2ti, gestion circulaire des d\u00e9chets, pr\u00e9servation de la biodiversit\u00e9 sur site et achats publics responsables."
        },
        {
          "badge": "Axe 5",
          "num": "5.",
          "title": "Politique Sociale et Inclusion",
          "desc": "Engagement institutionnel pour la responsabilit\u00e9 soci\u00e9tale : \u00e9galit\u00e9 professionnelle femmes-hommes, inclusion et accessibilit\u00e9 des personnes en situation de handicap, \u00e9galit\u00e9 des chances, am\u00e9lioration de la qualit\u00e9 de vie et sant\u00e9 globale, et pr\u00e9vention de toute forme de discrimination."
        }
      ],
      "items": [
        {
          "badge": "Axe 1",
          "num": "1.",
          "title": "Gouvernance et Strat\u00e9gie",
          "desc": "Int\u00e9gration du d\u00e9veloppement durable dans la vision, le projet d'\u00e9tablissement et le pilotage d\u00e9cisionnel. Dialogue continu avec les parties prenantes (\u00e9tudiants, personnels, collectivit\u00e9s, partenaires), allocation de budgets d\u00e9di\u00e9s et suivi d'indicateurs d'impact mesurables.",
          "isMuted": true
        },
        {
          "badge": "Axe 2",
          "num": "2.",
          "title": "Formation et P\u00e9dagogie",
          "desc": "Sensibilisation et formation de 100 % des apprenants aux enjeux de la transition socio-\u00e9cologique (limites plan\u00e9taires, climat, biodiversit\u00e9). Int\u00e9gration transversale des comp\u00e9tences DD&amp;RS (rapport Jouzel / socle MESR) pour pr\u00e9parer les ing\u00e9nieurs \u00e0 la prise de d\u00e9cision \u00e9thique et responsable.",
          "isMuted": false
        },
        {
          "badge": "Axe 3",
          "num": "3.",
          "title": "Recherche et Innovation",
          "desc": "Orientation et valorisation de l'activit\u00e9 scientifique et technologique en r\u00e9ponse aux Objectifs de D\u00e9veloppement Durable (ODD). Soutien aux programmes interdisciplinaires, recherche sobre et responsable, \u00e9co-conception et transfert de technologies vertes au service de la soci\u00e9t\u00e9.",
          "isMuted": false
        },
        {
          "badge": "Axe 4",
          "num": "4.",
          "title": "Gestion Environnementale",
          "desc": "Ma\u00eetrise et r\u00e9duction continue des impacts \u00e9cologiques directs : d\u00e9carbonation des mobilit\u00e9s pendulaires et professionnelles, efficacit\u00e9 et sobri\u00e9t\u00e9 \u00e9nerg\u00e9tique du patrimoine b\u00e2ti, gestion circulaire des d\u00e9chets, pr\u00e9servation de la biodiversit\u00e9 sur site et achats publics responsables.",
          "isMuted": false
        },
        {
          "badge": "Axe 5",
          "num": "5.",
          "title": "Politique Sociale et Inclusion",
          "desc": "Engagement institutionnel pour la responsabilit\u00e9 soci\u00e9tale : \u00e9galit\u00e9 professionnelle femmes-hommes, inclusion et accessibilit\u00e9 des personnes en situation de handicap, \u00e9galit\u00e9 des chances, am\u00e9lioration de la qualit\u00e9 de vie et sant\u00e9 globale, et pr\u00e9vention de toute forme de discrimination.",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "6.",
          "title": "Mobilit\u00e9 Durable &amp; Report Modal (Sustainable Mobility)",
          "desc": "Strat\u00e9gie d'optimisation des transports articul\u00e9e autour de la hi\u00e9rarchie \u00ab \u00c9viter - Transf\u00e9rer - Am\u00e9liorer \u00bb (ASI). Promotion active du report modal vers le ferroviaire, les transports en commun et les mobilit\u00e9s douces face \u00e0 l'autosolisme et aux vols court-courriers.",
          "isMuted": true
        },
        {
          "badge": "Tag",
          "num": "7.",
          "title": "Bilan d'\u00c9missions de GES (BEGES / Bilan Carbone)",
          "desc": "Comptabilisation r\u00e9glementaire des gaz \u00e0 effet de serre (m\u00e9thode ADEME / ISO 14064) sur les trois p\u00e9rim\u00e8tres : Scope 1 (\u00e9missions directes), Scope 2 (\u00e9missions indirectes \u00e9nerg\u00e9tiques) et Scope 3 (\u00e9missions indirectes amont/aval : d\u00e9placements, achats, logistique et cycle de vie).",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "8.",
          "title": "Sobri\u00e9t\u00e9 \u00c9nerg\u00e9tique &amp; Efficacit\u00e9",
          "desc": "D\u00e9marche articulant la sobri\u00e9t\u00e9 (questionnement et r\u00e9duction des consommations par la modification des comportements et des usages collectifs) et l'efficacit\u00e9 (optimisation technique des rendements \u00e9nerg\u00e9tiques pour un m\u00eame niveau de service).",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "9.",
          "title": "Pr\u00e9servation de la Biodiversit\u00e9 &amp; Z\u00e9ro Artificialisation Nette (ZAN)",
          "desc": "Protection des \u00e9cosyst\u00e8mes et des continuit\u00e9s \u00e9cologiques (trames vertes et bleues). Application des exigences l\u00e9gales (loi Climat et R\u00e9silience) visant \u00e0 stopper la disparition nette d'espaces naturels et agricoles caus\u00e9e par les infrastructures et l'am\u00e9nagement.",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "10.",
          "title": "\u00c9quit\u00e9 Territoriale &amp; Accessibilit\u00e9 (Territorial Equity)",
          "desc": "Principe de justice spatiale garantissant un acc\u00e8s universel, abordable et s\u00e9curis\u00e9 aux r\u00e9seaux de transport et aux services d'int\u00e9r\u00eat g\u00e9n\u00e9ral pour l'ensemble des territoires (urbains, p\u00e9riurbains et ruraux), luttant contre la fracture et la pr\u00e9carit\u00e9 mobilit\u00e9.",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "11.",
          "title": "Achats Responsables &amp; Analyse du Cycle de Vie (ACV / LCA)",
          "desc": "Int\u00e9gration syst\u00e9matique de crit\u00e8res environnementaux et sociaux dans la commande publique et priv\u00e9e. \u00c9valuation globale des impacts de chaque produit, infrastructure ou service de son extraction jusqu'\u00e0 son recyclage ou \u00e9limination finale.",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "12.",
          "title": "Objectifs de D\u00e9veloppement Durable (ODD - Agenda 2030)",
          "desc": "Cadre universel des Nations Unies comprenant 17 objectifs interd\u00e9pendants pour concilier prosp\u00e9rit\u00e9 \u00e9conomique, progr\u00e8s social et protection de la biosph\u00e8re. Les politiques de transport et d'ing\u00e9nierie s'articulent principalement autour des ODD 9, 11, 12 et 13.",
          "isMuted": false
        }
      ]
    },
    "sessions": {
      "1": {
        "session": 1,
        "objectives": {
          "title": "Session 1 - Extreme Weather Objectives",
          "summary": "By the end of this session, you will be able to discuss extreme weather and climate impacts with confidence, use key vocabulary and grammar, and build the skills needed for your TOEIC test and Session 5 evaluation.",
          "items": [
            {
              "num": 1,
              "title": "Practice TOEIC Listening for Weather Bulletins",
              "description": "Listen for key weather details, temperature extremes, and travel delay announcements typical of TOEIC Part 4."
            },
            {
              "num": 2,
              "title": "Master Extreme Weather & Climate Vocabulary",
              "description": "Learn and use high-frequency terms for severe weather events (heatwaves, flash floods, droughts) and climate resilience."
            },
            {
              "num": 3,
              "title": "Identify Word Forms & Suffixes in TOEIC Part 5",
              "description": "Identify whether a blank needs a noun (-tion), adjective (-able), or adverb (-ly) when describing weather changes."
            },
            {
              "num": 4,
              "title": "Discuss Community & Infrastructure Resilience (DDRS)",
              "description": "Explore how cities and transport networks can protect communities and infrastructure against extreme weather."
            },
            {
              "num": 5,
              "title": "Build Fluency for the Session 5 Evaluation",
              "description": "Practice speaking about weather disruptions and safety measures using clear pronunciation, fluency, and accurate vocabulary."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 1 Lesson Plan (2 Hours)",
          "summary": "A 2-hour session agenda combining conversational warm-ups, TOEIC test practice, vocabulary building, speaking activities, and evaluation preparation.",
          "items": [
            {
              "time": "0-15",
              "title": "Conversational Warm-Up: Weather Stories (15 mins)",
              "description": "Students talk in pairs about the most extreme weather event they have ever witnessed and how they responded."
            },
            {
              "time": "15-45",
              "title": "TOEIC Strategy: Listening to Announcements (30 mins)",
              "description": "Part 4 practice: listening to broadcast weather advisories, airport delay announcements, and emergency notices."
            },
            {
              "time": "45-65",
              "title": "Vocabulary Builder: Climate & Disruption (20 mins)",
              "description": "High-frequency terms for weather phenomena (heatwave, flash flood, blizzard) and words formed with suffixes (-tion, -ment, -ly)."
            },
            {
              "time": "65-110",
              "title": "Structured Discussion & Grammar (45 mins)",
              "description": "Discussing community resilience and infrastructure protection using Word Forms (nouns, adjectives, adverbs) in context."
            },
            {
              "time": "110-120",
              "title": "Debrief, Evaluation Prep & Wrap-Up (10 mins)",
              "description": "Fluency feedback, pronunciation check for weather vocabulary, and self-evaluation logging."
            }
          ]
        },
        "revision": {
          "title": "Session 1: Extreme Weather",
          "summary": "Review the 18 key terms for Extreme Weather to build your fluency in discussions, professional reading, and TOEIC practice.",
          "terms": [
            {
              "num": "01",
              "term": "Heatwave",
              "definition": "An extended period of abnormally high atmospheric temperatures, often accompanied by high humidity, which stresses public health, strains power grids, and softens transport surfaces."
            },
            {
              "num": "02",
              "term": "Wildfire / Forest Fire",
              "definition": "An uncontrolled inferno spreading rapidly through timberland and dry vegetation, exacerbated by heat and drought, generating toxic smoke plumes and regional transport closures."
            },
            {
              "num": "03",
              "term": "Severe Drought",
              "definition": "An extended deficit in regional precipitation leading to acute water scarcity, agricultural failure, reduced hydroelectric capacity, and parched, fire-prone soils."
            },
            {
              "num": "04",
              "term": "Desertification",
              "definition": "The progressive degradation of fertile land into arid desert, driven by rising global temperatures, recurring droughts, deforestation, and unsustainable land use."
            },
            {
              "num": "05",
              "term": "Flash Flood",
              "definition": "A sudden, violent surge of floodwater triggered by torrential rainfall within a brief window, overwhelming drainage infrastructure and submerging transit corridors."
            },
            {
              "num": "06",
              "term": "Storm Surge",
              "definition": "An abnormal, destructive rise in sea level propelled ashore by low-pressure cyclones or hurricane winds, inundating coastal settlements and low-lying airports."
            },
            {
              "num": "07",
              "term": "Sea-Level Rise",
              "definition": "The ongoing global increase in ocean elevation driven by thermal expansion of warming seawater and the accelerated melting of glaciers and ice sheets."
            },
            {
              "num": "08",
              "term": "Atmospheric River",
              "definition": "A long, narrow corridor of concentrated water vapor in the atmosphere that channels tropical moisture, triggering historic deluge and widespread flooding upon landfall."
            },
            {
              "num": "09",
              "term": "Supercell Thunderstorm",
              "definition": "An organized, severe rotating storm system that produces destructive hail, tornadoes, and torrential rains, causing severe damage to infrastructure."
            },
            {
              "num": "10",
              "term": "Polar Vortex Disruption",
              "definition": "A destabilization of high-altitude Arctic winds that allows freezing polar air masses to plunge southward, causing severe and paralyzing cold snaps."
            },
            {
              "num": "11",
              "term": "Early Warning System",
              "definition": "Advanced meteorological networks and public communication alerts that notify communities of impending severe storms, floods, or extreme weather before disaster strikes."
            },
            {
              "num": "12",
              "term": "Flood Defenses / Barriers",
              "definition": "Engineered structures such as sea walls, levees, and storm surge gates designed to protect cities and transport corridors from rising floodwaters."
            },
            {
              "num": "13",
              "term": "Greenhouse Effect",
              "definition": "The planetary warming process where heat-trapping atmospheric gases (CO\u2082, methane, nitrous oxide) absorb outgoing infrared radiation instead of letting it escape to space."
            },
            {
              "num": "14",
              "term": "Climate Tipping Point",
              "definition": "A critical environmental threshold beyond which a minor change triggers self-reinforcing, irreversible shifts in Earth systems (e.g., permafrost thaw, ice-sheet collapse)."
            },
            {
              "num": "15",
              "term": "Ocean Acidification",
              "definition": "The ongoing decline in ocean pH caused by absorbing excess carbon dioxide from the atmosphere, disrupting marine food chains and coral reefs."
            },
            {
              "num": "16",
              "term": "Glacial Retreat",
              "definition": "The accelerating worldwide loss of alpine glaciers and polar ice shelves due to sustained global warming, diminishing vital freshwater reservoirs."
            },
            {
              "num": "17",
              "term": "Climate Resilience",
              "definition": "The capacity of socio-economic systems, supply chains, and civil infrastructure to anticipate, absorb, recover from, and adapt to hazardous climate-related shocks."
            },
            {
              "num": "18",
              "term": "Decarbonization",
              "definition": "The systematic elimination or progressive reduction of greenhouse gas emissions across aviation, transport, industry, and energy sectors to achieve net-zero targets."
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: Extreme Weather & Climate Change Explained",
              "watchUrl": "https://www.youtube.com/watch?v=wecbVJ4FOHY",
              "tag": "Meteorology",
              "videoId": "wecbVJ4FOHY",
              "embedUrl": "https://www.youtube-nocookie.com/embed/wecbVJ4FOHY",
              "caption": "Focus: Explores the meteorological science behind intensifying global heatwaves, supercell storms, and shifting atmospheric circulation patterns."
            },
            {
              "title": "Video 2: Flash Floods & Sea-Level Rise: Engineering City Defenses",
              "watchUrl": "https://www.youtube.com/watch?v=jdGjgmyFP9M",
              "tag": "Resilience",
              "videoId": "jdGjgmyFP9M",
              "embedUrl": "https://www.youtube-nocookie.com/embed/jdGjgmyFP9M",
              "caption": "Focus: How coastal communities and urban planners construct storm surge barriers, sea walls, and drainage infrastructure against extreme deluge."
            },
            {
              "title": "Video 3: B2 English: Reporting Severe Weather & Emergency Advisories",
              "watchUrl": "https://www.youtube.com/watch?v=pEO9-iPZQWA",
              "tag": "Language Practice",
              "videoId": "pEO9-iPZQWA",
              "embedUrl": "https://www.youtube-nocookie.com/embed/pEO9-iPZQWA",
              "caption": "Focus: Essential vocabulary, word forms, and phrasing used by international broadcasters to communicate emergency storm warnings and flood alerts."
            }
          ],
          "grammar": {
            "title": "Word Endings & Sentence Positions",
            "badge": "B1\u2013B2 Grammar Focus",
            "patternTitle": "Common Endings & Word Types",
            "formula": "Noun (-tion, -ment) \u2022 Adj (-able, -ive) \u2022 Adv (-ly) \u2022 Verb (-ate, -ify)",
            "rulesTitle": "Core Rules",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. Nouns (-tion, -ment, -ance, -ity):</strong> Names of things, people, or concepts. They come after <em>a</em>, <em>an</em>, <em>the</em> or adjectives (<span style=\"font-weight: 700; color: #49739a;\">prediction</span>, <span style=\"font-weight: 700; color: #49739a;\">severity</span>).",
              "<strong style=\"color: #1e293b;\">2. Adjectives (-able, -ive, -al, -ous):</strong> Words that describe nouns. They come before nouns or after verbs like <em>be</em>, <em>remain</em>, <em>seem</em> (<span style=\"font-weight: 700; color: #49739a;\">predictable</span>, <span style=\"font-weight: 700; color: #49739a;\">severe</span>).",
              "<strong style=\"color: #1e293b;\">3. Adverbs (-ly):</strong> Words that describe how or how much an action happens. They describe verbs, adjectives, or full sentences (<span style=\"font-weight: 600; color: #334155;\">significantly</span>, <span style=\"font-weight: 600; color: #334155;\">rapidly</span>).",
              "<strong style=\"color: #1e293b;\">4. Verbs (-ate, -ify, -ize):</strong> Action words. They follow the subject (<span style=\"font-weight: 600; color: #334155;\">predict</span>, <span style=\"font-weight: 600; color: #334155;\">signify</span>)."
            ],
            "trap": "<strong>\u26a0\ufe0f TOEIC Trap Alert:</strong> If a sentence already has a complete verb (e.g., <em>dropped</em>), and the blank explains how it happened, you need an <strong>adverb ending in -ly</strong> (<em>dropped significantly</em>)!",
            "examplesTitle": "Meteorology & Operations Examples",
            "examples": [
              "<em>\"Meteorologists must monitor barometric pressure <strong>continuously</strong> to ensure flight safety.\"</em>",
              "<em>\"The sudden drop in altitude caused by wind shear was <strong>extremely</strong> dangerous.\"</em>"
            ]
          },
          "toeic": {
            "stem": "The frequency of Mediterranean heatwave events was ________ higher this decade than during any previously recorded ten-year span.",
            "options": [
              {
                "letter": "A",
                "text": "significant"
              },
              {
                "letter": "B",
                "text": "significantly"
              },
              {
                "letter": "C",
                "text": "significance"
              },
              {
                "letter": "D",
                "text": "significate"
              }
            ],
            "correctLetter": "B",
            "correctText": "significantly",
            "analysis": "The comparative adjective \"higher\" must be modified by an adverb of degree (\"significantly higher\").",
            "strategy": "Comparative adjectives (higher, faster, cheaper) are modified by adverbs (significantly, substantially, slightly), not adjectives."
          },
          "resources": [
            {
              "url": "https://public.wmo.int",
              "tag": "01 \u2022 Global Weather Authority",
              "name": "World Meteorological Organization",
              "desc": "Global authority on atmospheric science, severe storm warnings, and climate metrics."
            },
            {
              "url": "https://climate.copernicus.eu",
              "tag": "02 \u2022 Satellite Earth Observation",
              "name": "Copernicus Climate Change Service",
              "desc": "European satellite data tracking global surface temperatures, wildfires, and extreme storms."
            },
            {
              "url": "https://www.undrr.org",
              "tag": "03 \u2022 Emergency Preparedness",
              "name": "UN Disaster Risk Reduction (UNDRR)",
              "desc": "Global frameworks, early warning initiatives, and community resilience guidelines."
            },
            {
              "url": "https://www.eea.europa.eu",
              "tag": "04 \u2022 European Climate Portal",
              "name": "European Environment Agency Hazards",
              "desc": "Interactive mapping of European heatwaves, drought risks, and flood vulnerability."
            },
            {
              "url": "https://ourworldindata.org/natural-disasters",
              "tag": "05 \u2022 Empirical Datasets",
              "name": "Our World in Data: Natural Disasters",
              "desc": "Long-term statistical datasets and interactive charts tracking extreme weather trends."
            },
            {
              "url": "https://www.etsglobal.org/fr/fr",
              "tag": "06 \u2022 TOEIC Listening & Reading",
              "name": "ETS Global TOEIC Preparation",
              "desc": "Weather advisory and emergency briefing listening practice for technical professionals."
            }
          ],
          "pageUrl": "session1/admat2.html",
          "articles": [
            {
              "topic": "WMO Global Climate Observatory",
              "sourceTag": "International Report",
              "heading": "State of the Global Climate: Extreme Events &amp; Frequency",
              "snippet": "World Meteorological Organization empirical analysis tracking rising global temperatures, severe heatwaves, and unprecedented precipitation extremes.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://public.wmo.int"
            },
            {
              "topic": "UNDRR Risk Reduction Briefing",
              "sourceTag": "Economic Analysis",
              "heading": "The Escalating Economic Toll of Extreme Weather Disasters",
              "snippet": "Assessing financial losses, supply-chain disruptions, and critical infrastructure vulnerabilities caused by climate-driven severe weather shocks.",
              "readTime": "Estimated read: 6-8 mins",
              "url": "https://www.undrr.org"
            }
          ],
          "toeicQuestions": [
            {
              "stem": "The frequency of Mediterranean heatwave events was ________ higher this decade than during any previously recorded ten-year span.",
              "options": [
                {
                  "letter": "A",
                  "text": "significant"
                },
                {
                  "letter": "B",
                  "text": "significantly"
                },
                {
                  "letter": "C",
                  "text": "significance"
                },
                {
                  "letter": "D",
                  "text": "significate"
                }
              ],
              "correctLetter": "B",
              "correctText": "significantly",
              "analysis": "The comparative adjective \"higher\" must be modified by an adverb of degree (\"significantly higher\").",
              "strategy": "Comparative adjectives (higher, faster, cheaper) are modified by adverbs (significantly, substantially, slightly), not adjectives."
            },
            {
              "stem": "Last July recorded the ________ monthly surface temperatures ever documented by the World Meteorological Organization.",
              "options": [
                {
                  "letter": "A",
                  "text": "hot"
                },
                {
                  "letter": "B",
                  "text": "hotter"
                },
                {
                  "letter": "C",
                  "text": "hottest"
                },
                {
                  "letter": "D",
                  "text": "most hot"
                }
              ],
              "correctLetter": "C",
              "correctText": "hottest",
              "analysis": "The definite article \"the\" combined with \"ever documented\" calls for the superlative form of a one-syllable adjective (\"hottest\").",
              "strategy": "Formulas with \"the\" + [adjective] + \"ever\" require the superlative (-est or most + adj)."
            },
            {
              "stem": "Last winter severe ice storms caused ________ more flight cancellations than the five-year seasonal average.",
              "options": [
                {
                  "letter": "A",
                  "text": "far"
                },
                {
                  "letter": "B",
                  "text": "very"
                },
                {
                  "letter": "C",
                  "text": "too"
                },
                {
                  "letter": "D",
                  "text": "so"
                }
              ],
              "correctLetter": "A",
              "correctText": "far",
              "analysis": "\"Far\" acts as an intensifying adverb before comparative structures (\"far more\"). \"Very\" cannot directly modify a comparative adjective or \"more\".",
              "strategy": "Never use \"very\" before comparatives (very taller / very more). Use \"much\", \"far\", \"way\", or \"significantly\"."
            },
            {
              "stem": "Runway heating systems installed in northern airports are twice as ________ as conventional chemical de-icing trucks.",
              "options": [
                {
                  "letter": "A",
                  "text": "efficiently"
                },
                {
                  "letter": "B",
                  "text": "efficient"
                },
                {
                  "letter": "C",
                  "text": "more efficient"
                },
                {
                  "letter": "D",
                  "text": "efficiency"
                }
              ],
              "correctLetter": "B",
              "correctText": "efficient",
              "analysis": "In the equative construction \"as [adjective] as\", the base adjective form is required because the linking verb \"are\" takes an adjective complement.",
              "strategy": "Pattern: as + [BASE ADJECTIVE] + as. Do not put comparatives (-er, more) between \"as... as\"."
            },
            {
              "stem": "Airport climate vulnerability assessments must be conducted ________ in regions exposed to flash flooding.",
              "options": [
                {
                  "letter": "A",
                  "text": "frequent"
                },
                {
                  "letter": "B",
                  "text": "frequently"
                },
                {
                  "letter": "C",
                  "text": "frequency"
                },
                {
                  "letter": "D",
                  "text": "more frequent"
                }
              ],
              "correctLetter": "B",
              "correctText": "frequently",
              "analysis": "An adverb (\"frequently\") is required to modify the passive verb phrase \"must be conducted\".",
              "strategy": "Identify the word modified: if modifying how an action is done (conducted), select the -ly adverb."
            }
          ]
        }
      },
      "2": {
        "session": 2,
        "objectives": {
          "title": "Session 2 - Sustainable Cities Objectives",
          "summary": "By the end of this session, you will be able to discuss sustainable cities with confidence, use key vocabulary and grammar, and build the skills needed for your TOEIC test and Session 5 evaluation.",
          "items": [
            {
              "num": 1,
              "title": "Practice TOEIC Reading Part 7: Urban Development & Green Policies",
              "description": "Read city council proposals, public transit schedules, and environmental reports for key facts and data."
            },
            {
              "num": 2,
              "title": "Master Vocabulary for 15-Minute Cities, Clean Transit & Public Spaces",
              "description": "Learn high-frequency terms for pedestrian zones, green corridors, cycling lanes, and renewable district heating."
            },
            {
              "num": 3,
              "title": "Apply Subject-Verb Agreement Rules with Complex Subject Phrases",
              "description": "Ensure singular and plural verbs match when long descriptive phrases or collective nouns separate the subject from the verb."
            },
            {
              "num": 4,
              "title": "Evaluate Green Neighborhoods & Public Transit Integration (DDRS)",
              "description": "Assess how compact urban planning cuts vehicle pollution and creates healthier, fairer communities."
            },
            {
              "num": 5,
              "title": "Compare Two Cities and Present Urban Sustainability Features",
              "description": "Present and compare urban sustainability initiatives using clear comparative structures and confident delivery."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 2 Lesson Plan (2 Hours)",
          "summary": "A 2-hour session agenda combining conversational warm-ups, TOEIC test practice, vocabulary building, speaking activities, and evaluation preparation.",
          "items": [
            {
              "time": "0-15",
              "title": "Conversational Warm-Up: My Ideal City (15 mins)",
              "description": "Students discuss in pairs what features make a city enjoyable to live in (parks, cycle paths, public transport)."
            },
            {
              "time": "15-45",
              "title": "TOEIC Strategy: Urban Notices & Bulletins (30 mins)",
              "description": "Practice Part 7 reading comprehension with municipal updates, transit timetables, and environmental regulations."
            },
            {
              "time": "45-65",
              "title": "Vocabulary Builder: 15-Minute City Concepts (20 mins)",
              "description": "Vocabulary for urban planning: pedestrian zone, green corridor, district heating, and low-emission zones."
            },
            {
              "time": "65-110",
              "title": "Structured Discussion & Grammar (45 mins)",
              "description": "Compare two European cities using Subject-Verb Agreement with collective nouns and long noun phrases."
            },
            {
              "time": "110-120",
              "title": "Debrief, Evaluation Prep & Wrap-Up (10 mins)",
              "description": "Class recap, key grammatical reminders for subject-verb agreement, and personal vocabulary logging."
            }
          ]
        },
        "revision": {
          "title": "Session 2: Sustainable Cities",
          "summary": "Review the 18 key terms for Sustainable Cities to build your fluency in discussions, professional reading, and TOEIC practice.",
          "terms": [
            {
              "num": "01",
              "term": "15-Minute City",
              "definition": "An urban design concept where daily necessities and transport are reachable within a 15-minute walk or cycle."
            },
            {
              "num": "02",
              "term": "Urban Heat Island (UHI)",
              "definition": "Metropolitan areas that experience significantly higher temperatures than surrounding rural zones due to concrete absorption."
            },
            {
              "num": "03",
              "term": "Bus Rapid Transit (BRT)",
              "definition": "A high-capacity bus network operating in dedicated right-of-way lanes with off-board fare collection and station platforms."
            },
            {
              "num": "04",
              "term": "Congestion Pricing",
              "definition": "A surcharge levied on vehicles entering central urban business zones during peak travel hours to reduce traffic."
            },
            {
              "num": "05",
              "term": "Permeable Pavement",
              "definition": "Paving materials that allow stormwater to infiltrate into underlying soil, mitigating urban flash flooding."
            },
            {
              "num": "06",
              "term": "Transit-Oriented Development (TOD)",
              "definition": "Compact urban development clustering housing, commercial spaces, and civic services around rapid transit nodes."
            },
            {
              "num": "07",
              "term": "Last-Mile Logistics",
              "definition": "The final stage of package delivery from a local distribution hub to the consumer doorstep, often carbon-intensive."
            },
            {
              "num": "08",
              "term": "Low-Emission District",
              "definition": "A city sector where combustion engines are prohibited in favor of zero-emission electric vehicles and active mobility."
            },
            {
              "num": "09",
              "term": "Urban Metabolism",
              "definition": "The flow of resources (energy, water, food) consumed by a city and the management of its waste, aiming for circular and sustainable urban systems."
            },
            {
              "num": "10",
              "term": "Micro-Consolidation Hub",
              "definition": "Central neighborhood facilities where parcel freight is sorted and transferred onto electric cargo bikes for zero-emission last-mile delivery."
            },
            {
              "num": "11",
              "term": "Pedestrianization",
              "definition": "Converting vehicular roadways into car-free public zones dedicated exclusively to pedestrians and community life."
            },
            {
              "num": "12",
              "term": "Shared Mobility Scheme",
              "definition": "Public access networks offering shared bicycles, electric mopeds, or car-sharing services on a flexible rental basis."
            },
            {
              "num": "13",
              "term": "Green Infrastructure",
              "definition": "Interconnected networks of green roofs, bioswales, and urban forests providing natural stormwater and cooling services."
            },
            {
              "num": "14",
              "term": "Complete Streets",
              "definition": "Streets designed to enable safe, attractive, and comfortable access for users of all ages, abilities, and modes."
            },
            {
              "num": "15",
              "term": "District Cooling System",
              "definition": "Centralized generation and distribution of chilled water through underground insulated pipes to cool neighborhood buildings."
            },
            {
              "num": "16",
              "term": "Autonomous Shuttle",
              "definition": "Self-driving electric multi-passenger pods operating on pre-mapped routes to connect transit hubs with neighborhoods."
            },
            {
              "num": "17",
              "term": "Active Travel Network",
              "definition": "Protected, segregated cycling tracks and pedestrian greenways encouraging human-powered daily commuting."
            },
            {
              "num": "18",
              "term": "Decarbonized Freight",
              "definition": "Urban distribution networks powered entirely by electric vehicles, hydrogen fuel cells, and zero-emission logistics."
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: The 15-Minute City Explained",
              "watchUrl": "https://www.youtube.com/watch?v=5dVcn8NjbwY",
              "tag": "Urban Design",
              "videoId": "5dVcn8NjbwY",
              "embedUrl": "https://www.youtube-nocookie.com/embed/5dVcn8NjbwY",
              "caption": "Focus: Urbanist Carlos Moreno details how cities can be reorganized so daily services are reachable within a 15-minute walk or cycle."
            },
            {
              "title": "Video 2: How Cities Redesign Streets for People",
              "watchUrl": "https://www.youtube.com/watch?v=RYuGWOjm26E",
              "tag": "Active Mobility",
              "videoId": "RYuGWOjm26E",
              "embedUrl": "https://www.youtube-nocookie.com/embed/RYuGWOjm26E",
              "caption": "Focus: Urban case studies demonstrating pedestrianization, protected cycling corridors, and the transformation of car-centric roadways."
            },
            {
              "title": "Video 3: Decarbonizing Urban Freight & Public Transit",
              "watchUrl": "https://www.youtube.com/watch?v=9a4JSBX7_n0",
              "tag": "Clean Logistics",
              "videoId": "9a4JSBX7_n0",
              "embedUrl": "https://www.youtube-nocookie.com/embed/9a4JSBX7_n0",
              "caption": "Focus: Examining electric bus rapid transit, cargo-bike micro-hubs, and zero-emission delivery zones in European metropolitan centers."
            }
          ],
          "grammar": {
            "title": "Matching Subjects & Verbs",
            "badge": "B1\u2013B2 Grammar Focus",
            "patternTitle": "Basic Rule",
            "formula": "Main Subject [Singular] + (words in between) + Verb with -s [Singular]",
            "rulesTitle": "Core Rules",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. Words in Between (The \"of / in / with\" trap):</strong> In <em>\"The integration of light-rail corridors\"</em>, the real subject is <span style=\"font-weight: 700; color: #49739a;\">integration</span> (singular), not <em>corridors</em> (plural). The verb must be singular (<em>reduces</em>).",
              "<strong style=\"color: #1e293b;\">2. Companies &amp; Organizations:</strong> Words like <em>the committee</em>, <em>the transit board</em>, or <em>the municipality</em> count as one single unit and take a singular verb.",
              "<strong style=\"color: #1e293b;\">3. Words like Each / Every / One of:</strong> Phrases like <em>Each of the hubs</em> or <em>One of the passengers</em> always take a <span style=\"font-weight: 600; color: #334155;\">singular verb</span>."
            ],
            "trap": "<strong>\u26a0\ufe0f TOEIC Trap Alert:</strong> The test often puts plural nouns right in front of the blank (e.g., <em>\"...corridors into hubs [ _____ ]\"</em>) to fool you. Ignore the words inside <em>\"of...\"</em> or <em>\"in...\"</em> and match the verb to the very first main noun!",
            "examplesTitle": "Urban Mobility Examples",
            "examples": [
              "<em>\"The expansion of electric tramways into suburban districts <strong>has improved</strong> regional air quality.\"</em>",
              "<em>\"Each of the city's shared mobility hubs <strong>provides</strong> free solar battery recharging.\"</em>"
            ]
          },
          "toeic": {
            "stem": "European metropolitan areas ________ invest heavily in protected cycling infrastructure report substantial reductions in transport emissions.",
            "options": [
              {
                "letter": "A",
                "text": "that"
              },
              {
                "letter": "B",
                "text": "whom"
              },
              {
                "letter": "C",
                "text": "where"
              },
              {
                "letter": "D",
                "text": "what"
              }
            ],
            "correctLetter": "A",
            "correctText": "that",
            "analysis": "\"Areas\" is a non-human antecedent acting as the subject of the defining relative clause, requiring \"that\" (or \"which\").",
            "strategy": "Use \"that\" or \"which\" for things and entities; \"who/whom\" for people; \"where\" for locations acting as adverbs (where + S + V)."
          },
          "resources": [
            {
              "url": "https://www.c40.org",
              "tag": "01 \u2022 Urban Climate Leadership",
              "name": "C40 Cities Network",
              "desc": "Mayors leading the urban fight against climate change through progressive mobility and clean air zones."
            },
            {
              "url": "https://www.uitp.org",
              "tag": "02 \u2022 Public Transit Federation",
              "name": "UITP Urban Transit Association",
              "desc": "International Association of Public Transport global reports and transit benchmarks."
            },
            {
              "url": "https://www.itdp.org",
              "tag": "03 \u2022 Sustainable Transport Institute",
              "name": "ITDP Sustainable Transport",
              "desc": "Institute for Transportation and Development Policy BRT and cycling standards."
            },
            {
              "url": "https://transport.ec.europa.eu",
              "tag": "04 \u2022 EU Mobility Framework",
              "name": "European Commission Urban Mobility",
              "desc": "EU framework for Sustainable Urban Mobility Plans (SUMP) and city decarbonization."
            },
            {
              "url": "https://ourworldindata.org/urbanization",
              "tag": "05 \u2022 Urbanization Statistics",
              "name": "Our World in Data: Urbanization",
              "desc": "Global statistical datasets on metropolitan density, transit usage, and urban sprawl."
            },
            {
              "url": "https://www.etsglobal.org/fr/fr",
              "tag": "06 \u2022 TOEIC Business Context",
              "name": "ETS Global TOEIC Preparation",
              "desc": "Vocabulary exercises for municipal tenders, urban planning proposals, and contracts."
            }
          ],
          "pageUrl": "session2/admat2.html",
          "articles": [
            {
              "topic": "C40 Cities Climate Leadership",
              "sourceTag": "Urban Policy",
              "heading": "Urban Mobility Transition Index",
              "snippet": "Comparative scoring of 50 global cities on public transit share, air quality improvements, and active mobility network integration.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://www.c40.org"
            },
            {
              "topic": "OECD Urban Studies",
              "sourceTag": "Economic Analysis",
              "heading": "The Economics of Low-Emission Zones and Public Health",
              "snippet": "Empirical assessment of health outcomes, commercial vitality, and emissions reductions following the implementation of urban clean-air zones.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://www.oecd.org"
            }
          ],
          "toeicQuestions": [
            {
              "stem": "European metropolitan areas ________ invest heavily in protected cycling infrastructure report substantial reductions in transport emissions.",
              "options": [
                {
                  "letter": "A",
                  "text": "that"
                },
                {
                  "letter": "B",
                  "text": "whom"
                },
                {
                  "letter": "C",
                  "text": "where"
                },
                {
                  "letter": "D",
                  "text": "what"
                }
              ],
              "correctLetter": "A",
              "correctText": "that",
              "analysis": "\"Areas\" is a non-human antecedent acting as the subject of the defining relative clause, requiring \"that\" (or \"which\").",
              "strategy": "Use \"that\" or \"which\" for things and entities; \"who/whom\" for people; \"where\" for locations acting as adverbs (where + S + V)."
            },
            {
              "stem": "The Ultra Low Emission Zone, ________ was launched in central London in 2019, has dramatically reduced harmful nitrogen dioxide concentrations.",
              "options": [
                {
                  "letter": "A",
                  "text": "that"
                },
                {
                  "letter": "B",
                  "text": "which"
                },
                {
                  "letter": "C",
                  "text": "who"
                },
                {
                  "letter": "D",
                  "text": "where"
                }
              ],
              "correctLetter": "B",
              "correctText": "which",
              "analysis": "In non-defining relative clauses set off by commas, always use \"which\" for things, never \"that\".",
              "strategy": "Golden TOEIC Rule: Never use \"that\" directly after a comma in relative clauses. Choose \"which\"."
            },
            {
              "stem": "Urban transport planners are studying Zurich, ________ integrated public transport network achieves exceptional punctuality rates.",
              "options": [
                {
                  "letter": "A",
                  "text": "whose"
                },
                {
                  "letter": "B",
                  "text": "who"
                },
                {
                  "letter": "C",
                  "text": "which"
                },
                {
                  "letter": "D",
                  "text": "where"
                }
              ],
              "correctLetter": "A",
              "correctText": "whose",
              "analysis": "The possessive relative pronoun \"whose\" shows that the transit network belongs to Zurich (\"Zurich integrated public transport network\").",
              "strategy": "\"Whose\" + noun indicates possession for both people and entities/cities."
            },
            {
              "stem": "The maintenance depot ________ battery-electric buses recharge overnight is supplied entirely by renewable solar energy.",
              "options": [
                {
                  "letter": "A",
                  "text": "which"
                },
                {
                  "letter": "B",
                  "text": "where"
                },
                {
                  "letter": "C",
                  "text": "whose"
                },
                {
                  "letter": "D",
                  "text": "when"
                }
              ],
              "correctLetter": "B",
              "correctText": "where",
              "analysis": "\"Where\" is the relative adverb of place modifying \"maintenance depot\", followed by a complete clause (\"buses recharge overnight\").",
              "strategy": "When the location is followed by subject + verb doing an action in that location, use \"where\"."
            },
            {
              "stem": "Municipal sustainability regulations mandate solar panels on all commercial facilities ________ total surface area exceeds six hundred square meters.",
              "options": [
                {
                  "letter": "A",
                  "text": "whose"
                },
                {
                  "letter": "B",
                  "text": "which"
                },
                {
                  "letter": "C",
                  "text": "where"
                },
                {
                  "letter": "D",
                  "text": "that"
                }
              ],
              "correctLetter": "A",
              "correctText": "whose",
              "analysis": "\"Whose\" connects \"commercial facilities\" with their \"total surface area\" in a possessive relationship.",
              "strategy": "Test for \"whose\": Can you say \"[antecedent] [noun]\"? (facilities surface area = whose surface area)."
            }
          ]
        }
      },
      "3": {
        "session": 3,
        "objectives": {
          "title": "Session 3 - Building and Supporting Arguments Objectives",
          "summary": "By the end of this session, you will be able to build and support persuasive arguments with confidence, use key vocabulary and grammar, and build the skills needed for your TOEIC test and Session 5 evaluation.",
          "items": [
            {
              "num": 1,
              "title": "Practice Identifying Opinions, Facts & Tone in TOEIC Contexts",
              "description": "Differentiate between objective facts and speaker opinions in workplace dialogues and business articles."
            },
            {
              "num": 2,
              "title": "Learn Useful Phrases to Agree, Disagree, and Express Counter-Arguments",
              "description": "Master polite, professional phrases to support your position, acknowledge counter-arguments, and make concessions."
            },
            {
              "num": 3,
              "title": "Master Gerunds & Infinitives (recommend doing vs. agree to do)",
              "description": "Use verbs correctly followed by gerunds (-ing) or infinitives (to + verb) when proposing actions and solutions."
            },
            {
              "num": 4,
              "title": "Structure Persuasive Arguments on Environmental Regulations (DDRS)",
              "description": "Build logical points backed by data when debating carbon pricing, plastic bans, and corporate environmental rules."
            },
            {
              "num": 5,
              "title": "Practice Defending Your Point of View in Group Discussions",
              "description": "Defend your ideas calmly in group exchanges while actively listening and responding to different perspectives."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 3 Lesson Plan (2 Hours)",
          "summary": "A 2-hour session agenda combining conversational warm-ups, TOEIC test practice, vocabulary building, speaking activities, and evaluation preparation.",
          "items": [
            {
              "time": "0-15",
              "title": "Conversational Warm-Up: Quick Dilemmas (15 mins)",
              "description": "In pairs, students quickly choose a side on simple dilemmas (e.g. banning cars in city centers) and give one strong reason."
            },
            {
              "time": "15-45",
              "title": "TOEIC Strategy: Detecting Opinion & Inference (30 mins)",
              "description": "Practice identifying the speaker or author's main point, tone, and implied meaning in TOEIC dialogues and articles."
            },
            {
              "time": "45-65",
              "title": "Vocabulary Builder: Persuasive Language (20 mins)",
              "description": "Useful phrases for agreeing politely, making concessions, challenging claims, and summarizing evidence."
            },
            {
              "time": "65-110",
              "title": "Structured Discussion & Grammar (45 mins)",
              "description": "Mini-debates on environmental rules using Gerunds & Infinitives (advocate doing, decide to ban, prioritize investing)."
            },
            {
              "time": "110-120",
              "title": "Debrief, Evaluation Prep & Wrap-Up (10 mins)",
              "description": "Peer feedback on debate conduct, review of clear argumentation techniques, and Session 5 speaking checklist."
            }
          ]
        },
        "revision": {
          "title": "Session 3: Building and Supporting Arguments",
          "summary": "Review the 18 key terms for Building and Supporting Arguments to build your fluency in discussions, professional reading, and TOEIC practice.",
          "terms": [
            {
              "num": "01",
              "term": "Argument Structure (Toulmin)",
              "definition": "A practical method to build strong arguments by linking your main idea (claim) with facts (evidence) and logical explanation (reasoning)."
            },
            {
              "num": "02",
              "term": "Cautious Language (Hedging)",
              "definition": "Careful words and phrases (it seems, appears to be, arguably) used to soften statements and avoid sounding 100% certain."
            },
            {
              "num": "03",
              "term": "Concession Phrases",
              "definition": "Words that accept a valid point from the other side before presenting your own argument (although, while it is true that, despite)."
            },
            {
              "num": "04",
              "term": "Ad Hominem Fallacy",
              "definition": "An unfair debate tactic that attacks a person's character instead of responding to their argument."
            },
            {
              "num": "05",
              "term": "Straw Man Fallacy",
              "definition": "Exaggerating or distorting an opponent's argument to make it easy to attack and defeat."
            },
            {
              "num": "06",
              "term": "Empirical Evidence",
              "definition": "Factual proof and data gathered through research, experiments, or real-world measurements to support an argument."
            },
            {
              "num": "07",
              "term": "Carbon Border Tax (CBAM)",
              "definition": "A tariff on carbon-intensive imports designed to prevent carbon leakage and level the playing field for clean domestic industry."
            },
            {
              "num": "08",
              "term": "Required Transport Shift",
              "definition": "Government rules that require passengers or freight to use rail rather than planes or trucks on routes with good train service."
            },
            {
              "num": "09",
              "term": "Precautionary Principle",
              "definition": "The doctrine that preventative action should be taken in the face of scientific uncertainty regarding environmental harm."
            },
            {
              "num": "10",
              "term": "Strong Counter-Argument",
              "definition": "A counter-argument backed by solid facts that disproves an opposing point of view."
            },
            {
              "num": "11",
              "term": "Counter-Argument",
              "definition": "An opposing viewpoint or objection presented to challenge, question, or disprove an original argumentative claim."
            },
            {
              "num": "12",
              "term": "Logical Fallacy",
              "definition": "A flaw or error in reasoning that undermines the validity and soundness of an argumentative structure."
            },
            {
              "num": "13",
              "term": "Slippery Slope",
              "definition": "An unfounded assertion that an initial action will inevitably lead to an extreme, disastrous chain of consequences."
            },
            {
              "num": "14",
              "term": "Burden of Proof",
              "definition": "The procedural obligation of the party proposing a controversial claim or policy change to substantiate it with evidence."
            },
            {
              "num": "15",
              "term": "Oxford Debate Format",
              "definition": "A structured competitive debate protocol where teams argue for or against a specific motion under strict time limits."
            },
            {
              "num": "16",
              "term": "Persuasive Language",
              "definition": "Words, rhetorical phrasing, and stylistic devices chosen intentionally to influence, convince, and engage an audience."
            },
            {
              "num": "17",
              "term": "Nuanced Qualifier",
              "definition": "Terms (predominantly, under specific constraints, in most verified instances) establishing limits on a claim&#x27;s universality."
            },
            {
              "num": "18",
              "term": "Peer-Reviewed Consensus",
              "definition": "The collective judgment of international scientific experts verified through rigorous independent methodological review."
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: How to Build a Strong Logical Argument",
              "watchUrl": "https://www.youtube.com/watch?v=vNDYUlxNIAA",
              "tag": "Rhetoric & Logic",
              "videoId": "vNDYUlxNIAA",
              "embedUrl": "https://www.youtube-nocookie.com/embed/vNDYUlxNIAA",
              "caption": "Focus: Analyzing the anatomy of a convincing argument: making clear claims, substantiating with empirical evidence, and avoiding fallacies."
            },
            {
              "title": "Video 2: How to Disagree Better in English",
              "watchUrl": "https://www.youtube.com/watch?v=-VnmAg0t_l4",
              "tag": "Debate Skills",
              "videoId": "-VnmAg0t_l4",
              "embedUrl": "https://www.youtube-nocookie.com/embed/-VnmAg0t_l4",
              "caption": "Focus: BBC Learning English guide to expressing opposing viewpoints politely, using concession markers, and framing counter-arguments constructively."
            },
            {
              "title": "Video 3: Policy Debate: Short-Haul Flight Bans vs. High-Speed Rail",
              "watchUrl": "https://www.youtube.com/watch?v=oJsRc3hqpH0",
              "tag": "Transport Policy",
              "videoId": "oJsRc3hqpH0",
              "embedUrl": "https://www.youtube-nocookie.com/embed/oJsRc3hqpH0",
              "caption": "Focus: Examining arguments for and against statutory flight bans on routes served by high-speed rail, evaluating economic and ecological trade-offs."
            }
          ],
          "grammar": {
            "title": "Verbs with -ing vs. to + Verb",
            "badge": "B1\u2013B2 Grammar Focus",
            "patternTitle": "Two Different Verb Patterns",
            "formula": "Verb + -ing | Verb + to + Verb | Preposition + -ing",
            "rulesTitle": "Core Rules",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. Verbs Followed by -ing:</strong> <span style=\"font-weight: 700; color: #49739a;\">recommend</span>, <span style=\"font-weight: 700; color: #49739a;\">suggest</span>, <span style=\"font-weight: 700; color: #49739a;\">consider</span>, <em>avoid</em>, <em>postpone</em>, <em>delay</em> (*recommend implementing*).",
              "<strong style=\"color: #1e293b;\">2. Verbs Followed by to + Verb:</strong> <span style=\"font-weight: 700; color: #49739a;\">decide</span>, <span style=\"font-weight: 700; color: #49739a;\">agree</span>, <span style=\"font-weight: 700; color: #49739a;\">aim</span>, <em>plan</em>, <em>refuse</em>, <em>promise</em>, <em>hesitate</em> (*agree to invest*).",
              "<strong style=\"color: #1e293b;\">3. Prepositions Always Take -ing:</strong> Any verb after a preposition (<em>in</em>, <em>by</em>, <em>for</em>, <em>committed to</em>, <em>look forward to</em>) must end in <span style=\"font-weight: 600; color: #334155;\">-ing</span>."
            ],
            "trap": "<strong>\u26a0\ufe0f TOEIC Trap Alert:</strong> In French, people say <em>\"recommander de faire\"</em> with an infinitive. But in English, you <strong>cannot</strong> say <em>\"recommend to do\"</em>. You must say <strong>recommend doing (-ing)</strong>!",
            "examplesTitle": "Climate Policy & Debate Examples",
            "examples": [
              "<em>\"European transport ministers suggested <strong>capping</strong> carbon subsidies for short-haul flights.\"</em>",
              "<em>\"The airline coalition agreed <strong>to invest</strong> in hydrogen fuel cell prototypes.\"</em>"
            ]
          },
          "toeic": {
            "stem": "High-speed rail ticket prices remain elevated; ________, passenger ridership has expanded steadily across major European corridors.",
            "options": [
              {
                "letter": "A",
                "text": "furthermore"
              },
              {
                "letter": "B",
                "text": "nevertheless"
              },
              {
                "letter": "C",
                "text": "therefore"
              },
              {
                "letter": "D",
                "text": "because"
              }
            ],
            "correctLetter": "B",
            "correctText": "nevertheless",
            "analysis": "\"Nevertheless\" is a transition adverb of concession/contrast meaning \"in spite of that\", connecting two independent clauses separated by a semicolon.",
            "strategy": "Look at the logical connection: elevated prices vs expanding ridership = contrast. \"Nevertheless\" expresses contrast; \"furthermore\" adds info; \"therefore\" shows cause/effect."
          },
          "resources": [
            {
              "url": "https://www.ipcc.ch",
              "tag": "01 \u2022 Climate Policy Evidence",
              "name": "IPCC Working Group III",
              "desc": "Intergovernmental Panel on Climate Change reports on transport mitigation options and policy mechanisms."
            },
            {
              "url": "https://www.transportenvironment.org",
              "tag": "02 \u2022 Clean Transport Campaign",
              "name": "Transport & Environment (T&E)",
              "desc": "Europe's leading clean transport campaign group with detailed empirical reports on aviation and rail."
            },
            {
              "url": "https://oxfordunion.org",
              "tag": "03 \u2022 Formal Debate Protocols",
              "name": "Oxford Union Debate Archives",
              "desc": "World-renowned debate society archives demonstrating formal argumentation protocols and rebuttal tactics."
            },
            {
              "url": "https://plato.stanford.edu",
              "tag": "04 \u2022 Critical Thinking & Logic",
              "name": "Stanford Encyclopedia of Philosophy",
              "desc": "Peer-reviewed analysis of formal logic, argumentation schemes, fallacies, and cognitive biases."
            },
            {
              "url": "https://ourworldindata.org",
              "tag": "05 \u2022 Global Policy Datasets",
              "name": "Our World in Data: Policy & Regulation",
              "desc": "Long-term data tracking global environmental regulations, public sentiment, and statutory mandates."
            },
            {
              "url": "https://www.etsglobal.org/fr/fr",
              "tag": "06 \u2022 TOEIC Argument Comprehension",
              "name": "ETS Global TOEIC Preparation",
              "desc": "Listening comprehension strategies for identifying disagreement and speaker attitude in business discussions."
            }
          ],
          "pageUrl": "session3/admat2.html",
          "articles": [
            {
              "topic": "Oxford Review of Economic Policy",
              "sourceTag": "Policy Analysis",
              "heading": "The Rhetoric of Climate Policy Negotiations",
              "snippet": "Analyzing discourse markers, persuasive framing, and consensus-building strategies in international climate accords and environmental diplomacy.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://academic.oup.com"
            },
            {
              "topic": "Centre for European Policy Studies (CEPS)",
              "sourceTag": "Economic Briefing",
              "heading": "Economic Trade-Offs in Transport Carbon Taxation",
              "snippet": "A balanced policy briefing modeling passenger demand elasticity, modal shift potential, and economic impacts under escalating carbon levies.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://www.ceps.eu"
            }
          ],
          "toeicQuestions": [
            {
              "stem": "High-speed rail ticket prices remain elevated; ________, passenger ridership has expanded steadily across major European corridors.",
              "options": [
                {
                  "letter": "A",
                  "text": "furthermore"
                },
                {
                  "letter": "B",
                  "text": "nevertheless"
                },
                {
                  "letter": "C",
                  "text": "therefore"
                },
                {
                  "letter": "D",
                  "text": "because"
                }
              ],
              "correctLetter": "B",
              "correctText": "nevertheless",
              "analysis": "\"Nevertheless\" is a transition adverb of concession/contrast meaning \"in spite of that\", connecting two independent clauses separated by a semicolon.",
              "strategy": "Look at the logical connection: elevated prices vs expanding ridership = contrast. \"Nevertheless\" expresses contrast; \"furthermore\" adds info; \"therefore\" shows cause/effect."
            },
            {
              "stem": "Aviation carbon taxes were raised significantly; ________, airline executives accelerated investments into fuel-efficient aircraft fleets.",
              "options": [
                {
                  "letter": "A",
                  "text": "consequently"
                },
                {
                  "letter": "B",
                  "text": "although"
                },
                {
                  "letter": "C",
                  "text": "whereas"
                },
                {
                  "letter": "D",
                  "text": "despite"
                }
              ],
              "correctLetter": "A",
              "correctText": "consequently",
              "analysis": "\"Consequently\" expresses a cause-and-effect result (taxes raised $\rightarrow$ investments accelerated).",
              "strategy": "Connecting semicolon + [TRANSITION] + comma with a cause/effect link requires \"consequently\", \"therefore\", or \"as a result\"."
            },
            {
              "stem": "Domestic short-haul flights produce heavy per-passenger carbon emissions, ________ high-speed trains emit up to ninety percent less carbon.",
              "options": [
                {
                  "letter": "A",
                  "text": "whereas"
                },
                {
                  "letter": "B",
                  "text": "despite"
                },
                {
                  "letter": "C",
                  "text": "in order that"
                },
                {
                  "letter": "D",
                  "text": "so that"
                }
              ],
              "correctLetter": "A",
              "correctText": "whereas",
              "analysis": "\"Whereas\" is a subordinating conjunction of contrast linking two contrasting factual clauses.",
              "strategy": "\"Whereas\" directly links two contrasting clauses (Clause A, whereas Clause B). \"Despite\" cannot be followed by a full clause."
            },
            {
              "stem": "The municipal transport authority expanded pedestrian zones; ________, it introduced discounted monthly transit passes for all students.",
              "options": [
                {
                  "letter": "A",
                  "text": "in addition"
                },
                {
                  "letter": "B",
                  "text": "instead"
                },
                {
                  "letter": "C",
                  "text": "nevertheless"
                },
                {
                  "letter": "D",
                  "text": "unless"
                }
              ],
              "correctLetter": "A",
              "correctText": "in addition",
              "analysis": "\"In addition\" adds another positive measure to the first (additive logical relationship).",
              "strategy": "When the second idea reinforces or supplements the first, choose an additive transition: \"in addition\", \"furthermore\", or \"moreover\"."
            },
            {
              "stem": "Public criticism of the urban road pricing project was vocal; ________, vehicle congestion dropped by eighteen percent within the first quarter.",
              "options": [
                {
                  "letter": "A",
                  "text": "even though"
                },
                {
                  "letter": "B",
                  "text": "however"
                },
                {
                  "letter": "C",
                  "text": "so that"
                },
                {
                  "letter": "D",
                  "text": "due to"
                }
              ],
              "correctLetter": "B",
              "correctText": "however",
              "analysis": "\"However\" is a transitional conjunctive adverb indicating contrast between initial opposition and subsequent positive outcomes.",
              "strategy": "Notice punctuation: [semicolon] + [However] + [comma]. Subordinating conjunctions like \"even though\" cannot take this punctuation."
            }
          ]
        }
      },
      "4": {
        "session": 4,
        "objectives": {
          "title": "Session 4 - Biodiversity in Urban Areas and Airports Objectives",
          "summary": "By the end of this session, you will be able to discuss urban biodiversity and green infrastructure with confidence, use key vocabulary and grammar, and build the skills needed for your TOEIC test and Session 5 evaluation.",
          "items": [
            {
              "num": 1,
              "title": "Practice TOEIC Part 5 Questions on Pronouns & Determiners",
              "description": "Select the correct pronouns (its, their, themselves) and determiners (each, every, either) under timed test conditions."
            },
            {
              "num": 2,
              "title": "Master Core Vocabulary for Urban Nature, Wildlife & Green Spaces",
              "description": "Learn vocabulary for wildlife corridors, green roofs, native species, bird strike prevention, and ecological corridors."
            },
            {
              "num": 3,
              "title": "Use Pronouns & Possessives Correctly for Organizations & Teams",
              "description": "Maintain consistency between singular companies (the airport ... its plan) and plural teams or groups."
            },
            {
              "num": 4,
              "title": "Discuss How Infrastructure Projects Can Protect Living Nature (DDRS)",
              "description": "Examine practical initiatives where transport hubs create protected natural habitats alongside daily operations."
            },
            {
              "num": 5,
              "title": "Finalize Speaking Skills and Timing for the Session 5 Evaluation",
              "description": "Rehearse your individual presentation with a timer, checking your fluency, vocabulary range, and grammar accuracy."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 4 Lesson Plan (2 Hours)",
          "summary": "A 2-hour session agenda combining conversational warm-ups, TOEIC test practice, vocabulary building, speaking activities, and evaluation preparation.",
          "items": [
            {
              "time": "0-15",
              "title": "Conversational Warm-Up: Nature Around Us (15 mins)",
              "description": "Students share observations of urban wildlife, green spaces, and bird control measures at transport hubs."
            },
            {
              "time": "15-45",
              "title": "TOEIC Strategy: Pronouns & Determiners in Part 5 (30 mins)",
              "description": "Fast drills selecting correct pronouns (its, their, each, neither) in professional administrative memos."
            },
            {
              "time": "45-65",
              "title": "Vocabulary Builder: Urban Ecology (20 mins)",
              "description": "Key terms for green roofs, wildlife corridors, native flora, habitat preservation, and ecological surveys."
            },
            {
              "time": "65-110",
              "title": "Structured Discussion & Grammar (45 mins)",
              "description": "Proposing a green infrastructure plan for a local transport hub using Pronouns & Determiners accurately."
            },
            {
              "time": "110-120",
              "title": "Evaluation Practice & Wrap-Up (10 mins)",
              "description": "Timed individual speaking practice with rubric assessment (fluency, pronunciation, range, grammatical control)."
            }
          ]
        },
        "revision": {
          "title": "Session 4: Biodiversity in Urban Areas and Airports",
          "summary": "Review the 18 key terms for Biodiversity in Urban Areas and Airports to build your fluency in discussions, professional reading, and TOEIC practice.",
          "terms": [
            {
              "num": "01",
              "term": "Bird Strike Hazard",
              "definition": "A collision between an airborne animal and an aircraft, posing acute mechanical danger during takeoff and landing."
            },
            {
              "num": "02",
              "term": "Habitat Fragmentation",
              "definition": "The division of expansive natural ecosystems into isolated parcels caused by highway and runway construction."
            },
            {
              "num": "03",
              "term": "Urban Tree Canopy",
              "definition": "The layer of leaves, branches, and stems formed by city trees, providing shade, cooling, and critical habitat for urban wildlife."
            },
            {
              "num": "04",
              "term": "Ecological Corridor",
              "definition": "A designated strip of vegetation linking wildlife populations separated by human infrastructure developments."
            },
            {
              "num": "05",
              "term": "Bioacoustic Deterrent",
              "definition": "Audio equipment broadcasting species-specific distress calls to disperse hazardous birds away from flight paths."
            },
            {
              "num": "06",
              "term": "Wildlife Hazard Management (WHM)",
              "definition": "A mandatory airport safety program systematically cataloging and mitigating animal attractants on airfields."
            },
            {
              "num": "07",
              "term": "Biodiversity Net Gain (BNG)",
              "definition": "A statutory planning requirement ensuring that infrastructure projects leave local natural habitats in a measurably better state."
            },
            {
              "num": "08",
              "term": "Attractant Mitigation",
              "definition": "Eliminating surface water bodies, refuse disposal sites, and roosting perches that attract hazardous wildlife to airfields."
            },
            {
              "num": "09",
              "term": "Grassland Ecology",
              "definition": "The study of short-grass prairie and meadow ecosystems adapted to frequent mowing and disturbed airfield soils."
            },
            {
              "num": "10",
              "term": "Living / Green Roof",
              "definition": "A building roof partially or completely covered with vegetation, creating urban habitats for pollinators and naturally insulating buildings."
            },
            {
              "num": "11",
              "term": "Pollinator Sanctuary",
              "definition": "Protected perimeter areas planted with native wildflowers to foster honeybee and butterfly biodiversity."
            },
            {
              "num": "12",
              "term": "Urban Rewilding",
              "definition": "An environmental conservation approach that restores natural ecological processes and native wilderness areas within cities and suburbs."
            },
            {
              "num": "13",
              "term": "Environmental Impact Assessment (EIA)",
              "definition": "A formal statutory study evaluating the prospective ecological consequences of proposed airport runway expansions."
            },
            {
              "num": "14",
              "term": "Native Vegetation Re-seeding",
              "definition": "Planting indigenous drought-tolerant grass varieties that require minimal mowing and provide unfavorable forage for geese."
            },
            {
              "num": "15",
              "term": "Wetland Preservation",
              "definition": "Protecting natural marshlands that filter surface runoff while engineering deterrents to prevent waterfowl concentration."
            },
            {
              "num": "16",
              "term": "Ecosystem Services",
              "definition": "The essential direct and indirect benefits that natural habitats provide to human society, including air filtration, stormwater management, and cooling."
            },
            {
              "num": "17",
              "term": "Bio-Indicator Species",
              "definition": "Organisms whose health, presence, or population shifts reflect the environmental quality of an entire airport watershed."
            },
            {
              "num": "18",
              "term": "Non-Lethal Harassment",
              "definition": "Trained border collies, pyrotechnics, and laser beams used to non-lethally displace birds from active runways."
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: Urban Rewilding: Bringing Nature Back to Modern Cities",
              "watchUrl": "https://www.youtube.com/watch?v=ouY7Bcs8zTQ",
              "tag": "Urban Ecology",
              "videoId": "ouY7Bcs8zTQ",
              "embedUrl": "https://www.youtube-nocookie.com/embed/ouY7Bcs8zTQ",
              "caption": "Focus: How metropolitan centers are creating living green roofs, urban tree canopies, and wildflower corridors to restore native biodiversity."
            },
            {
              "title": "Video 2: Wildlife Management and Ecological Coexistence at Airfields",
              "watchUrl": "https://www.youtube.com/watch?v=BxVWs5hBDeA",
              "tag": "Airfield Safety",
              "videoId": "BxVWs5hBDeA",
              "embedUrl": "https://www.youtube-nocookie.com/embed/BxVWs5hBDeA",
              "caption": "Focus: How airport safety teams manage avian hazards using bioacoustic deterrents and habitat controls while preserving grassland ecosystems."
            },
            {
              "title": "Video 3: Grammar in Action: Pronouns and Determiners in Environmental Reports",
              "watchUrl": "https://www.youtube.com/watch?v=r6XpFWmA7Gk",
              "tag": "Grammar Focus",
              "videoId": "r6XpFWmA7Gk",
              "embedUrl": "https://www.youtube-nocookie.com/embed/r6XpFWmA7Gk",
              "caption": "Focus: Targeted practice on using demonstrative pronouns, quantifiers, and determiners accurately when summarizing scientific and ecological data."
            }
          ],
          "grammar": {
            "title": "Pronouns & Possessives in Business",
            "badge": "B1\u2013B2 Grammar Focus",
            "patternTitle": "Key Business Rule",
            "formula": "Company / Authority / Organization = ITS (Singular, not \"their\")",
            "rulesTitle": "Core Rules",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. Companies &amp; Authorities use ITS:</strong> A company, airport, or committee is one single organization. Always use <span style=\"font-weight: 700; color: #49739a;\">its</span>, not <em>their</em> (<em>\"The authority released <strong>its</strong> report\"</em>).",
              "<strong style=\"color: #1e293b;\">2. Before a Noun vs. Alone:</strong> Use <span style=\"font-weight: 700; color: #49739a;\">its</span> or <em>their</em> right before a noun (<em>their plan</em>). Use <em>theirs</em> or <em>mine</em> only when there is NO noun after it.",
              "<strong style=\"color: #1e293b;\">3. -self words (itself / themselves):</strong> Use <span style=\"font-weight: 600; color: #334155;\">itself</span> when the subject does something to or by itself (<em>by itself</em>).",
              "<strong style=\"color: #1e293b;\">4. Determiners:</strong> <em>Each</em> / <em>every</em> take singular nouns; <em>other</em> takes plural nouns (<em>other airports</em>); <em>another</em> takes a single noun (<em>another terminal</em>)."
            ],
            "trap": "<strong>\u26a0\ufe0f TOEIC Trap Alert:</strong> <strong>its</strong> vs. <strong>it's</strong>! <em>Its</em> (no apostrophe) shows possession (<em>its report</em>). <em>It's</em> (with apostrophe) means <em>it is</em> or <em>it has</em>. In TOEIC Part 5, almost every blank before a noun needs <strong>its</strong>!",
            "examplesTitle": "Airport Biodiversity Examples",
            "examples": [
              "<em>\"The civil aviation commission updated <strong>its</strong> environmental impact charter for green perimeter zones.\"</em>",
              "<em>\"Urban planners designed the green corridor so that wildlife could navigate the transit hub by <strong>itself</strong>.\"</em>"
            ]
          },
          "toeic": {
            "stem": "Commercial flight operations continued without interruption ________ dense snow accumulation on taxiways throughout the early morning.",
            "options": [
              {
                "letter": "A",
                "text": "although"
              },
              {
                "letter": "B",
                "text": "despite"
              },
              {
                "letter": "C",
                "text": "even though"
              },
              {
                "letter": "D",
                "text": "whereas"
              }
            ],
            "correctLetter": "B",
            "correctText": "despite",
            "analysis": "\"Despite\" is a preposition followed by a noun phrase (\"dense snow accumulation\"). \"Although\" and \"even though\" must be followed by subject + verb.",
            "strategy": "Classic TOEIC Trap: Preposition vs. Conjunction. If followed by Noun Phrase only $\rightarrow$ despite / in spite of. If followed by Subject + Verb $\rightarrow$ although / even though."
          },
          "resources": [
            {
              "url": "https://www.icao.int",
              "tag": "01 \u2022 Aviation Safety Database",
              "name": "ICAO Wildlife Strike Hazard Database",
              "desc": "International Civil Aviation Organization official data on bird strike prevention and reporting standards."
            },
            {
              "url": "https://www.iucnredlist.org",
              "tag": "02 \u2022 Global Conservation Union",
              "name": "IUCN Red List of Threatened Species",
              "desc": "International Union for Conservation of Nature global species extinction risk metrics and habitat data."
            },
            {
              "url": "https://aci.aero",
              "tag": "03 \u2022 Airport Sustainability",
              "name": "Airports Council International (ACI World)",
              "desc": "ACI World Sustainability and Environmental Management guidelines for commercial airports."
            },
            {
              "url": "https://www.birdlife.org",
              "tag": "04 \u2022 Avian Conservation Network",
              "name": "BirdLife International",
              "desc": "Global partnership protecting bird populations, migratory flyways, and critical conservation areas."
            },
            {
              "url": "https://www.eea.europa.eu",
              "tag": "05 \u2022 European Biodiversity Data",
              "name": "European Environment Agency Nature Portal",
              "desc": "State of European nature reports and protected Natura 2000 network conservation data."
            },
            {
              "url": "https://www.etsglobal.org/fr/fr",
              "tag": "06 \u2022 TOEIC Scientific Reading",
              "name": "ETS Global TOEIC Preparation",
              "desc": "Technical reading practice with scientific environmental impact assessments and conservation reports."
            }
          ],
          "pageUrl": "session4/admat2.html",
          "articles": [
            {
              "topic": "European Environment Agency (EEA)",
              "sourceTag": "Environmental Briefing",
              "heading": "Urban Greening and Biodiversity in European Cities",
              "snippet": "Assessing how tree canopy expansion, rooftop gardens, and urban wetlands enhance ecological resilience and mitigate heat stress across metropolitan regions.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://www.eea.europa.eu"
            },
            {
              "topic": "Airport World Technical Review",
              "sourceTag": "Aviation Ecology",
              "heading": "Balancing Airfield Safety Standards with Habitat Conservation",
              "snippet": "Operational guidelines for airport environmental managers reconciling mandatory wildlife hazard controls with local biodiversity net gain objectives.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://airport-world.com"
            }
          ],
          "toeicQuestions": [
            {
              "stem": "Commercial flight operations continued without interruption ________ dense snow accumulation on taxiways throughout the early morning.",
              "options": [
                {
                  "letter": "A",
                  "text": "although"
                },
                {
                  "letter": "B",
                  "text": "despite"
                },
                {
                  "letter": "C",
                  "text": "even though"
                },
                {
                  "letter": "D",
                  "text": "whereas"
                }
              ],
              "correctLetter": "B",
              "correctText": "despite",
              "analysis": "\"Despite\" is a preposition followed by a noun phrase (\"dense snow accumulation\"). \"Although\" and \"even though\" must be followed by subject + verb.",
              "strategy": "Classic TOEIC Trap: Preposition vs. Conjunction. If followed by Noun Phrase only $\rightarrow$ despite / in spite of. If followed by Subject + Verb $\rightarrow$ although / even though."
            },
            {
              "stem": "The airport environment team constructed wildflower habitats around airfields ________ local bird nesting could be diverted safely away from flight paths.",
              "options": [
                {
                  "letter": "A",
                  "text": "so that"
                },
                {
                  "letter": "B",
                  "text": "in order to"
                },
                {
                  "letter": "C",
                  "text": "because of"
                },
                {
                  "letter": "D",
                  "text": "despite"
                }
              ],
              "correctLetter": "A",
              "correctText": "so that",
              "analysis": "\"So that\" introduces a clause of purpose containing subject + modal verb (\"could be diverted\"). \"In order to\" must be followed directly by a base verb.",
              "strategy": "Purpose structure: \"so that\" + [Subject + modal + verb]; \"in order to\" + [base verb]."
            },
            {
              "stem": "Several incoming flights were diverted to alternate airfields ________ severe crosswinds exceeding forty-five knots.",
              "options": [
                {
                  "letter": "A",
                  "text": "because"
                },
                {
                  "letter": "B",
                  "text": "owing to"
                },
                {
                  "letter": "C",
                  "text": "although"
                },
                {
                  "letter": "D",
                  "text": "whereas"
                }
              ],
              "correctLetter": "B",
              "correctText": "owing to",
              "analysis": "\"Owing to\" is a preposition meaning \"because of\", followed by a noun phrase (\"severe crosswinds\").",
              "strategy": "\"Because of\", \"owing to\", and \"due to\" take noun phrases. \"Because\" must take a full clause with subject and verb."
            },
            {
              "stem": "________ the airport expanded its passenger terminal capacity, it succeeded in maintaining net-zero airfield carbon neutrality.",
              "options": [
                {
                  "letter": "A",
                  "text": "Despite"
                },
                {
                  "letter": "B",
                  "text": "Even though"
                },
                {
                  "letter": "C",
                  "text": "Because of"
                },
                {
                  "letter": "D",
                  "text": "In spite of"
                }
              ],
              "correctLetter": "B",
              "correctText": "Even though",
              "analysis": "\"Even though\" is a subordinating conjunction followed by a full clause with subject (\"the airport\") and verb (\"expanded\").",
              "strategy": "Check what follows: \"the airport expanded\" is Subject + Verb $\rightarrow$ choose \"Even though\" (conjunction), not \"Despite\" (preposition)."
            },
            {
              "stem": "Biological retention ponds were built across the airport perimeter ________ prevent de-icing fluid runoff from infiltrating local river systems.",
              "options": [
                {
                  "letter": "A",
                  "text": "in order to"
                },
                {
                  "letter": "B",
                  "text": "so that"
                },
                {
                  "letter": "C",
                  "text": "because"
                },
                {
                  "letter": "D",
                  "text": "owing to"
                }
              ],
              "correctLetter": "A",
              "correctText": "in order to",
              "analysis": "\"In order to\" expresses purpose and is followed directly by the base verb \"prevent\".",
              "strategy": "Formula: \"in order to\" + [base verb]. Never choose \"so that\" directly before a bare infinitive."
            }
          ]
        }
      }
    }
  },
  "3": {
    "id": 3,
    "name": "Module 3",
    "title": "New Technology",
    "ddrs": {
      "title": "D\u00e9veloppement Durable & Responsabilit\u00e9 Soci\u00e9tale : Tags et D\u00e9finitions Officielles",
      "summary": "Le R\u00e9f\u00e9rentiel National DD&RS de l'Enseignement Sup\u00e9rieur et de la Recherche (Label DD&RS) structure les engagements \u00e9cologiques, soci\u00e9taux et \u00e9thiques des \u00e9tablissements et des grands projets de transport selon 5 axes strat\u00e9giques et leurs domaines transversaux d'application.",
      "pageUrl": "ddrs3.html",
      "axes": [
        {
          "badge": "Axe 1",
          "num": "1.",
          "title": "Gouvernance et Strat\u00e9gie",
          "desc": "Int\u00e9gration du d\u00e9veloppement durable dans la vision, le projet d'\u00e9tablissement et le pilotage d\u00e9cisionnel. Dialogue continu avec les parties prenantes (\u00e9tudiants, personnels, collectivit\u00e9s, partenaires), allocation de budgets d\u00e9di\u00e9s et suivi d'indicateurs d'impact mesurables."
        },
        {
          "badge": "Axe 2",
          "num": "2.",
          "title": "Formation et P\u00e9dagogie",
          "desc": "Sensibilisation et formation de 100 % des apprenants aux enjeux de la transition socio-\u00e9cologique (limites plan\u00e9taires, climat, biodiversit\u00e9). Int\u00e9gration transversale des comp\u00e9tences DD&RS (rapport Jouzel / socle MESR) pour pr\u00e9parer les ing\u00e9nieurs \u00e0 la prise de d\u00e9cision \u00e9thique et responsable."
        },
        {
          "badge": "Axe 3",
          "num": "3.",
          "title": "Recherche et Innovation",
          "desc": "Orientation et valorisation de l'activit\u00e9 scientifique et technologique en r\u00e9ponse aux Objectifs de D\u00e9veloppement Durable (ODD). Soutien aux programmes interdisciplinaires, recherche sobre et responsable, \u00e9co-conception et transfert de technologies vertes au service de la soci\u00e9t\u00e9."
        },
        {
          "badge": "Axe 4",
          "num": "4.",
          "title": "Gestion Environnementale",
          "desc": "Ma\u00eetrise et r\u00e9duction continue des impacts \u00e9cologiques directs : d\u00e9carbonation des mobilit\u00e9s pendulaires et professionnelles, efficacit\u00e9 et sobri\u00e9t\u00e9 \u00e9nerg\u00e9tique du patrimoine b\u00e2ti, gestion circulaire des d\u00e9chets, pr\u00e9servation de la biodiversit\u00e9 sur site et achats publics responsables."
        },
        {
          "badge": "Axe 5",
          "num": "5.",
          "title": "Politique Sociale et Inclusion",
          "desc": "Engagement institutionnel pour la responsabilit\u00e9 soci\u00e9tale : \u00e9galit\u00e9 professionnelle femmes-hommes, inclusion et accessibilit\u00e9 des personnes en situation de handicap, \u00e9galit\u00e9 des chances, am\u00e9lioration de la qualit\u00e9 de vie et sant\u00e9 globale, et pr\u00e9vention de toute forme de discrimination."
        }
      ],
      "items": [
        {
          "badge": "Axe 1",
          "num": "1.",
          "title": "Gouvernance et Strat\u00e9gie",
          "desc": "Int\u00e9gration du d\u00e9veloppement durable dans la vision, le projet d'\u00e9tablissement et le pilotage d\u00e9cisionnel. Dialogue continu avec les parties prenantes (\u00e9tudiants, personnels, collectivit\u00e9s, partenaires), allocation de budgets d\u00e9di\u00e9s et suivi d'indicateurs d'impact mesurables.",
          "isMuted": false
        },
        {
          "badge": "Axe 2",
          "num": "2.",
          "title": "Formation et P\u00e9dagogie",
          "desc": "Sensibilisation et formation de 100 % des apprenants aux enjeux de la transition socio-\u00e9cologique (limites plan\u00e9taires, climat, biodiversit\u00e9). Int\u00e9gration transversale des comp\u00e9tences DD&amp;RS (rapport Jouzel / socle MESR) pour pr\u00e9parer les ing\u00e9nieurs \u00e0 la prise de d\u00e9cision \u00e9thique et responsable.",
          "isMuted": false
        },
        {
          "badge": "Axe 3",
          "num": "3.",
          "title": "Recherche et Innovation",
          "desc": "Orientation et valorisation de l'activit\u00e9 scientifique et technologique en r\u00e9ponse aux Objectifs de D\u00e9veloppement Durable (ODD). Soutien aux programmes interdisciplinaires, recherche sobre et responsable, \u00e9co-conception et transfert de technologies vertes au service de la soci\u00e9t\u00e9.",
          "isMuted": false
        },
        {
          "badge": "Axe 4",
          "num": "4.",
          "title": "Gestion Environnementale",
          "desc": "Ma\u00eetrise et r\u00e9duction continue des impacts \u00e9cologiques directs : d\u00e9carbonation des mobilit\u00e9s pendulaires et professionnelles, efficacit\u00e9 et sobri\u00e9t\u00e9 \u00e9nerg\u00e9tique du patrimoine b\u00e2ti, gestion circulaire des d\u00e9chets, pr\u00e9servation de la biodiversit\u00e9 sur site et achats publics responsables.",
          "isMuted": false
        },
        {
          "badge": "Axe 5",
          "num": "5.",
          "title": "Politique Sociale et Inclusion",
          "desc": "Engagement institutionnel pour la responsabilit\u00e9 soci\u00e9tale : \u00e9galit\u00e9 professionnelle femmes-hommes, inclusion et accessibilit\u00e9 des personnes en situation de handicap, \u00e9galit\u00e9 des chances, am\u00e9lioration de la qualit\u00e9 de vie et sant\u00e9 globale, et pr\u00e9vention de toute forme de discrimination.",
          "isMuted": true
        },
        {
          "badge": "Tag",
          "num": "6.",
          "title": "Mobilit\u00e9 Durable &amp; Report Modal (Sustainable Mobility)",
          "desc": "Strat\u00e9gie d'optimisation des transports articul\u00e9e autour de la hi\u00e9rarchie \u00ab \u00c9viter - Transf\u00e9rer - Am\u00e9liorer \u00bb (ASI). Promotion active du report modal vers le ferroviaire, les transports en commun et les mobilit\u00e9s douces face \u00e0 l'autosolisme et aux vols court-courriers.",
          "isMuted": true
        },
        {
          "badge": "Tag",
          "num": "7.",
          "title": "Bilan d'\u00c9missions de GES (BEGES / Bilan Carbone)",
          "desc": "Comptabilisation r\u00e9glementaire des gaz \u00e0 effet de serre (m\u00e9thode ADEME / ISO 14064) sur les trois p\u00e9rim\u00e8tres : Scope 1 (\u00e9missions directes), Scope 2 (\u00e9missions indirectes \u00e9nerg\u00e9tiques) et Scope 3 (\u00e9missions indirectes amont/aval : d\u00e9placements, achats, logistique et cycle de vie).",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "8.",
          "title": "Sobri\u00e9t\u00e9 \u00c9nerg\u00e9tique &amp; Efficacit\u00e9",
          "desc": "D\u00e9marche articulant la sobri\u00e9t\u00e9 (questionnement et r\u00e9duction des consommations par la modification des comportements et des usages collectifs) et l'efficacit\u00e9 (optimisation technique des rendements \u00e9nerg\u00e9tiques pour un m\u00eame niveau de service).",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "9.",
          "title": "Pr\u00e9servation de la Biodiversit\u00e9 &amp; Z\u00e9ro Artificialisation Nette (ZAN)",
          "desc": "Protection des \u00e9cosyst\u00e8mes et des continuit\u00e9s \u00e9cologiques (trames vertes et bleues). Application des exigences l\u00e9gales (loi Climat et R\u00e9silience) visant \u00e0 stopper la disparition nette d'espaces naturels et agricoles caus\u00e9e par les infrastructures et l'am\u00e9nagement.",
          "isMuted": true
        },
        {
          "badge": "Tag",
          "num": "10.",
          "title": "\u00c9quit\u00e9 Territoriale &amp; Accessibilit\u00e9 (Territorial Equity)",
          "desc": "Principe de justice spatiale garantissant un acc\u00e8s universel, abordable et s\u00e9curis\u00e9 aux r\u00e9seaux de transport et aux services d'int\u00e9r\u00eat g\u00e9n\u00e9ral pour l'ensemble des territoires (urbains, p\u00e9riurbains et ruraux), luttant contre la fracture et la pr\u00e9carit\u00e9 mobilit\u00e9.",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "11.",
          "title": "Achats Responsables &amp; Analyse du Cycle de Vie (ACV / LCA)",
          "desc": "Int\u00e9gration syst\u00e9matique de crit\u00e8res environnementaux et sociaux dans la commande publique et priv\u00e9e. \u00c9valuation globale des impacts de chaque produit, infrastructure ou service de son extraction jusqu'\u00e0 son recyclage ou \u00e9limination finale.",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "12.",
          "title": "Objectifs de D\u00e9veloppement Durable (ODD - Agenda 2030)",
          "desc": "Cadre universel des Nations Unies comprenant 17 objectifs interd\u00e9pendants pour concilier prosp\u00e9rit\u00e9 \u00e9conomique, progr\u00e8s social et protection de la biosph\u00e8re. Les politiques de transport et d'ing\u00e9nierie s'articulent principalement autour des ODD 9, 11, 12 et 13.",
          "isMuted": false
        }
      ]
    },
    "sessions": {
      "1": {
        "session": 1,
        "objectives": {
          "title": "Session 1 - Artificial Intelligence Objectives",
          "summary": "By the end of this session, you will be able to discuss artificial intelligence and automation in everyday life and workplaces with confidence, use key vocabulary and grammar, and build the skills needed for your TOEIC test and Session 5 evaluation.",
          "items": [
            {
              "num": 1,
              "title": "Practice Reading TOEIC Technology Notices & Emails",
              "description": "Read technical announcements, office memos, and software update notices typical of TOEIC Part 7."
            },
            {
              "num": 2,
              "title": "Master Everyday AI & Automation Vocabulary",
              "description": "Learn and use key terms for machine learning, predictive tools, autonomous systems, and digital assistants."
            },
            {
              "num": 3,
              "title": "Understand Active vs. Passive Voice in Technical English",
              "description": "Identify when an action is done by a system (active) versus to a system (passive: is tested, must be reviewed)."
            },
            {
              "num": 4,
              "title": "Evaluate AI Ethics, Employment & Social Impact (DDRS)",
              "description": "Discuss how artificial intelligence affects employment, data privacy, and ethical decision-making in society."
            },
            {
              "num": 5,
              "title": "Build Fluency for the Session 5 Evaluation",
              "description": "Practice expressing opinions and evaluating technology trends clearly in pair and group discussions."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 1 Lesson Plan (2 Hours)",
          "summary": "A 2-hour session agenda combining conversational warm-ups, TOEIC test practice, vocabulary building, speaking activities, and evaluation preparation.",
          "items": [
            {
              "time": "0-15",
              "title": "Conversational Warm-Up: AI in Daily Life (15 mins)",
              "description": "Students discuss which AI tools they use regularly and whether AI improves their productivity or creates challenges."
            },
            {
              "time": "15-45",
              "title": "TOEIC Strategy: Tech Notices & Work Memos (30 mins)",
              "description": "Practice reading workplace IT guidelines, software rollouts, and tech policy announcements in Part 6 and 7."
            },
            {
              "time": "45-65",
              "title": "Vocabulary Builder: Automation & Intelligence (20 mins)",
              "description": "Everyday terms for algorithms, machine learning, predictive analytics, automation, and algorithmic bias."
            },
            {
              "time": "65-110",
              "title": "Structured Discussion & Grammar (45 mins)",
              "description": "Discuss the social and job impacts of AI using the Passive Voice (data is collected, decisions are made by algorithms)."
            },
            {
              "time": "110-120",
              "title": "Debrief, Evaluation Prep & Wrap-Up (10 mins)",
              "description": "Language review, feedback on passive voice accuracy, and Session 5 evaluation rubric check."
            }
          ]
        },
        "revision": {
          "title": "Session 1: Artificial Intelligence",
          "summary": "Review the 18 key terms for Artificial Intelligence to build your fluency in discussions, professional reading, and TOEIC practice.",
          "terms": [
            {
              "num": "01",
              "term": "Predictive Maintenance",
              "definition": "Using sensor telemetry and machine learning models to forecast equipment failures before costly breakdowns occur in industrial and transport systems."
            },
            {
              "num": "02",
              "term": "Machine Learning (ML)",
              "definition": "Algorithms that train statistical models on historical data to identify patterns and make predictions without explicit rules."
            },
            {
              "num": "03",
              "term": "Neural Network",
              "definition": "A computational model inspired by biological brains, composed of layered interconnected nodes that process complex data."
            },
            {
              "num": "04",
              "term": "Digital Twin",
              "definition": "A virtual real-time digital replica of a physical machine, building, or transport system used to simulate stress, wear, and performance."
            },
            {
              "num": "05",
              "term": "Human-in-the-Loop (HITL)",
              "definition": "A system architecture where an automated algorithm requires human operator validation before executing critical actions."
            },
            {
              "num": "06",
              "term": "Algorithmic Bias",
              "definition": "Systematic and unfair discriminatory outcomes in automated decisions caused by skewed training datasets."
            },
            {
              "num": "07",
              "term": "Computer Vision",
              "definition": "AI technology enabling computers and automated software to analyze, interpret, and extract meaningful data from digital images and real-time video feeds."
            },
            {
              "num": "08",
              "term": "Generative AI",
              "definition": "Artificial intelligence systems (such as large language models and image generators) capable of creating original text, images, code, or media from human prompts."
            },
            {
              "num": "09",
              "term": "Natural Language Processing (NLP)",
              "definition": "Algorithms enabling computers to parse, understand, interpret, and generate human speech and written language across software applications."
            },
            {
              "num": "10",
              "term": "Compute Carbon Footprint",
              "definition": "The substantial electrical energy and greenhouse emissions produced by massive AI model training data centers."
            },
            {
              "num": "11",
              "term": "Explainable AI (XAI)",
              "definition": "Machine learning models designed so that human engineers can clearly understand and audit how decisions were reached."
            },
            {
              "num": "12",
              "term": "Workplace Automation",
              "definition": "The application of AI algorithms, software bots, and robotic systems to perform repetitive professional and administrative tasks previously handled by humans."
            },
            {
              "num": "13",
              "term": "Deterministic Algorithm",
              "definition": "A computational process that produces the exact same output every time given a specific set of input parameters."
            },
            {
              "num": "14",
              "term": "AI Hallucination",
              "definition": "An occurrence where a generative AI model creates incorrect, fabricated, or nonsensical information while presenting it with high grammatical confidence."
            },
            {
              "num": "15",
              "term": "Synthetic Training Data",
              "definition": "Artificially generated computer datasets used to train machine learning models on complex, rare, or safety-critical scenarios without real-world risk."
            },
            {
              "num": "16",
              "term": "Black Box Algorithm",
              "definition": "A deep neural network whose internal decision weights cannot be directly inspected or explained by human operators."
            },
            {
              "num": "17",
              "term": "Cyber-Physical Security",
              "definition": "Protecting integrated AI software and physical avionics hardware from malicious interference or spoofing."
            },
            {
              "num": "18",
              "term": "Ethical AI Guidelines",
              "definition": "Formal regulatory standards, transparency rules, and corporate governance frameworks designed to ensure artificial intelligence is deployed safely, equitably, and without bias."
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: How Artificial Intelligence Actually Works",
              "watchUrl": "https://www.youtube.com/watch?v=aircAruvnKk",
              "tag": "AI Fundamentals",
              "videoId": "aircAruvnKk",
              "embedUrl": "https://www.youtube-nocookie.com/embed/aircAruvnKk",
              "caption": "Focus: Accessible breakdown of machine learning algorithms, deep neural networks, and how models process complex data patterns."
            },
            {
              "title": "Video 2: Generative AI & The Future of Everyday Work",
              "watchUrl": "https://www.youtube.com/watch?v=DVpTpx9Avf0",
              "tag": "Workplace Tech",
              "videoId": "DVpTpx9Avf0",
              "embedUrl": "https://www.youtube-nocookie.com/embed/DVpTpx9Avf0",
              "caption": "Focus: Exploring how large language models and automated bots are transforming professional workflows and everyday administrative tasks."
            },
            {
              "title": "Video 3: Active vs. Passive Voice in Technology Reports",
              "watchUrl": "https://www.youtube.com/watch?v=nI5zaB6QL-o",
              "tag": "Grammar Focus",
              "videoId": "nI5zaB6QL-o",
              "embedUrl": "https://www.youtube-nocookie.com/embed/nI5zaB6QL-o",
              "caption": "Focus: Targeted practice on using the passive voice accurately to describe automated technical processes, algorithms, and system outputs."
            }
          ],
          "grammar": {
            "title": "Active vs. Passive Voice",
            "badge": "B1\u2013B2 Grammar Focus",
            "patternTitle": "How Both Voices Work",
            "formula": "Active: Subject + Action + Object | Passive: Receiver + [be] + Past Participle (V3)",
            "rulesTitle": "Core Distinction",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. Active Voice (Subject does the action):</strong> Use when you want to focus on who or what does the work (<span style=\"font-weight: 700; color: #60854b;\">\"Engineers test the software\"</span>).",
              "<strong style=\"color: #1e293b;\">2. Passive Voice (Subject receives the action):</strong> Formed with <span style=\"font-weight: 700; color: #60854b;\">[be] + Past Participle (V3)</span>. Very common in aviation manuals and safety reports when the result is more important than who did it (<em>\"The software is tested\"</em>).",
              "<strong style=\"color: #1e293b;\">3. Passive with Modal Verbs:</strong> Formed with <span style=\"font-weight: 600; color: #334155;\">modal + be + Past Participle</span> (e.g., <em>must be tested</em>, <em>should be updated</em>, <em>can be operated</em>)."
            ],
            "trap": "<strong>\u26a0\ufe0f TOEIC Trap Alert:</strong> Check who does the action! If the subject is an object that cannot act on its own (like source code, a report, or equipment), and is followed by <em>\"by...\"</em>, you need the <strong>passive voice ([be] + V3)</strong>!",
            "examplesTitle": "Aviation & AI Examples",
            "examples": [
              "<em>\"Flight telemetry data <strong>is analyzed</strong> by deep learning models in real time.\" (Passive)</em>",
              "<em>\"Avionics engineers <strong>calibrated</strong> the autopilot sensor array before takeoff.\" (Active)</em>"
            ]
          },
          "toeic": {
            "stem": "By the end of this fiscal year, automated baggage tracking systems ________ at three major international hub terminals.",
            "options": [
              {
                "letter": "A",
                "text": "will install"
              },
              {
                "letter": "B",
                "text": "will have been installed"
              },
              {
                "letter": "C",
                "text": "were installed"
              },
              {
                "letter": "D",
                "text": "have installed"
              }
            ],
            "correctLetter": "B",
            "correctText": "will have been installed",
            "analysis": "The time expression \"By the end of [future time]\" requires the Future Perfect (\"will have been + V3\"), especially in passive voice.",
            "strategy": "Time marker \"By + future point\" triggers the Future Perfect (will have + V3). Add \"been\" when the subject receives the action."
          },
          "resources": [
            {
              "url": "https://partnershiponai.org",
              "tag": "01 \u2022 Global AI Ethics",
              "name": "Partnership on AI",
              "desc": "Global non-profit multi-stakeholder organization developing best practices and ethical standards for artificial intelligence."
            },
            {
              "url": "https://digital-strategy.ec.europa.eu",
              "tag": "02 \u2022 EU Regulatory Framework",
              "name": "European Commission AI Act",
              "desc": "The world's first comprehensive legal framework regulating high-risk AI applications and transparency mandates."
            },
            {
              "url": "https://www.computer.org",
              "tag": "03 \u2022 Computing Research Society",
              "name": "IEEE Computer Society",
              "desc": "Leading technical community for computing professionals developing standards for machine learning and systems engineering."
            },
            {
              "url": "https://hai.stanford.edu",
              "tag": "04 \u2022 Stanford AI Index",
              "name": "Stanford Institute for Human-Centered AI (HAI)",
              "desc": "Interdisciplinary research institute tracking annual metrics on AI capabilities, ethics, investment, and societal impacts."
            },
            {
              "url": "https://ourworldindata.org/artificial-intelligence",
              "tag": "05 \u2022 Technological Change Data",
              "name": "Our World in Data: Artificial Intelligence",
              "desc": "Comprehensive empirical datasets and interactive visualizations tracking global AI development, compute costs, and performance."
            },
            {
              "url": "https://www.etsglobal.org/fr/fr",
              "tag": "06 \u2022 TOEIC Passive Voice Reading",
              "name": "ETS Global TOEIC Preparation",
              "desc": "Business English reading and listening comprehension practice with office automation notices and technical procedure memos."
            }
          ],
          "pageUrl": "session1/admat3.html",
          "articles": [
            {
              "topic": "MIT Technology Review",
              "sourceTag": "Industry Analysis",
              "heading": "Generative AI and the Transformation of Modern Workplaces",
              "snippet": "Analyzing how enterprise deployment of generative AI tools reshapes professional productivity, human-in-the-loop workflows, and ethical benchmarks.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://www.technologyreview.com"
            },
            {
              "topic": "International Energy Agency (IEA)",
              "sourceTag": "Environmental Briefing",
              "heading": "The Compute Carbon Footprint: Data Centers and Energy Demands",
              "snippet": "Assessing the soaring electrical energy and water cooling demands required to train and deploy modern large-scale artificial intelligence models.",
              "readTime": "Estimated read: 6-8 mins",
              "url": "https://www.iea.org"
            }
          ],
          "toeicQuestions": [
            {
              "stem": "By the end of this fiscal year, automated baggage tracking systems ________ at three major international hub terminals.",
              "options": [
                {
                  "letter": "A",
                  "text": "will install"
                },
                {
                  "letter": "B",
                  "text": "will have been installed"
                },
                {
                  "letter": "C",
                  "text": "were installed"
                },
                {
                  "letter": "D",
                  "text": "have installed"
                }
              ],
              "correctLetter": "B",
              "correctText": "will have been installed",
              "analysis": "The time expression \"By the end of [future time]\" requires the Future Perfect (\"will have been + V3\"), especially in passive voice.",
              "strategy": "Time marker \"By + future point\" triggers the Future Perfect (will have + V3). Add \"been\" when the subject receives the action."
            },
            {
              "stem": "Predictive maintenance algorithms ________ aircraft technical teams to identify component wear before mechanical faults develop.",
              "options": [
                {
                  "letter": "A",
                  "text": "enable"
                },
                {
                  "letter": "B",
                  "text": "enabling"
                },
                {
                  "letter": "C",
                  "text": "enabler"
                },
                {
                  "letter": "D",
                  "text": "ably"
                }
              ],
              "correctLetter": "A",
              "correctText": "enable",
              "analysis": "The sentence requires a finite verb in the present tense matching plural subject \"algorithms\" (\"enable someone to do something\").",
              "strategy": "Every English sentence requires a finite verb. Gerunds (-ing) without auxiliaries and nouns cannot act as main verbs."
            },
            {
              "stem": "Autonomous electric ramp tractors ________ into routine cargo operations at Lyon-Saint Exup\u00e9ry Airport by 2028.",
              "options": [
                {
                  "letter": "A",
                  "text": "are integrating"
                },
                {
                  "letter": "B",
                  "text": "will be integrated"
                },
                {
                  "letter": "C",
                  "text": "were integrating"
                },
                {
                  "letter": "D",
                  "text": "has integrated"
                }
              ],
              "correctLetter": "B",
              "correctText": "will be integrated",
              "analysis": "Future timeframe (\"by 2028\") and passive voice (tractors do not integrate themselves) require future passive \"will be integrated\".",
              "strategy": "Check time (2028 = future) + voice (tractors are integrated = passive). Pick will be + V3."
            },
            {
              "stem": "The engineering team will initiate automated drone runway sweeps as soon as European aviation safety clearance ________ received.",
              "options": [
                {
                  "letter": "A",
                  "text": "is"
                },
                {
                  "letter": "B",
                  "text": "will be"
                },
                {
                  "letter": "C",
                  "text": "was"
                },
                {
                  "letter": "D",
                  "text": "has been"
                }
              ],
              "correctLetter": "A",
              "correctText": "is",
              "analysis": "In time clauses introduced by \"as soon as\", \"when\", or \"until\", use the Present Simple tense even when the main clause refers to the future.",
              "strategy": "Rule: Never use \"will\" in a time clause (when, as soon as, once, after). Use Present Simple: \"as soon as clearance is received\"."
            },
            {
              "stem": "Within the next five years, machine learning models ________ flight flight-altitude planning to minimize contrail formation.",
              "options": [
                {
                  "letter": "A",
                  "text": "optimize"
                },
                {
                  "letter": "B",
                  "text": "will optimize"
                },
                {
                  "letter": "C",
                  "text": "were optimizing"
                },
                {
                  "letter": "D",
                  "text": "have optimized"
                }
              ],
              "correctLetter": "B",
              "correctText": "will optimize",
              "analysis": "The future time frame \"Within the next five years\" requires a simple future prediction: \"will optimize\".",
              "strategy": "\"Within the next [years/months]\" refers to future events $\rightarrow$ choose \"will + base verb\"."
            }
          ]
        }
      },
      "2": {
        "session": 2,
        "objectives": {
          "title": "Session 2 - Future of travel Objectives",
          "summary": "By the end of this session, you will be able to discuss the future of travel with confidence, use key vocabulary and grammar, and build the skills needed for your TOEIC test and Session 5 evaluation.",
          "items": [
            {
              "num": 1,
              "title": "Practice TOEIC Listening Part 3: Business & Innovation Discussions",
              "description": "Catch key details and technical specifications in conversations between engineers, planners, and clients."
            },
            {
              "num": 2,
              "title": "Master Vocabulary for Future Mobility, Electric Vehicles & Clean Energy",
              "description": "Learn and use words for battery range, hydrogen fuel cells, autonomous shuttles, and charging infrastructure."
            },
            {
              "num": 3,
              "title": "Form and Use Comparatives & Degree Words (much faster, more costly than)",
              "description": "Use comparative adjectives and degree modifiers (far more efficient, slightly slower) to compare transit technologies."
            },
            {
              "num": 4,
              "title": "Analyze the Long-Term Environmental Benefits of Future Transit (DDRS)",
              "description": "Weigh the life-cycle carbon savings of electric and hydrogen systems against the resources needed to build them."
            },
            {
              "num": 5,
              "title": "Present Your Vision of Future Transportation in Pairs",
              "description": "Describe and defend an innovative transit idea in paired presentations, focusing on fluency and convincing delivery."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 2 Lesson Plan (2 Hours)",
          "summary": "A 2-hour session agenda combining conversational warm-ups, TOEIC test practice, vocabulary building, speaking activities, and evaluation preparation.",
          "items": [
            {
              "time": "0-15",
              "title": "Conversational Warm-Up: Travel in 2050 (15 mins)",
              "description": "In pairs, students predict how long-distance travel will look in 30 years and brainstorm emerging technologies."
            },
            {
              "time": "15-45",
              "title": "TOEIC Strategy: Listening to Product Pitches (30 mins)",
              "description": "Practice Part 3 conversations featuring tech presentations, innovation pitches, and investment decisions."
            },
            {
              "time": "45-65",
              "title": "Vocabulary Builder: Next-Gen Mobility (20 mins)",
              "description": "High-frequency terms for autonomous vehicles, hydrogen fuel cells, eVTOL shuttles, and charging networks."
            },
            {
              "time": "65-110",
              "title": "Structured Discussion & Grammar (45 mins)",
              "description": "Pitching and comparing future transport modes using Comparatives and Superlatives (far cleaner than, the most cost-effective)."
            },
            {
              "time": "110-120",
              "title": "Debrief, Evaluation Prep & Wrap-Up (10 mins)",
              "description": "Teacher language points, peer feedback on pitch clarity, and personal study targets."
            }
          ]
        },
        "revision": {
          "title": "Session 2: Future of travel",
          "summary": "Review the 18 key terms for Future of travel to build your fluency in discussions, professional reading, and TOEIC practice.",
          "terms": [
            {
              "num": "01",
              "term": "Electric Vertical Take-Off (eVTOL)",
              "definition": "Aircraft utilizing distributed electric propulsion to take off and land vertically, designed for urban air mobility."
            },
            {
              "num": "02",
              "term": "Urban Air Mobility (UAM)",
              "definition": "A safe and efficient aviation transit system for passenger and cargo transport across metropolitan airspace."
            },
            {
              "num": "03",
              "term": "Sustainable Aviation Fuel (SAF)",
              "definition": "Drop-in bio-based or synthetic fuels compatible with existing turbines, reducing net carbon lifecycle emissions by up to 80%."
            },
            {
              "num": "04",
              "term": "Hydrogen Fuel Cell",
              "definition": "An electrochemical device combining hydrogen and oxygen to produce electricity with water vapor as the sole byproduct."
            },
            {
              "num": "05",
              "term": "Vertiport",
              "definition": "A dedicated airport facility designed specifically for vertical take-off and landing passenger aircraft operations."
            },
            {
              "num": "06",
              "term": "Energy Density",
              "definition": "The amount of energy stored per unit mass in an aviation battery or fuel, a critical metric for flight range."
            },
            {
              "num": "07",
              "term": "High-Speed Rail Expansion",
              "definition": "The development and integration of high-speed passenger train networks (over 250 km/h) engineered to replace short-haul domestic and regional flights."
            },
            {
              "num": "08",
              "term": "Supersonic Transport (SST)",
              "definition": "Aircraft capable of cruising faster than the speed of sound (Mach 1.0) with low-boom aerodynamic profiling."
            },
            {
              "num": "09",
              "term": "Hyperloop Concept",
              "definition": "A sealed low-pressure tube transit system propelling levitating pods at near-aviation speeds using linear motors."
            },
            {
              "num": "10",
              "term": "Acoustic Footprint",
              "definition": "The geographic area exposed to aircraft noise levels during urban take-off, hover, and approach procedures."
            },
            {
              "num": "11",
              "term": "Solid-State Battery",
              "definition": "Next-generation batteries employing solid electrolytes to achieve higher energy densities and reduced thermal runaway risk."
            },
            {
              "num": "12",
              "term": "Modal Shift",
              "definition": "A policy and behavioral transition where travelers switch from high-carbon transport modes (private cars and flights) to lower-carbon alternatives like electric rail."
            },
            {
              "num": "13",
              "term": "Uncrewed Traffic Management (UTM)",
              "definition": "A digital, automated air traffic architecture designed to coordinate thousands of low-altitude drones and eVTOLs."
            },
            {
              "num": "14",
              "term": "Life-Cycle Assessment (LCA)",
              "definition": "Comprehensive evaluation of environmental impacts associated with raw material extraction through disposal."
            },
            {
              "num": "15",
              "term": "Mobility as a Service (MaaS)",
              "definition": "Digital travel platforms that integrate multiple transport services (trains, bike shares, e-buses, car rentals) into a single unified mobile app and booking ticket."
            },
            {
              "num": "16",
              "term": "Autonomous Shuttle",
              "definition": "Self-driving electric passenger vehicles operating on pre-mapped routes to connect neighborhoods, airports, and public transit nodes without human drivers."
            },
            {
              "num": "17",
              "term": "Overnight Sleeper Train",
              "definition": "Modern long-distance passenger rail services operating overnight with private sleeping cabins, offering a comfortable, low-carbon alternative to regional air travel."
            },
            {
              "num": "18",
              "term": "Zero-Emission Fleet",
              "definition": "Commercial transit networks, delivery vehicles, or airline ground support equipment powered 100% by renewable electricity or green hydrogen fuel."
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: The Future of Travel: High-Speed Trains vs. Flying",
              "watchUrl": "https://www.youtube.com/watch?v=NDs5baOoxao",
              "tag": "Mobility Trends",
              "videoId": "NDs5baOoxao",
              "embedUrl": "https://www.youtube-nocookie.com/embed/NDs5baOoxao",
              "caption": "Focus: Investigating Europe's high-speed rail expansion and the policy push to encourage passenger modal shift away from regional air routes."
            },
            {
              "title": "Video 2: Clean Flight: Electric Planes & Sustainable Fuels",
              "watchUrl": "https://www.youtube.com/watch?v=7KkBE0HgNJQ",
              "tag": "Clean Aviation",
              "videoId": "7KkBE0HgNJQ",
              "embedUrl": "https://www.youtube-nocookie.com/embed/7KkBE0HgNJQ",
              "caption": "Focus: Examining engineering breakthroughs in battery density, hybrid-electric propulsion, and certified Sustainable Aviation Fuels (SAF)."
            },
            {
              "title": "Video 3: Comparatives and Superlatives in Transport Reviews",
              "watchUrl": "https://www.youtube.com/watch?v=FAhpT7BH7GE",
              "tag": "Grammar Focus",
              "videoId": "FAhpT7BH7GE",
              "embedUrl": "https://www.youtube-nocookie.com/embed/FAhpT7BH7GE",
              "caption": "Focus: Targeted practice using comparative structures and degree adverbs to contrast travel speed, carbon efficiency, ticket prices, and comfort."
            }
          ],
          "grammar": {
            "title": "Comparing Things & Degree Words",
            "badge": "B1\u2013B2 Grammar Focus",
            "patternTitle": "Comparison Rules",
            "formula": "Comparative: [much / considerably] + [more + adj / -er] + than | Superlative: the + [most + adj / -est]",
            "rulesTitle": "Core Rules",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. Comparing Two Things (Comparative):</strong> Compare two items using <span style=\"font-weight: 700; color: #60854b;\">-er / more ... than</span> (e.g., <em>faster than</em>, <em>more efficient than</em>).",
              "<strong style=\"color: #1e293b;\">2. Degree Words (How much bigger or smaller):</strong> Use words like <span style=\"font-weight: 600; color: #334155;\">much, considerably, far, significantly, slightly</span> before comparatives (e.g., <em>considerably more costly</em>, <em>significantly higher</em>).",
              "<strong style=\"color: #1e293b;\">3. The Top of a Group (Superlative):</strong> Use <span style=\"font-weight: 700; color: #60854b;\">the + -est / the most + adjective</span> for three or more things (e.g., <em>the most viable solution</em>, <em>the cheapest option</em>)."
            ],
            "trap": "<strong>\u26a0\ufe0f TOEIC Trap Alert:</strong> Never put <strong>very</strong> in front of a comparative (NOT <em>very more expensive</em> \u274c)! When you see <em>than</em> after the blank, you must use a comparative (<em>more costly</em>), never a superlative (<em>most costly</em>).",
            "examplesTitle": "Propulsion & Energy Examples",
            "examples": [
              "<em>\"Hydrogen yields <strong>significantly higher</strong> gravimetric energy density than battery cells.\" (Comparative)</em>",
              "<em>\"Hybrid turboprops represent <strong>the most viable</strong> interim solution for regional carriers.\" (Superlative)</em>"
            ]
          },
          "toeic": {
            "stem": "Rarely ________ airline dispatch teams encountered such extensive cloud infrastructure outages across European air control centers.",
            "options": [
              {
                "letter": "A",
                "text": "have"
              },
              {
                "letter": "B",
                "text": "had"
              },
              {
                "letter": "C",
                "text": "did"
              },
              {
                "letter": "D",
                "text": "were"
              }
            ],
            "correctLetter": "A",
            "correctText": "have",
            "analysis": "When a sentence starts with a restrictive or negative adverb (\"Rarely\", \"Seldom\", \"Never\"), subject-auxiliary inversion occurs: Rarely + have + subject + past participle.",
            "strategy": "Negative Inversion Formula: [Negative adverb] + [auxiliary verb] + [Subject] + [Main verb]. Look for have/has before the subject."
          },
          "resources": [
            {
              "url": "https://www.cer.be",
              "tag": "01 \u2022 European Rail Network",
              "name": "Community of European Railway & Infrastructure (CER)",
              "desc": "Representing European passenger and freight railway operators advocating for cross-border high-speed rail connections."
            },
            {
              "url": "https://www.clean-aviation.eu",
              "tag": "02 \u2022 Clean Aviation Alliance",
              "name": "Clean Aviation Joint Undertaking",
              "desc": "European Union public-private partnership developing disruptive zero-emission aircraft technologies by 2035."
            },
            {
              "url": "https://theicct.org",
              "tag": "03 \u2022 Clean Transport Research",
              "name": "International Council on Clean Transportation (ICCT)",
              "desc": "Independent research organization providing first-rate technical and scientific analysis to environmental regulators."
            },
            {
              "url": "https://www.itdp.org",
              "tag": "04 \u2022 Sustainable Transit Institute",
              "name": "Institute for Transportation & Development Policy (ITDP)",
              "desc": "Global non-profit organization promoting sustainable, equitable, and integrated public transportation systems."
            },
            {
              "url": "https://ourworldindata.org/transport",
              "tag": "05 \u2022 Energy Transition Data",
              "name": "Our World in Data: Energy & Transport",
              "desc": "Empirical metrics tracking global greenhouse gas emissions by transport mode, electric vehicle adoption, and energy intensity."
            },
            {
              "url": "https://www.etsglobal.org/fr/fr",
              "tag": "06 \u2022 TOEIC Comparative Reading",
              "name": "ETS Global TOEIC Preparation",
              "desc": "Reading comprehension practice analyzing comparative travel options, service schedules, and infrastructure investment tenders."
            }
          ],
          "pageUrl": "session2/admat3.html",
          "articles": [
            {
              "topic": "International Council on Clean Transportation (ICCT)",
              "sourceTag": "Policy Analysis",
              "heading": "The European Rail Renaissance: Can High-Speed Rail Replace Regional Flights?",
              "snippet": "Comparative modeling of travel times, carbon savings, and infrastructure investment required to achieve competitive rail alternatives across European corridors.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://theicct.org"
            },
            {
              "topic": "McKinsey Transport &amp; Logistics Review",
              "sourceTag": "Industry Forecast",
              "heading": "The Next Decade of Sustainable Mobility &amp; Clean Fuels",
              "snippet": "Assessing commercial scaling timelines for electric fleets, hydrogen fuel cells, autonomous shuttles, and net-zero passenger transport.",
              "readTime": "Estimated read: 6-8 mins",
              "url": "https://www.mckinsey.com"
            }
          ],
          "toeicQuestions": [
            {
              "stem": "Rarely ________ airline dispatch teams encountered such extensive cloud infrastructure outages across European air control centers.",
              "options": [
                {
                  "letter": "A",
                  "text": "have"
                },
                {
                  "letter": "B",
                  "text": "had"
                },
                {
                  "letter": "C",
                  "text": "did"
                },
                {
                  "letter": "D",
                  "text": "were"
                }
              ],
              "correctLetter": "A",
              "correctText": "have",
              "analysis": "When a sentence starts with a restrictive or negative adverb (\"Rarely\", \"Seldom\", \"Never\"), subject-auxiliary inversion occurs: Rarely + have + subject + past participle.",
              "strategy": "Negative Inversion Formula: [Negative adverb] + [auxiliary verb] + [Subject] + [Main verb]. Look for have/has before the subject."
            },
            {
              "stem": "Not only ________ the biometric boarding gate accelerate passenger boarding, but it also eliminated boarding pass fraud.",
              "options": [
                {
                  "letter": "A",
                  "text": "did"
                },
                {
                  "letter": "B",
                  "text": "does"
                },
                {
                  "letter": "C",
                  "text": "has"
                },
                {
                  "letter": "D",
                  "text": "had"
                }
              ],
              "correctLetter": "A",
              "correctText": "did",
              "analysis": "Negative inversion with \"Not only\". Since the parallel clause uses past simple (\"eliminated\"), the auxiliary must be past (\"did... accelerate\").",
              "strategy": "Formula: Not only + did + S + base verb ..., but [S] also + past verb."
            },
            {
              "stem": "Under no circumstances ________ international passengers bypass biometric verification gates without presenting their digital credentials.",
              "options": [
                {
                  "letter": "A",
                  "text": "should"
                },
                {
                  "letter": "B",
                  "text": "ought"
                },
                {
                  "letter": "C",
                  "text": "must have"
                },
                {
                  "letter": "D",
                  "text": "were"
                }
              ],
              "correctLetter": "A",
              "correctText": "should",
              "analysis": "Negative inversion after \"Under no circumstances\": modal auxiliary (\"should\") precedes the subject \"international passengers\".",
              "strategy": "\"Under no circumstances\" + modal (should / can) + Subject + base verb."
            },
            {
              "stem": "Modern automated self-service check-in kiosks must be rapid, reliable, and ________ for all arriving travelers.",
              "options": [
                {
                  "letter": "A",
                  "text": "accessible"
                },
                {
                  "letter": "B",
                  "text": "accessibility"
                },
                {
                  "letter": "C",
                  "text": "accessing"
                },
                {
                  "letter": "D",
                  "text": "accessibly"
                }
              ],
              "correctLetter": "A",
              "correctText": "accessible",
              "analysis": "Parallel grammatical structure requires an adjective to match \"rapid\" and \"reliable\" in the series: [adj], [adj], and [adj].",
              "strategy": "Parallelism rule: In a series connected by \"and\" or \"or\", items must share the same part of speech (rapid, reliable, and accessible)."
            },
            {
              "stem": "Hardly had the high-speed electric train ________ the terminal when diagnostic sensors transmitted telemetry to the dispatch center.",
              "options": [
                {
                  "letter": "A",
                  "text": "left"
                },
                {
                  "letter": "B",
                  "text": "leave"
                },
                {
                  "letter": "C",
                  "text": "leaving"
                },
                {
                  "letter": "D",
                  "text": "leaves"
                }
              ],
              "correctLetter": "A",
              "correctText": "left",
              "analysis": "The structure \"Hardly had [subject] [past participle] when [past clause]\" requires the past participle form \"left\".",
              "strategy": "Inversion formula: Hardly had + S + [V3] ... when + [Past Simple]."
            }
          ]
        }
      },
      "3": {
        "session": 3,
        "objectives": {
          "title": "Session 3 - Debate and Critical Thinking Objectives",
          "summary": "By the end of this session, you will be able to engage in debates and critical discussions with confidence, use key vocabulary and grammar, and build the skills needed for your TOEIC test and Session 5 evaluation.",
          "items": [
            {
              "num": 1,
              "title": "Practice Identifying Argument Structures & Cause/Effect in TOEIC Reading",
              "description": "Analyze editorial articles and opinion pieces to separate central claims from supporting evidence and assumptions."
            },
            {
              "num": 2,
              "title": "Master Polite Debate Language, Concessions, and Rhetorical Questions",
              "description": "Use diplomatic phrasing to question assumptions, acknowledge opposing arguments, and clarify misunderstandings."
            },
            {
              "num": 3,
              "title": "Use Conjunctions (although, because) vs. Prepositions (despite, due to)",
              "description": "Correctly choose between conjunctions requiring a full clause and prepositions followed by a noun phrase or gerund."
            },
            {
              "num": 4,
              "title": "Debate Technological Innovation vs. Environmental Caution (DDRS)",
              "description": "Explore the balance between rapid tech adoption and the precautionary principle for public safety and ecology."
            },
            {
              "num": 5,
              "title": "Participate in an Interactive Class Debate with Constructive Feedback",
              "description": "Deliver concise, persuasive spoken contributions during a team debate while staying polite and focused on the topic."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 3 Lesson Plan (2 Hours)",
          "summary": "A 2-hour session agenda combining conversational warm-ups, TOEIC test practice, vocabulary building, speaking activities, and evaluation preparation.",
          "items": [
            {
              "time": "0-15",
              "title": "Conversational Warm-Up: Agree or Disagree? (15 mins)",
              "description": "Students quickly vote and give one reason for controversial tech statements (e.g. banning short-haul flights)."
            },
            {
              "time": "15-45",
              "title": "TOEIC Strategy: Cause & Effect in Part 7 (30 mins)",
              "description": "Practice analyzing texts for cause-and-effect relationships, contrasting arguments, and author stance."
            },
            {
              "time": "45-65",
              "title": "Vocabulary Builder: Debate & Discussion Signposts (20 mins)",
              "description": "Linking words and phrases for counter-arguments, concessions, rhetorical questions, and conclusions."
            },
            {
              "time": "65-110",
              "title": "Structured Discussion & Grammar (45 mins)",
              "description": "Structured classroom debate using Conjunctions (whereas, provided that) vs. Prepositions (despite, in spite of)."
            },
            {
              "time": "110-120",
              "title": "Debrief, Evaluation Prep & Wrap-Up (10 mins)",
              "description": "Peer debate feedback, pronunciation check, and preparation checklist for the Session 5 evaluation."
            }
          ]
        },
        "revision": {
          "title": "Session 3: Debate and Critical Thinking",
          "summary": "Review the 18 key terms for Debate and Critical Thinking to build your fluency in discussions, professional reading, and TOEIC practice.",
          "terms": [
            {
              "num": "01",
              "term": "Confirmation Bias",
              "definition": "The psychological tendency to search for, interpret, and favor information that confirms preexisting beliefs while ignoring or dismissing contradictory evidence."
            },
            {
              "num": "02",
              "term": "Constructive Disagreement",
              "definition": "A debate communication method where opposing speakers challenge ideas respectfully using evidence and logic to reach better shared solutions without personal conflict."
            },
            {
              "num": "03",
              "term": "Liability Allocation",
              "definition": "The legal decision of who is responsible (operators, manufacturers, or programmers) when an automated system fails."
            },
            {
              "num": "04",
              "term": "Machine Ethics",
              "definition": "Teaching moral rules and ethical boundaries to automated computer systems and algorithms."
            },
            {
              "num": "05",
              "term": "Workforce Disruption",
              "definition": "Changes and job losses caused when automated machines or AI tools replace human workers."
            },
            {
              "num": "06",
              "term": "Cognitive Complacency",
              "definition": "When people rely too much on automated tools and stop paying close attention to what is happening."
            },
            {
              "num": "07",
              "term": "Situational Awareness",
              "definition": "A pilot&#x27;s real-time perception and understanding of aircraft status, flight envelope, and atmospheric surroundings."
            },
            {
              "num": "08",
              "term": "Algorithmic Accountability",
              "definition": "The principle that developers, corporations, and governments must be held legally and morally responsible for the outcomes and decisions made by automated systems."
            },
            {
              "num": "09",
              "term": "Ethical Dilemma",
              "definition": "A complex situation in which a decision-maker must choose between two conflicting moral options, neither of which is entirely satisfactory or free from negative consequences."
            },
            {
              "num": "10",
              "term": "Counter-Claim / Rebuttal",
              "definition": "An argument, empirical piece of evidence, or logical reasoning presented directly to challenge, weaken, or disprove an opposing speaker's position in a debate."
            },
            {
              "num": "11",
              "term": "Automation Bias",
              "definition": "Trusting a computer or automated suggestion even when your own judgment warns you something is wrong."
            },
            {
              "num": "12",
              "term": "Discourse Concession",
              "definition": "Acknowledging that an opponent has a valid point before presenting your own counter-argument in a debate."
            },
            {
              "num": "13",
              "term": "Social Equity in Automation",
              "definition": "Ensuring that efficiency gains from automation are shared equitably rather than concentrating profits while eliminating jobs."
            },
            {
              "num": "14",
              "term": "Human Factors Engineering",
              "definition": "Designing technology interfaces tailored to human psychological capabilities and sensory limitations."
            },
            {
              "num": "15",
              "term": "Critical Evaluation",
              "definition": "The systematic examination of arguments, evidence, and underlying assumptions to assess their factual accuracy, logical validity, and fairness before drawing conclusions."
            },
            {
              "num": "16",
              "term": "Nuanced Argument",
              "definition": "A balanced line of reasoning that recognizes complexities, qualifications, and trade-offs rather than presenting an oversimplified black-and-white perspective."
            },
            {
              "num": "17",
              "term": "Regulatory Oversight",
              "definition": "Governmental safety supervision verifying that automated innovations meet rigorous legal and moral benchmarks."
            },
            {
              "num": "18",
              "term": "Stakeholder Advocacy",
              "definition": "Public communication, campaigning, and representation by affected community, worker, or consumer groups to ensure their rights and safety are protected in tech transitions."
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: 5 Tips to Improve Your Critical Thinking",
              "watchUrl": "https://www.youtube.com/watch?v=dItUGF8GdTw",
              "tag": "Critical Thinking",
              "videoId": "dItUGF8GdTw",
              "embedUrl": "https://www.youtube-nocookie.com/embed/dItUGF8GdTw",
              "caption": "Focus: Samantha Agoos outlines a practical 5-step framework to formulate questions, test assumptions, evaluate evidence, and explore opposing perspectives."
            },
            {
              "title": "Video 2: The Ethics of Algorithmic Decisions & Autonomous Systems",
              "watchUrl": "https://www.youtube.com/watch?v=gV0_raKR2UQ",
              "tag": "Machine Ethics",
              "videoId": "gV0_raKR2UQ",
              "embedUrl": "https://www.youtube-nocookie.com/embed/gV0_raKR2UQ",
              "caption": "Focus: Examining real-world ethical dilemmas when algorithms make automated decisions in transportation, hiring, and legal systems."
            },
            {
              "title": "Video 3: Conjunctions and Transition Words for Persuasive Arguments",
              "watchUrl": "https://www.youtube.com/watch?v=BECe_ok1RI8",
              "tag": "Grammar Focus",
              "videoId": "BECe_ok1RI8",
              "embedUrl": "https://www.youtube-nocookie.com/embed/BECe_ok1RI8",
              "caption": "Focus: Targeted practice using coordinating and subordinating conjunctions (furthermore, however, consequently, whereas) to structure cohesive debate points."
            }
          ],
          "grammar": {
            "title": "Connecting Sentences & Ideas",
            "badge": "B1\u2013B2 Grammar Focus",
            "patternTitle": "Connecting Words",
            "formula": "Conjunction: [Although / Because] + Subject + Verb | Preposition: [Despite / Due to] + Noun",
            "rulesTitle": "Core Rules",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. Conjunctions (Although, Even though, Because, Since):</strong> Followed by a complete sentence with a <span style=\"font-weight: 700; color: #60854b;\">Subject and a Verb</span> (<em>\"Although the model worked...\"</em>).",
              "<strong style=\"color: #1e293b;\">2. Prepositions (Despite, In spite of, Because of, Due to):</strong> Followed only by a <span style=\"font-weight: 700; color: #60854b;\">noun or an -ing word</span>, never a full subject + verb (<em>\"Despite high accuracy...\"</em>).",
              "<strong style=\"color: #1e293b;\">3. Transition Words (However, Therefore, Furthermore):</strong> Start a new sentence after a period or semicolon, usually followed by a comma (<span style=\"font-weight: 600; color: #334155;\">\"However, regulators hesitated.\"</span>)."
            ],
            "trap": "<strong>\u26a0\ufe0f TOEIC Trap Alert:</strong> The <em>\"Although vs. Despite\"</em> trap! If you see a <strong>Subject and a Verb</strong> after the blank, choose <em>Although / Even though</em>. If you see only a noun phrase, choose <em>Despite / In spite of</em>!",
            "examplesTitle": "Governance & Ethics Examples",
            "examples": [
              "<em>\"<strong>Although</strong> the model demonstrated accuracy, bias audits remained mandatory.\" (+ Clause)</em>",
              "<em>\"<strong>Despite</strong> high statistical accuracy, public deployment was delayed.\" (+ Noun Phrase)</em>"
            ]
          },
          "toeic": {
            "stem": "European air transport regulators recommend that every commercial AI guidance system ________ audited by human flight safety panels.",
            "options": [
              {
                "letter": "A",
                "text": "is"
              },
              {
                "letter": "B",
                "text": "be"
              },
              {
                "letter": "C",
                "text": "was"
              },
              {
                "letter": "D",
                "text": "been"
              }
            ],
            "correctLetter": "B",
            "correctText": "be",
            "analysis": "The verb \"recommend that\" requires the mandative subjunctive mood, which uses the base form of the verb (\"be audited\"), regardless of the singular subject.",
            "strategy": "Subjunctive triggers: recommend that, require that, demand that, suggest that $\rightarrow$ always choose the BASE verb (be, go, submit)."
          },
          "resources": [
            {
              "url": "https://hai.stanford.edu",
              "tag": "01 \u2022 AI Ethics & Governance",
              "name": "Stanford Human-Centered AI (HAI)",
              "desc": "Advancing AI research, education, and policy to benefit humanity through interdisciplinary scholarship."
            },
            {
              "url": "https://www.acm.org/code-of-ethics",
              "tag": "02 \u2022 Human-Computer Ethics",
              "name": "ACM Code of Ethics & Professional Conduct",
              "desc": "Foundational ethical guidelines established by the Association for Computing Machinery to govern responsible technological stewardship."
            },
            {
              "url": "https://www.criticalthinking.org",
              "tag": "03 \u2022 Critical Thinking Foundation",
              "name": "Foundation for Critical Thinking",
              "desc": "Global non-profit educational organization advancing essential critical thinking tools, Socratic questioning, and logical evaluation."
            },
            {
              "url": "https://www.eff.org",
              "tag": "04 \u2022 Public Interest Tech",
              "name": "Electronic Frontier Foundation (EFF)",
              "desc": "Leading non-profit defending civil liberties, algorithmic transparency, privacy rights, and user autonomy in the digital world."
            },
            {
              "url": "https://ourworldindata.org/technological-change",
              "tag": "05 \u2022 Technological Change Data",
              "name": "Our World in Data: Technological Change",
              "desc": "Global historical data tracking rates of technological diffusion, workplace productivity, and societal adaptation."
            },
            {
              "url": "https://www.etsglobal.org/fr/fr",
              "tag": "06 \u2022 TOEIC Argument Analysis",
              "name": "ETS Global TOEIC Preparation",
              "desc": "Business English listening and reading comprehension strategies for identifying speaker stance, counter-claims, and concession markers."
            }
          ],
          "pageUrl": "session3/admat3.html",
          "articles": [
            {
              "topic": "Stanford Center for Human-Centered AI",
              "sourceTag": "Academic Briefing",
              "heading": "Critical Thinking in the Age of Automated Algorithms",
              "snippet": "Analyzing how human operators can maintain situational awareness, recognize cognitive complacency, and challenge flawed automated outputs.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://hai.stanford.edu"
            },
            {
              "topic": "Harvard Law Review Digital Governance",
              "sourceTag": "Legal &amp; Policy Review",
              "heading": "Allocating Legal Liability for Automated Decisions",
              "snippet": "Exploring legal doctrines and ethical frameworks for attributing fault when autonomous vehicles, AI models, or automated systems cause harm.",
              "readTime": "Estimated read: 6-8 mins",
              "url": "https://harvardlawreview.org"
            }
          ],
          "toeicQuestions": [
            {
              "stem": "European air transport regulators recommend that every commercial AI guidance system ________ audited by human flight safety panels.",
              "options": [
                {
                  "letter": "A",
                  "text": "is"
                },
                {
                  "letter": "B",
                  "text": "be"
                },
                {
                  "letter": "C",
                  "text": "was"
                },
                {
                  "letter": "D",
                  "text": "been"
                }
              ],
              "correctLetter": "B",
              "correctText": "be",
              "analysis": "The verb \"recommend that\" requires the mandative subjunctive mood, which uses the base form of the verb (\"be audited\"), regardless of the singular subject.",
              "strategy": "Subjunctive triggers: recommend that, require that, demand that, suggest that $\rightarrow$ always choose the BASE verb (be, go, submit)."
            },
            {
              "stem": "It is essential that passenger biometric identification records ________ strictly encrypted during data transmission.",
              "options": [
                {
                  "letter": "A",
                  "text": "remain"
                },
                {
                  "letter": "B",
                  "text": "remains"
                },
                {
                  "letter": "C",
                  "text": "remained"
                },
                {
                  "letter": "D",
                  "text": "will remain"
                }
              ],
              "correctLetter": "A",
              "correctText": "remain",
              "analysis": "The impersonal construction \"It is essential that\" demands the subjunctive base form (\"remain\"), without third-person -s.",
              "strategy": "Pattern: It is essential/imperative/vital that + Subject + [BASE VERB] (no -s, no ed, no will)."
            },
            {
              "stem": "The digital privacy board insisted that automated profiling systems ________ subject to independent human review upon passenger request.",
              "options": [
                {
                  "letter": "A",
                  "text": "be"
                },
                {
                  "letter": "B",
                  "text": "are"
                },
                {
                  "letter": "C",
                  "text": "was"
                },
                {
                  "letter": "D",
                  "text": "were"
                }
              ],
              "correctLetter": "A",
              "correctText": "be",
              "analysis": "\"Insisted that\" triggers the mandative subjunctive, requiring the uninflected base verb \"be\".",
              "strategy": "Verbs of demand or insistence (insist, demand, urge that) trigger base verb subjunctive: \"insisted that S be...\"."
            },
            {
              "stem": "Civil aviation authority members debated ________ the new algorithm met international safety redundancy certifications.",
              "options": [
                {
                  "letter": "A",
                  "text": "whether"
                },
                {
                  "letter": "B",
                  "text": "that"
                },
                {
                  "letter": "C",
                  "text": "which"
                },
                {
                  "letter": "D",
                  "text": "what"
                }
              ],
              "correctLetter": "A",
              "correctText": "whether",
              "analysis": "\"Debated whether\" introduces an indirect question noun clause expressing an issue with two possibilities (whether or not).",
              "strategy": "After verbs of discussion, uncertainty, or debate (debate, wonder, doubt), use \"whether\" rather than \"that\"."
            },
            {
              "stem": "It is imperative that the aerospace engineering contractor ________ international data privacy covenants during software updates.",
              "options": [
                {
                  "letter": "A",
                  "text": "follows"
                },
                {
                  "letter": "B",
                  "text": "follow"
                },
                {
                  "letter": "C",
                  "text": "followed"
                },
                {
                  "letter": "D",
                  "text": "will follow"
                }
              ],
              "correctLetter": "B",
              "correctText": "follow",
              "analysis": "\"It is imperative that\" takes the subjunctive base form \"follow\", even though the subject \"contractor\" is singular.",
              "strategy": "Never add -s to the verb after \"It is imperative / crucial / necessary that\"."
            }
          ]
        }
      },
      "4": {
        "session": 4,
        "objectives": {
          "title": "Session 4 - Biometrics and digital identity Objectives",
          "summary": "By the end of this session, you will be able to discuss biometrics and digital identity with confidence, use key vocabulary and grammar, and build the skills needed for your TOEIC test and Session 5 evaluation.",
          "items": [
            {
              "num": 1,
              "title": "Practice TOEIC Part 5 Dependent Prepositions & Common Collocations",
              "description": "Identify high-frequency verb + preposition combinations (comply with, specialize in, account for) in test sentences."
            },
            {
              "num": 2,
              "title": "Master Vocabulary for Digital Passports, Facial Recognition & Data Privacy",
              "description": "Learn key vocabulary for contactless travel, biometric authentication, encrypted data, and cybersecurity."
            },
            {
              "num": 3,
              "title": "Form Common Business Collocations (comply with, meet standards)",
              "description": "Use natural word pairings in professional speaking and writing to sound more fluent and accurate."
            },
            {
              "num": 4,
              "title": "Discuss Privacy Rights and Ethical Data Governance in Travel (DDRS)",
              "description": "Evaluate how border authorities and tech companies can respect passenger privacy and fundamental rights."
            },
            {
              "num": 5,
              "title": "Rehearse and Polish Your Session 5 Formative Evaluation Topic",
              "description": "Deliver a mock assessment talk, focusing on clear signposting, fluent delivery, and responding to follow-up questions."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 4 Lesson Plan (2 Hours)",
          "summary": "A 2-hour session agenda combining conversational warm-ups, TOEIC test practice, vocabulary building, speaking activities, and evaluation preparation.",
          "items": [
            {
              "time": "0-15",
              "title": "Conversational Warm-Up: Digital Check-in (15 mins)",
              "description": "Students share experiences with digital boarding passes, e-gates, and smartphone authentication."
            },
            {
              "time": "15-45",
              "title": "TOEIC Strategy: Collocations & Prepositions in Part 5 (30 mins)",
              "description": "Timed completion of Part 5 questions testing verb-noun collocations and dependent prepositions."
            },
            {
              "time": "45-65",
              "title": "Vocabulary Builder: Identity & Cybersecurity (20 mins)",
              "description": "Key vocabulary for biometric authentication, facial recognition, data privacy, GDPR, and cyber protection."
            },
            {
              "time": "65-110",
              "title": "Structured Discussion & Grammar (45 mins)",
              "description": "Debate the balance between seamless travel and personal privacy using Business Collocations (ensure compliance, uphold standards)."
            },
            {
              "time": "110-120",
              "title": "Final Evaluation Simulation & Wrap-Up (10 mins)",
              "description": "Complete mock evaluation talk under timed conditions with teacher and peer rubric scoring."
            }
          ]
        },
        "revision": {
          "title": "Session 4: Biometrics and digital identity",
          "summary": "Review the 18 key terms for Biometrics and digital identity to build your fluency in discussions, professional reading, and TOEIC practice.",
          "terms": [
            {
              "num": "01",
              "term": "Biometric Token",
              "definition": "A digital credential containing encrypted mathematical representations of facial, iris, or fingerprint features."
            },
            {
              "num": "02",
              "term": "Automated Border Control (e-Gate)",
              "definition": "An automated security barrier verifying traveler passport chips against live biometric facial captures."
            },
            {
              "num": "03",
              "term": "Seamless Travel Experience",
              "definition": "A frictionless passenger journey through ticketing, bag drop, security, and boarding using biometric verification."
            },
            {
              "num": "04",
              "term": "General Data Protection Regulation (GDPR)",
              "definition": "Strict European Union privacy law governing the collection, processing, and storage of personal biometric data."
            },
            {
              "num": "05",
              "term": "Decentralized Identity (DID)",
              "definition": "A self-sovereign digital identity architecture where travelers store their own credentials on personal devices."
            },
            {
              "num": "06",
              "term": "Facial Recognition Matching",
              "definition": "Comparing live digital video feeds against stored passport reference photos using deep neural networks."
            },
            {
              "num": "07",
              "term": "Liveness Detection",
              "definition": "Anti-spoofing software verifying that a biometric image belongs to a physically present living subject rather than a photo."
            },
            {
              "num": "08",
              "term": "Data Sovereignty",
              "definition": "The principle that digital information is subject to the laws and governance structures of the country where it is processed."
            },
            {
              "num": "09",
              "term": "Passenger Consent Framework",
              "definition": "An explicit, informed legal agreement where a passenger willingly opts into biometric screening with clear opt-out rights."
            },
            {
              "num": "10",
              "term": "Two-Factor Authentication (2FA)",
              "definition": "A security verification process requiring users to provide two separate forms of identification (e.g., password + biometric scan or SMS code) before granting account access."
            },
            {
              "num": "11",
              "term": "False Match Rate (FMR)",
              "definition": "The statistical percentage of biometric verification trials where the system incorrectly matches distinct individuals."
            },
            {
              "num": "12",
              "term": "Identity Theft",
              "definition": "The illegal acquisition, cloning, and fraudulent use of another individual's personal data, digital credentials, or biometric information for financial or criminal gain."
            },
            {
              "num": "13",
              "term": "Demographic Disparity",
              "definition": "Measurable performance discrepancies in facial recognition accuracy across different racial, gender, or age demographics."
            },
            {
              "num": "14",
              "term": "Data Breach",
              "definition": "A security incident in which sensitive, confidential, or biometric customer data is unlawfully accessed, extracted, copied, or transmitted by unauthorized malicious actors."
            },
            {
              "num": "15",
              "term": "Surveillance Creep",
              "definition": "The gradual expansion of a security technology beyond its original authorized scope into invasive public tracking."
            },
            {
              "num": "16",
              "term": "Opt-Out Protocol",
              "definition": "A mandatory alternative pathway allowing passengers to undergo traditional manual document checks without penalty."
            },
            {
              "num": "17",
              "term": "Digital Travel Credential (DTC)",
              "definition": "An official digital representation of a physical passport conforming to international civil aviation (ICAO) standards."
            },
            {
              "num": "18",
              "term": "Digital Wallet",
              "definition": "A secure mobile application that stores virtual identity credentials, digital passports, boarding passes, and payment cards on a traveler's personal smartphone."
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: How Facial Recognition & Biometric Borders Actually Work",
              "watchUrl": "https://www.youtube.com/watch?v=cc0dqW2HCRc",
              "tag": "Biometrics",
              "videoId": "cc0dqW2HCRc",
              "embedUrl": "https://www.youtube-nocookie.com/embed/cc0dqW2HCRc",
              "caption": "Focus: Vox investigation into how computer vision algorithms map facial landmarks, match biometric templates, and power automated e-Gates."
            },
            {
              "title": "Video 2: Digital Identity & Privacy: What Happens to Your Data?",
              "watchUrl": "https://www.youtube.com/watch?v=4HkaGuvoyjY",
              "tag": "Cybersecurity & Privacy",
              "videoId": "4HkaGuvoyjY",
              "embedUrl": "https://www.youtube-nocookie.com/embed/4HkaGuvoyjY",
              "caption": "Focus: The Wall Street Journal explores how traveler biometric data is captured, stored, tokenized, and protected under privacy regulations like GDPR."
            },
            {
              "title": "Video 3: Essential Technology Collocations & Word Partnerships",
              "watchUrl": "https://www.youtube.com/watch?v=CqRloBkyqQs",
              "tag": "Grammar Focus",
              "videoId": "CqRloBkyqQs",
              "embedUrl": "https://www.youtube-nocookie.com/embed/CqRloBkyqQs",
              "caption": "Focus: Targeted practice mastering high-frequency verb-noun and adjective-noun combinations (verify identity, grant access, breach security, protect privacy)."
            }
          ],
          "grammar": {
            "title": "Words That Go Together (Collocations)",
            "badge": "B1\u2013B2 Grammar Focus",
            "patternTitle": "Key Word Pairs",
            "formula": "Verb + Preposition: comply with / adhere to | Verb + Noun: meet standards / conduct an audit",
            "rulesTitle": "Core Rules",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. Verbs with Fixed Prepositions:</strong> <span style=\"font-weight: 700; color: #60854b;\">comply with</span> (rules), <span style=\"font-weight: 700; color: #60854b;\">adhere to</span> (policies), <span style=\"font-weight: 700; color: #60854b;\">participate in</span> (events), <span style=\"font-weight: 700; color: #60854b;\">account for</span> (a percentage).",
              "<strong style=\"color: #1e293b;\">2. Verbs with NO Preposition:</strong> <span style=\"font-weight: 600; color: #334155;\">meet standards</span> (NOT <em>meet with standards</em>), <span style=\"font-weight: 600; color: #334155;\">follow rules</span>, <span style=\"font-weight: 600; color: #334155;\">observe regulations</span>.",
              "<strong style=\"color: #1e293b;\">3. Natural Business Pairs:</strong> <span style=\"font-weight: 600; color: #334155;\">conduct an audit</span>, <span style=\"font-weight: 600; color: #334155;\">grant clearance</span>, <span style=\"font-weight: 600; color: #334155;\">implement measures</span>, <span style=\"font-weight: 600; color: #334155;\">strict confidentiality</span>."
            ],
            "trap": "<strong>\u26a0\ufe0f TOEIC Trap Alert:</strong> Pay close attention to the preposition right after the blank! If you see <em>with</em>, you cannot pick <em>meet</em>, <em>follow</em>, or <em>observe</em> (they don't use <em>with</em>). You must pick <strong>comply with</strong>!",
            "examplesTitle": "Biometrics & Security Examples",
            "examples": [
              "<em>\"Border control e-gates must <strong>comply with</strong> international encryption protocols.\" (Verb + Prep)</em>",
              "<em>\"The airport authority will <strong>conduct a comprehensive audit</strong> of its facial scanner feeds.\" (Verb + Noun)</em>"
            ]
          },
          "toeic": {
            "stem": "________ their digital identity tokens at the self-service terminal, passengers proceed seamlessly through automated biometric boarding lanes.",
            "options": [
              {
                "letter": "A",
                "text": "Verified"
              },
              {
                "letter": "B",
                "text": "Having verified"
              },
              {
                "letter": "C",
                "text": "Verification"
              },
              {
                "letter": "D",
                "text": "Verifies"
              }
            ],
            "correctLetter": "B",
            "correctText": "Having verified",
            "analysis": "The perfect active participle (\"Having verified\") indicates that the action of verifying tokens occurred before the main action (\"proceed\").",
            "strategy": "Perfect Participle Formula: Having + V3 indicates an action completed before the main clause action."
          },
          "resources": [
            {
              "url": "https://www.icao.int",
              "tag": "01 \u2022 Digital Travel Standards",
              "name": "ICAO Digital Travel Credential (DTC)",
              "desc": "International Civil Aviation Organization technical specifications for secure digital travel credentials on mobile devices."
            },
            {
              "url": "https://www.nist.gov",
              "tag": "02 \u2022 Biometric Accuracy Benchmarks",
              "name": "NIST Face Recognition Vendor Test (FRVT)",
              "desc": "National Institute of Standards and Technology official ongoing evaluations measuring algorithmic accuracy and demographic fairness."
            },
            {
              "url": "https://edpb.europa.eu",
              "tag": "03 \u2022 European Privacy Authority",
              "name": "European Data Protection Board (EDPB)",
              "desc": "Independent European body ensuring the consistent application of GDPR rules regarding personal biometric data processing."
            },
            {
              "url": "https://www.iata.org",
              "tag": "04 \u2022 Passenger Identity Initiative",
              "name": "IATA One ID Initiative",
              "desc": "Global air transport initiative working to create a seamless, paperless airport journey using collaborative biometric identity tokens."
            },
            {
              "url": "https://www.eff.org",
              "tag": "05 \u2022 Digital Civil Liberties",
              "name": "Electronic Frontier Foundation (EFF) Biometrics",
              "desc": "Public interest legal analysis and campaign resources defending individual privacy against mass surveillance and biometric overreach."
            },
            {
              "url": "https://www.etsglobal.org/fr/fr",
              "tag": "06 \u2022 TOEIC Collocation Practice",
              "name": "ETS Global TOEIC Preparation",
              "desc": "Vocabulary drills focusing on professional tech collocations, data security policy statements, and passenger service agreements."
            }
          ],
          "pageUrl": "session4/admat3.html",
          "articles": [
            {
              "topic": "NIST / European Data Protection Board",
              "sourceTag": "Scientific Evaluation",
              "heading": "Facial Recognition at the Border: Privacy Safeguards and Demographic Fairness",
              "snippet": "Technical evaluation of automated border e-Gates examining false match rates, demographic performance parity, and strict GDPR privacy compliance.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://www.nist.gov"
            },
            {
              "topic": "International Air Transport Association (IATA)",
              "sourceTag": "Industry Whitepaper",
              "heading": "The Rise of Digital Passports &amp; Self-Sovereign Identity in Travel",
              "snippet": "Evaluating the transition from physical passports to encrypted digital credentials, contactless boarding tokens, and passenger consent protocols.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://www.iata.org"
            }
          ],
          "toeicQuestions": [
            {
              "stem": "________ their digital identity tokens at the self-service terminal, passengers proceed seamlessly through automated biometric boarding lanes.",
              "options": [
                {
                  "letter": "A",
                  "text": "Verified"
                },
                {
                  "letter": "B",
                  "text": "Having verified"
                },
                {
                  "letter": "C",
                  "text": "Verification"
                },
                {
                  "letter": "D",
                  "text": "Verifies"
                }
              ],
              "correctLetter": "B",
              "correctText": "Having verified",
              "analysis": "The perfect active participle (\"Having verified\") indicates that the action of verifying tokens occurred before the main action (\"proceed\").",
              "strategy": "Perfect Participle Formula: Having + V3 indicates an action completed before the main clause action."
            },
            {
              "stem": "________ with high-resolution infrared biometric sensors, the smart e-gate authenticates traveler identities in under three seconds.",
              "options": [
                {
                  "letter": "A",
                  "text": "Equipped"
                },
                {
                  "letter": "B",
                  "text": "Equipping"
                },
                {
                  "letter": "C",
                  "text": "Equipment"
                },
                {
                  "letter": "D",
                  "text": "Equip"
                }
              ],
              "correctLetter": "A",
              "correctText": "Equipped",
              "analysis": "The past participle (\"Equipped\") functions as a passive participial adjective modifying the subject \"smart e-gate\" (the e-gate is equipped).",
              "strategy": "Passive participial clause: [Past Participle V3] ..., [Subject]. The e-gate is equipped with sensors."
            },
            {
              "stem": "When ________ physical travel passports, border control agents cross-examine embedded cryptographic chip signatures.",
              "options": [
                {
                  "letter": "A",
                  "text": "inspect"
                },
                {
                  "letter": "B",
                  "text": "inspecting"
                },
                {
                  "letter": "C",
                  "text": "inspected"
                },
                {
                  "letter": "D",
                  "text": "inspection"
                }
              ],
              "correctLetter": "B",
              "correctText": "inspecting",
              "analysis": "After temporal prepositions and conjunctions like \"When\" or \"While\", active participial clauses take the -ing form (\"When inspecting\").",
              "strategy": "Formula: When/While + [V-ing] + [Object] when the subject of both clauses is the same agent (border agents inspect)."
            },
            {
              "stem": "Digital travel credentials, ________ mutually across all twenty-seven European member states, will standardize passenger border processing.",
              "options": [
                {
                  "letter": "A",
                  "text": "recognized"
                },
                {
                  "letter": "B",
                  "text": "recognizing"
                },
                {
                  "letter": "C",
                  "text": "recognize"
                },
                {
                  "letter": "D",
                  "text": "recognition"
                }
              ],
              "correctLetter": "A",
              "correctText": "recognized",
              "analysis": "Reduced relative clause with passive meaning: credentials [which are] recognized mutually across states.",
              "strategy": "Participial modifier: When modifying a noun passively (credentials are recognized), use the past participle (recognized)."
            },
            {
              "stem": "________ to prevent unauthorized digital identity cloning, border IT departments implemented zero-trust quantum-resistant encryption.",
              "options": [
                {
                  "letter": "A",
                  "text": "Seeking"
                },
                {
                  "letter": "B",
                  "text": "Sought"
                },
                {
                  "letter": "C",
                  "text": "Seek"
                },
                {
                  "letter": "D",
                  "text": "Seekingly"
                }
              ],
              "correctLetter": "A",
              "correctText": "Seeking",
              "analysis": "The present active participle clause (\"Seeking to prevent...\") indicates the reason or purpose of the main subject (\"border IT departments\").",
              "strategy": "Active participial clause showing intent or motive: [V-ing] to + verb ..., [Subject] + [main verb]."
            }
          ]
        }
      }
    }
  }
};

  const aasData = {
  "1": {
    "id": 1,
    "name": "Module 1",
    "title": "Aerodrome",
    "ddrs": {
      "title": "D\u00e9veloppement Durable & Responsabilit\u00e9 Soci\u00e9tale : Tags et D\u00e9finitions Officielles",
      "summary": "Le R\u00e9f\u00e9rentiel National DD&RS de l'Enseignement Sup\u00e9rieur et de la Recherche (Label DD&RS) structure les engagements \u00e9cologiques, soci\u00e9taux et \u00e9thiques des \u00e9tablissements et des grands projets de transport selon 5 axes strat\u00e9giques et leurs domaines transversaux d'application.",
      "pageUrl": "ddrs1.html",
      "axes": [
        {
          "badge": "Axe 1",
          "num": "1.",
          "title": "Gouvernance et Strat\u00e9gie",
          "desc": "Int\u00e9gration du d\u00e9veloppement durable dans la vision, le projet d'\u00e9tablissement et le pilotage d\u00e9cisionnel. Dialogue continu avec les parties prenantes (\u00e9tudiants, personnels, collectivit\u00e9s, partenaires), allocation de budgets d\u00e9di\u00e9s et suivi d'indicateurs d'impact mesurables."
        },
        {
          "badge": "Axe 2",
          "num": "2.",
          "title": "Formation et P\u00e9dagogie",
          "desc": "Sensibilisation et formation de 100 % des apprenants aux enjeux de la transition socio-\u00e9cologique (limites plan\u00e9taires, climat, biodiversit\u00e9). Int\u00e9gration transversale des comp\u00e9tences DD&RS (rapport Jouzel / socle MESR) pour pr\u00e9parer les ing\u00e9nieurs \u00e0 la prise de d\u00e9cision \u00e9thique et responsable."
        },
        {
          "badge": "Axe 3",
          "num": "3.",
          "title": "Recherche et Innovation",
          "desc": "Orientation et valorisation de l'activit\u00e9 scientifique et technologique en r\u00e9ponse aux Objectifs de D\u00e9veloppement Durable (ODD). Soutien aux programmes interdisciplinaires, recherche sobre et responsable, \u00e9co-conception et transfert de technologies vertes au service de la soci\u00e9t\u00e9."
        },
        {
          "badge": "Axe 4",
          "num": "4.",
          "title": "Gestion Environnementale",
          "desc": "Ma\u00eetrise et r\u00e9duction continue des impacts \u00e9cologiques directs : d\u00e9carbonation des mobilit\u00e9s pendulaires et professionnelles, efficacit\u00e9 et sobri\u00e9t\u00e9 \u00e9nerg\u00e9tique du patrimoine b\u00e2ti, gestion circulaire des d\u00e9chets, pr\u00e9servation de la biodiversit\u00e9 sur site et achats publics responsables."
        },
        {
          "badge": "Axe 5",
          "num": "5.",
          "title": "Politique Sociale et Inclusion",
          "desc": "Engagement institutionnel pour la responsabilit\u00e9 soci\u00e9tale : \u00e9galit\u00e9 professionnelle femmes-hommes, inclusion et accessibilit\u00e9 des personnes en situation de handicap, \u00e9galit\u00e9 des chances, am\u00e9lioration de la qualit\u00e9 de vie et sant\u00e9 globale, et pr\u00e9vention de toute forme de discrimination."
        }
      ],
      "items": [
        {
          "badge": "Axe 1",
          "num": "1.",
          "title": "Gouvernance et Strat\u00e9gie",
          "desc": "Int\u00e9gration du d\u00e9veloppement durable dans la vision, le projet d'\u00e9tablissement et le pilotage d\u00e9cisionnel. Dialogue continu avec les parties prenantes (\u00e9tudiants, personnels, collectivit\u00e9s, partenaires), allocation de budgets d\u00e9di\u00e9s et suivi d'indicateurs d'impact mesurables.",
          "isMuted": false
        },
        {
          "badge": "Axe 2",
          "num": "2.",
          "title": "Formation et P\u00e9dagogie",
          "desc": "Sensibilisation et formation de 100 % des apprenants aux enjeux de la transition socio-\u00e9cologique (limites plan\u00e9taires, climat, biodiversit\u00e9). Int\u00e9gration transversale des comp\u00e9tences DD&amp;RS (rapport Jouzel / socle MESR) pour pr\u00e9parer les ing\u00e9nieurs \u00e0 la prise de d\u00e9cision \u00e9thique et responsable.",
          "isMuted": false
        },
        {
          "badge": "Axe 3",
          "num": "3.",
          "title": "Recherche et Innovation",
          "desc": "Orientation et valorisation de l'activit\u00e9 scientifique et technologique en r\u00e9ponse aux Objectifs de D\u00e9veloppement Durable (ODD). Soutien aux programmes interdisciplinaires, recherche sobre et responsable, \u00e9co-conception et transfert de technologies vertes au service de la soci\u00e9t\u00e9.",
          "isMuted": false
        },
        {
          "badge": "Axe 4",
          "num": "4.",
          "title": "Gestion Environnementale",
          "desc": "Ma\u00eetrise et r\u00e9duction continue des impacts \u00e9cologiques directs : d\u00e9carbonation des mobilit\u00e9s pendulaires et professionnelles, efficacit\u00e9 et sobri\u00e9t\u00e9 \u00e9nerg\u00e9tique du patrimoine b\u00e2ti, gestion circulaire des d\u00e9chets, pr\u00e9servation de la biodiversit\u00e9 sur site et achats publics responsables.",
          "isMuted": false
        },
        {
          "badge": "Axe 5",
          "num": "5.",
          "title": "Politique Sociale et Inclusion",
          "desc": "Engagement institutionnel pour la responsabilit\u00e9 soci\u00e9tale : \u00e9galit\u00e9 professionnelle femmes-hommes, inclusion et accessibilit\u00e9 des personnes en situation de handicap, \u00e9galit\u00e9 des chances, am\u00e9lioration de la qualit\u00e9 de vie et sant\u00e9 globale, et pr\u00e9vention de toute forme de discrimination.",
          "isMuted": true
        },
        {
          "badge": "Tag",
          "num": "6.",
          "title": "Mobilit\u00e9 Durable &amp; Report Modal (Sustainable Mobility)",
          "desc": "Strat\u00e9gie d'optimisation des transports articul\u00e9e autour de la hi\u00e9rarchie \u00ab \u00c9viter - Transf\u00e9rer - Am\u00e9liorer \u00bb (ASI). Promotion active du report modal vers le ferroviaire, les transports en commun et les mobilit\u00e9s douces face \u00e0 l'autosolisme et aux vols court-courriers.",
          "isMuted": true
        },
        {
          "badge": "Tag",
          "num": "7.",
          "title": "Bilan d'\u00c9missions de GES (BEGES / Bilan Carbone)",
          "desc": "Comptabilisation r\u00e9glementaire des gaz \u00e0 effet de serre (m\u00e9thode ADEME / ISO 14064) sur les trois p\u00e9rim\u00e8tres : Scope 1 (\u00e9missions directes), Scope 2 (\u00e9missions indirectes \u00e9nerg\u00e9tiques) et Scope 3 (\u00e9missions indirectes amont/aval : d\u00e9placements, achats, logistique et cycle de vie).",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "8.",
          "title": "Sobri\u00e9t\u00e9 \u00c9nerg\u00e9tique &amp; Efficacit\u00e9",
          "desc": "D\u00e9marche articulant la sobri\u00e9t\u00e9 (questionnement et r\u00e9duction des consommations par la modification des comportements et des usages collectifs) et l'efficacit\u00e9 (optimisation technique des rendements \u00e9nerg\u00e9tiques pour un m\u00eame niveau de service).",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "9.",
          "title": "Pr\u00e9servation de la Biodiversit\u00e9 &amp; Z\u00e9ro Artificialisation Nette (ZAN)",
          "desc": "Protection des \u00e9cosyst\u00e8mes et des continuit\u00e9s \u00e9cologiques (trames vertes et bleues). Application des exigences l\u00e9gales (loi Climat et R\u00e9silience) visant \u00e0 stopper la disparition nette d'espaces naturels et agricoles caus\u00e9e par les infrastructures et l'am\u00e9nagement.",
          "isMuted": true
        },
        {
          "badge": "Tag",
          "num": "10.",
          "title": "\u00c9quit\u00e9 Territoriale &amp; Accessibilit\u00e9 (Territorial Equity)",
          "desc": "Principe de justice spatiale garantissant un acc\u00e8s universel, abordable et s\u00e9curis\u00e9 aux r\u00e9seaux de transport et aux services d'int\u00e9r\u00eat g\u00e9n\u00e9ral pour l'ensemble des territoires (urbains, p\u00e9riurbains et ruraux), luttant contre la fracture et la pr\u00e9carit\u00e9 mobilit\u00e9.",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "11.",
          "title": "Achats Responsables &amp; Analyse du Cycle de Vie (ACV / LCA)",
          "desc": "Int\u00e9gration syst\u00e9matique de crit\u00e8res environnementaux et sociaux dans la commande publique et priv\u00e9e. \u00c9valuation globale des impacts de chaque produit, infrastructure ou service de son extraction jusqu'\u00e0 son recyclage ou \u00e9limination finale.",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "12.",
          "title": "Objectifs de D\u00e9veloppement Durable (ODD - Agenda 2030)",
          "desc": "Cadre universel des Nations Unies comprenant 17 objectifs interd\u00e9pendants pour concilier prosp\u00e9rit\u00e9 \u00e9conomique, progr\u00e8s social et protection de la biosph\u00e8re. Les politiques de transport et d'ing\u00e9nierie s'articulent principalement autour des ODD 9, 11, 12 et 13.",
          "isMuted": false
        }
      ]
    },
    "sessions": {
      "1": {
        "session": 1,
        "objectives": {
          "title": "Session 1 - Introduction & Aviation Survey Objectives",
          "summary": "By the end of this session, you will be able to discuss international aviation current events, express and defend professional opinions on commercial airline and aerodrome dilemmas, master regulatory modal verbs of obligation and permission, manage passenger service de-escalation under EU261 flight disruption rules, deliver a concise 60-second spoken consensus briefing, and consolidate key aviation lexis.",
          "items": [
            {
              "num": 1,
              "title": "Discuss Aviation News & Current Events (Fluency & Spontaneous Speech)",
              "description": "Engage in an opening discussion on current commercial aviation headlines, airport innovations, and diagnostic aerodrome terminology."
            },
            {
              "num": 2,
              "title": "Evaluate Commercial Aviation Dilemmas (Survey & Opinion Signposting)",
              "description": "Interview peers using structured question prompts on unruly passenger policies, low-cost carrier fees, armed flight crew protocols, and space tourism ethics."
            },
            {
              "num": 3,
              "title": "Master Regulatory Modals of Authority (Grammar: Obligation & Permission)",
              "description": "Accurately apply modal structures (must, must not, be required to, be authorized to, be prohibited from, should) in civil aviation safety contexts."
            },
            {
              "num": 4,
              "title": "Navigate Passenger Rights & Delay Disruption (Interactive Role-Play)",
              "description": "Collaborate in a paired simulation between an aerodrome passenger liaison / AFISO trainee and a stranded traveler, applying de-escalation strategies and EU261 care rules."
            },
            {
              "num": 5,
              "title": "Deliver a Structured Spoken Consensus Briefing (Summary & Presentation)",
              "description": "Synthesize a group policy debate regarding aerodrome alcohol sales into a fluent, cohesive 60-second verbal briefing with balanced arguments."
            },
            {
              "num": 6,
              "title": "Consolidate Core Vocabulary & Syllable Stress (Phonology & Review)",
              "description": "Consolidate the 18 essential introductory vocabulary terms, identify primary word stress patterns, and update personal portfolio learning logs."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 1 Lesson Plan (2 Hours)",
          "summary": "A 2-hour interactive communicative session featuring an aviation news opening, foundational lexis diagnostic, the Global Aviation Survey, a regulatory modals clinic, an EU261 disruption role-play, a policy mini-debate, and a 10-minute closing vocabulary consolidation.",
          "items": [
            {
              "time": "00-10",
              "title": "Part 1: Aviation News & Course Entry Diagnostic (10 mins)",
              "description": "Opening 10-minute warm-up: discuss recent global aviation headlines followed by rapid spot-checking of essential everyday aviation concepts (landside vs airside, airline vs aerodrome operator, scheduled vs charter, delay vs cancellation)."
            },
            {
              "time": "10-35",
              "title": "Part 2: The Global Aviation Survey (25 mins)",
              "description": "Speed-dating interviews: paired discussions on 4 prominent commercial dilemmas (in-flight alcohol caps, low-cost carrier fees, cockpit defense, and space tourism ethics) using formal opinion signposts."
            },
            {
              "time": "35-60",
              "title": "Part 3: Language Clinic: Modals of Obligation, Permission & Prohibition (25 mins)",
              "description": "Contrast must, have to, be required to, be prohibited from, and be authorized to. Practice with an interactive 'Spot the Regulatory Flaw' challenge analyzing aerodrome safety rules."
            },
            {
              "time": "60-85",
              "title": "Part 4: Operational Dilemma: EU261 & Delay Disruption Case Study (25 mins)",
              "description": "Concourse role-play: Ground Liaison / AFISO Trainee and Frustrated Passenger resolve a 4-hour delay crisis at a regional aerodrome, practicing de-escalation and statutory passenger entitlements."
            },
            {
              "time": "85-110",
              "title": "Part 5: Station Mini-Debate & Spoken Consensus Briefing (25 mins)",
              "description": "Small-group debate: 'Should all commercial aerodromes ban alcohol sales before boarding?' Teams deliver a structured 60-second verbal spokesperson briefing summarizing their consensus."
            },
            {
              "time": "110-120",
              "title": "Part 6: Vocabulary Review, Pronunciation & Class Wrap-Up (10 mins)",
              "description": "Final 10-minute consolidation: rapid recall of the 18 introductory terms, word stress and syllable drill, personal learning reflection, and portfolio logging."
            }
          ]
        },
        "lessonContent": {
          "hero": {
            "image": "images/aas_m1card1.png",
            "title": "Introduction & Aviation Survey",
            "subtitle": "Commercial Aviation Dilemmas, Passenger Disruption & Regulatory Modals"
          },
          "openingSession": {
            "title": "Activity 1: Aviation News & Course Entry Diagnostic (10 mins)",
            "summary": "Every class begins with a 10-minute professional opening: analyzing current aviation headlines and testing our understanding of foundational aviation distinctions.",
            "newsPrompts": [
              "What major commercial aviation, airline, or airport developments have you noticed in the headlines this week?",
              "How are international airlines and aerodrome authorities balancing post-pandemic passenger traffic surges with passenger satisfaction and environmental commitments?"
            ],
            "diagnostic": {
              "title": "Course Entry Diagnostic: Aviation Lexis Spot-Check",
              "instructions": "Discuss each operational distinction in pairs, then click 'Reveal Answer' to verify your reasoning.",
              "questions": [
                {
                  "id": 1,
                  "q": "What is the fundamental operational difference between Landside and Airside at an airport?",
                  "answer": "Landside represents the public terminal concourse (ticketing, landside check-in desks, arrivals hall, public car parks) accessible to anyone without travel documents. Airside is the secure operational zone beyond security checkpoints (departure lounges, boarding gates, aprons, taxiways, and runways) accessible only to screened ticketed passengers and badged personnel."
                },
                {
                  "id": 2,
                  "q": "What distinguishes an Airline (Air Carrier) from an Aerodrome Operator (Airport Authority)?",
                  "answer": "An airline owns, leases, and operates aircraft to provide commercial passenger and cargo air transport. An aerodrome operator owns, manages, and maintains airport ground infrastructure (pavement surfaces, lighting, terminals, safety facilities, fire services) and coordinates apron stand allocations."
                },
                {
                  "id": 3,
                  "q": "What is the legal difference between a Scheduled Flight and a Charter Flight?",
                  "answer": "A scheduled flight operates according to a published, regular commercial timetable regardless of passenger load. A charter flight is rented or hired as a whole by a specific organization, tour operator, or sports team for a dedicated itinerary outside the regular scheduled timetable."
                },
                {
                  "id": 4,
                  "q": "In European consumer protection (EU261), what is the key distinction between a Delay and a Flight Cancellation?",
                  "answer": "A delay means the flight operates under its original flight number but departs or arrives behind its published schedule. A cancellation means the planned flight was completely called off, obliging the airline to rebook passengers on alternative flights or issue full refunds plus statutory compensation."
                }
              ]
            }
          },
          "survey": {
            "title": "Activity 2: The Global Aviation Survey (25 mins)",
            "summary": "Conduct structured speed-dating interviews on 4 prominent commercial aviation dilemmas. Practice expressing nuanced agreement, providing concrete justifications, and using professional opinion signposts.",
            "signposts": [
              "\"From an operational standpoint, I believe...\"",
              "\"While I understand the commercial justification, I would argue that...\"",
              "\"We have to balance passenger convenience with strict safety protocols.\"",
              "\"In my view as a future aviation professional, ...\""
            ],
            "topics": [
              {
                "id": 1,
                "badge": "Cabin Safety & Alcohol",
                "statement": "Should airports and airlines enforce a strict two-drink maximum per passenger across all terminal bars and flights to reduce unruly passenger incidents?",
                "pro": "Alcohol intoxication contributes to over 70% of violent cabin disruptions, endangering cabin crew and resulting in costly emergency diversions.",
                "con": "A blanket limit unfairly restricts well-behaved passengers, reduces vital retail concession revenues for airports, and is logistically difficult to enforce across transit hubs.",
                "prompt": "Interview your partner: To what extent do you agree? What alternative prevention strategies could ground staff and cabin crew implement?"
              },
              {
                "id": 2,
                "badge": "Low-Cost vs Legacy Carriers",
                "statement": "Do budget airlines (Low-Cost Carriers) democratize air travel, or do unbundled fees (ancillary revenues for carry-ons, seat selection, and water) degrade passenger dignity?",
                "pro": "Unbundled pricing allows budget-conscious passengers, students, and families to travel across Europe for very low base fares, paying only for the exact services they need.",
                "con": "Hidden ancillary fees confuse travelers, generate boarding gate friction over carry-on bag dimensions, and increase ground staff stress.",
                "prompt": "Interview your partner: How do ancillary baggage fees impact gate boarding efficiency and ground staff workload?"
              },
              {
                "id": 3,
                "badge": "Cockpit Defense & FFDO",
                "statement": "Should commercial airline captains be authorized to carry concealed firearms in the cockpit under programs such as the US Federal Flight Deck Officer (FFDO) protocol?",
                "pro": "An armed pilot provides a decisive, last-line physical defense against suicidal hijackers if reinforced cockpit doors are compromised.",
                "con": "Introducing lethal firearms into a pressurized aircraft creates severe accidental discharge hazards and alters the psychological role of commercial aviators.",
                "prompt": "Interview your partner: Is a reinforced bulletproof cockpit door sufficient security, or are defensive weapons justified?"
              },
              {
                "id": 4,
                "badge": "Decarbonization vs Space Tourism",
                "statement": "Is commercial space tourism ethically justifiable while mainstream commercial aviation is spending billions trying to transition to Sustainable Aviation Fuel (SAF) and hydrogen?",
                "pro": "Suborbital space tourism accelerates commercial aerospace engineering, heat-shield materials research, and investment in future high-speed propulsion.",
                "con": "Suborbital flights generate massive carbon and soot emissions per passenger-minute for ultra-wealthy leisure, undermining public trust in green aviation.",
                "prompt": "Interview your partner: Should regulatory bodies impose heavy carbon taxes on suborbital leisure flights?"
              }
            ]
          },
          "modalsClinic": {
            "title": "Activity 3: Language Clinic: Modals of Obligation, Permission & Prohibition (25 mins)",
            "summary": "Master the precise grammar of operational authority. Distinguish absolute safety obligations from prohibitions, official authorizations, and operational advice without relying on technical jargon.",
            "rules": [
              {
                "title": "1. Strict Obligation (Must / Have to / Be required to)",
                "rule": "Mandatory safety rules and statutory requirements.",
                "example": "All ground personnel <strong>are required to wear</strong> high-visibility safety tabards on the active apron."
              },
              {
                "title": "2. Strict Prohibition (Must not / Be prohibited from + -ing)",
                "rule": "Unlawful actions and critical safety hazards.",
                "example": "Passengers <strong>are strictly prohibited from tampering with</strong> smoke detectors in aircraft lavatories."
              },
              {
                "title": "3. Official Permission (May / Can / Be authorized / permitted to)",
                "rule": "Formal legal authorizations and operational clearances.",
                "example": "Only certified technicians <strong>are authorized to connect</strong> the high-voltage ground power unit."
              },
              {
                "title": "4. Operational Recommendations (Should / Be advised to)",
                "rule": "Professional best practices and passenger advice.",
                "example": "Airlines <strong>should notify</strong> travelers of schedule revisions via mobile push alerts at least two hours prior."
              }
            ],
            "challenge": {
              "title": "Interactive Regulatory Challenge: Spot the Correct Modal",
              "instructions": "Select the correct modal form for each real-world airport scenario, then click 'Verify Rationale' to inspect the rule.",
              "questions": [
                {
                  "id": 1,
                  "context": "Passenger Security Screening",
                  "sentence": "Every passenger carry-on bag ________ through the X-ray scanner prior to concourse entry.",
                  "options": ["A) must pass", "B) is prohibited from passing", "C) should pass if time permits"],
                  "correct": "A) must pass",
                  "explanation": "Absolute statutory requirement: 100% of carry-on items are required by international civil aviation security standards to undergo screening."
                },
                {
                  "id": 2,
                  "context": "Apron Vehicular Road Speed Limits",
                  "sentence": "Service vehicles servicing aircraft ________ 25 km/h within marked apron transit corridors.",
                  "options": ["A) are authorized to exceed", "B) must not exceed", "C) should not have exceeded"],
                  "correct": "B) must not exceed",
                  "explanation": "Strict prohibition: Exceeding aerodrome speed limits endangers ramp workers and aircraft."
                },
                {
                  "id": 3,
                  "context": "Flight Deck Defense Qualification",
                  "sentence": "Under revised flight deck defense protocols, designated captains ________ defensive equipment exclusively inside the cockpit.",
                  "options": ["A) are authorized to carry", "B) must carry without training", "C) are prohibited from carry"],
                  "correct": "A) are authorized to carry",
                  "explanation": "Passive permission pattern: 'be authorized + to-infinitive'. It is an optional legal permission, not a mandatory obligation."
                },
                {
                  "id": 4,
                  "context": "Boarding Gate Priority Courtesy",
                  "sentence": "Passengers traveling with infants ________ to board during the priority pre-boarding sequence.",
                  "options": ["A) are invited / advised", "B) are prohibited", "C) must be forced"],
                  "correct": "A) are invited / advised",
                  "explanation": "Operational courtesy/advice: Priority boarding is offered for passenger convenience, not legally enforced."
                }
              ]
            }
          },
          "operationalCaseStudy": {
            "title": "Activity 4: Operational Dilemma: The EU261 Delay & Disruption Case Study (25 mins)",
            "summary": "A realistic airport concourse scenario: Flight AF1420 to Paris-CDG is delayed by 4 hours due to an incoming maintenance issue and a destination night curfew. Passengers are anxious and demanding cash payouts.",
            "roles": [
              {
                "role": "Role A: Passenger Service Liaison (AFISO / Operations Trainee)",
                "mission": "Remain calm, polite, and authoritative. Explain the cause of the delay truthfully without blaming colleagues. Outline immediate entitlements: food/drink vouchers, free telephone calls, and hotel accommodation if rescheduled for tomorrow. Clarify that financial compensation claims (EU261) must be submitted online after the journey, not handed out in cash at the departure gate.",
                "keyPhrases": [
                  "\"I completely appreciate your frustration regarding this delay, and I am here to help.\"",
                  "\"Our primary obligation right now is your comfort and safety.\"",
                  "\"Under EU261 regulations, we are currently issuing meal and refreshment vouchers.\"",
                  "\"While cash compensation is not disbursed at the boarding gate, our ground team will provide the official claim dossier.\""
                ]
              },
              {
                "role": "Role B: Frustrated Business Traveler",
                "mission": "You have a vital connecting flight or corporate meeting in Paris tomorrow morning. You are angry about missing your connection and want immediate cash, alternative flight rerouting on another carrier, or instant compensation.",
                "keyPhrases": [
                  "\"This delay is completely unacceptable; I'm going to miss my connecting international flight!\"",
                  "\"Under EU law, you owe me €250 compensation immediately. Where is my cash?\"",
                  "\"Can you endorse my ticket over to another airline that departs in 45 minutes?\"",
                  "\"Who is going to pay for my hotel if we don't take off tonight?\""
                ]
              }
            ],
            "task": "Conduct a 4-minute spoken role-play with your partner. Then swap roles. Focus on de-escalation, professional courtesy, and accurate explanation of passenger rights."
          },
          "miniDebate": {
            "title": "Activity 5: Station Mini-Debate & Spoken Consensus Briefing (25 mins)",
            "summary": "In small groups of 3 to 4, prepare and deliver structured arguments on an aerodrome management policy debate. Structure your arguments with a clear Claim, Operational Evidence, and Real-World Impact.",
            "motion": "Motion: All commercial aerodromes should introduce a total ban on alcohol retail sales in departure lounges and on flights under 3 hours.",
            "framework": [
              {
                "step": "1. State the Core Claim",
                "desc": "Clearly express your team's stance using formal opinion signposts.",
                "phrase": "\"Our working group firmly maintains that...\""
              },
              {
                "step": "2. Operational Evidence",
                "desc": "Cite ramp delays, cabin diversions, police intervention, or retail concessions impact.",
                "phrase": "\"Data shows that over 70% of cabin disruptions stem from pre-departure intoxication...\""
              },
              {
                "step": "3. Balanced Trade-offs",
                "desc": "Acknowledge the counter-argument and explain why your policy recommendation is superior.",
                "phrase": "\"While we recognize concession losses, safety compromises cannot be negotiated...\""
              },
              {
                "step": "4. Action Recommendation",
                "desc": "Propose a concrete operational solution.",
                "phrase": "\"We therefore recommend a digital 2-drink cap linked to boarding pass barcodes.\""
              }
            ],
            "spokenHandoverModel": {
              "title": "60-Second Team Spokesperson Briefing Model",
              "text": "\"Good afternoon colleagues. Our working group evaluated the proposed alcohol restrictions across regional aerodromes. On balance, we strongly recommend implementing a digital tracking system linked to boarding passes rather than an outright ban. While an outright ban would immediately reduce disruptive behavior at the gate, it would severely damage airport retail concession revenues—which fund critical safety upgrades—and penalize the 99% of passengers who drink responsibly. By capping alcohol sales at two units per boarding pass scan, aerodrome operations can maintain airport revenue while eliminating gate boarding confrontations.\""
            }
          },
          "closingReview": {
            "title": "Activity 6: 10-Minute Vocabulary Review, Pronunciation & Class Wrap-Up (10 mins)",
            "summary": "Consolidate today's 18 vocabulary terms, test your word stress, and update your personal English learning portfolio.",
            "reviewPrompts": [
              {
                "title": "Rapid Terminology Match",
                "desc": "Can you define Unruly Passenger, Ancillary Revenue, and EU261 in your own words without checking your notes?"
              },
              {
                "title": "Word Stress & Pronunciation Spot-Check",
                "desc": "Check your syllable stress on high-frequency terms: an-CIL-la-ry (4 syllables), pro-HI-bi-ted (4 syllables), al-lo-CA-tion (4 syllables), bio-ME-tric (4 syllables)."
              },
              {
                "title": "Personal Portfolio Reflection",
                "desc": "Record two new communicative phrases you successfully used during today's survey debate and role-play in your learning log."
              }
            ]
          }
        },
        "revision": {
          "title": "Session 1 Revision - Introduction & Aviation Survey",
          "summary": "Master the 18 key vocabulary terms for the Introduction & Aviation Survey to discuss security dilemmas, low-cost operations, alternative propulsion, and passenger rights.",
          "terms": [
            {
              "num": "01",
              "term": "Unruly Passenger",
              "definition": "A disruptive traveler who refuses to follow crew instructions or threatens cabin safety."
            },
            {
              "num": "02",
              "term": "Air Marshal",
              "definition": "An undercover law enforcement officer deployed on flights to prevent hijackings and security threats."
            },
            {
              "num": "03",
              "term": "Flight Deck Security",
              "definition": "Physical barriers, reinforced cockpit doors, and strict entry rules that protect pilots from intruders."
            },
            {
              "num": "04",
              "term": "Armed Pilot Protocol (FFDO)",
              "definition": "A legal framework allowing qualified pilots to carry concealed firearms in the cockpit for defense."
            },
            {
              "num": "05",
              "term": "Low-Cost Carrier (LCC)",
              "definition": "An airline offering low base fares while charging extra for luggage, seat selection, and meals."
            },
            {
              "num": "06",
              "term": "Ancillary Revenue",
              "definition": "Extra money an airline makes from optional fees like baggage, snacks, and priority boarding."
            },
            {
              "num": "07",
              "term": "Noise Abatement",
              "definition": "Flight paths, climb angles, and night curfews designed to reduce engine noise over residential areas."
            },
            {
              "num": "08",
              "term": "Decibel Footprint (EPNdB)",
              "definition": "The measured noise area an aircraft produces during takeoff, flyover, and landing approach."
            },
            {
              "num": "09",
              "term": "Sustainable Aviation Fuel (SAF)",
              "definition": "Clean jet fuel made from non-fossil waste or plants that significantly cuts net greenhouse gas emissions."
            },
            {
              "num": "10",
              "term": "Hydrogen Propulsion",
              "definition": "Aircraft engines that burn liquid hydrogen or use fuel cells to fly with zero in-flight carbon emissions."
            },
            {
              "num": "11",
              "term": "Hybrid-Electric Aircraft",
              "definition": "Aircraft combining fuel engines and battery motors to cut fuel use and noise during takeoff and climb."
            },
            {
              "num": "12",
              "term": "Space Tourism",
              "definition": "Commercial suborbital or orbital spaceflights carrying paying private passengers."
            },
            {
              "num": "13",
              "term": "Suborbital Trajectory",
              "definition": "A flight path that briefly reaches the edge of space before returning to Earth without entering orbit."
            },
            {
              "num": "14",
              "term": "Passenger Rights (EU261)",
              "definition": "Official rules requiring airlines to give cash compensation, meals, or hotels for long flight delays."
            },
            {
              "num": "15",
              "term": "Denied Boarding (Bumping)",
              "definition": "Refusing to let a ticketed passenger board a flight because the airline sold too many seats."
            },
            {
              "num": "16",
              "term": "Slot Allocation",
              "definition": "The scheduled permission granted to an airline by airport coordinators to land or take off at a congested hub."
            },
            {
              "num": "17",
              "term": "Biometric Screening",
              "definition": "Automated facial or fingerprint scanning at boarding gates to verify traveler identity quickly."
            },
            {
              "num": "18",
              "term": "Turnaround Time (TAT)",
              "definition": "The duration an aircraft remains parked at a gate between arriving from one flight and departing on the next."
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: Armed Pilots & Cockpit Defense",
              "watchUrl": "https://www.youtube.com/watch?v=udS812jbAiE",
              "tag": "Security & Policy",
              "videoId": "udS812jbAiE",
              "embedUrl": "https://www.youtube-nocookie.com/embed/udS812jbAiE",
              "caption": "Focus: Examine the legal debates, psychological screening, and operational safety rules of the Federal Flight Deck Officer (FFDO) armed pilot program."
            },
            {
              "title": "Video 2: Aircraft Turnaround Efficiency",
              "watchUrl": "https://www.youtube.com/watch?v=EiKeGmkX6fY",
              "tag": "Airline Operations",
              "videoId": "EiKeGmkX6fY",
              "embedUrl": "https://www.youtube-nocookie.com/embed/EiKeGmkX6fY",
              "caption": "Focus: Analyze ramp handling coordination, turnaround sequence choreography, refueling protocols, and rapid passenger deplaning/boarding."
            },
            {
              "title": "Video 3: The Future of Aviation Propulsion",
              "watchUrl": "https://www.youtube.com/watch?v=7KkBE0HgNJQ",
              "tag": "Clean Technology",
              "videoId": "7KkBE0HgNJQ",
              "embedUrl": "https://www.youtube-nocookie.com/embed/7KkBE0HgNJQ",
              "caption": "Focus: Compare cryogenic hydrogen fuel tanks, battery weight limitations, and hybrid propulsion systems for regional air travel."
            }
          ],
          "articles": [
            {
              "topic": "Cabin Safety & Passenger Behavior",
              "sourceTag": "Aviation Safety Weekly",
              "heading": "Zero Tolerance at 35,000 Feet: Should Airlines Enact Strict Airport and In-Flight Alcohol Bans?",
              "snippet": "Following an increase in violent in-flight incidents, flight attendants' unions and international aviation regulators debate whether pre-departure airport bar sales and in-flight alcohol service require mandatory statutory limits.",
              "readTime": "Estimated read: 4 mins",
              "url": "https://www.iata.org/en/pressroom/2023-releases/2023-06-05-01/"
            },
            {
              "topic": "Passenger Rights & Regulation",
              "sourceTag": "Air Transport Law Journal",
              "heading": "EU261 and Extraordinary Circumstances: Balancing Passenger Redress with Carrier Viability",
              "snippet": "How European compensation rules for 3-hour flight delays impact legacy and budget airlines during air traffic management industrial actions and adverse weather, and where passenger rights draw the line.",
              "readTime": "Estimated read: 5 mins",
              "url": "https://transport.ec.europa.eu/transport-themes/passenger-rights/air_en"
            }
          ],
          "resources": [
            {
              "url": "https://www.icao.int/Security/Pages/default.aspx",
              "tag": "01 \u2022 Global Security",
              "name": "ICAO Aviation Security (AVSEC)",
              "desc": "Official international standards on cockpit barriers, unruly passengers, and unlawful interference countermeasures."
            },
            {
              "url": "https://www.tsa.gov/for-industry/law-enforcement-programs",
              "tag": "02 \u2022 Cockpit Defense",
              "name": "TSA Federal Flight Deck Officer (FFDO)",
              "desc": "Protocols, firearm qualification guidelines, and legal authorities governing armed commercial flight crew."
            },
            {
              "url": "https://www.easa.europa.eu/en/domains/environment",
              "tag": "03 \u2022 Noise Standards",
              "name": "EASA Environmental Noise & Emissions",
              "desc": "European aviation environmental portal tracking noise abatement climb procedures, curfews, and decibel limits."
            },
            {
              "url": "https://www.clean-aviation.eu",
              "tag": "04 \u2022 Future Propulsion",
              "name": "Clean Aviation Joint Undertaking",
              "desc": "European public-private initiative developing hydrogen combustion engines and hybrid-electric commuter aircraft."
            },
            {
              "url": "https://aci.aero",
              "tag": "05 \u2022 Airport Operations",
              "name": "Airports Council International (ACI World)",
              "desc": "Global operational benchmarks on passenger terminal handling, turnaround efficiency, and apron safety."
            },
            {
              "url": "https://europa.eu/youreurope/citizens/travel/passenger-rights/air/index_en.htm",
              "tag": "06 \u2022 Passenger Rights",
              "name": "European Commission Air Passenger Rights",
              "desc": "Statutory European consumer protection guide on long tarmac delays, missed connections, and cancellations."
            }
          ],
          "grammar": {
            "title": "Modal Verbs of Obligation, Permission & Prohibition",
            "badge": "B1\u2013B2 Grammar Focus",
            "patternTitle": "Regulatory Formula",
            "formula": "Subject + Modal / Semi-Modal + Base Verb (Infinitive)",
            "rulesTitle": "Core Regulatory Rules",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. Strict Obligation (Must / Have to / Be required to):</strong> Mandatory safety rules (<em>\"All commercial aircrew <strong>must carry</strong> government credentials\"</em> / <em>\"Passengers <strong>are required to follow</strong> crew instructions\"</em>).",
              "<strong style=\"color: #1e293b;\">2. Strict Prohibition (Must not / May not / Be prohibited from):</strong> Unlawful actions (<em>\"Travelers <strong>are strictly prohibited from entering</strong> the flight deck without authorization\"</em>).",
              "<strong style=\"color: #1e293b;\">3. Official Permission (May / Can / Be authorized to):</strong> Legal authorization (<em>\"Deputized Federal Flight Deck Officers <strong>are authorized to carry</strong> defensive equipment in flight\"</em>).",
              "<strong style=\"color: #1e293b;\">4. Operational Recommendations (Should / Be advised to):</strong> Best practice guidelines (<em>\"Carriers <strong>should notify</strong> passengers of schedule revisions in advance\"</em>)."
            ],
            "trap": "<strong>\u26a0\ufe0f TOEIC Part 5 Verb Pattern Alert:</strong> Pure modals (<em>must, may, should, can</em>) are always followed directly by the bare infinitive (no \"to\"). Regulatory semi-modals require <strong>to + verb</strong> (<em>is required to submit</em>, <em>is authorized to board</em>) or preposition + gerund (<em>prohibited from smoking</em>).",
            "examplesTitle": "Aerodrome & Security Examples",
            "examples": [
              "<em>\"Flight attendants <strong>must verify</strong> that all overhead compartments are securely latched before taxi.\"</em>",
              "<em>\"Under EU261 regulations, delayed travelers <strong>are entitled to receive</strong> meals and hotel accommodation.\"</em>"
            ]
          },
          "toeic": {
            "stem": "Under revised flight deck defense protocols, certified airline captains are officially authorized ________ defensive equipment exclusively inside the cockpit.",
            "options": [
              {
                "letter": "A",
                "text": "carry"
              },
              {
                "letter": "B",
                "text": "to carry"
              },
              {
                "letter": "C",
                "text": "carrying"
              },
              {
                "letter": "D",
                "text": "carried"
              }
            ],
            "correctLetter": "B",
            "correctText": "to carry",
            "analysis": "The passive semi-modal construction \"be authorized + to-infinitive\" governs official permissions in workplace safety and TOEIC Part 5 grammar.",
            "strategy": "Memorize the three regulatory verb patterns: (1) modal + bare verb, (2) be required/authorized + to + verb, and (3) be prohibited from + -ing."
          },
          "toeicQuestions": [
            {
              "stem": "Under revised flight deck defense protocols, certified airline captains are officially authorized ________ defensive equipment exclusively inside the cockpit.",
              "options": [
                {
                  "letter": "A",
                  "text": "carry"
                },
                {
                  "letter": "B",
                  "text": "to carry"
                },
                {
                  "letter": "C",
                  "text": "carrying"
                },
                {
                  "letter": "D",
                  "text": "carried"
                }
              ],
              "correctLetter": "B",
              "correctText": "to carry",
              "analysis": "The passive semi-modal construction \"be authorized + to-infinitive\" governs official permissions.",
              "strategy": "Look for passive permission adjectives (authorized, permitted, allowed) which take to-infinitives."
            },
            {
              "stem": "All passenger carry-on baggage must ________ by security screening personnel before travelers enter the gate lounge.",
              "options": [
                {
                  "letter": "A",
                  "text": "inspect"
                },
                {
                  "letter": "B",
                  "text": "be inspected"
                },
                {
                  "letter": "C",
                  "text": "inspecting"
                },
                {
                  "letter": "D",
                  "text": "inspection"
                }
              ],
              "correctLetter": "B",
              "correctText": "be inspected",
              "analysis": "The modal auxiliary \"must\" requires a passive infinitive (\"be + past participle\") because baggage is the recipient of the security check.",
              "strategy": "Passive modal pattern: modal + be + V3 when the subject is an inanimate object."
            },
            {
              "stem": "Commercial pilots participating in the flight deck security program must strictly ________ with federal firearm storage rules.",
              "options": [
                {
                  "letter": "A",
                  "text": "comply"
                },
                {
                  "letter": "B",
                  "text": "observe"
                },
                {
                  "letter": "C",
                  "text": "fulfill"
                },
                {
                  "letter": "D",
                  "text": "abide"
                }
              ],
              "correctLetter": "A",
              "correctText": "comply",
              "analysis": "The verb \"comply\" collocates with the preposition \"with\" (comply with rules). \"Abide\" requires \"by\", whereas \"observe\" and \"fulfill\" take direct objects without prepositions.",
              "strategy": "Check the preposition following the blank: \"comply with\", \"abide by\", \"adhere to\"."
            },
            {
              "stem": "Low-cost carriers maximize profitability by completing gate turnaround tasks ________ so as to keep aircraft flying.",
              "options": [
                {
                  "letter": "A",
                  "text": "efficiency"
                },
                {
                  "letter": "B",
                  "text": "efficient"
                },
                {
                  "letter": "C",
                  "text": "efficiently"
                },
                {
                  "letter": "D",
                  "text": "efficiencies"
                }
              ],
              "correctLetter": "C",
              "correctText": "efficiently",
              "analysis": "The blank modifies the verb action \"completing gate turnaround tasks\", requiring an adverb ending in -ly.",
              "strategy": "Word form question: An adverb modifies a transitive verb and its direct object."
            },
            {
              "stem": "________ the departure delay exceeded four hours, the airline provided meal vouchers and hotel accommodations.",
              "options": [
                {
                  "letter": "A",
                  "text": "Because of"
                },
                {
                  "letter": "B",
                  "text": "Since"
                },
                {
                  "letter": "C",
                  "text": "Despite"
                },
                {
                  "letter": "D",
                  "text": "Due to"
                }
              ],
              "correctLetter": "B",
              "correctText": "Since",
              "analysis": "\"Since\" is a subordinating conjunction introducing a causal clause with a subject (\"the departure delay\") and verb (\"exceeded\"). \"Because of\" and \"Due to\" are prepositions followed by nouns only.",
              "strategy": "Conjunction vs. Preposition: If followed by [Subject + Verb], select a conjunction like Since, Although, or Because."
            }
          ],
          "pageUrl": "session1/admat_aas1.html"
        }
      },
      "2": {
        "session": 2,
        "objectives": {
          "title": "Session 2 - Passenger Journey & Airfield Movement Objectives",
          "summary": "By the end of this session, you will be able to discuss aviation news and review core lexis, map terminal facilitation from landside to airside, master prepositions of place and movement, coordinate airside intercept and de-escalation role-play, decode airfield ground markings, deliver a concise 60-second spoken briefing, and consolidate key aeronautical lexis.",
          "items": [
            {
              "num": 1,
              "title": "Discuss Aviation Headlines & Catch-Up Review (Fluency & Spontaneous Speech)",
              "description": "Engage in an opening discussion on current airport passenger technology headlines, followed by rapid spot-checking of Session 1 foundational terms."
            },
            {
              "num": 2,
              "title": "Map Passenger Terminal Flow & Wayfinding (Facilitation & Dilemmas)",
              "description": "Trace travelers through 5 concourse touchpoints and evaluate dilemmas regarding biometric e-gates, automated bag drops, and passenger accessibility."
            },
            {
              "num": 3,
              "title": "Master Spatial Prepositions of Place & Movement (Grammar & Operational Clarity)",
              "description": "Accurately deploy prepositions of point (at), volume (in), surface (on), and directional transit (along, across, through, onto) in aerodrome contexts."
            },
            {
              "num": 4,
              "title": "Manage Unauthorized Airside Access & De-escalation (Interactive Role-Play)",
              "description": "Collaborate in a paired simulation between an Aerodrome Ground Liaison / AFISO Trainee and a Ramp Service Lead resolving an apron access breach."
            },
            {
              "num": 5,
              "title": "Decode Airfield Markings & Deliver a 60-Second Briefing (Summary & Presentation)",
              "description": "Analyze runway magnetic designators, yellow taxiway centerlines, and holding positions, delivering a structured verbal briefing model."
            },
            {
              "num": 6,
              "title": "Consolidate Core Vocabulary & Syllable Stress (Phonology & Review)",
              "description": "Consolidate the 18 essential technical terms, practice primary word stress patterns, and update personal portfolio learning logs."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 2 Lesson Plan (2 Hours)",
          "summary": "A 2-hour communicative session exploring passenger terminal architecture, airside movement areas, directional prepositions, apron safety role-play, airfield markings, and a 10-minute vocabulary consolidation.",
          "items": [
            {
              "time": "00-10",
              "title": "Part 1: Aviation News & Session 1 Catch-Up Spot-Check (10 mins)",
              "description": "Opening 10-minute warm-up: discuss recent international airport technology headlines, followed by rapid paired recall of Session 1 key lexis (unruly passenger, ancillary revenue, EU261, TAT)."
            },
            {
              "time": "10-35",
              "title": "Part 2: Passenger Terminal Flow & Facilitation Dilemmas (25 mins)",
              "description": "Trace the 5-stage passenger journey from curb to gate, followed by paired discussion and agreement scoring on biometric screening ethics and baggage automation."
            },
            {
              "time": "35-60",
              "title": "Part 3: Language Clinic: Prepositions of Place, Direction & Movement (25 mins)",
              "description": "Contrast static positions (at, in, on) with traversal motion (across, along, through, onto). Practice with an interactive 'Spot the Preposition Flaw' challenge."
            },
            {
              "time": "60-85",
              "title": "Part 4: Operational Case Study: Unauthorized Apron Access (25 mins)",
              "description": "Airside radio role-play: Aerodrome Ground Liaison / AFISO Trainee and Ramp Service Lead coordinate to intercept and de-escalate a disoriented passenger on the active apron."
            },
            {
              "time": "85-110",
              "title": "Part 5: Airfield Guidance Markings & Spoken Briefing (25 mins)",
              "description": "Workshop on runway magnetic headings (09/27), taxiway centerlines, and holding points. Small groups deliver a structured 60-second verbal safety briefing."
            },
            {
              "time": "110-120",
              "title": "Part 6: Vocabulary Review, Pronunciation & Class Wrap-Up (10 mins)",
              "description": "Final 10-minute consolidation: rapid recall of the 18 terms, word stress and syllable drill, personal learning reflection, and portfolio logging."
            }
          ]
        },
        "lessonContent": {
          "hero": {
            "image": "images/aas_m1card2.png",
            "title": "Passenger Journey & Airfield Movement",
            "subtitle": "Terminal Facilitation, Spatial Prepositions & Airside Guidance Systems"
          },
          "openingSession": {
            "title": "Activity 1: Aviation News & Session 1 Catch-Up Spot-Check (10 mins)",
            "summary": "Every class begins with a 10-minute professional opening: analyzing current airport technology headlines and spot-checking vocabulary from our previous session.",
            "newsPrompts": [
              "What recent airport terminal innovations (biometric facial recognition e-gates, CT carry-on scanners, automated baggage drops) have appeared in global travel news?",
              "How are modern international aerodromes managing rising passenger volumes while maintaining short queue times at security screening?"
            ],
            "catchUpSpotCheck": {
              "title": "Session 1 Catch-Up Spot-Check: Rapid Terminology Recall",
              "instructions": "Discuss each question with your partner, then click 'Reveal Answer' to verify your operational understanding.",
              "questions": [
                {
                  "id": 1,
                  "term": "Unruly Passenger",
                  "q": "What is an 'Unruly Passenger', and what operational consequences can disruptive cabin behavior cause?",
                  "answer": "An unruly passenger is a traveler who fails to respect crew instructions or disrupts cabin safety. Operational consequences include flight diversions, heavy airline fuel and rescheduling costs, police intervention upon landing, and potential flight bans."
                },
                {
                  "id": 2,
                  "term": "Ancillary Revenue",
                  "q": "How does 'Ancillary Revenue' drive low-cost carrier business models, and where can it create boarding gate delays?",
                  "answer": "Ancillary revenue is income generated from non-ticket sales (carry-on bags, seat selection, priority boarding). At the boarding gate, measuring oversized carry-on luggage and charging last-minute fees can slow passenger processing and increase turnaround time."
                },
                {
                  "id": 3,
                  "term": "Passenger Rights (EU261)",
                  "q": "Under EU261 regulations, what immediate duty of care must an airline provide during a 4-hour departure delay?",
                  "answer": "The carrier is obligated to provide free meal and refreshment vouchers, two free telephone calls or emails, and overnight hotel accommodation with ground transport if the departure is postponed to the following day."
                },
                {
                  "id": 4,
                  "term": "Turnaround Time (TAT)",
                  "q": "What is 'Turnaround Time (TAT)', and why is it critical for airport ground operations?",
                  "answer": "TAT is the duration an aircraft remains parked at an apron stand between arrival and departure. Fast turnarounds maximize aircraft utilization and daily flight hours while optimizing apron stand and gate capacity."
                }
              ]
            }
          },
          "terminalJourney": {
            "title": "Activity 2: Passenger Terminal Flow & Facilitation Dilemmas (25 mins)",
            "summary": "Examine the 5 sequential touchpoints of the passenger journey from landside to airside, followed by paired debate on passenger automation dilemmas.",
            "stages": [
              {
                "num": "01",
                "title": "Landside Check-In & Bag Drop",
                "area": "Landside Public Zone",
                "desc": "Passengers use self-service kiosks to print boarding passes and baggage tags, then deposit luggage at automated conveyor bag drops."
              },
              {
                "num": "02",
                "title": "Security Screening Checkpoint",
                "area": "Boundary Transition",
                "desc": "Carry-on luggage passes through X-ray or CT scanners while travelers proceed through walk-through metal detectors or body scanners."
              },
              {
                "num": "03",
                "title": "Airside Concourse & Dwell Time",
                "area": "Airside Secure Zone",
                "desc": "Ticketed passengers spend their dwell hour in duty-free retail, dining areas, and gate lounges while monitoring Flight Information Displays (FIDS)."
              },
              {
                "num": "04",
                "title": "Boarding Gate & Jet Bridge",
                "area": "Airside Departure Gate",
                "desc": "Gate agents scan boarding passes and verify passports before passengers cross the jet bridge (airbridge) onto the aircraft."
              },
              {
                "num": "05",
                "title": "Special Assistance (PRM)",
                "area": "Terminal-Wide Service",
                "desc": "Dedicated ground teams facilitate Passengers with Reduced Mobility (PRM) via electric buggies, specialized lifts, and priority access."
              }
            ],
            "dilemmas": [
              {
                "id": 1,
                "badge": "Biometric E-Gates vs Privacy",
                "statement": "Should international airports implement 100% contactless biometric facial recognition at all checkpoints, replacing physical passports and boarding passes?",
                "pro": "Biometrics dramatically reduces queue times, eliminates fraudulent documents, and accelerates passenger boarding by over 30%.",
                "con": "Centralized storage of passenger facial templates poses cyber-security risks, raises civil privacy concerns, and risks algorithmic bias.",
                "prompt": "Interview your partner: How do you balance passenger processing speed with biometric data privacy?"
              },
              {
                "id": 2,
                "badge": "Fully Automated Bag Drop vs Staffing",
                "statement": "Should airports replace traditional staffed check-in counters entirely with automated bag-drop conveyor machines?",
                "pro": "Self-service bag drop cuts airline labor costs, operates 24/7 without shift gaps, and reduces terminal floor space requirements.",
                "con": "Elderly, disabled, or infrequent travelers struggle with self-tagging, generating passenger stress and kiosk congestion when luggage tags tear.",
                "prompt": "Interview your partner: What customer assistance protocols should ground operations maintain when check-in is automated?"
              }
            ]
          },
          "prepositionsClinic": {
            "title": "Activity 3: Language Clinic: Prepositions of Place, Direction & Movement (25 mins)",
            "summary": "Master the spatial grammar of aerodrome navigation. Distinguish fixed nodes (AT) from enclosed halls (IN), flat operational surfaces (ON), and linear traversal (ALONG, ACROSS, THROUGH).",
            "rules": [
              {
                "title": "1. AT (Specific Nodes & Points)",
                "rule": "Counters, gates, holding lines, and exact service stations.",
                "example": "Passengers must assemble <strong>at Gate B14</strong> twenty minutes prior to departure."
              },
              {
                "title": "2. IN (Enclosed Volumes & Rooms)",
                "rule": "Interior terminal spaces, lounges, and covered hangars.",
                "example": "Travelers may wait comfortably <strong>in the departure lounge</strong> or browse duty-free."
              },
              {
                "title": "3. ON (Operational Surfaces & Lines)",
                "rule": "Pavement, aprons, taxiways, runways, and centerlines.",
                "example": "The regional aircraft is parked <strong>on Stand 06</strong> on the terminal apron."
              },
              {
                "title": "4. Directional Motion (Through / Along / Across)",
                "rule": "Traversal path, boundary crossing, and linear tracking.",
                "example": "The aircraft taxied <strong>along Taxiway Alpha</strong> and held short <strong>of Runway 27</strong>."
              }
            ],
            "challenge": {
              "title": "Interactive Spatial Challenge: Spot the Correct Preposition",
              "instructions": "Select the correct spatial preposition for each operational airport scenario, then click 'Verify Rationale' to inspect the rule.",
              "questions": [
                {
                  "id": 1,
                  "context": "Passenger Security Screening",
                  "sentence": "Departing passengers must walk ________ the millimeter-wave body scanner before entering airside.",
                  "options": ["A) through", "B) across", "C) at"],
                  "correct": "A) through",
                  "explanation": "Traversal through an enclosed 3D threshold or portal requires the preposition 'through'."
                },
                {
                  "id": 2,
                  "context": "Apron Pushback Procedure",
                  "sentence": "The pushback tug slowly moved the passenger aircraft backward ________ the active apron transit lane.",
                  "options": ["A) onto", "B) into", "C) at"],
                  "correct": "A) onto",
                  "explanation": "Movement towards and positioning upon an open, flat operational pavement surface uses 'onto'."
                },
                {
                  "id": 3,
                  "context": "Ground Vehicular Traffic Crossing",
                  "sentence": "Baggage tractor drivers must never drive ________ the active taxiway without visual verification and clearance.",
                  "options": ["A) across", "B) along", "C) in"],
                  "correct": "A) across",
                  "explanation": "Motion from one side of a surface boundary or linear corridor to the opposite side requires 'across'."
                },
                {
                  "id": 4,
                  "context": "Boarding Gate Assembly",
                  "sentence": "Passenger assistance agents are stationed ________ the automated boarding gate to assist travelers with infants.",
                  "options": ["A) at", "B) on", "C) in"],
                  "correct": "A) at",
                  "explanation": "Specific service counters, numbered gates, and operational checkpoints take the preposition 'at'."
                }
              ]
            }
          },
          "airsideCaseStudy": {
            "title": "Activity 4: Operational Case Study: Unauthorized Apron Access (25 mins)",
            "summary": "A disoriented passenger who missed their boarding call pushed through an emergency exit door onto the terminal apron looking for their plane, triggering a ramp safety alert.",
            "roles": [
              {
                "role": "Role A: Aerodrome Ground Liaison / AFISO Trainee",
                "mission": "Broadcast a clear VHF alert to ground vehicles. Give precise spatial coordinates of the passenger using accurate prepositions. Coordinate with the ramp service team to intercept the traveler calmly without causing a panic, and escort them back through the secure airside door.",
                "keyPhrases": [
                  "\"All apron vehicles on Service Road Bravo, hold position immediately.\"",
                  "\"We have an unauthorized passenger on the apron, 30 meters from Stand 4, walking towards Taxiway Alpha.\"",
                  "\"Ramp Escort Team, please proceed along the yellow safety walkway to intercept the individual.\"",
                  "\"Sir, please remain at your current position; our ground operations team is escorting you back into the terminal concourse.\""
                ]
              },
              {
                "role": "Role B: Ramp Service Escort Lead",
                "mission": "Acknowledge the alert; confirm your vehicle or foot position; intercept the traveler courteously; explain the severe danger of active jet engines, prop wash, and service vehicles; guide them safely back inside the terminal building.",
                "keyPhrases": [
                  "\"Ground Liaison, Ramp Escort 2 copies; I have visual contact on the passenger near the fueling hydrant cart.\"",
                  "\"Approaching the traveler on foot along Stand 4 boundary line now.\"",
                  "\"Good afternoon sir; this apron area is strictly restricted to authorized staff due to moving aircraft. Please follow me back into the lounge.\"",
                  "\"Ground Liaison, individual secured and escorted back into Gate B12 lounge. Apron Stand 4 clear to resume operations.\""
                ]
              }
            ],
            "task": "Conduct a 4-minute spoken VHF radio exchange and de-escalation role-play. Focus on spatial precision, professional composure, and clear prepositions. Then swap roles."
          },
          "guidanceWorkshop": {
            "title": "Activity 5: Airfield Guidance Markings & Spoken Briefing (25 mins)",
            "summary": "Analyze the visual aids, taxiway guidance lines, and runway designators that ensure safe ground navigation, then deliver a 60-second spoken safety briefing.",
            "markings": [
              {
                "id": 1,
                "badge": "Magnetic Heading",
                "title": "Runway Designators (Numbers & Letters)",
                "desc": "A two-digit number painted on runway thresholds indicating magnetic azimuth to the nearest 10 degrees. Runway 09 points 090° (East); reciprocal threshold 27 points 270° (West). Parallel runways add L (Left), C (Center), or R (Right)."
              },
              {
                "id": 2,
                "badge": "Taxiway Guidance",
                "title": "Taxiway Centerline & Boundary Lines",
                "desc": "A continuous solid yellow line along the center of a taxiway that pilots track with nose gear to ensure wingtip obstacle clearance. Double dashed yellow edge lines denote apron taxi lane boundaries."
              },
              {
                "id": 3,
                "badge": "Mandatory Stop Line",
                "title": "Runway-Holding Position Markings",
                "desc": "Consists of two solid yellow lines and two dashed yellow lines painted across the taxiway. Aircraft approaching the runway must stop before the solid lines until cleared to enter or cross."
              },
              {
                "id": 4,
                "badge": "Incursion Defense",
                "title": "Stop Bars & Red Mandatory Signs",
                "desc": "A row of flush red lights embedded across the taxiway pavement accompanied by red signs with white lettering (e.g., 09-27). When illuminated, no vehicle or aircraft may cross."
              }
            ],
            "spokenHandoverModel": {
              "title": "60-Second Airfield Safety Briefing Model",
              "text": "\"Good morning team. Here is our daily airfield pavement inspection summary for Runway 09/27 and its associated taxiway network. Pavement friction levels along Runway 09 Left are within nominal safety thresholds, but recent repaving near Holding Point Bravo has temporarily obscured the double solid holding position lines. A NOTAM has been issued, and maintenance crews will repaint the mandatory markings tonight at 2300 hours. In the interim, all ground vehicle operators must exercise heightened vigilance when holding short at Bravo, and verify taxiway centerline alignment on Taxiway Alpha due to ongoing apron stand expansion. Thank you.\""
            }
          },
          "closingReview": {
            "title": "Activity 6: 10-Minute Vocabulary Review, Pronunciation & Class Wrap-Up (10 mins)",
            "summary": "Consolidate today's 18 technical vocabulary terms, practice syllable stress, and update your personal English learning portfolio.",
            "reviewPrompts": [
              {
                "title": "Rapid Operational Distinction",
                "desc": "Can you explain the practical difference between Movement Area and Manoeuvring Area, and between Dwell Time and TAT?"
              },
              {
                "title": "Word Stress & Pronunciation Spot-Check",
                "desc": "Check syllable stress: fa-CI-li-ta-tion (5 syllables), ma-NOEU-vring (3 syllables), in-CUR-sion (3 syllables), de-SIG-na-tor (4 syllables)."
              },
              {
                "title": "Personal Portfolio Reflection",
                "desc": "Record two spatial prepositions and one operational radio phrase you practiced during today's apron case study into your learning log."
              }
            ]
          }
        },
        "revision": {
          "title": "Session 2 Revision - Passenger Flow & Airfield Movement Areas",
          "summary": "Master the 18 key technical vocabulary terms covering passenger terminal flow, airside movement areas, ground markings, and runway numbering.",
          "terms": [
            {
              "num": "01",
              "term": "Landside",
              "definition": "The public areas of an airport terminal (ticketing, check-in, arrivals hall) accessible without a boarding pass."
            },
            {
              "num": "02",
              "term": "Self-Service Kiosk",
              "definition": "Automated touchscreens where passengers check in, print boarding passes, and generate baggage tags independently."
            },
            {
              "num": "03",
              "term": "Automated Bag Drop",
              "definition": "A conveyor system where ticketed travelers scan luggage tags and deposit checked bags without agent help."
            },
            {
              "num": "04",
              "term": "Security Screening Checkpoint",
              "definition": "The inspection point using metal detectors, body scanners, and X-ray machines to examine carry-on luggage."
            },
            {
              "num": "05",
              "term": "Airside",
              "definition": "The secure airport zone beyond security, including departure lounges, duty-free retail, gates, and aircraft stands."
            },
            {
              "num": "06",
              "term": "Dwell Time",
              "definition": "The duration passengers spend in the terminal between clearing security and boarding, driving retail revenue."
            },
            {
              "num": "07",
              "term": "Boarding Gate",
              "definition": "The concourse doorway and service counter through which ticketed travelers present passes to board."
            },
            {
              "num": "08",
              "term": "Jet Bridge (Airbridge)",
              "definition": "An enclosed, movable telescopic bridge linking the airport departure gate directly to the airplane door."
            },
            {
              "num": "09",
              "term": "Apron (Ramp)",
              "definition": "The designated paved area where aircraft park to load passengers, refuel, load baggage, and undergo servicing."
            },
            {
              "num": "10",
              "term": "Movement Area",
              "definition": "The aerodrome surface comprising runways, taxiways, and aprons used for aircraft surface movement."
            },
            {
              "num": "11",
              "term": "Manoeuvring Area",
              "definition": "The runways and taxiways strictly managed for aircraft surface movements, distinct from terminal servicing aprons."
            },
            {
              "num": "12",
              "term": "Pushback Tug",
              "definition": "A specialized heavy vehicle used to push aircraft backward out of their parking stands into taxi lanes."
            },
            {
              "num": "13",
              "term": "Marshaller",
              "definition": "Ground handling personnel using illuminated wands to guide pilots precisely into an apron parking stand."
            },
            {
              "num": "14",
              "term": "Foreign Object Debris (FOD)",
              "definition": "Loose items, trash, or metal fragments on taxiways or runways capable of damaging aircraft engines or tires."
            },
            {
              "num": "15",
              "term": "Taxiway Centerline",
              "definition": "A solid yellow line painted on taxiway pavement that pilots align with nose gear to ensure wingtip obstacle clearance."
            },
            {
              "num": "16",
              "term": "Runway-Holding Position",
              "definition": "A mandatory painted marking (two solid and two dashed yellow lines) and red sign where aircraft must stop short."
            },
            {
              "num": "17",
              "term": "Runway Incursion",
              "definition": "Any unauthorized presence of an aircraft, vehicle, or pedestrian on a protected runway surface designated for takeoff or landing."
            },
            {
              "num": "18",
              "term": "Runway Designator (Numbering)",
              "definition": "The two-digit number painted on a runway end representing its magnetic azimuth rounded to the nearest 10 degrees."
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: Passenger Flow Architecture",
              "watchUrl": "https://www.youtube.com/watch?v=oeJcvKZG2w8",
              "tag": "Landside Design",
              "videoId": "oeJcvKZG2w8",
              "embedUrl": "https://www.youtube-nocookie.com/embed/oeJcvKZG2w8",
              "caption": "Focus: Examine terminal wayfinding psychology, queue mitigation at security checkpoints, and concourse commercial layouts shaping the airside dwell hour."
            },
            {
              "title": "Video 2: Taxi & Line-Up Procedures",
              "watchUrl": "https://www.youtube.com/watch?v=XeUxBxDUGCk",
              "tag": "Airside Taxi",
              "videoId": "XeUxBxDUGCk",
              "embedUrl": "https://www.youtube-nocookie.com/embed/XeUxBxDUGCk",
              "caption": "Focus: Follow cockpit taxi procedures from gate stand to runway: yellow centerline tracking, taxiway speed rules, holding short at threshold lines, and lining up."
            },
            {
              "title": "Video 3: Runway Numbers & Markings",
              "watchUrl": "https://www.youtube.com/watch?v=H701DOaQvDM",
              "tag": "Ground Guidance",
              "videoId": "H701DOaQvDM",
              "embedUrl": "https://www.youtube-nocookie.com/embed/H701DOaQvDM",
              "caption": "Focus: Learn how magnetic bearings determine runway numbers (09/27), parallel designations (L, C, R), and the meaning of piano key threshold markings."
            }
          ],
          "articles": [
            {
              "topic": "Terminal Facilitation",
              "sourceTag": "ACI World Insights",
              "heading": "Airport Passenger Journey Continuity: Building Trust Across Touchpoints",
              "snippet": "Airports Council International explores integrated passenger flows from curb to gate, evaluating self-service bag drop, biometric checkpoints, and dwell time optimization in international terminals.",
              "readTime": "Estimated read: 6 mins",
              "url": "https://blog.aci.aero/customer-experience/airport-passenger-journey-continuity/"
            },
            {
              "topic": "Aerodrome Infrastructure",
              "sourceTag": "SKYbrary Aviation Safety",
              "heading": "Movement Area Safety & Aerodrome Operations (ICAO Annex 14)",
              "snippet": "A regulatory breakdown contrasting the manoeuvring area (runways and taxiways strictly controlled by ATC Tower/Ground) with the apron, establishing operational boundaries and safety management protocols.",
              "readTime": "Estimated read: 7 mins",
              "url": "https://skybrary.aero/articles/movement-area"
            },
            {
              "topic": "Navigation Technology",
              "sourceTag": "Simple Flying Tech",
              "heading": "How Do Airports Number Their Runways? A Technical Guide",
              "snippet": "An accessible engineering explanation of magnetic compass azimuths, 180-degree reciprocal ends, parallel runway letters, and why shifting magnetic poles force airports to repaint numbers over time.",
              "readTime": "Estimated read: 5 mins",
              "url": "https://simpleflying.com/runways-naming/"
            },
            {
              "topic": "Surface Safety",
              "sourceTag": "SKYbrary Safety Matrix",
              "heading": "Taxiway Surface Markings, Mandatory Signs & Holding Positions",
              "snippet": "Visual safety guidelines covering yellow taxiway centerlines, enhanced markings, runway holding positions (two solid and two dashed yellow lines), and illuminated stop bars designed to prevent runway incursions.",
              "readTime": "Estimated read: 8 mins",
              "url": "https://skybrary.aero/articles/taxiway-surface-markings-and-signs"
            }
          ],
          "resources": [
            {
              "url": "https://www.icao.int/safety/airnavigation/Pages/aerodromes.aspx",
              "tag": "01 • Global Standards",
              "name": "ICAO Aerodromes Portal",
              "desc": "Official international standards for runway dimensions, pavement visual aids, ground lighting, and aerodrome safety certificates."
            },
            {
              "url": "https://skybrary.aero/articles/taxiway-surface-markings-and-signs",
              "tag": "02 • Safety Encyclopedia",
              "name": "SKYbrary Surface Markings",
              "desc": "Comprehensive illustrated directory of airport pavement markings, holding position lines, and mandatory instruction signs."
            },
            {
              "url": "https://www.flightradar24.com",
              "tag": "03 • Live Ground Tracking",
              "name": "Flightradar24 Surface Radar",
              "desc": "Real-time interactive radar tracking showing commercial airliners taxiing from gate stands across taxiways to active runways worldwide."
            },
            {
              "url": "https://www.faa.gov/airports/runway_safety",
              "tag": "04 • Incursion Prevention",
              "name": "FAA Runway Safety Office",
              "desc": "Interactive airfield diagram quizzes, surface navigation animations, and training resources aimed at eliminating runway incursions."
            },
            {
              "url": "https://aci.aero",
              "tag": "05 • Airport Management",
              "name": "Airports Council International (ACI)",
              "desc": "Global association benchmark reports on terminal efficiency, baggage automation, and Airport Service Quality (ASQ) metrics."
            },
            {
              "url": "https://aircraft.airbus.com",
              "tag": "06 • Aircraft Engineering",
              "name": "Airbus Safety & Ground Operations",
              "desc": "Manufacturer briefings on runway braking friction, Runway Overrun Prevention Systems (ROPS), and aircraft apron maneuvering dynamics."
            }
          ],
          "grammar": {
            "title": "Prepositions of Place, Direction & Movement",
            "badge": "B1–B2 Grammar Focus",
            "patternTitle": "Spatial Matrix",
            "formula": "AT (Point/Gate) • IN (Enclosed Room) • ON (Surface/Apron) • ACROSS / ALONG (Movement)",
            "rulesTitle": "Static Positions vs. Dynamic Direction",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. AT (Specific Service Points &amp; Nodes):</strong> Counters, desks, and intersections (<em>\"Check in <strong>at</strong> the automated kiosk\"</em> / <em>\"Hold <strong>at</strong> Holding Point Alpha\"</em> / <em>\"Board <strong>at</strong> Gate B22\"</em>).",
              "<strong style=\"color: #1e293b;\">2. IN (Enclosed Volumes &amp; Concourse Halls):</strong> Inside rooms or buildings (<em>\"Wait <strong>in</strong> the departure lounge\"</em> / <em>\"Shop <strong>in</strong> duty-free\"</em> / <em>\"Inspect engines <strong>in</strong> Hangar 2\"</em>).",
              "<strong style=\"color: #1e293b;\">3. ON (Pavement Surfaces &amp; Movement Lines):</strong> Flat operational ground (<em>\"Parked <strong>on</strong> the apron\"</em> / <em>\"Taxiing <strong>on</strong> Taxiway Bravo\"</em> / <em>\"Aligning <strong>on</strong> Runway 09L\"</em> / <em>\"Centered <strong>on</strong> the yellow line\"</em>).",
              "<strong style=\"color: #1e293b;\">4. Directional Prepositions (Through / Along / Across):</strong> Path and transit (<em>\"Walk <strong>through</strong> security screening\"</em> / <em>\"Taxi <strong>along</strong> the centerline\"</em> / <em>\"Never drive <strong>across</strong> an active runway\"</em>)."
            ],
            "trap": "<strong>⚠️ TOEIC Part 5 Preposition Trap:</strong> Beware of verb collocations! Static locations use <em>at, in, on</em> (<em>wait at the gate</em>). Motion towards a destination requires <em>to, into, onto, across</em> (<em>proceed to the gate</em>, <em>walk onto the jet bridge</em>). Don't confuse stationary states with directional transit!",
            "examplesTitle": "Airfield & Concourse Examples",
            "examples": [
              "<em>\"Passengers must pass <strong>through</strong> security before entering the retail concourse.\"</em>",
              "<em>\"Flight 840 is cleared to taxi <strong>along</strong> Taxiway Juliet and hold short <strong>at</strong> Runway 27.\"</em>"
            ]
          },
          "toeic": {
            "stem": "Ground vehicles servicing aircraft on the terminal apron are strictly forbidden from driving ________ the marked runway boundary lines without obtaining direct clearance from air traffic control.",
            "options": [
              {
                "letter": "A",
                "text": "across"
              },
              {
                "letter": "B",
                "text": "into"
              },
              {
                "letter": "C",
                "text": "along"
              },
              {
                "letter": "D",
                "text": "between"
              }
            ],
            "correctLetter": "A",
            "correctText": "across",
            "analysis": "The preposition \"across\" denotes transverse motion from one side of a surface boundary to the other (driving across a line or runway). In TOEIC Part 5, spatial prepositions of traversal (across) are frequently tested against parallel motion (along) or interior motion (into).",
            "strategy": "Always check whether the verb denotes traversal (crossing over: across), linear alignment (parallel to: along), or entry into an enclosed space (into / through)."
          },
          "toeicQuestions": [
            {
              "stem": "Ground vehicles servicing aircraft on the terminal apron are strictly forbidden from driving ________ the marked runway boundary lines without obtaining direct clearance from air traffic control.",
              "options": [
                {
                  "letter": "A",
                  "text": "across"
                },
                {
                  "letter": "B",
                  "text": "into"
                },
                {
                  "letter": "C",
                  "text": "along"
                },
                {
                  "letter": "D",
                  "text": "between"
                }
              ],
              "correctLetter": "A",
              "correctText": "across",
              "analysis": "The preposition \"across\" denotes transverse motion from one side of a boundary to the other.",
              "strategy": "Check traversal motion vs. parallel or interior movement."
            },
            {
              "stem": "Departing passengers must present their boarding passes to airline gate agents ________ Gate B14 prior to boarding the aircraft.",
              "options": [
                {
                  "letter": "A",
                  "text": "at"
                },
                {
                  "letter": "B",
                  "text": "in"
                },
                {
                  "letter": "C",
                  "text": "on"
                },
                {
                  "letter": "D",
                  "text": "onto"
                }
              ],
              "correctLetter": "A",
              "correctText": "at",
              "analysis": "Specific gates, counters, and designated service points take the preposition \"at\" (at Gate B14, at the check-in desk).",
              "strategy": "Use \"at\" for exact locations, stations, and numbered service points."
            },
            {
              "stem": "After clearing security screening, international travelers walked ________ the duty-free retail concourse before reaching their departure lounge.",
              "options": [
                {
                  "letter": "A",
                  "text": "through"
                },
                {
                  "letter": "B",
                  "text": "at"
                },
                {
                  "letter": "C",
                  "text": "onto"
                },
                {
                  "letter": "D",
                  "text": "between"
                }
              ],
              "correctLetter": "A",
              "correctText": "through",
              "analysis": "\"Walk through\" describes passing from one end of an enclosed area or retail corridor to the other.",
              "strategy": "Enclosed corridors, security checkpoints, and shopping zones take \"through\" when traversed."
            },
            {
              "stem": "The Boeing 737 taxied slowly ________ the yellow taxiway centerline to maintain safe separation from parked aircraft.",
              "options": [
                {
                  "letter": "A",
                  "text": "along"
                },
                {
                  "letter": "B",
                  "text": "into"
                },
                {
                  "letter": "C",
                  "text": "across"
                },
                {
                  "letter": "D",
                  "text": "at"
                }
              ],
              "correctLetter": "A",
              "correctText": "along",
              "analysis": "Motion following a linear path or guidance line takes the preposition \"along\" (along the centerline, along the corridor).",
              "strategy": "When movement follows a continuous line or path, choose \"along\"."
            },
            {
              "stem": "Pilots are instructed to hold short ________ the painted runway-holding position markings until receiving explicit takeoff clearance from the tower.",
              "options": [
                {
                  "letter": "A",
                  "text": "at"
                },
                {
                  "letter": "B",
                  "text": "along"
                },
                {
                  "letter": "C",
                  "text": "into"
                },
                {
                  "letter": "D",
                  "text": "across"
                }
              ],
              "correctLetter": "A",
              "correctText": "at",
              "analysis": "\"Hold short at [location]\" is standard aviation phraseology for coming to a complete stop at a designated holding point.",
              "strategy": "Stationary holding points and intersections require \"at\"."
            }
          ],
          "pageUrl": "session2/admat_aas1.html"
        }
      },
      "3": {
        "session": 3,
        "objectives": {
          "title": "Session 3 - Ground Operations & Turnaround Objectives",
          "summary": "By the end of this session, you will be able to discuss aviation current events, clearly describe airside vehicles and their functions, sequence turnaround operations using precise time linkers, explain ramp delays using formal cause-and-effect structures, collaborate in operational problem-solving as an aerodrome operations officer or AFISO, deliver a concise 60-second shift handover briefing, and consolidate key vocabulary.",
          "items": [
            {
              "num": 1,
              "title": "Discuss Aviation News & Current Events (Fluency & Spontaneous Speech)",
              "description": "Engage in an opening discussion on current commercial aviation headlines, airline developments, or airport infrastructure news, and spot-check previous vocabulary."
            },
            {
              "num": 2,
              "title": "Identify & Describe Airside Vehicles (Fluency & Defining Language)",
              "description": "Accurately explain the purpose of Ground Support Equipment (GSE) using relative clauses (which / that) and purpose structures (used for + -ing, designed to + base verb) without relying on technical jargon."
            },
            {
              "num": 3,
              "title": "Sequence Turnaround Milestones (Sequencing & Time Linkers)",
              "description": "Chronologically order simultaneous apron tasks (deboarding, fueling, catering, baggage handling, boarding) using time connectors such as meanwhile, simultaneously, as soon as, and prior to pushback."
            },
            {
              "num": 4,
              "title": "Express Cause & Consequence in Ramp Delays (Grammar: Cause & Effect)",
              "description": "Construct clear spoken sentences explaining turnaround delays and knock-on effects using formal linkers including due to, owing to, as a result of, consequently, and led to."
            },
            {
              "num": 5,
              "title": "Navigate Spoken Ramp Coordination Scenarios (Interaction & Operational Roles)",
              "description": "Participate in collaborative peer discussions between ramp coordinators and TSEEAC aerodrome operations / AFISO officers to resolve unexpected apron events (GPU failure, catering road blockage, fueling safety holds)."
            },
            {
              "num": 6,
              "title": "Deliver a Concise Operational Shift Handover (Structured Spoken Briefing)",
              "description": "Structure and deliver a fluent 60-second verbal briefing summarizing aircraft status, root cause of delays, and pending ramp actions for an incoming colleague or AFISO officer."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 3 Lesson Plan (2 Hours)",
          "summary": "A 2-hour communicative session featuring an aviation news opening, previous session vocabulary spot-checking, the turnaround timeline, airside vehicle defining games, ramp safety cause-effect language, collaborative AFISO/operations simulations, shift handover briefings, and a 10-minute vocabulary consolidation review.",
          "items": [
            {
              "time": "00-10",
              "title": "Part 1: Aviation News, Current Events & Session 2 Vocabulary Spot-Check (10 mins)",
              "description": "Opening 10-minute warm-up: discuss recent international aviation headlines followed by rapid spot-checking of Session 2 vocabulary (passenger terminal flow, security checkpoints, runway designators, taxiway markings)."
            },
            {
              "time": "10-25",
              "title": "Part 2: The Turnaround Clock & Apron Narrative (15 mins)",
              "description": "Explore the critical 35-to-45-minute turnaround window. Contrast Past Simple and Present Perfect to describe completed vs. pending ramp milestones (e.g. \"Flight BA342 landed at 14:15, but handlers have not closed the cargo doors yet\")."
            },
            {
              "time": "25-55",
              "title": "Part 3: Airside Vehicles (GSE) Master Index & Defining Game (30 mins)",
              "description": "Examine the 10 core ground support vehicles. Students practice communicative defining language using relative clauses and purpose frames (designed to, fitted with, used for) in an interactive paired mystery vehicle challenge."
            },
            {
              "time": "55-80",
              "title": "Part 4: Apron Safety, Turnaround Bottlenecks & Cause-Effect Linkers (25 mins)",
              "description": "Analyze common ramp delays (fuel spills, FOD, belt loader breakdowns). Build high-yield B2 cause and effect statements using due to, owing to, as a result, consequently, and led to."
            },
            {
              "time": "80-110",
              "title": "Part 5: Operations Simulation & Shift Handover Briefing (30 mins)",
              "description": "Paired role-play simulation: Ground Coordinator and TSEEAC Aerodrome Operations Officer (AFISO) resolve three simultaneous bottlenecks at Stand Charlie-4. Students deliver a structured 60-second verbal shift handover."
            },
            {
              "time": "110-120",
              "title": "Part 6: Vocabulary Review, Pronunciation & Class Wrap-Up (10 mins)",
              "description": "Final 10-minute consolidation: rapid recall of the 18 turnaround terms, word stress and pronunciation spot-checking, personal portfolio reflection, and study log update."
            }
          ]
        },
        "lessonContent": {
          "hero": {
            "image": "images/turnaround_apron.jpg",
            "title": "Ground Operations & Turnaround Management",
            "subtitle": "Apron Servicing Envelope & Communicative Ramp Coordination"
          },
          "openingSession": {
            "title": "Activity 1: Aviation News & Previous Session Vocabulary Spot-Check (10 mins)",
            "summary": "Every class begins with a 10-minute professional opening: analyzing current aviation headlines and spot-checking vocabulary from our previous session.",
            "newsPrompts": [
              "What major aviation, airline, or airport news stories have you noticed in the headlines this week?",
              "How are airlines or aerodromes adapting to recent seasonal weather disruptions, traffic surges, or fleet developments?"
            ],
            "spotCheck": {
              "title": "Session 2 Vocabulary Spot-Check (Passenger Journey & Airfield Movement)",
              "questions": [
                {
                  "id": 1,
                  "q": "What is the crucial operational distinction between 'airside' and 'landside'?",
                  "answer": "Landside refers to public terminal areas before security checkpoints; airside encompasses secure boarding gates, ramps, taxiways, and runways accessible only to authorized personnel and ticketed passengers."
                },
                {
                  "id": 2,
                  "q": "Why do runway designators consist of two numbers, such as Runway 09 and Runway 27?",
                  "answer": "Runway numbers represent magnetic azimuth headings rounded to the nearest ten degrees (e.g., 09 = 090° East; 27 = 270° West). Opposite runway ends always differ by exactly 180°."
                },
                {
                  "id": 3,
                  "q": "What is the primary function of taxiway centerline lighting and painted yellow lines?",
                  "answer": "They provide continuous visual guidance to pilots taxying between the runway and parking stands, preventing surface incursions and ensuring wingtip obstacle clearance."
                },
                {
                  "id": 4,
                  "q": "What personal protective equipment (PPE) must apron staff wear airside at all times?",
                  "answer": "High-visibility vests (fluorescent yellow/orange), hearing protection (ear defenders), steel-toe safety boots, and airport security identification badges (ASIC)."
                }
              ]
            }
          },
          "turnaroundClock": {
            "title": "Activity 2: The Turnaround Clock (15 mins)",
            "summary": "The turnaround is the critical period between an aircraft parking at the gate (chocks-on) and departing for its next flight (chocks-off). Modern regional and short-haul turnarounds typically target a 35 to 45-minute servicing window where multiple teams work simultaneously.",
            "milestones": [
              {
                "time": "T+00 to T+05",
                "phase": "Arrival & Chocks-On",
                "desc": "Engines spool down, anti-collision beacons switched off, wheel chocks inserted, boarding bridge or airstairs connected, deboarding commences."
              },
              {
                "time": "T+05 to T+20",
                "phase": "Parallel Ground Servicing",
                "desc": "Belt loaders position at forward/aft cargo doors; catering hi-lift connects to service doors; GPU supplies 400Hz electricity; potable water and lavatory trucks service underside ports."
              },
              {
                "time": "T+15 to T+30",
                "phase": "Aircraft Refueling",
                "desc": "Fuel bowser or hydrant dispenser connects to wing underwing nozzles; fueling is coordinated with cabin safety protocols."
              },
              {
                "time": "T+25 to T+35",
                "phase": "Boarding & Final Loading",
                "desc": "Outbound passengers board; outbound baggage loaded and cargo hold secured; final loadsheet and passenger manifest verified."
              },
              {
                "time": "T+35 to T+45",
                "phase": "Stand Clearance & Pushback",
                "desc": "Doors closed and cross-checked, jet bridge disconnected, tug connected via bypass pin, pushback clearance approved, chocks removed."
              }
            ],
            "discussionPrompts": [
              "Why must ground servicing tasks occur in parallel rather than in a linear sequence?",
              "What safety communication must take place between the ramp coordinator and the flight crew before passenger boarding can begin during refueling?"
            ],
            "grammarBox": {
              "title": "Grammar Focus: Past Simple vs. Present Perfect on the Ramp",
              "rule": "Use Past Simple for completed actions with a finished time marker (e.g. at 14:10, 10 minutes ago). Use Present Perfect for actions connected to the present, completed recently, or still pending (using already, yet, just).",
              "examples": [
                {
                  "type": "Past Simple",
                  "text": "\"Flight BA342 <strong>landed</strong> at 14:15, and the marshals <strong>placed</strong> the chocks five minutes later.\""
                },
                {
                  "type": "Present Perfect",
                  "text": "\"The catering crew <strong>have already loaded</strong> the forward galleys, but the baggage handlers <strong>have not closed</strong> the aft cargo door yet.\""
                }
              ]
            }
          },
          "vehicles": [
            {
              "id": 1,
              "name": "Pushback Tug (Tractor)",
              "phonetic": "/ˈpʊʃ.bæk tʌɡ/",
              "category": "Motive Power",
              "color": "amber",
              "clues": [
                "Low-profile, extremely heavy vehicle with four-wheel drive and heavy ballasts.",
                "Connects to the nose landing gear using a heavy metal towbar or a towbarless cradle lift.",
                "Used to push the aircraft backwards away from the passenger gate into the taxi lane."
              ],
              "sentenceStarters": [
                "This vehicle is designed to...",
                "Handlers attach it to the nose gear so that..."
              ],
              "modelSentence": "The pushback tug is a heavy, low-profile vehicle that pushes aircraft backward away from the terminal gate into the taxi lane.",
              "definingPractice": "It is a heavy vehicle which connects to the nose gear to move the aircraft backwards when main engines cannot provide reverse thrust."
            },
            {
              "id": 2,
              "name": "Ground Power Unit (GPU)",
              "phonetic": "/ɡraʊnd ˈpaʊ.ər ˈjuː.nɪt/",
              "category": "Electrical Systems",
              "color": "blue",
              "clues": [
                "Mobile diesel-powered generator or fixed electric cable boom attached to the gate.",
                "Supplies 115V / 400Hz alternating current through a thick, heavy yellow electrical cable.",
                "Provides electricity for cabin lighting, air conditioning, and avionics while jet engines are shut down."
              ],
              "sentenceStarters": [
                "This unit is used for...",
                "Ground staff connect it to the forward fuselage in order to..."
              ],
              "modelSentence": "The Ground Power Unit is an external mobile generator that supplies electrical power to the aircraft systems while the main engines and auxiliary power unit are turned off.",
              "definingPractice": "It is an external power source which supplies electricity to cabin lights and cockpit instruments while on stand."
            },
            {
              "id": 3,
              "name": "Belt Loader",
              "phonetic": "/bɛlt ˈloʊ.dər/",
              "category": "Baggage & Cargo",
              "color": "emerald",
              "clues": [
                "Vehicle fitted with an adjustable, motor-driven inclined conveyor belt.",
                "Positions directly against the lower cargo door sill of narrow-body aircraft.",
                "Used by baggage handlers to transfer loose passenger luggage and postal sacks into the hold."
              ],
              "sentenceStarters": [
                "This vehicle is equipped with...",
                "Ramp handlers rely on it to..."
              ],
              "modelSentence": "The belt loader is a motorized conveyor ramp used to load and unload loose passenger baggage and freight into the lower cargo hold.",
              "definingPractice": "It is a motorized conveyor which allows ramp agents to transfer suitcases into the aircraft belly quickly and safely."
            },
            {
              "id": 4,
              "name": "Aviation Refueler Truck (Bowser)",
              "phonetic": "/ˌeɪ.viˈeɪ.ʃən rɪˈfjuː.ə.lər trʌk/",
              "category": "Aircraft Fueling",
              "color": "rose",
              "clues": [
                "Large tanker truck carrying thousands of liters of Jet A-1 kerosene, or a hydrant dispenser.",
                "Connects high-pressure delivery hoses directly to refueling intake valves under the wings.",
                "Equipped with emergency shut-off valves, grounding cables, and fuel filtration meters."
              ],
              "sentenceStarters": [
                "This tanker is designed to...",
                "Before pumping fuel, operators must ground it so that..."
              ],
              "modelSentence": "The aviation refueler is a specialized tanker vehicle designed to pump kerosene into aircraft wing tanks under high pressure.",
              "definingPractice": "It is a tanker or hydrant vehicle that supplies aviation kerosene directly into the wings while adhering to strict fire safety protocols."
            },
            {
              "id": 5,
              "name": "Passenger Boarding Stairs (Airstairs)",
              "phonetic": "/ˈpæs.ən.dʒər ˈbɔːr.dɪŋ steərz/",
              "category": "Passenger Access",
              "color": "indigo",
              "clues": [
                "Mobile wheeled stairway mounted on a truck chassis or towed manually.",
                "Elevates to match the sill height of aircraft passenger doors (forward and aft).",
                "Enables safe boarding and deboarding when an aircraft is parked on a remote parking stand."
              ],
              "sentenceStarters": [
                "This mobile staircase allows passengers to...",
                "It is driven up to the aircraft doors when..."
              ],
              "modelSentence": "Passenger boarding stairs provide an adjustable mobile staircase that allows passengers to embark and disembark safely on remote apron stands.",
              "definingPractice": "It is a mobile staircase which connects to the cabin doors when a telescopic jet bridge is unavailable."
            },
            {
              "id": 6,
              "name": "Catering Hi-Lift Truck",
              "phonetic": "/ˈkeɪ.tər.ɪŋ ˈhaɪ.lɪft trʌk/",
              "category": "Cabin Servicing",
              "color": "purple",
              "clues": [
                "Large box truck equipped with an electro-hydraulic scissor-lift mechanism.",
                "Raises the insulated van body up to cabin door level so staff can walk directly inside.",
                "Transports food meal carts, beverage drawers, and duty-free supplies for galley replenishment."
              ],
              "sentenceStarters": [
                "This vehicle is fitted with a scissor lift so that...",
                "Catering personnel use it to..."
              ],
              "modelSentence": "The catering hi-lift truck is equipped with a hydraulic scissor lift that raises meal carts and galley supplies directly to cabin door height.",
              "definingPractice": "It is a specialized van which elevates to cabin level to replenish galley trolleys, meals, and beverages between flights."
            },
            {
              "id": 7,
              "name": "Potable Water Truck",
              "phonetic": "/ˈpoʊ.tə.bəl ˈwɔː.tər trʌk/",
              "category": "Sanitary Utilities",
              "color": "cyan",
              "clues": [
                "Sanitary stainless-steel tanker vehicle with dedicated filtration hoses.",
                "Hooks into the fresh water servicing panel located under the rear fuselage.",
                "Refills the aircraft drinking water tanks used for lavatory washbasins and hot galley water."
              ],
              "sentenceStarters": [
                "This sanitary tanker is used to...",
                "It connects to the underside panel in order to..."
              ],
              "modelSentence": "The potable water truck is a dedicated sanitary vehicle that replenishes the aircraft tanks with fresh drinking water for lavatory washbasins and galley brewing.",
              "definingPractice": "It is a stainless-steel service vehicle that pumps purified drinking water into the aircraft storage tanks."
            },
            {
              "id": 8,
              "name": "Lavatory Service Truck (Waste Servicing)",
              "phonetic": "/ˈlæv.ə.tɔːr.i ˈsɜːr.vɪs trʌk/",
              "category": "Waste Disposal",
              "color": "slate",
              "clues": [
                "Specialized vehicle equipped with a heavy-duty suction hose and disinfectant flushing tank.",
                "Attaches to the toilet waste drainage port on the lower rear fuselage.",
                "Empties the aircraft vacuum waste holding tanks and rinses them with blue deodorizing chemical."
              ],
              "sentenceStarters": [
                "This vehicle is responsible for...",
                "Ground staff operate this unit to..."
              ],
              "modelSentence": "The lavatory service truck empties the aircraft waste holding tanks and flushes the system with sanitizing chemical fluid during ground turnaround.",
              "definingPractice": "It is a specialized utility vehicle which drains, vacuums, and disinfects aircraft toilet tanks between scheduled flights."
            },
            {
              "id": 9,
              "name": "De-icing / Anti-icing Rig",
              "phonetic": "/diːˈaɪ.sɪŋ rɪɡ/",
              "category": "Winter Operations",
              "color": "teal",
              "clues": [
                "Heavy truck equipped with a telescoping hydraulic boom and enclosed operator cab.",
                "Heats and sprays glycol-based de-icing and anti-icing fluids under high pressure.",
                "Removes frost, snow, and slush from wings and tail surfaces, preventing critical aerodynamic loss."
              ],
              "sentenceStarters": [
                "This rig is deployed whenever...",
                "The operator in the elevated bucket sprays fluid to..."
              ],
              "modelSentence": "The de-icing rig features an elevated cherry-picker bucket from which operators spray heated glycol fluid to remove snow, frost, and ice from wings and tail planes.",
              "definingPractice": "It is a heavy winter-operations vehicle which sprays heated glycol fluid onto control surfaces to ensure safe aerodynamic lift during takeoff."
            },
            {
              "id": 10,
              "name": "Follow-Me Car",
              "phonetic": "/ˈfɑː.loʊ miː kɑːr/",
              "category": "Airfield Guidance",
              "color": "amber",
              "clues": [
                "Distinctive high-visibility vehicle with yellow-and-black checkered markings and flashing amber beacons.",
                "Features an illuminated digital display on the roof reading 'FOLLOW ME' or navigational arrows.",
                "Guides landing aircraft safely across complex taxiway intersections to their designated parking stands."
              ],
              "sentenceStarters": [
                "This vehicle leads aircraft when...",
                "Ramp safety and aerodrome operations officers dispatch it to..."
              ],
              "modelSentence": "The Follow-Me car is a high-visibility guidance vehicle with flashing roof beacons that escorts taxiing aircraft to their assigned stands during low visibility or complex taxi routing.",
              "definingPractice": "It is a brightly marked safety vehicle which leads arriving aircraft across the taxiway system directly to their parking gate."
            }
          ],
          "safetyDelays": {
            "title": "Activity 4: Apron Safety & Cause-Effect Linkers (25 mins)",
            "summary": "Every minute on the ramp is strictly accounted for. When an unexpected incident occurs, TSEEAC aerodrome operations officers, AFISOs, and ramp coordinators must communicate the root cause and immediate consequence clearly using formal linkers.",
            "linkers": [
              {
                "category": "Expressing Cause",
                "pattern": "due to + noun phrase / owing to + noun phrase / because of + noun phrase",
                "example": "<strong>Owing to a sudden hydraulic failure</strong> on the belt loader, baggage unloading was paused."
              },
              {
                "category": "Expressing Consequence",
                "pattern": "Consequently, ... / As a result, ... / resulted in + gerund / led to + noun",
                "example": "The fueling truck arrived late; <strong>consequently</strong>, the flight missed its assigned departure slot."
              },
              {
                "category": "Expressing Operational Conditions",
                "pattern": "If + Present Simple, [Subject] + will / must + Base Verb",
                "example": "<strong>If the catering hi-lift does not clear the safety zone</strong>, the pushback tug <strong>cannot attach</strong> the towbar."
              }
            ],
            "scenarios": [
              {
                "id": 1,
                "title": "Scenario 1: Hydraulic Fluid Spillage on Stand 12",
                "cause": "A ruptured high-pressure hose on the pushback tractor spilled hydraulic fluid across the aircraft nose-gear area.",
                "consequence": "Ramp safety teams were summoned to deploy absorbent granules, suspending all aircraft movements for 25 minutes.",
                "spokenTask": "Explain this delay to a supervisor using 'due to' and 'resulted in'."
              },
              {
                "id": 2,
                "title": "Scenario 2: Foreign Object Debris (FOD) on Taxiway Mike",
                "cause": "A metal cargo container latch snapped off a baggage trailer and lay on the centerline.",
                "consequence": "Arriving traffic was halted until an aerodrome safety vehicle completed a sweep and removed the debris.",
                "spokenTask": "Explain this incident to aerodrome operations using 'owing to' and 'consequently'."
              },
              {
                "id": 3,
                "title": "Scenario 3: Severe Wing Contamination in Freezing Fog",
                "cause": "Sub-zero temperatures and high humidity produced clear ice along the aircraft leading-edge slats.",
                "consequence": "The captain requested remote anti-icing, requiring a slot revision and an extra 15-minute taxi delay.",
                "spokenTask": "Explain this operational decision using 'because of' and 'led to'."
              },
              {
                "id": 4,
                "title": "Scenario 4: Unauthorized Service Vehicle in the Reversing Zone",
                "cause": "A maintenance contractor van parked directly inside the red no-parking corridor behind the aircraft tail.",
                "consequence": "The catering hi-lift driver was unable to reverse away from door 2R, blocking ground clearance.",
                "spokenTask": "Describe the safety hazard using 'as a result of' and 'therefore'."
              }
            ]
          },
          "simulation": {
            "title": "Activity 5: TSEEAC Operations Simulation & Shift Handover Briefing (30 mins)",
            "context": "Flight BA342 (Airbus A320) is scheduled for a tight 40-minute turnaround. The aircraft arrived on stand at 14:15. Target off-blocks time (pushback) is 14:55. It is currently 14:32. Three simultaneous operational complications have just occurred on the ramp.",
            "bottlenecks": [
              {
                "id": "A",
                "title": "Electrical Power Trip (GPU)",
                "desc": "The mobile Ground Power Unit tripped its circuit breaker. The cabin has lost auxiliary power, lighting, and ventilation during warm weather."
              },
              {
                "id": "B",
                "title": "Baggage Conveyor Jam",
                "desc": "The aft belt loader jammed while unloading 50 heavy transit bags. The replacement belt loader is currently stationed at the remote maintenance hangar."
              },
              {
                "id": "C",
                "title": "Refueling Safety Hold",
                "desc": "The refueler arrived 12 minutes late. Ground safety rules strictly forbid fuel pumping while passengers are deboarding unless rescue fire crews are stationed on stand."
              }
            ],
            "roles": [
              {
                "role": "Student A: Ramp Coordinator (Ground Operations)",
                "mission": "Assess immediate physical safety on the stand. Coordinate ground handling personnel, dispatch replacement equipment, and establish a realistic recovery sequence."
              },
              {
                "role": "Student B: TSEEAC Aerodrome Operations Officer / AFISO",
                "mission": "Monitor departure slot adherence (CTOT). Liaise with air traffic services regarding a possible 15-minute slot revision, verify fire safety regulations, and prioritize passenger boarding."
              }
            ],
            "recoveryInstructions": "Work together in pairs to agree on a prioritized 3-step action plan using modal verbs of necessity and obligation (must, should, have to, need to). Prepare to defend your sequence to the class."
          },
          "briefing": {
            "title": "The 60-Second Shift Handover Briefing",
            "summary": "Professional aviation operations depend on clear, concise spoken handovers. When handing over responsibility to the incoming shift, TSEEAC aerodrome operations personnel and AFISO officers follow a four-part briefing structure:",
            "structure": [
              {
                "step": "1. Identification",
                "desc": "State the stand number, airline, flight number, and aircraft type.",
                "phrase": "\"Stand Charlie-4 is currently handling Flight BA342, an Airbus A320 inbound from London.\""
              },
              {
                "step": "2. Operational Status",
                "desc": "Report what has been completed and what is currently in progress.",
                "phrase": "\"Deboarding concluded at 14:26; however, cargo unloading and refueling have encountered delays.\""
              },
              {
                "step": "3. Root Cause of Delay",
                "desc": "Explain the delay using precise cause-and-effect connectors.",
                "phrase": "\"Due to an electrical trip on the GPU and a late-arriving fuel dispenser, the turnaround is running 15 minutes behind schedule.\""
              },
              {
                "step": "4. Action & Revised ETD",
                "desc": "State the mitigation in progress and the revised departure time.",
                "phrase": "\"A backup belt loader is now on stand, and refueling has commenced. Revised off-blocks is 15:15. Slot revision has been coordinated with air traffic services.\""
              }
            ],
            "spokenModel": "\"Stand Charlie-4 is currently servicing Flight BA342 to London Heathrow. Passenger deboarding concluded on schedule at 14:25; however, cargo loading and refueling have been disrupted. Due to an electrical trip on the GPU and an overheated conveyor on the aft belt loader, handlers were forced to request replacement equipment. Consequently, the turnaround is running 15 minutes behind schedule. The replacement loader has just arrived on stand, and fueling is underway. We have coordinated with air traffic services for a revised departure slot at 15:15. Please monitor the final pushback clearance.\""
          },
          "closingReview": {
            "title": "Activity 6: Vocabulary Review, Pronunciation & Class Wrap-Up (10 mins)",
            "summary": "The final 10 minutes consolidate today's high-yield vocabulary, reinforce syllable stress, and review personal learning objectives.",
            "reviewPrompts": [
              {
                "title": "1. Rapid-Fire Definition Match",
                "desc": "In pairs, take turns testing each other on 3 random terms from today's 18 vocabulary items without looking at the definitions (e.g. Turnaround Time, Foreign Object Debris, Ground Support Equipment)."
              },
              {
                "title": "2. Word Stress & Pronunciation Spot-Check",
                "desc": "Check correct syllable stress on key operational words: ca-PA-ci-ty, CON-se-quent-ly, HY-drau-lic, RE-fu-el-er, DE-i-cing, au-THOR-i-za-tion."
              },
              {
                "title": "3. Self-Assessment & Continuous Learning",
                "desc": "Rate your confidence (1 to 5) explaining ramp delays using formal connectors like 'due to' and 'owing to'. Note any difficult words in your study portfolio."
              }
            ]
          }
        },
        "revision": {
          "title": "Session 3: Ground Operations & Turnaround",
          "summary": "Review the 18 essential B2 vocabulary terms for airport turnaround and Ground Support Equipment (GSE) to build fluency in operational discussions, shift briefings, and TOEIC comprehension.",
          "terms": [
            {
              "num": "01",
              "term": "Turnaround Time (TAT)",
              "definition": "The total duration an aircraft remains stationary on stand between its arrival (chocks-on) and its next departure (chocks-off)."
            },
            {
              "num": "02",
              "term": "Ground Support Equipment (GSE)",
              "definition": "The specialized fleet of vehicles, tugs, conveyors, and units that service an aircraft on the airport apron."
            },
            {
              "num": "03",
              "term": "Chocks-On / Chocks-Off",
              "definition": "The precise operational times when wooden or rubber wedges are placed against or removed from aircraft landing wheels."
            },
            {
              "num": "04",
              "term": "Pushback Tractor (Tug)",
              "definition": "A heavy, low-profile vehicle used to push an aircraft backwards from the terminal gate into the taxiway lane."
            },
            {
              "num": "05",
              "term": "Ground Power Unit (GPU)",
              "definition": "A mobile external generator or gate connection that supplies 115V/400Hz electricity to the aircraft while main engines are off."
            },
            {
              "num": "06",
              "term": "Belt Loader",
              "definition": "An inclined mobile conveyor belt vehicle used for loading and unloading loose baggage and cargo into the lower aircraft hold."
            },
            {
              "num": "07",
              "term": "Refueling Hydrant Dispenser",
              "definition": "A ramp vehicle that connects underground fuel pipelines to aircraft wing tanks under regulated pressure."
            },
            {
              "num": "08",
              "term": "Catering Hi-Lift Truck",
              "definition": "A specialized truck with an elevated scissor-lift body that raises meal and beverage carts directly to cabin galley doors."
            },
            {
              "num": "09",
              "term": "Potable Water Truck",
              "definition": "A dedicated sanitary tanker vehicle that replenishes the aircraft tanks with fresh drinking water for galley and washbasin use."
            },
            {
              "num": "10",
              "term": "Lavatory Service Unit",
              "definition": "A ground servicing vehicle that empties, flushes, and sanitizes the aircraft toilet waste holding tanks."
            },
            {
              "num": "11",
              "term": "De-icing / Anti-icing Rig",
              "definition": "A specialized boom truck that sprays heated glycol-water mixtures onto wings and control surfaces to remove frost and ice."
            },
            {
              "num": "12",
              "term": "Follow-Me Car",
              "definition": "A high-visibility safety vehicle with amber flashing lights and illuminated signs that escorts taxiing aircraft to their gate."
            },
            {
              "num": "13",
              "term": "Foreign Object Debris (FOD)",
              "definition": "Any loose item, tool, fragment, or trash on the apron or taxiway that could be ingested by an engine or damage an aircraft tire."
            },
            {
              "num": "14",
              "term": "Airside Service Road",
              "definition": "Marked roadway corridors on the ramp reserved strictly for authorized ground support equipment and airport vehicles."
            },
            {
              "num": "15",
              "term": "Passenger Boarding Bridge (Jet Bridge)",
              "definition": "An enclosed, movable elevated corridor connecting the terminal gate directly to the forward passenger door of the aircraft."
            },
            {
              "num": "16",
              "term": "Baggage Tug & Dolly Train",
              "definition": "A small motorized towing tractor pulling a train of wheeled carts (dollies) transporting baggage containers or loose luggage."
            },
            {
              "num": "17",
              "term": "Slot Adherence (CTOT)",
              "definition": "Departing strictly within the assigned Calculated Take-Off Time window to maintain air traffic flow management compliance."
            },
            {
              "num": "18",
              "term": "Stand Clearance",
              "definition": "The formal safety confirmation that all vehicles, equipment, and ramp personnel have retreated behind safety lines before pushback."
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: What Happens To An Aircraft During Its Turnaround?",
              "watchUrl": "https://www.youtube.com/watch?v=EiKeGmkX6fY",
              "tag": "Ground Handling",
              "videoId": "EiKeGmkX6fY",
              "embedUrl": "https://www.youtube-nocookie.com/embed/EiKeGmkX6fY",
              "caption": "Focus: Step-by-step breakdown of the rapid 35 to 45-minute commercial aircraft turnaround: blocks-on, chocks, deplaning, baggage handling, fueling, catering, and pushback."
            },
            {
              "title": "Video 2: 20 Types of Aircraft Ground Support Equipment (GSE)",
              "watchUrl": "https://www.youtube.com/watch?v=R90mroZyAL4",
              "tag": "Vehicle Operations",
              "videoId": "R90mroZyAL4",
              "embedUrl": "https://www.youtube-nocookie.com/embed/R90mroZyAL4",
              "caption": "Focus: Visual field guide to the specialized vehicles operating on the apron stand: pushback tugs, ground power units (GPU), belt loaders, catering hi-lifts, and de-icing rigs."
            },
            {
              "title": "Video 3: Pushback Operations & Electric Tugs",
              "watchUrl": "https://www.youtube.com/watch?v=2BZbHAJQ70s",
              "tag": "Ramp Safety",
              "videoId": "2BZbHAJQ70s",
              "embedUrl": "https://www.youtube-nocookie.com/embed/2BZbHAJQ70s",
              "caption": "Focus: Captain Joe explains how pushback tractors maneuver commercial airliners out of the gate, interphone headset communication, and next-generation electric tug innovations."
            }
          ],
          "grammar": {
            "title": "Cause, Effect & Relative Clauses in Ground Operations",
            "badge": "B2 Professional Grammar Focus",
            "patternTitle": "The Cause & Effect Framework",
            "formula": "Due to / Owing to + [Noun Phrase], [Subject] + [Verb]  |  [Cause] + led to / resulted in + [Noun / Gerund]",
            "rulesTitle": "Operational Usage Rules",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. Formal Prepositional Causes (Due to / Owing to):</strong> Followed strictly by a noun phrase or gerund, never by a full subject+verb clause (*\"<strong>Due to heavy ramp congestion</strong>, the refueler was delayed\"*).",
              "<strong style=\"color: #1e293b;\">2. Result Verbs (Led to / Resulted in):</strong> Express the direct outcome of an event (*\"An overheated conveyor <strong>resulted in</strong> a 15-minute baggage delay\"*).",
              "<strong style=\"color: #1e293b;\">3. Defining Relative Clauses (Which / That):</strong> Used to clearly define airside vehicles and technical equipment without jargon (*\"The GPU is a mobile generator <strong>that supplies electricity</strong> to the cabin\"*).",
              "<strong style=\"color: #1e293b;\">4. Transitional Connectors (Consequently / As a result):</strong> Placed at the start of a sentence followed by a comma to introduce a consequence."
            ],
            "trap": "<strong>⚠️ The Common Grammar Trap:</strong> Do not write <em>due to because</em> or follow <em>due to</em> with a full sentence! Say <em>\"Due to the storm\"</em> (noun phrase), NOT <em>\"Due to the storm was bad\"</em>. For full clauses, use <em>\"Because the storm was severe...\"</em>.",
            "examplesTitle": "Ground Handling Examples",
            "examples": [
              "<em>\"<strong>Owing to a mechanical defect</strong> on the pushback tractor, stand clearance was postponed by ten minutes.\"</em>",
              "<em>\"The belt loader experienced an electrical failure, <strong>which prevented handlers</strong> from unloading the forward hold on schedule.\"</em>"
            ]
          },
          "toeic": {
            "stem": "Due to a temporary failure of the mobile ground power unit, cabin air conditioning ________ until the auxiliary system was activated.",
            "options": [
              {
                "letter": "A",
                "text": "was suspended"
              },
              {
                "letter": "B",
                "text": "to suspend"
              },
              {
                "letter": "C",
                "text": "suspending"
              },
              {
                "letter": "D",
                "text": "suspends"
              }
            ],
            "correctLetter": "A",
            "correctText": "was suspended",
            "analysis": "The sentence requires a past passive finite verb: the air conditioning was suspended by ground crew until power was restored.",
            "strategy": "Identify the passive receiver of the action (\"air conditioning\") and the past context (\"was activated\"), requiring was + past participle."
          },
          "resources": [
            {
              "url": "https://www.icao.int",
              "tag": "01 • Regulatory Standard",
              "name": "ICAO Annex 14 (Aerodromes)",
              "desc": "International Standards and Recommended Practices for aerodrome design, apron management, and visual aids."
            },
            {
              "url": "https://www.iata.org",
              "tag": "02 • Ramp Operations Manual",
              "name": "IATA Airport Handling Manual (AHM)",
              "desc": "Global industry baseline procedures for safe and efficient ground handling operations and GSE standards."
            },
            {
              "url": "https://www.easa.europa.eu",
              "tag": "03 • European Safety Guidance",
              "name": "EASA Ground Handling Safety Hub",
              "desc": "Safety promotion bulletins addressing ramp collision prevention, turnaround hazards, and human factors."
            },
            {
              "url": "https://www.aci.aero",
              "tag": "04 • Apron Best Practices",
              "name": "ACI World Apron Safety Guidelines",
              "desc": "Airports Council International recommendations on apron markings, service vehicle routing, and FOD management."
            },
            {
              "url": "https://www.skybrary.aero",
              "tag": "05 • Safety Knowledge Network",
              "name": "SKYbrary Aviation Safety: Ground Operations",
              "desc": "Peer-reviewed aviation safety repository detailing turnaround incident analysis and mitigation strategies."
            },
            {
              "url": "https://www.etsglobal.org/fr/fr",
              "tag": "06 • TOEIC Listening & Reading",
              "name": "ETS Global Professional English",
              "desc": "Practice materials for workplace and transportation logistics reading comprehension."
            }
          ],
          "pageUrl": "session3/admat_aas1.html",
          "articles": [
            {
              "topic": "IATA Operational Safety Briefing",
              "sourceTag": "Industry Safety Report",
              "heading": "Managing Parallel Servicing Hazards during Fast-Turnaround Operations",
              "snippet": "An analysis of simultaneous ground servicing workflows, vehicle clearance corridors, and communication protocols between cockpit and apron crews.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://www.iata.org"
            },
            {
              "topic": "Aerodrome Operations Journal",
              "sourceTag": "Decarbonization & Innovation",
              "heading": "Electrification of Ground Support Equipment on European Aprons",
              "snippet": "Examining the transition from diesel-powered tugs and belt loaders to zero-emission battery electric GSE across major hub airports.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://www.aci.aero"
            }
          ],
          "toeicQuestions": [
            {
              "stem": "Due to a temporary failure of the mobile ground power unit, cabin air conditioning ________ until the auxiliary system was activated.",
              "options": [
                {
                  "letter": "A",
                  "text": "was suspended"
                },
                {
                  "letter": "B",
                  "text": "to suspend"
                },
                {
                  "letter": "C",
                  "text": "suspending"
                },
                {
                  "letter": "D",
                  "text": "suspends"
                }
              ],
              "correctLetter": "A",
              "correctText": "was suspended",
              "analysis": "The sentence requires a past passive finite verb: the air conditioning was suspended by ground crew until power was restored.",
              "strategy": "Identify the passive receiver of the action (\"air conditioning\") and the past context (\"was activated\"), requiring was + past participle."
            },
            {
              "stem": "The ramp coordinator requested an additional belt loader ________ the ground crew could complete baggage loading before the departure slot expired.",
              "options": [
                {
                  "letter": "A",
                  "text": "so that"
                },
                {
                  "letter": "B",
                  "text": "despite"
                },
                {
                  "letter": "C",
                  "text": "in order"
                },
                {
                  "letter": "D",
                  "text": "because of"
                }
              ],
              "correctLetter": "A",
              "correctText": "so that",
              "analysis": "\"So that\" introduces a clause of purpose followed by a subject and modal verb (\"the ground crew could complete\").",
              "strategy": "Look for a full clause with a modal verb (could/can) following the blank to select the purpose conjunction \"so that\"."
            },
            {
              "stem": "Ground handlers must verify that all service vehicles are parked behind the safety line ________ authorizing the pushback tug to commence movement.",
              "options": [
                {
                  "letter": "A",
                  "text": "prior to"
                },
                {
                  "letter": "B",
                  "text": "subsequently"
                },
                {
                  "letter": "C",
                  "text": "ahead"
                },
                {
                  "letter": "D",
                  "text": "unless"
                }
              ],
              "correctLetter": "A",
              "correctText": "prior to",
              "analysis": "\"Prior to\" is a formal preposition meaning \"before\", correctly followed by the gerund \"authorizing\".",
              "strategy": "Notice the gerund \"authorizing\" after the blank; \"prior to\" functions as a preposition requiring a noun or -ing form."
            },
            {
              "stem": "Hydraulic fluid that ________ leaked from the towing tractor was promptly cleaned by airport emergency response units.",
              "options": [
                {
                  "letter": "A",
                  "text": "had"
                },
                {
                  "letter": "B",
                  "text": "was"
                },
                {
                  "letter": "C",
                  "text": "did"
                },
                {
                  "letter": "D",
                  "text": "has"
                }
              ],
              "correctLetter": "A",
              "correctText": "had",
              "analysis": "The past perfect \"had leaked\" expresses an action completed before another past event (\"was promptly cleaned\").",
              "strategy": "Sequence past events: the leakage happened before the cleaning, requiring Past Perfect (had + V3)."
            },
            {
              "stem": "The airline avoided significant slot delay penalties ________ the exceptional coordination between the gate agent and the ramp marshal.",
              "options": [
                {
                  "letter": "A",
                  "text": "owing to"
                },
                {
                  "letter": "B",
                  "text": "even though"
                },
                {
                  "letter": "C",
                  "text": "whereas"
                },
                {
                  "letter": "D",
                  "text": "consequently"
                }
              ],
              "correctLetter": "A",
              "correctText": "owing to",
              "analysis": "\"Owing to\" is a prepositional linker followed by the noun phrase \"the exceptional coordination\", expressing cause.",
              "strategy": "Check whether the blank is followed by a noun phrase or a full clause. A noun phrase requires a preposition like \"owing to\"."
            }
          ]
        }
      },
      "4": {
        "session": 4,
        "objectives": {
          "title": "Session 4 - Jobs in Aviation Objectives",
          "summary": "By the end of this session, you will be able to distinguish and categorize aviation operational professions across landside, airside, flight operations, air traffic services, and civil aviation administration (TSEEAC), accurately articulate professional duties and jurisdictions using formal B2 structures, and collaborate effectively during operational handoffs.",
          "items": [
            {
              "num": 1,
              "title": "Categorize Aviation Operational Roles (Vocabulary & Classification)",
              "description": "Distinguish between Landside (passenger handling, security screening, border control), Airside (turnaround coordination, ramp dispatch, marshalling, pushback), Flight Crew (captain, first officer, purser), Air Traffic Control (tower, approach, en-route), and Civil Aviation Administration (TSEEAC)."
            },
            {
              "num": 2,
              "title": "Clarify TSEEAC Operational Functions (Institutional Precision)",
              "description": "Accurately explain that TSEEAC personnel are NOT air traffic controllers (no tactical separation authority), but perform critical functions including AFISO (flight information and alerting services), aerodrome operations coordination, and DGAC safety oversight."
            },
            {
              "num": 3,
              "title": "Express Professional Duties & Authority (Grammar in Context)",
              "description": "Master and apply functional formulas: 'be responsible for + -ing', 'be tasked with + -ing', 'be in charge of + noun', 'have authority over / to', and 'ensure that + clause'."
            },
            {
              "num": 4,
              "title": "Simulate Professional Shift & Turnaround Handoffs (Speaking Fluency)",
              "description": "Conduct structured peer briefings between adjacent roles (Turnaround Coordinator <-> First Officer, AFISO <-> VFR Pilot, Terminal Duty Manager <-> Ramp Supervisor) to resolve operational bottlenecks."
            },
            {
              "num": 5,
              "title": "Debate Airport Operational Dilemmas (Interaction & Negotiation)",
              "description": "Analyze complex airport operational dilemmas (e.g. winter weather diversions and ramp congestion) from specific professional viewpoints and negotiate a consensus action plan."
            },
            {
              "num": 6,
              "title": "Refine Professional Aviation Lexis Pronunciation (Phonology)",
              "description": "Place accurate primary and secondary word stress on complex professional terms (au-THOR-i-ty, re-SPON-si-ble, co-OR-di-na-tor, tech-NI-cian, o-ver-SIGHT, sur-VEIL-lance)."
            },
            {
              "num": 7,
              "title": "Master Prepositions of Responsibility & Passive Voice (TOEIC Practice)",
              "description": "Identify common test traps in TOEIC Parts 5 & 6, particularly verbs of obligation, prepositions of responsibility ('responsible for', 'in charge of'), and passive verb structures in airport notices."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 4 Lesson Plan (2 Hours)",
          "summary": "A 2-hour communicative session featuring an aviation news opening, Session 3 turnaround spot-checking, the aviation job taxonomy, functional responsibility and authority grammar drills, 'Day in the Life' role handoffs, a winter weather operational dilemma debate, and a 10-minute vocabulary consolidation review.",
          "items": [
            {
              "time": "00-10",
              "title": "Part 1: Aviation News, Current Events & Session 3 Spot-Check (10 mins)",
              "description": "Opening 10-minute warm-up: discuss recent international aviation headlines followed by rapid spot-checking of Session 3 turnaround and GSE vocabulary (GPU, ASU, Pushback Tug, Chocks, FOD, Belt Loader)."
            },
            {
              "time": "10-30",
              "title": "Part 2: Aviation Job Taxonomy & The Operational Spectrum (20 mins)",
              "description": "Explore the five operational domains (Landside, Airside/Ramp, Flight Crew, ATCOs, and TSEEAC). Clarify the core distinction between ATCO tactical separation authority and TSEEAC AFISO/auditing responsibilities."
            },
            {
              "time": "30-50",
              "title": "Part 3: Functional Grammar Clinic: Responsibilities, Duties & Jurisdiction (20 mins)",
              "description": "Examine high-yield B2 structures: 'responsible for + -ing', 'tasked with + -ing', 'in charge of', 'have authority over / to', 'ensure that', and 'report to vs. liaise with'. Practice with interactive scenario prompts."
            },
            {
              "time": "50-75",
              "title": "Part 4: Role-Play Simulation: 'A Day in the Life' Operational Handoffs (25 mins)",
              "description": "Collaborative paired and triad role-play: simulate professional handoffs and resolve bottlenecks between Turnaround Coordinator <-> First Officer, AFISO <-> Inbound Pilot, and Terminal Duty Manager <-> Ramp Supervisor."
            },
            {
              "time": "75-110",
              "title": "Part 5: Aviation Career Forum & Operational Dilemma Debate (35 mins)",
              "description": "Interactive multi-stakeholder debate: resolve an emergency aerodrome diversion scenario during freezing fog and ramp congestion. Argue priorities, negotiate trade-offs, and establish a consensus sequence."
            },
            {
              "time": "110-120",
              "title": "Part 6: Vocabulary Review, Pronunciation & Class Wrap-Up (10 mins)",
              "description": "Final 10-minute consolidation: rapid recall of the 18 aviation profession terms, word stress and phonological drills, personal reflection, and continuous learning log update."
            }
          ]
        },
        "lessonContent": {
          "hero": {
            "image": "images/aas_m1card4.png",
            "title": "Jobs in Aviation: Roles, Responsibilities & Operational Interfaces",
            "subtitle": "Landside, Airside, Flight Crew, Air Traffic Services & Civil Aviation Corps (TSEEAC)"
          },
          "openingSession": {
            "title": "Activity 1: Aviation News & Session 3 Spot-Check (10 mins)",
            "summary": "Every session begins with a 10-minute professional opening: analyzing current aviation headlines followed by rapid spot-checking of Session 3 ground operations and GSE vocabulary.",
            "newsPrompts": [
              "What aviation, airline, or ATM news stories caught your attention in the headlines this week?",
              "How are airports and air navigation service providers managing staffing, recruitment, or new operational procedures this season?"
            ],
            "spotCheck": {
              "title": "Session 3 Vocabulary Spot-Check (Ground Operations & GSE)",
              "questions": [
                {
                  "id": 1,
                  "q": "What is the primary function of a Ground Power Unit (GPU) during an aircraft turnaround?",
                  "answer": "A GPU supplies 400Hz AC electrical power to the aircraft while parked at the gate stand, allowing the flight crew to shut down the main engines and auxiliary power unit (APU) to save fuel and reduce ramp emissions."
                },
                {
                  "id": 2,
                  "q": "How does a Marshaller guide an arriving aircraft to its parking stand when automated docking is unavailable?",
                  "answer": "A marshaller uses illuminated wands or visual hand signals to direct the flight deck along the painted yellow lead-in line to the precise nosewheel stop mark."
                },
                {
                  "id": 3,
                  "q": "What is turnaround time (TAT) and why is minimizing it critical for airlines?",
                  "answer": "Turnaround time is the elapsed period from chocks-on at arrival to chocks-off at departure. Minimizing TAT maximizes aircraft daily utilization and prevents knock-on departure slot delays."
                },
                {
                  "id": 4,
                  "q": "What is Foreign Object Debris (FOD) and how do ramp teams prevent it?",
                  "answer": "FOD is any loose item, tool, fragment, or trash on the apron or taxiway that could be ingested by a jet engine or damage tires; ground crews conduct continuous visual scans and regular FOD sweeps."
                }
              ]
            }
          },
          "jobTaxonomy": {
            "title": "Activity 2: Aviation Job Taxonomy & The Operational Spectrum (20 mins)",
            "summary": "Aviation is an intricate ecosystem where specialized professions collaborate seamlessly. Explore the five primary operational domains, their key responsibilities, and the essential distinction between ATCO separation authority and TSEEAC functions.",
            "domains": [
              {
                "id": "landside",
                "name": "1. Landside Operations",
                "color": "sky",
                "roles": [
                  "Passenger Service Agent (PSA)",
                  "Security Screening Officer",
                  "Terminal Duty Manager",
                  "Border Control Officer"
                ],
                "description": "Manages passenger processing, documentation verification, terminal safety, and accessibility before the airside security boundary.",
                "keyJurisdiction": "Public terminal zones, check-in concourses, baggage drop systems, and departure lounge coordination.",
                "sampleDuty": "Passenger Service Agents verify travel documents, handle gate boarding announcements, and manage baggage reconciliation."
              },
              {
                "id": "airside",
                "name": "2. Airside & Ramp Operations",
                "color": "amber",
                "roles": [
                  "Turnaround Coordinator (TRC)",
                  "Ramp Agent / Baggage Handler",
                  "Marshaller",
                  "Pushback Tug Driver",
                  "De-icing Rig Operator",
                  "Refueller / Hydrant Dispenser"
                ],
                "description": "Coordinates all parallel ground servicing operations around the aircraft within the designated safety servicing envelope.",
                "keyJurisdiction": "Apron stands, equipment staging lanes, airside service roads, and aircraft servicing envelopes.",
                "sampleDuty": "The Turnaround Coordinator oversees parallel servicing tasks, monitors fuel and baggage loading, and enforces on-time departure."
              },
              {
                "id": "flightcrew",
                "name": "3. Aircraft Flight Crew",
                "color": "indigo",
                "roles": [
                  "Captain (Pilot-in-Command)",
                  "First Officer (Co-Pilot)",
                  "Purser / Senior Cabin Manager",
                  "Cabin Crew / Flight Attendant"
                ],
                "description": "Responsible for the safe navigation, operation, passenger welfare, and emergency readiness of the aircraft from off-blocks to on-blocks.",
                "keyJurisdiction": "Cockpit flight deck, passenger cabin, aircraft technical logbook, and emergency systems.",
                "sampleDuty": "The First Officer performs external walkaround inspections, cross-checks FMC route programming, and monitors radio communications."
              },
              {
                "id": "atco",
                "name": "4. Air Traffic Control Officers (ATCOs)",
                "color": "rose",
                "roles": [
                  "Aerodrome / Tower ATCO",
                  "Approach Radar Controller (APP)",
                  "Area / En-Route Controller (ACC)"
                ],
                "description": "Licensed air traffic controllers possessing executive legal authority to issue binding clearances and ensure safe tactical separation between aircraft in flight and on active movement areas.",
                "keyJurisdiction": "Active runways, taxiways, controlled airspace sectors, and terminal maneuvering areas (TMA).",
                "sampleDuty": "Tower ATCOs issue mandatory takeoff and landing clearances, manage runway sequencing, and maintain aircraft separation."
              },
              {
                "id": "tseeac",
                "name": "5. Civil Aviation Operations Corps (TSEEAC)",
                "color": "emerald",
                "roles": [
                  "Aerodrome Flight Information Service Officer (AFISO)",
                  "Aerodrome Operations Coordinator",
                  "DGAC Aviation Safety Inspector",
                  "Air Navigation Technical Support Officer"
                ],
                "description": "Civil aviation civil servants who perform critical operations, flight information, safety oversight, and aerodrome management. IMPORTANT: TSEEAC personnel are NOT air traffic controllers and do NOT have separation authority; AFISOs provide advisory flight information and alerting service at non-controlled aerodromes.",
                "keyJurisdiction": "AFIS aerodromes, civil aviation regional directorates (DSAC), airport safety coordination, and technical surveillance.",
                "sampleDuty": "An AFISO provides weather reports, runway conditions, and traffic advisories to pilots, while DGAC safety inspectors conduct regulatory compliance audits."
              }
            ]
          },
          "grammarClinic": {
            "title": "Activity 3: Functional Grammar & Authority Clinic: Responsibilities & Jurisdiction (20 mins)",
            "summary": "Professional aviation discourse demands absolute precision when describing who does what, who reports to whom, and who holds regulatory authority.",
            "formulas": [
              {
                "structure": "be responsible for + -ing / noun",
                "usage": "Core ongoing duty or accountability",
                "example": "The Turnaround Coordinator is responsible for ensuring all servicing vehicles clear the stand before pushback."
              },
              {
                "structure": "be tasked with + -ing / noun",
                "usage": "Official assignment, directive, or designated role",
                "example": "The AFIS officer is tasked with providing traffic information and weather advisories to inbound aircraft."
              },
              {
                "structure": "be in charge of + noun / -ing",
                "usage": "Supervisory oversight of a team, facility, or zone",
                "example": "The Terminal Duty Manager is in charge of passenger concourse flow and emergency crowd management."
              },
              {
                "structure": "have authority over / to + verb",
                "usage": "Legal jurisdiction or executive command power",
                "example": "Tower ATCOs have authority over active runways and issue binding takeoff and landing clearances."
              },
              {
                "structure": "ensure that + clause",
                "usage": "Verification, quality control, and safety compliance",
                "example": "Safety inspectors ensure that airline maintenance procedures comply with DGAC regulations."
              },
              {
                "structure": "report to vs. liaise with",
                "usage": "Hierarchy vs. horizontal peer collaboration",
                "example": "The Ramp Agent reports to the Turnaround Coordinator and liaises with fueling technicians."
              }
            ],
            "roleClinic": [
              {
                "id": 1,
                "prompt": "The First Officer is tasked with (conducting / to conduct / conduct) the pre-flight external walkaround inspection.",
                "answer": "conducting",
                "explanation": "'Be tasked with' is followed by the preposition 'with', which requires a gerund (-ing)."
              },
              {
                "id": 2,
                "prompt": "Unlike ATCOs, AFISOs do not have authority (to separate / separating / for separate) aircraft tactically.",
                "answer": "to separate",
                "explanation": "'Have authority to' is followed by the base infinitive ('to separate')."
              },
              {
                "id": 3,
                "prompt": "The Ramp Agent is responsible (for / of / to) securing the wheel chocks once the aircraft comes to a stop.",
                "answer": "for",
                "explanation": "'Responsible for' is the correct prepositional collocation (avoid the French false friend 'responsible of')."
              },
              {
                "id": 4,
                "prompt": "The Turnaround Coordinator must ensure (that / what / which) the cargo hold doors are locked before pushback.",
                "answer": "that",
                "explanation": "'Ensure' takes a content clause starting with 'that' ('ensure that + subject + verb')."
              }
            ]
          },
          "handoffSimulation": {
            "title": "Activity 4: Pairwork & Triad Simulation — 'A Day in the Life' Role Handoff (25 mins)",
            "summary": "Effective inter-departmental handoffs prevent bottlenecks and eliminate miscommunication. Work in pairs or triads to conduct professional operational handovers.",
            "scenarios": [
              {
                "id": "pair1",
                "title": "Pair 1: Turnaround Coordinator (TRC) <-> First Officer (Flight Deck)",
                "context": "Flight AF418 is scheduled off-blocks in 8 minutes. Cargo loading is complete, but the refueller was held up by a minor hose leak. The First Officer needs the final fuel uplift and signed load sheet.",
                "roleA": "Turnaround Coordinator: Confirm fuel uplift of 5,800 kg, present the final trim sheet for Captain's signature, and report stand clearance status.",
                "roleB": "First Officer: Cross-check the fuel quantity against FMC calculations, verify the center of gravity (CG) limits on the trim sheet, and request pushback readiness.",
                "targetPhrases": [
                  "\"I am responsible for confirming that all ground equipment has detached...\"",
                  "\"Could you ensure that the load sheet reflects the actual fuel on board?\"",
                  "\"We liaised with the fueling technician, and all safety valves are verified.\""
                ]
              },
              {
                "id": "pair2",
                "title": "Pair 2: AFISO (TSEEAC) <-> Inbound VFR Aircraft",
                "context": "A Cessna 172 is inbound to a non-controlled regional airfield. The AFISO is on duty in the aerodrome flight information station. Low winter sun and flocking birds have been observed near Runway 26 threshold.",
                "roleA": "AFISO (TSEEAC): Provide aerodrome flight information: runway in use 26, surface wind 240/12kt, QNH 1018, cautionary bird advisory, and report on opposing glider traffic.",
                "roleB": "VFR Pilot: Acknowledge information, report position over visual reporting point (Sierra), and state intentions for standard overhead join.",
                "targetPhrases": [
                  "\"Information only: Runway 26 in use, wind 240 degrees at 12 knots...\"",
                  "\"Be advised, a flock of lapwings has been reported near the threshold...\"",
                  "\"As an AFISO, I am tasked with providing traffic and safety advisories.\""
                ]
              },
              {
                "id": "pair3",
                "title": "Pair 3: Terminal Duty Manager <-> Ramp Operations Supervisor",
                "context": "A group of 14 delayed transit passengers from a connecting transatlantic flight has just cleared security. The departure flight has a strict 10-minute CTOT slot.",
                "roleA": "Terminal Duty Manager: Request a 5-minute gate hold to allow the transit passengers to board, arguing customer service and connection costs.",
                "roleB": "Ramp Operations Supervisor: Defend the slot departure, explaining the financial and network penalties of missing the Eurocontrol CTOT slot.",
                "targetPhrases": [
                  "\"We are in charge of passenger processing and must avoid misconnecting passengers...\"",
                  "\"If we miss this slot, ATC will hold the flight for at least 45 minutes...\"",
                  "\"Can we ensure that baggage is prioritized while passengers board through the gate?\""
                ]
              }
            ]
          },
          "careerForumDebate": {
            "title": "Activity 5: Aviation Career Forum & Operational Dilemma Debate (35 mins)",
            "summary": "A fast-moving winter weather front brings freezing fog, reducing Runway Visual Range (RVR) to 350m at a regional aerodrome. Stand capacity is at 95%, de-icing rigs are working at maximum throughput, and two inbound diversions are requesting priority due to fuel minimums. Each team represents an aviation profession, defends operational priorities, and negotiates a consensus action plan.",
            "scenario": "Regional Aerodrome 'Echo-Delta' is experiencing severe winter weather with RVR 350m and freezing drizzle. Only 2 parking stands remain open. Two diverted commercial jets are in the holding pattern, one declaring 'Minimum Fuel'. On the ground, an outbound flight on Stand 2 has passengers boarded, but its holdover time has expired, requiring a second de-icing cycle.",
            "stakeholders": [
              {
                "name": "Tower & Approach ATCOs",
                "priority": "Runway safety, separation in holding stacks, and emergency prioritization for the minimum-fuel diversion.",
                "stance": "Has sole authority over runway access; demands clear runway sequencing and will not clear departures until emergency fuel traffic lands."
              },
              {
                "name": "AFISO / Aerodrome Operations Coordinator (TSEEAC)",
                "priority": "Airfield friction coefficient measurement, snow and de-icing coordinator, apron safety compliance, and stand allocation.",
                "stance": "Liaises between airport authority and services; ensures de-icing pad does not gridlock and coordinates snow clearing plows on taxiways."
              },
              {
                "name": "Turnaround Coordinator & Ground Handling Lead",
                "priority": "Ramp safety, ground equipment availability, de-icing fluid inventory, and baggage handling for diverted passengers.",
                "stance": "Warns that ramp handlers are nearing maximum duty limits and de-icing fluid is at critical reserves; insists on clearing Stand 2 first."
              },
              {
                "name": "Airline Captain (Outbound Flight on Stand 2)",
                "priority": "Passenger welfare, flight duty period (FDP) limits, and slot adherence.",
                "stance": "Argues that if the aircraft is not de-iced and dispatched within 20 minutes, the crew will exceed legal duty hours and the flight must be cancelled."
              }
            ],
            "consensusChallenge": "In mixed teams of 4, negotiate a step-by-step priority sequence using conditional structures ('Provided that...', 'As long as...', 'On condition that...') to resolve the standoff safely and efficiently."
          },
          "closingReview": {
            "title": "Activity 6: Vocabulary Review, Pronunciation & Class Wrap-Up (10 mins)",
            "summary": "The final 10 minutes consolidate today's high-yield vocabulary, reinforce syllable stress on professional job titles, and update your personal continuous assessment log.",
            "reviewPrompts": [
              {
                "title": "1. Syllable Stress & Phonology Clinic",
                "desc": "Drill accurate syllable stress: au-THOR-i-ty (2nd), re-SPON-si-ble (2nd), tech-NI-cian (2nd), co-OR-di-na-tor (2nd), o-ver-SIGHT (1st), sur-VEIL-lance (2nd)."
              },
              {
                "title": "2. Rapid-Fire Retrieval Quiz",
                "desc": "In pairs, quiz each other on 3 random terms from today's 18 vocabulary bank without checking notes (e.g. AFISO vs. ATCO, Turnaround Coordinator, Flight Dispatcher)."
              },
              {
                "title": "3. Self-Assessment & Continuous Learning",
                "desc": "Rate your ability (1 to 5) to explain the responsibilities of your future aviation profession. Update your study portfolio with target expressions."
              }
            ]
          }
        },
        "revision": {
          "title": "Session 4: Jobs in Aviation",
          "summary": "Review the 18 key technical and professional terms covering landside, airside, flight crew, air traffic control (ATCO), and civil aviation administration (TSEEAC / AFISO) to enhance your speaking fluency and TOEIC accuracy.",
          "terms": [
            {
              "num": "01",
              "term": "Aerodrome Flight Information Service Officer (AFISO)",
              "definition": "A certified aeronautical station officer (often TSEEAC) providing traffic advisories, aerodrome conditions, and alerting services to aircraft at non-controlled aerodromes without separation authority."
            },
            {
              "num": "02",
              "term": "Air Traffic Control Officer (ATCO)",
              "definition": "A licensed professional legally authorized to issue mandatory control clearances and maintain safe tactical separation between aircraft in flight and maneuvering on active airport surfaces."
            },
            {
              "num": "03",
              "term": "Turnaround Coordinator (TRC)",
              "definition": "The ground handling operations lead on the apron responsible for orchestrating servicing teams, monitoring critical-path milestones, and ensuring punctual departure."
            },
            {
              "num": "04",
              "term": "Ramp Agent",
              "definition": "An airside ground handler responsible for loading and unloading baggage and cargo, positioning ground support equipment, and securing the aircraft servicing envelope."
            },
            {
              "num": "05",
              "term": "Marshaller",
              "definition": "A trained apron ground handler who uses illuminated wands or visual hand signals to guide an incoming aircraft along the taxi line to its exact parking mark."
            },
            {
              "num": "06",
              "term": "Flight Operations Officer / Dispatcher",
              "definition": "A licensed flight planning specialist who calculates fuel requirements, monitors en-route NOTAMs and weather, prepares flight plans, and co-signs the dispatch release with the captain."
            },
            {
              "num": "07",
              "term": "Passenger Service Agent (PSA)",
              "definition": "A landside airline or ground handling employee who assists travelers at check-in desks, checks travel documentation, reconciles hold luggage, and conducts gate boarding."
            },
            {
              "num": "08",
              "term": "Aviation Safety Inspector",
              "definition": "A civil aviation authority official (e.g. DGAC/DSAC, often TSEEAC) tasked with auditing airlines, maintenance repair organizations, and aerodromes for strict regulatory compliance."
            },
            {
              "num": "09",
              "term": "Aerodrome Operations Coordinator",
              "definition": "An airport duty specialist (often TSEEAC) responsible for inspecting runway pavement friction, monitoring obstacle limitation surfaces, managing wildlife hazards, and coordinating apron works."
            },
            {
              "num": "10",
              "term": "Avionics Technician",
              "definition": "A certified aircraft maintenance engineer specialized in troubleshooting, repairing, calibrating, and certifying cockpit flight management computers, radar, and navigation systems."
            },
            {
              "num": "11",
              "term": "First Officer",
              "definition": "The second-in-command pilot on the flight deck who shares flight navigation, radio communications, and system monitoring duties with the Captain."
            },
            {
              "num": "12",
              "term": "Purser / Cabin Manager",
              "definition": "The senior cabin crew member responsible for supervising cabin attendants, directing in-flight passenger safety procedures, and coordinating with the flight deck."
            },
            {
              "num": "13",
              "term": "Security Screening Officer",
              "definition": "A certified landside security officer who operates X-ray scanners, millimeter-wave body scanners, and explosive trace detectors to screen passengers and carry-on luggage."
            },
            {
              "num": "14",
              "term": "De-icing Rig Operator",
              "definition": "A specialized ramp technician who operates aerial boom trucks to spray heated glycol mixtures onto aircraft surfaces to eradicate snow, frost, and ice contamination."
            },
            {
              "num": "15",
              "term": "Pushback Tug Driver",
              "definition": "A heavy-equipment ramp driver specialized in connecting towbars or towbarless cradles to safely push aircraft backward out of gate stands into the taxi lane."
            },
            {
              "num": "16",
              "term": "Airfield Maintenance Technician",
              "definition": "A technical specialist who inspects and maintains aeronautical ground lighting (AGL), taxiway guidance signage, runway markings, and perimeter security fences."
            },
            {
              "num": "17",
              "term": "Refueller / Fuel Hydrant Operator",
              "definition": "A ramp fueling technician who connects mobile fuel bowsers or underground hydrant dispensers to aircraft fuel valves to deliver precise, contamination-tested Jet-A1."
            },
            {
              "num": "18",
              "term": "Load Controller / Weight & Balance Specialist",
              "definition": "An operations professional who calculates aircraft center-of-gravity (CG), models payload distribution, and generates the official load and trim sheet required for safe takeoff."
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: Airside Operations & Ground Handling",
              "watchUrl": "https://www.youtube.com/watch?v=J47mS5F9s6E",
              "tag": "Ground Operations",
              "videoId": "J47mS5F9s6E",
              "embedUrl": "https://www.youtube-nocookie.com/embed/J47mS5F9s6E",
              "caption": "Focus: Professional coordination among ramp agents, turnaround dispatchers, pushback drivers, and ground handling teams during rapid turnarounds."
            },
            {
              "title": "Video 2: Inside Air Traffic Control",
              "watchUrl": "https://www.youtube.com/watch?v=R90mroZyAL4",
              "tag": "Air Traffic Services",
              "videoId": "R90mroZyAL4",
              "embedUrl": "https://www.youtube-nocookie.com/embed/R90mroZyAL4",
              "caption": "Focus: Tower, approach, and en-route controllers managing active runways, sector handoffs, tactical separation authority, and standard phraseology."
            },
            {
              "title": "Video 3: AFIS & Regional Aerodrome Operations",
              "watchUrl": "https://www.youtube.com/watch?v=2BZbHAJQ70s",
              "tag": "TSEEAC / AFISO Focus",
              "videoId": "2BZbHAJQ70s",
              "embedUrl": "https://www.youtube-nocookie.com/embed/2BZbHAJQ70s",
              "caption": "Focus: Aerodrome Flight Information Service (AFIS) officers providing flight information, weather reports, and alerting service without air traffic control separation."
            }
          ],
          "grammar": {
            "title": "Expressing Professional Responsibilities, Duties & Authority",
            "badge": "B2 Functional Grammar Focus",
            "patternTitle": "Responsibility & Authority Formulas",
            "formula": "BE RESPONSIBLE FOR + -ING • BE TASKED WITH + -ING • HAVE AUTHORITY OVER / TO • ENSURE THAT + CLAUSE",
            "rulesTitle": "Core Formulas & Jurisdictional Prepositions",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. BE RESPONSIBLE FOR + Gerund / Noun:</strong> Core ongoing duty or accountability (<span style=\"font-weight: 700; color: #c0684f;\">responsible for coordinating</span>, <span style=\"font-weight: 700; color: #c0684f;\">responsible for flight safety</span>).",
              "<strong style=\"color: #1e293b;\">2. BE TASKED WITH + Gerund / Noun:</strong> Designated operational mission or assigned mandate (<span style=\"font-weight: 700; color: #c0684f;\">tasked with conducting</span>, <span style=\"font-weight: 700; color: #c0684f;\">tasked with safety audits</span>).",
              "<strong style=\"color: #1e293b;\">3. HAVE AUTHORITY OVER / TO:</strong> Legal command power (<span style=\"font-weight: 600; color: #334155;\">have authority over active runways</span> [ATCO], <span style=\"font-weight: 600; color: #334155;\">authority to issue clearances</span>).",
              "<strong style=\"color: #1e293b;\">4. ENSURE THAT + Clause:</strong> Verification and quality assurance (<span style=\"font-weight: 600; color: #334155;\">ensure that cargo doors are latched</span>, <span style=\"font-weight: 600; color: #334155;\">ensure that weight limits are respected</span>).",
              "<strong style=\"color: #1e293b;\">5. REPORT TO vs. LIAISE WITH:</strong> Upward hierarchy (<span style=\"font-weight: 600; color: #334155;\">reports to the chief pilot</span>) vs. lateral coordination (<span style=\"font-weight: 600; color: #334155;\">liaises with apron controllers</span>)."
            ],
            "trap": "<strong>⚠️ Common Preposition & False Friend Trap:</strong> Never say <em>responsible of</em>—always use <strong>responsible for + -ing</strong>. Also, strictly distinguish <em>control</em> (ATCO issuing binding separation orders) from <em>provide information</em> (AFISO advising pilots without executive control clearances).",
            "examplesTitle": "Operational Responsibility Examples",
            "examples": [
              "<em>\"The Turnaround Coordinator is <strong>responsible for ensuring</strong> that all ground support equipment is detached before pushback.\"</em>",
              "<em>\"Unlike aerodrome controllers, AFISOs are <strong>tasked with providing</strong> traffic information rather than tactical separation clearances.\"</em>"
            ]
          },
          "toeic": {
            "stem": "The Turnaround Coordinator is directly responsible ________ supervising the loading of cargo and ensuring compliance with the weight schedule.",
            "options": [
              {
                "letter": "A",
                "text": "with"
              },
              {
                "letter": "B",
                "text": "for"
              },
              {
                "letter": "C",
                "text": "of"
              },
              {
                "letter": "D",
                "text": "to"
              }
            ],
            "correctLetter": "B",
            "correctText": "for",
            "analysis": "\"Responsible for\" is the fixed prepositional collocation followed by a gerund (\"supervising\").",
            "strategy": "Spot \"responsible\" -> immediately look for \"for + -ing/noun\". Avoid the common French false friend \"responsible of\"."
          },
          "resources": [
            {
              "url": "https://www.ecologie.gouv.fr/concours-dgac",
              "tag": "01 • Civil Aviation Authority",
              "name": "DGAC Careers & TSEEAC Competitions",
              "desc": "Official French civil aviation authority portal detailing TSEEAC, IEEAC, and ATCO recruitment competitions and corps duties."
            },
            {
              "url": "https://www.eurocontrol.int/careers",
              "tag": "02 • European ATM Network",
              "name": "Eurocontrol Air Traffic Management",
              "desc": "Pan-European air navigation services, controller profiles, and ATM network operations."
            },
            {
              "url": "https://www.iata.org/en/programs/ops-infra/ground-operations/",
              "tag": "03 • Ramp & Apron Standards",
              "name": "IATA Ground Operations Hub (IGOM)",
              "desc": "Global airline industry standards for apron safety, aircraft turnaround, and ground support equipment handling."
            },
            {
              "url": "https://www.ifatca.org",
              "tag": "04 • Professional Association",
              "name": "IFATCA Air Traffic Controllers",
              "desc": "Worldwide federation representing over 50,000 air traffic controllers across 130 countries."
            },
            {
              "url": "https://www.icao.int",
              "tag": "05 • Global Standards",
              "name": "ICAO Personnel Licensing (Annex 1)",
              "desc": "International civil aviation benchmarks for pilots, flight dispatchers, ATCOs, and aeronautical station operators."
            },
            {
              "url": "https://www.etsglobal.org/fr/fr",
              "tag": "06 • Evaluation Rubrics",
              "name": "ETS Global TOEIC Practice",
              "desc": "Official TOEIC Speaking & Writing evaluation benchmarks and sample workplace responses for aviation professionals."
            }
          ],
          "pageUrl": "session4/admat_aas1.html",
          "articles": [
            {
              "topic": "FlightGlobal / Aviation Careers",
              "sourceTag": "Career Insight",
              "heading": "Beyond the Flight Deck: The Essential Network of Airport Operations",
              "snippet": "An in-depth look at the landside, airside, and regulatory roles that keep international aviation flowing seamlessly 24/7.",
              "readTime": "Estimated read: 5-6 mins",
              "url": "https://www.flightglobal.com"
            },
            {
              "topic": "DGAC France / ENAC Portal",
              "sourceTag": "Civil Aviation Careers",
              "heading": "The Modern Role of TSEEAC: From AFIS to Safety Oversight",
              "snippet": "How France's Civil Aviation Operations Corps supports regional aerodrome operations, civil aviation safety inspections, and air navigation technical support.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://www.ecologie.gouv.fr/direction-generale-laviation-civile-dgac"
            },
            {
              "topic": "Eurocontrol ATM Careers",
              "sourceTag": "Operational Profile",
              "heading": "ATCO vs AFISO: Understanding the Scope of Air Traffic Services",
              "snippet": "Comparing tactical separation authority in controlled airspace with flight information and advisory services at regional fields.",
              "readTime": "Estimated read: 6-8 mins",
              "url": "https://www.eurocontrol.int"
            },
            {
              "topic": "IATA Ground Operations Bulletin",
              "sourceTag": "Safety & Turnaround",
              "heading": "The Turnaround Coordinator: Heartbeat of On-Time Performance",
              "snippet": "Why ramp coordinators, loadmasters, and flight dispatchers form the vital link between airline schedules and safety compliance.",
              "readTime": "Estimated read: 5-6 mins",
              "url": "https://www.iata.org"
            }
          ],
          "toeicQuestions": [
            {
              "stem": "The Turnaround Coordinator is directly responsible ________ supervising the loading of cargo and ensuring compliance with the weight schedule.",
              "options": [
                {
                  "letter": "A",
                  "text": "with"
                },
                {
                  "letter": "B",
                  "text": "for"
                },
                {
                  "letter": "C",
                  "text": "of"
                },
                {
                  "letter": "D",
                  "text": "to"
                }
              ],
              "correctLetter": "B",
              "correctText": "for",
              "analysis": "\"Responsible for\" is the fixed prepositional collocation followed by a gerund (\"supervising\").",
              "strategy": "Spot \"responsible\" -> immediately look for \"for + -ing/noun\". Avoid the common French false friend \"responsible of\"."
            },
            {
              "stem": "Unlike aerodrome controllers who issue clearances, AFIS officers are tasked with ________ flight information and meteorological updates to inbound pilots.",
              "options": [
                {
                  "letter": "A",
                  "text": "provide"
                },
                {
                  "letter": "B",
                  "text": "provides"
                },
                {
                  "letter": "C",
                  "text": "providing"
                },
                {
                  "letter": "D",
                  "text": "provided"
                }
              ],
              "correctLetter": "C",
              "correctText": "providing",
              "analysis": "\"Be tasked with\" is followed by a preposition (\"with\"), which requires a gerund (\"providing\") or a noun phrase.",
              "strategy": "Identify \"tasked with\" -> verb must be in the gerund form (-ing)."
            },
            {
              "stem": "Before releasing the aircraft for departure, the flight dispatcher must verify that all load sheets ________ by the captain.",
              "options": [
                {
                  "letter": "A",
                  "text": "have signed"
                },
                {
                  "letter": "B",
                  "text": "have been signed"
                },
                {
                  "letter": "C",
                  "text": "will sign"
                },
                {
                  "letter": "D",
                  "text": "signing"
                }
              ],
              "correctLetter": "B",
              "correctText": "have been signed",
              "analysis": "Passive voice is required because load sheets cannot sign themselves; they must be signed by the captain.",
              "strategy": "Check if the subject (\"all load sheets\") is the actor or the receiver of the verb. Since it is the receiver, choose passive voice \"have been signed\"."
            },
            {
              "stem": "The civil aviation safety inspector conducted an unannounced audit in order to ensure ________ ground handling personnel were strictly following apron safety protocols.",
              "options": [
                {
                  "letter": "A",
                  "text": "that"
                },
                {
                  "letter": "B",
                  "text": "what"
                },
                {
                  "letter": "C",
                  "text": "which"
                },
                {
                  "letter": "D",
                  "text": "where"
                }
              ],
              "correctLetter": "A",
              "correctText": "that",
              "analysis": "\"Ensure that\" introduces a content clause detailing what is being verified or secured.",
              "strategy": "\"Ensure\" takes a \"that\" clause (\"ensure that + subject + verb\")."
            },
            {
              "stem": "The airport duty manager was commended for handling the ramp emergency calmly, ________ severe winter weather conditions.",
              "options": [
                {
                  "letter": "A",
                  "text": "despite"
                },
                {
                  "letter": "B",
                  "text": "although"
                },
                {
                  "letter": "C",
                  "text": "unless"
                },
                {
                  "letter": "D",
                  "text": "whereas"
                }
              ],
              "correctLetter": "A",
              "correctText": "despite",
              "analysis": "\"Despite\" is a preposition expressing concession followed by a noun phrase (\"severe winter weather conditions\").",
              "strategy": "Check what follows the blank. \"Severe winter weather conditions\" is a noun phrase, so a preposition (\"despite\") is required rather than a subordinating conjunction like \"although\"."
            }
          ]
        }
      }
    }
  },
  "2": {
    "id": 2,
    "name": "Module 2",
    "title": "Aircraft and Aerodynamics",
    "ddrs": {
      "title": "D\u00e9veloppement Durable & Responsabilit\u00e9 Soci\u00e9tale : Tags et D\u00e9finitions Officielles",
      "summary": "Le R\u00e9f\u00e9rentiel National DD&RS de l'Enseignement Sup\u00e9rieur et de la Recherche (Label DD&RS) structure les engagements \u00e9cologiques, soci\u00e9taux et \u00e9thiques des \u00e9tablissements et des grands projets de transport selon 5 axes strat\u00e9giques et leurs domaines transversaux d'application.",
      "pageUrl": "ddrs2.html",
      "axes": [
        {
          "badge": "Axe 1",
          "num": "1.",
          "title": "Gouvernance et Strat\u00e9gie",
          "desc": "Int\u00e9gration du d\u00e9veloppement durable dans la vision, le projet d'\u00e9tablissement et le pilotage d\u00e9cisionnel. Dialogue continu avec les parties prenantes (\u00e9tudiants, personnels, collectivit\u00e9s, partenaires), allocation de budgets d\u00e9di\u00e9s et suivi d'indicateurs d'impact mesurables."
        },
        {
          "badge": "Axe 2",
          "num": "2.",
          "title": "Formation et P\u00e9dagogie",
          "desc": "Sensibilisation et formation de 100 % des apprenants aux enjeux de la transition socio-\u00e9cologique (limites plan\u00e9taires, climat, biodiversit\u00e9). Int\u00e9gration transversale des comp\u00e9tences DD&RS (rapport Jouzel / socle MESR) pour pr\u00e9parer les ing\u00e9nieurs \u00e0 la prise de d\u00e9cision \u00e9thique et responsable."
        },
        {
          "badge": "Axe 3",
          "num": "3.",
          "title": "Recherche et Innovation",
          "desc": "Orientation et valorisation de l'activit\u00e9 scientifique et technologique en r\u00e9ponse aux Objectifs de D\u00e9veloppement Durable (ODD). Soutien aux programmes interdisciplinaires, recherche sobre et responsable, \u00e9co-conception et transfert de technologies vertes au service de la soci\u00e9t\u00e9."
        },
        {
          "badge": "Axe 4",
          "num": "4.",
          "title": "Gestion Environnementale",
          "desc": "Ma\u00eetrise et r\u00e9duction continue des impacts \u00e9cologiques directs : d\u00e9carbonation des mobilit\u00e9s pendulaires et professionnelles, efficacit\u00e9 et sobri\u00e9t\u00e9 \u00e9nerg\u00e9tique du patrimoine b\u00e2ti, gestion circulaire des d\u00e9chets, pr\u00e9servation de la biodiversit\u00e9 sur site et achats publics responsables."
        },
        {
          "badge": "Axe 5",
          "num": "5.",
          "title": "Politique Sociale et Inclusion",
          "desc": "Engagement institutionnel pour la responsabilit\u00e9 soci\u00e9tale : \u00e9galit\u00e9 professionnelle femmes-hommes, inclusion et accessibilit\u00e9 des personnes en situation de handicap, \u00e9galit\u00e9 des chances, am\u00e9lioration de la qualit\u00e9 de vie et sant\u00e9 globale, et pr\u00e9vention de toute forme de discrimination."
        }
      ],
      "items": [
        {
          "badge": "Axe 1",
          "num": "1.",
          "title": "Gouvernance et Strat\u00e9gie",
          "desc": "Int\u00e9gration du d\u00e9veloppement durable dans la vision, le projet d'\u00e9tablissement et le pilotage d\u00e9cisionnel. Dialogue continu avec les parties prenantes (\u00e9tudiants, personnels, collectivit\u00e9s, partenaires), allocation de budgets d\u00e9di\u00e9s et suivi d'indicateurs d'impact mesurables.",
          "isMuted": true
        },
        {
          "badge": "Axe 2",
          "num": "2.",
          "title": "Formation et P\u00e9dagogie",
          "desc": "Sensibilisation et formation de 100 % des apprenants aux enjeux de la transition socio-\u00e9cologique (limites plan\u00e9taires, climat, biodiversit\u00e9). Int\u00e9gration transversale des comp\u00e9tences DD&amp;RS (rapport Jouzel / socle MESR) pour pr\u00e9parer les ing\u00e9nieurs \u00e0 la prise de d\u00e9cision \u00e9thique et responsable.",
          "isMuted": false
        },
        {
          "badge": "Axe 3",
          "num": "3.",
          "title": "Recherche et Innovation",
          "desc": "Orientation et valorisation de l'activit\u00e9 scientifique et technologique en r\u00e9ponse aux Objectifs de D\u00e9veloppement Durable (ODD). Soutien aux programmes interdisciplinaires, recherche sobre et responsable, \u00e9co-conception et transfert de technologies vertes au service de la soci\u00e9t\u00e9.",
          "isMuted": false
        },
        {
          "badge": "Axe 4",
          "num": "4.",
          "title": "Gestion Environnementale",
          "desc": "Ma\u00eetrise et r\u00e9duction continue des impacts \u00e9cologiques directs : d\u00e9carbonation des mobilit\u00e9s pendulaires et professionnelles, efficacit\u00e9 et sobri\u00e9t\u00e9 \u00e9nerg\u00e9tique du patrimoine b\u00e2ti, gestion circulaire des d\u00e9chets, pr\u00e9servation de la biodiversit\u00e9 sur site et achats publics responsables.",
          "isMuted": false
        },
        {
          "badge": "Axe 5",
          "num": "5.",
          "title": "Politique Sociale et Inclusion",
          "desc": "Engagement institutionnel pour la responsabilit\u00e9 soci\u00e9tale : \u00e9galit\u00e9 professionnelle femmes-hommes, inclusion et accessibilit\u00e9 des personnes en situation de handicap, \u00e9galit\u00e9 des chances, am\u00e9lioration de la qualit\u00e9 de vie et sant\u00e9 globale, et pr\u00e9vention de toute forme de discrimination.",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "6.",
          "title": "Mobilit\u00e9 Durable &amp; Report Modal (Sustainable Mobility)",
          "desc": "Strat\u00e9gie d'optimisation des transports articul\u00e9e autour de la hi\u00e9rarchie \u00ab \u00c9viter - Transf\u00e9rer - Am\u00e9liorer \u00bb (ASI). Promotion active du report modal vers le ferroviaire, les transports en commun et les mobilit\u00e9s douces face \u00e0 l'autosolisme et aux vols court-courriers.",
          "isMuted": true
        },
        {
          "badge": "Tag",
          "num": "7.",
          "title": "Bilan d'\u00c9missions de GES (BEGES / Bilan Carbone)",
          "desc": "Comptabilisation r\u00e9glementaire des gaz \u00e0 effet de serre (m\u00e9thode ADEME / ISO 14064) sur les trois p\u00e9rim\u00e8tres : Scope 1 (\u00e9missions directes), Scope 2 (\u00e9missions indirectes \u00e9nerg\u00e9tiques) et Scope 3 (\u00e9missions indirectes amont/aval : d\u00e9placements, achats, logistique et cycle de vie).",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "8.",
          "title": "Sobri\u00e9t\u00e9 \u00c9nerg\u00e9tique &amp; Efficacit\u00e9",
          "desc": "D\u00e9marche articulant la sobri\u00e9t\u00e9 (questionnement et r\u00e9duction des consommations par la modification des comportements et des usages collectifs) et l'efficacit\u00e9 (optimisation technique des rendements \u00e9nerg\u00e9tiques pour un m\u00eame niveau de service).",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "9.",
          "title": "Pr\u00e9servation de la Biodiversit\u00e9 &amp; Z\u00e9ro Artificialisation Nette (ZAN)",
          "desc": "Protection des \u00e9cosyst\u00e8mes et des continuit\u00e9s \u00e9cologiques (trames vertes et bleues). Application des exigences l\u00e9gales (loi Climat et R\u00e9silience) visant \u00e0 stopper la disparition nette d'espaces naturels et agricoles caus\u00e9e par les infrastructures et l'am\u00e9nagement.",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "10.",
          "title": "\u00c9quit\u00e9 Territoriale &amp; Accessibilit\u00e9 (Territorial Equity)",
          "desc": "Principe de justice spatiale garantissant un acc\u00e8s universel, abordable et s\u00e9curis\u00e9 aux r\u00e9seaux de transport et aux services d'int\u00e9r\u00eat g\u00e9n\u00e9ral pour l'ensemble des territoires (urbains, p\u00e9riurbains et ruraux), luttant contre la fracture et la pr\u00e9carit\u00e9 mobilit\u00e9.",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "11.",
          "title": "Achats Responsables &amp; Analyse du Cycle de Vie (ACV / LCA)",
          "desc": "Int\u00e9gration syst\u00e9matique de crit\u00e8res environnementaux et sociaux dans la commande publique et priv\u00e9e. \u00c9valuation globale des impacts de chaque produit, infrastructure ou service de son extraction jusqu'\u00e0 son recyclage ou \u00e9limination finale.",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "12.",
          "title": "Objectifs de D\u00e9veloppement Durable (ODD - Agenda 2030)",
          "desc": "Cadre universel des Nations Unies comprenant 17 objectifs interd\u00e9pendants pour concilier prosp\u00e9rit\u00e9 \u00e9conomique, progr\u00e8s social et protection de la biosph\u00e8re. Les politiques de transport et d'ing\u00e9nierie s'articulent principalement autour des ODD 9, 11, 12 et 13.",
          "isMuted": false
        }
      ]
    },
    "sessions": {
      "1": {
        "session": 1,
        "objectives": {
          "title": "Session 1 - Extreme Weather Objectives",
          "summary": "By the end of this session, you will be able to discuss extreme weather and climate impacts with confidence, use key vocabulary and grammar, and build the skills needed for your TOEIC test and Session 5 evaluation.",
          "items": [
            {
              "num": 1,
              "title": "Practice TOEIC Listening for Weather Bulletins",
              "description": "Listen for key weather details, temperature extremes, and travel delay announcements typical of TOEIC Part 4."
            },
            {
              "num": 2,
              "title": "Master Extreme Weather & Climate Vocabulary",
              "description": "Learn and use high-frequency terms for severe weather events (heatwaves, flash floods, droughts) and climate resilience."
            },
            {
              "num": 3,
              "title": "Identify Word Forms & Suffixes in TOEIC Part 5",
              "description": "Identify whether a blank needs a noun (-tion), adjective (-able), or adverb (-ly) when describing weather changes."
            },
            {
              "num": 4,
              "title": "Discuss Community & Infrastructure Resilience (DDRS)",
              "description": "Explore how cities and transport networks can protect communities and infrastructure against extreme weather."
            },
            {
              "num": 5,
              "title": "Build Fluency for the Session 5 Evaluation",
              "description": "Practice speaking about weather disruptions and safety measures using clear pronunciation, fluency, and accurate vocabulary."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 1 Lesson Plan (2 Hours)",
          "summary": "A 2-hour session agenda combining conversational warm-ups, TOEIC test practice, vocabulary building, speaking activities, and evaluation preparation.",
          "items": [
            {
              "time": "0-15",
              "title": "Conversational Warm-Up: Weather Stories (15 mins)",
              "description": "Students talk in pairs about the most extreme weather event they have ever witnessed and how they responded."
            },
            {
              "time": "15-45",
              "title": "TOEIC Strategy: Listening to Announcements (30 mins)",
              "description": "Part 4 practice: listening to broadcast weather advisories, airport delay announcements, and emergency notices."
            },
            {
              "time": "45-65",
              "title": "Vocabulary Builder: Climate & Disruption (20 mins)",
              "description": "High-frequency terms for weather phenomena (heatwave, flash flood, blizzard) and words formed with suffixes (-tion, -ment, -ly)."
            },
            {
              "time": "65-110",
              "title": "Structured Discussion & Grammar (45 mins)",
              "description": "Discussing community resilience and infrastructure protection using Word Forms (nouns, adjectives, adverbs) in context."
            },
            {
              "time": "110-120",
              "title": "Debrief, Evaluation Prep & Wrap-Up (10 mins)",
              "description": "Fluency feedback, pronunciation check for weather vocabulary, and self-evaluation logging."
            }
          ]
        },
        "revision": {
          "title": "Session 1: Extreme Weather",
          "summary": "Review the 18 key terms for Extreme Weather to build your fluency in discussions, professional reading, and TOEIC practice.",
          "terms": [
            {
              "num": "01",
              "term": "Heatwave",
              "definition": "An extended period of abnormally high atmospheric temperatures, often accompanied by high humidity, which stresses public health, strains power grids, and softens transport surfaces."
            },
            {
              "num": "02",
              "term": "Wildfire / Forest Fire",
              "definition": "An uncontrolled inferno spreading rapidly through timberland and dry vegetation, exacerbated by heat and drought, generating toxic smoke plumes and regional transport closures."
            },
            {
              "num": "03",
              "term": "Severe Drought",
              "definition": "An extended deficit in regional precipitation leading to acute water scarcity, agricultural failure, reduced hydroelectric capacity, and parched, fire-prone soils."
            },
            {
              "num": "04",
              "term": "Desertification",
              "definition": "The progressive degradation of fertile land into arid desert, driven by rising global temperatures, recurring droughts, deforestation, and unsustainable land use."
            },
            {
              "num": "05",
              "term": "Flash Flood",
              "definition": "A sudden, violent surge of floodwater triggered by torrential rainfall within a brief window, overwhelming drainage infrastructure and submerging transit corridors."
            },
            {
              "num": "06",
              "term": "Storm Surge",
              "definition": "An abnormal, destructive rise in sea level propelled ashore by low-pressure cyclones or hurricane winds, inundating coastal settlements and low-lying airports."
            },
            {
              "num": "07",
              "term": "Sea-Level Rise",
              "definition": "The ongoing global increase in ocean elevation driven by thermal expansion of warming seawater and the accelerated melting of glaciers and ice sheets."
            },
            {
              "num": "08",
              "term": "Atmospheric River",
              "definition": "A long, narrow corridor of concentrated water vapor in the atmosphere that channels tropical moisture, triggering historic deluge and widespread flooding upon landfall."
            },
            {
              "num": "09",
              "term": "Supercell Thunderstorm",
              "definition": "An organized, severe rotating storm system that produces destructive hail, tornadoes, and torrential rains, causing severe damage to infrastructure."
            },
            {
              "num": "10",
              "term": "Polar Vortex Disruption",
              "definition": "A destabilization of high-altitude Arctic winds that allows freezing polar air masses to plunge southward, causing severe and paralyzing cold snaps."
            },
            {
              "num": "11",
              "term": "Early Warning System",
              "definition": "Advanced meteorological networks and public communication alerts that notify communities of impending severe storms, floods, or extreme weather before disaster strikes."
            },
            {
              "num": "12",
              "term": "Flood Defenses / Barriers",
              "definition": "Engineered structures such as sea walls, levees, and storm surge gates designed to protect cities and transport corridors from rising floodwaters."
            },
            {
              "num": "13",
              "term": "Greenhouse Effect",
              "definition": "The planetary warming process where heat-trapping atmospheric gases (CO\u2082, methane, nitrous oxide) absorb outgoing infrared radiation instead of letting it escape to space."
            },
            {
              "num": "14",
              "term": "Climate Tipping Point",
              "definition": "A critical environmental threshold beyond which a minor change triggers self-reinforcing, irreversible shifts in Earth systems (e.g., permafrost thaw, ice-sheet collapse)."
            },
            {
              "num": "15",
              "term": "Ocean Acidification",
              "definition": "The ongoing decline in ocean pH caused by absorbing excess carbon dioxide from the atmosphere, disrupting marine food chains and coral reefs."
            },
            {
              "num": "16",
              "term": "Glacial Retreat",
              "definition": "The accelerating worldwide loss of alpine glaciers and polar ice shelves due to sustained global warming, diminishing vital freshwater reservoirs."
            },
            {
              "num": "17",
              "term": "Climate Resilience",
              "definition": "The capacity of socio-economic systems, supply chains, and civil infrastructure to anticipate, absorb, recover from, and adapt to hazardous climate-related shocks."
            },
            {
              "num": "18",
              "term": "Decarbonization",
              "definition": "The systematic elimination or progressive reduction of greenhouse gas emissions across aviation, transport, industry, and energy sectors to achieve net-zero targets."
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: Extreme Weather & Climate Change Explained",
              "watchUrl": "https://www.youtube.com/watch?v=wecbVJ4FOHY",
              "tag": "Meteorology",
              "videoId": "wecbVJ4FOHY",
              "embedUrl": "https://www.youtube-nocookie.com/embed/wecbVJ4FOHY",
              "caption": "Focus: Explores the meteorological science behind intensifying global heatwaves, supercell storms, and shifting atmospheric circulation patterns."
            },
            {
              "title": "Video 2: Flash Floods & Sea-Level Rise: Engineering City Defenses",
              "watchUrl": "https://www.youtube.com/watch?v=jdGjgmyFP9M",
              "tag": "Resilience",
              "videoId": "jdGjgmyFP9M",
              "embedUrl": "https://www.youtube-nocookie.com/embed/jdGjgmyFP9M",
              "caption": "Focus: How coastal communities and urban planners construct storm surge barriers, sea walls, and drainage infrastructure against extreme deluge."
            },
            {
              "title": "Video 3: B2 English: Reporting Severe Weather & Emergency Advisories",
              "watchUrl": "https://www.youtube.com/watch?v=pEO9-iPZQWA",
              "tag": "Language Practice",
              "videoId": "pEO9-iPZQWA",
              "embedUrl": "https://www.youtube-nocookie.com/embed/pEO9-iPZQWA",
              "caption": "Focus: Essential vocabulary, word forms, and phrasing used by international broadcasters to communicate emergency storm warnings and flood alerts."
            }
          ],
          "grammar": {
            "title": "Word Endings & Sentence Positions",
            "badge": "B1\u2013B2 Grammar Focus",
            "patternTitle": "Common Endings & Word Types",
            "formula": "Noun (-tion, -ment) \u2022 Adj (-able, -ive) \u2022 Adv (-ly) \u2022 Verb (-ate, -ify)",
            "rulesTitle": "Core Rules",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. Nouns (-tion, -ment, -ance, -ity):</strong> Names of things, people, or concepts. They come after <em>a</em>, <em>an</em>, <em>the</em> or adjectives (<span style=\"font-weight: 700; color: #49739a;\">prediction</span>, <span style=\"font-weight: 700; color: #49739a;\">severity</span>).",
              "<strong style=\"color: #1e293b;\">2. Adjectives (-able, -ive, -al, -ous):</strong> Words that describe nouns. They come before nouns or after verbs like <em>be</em>, <em>remain</em>, <em>seem</em> (<span style=\"font-weight: 700; color: #49739a;\">predictable</span>, <span style=\"font-weight: 700; color: #49739a;\">severe</span>).",
              "<strong style=\"color: #1e293b;\">3. Adverbs (-ly):</strong> Words that describe how or how much an action happens. They describe verbs, adjectives, or full sentences (<span style=\"font-weight: 600; color: #334155;\">significantly</span>, <span style=\"font-weight: 600; color: #334155;\">rapidly</span>).",
              "<strong style=\"color: #1e293b;\">4. Verbs (-ate, -ify, -ize):</strong> Action words. They follow the subject (<span style=\"font-weight: 600; color: #334155;\">predict</span>, <span style=\"font-weight: 600; color: #334155;\">signify</span>)."
            ],
            "trap": "<strong>\u26a0\ufe0f TOEIC Trap Alert:</strong> If a sentence already has a complete verb (e.g., <em>dropped</em>), and the blank explains how it happened, you need an <strong>adverb ending in -ly</strong> (<em>dropped significantly</em>)!",
            "examplesTitle": "Meteorology & Operations Examples",
            "examples": [
              "<em>\"Meteorologists must monitor barometric pressure <strong>continuously</strong> to ensure flight safety.\"</em>",
              "<em>\"The sudden drop in altitude caused by wind shear was <strong>extremely</strong> dangerous.\"</em>"
            ]
          },
          "toeic": {
            "stem": "The frequency of Mediterranean heatwave events was ________ higher this decade than during any previously recorded ten-year span.",
            "options": [
              {
                "letter": "A",
                "text": "significant"
              },
              {
                "letter": "B",
                "text": "significantly"
              },
              {
                "letter": "C",
                "text": "significance"
              },
              {
                "letter": "D",
                "text": "significate"
              }
            ],
            "correctLetter": "B",
            "correctText": "significantly",
            "analysis": "The comparative adjective \"higher\" must be modified by an adverb of degree (\"significantly higher\").",
            "strategy": "Comparative adjectives (higher, faster, cheaper) are modified by adverbs (significantly, substantially, slightly), not adjectives."
          },
          "resources": [
            {
              "url": "https://public.wmo.int",
              "tag": "01 \u2022 Global Weather Authority",
              "name": "World Meteorological Organization",
              "desc": "Global authority on atmospheric science, severe storm warnings, and climate metrics."
            },
            {
              "url": "https://climate.copernicus.eu",
              "tag": "02 \u2022 Satellite Earth Observation",
              "name": "Copernicus Climate Change Service",
              "desc": "European satellite data tracking global surface temperatures, wildfires, and extreme storms."
            },
            {
              "url": "https://www.undrr.org",
              "tag": "03 \u2022 Emergency Preparedness",
              "name": "UN Disaster Risk Reduction (UNDRR)",
              "desc": "Global frameworks, early warning initiatives, and community resilience guidelines."
            },
            {
              "url": "https://www.eea.europa.eu",
              "tag": "04 \u2022 European Climate Portal",
              "name": "European Environment Agency Hazards",
              "desc": "Interactive mapping of European heatwaves, drought risks, and flood vulnerability."
            },
            {
              "url": "https://ourworldindata.org/natural-disasters",
              "tag": "05 \u2022 Empirical Datasets",
              "name": "Our World in Data: Natural Disasters",
              "desc": "Long-term statistical datasets and interactive charts tracking extreme weather trends."
            },
            {
              "url": "https://www.etsglobal.org/fr/fr",
              "tag": "06 \u2022 TOEIC Listening & Reading",
              "name": "ETS Global TOEIC Preparation",
              "desc": "Weather advisory and emergency briefing listening practice for technical professionals."
            }
          ],
          "pageUrl": "session1/admat2.html",
          "articles": [
            {
              "topic": "WMO Global Climate Observatory",
              "sourceTag": "International Report",
              "heading": "State of the Global Climate: Extreme Events &amp; Frequency",
              "snippet": "World Meteorological Organization empirical analysis tracking rising global temperatures, severe heatwaves, and unprecedented precipitation extremes.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://public.wmo.int"
            },
            {
              "topic": "UNDRR Risk Reduction Briefing",
              "sourceTag": "Economic Analysis",
              "heading": "The Escalating Economic Toll of Extreme Weather Disasters",
              "snippet": "Assessing financial losses, supply-chain disruptions, and critical infrastructure vulnerabilities caused by climate-driven severe weather shocks.",
              "readTime": "Estimated read: 6-8 mins",
              "url": "https://www.undrr.org"
            }
          ],
          "toeicQuestions": [
            {
              "stem": "The frequency of Mediterranean heatwave events was ________ higher this decade than during any previously recorded ten-year span.",
              "options": [
                {
                  "letter": "A",
                  "text": "significant"
                },
                {
                  "letter": "B",
                  "text": "significantly"
                },
                {
                  "letter": "C",
                  "text": "significance"
                },
                {
                  "letter": "D",
                  "text": "significate"
                }
              ],
              "correctLetter": "B",
              "correctText": "significantly",
              "analysis": "The comparative adjective \"higher\" must be modified by an adverb of degree (\"significantly higher\").",
              "strategy": "Comparative adjectives (higher, faster, cheaper) are modified by adverbs (significantly, substantially, slightly), not adjectives."
            },
            {
              "stem": "Last July recorded the ________ monthly surface temperatures ever documented by the World Meteorological Organization.",
              "options": [
                {
                  "letter": "A",
                  "text": "hot"
                },
                {
                  "letter": "B",
                  "text": "hotter"
                },
                {
                  "letter": "C",
                  "text": "hottest"
                },
                {
                  "letter": "D",
                  "text": "most hot"
                }
              ],
              "correctLetter": "C",
              "correctText": "hottest",
              "analysis": "The definite article \"the\" combined with \"ever documented\" calls for the superlative form of a one-syllable adjective (\"hottest\").",
              "strategy": "Formulas with \"the\" + [adjective] + \"ever\" require the superlative (-est or most + adj)."
            },
            {
              "stem": "Last winter severe ice storms caused ________ more flight cancellations than the five-year seasonal average.",
              "options": [
                {
                  "letter": "A",
                  "text": "far"
                },
                {
                  "letter": "B",
                  "text": "very"
                },
                {
                  "letter": "C",
                  "text": "too"
                },
                {
                  "letter": "D",
                  "text": "so"
                }
              ],
              "correctLetter": "A",
              "correctText": "far",
              "analysis": "\"Far\" acts as an intensifying adverb before comparative structures (\"far more\"). \"Very\" cannot directly modify a comparative adjective or \"more\".",
              "strategy": "Never use \"very\" before comparatives (very taller / very more). Use \"much\", \"far\", \"way\", or \"significantly\"."
            },
            {
              "stem": "Runway heating systems installed in northern airports are twice as ________ as conventional chemical de-icing trucks.",
              "options": [
                {
                  "letter": "A",
                  "text": "efficiently"
                },
                {
                  "letter": "B",
                  "text": "efficient"
                },
                {
                  "letter": "C",
                  "text": "more efficient"
                },
                {
                  "letter": "D",
                  "text": "efficiency"
                }
              ],
              "correctLetter": "B",
              "correctText": "efficient",
              "analysis": "In the equative construction \"as [adjective] as\", the base adjective form is required because the linking verb \"are\" takes an adjective complement.",
              "strategy": "Pattern: as + [BASE ADJECTIVE] + as. Do not put comparatives (-er, more) between \"as... as\"."
            },
            {
              "stem": "Airport climate vulnerability assessments must be conducted ________ in regions exposed to flash flooding.",
              "options": [
                {
                  "letter": "A",
                  "text": "frequent"
                },
                {
                  "letter": "B",
                  "text": "frequently"
                },
                {
                  "letter": "C",
                  "text": "frequency"
                },
                {
                  "letter": "D",
                  "text": "more frequent"
                }
              ],
              "correctLetter": "B",
              "correctText": "frequently",
              "analysis": "An adverb (\"frequently\") is required to modify the passive verb phrase \"must be conducted\".",
              "strategy": "Identify the word modified: if modifying how an action is done (conducted), select the -ly adverb."
            }
          ]
        }
      },
      "2": {
        "session": 2,
        "objectives": {
          "title": "Session 2 - Sustainable Cities Objectives",
          "summary": "By the end of this session, you will be able to discuss sustainable cities with confidence, use key vocabulary and grammar, and build the skills needed for your TOEIC test and Session 5 evaluation.",
          "items": [
            {
              "num": 1,
              "title": "Practice TOEIC Reading Part 7: Urban Development & Green Policies",
              "description": "Read city council proposals, public transit schedules, and environmental reports for key facts and data."
            },
            {
              "num": 2,
              "title": "Master Vocabulary for 15-Minute Cities, Clean Transit & Public Spaces",
              "description": "Learn high-frequency terms for pedestrian zones, green corridors, cycling lanes, and renewable district heating."
            },
            {
              "num": 3,
              "title": "Apply Subject-Verb Agreement Rules with Complex Subject Phrases",
              "description": "Ensure singular and plural verbs match when long descriptive phrases or collective nouns separate the subject from the verb."
            },
            {
              "num": 4,
              "title": "Evaluate Green Neighborhoods & Public Transit Integration (DDRS)",
              "description": "Assess how compact urban planning cuts vehicle pollution and creates healthier, fairer communities."
            },
            {
              "num": 5,
              "title": "Compare Two Cities and Present Urban Sustainability Features",
              "description": "Present and compare urban sustainability initiatives using clear comparative structures and confident delivery."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 2 Lesson Plan (2 Hours)",
          "summary": "A 2-hour session agenda combining conversational warm-ups, TOEIC test practice, vocabulary building, speaking activities, and evaluation preparation.",
          "items": [
            {
              "time": "0-15",
              "title": "Conversational Warm-Up: My Ideal City (15 mins)",
              "description": "Students discuss in pairs what features make a city enjoyable to live in (parks, cycle paths, public transport)."
            },
            {
              "time": "15-45",
              "title": "TOEIC Strategy: Urban Notices & Bulletins (30 mins)",
              "description": "Practice Part 7 reading comprehension with municipal updates, transit timetables, and environmental regulations."
            },
            {
              "time": "45-65",
              "title": "Vocabulary Builder: 15-Minute City Concepts (20 mins)",
              "description": "Vocabulary for urban planning: pedestrian zone, green corridor, district heating, and low-emission zones."
            },
            {
              "time": "65-110",
              "title": "Structured Discussion & Grammar (45 mins)",
              "description": "Compare two European cities using Subject-Verb Agreement with collective nouns and long noun phrases."
            },
            {
              "time": "110-120",
              "title": "Debrief, Evaluation Prep & Wrap-Up (10 mins)",
              "description": "Class recap, key grammatical reminders for subject-verb agreement, and personal vocabulary logging."
            }
          ]
        },
        "revision": {
          "title": "Session 2: Sustainable Cities",
          "summary": "Review the 18 key terms for Sustainable Cities to build your fluency in discussions, professional reading, and TOEIC practice.",
          "terms": [
            {
              "num": "01",
              "term": "15-Minute City",
              "definition": "An urban design concept where daily necessities and transport are reachable within a 15-minute walk or cycle."
            },
            {
              "num": "02",
              "term": "Urban Heat Island (UHI)",
              "definition": "Metropolitan areas that experience significantly higher temperatures than surrounding rural zones due to concrete absorption."
            },
            {
              "num": "03",
              "term": "Bus Rapid Transit (BRT)",
              "definition": "A high-capacity bus network operating in dedicated right-of-way lanes with off-board fare collection and station platforms."
            },
            {
              "num": "04",
              "term": "Congestion Pricing",
              "definition": "A surcharge levied on vehicles entering central urban business zones during peak travel hours to reduce traffic."
            },
            {
              "num": "05",
              "term": "Permeable Pavement",
              "definition": "Paving materials that allow stormwater to infiltrate into underlying soil, mitigating urban flash flooding."
            },
            {
              "num": "06",
              "term": "Transit-Oriented Development (TOD)",
              "definition": "Compact urban development clustering housing, commercial spaces, and civic services around rapid transit nodes."
            },
            {
              "num": "07",
              "term": "Last-Mile Logistics",
              "definition": "The final stage of package delivery from a local distribution hub to the consumer doorstep, often carbon-intensive."
            },
            {
              "num": "08",
              "term": "Low-Emission District",
              "definition": "A city sector where combustion engines are prohibited in favor of zero-emission electric vehicles and active mobility."
            },
            {
              "num": "09",
              "term": "Urban Metabolism",
              "definition": "The flow of resources (energy, water, food) consumed by a city and the management of its waste, aiming for circular and sustainable urban systems."
            },
            {
              "num": "10",
              "term": "Micro-Consolidation Hub",
              "definition": "Central neighborhood facilities where parcel freight is sorted and transferred onto electric cargo bikes for zero-emission last-mile delivery."
            },
            {
              "num": "11",
              "term": "Pedestrianization",
              "definition": "Converting vehicular roadways into car-free public zones dedicated exclusively to pedestrians and community life."
            },
            {
              "num": "12",
              "term": "Shared Mobility Scheme",
              "definition": "Public access networks offering shared bicycles, electric mopeds, or car-sharing services on a flexible rental basis."
            },
            {
              "num": "13",
              "term": "Green Infrastructure",
              "definition": "Interconnected networks of green roofs, bioswales, and urban forests providing natural stormwater and cooling services."
            },
            {
              "num": "14",
              "term": "Complete Streets",
              "definition": "Streets designed to enable safe, attractive, and comfortable access for users of all ages, abilities, and modes."
            },
            {
              "num": "15",
              "term": "District Cooling System",
              "definition": "Centralized generation and distribution of chilled water through underground insulated pipes to cool neighborhood buildings."
            },
            {
              "num": "16",
              "term": "Autonomous Shuttle",
              "definition": "Self-driving electric multi-passenger pods operating on pre-mapped routes to connect transit hubs with neighborhoods."
            },
            {
              "num": "17",
              "term": "Active Travel Network",
              "definition": "Protected, segregated cycling tracks and pedestrian greenways encouraging human-powered daily commuting."
            },
            {
              "num": "18",
              "term": "Decarbonized Freight",
              "definition": "Urban distribution networks powered entirely by electric vehicles, hydrogen fuel cells, and zero-emission logistics."
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: The 15-Minute City Explained",
              "watchUrl": "https://www.youtube.com/watch?v=5dVcn8NjbwY",
              "tag": "Urban Design",
              "videoId": "5dVcn8NjbwY",
              "embedUrl": "https://www.youtube-nocookie.com/embed/5dVcn8NjbwY",
              "caption": "Focus: Urbanist Carlos Moreno details how cities can be reorganized so daily services are reachable within a 15-minute walk or cycle."
            },
            {
              "title": "Video 2: How Cities Redesign Streets for People",
              "watchUrl": "https://www.youtube.com/watch?v=RYuGWOjm26E",
              "tag": "Active Mobility",
              "videoId": "RYuGWOjm26E",
              "embedUrl": "https://www.youtube-nocookie.com/embed/RYuGWOjm26E",
              "caption": "Focus: Urban case studies demonstrating pedestrianization, protected cycling corridors, and the transformation of car-centric roadways."
            },
            {
              "title": "Video 3: Decarbonizing Urban Freight & Public Transit",
              "watchUrl": "https://www.youtube.com/watch?v=9a4JSBX7_n0",
              "tag": "Clean Logistics",
              "videoId": "9a4JSBX7_n0",
              "embedUrl": "https://www.youtube-nocookie.com/embed/9a4JSBX7_n0",
              "caption": "Focus: Examining electric bus rapid transit, cargo-bike micro-hubs, and zero-emission delivery zones in European metropolitan centers."
            }
          ],
          "grammar": {
            "title": "Matching Subjects & Verbs",
            "badge": "B1\u2013B2 Grammar Focus",
            "patternTitle": "Basic Rule",
            "formula": "Main Subject [Singular] + (words in between) + Verb with -s [Singular]",
            "rulesTitle": "Core Rules",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. Words in Between (The \"of / in / with\" trap):</strong> In <em>\"The integration of light-rail corridors\"</em>, the real subject is <span style=\"font-weight: 700; color: #49739a;\">integration</span> (singular), not <em>corridors</em> (plural). The verb must be singular (<em>reduces</em>).",
              "<strong style=\"color: #1e293b;\">2. Companies &amp; Organizations:</strong> Words like <em>the committee</em>, <em>the transit board</em>, or <em>the municipality</em> count as one single unit and take a singular verb.",
              "<strong style=\"color: #1e293b;\">3. Words like Each / Every / One of:</strong> Phrases like <em>Each of the hubs</em> or <em>One of the passengers</em> always take a <span style=\"font-weight: 600; color: #334155;\">singular verb</span>."
            ],
            "trap": "<strong>\u26a0\ufe0f TOEIC Trap Alert:</strong> The test often puts plural nouns right in front of the blank (e.g., <em>\"...corridors into hubs [ _____ ]\"</em>) to fool you. Ignore the words inside <em>\"of...\"</em> or <em>\"in...\"</em> and match the verb to the very first main noun!",
            "examplesTitle": "Urban Mobility Examples",
            "examples": [
              "<em>\"The expansion of electric tramways into suburban districts <strong>has improved</strong> regional air quality.\"</em>",
              "<em>\"Each of the city's shared mobility hubs <strong>provides</strong> free solar battery recharging.\"</em>"
            ]
          },
          "toeic": {
            "stem": "European metropolitan areas ________ invest heavily in protected cycling infrastructure report substantial reductions in transport emissions.",
            "options": [
              {
                "letter": "A",
                "text": "that"
              },
              {
                "letter": "B",
                "text": "whom"
              },
              {
                "letter": "C",
                "text": "where"
              },
              {
                "letter": "D",
                "text": "what"
              }
            ],
            "correctLetter": "A",
            "correctText": "that",
            "analysis": "\"Areas\" is a non-human antecedent acting as the subject of the defining relative clause, requiring \"that\" (or \"which\").",
            "strategy": "Use \"that\" or \"which\" for things and entities; \"who/whom\" for people; \"where\" for locations acting as adverbs (where + S + V)."
          },
          "resources": [
            {
              "url": "https://www.c40.org",
              "tag": "01 \u2022 Urban Climate Leadership",
              "name": "C40 Cities Network",
              "desc": "Mayors leading the urban fight against climate change through progressive mobility and clean air zones."
            },
            {
              "url": "https://www.uitp.org",
              "tag": "02 \u2022 Public Transit Federation",
              "name": "UITP Urban Transit Association",
              "desc": "International Association of Public Transport global reports and transit benchmarks."
            },
            {
              "url": "https://www.itdp.org",
              "tag": "03 \u2022 Sustainable Transport Institute",
              "name": "ITDP Sustainable Transport",
              "desc": "Institute for Transportation and Development Policy BRT and cycling standards."
            },
            {
              "url": "https://transport.ec.europa.eu",
              "tag": "04 \u2022 EU Mobility Framework",
              "name": "European Commission Urban Mobility",
              "desc": "EU framework for Sustainable Urban Mobility Plans (SUMP) and city decarbonization."
            },
            {
              "url": "https://ourworldindata.org/urbanization",
              "tag": "05 \u2022 Urbanization Statistics",
              "name": "Our World in Data: Urbanization",
              "desc": "Global statistical datasets on metropolitan density, transit usage, and urban sprawl."
            },
            {
              "url": "https://www.etsglobal.org/fr/fr",
              "tag": "06 \u2022 TOEIC Business Context",
              "name": "ETS Global TOEIC Preparation",
              "desc": "Vocabulary exercises for municipal tenders, urban planning proposals, and contracts."
            }
          ],
          "pageUrl": "session2/admat2.html",
          "articles": [
            {
              "topic": "C40 Cities Climate Leadership",
              "sourceTag": "Urban Policy",
              "heading": "Urban Mobility Transition Index",
              "snippet": "Comparative scoring of 50 global cities on public transit share, air quality improvements, and active mobility network integration.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://www.c40.org"
            },
            {
              "topic": "OECD Urban Studies",
              "sourceTag": "Economic Analysis",
              "heading": "The Economics of Low-Emission Zones and Public Health",
              "snippet": "Empirical assessment of health outcomes, commercial vitality, and emissions reductions following the implementation of urban clean-air zones.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://www.oecd.org"
            }
          ],
          "toeicQuestions": [
            {
              "stem": "European metropolitan areas ________ invest heavily in protected cycling infrastructure report substantial reductions in transport emissions.",
              "options": [
                {
                  "letter": "A",
                  "text": "that"
                },
                {
                  "letter": "B",
                  "text": "whom"
                },
                {
                  "letter": "C",
                  "text": "where"
                },
                {
                  "letter": "D",
                  "text": "what"
                }
              ],
              "correctLetter": "A",
              "correctText": "that",
              "analysis": "\"Areas\" is a non-human antecedent acting as the subject of the defining relative clause, requiring \"that\" (or \"which\").",
              "strategy": "Use \"that\" or \"which\" for things and entities; \"who/whom\" for people; \"where\" for locations acting as adverbs (where + S + V)."
            },
            {
              "stem": "The Ultra Low Emission Zone, ________ was launched in central London in 2019, has dramatically reduced harmful nitrogen dioxide concentrations.",
              "options": [
                {
                  "letter": "A",
                  "text": "that"
                },
                {
                  "letter": "B",
                  "text": "which"
                },
                {
                  "letter": "C",
                  "text": "who"
                },
                {
                  "letter": "D",
                  "text": "where"
                }
              ],
              "correctLetter": "B",
              "correctText": "which",
              "analysis": "In non-defining relative clauses set off by commas, always use \"which\" for things, never \"that\".",
              "strategy": "Golden TOEIC Rule: Never use \"that\" directly after a comma in relative clauses. Choose \"which\"."
            },
            {
              "stem": "Urban transport planners are studying Zurich, ________ integrated public transport network achieves exceptional punctuality rates.",
              "options": [
                {
                  "letter": "A",
                  "text": "whose"
                },
                {
                  "letter": "B",
                  "text": "who"
                },
                {
                  "letter": "C",
                  "text": "which"
                },
                {
                  "letter": "D",
                  "text": "where"
                }
              ],
              "correctLetter": "A",
              "correctText": "whose",
              "analysis": "The possessive relative pronoun \"whose\" shows that the transit network belongs to Zurich (\"Zurich integrated public transport network\").",
              "strategy": "\"Whose\" + noun indicates possession for both people and entities/cities."
            },
            {
              "stem": "The maintenance depot ________ battery-electric buses recharge overnight is supplied entirely by renewable solar energy.",
              "options": [
                {
                  "letter": "A",
                  "text": "which"
                },
                {
                  "letter": "B",
                  "text": "where"
                },
                {
                  "letter": "C",
                  "text": "whose"
                },
                {
                  "letter": "D",
                  "text": "when"
                }
              ],
              "correctLetter": "B",
              "correctText": "where",
              "analysis": "\"Where\" is the relative adverb of place modifying \"maintenance depot\", followed by a complete clause (\"buses recharge overnight\").",
              "strategy": "When the location is followed by subject + verb doing an action in that location, use \"where\"."
            },
            {
              "stem": "Municipal sustainability regulations mandate solar panels on all commercial facilities ________ total surface area exceeds six hundred square meters.",
              "options": [
                {
                  "letter": "A",
                  "text": "whose"
                },
                {
                  "letter": "B",
                  "text": "which"
                },
                {
                  "letter": "C",
                  "text": "where"
                },
                {
                  "letter": "D",
                  "text": "that"
                }
              ],
              "correctLetter": "A",
              "correctText": "whose",
              "analysis": "\"Whose\" connects \"commercial facilities\" with their \"total surface area\" in a possessive relationship.",
              "strategy": "Test for \"whose\": Can you say \"[antecedent] [noun]\"? (facilities surface area = whose surface area)."
            }
          ]
        }
      },
      "3": {
        "session": 3,
        "objectives": {
          "title": "Session 3 - Building and Supporting Arguments Objectives",
          "summary": "By the end of this session, you will be able to build and support persuasive arguments with confidence, use key vocabulary and grammar, and build the skills needed for your TOEIC test and Session 5 evaluation.",
          "items": [
            {
              "num": 1,
              "title": "Practice Identifying Opinions, Facts & Tone in TOEIC Contexts",
              "description": "Differentiate between objective facts and speaker opinions in workplace dialogues and business articles."
            },
            {
              "num": 2,
              "title": "Learn Useful Phrases to Agree, Disagree, and Express Counter-Arguments",
              "description": "Master polite, professional phrases to support your position, acknowledge counter-arguments, and make concessions."
            },
            {
              "num": 3,
              "title": "Master Gerunds & Infinitives (recommend doing vs. agree to do)",
              "description": "Use verbs correctly followed by gerunds (-ing) or infinitives (to + verb) when proposing actions and solutions."
            },
            {
              "num": 4,
              "title": "Structure Persuasive Arguments on Environmental Regulations (DDRS)",
              "description": "Build logical points backed by data when debating carbon pricing, plastic bans, and corporate environmental rules."
            },
            {
              "num": 5,
              "title": "Practice Defending Your Point of View in Group Discussions",
              "description": "Defend your ideas calmly in group exchanges while actively listening and responding to different perspectives."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 3 Lesson Plan (2 Hours)",
          "summary": "A 2-hour session agenda combining conversational warm-ups, TOEIC test practice, vocabulary building, speaking activities, and evaluation preparation.",
          "items": [
            {
              "time": "0-15",
              "title": "Conversational Warm-Up: Quick Dilemmas (15 mins)",
              "description": "In pairs, students quickly choose a side on simple dilemmas (e.g. banning cars in city centers) and give one strong reason."
            },
            {
              "time": "15-45",
              "title": "TOEIC Strategy: Detecting Opinion & Inference (30 mins)",
              "description": "Practice identifying the speaker or author's main point, tone, and implied meaning in TOEIC dialogues and articles."
            },
            {
              "time": "45-65",
              "title": "Vocabulary Builder: Persuasive Language (20 mins)",
              "description": "Useful phrases for agreeing politely, making concessions, challenging claims, and summarizing evidence."
            },
            {
              "time": "65-110",
              "title": "Structured Discussion & Grammar (45 mins)",
              "description": "Mini-debates on environmental rules using Gerunds & Infinitives (advocate doing, decide to ban, prioritize investing)."
            },
            {
              "time": "110-120",
              "title": "Debrief, Evaluation Prep & Wrap-Up (10 mins)",
              "description": "Peer feedback on debate conduct, review of clear argumentation techniques, and Session 5 speaking checklist."
            }
          ]
        },
        "revision": {
          "title": "Session 3: Building and Supporting Arguments",
          "summary": "Review the 18 key terms for Building and Supporting Arguments to build your fluency in discussions, professional reading, and TOEIC practice.",
          "terms": [
            {
              "num": "01",
              "term": "Argument Structure (Toulmin)",
              "definition": "A practical method to build strong arguments by linking your main idea (claim) with facts (evidence) and logical explanation (reasoning)."
            },
            {
              "num": "02",
              "term": "Cautious Language (Hedging)",
              "definition": "Careful words and phrases (it seems, appears to be, arguably) used to soften statements and avoid sounding 100% certain."
            },
            {
              "num": "03",
              "term": "Concession Phrases",
              "definition": "Words that accept a valid point from the other side before presenting your own argument (although, while it is true that, despite)."
            },
            {
              "num": "04",
              "term": "Ad Hominem Fallacy",
              "definition": "An unfair debate tactic that attacks a person's character instead of responding to their argument."
            },
            {
              "num": "05",
              "term": "Straw Man Fallacy",
              "definition": "Exaggerating or distorting an opponent's argument to make it easy to attack and defeat."
            },
            {
              "num": "06",
              "term": "Empirical Evidence",
              "definition": "Factual proof and data gathered through research, experiments, or real-world measurements to support an argument."
            },
            {
              "num": "07",
              "term": "Carbon Border Tax (CBAM)",
              "definition": "A tariff on carbon-intensive imports designed to prevent carbon leakage and level the playing field for clean domestic industry."
            },
            {
              "num": "08",
              "term": "Required Transport Shift",
              "definition": "Government rules that require passengers or freight to use rail rather than planes or trucks on routes with good train service."
            },
            {
              "num": "09",
              "term": "Precautionary Principle",
              "definition": "The doctrine that preventative action should be taken in the face of scientific uncertainty regarding environmental harm."
            },
            {
              "num": "10",
              "term": "Strong Counter-Argument",
              "definition": "A counter-argument backed by solid facts that disproves an opposing point of view."
            },
            {
              "num": "11",
              "term": "Counter-Argument",
              "definition": "An opposing viewpoint or objection presented to challenge, question, or disprove an original argumentative claim."
            },
            {
              "num": "12",
              "term": "Logical Fallacy",
              "definition": "A flaw or error in reasoning that undermines the validity and soundness of an argumentative structure."
            },
            {
              "num": "13",
              "term": "Slippery Slope",
              "definition": "An unfounded assertion that an initial action will inevitably lead to an extreme, disastrous chain of consequences."
            },
            {
              "num": "14",
              "term": "Burden of Proof",
              "definition": "The procedural obligation of the party proposing a controversial claim or policy change to substantiate it with evidence."
            },
            {
              "num": "15",
              "term": "Oxford Debate Format",
              "definition": "A structured competitive debate protocol where teams argue for or against a specific motion under strict time limits."
            },
            {
              "num": "16",
              "term": "Persuasive Language",
              "definition": "Words, rhetorical phrasing, and stylistic devices chosen intentionally to influence, convince, and engage an audience."
            },
            {
              "num": "17",
              "term": "Nuanced Qualifier",
              "definition": "Terms (predominantly, under specific constraints, in most verified instances) establishing limits on a claim&#x27;s universality."
            },
            {
              "num": "18",
              "term": "Peer-Reviewed Consensus",
              "definition": "The collective judgment of international scientific experts verified through rigorous independent methodological review."
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: How to Build a Strong Logical Argument",
              "watchUrl": "https://www.youtube.com/watch?v=vNDYUlxNIAA",
              "tag": "Rhetoric & Logic",
              "videoId": "vNDYUlxNIAA",
              "embedUrl": "https://www.youtube-nocookie.com/embed/vNDYUlxNIAA",
              "caption": "Focus: Analyzing the anatomy of a convincing argument: making clear claims, substantiating with empirical evidence, and avoiding fallacies."
            },
            {
              "title": "Video 2: How to Disagree Better in English",
              "watchUrl": "https://www.youtube.com/watch?v=-VnmAg0t_l4",
              "tag": "Debate Skills",
              "videoId": "-VnmAg0t_l4",
              "embedUrl": "https://www.youtube-nocookie.com/embed/-VnmAg0t_l4",
              "caption": "Focus: BBC Learning English guide to expressing opposing viewpoints politely, using concession markers, and framing counter-arguments constructively."
            },
            {
              "title": "Video 3: Policy Debate: Short-Haul Flight Bans vs. High-Speed Rail",
              "watchUrl": "https://www.youtube.com/watch?v=oJsRc3hqpH0",
              "tag": "Transport Policy",
              "videoId": "oJsRc3hqpH0",
              "embedUrl": "https://www.youtube-nocookie.com/embed/oJsRc3hqpH0",
              "caption": "Focus: Examining arguments for and against statutory flight bans on routes served by high-speed rail, evaluating economic and ecological trade-offs."
            }
          ],
          "grammar": {
            "title": "Verbs with -ing vs. to + Verb",
            "badge": "B1\u2013B2 Grammar Focus",
            "patternTitle": "Two Different Verb Patterns",
            "formula": "Verb + -ing | Verb + to + Verb | Preposition + -ing",
            "rulesTitle": "Core Rules",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. Verbs Followed by -ing:</strong> <span style=\"font-weight: 700; color: #49739a;\">recommend</span>, <span style=\"font-weight: 700; color: #49739a;\">suggest</span>, <span style=\"font-weight: 700; color: #49739a;\">consider</span>, <em>avoid</em>, <em>postpone</em>, <em>delay</em> (*recommend implementing*).",
              "<strong style=\"color: #1e293b;\">2. Verbs Followed by to + Verb:</strong> <span style=\"font-weight: 700; color: #49739a;\">decide</span>, <span style=\"font-weight: 700; color: #49739a;\">agree</span>, <span style=\"font-weight: 700; color: #49739a;\">aim</span>, <em>plan</em>, <em>refuse</em>, <em>promise</em>, <em>hesitate</em> (*agree to invest*).",
              "<strong style=\"color: #1e293b;\">3. Prepositions Always Take -ing:</strong> Any verb after a preposition (<em>in</em>, <em>by</em>, <em>for</em>, <em>committed to</em>, <em>look forward to</em>) must end in <span style=\"font-weight: 600; color: #334155;\">-ing</span>."
            ],
            "trap": "<strong>\u26a0\ufe0f TOEIC Trap Alert:</strong> In French, people say <em>\"recommander de faire\"</em> with an infinitive. But in English, you <strong>cannot</strong> say <em>\"recommend to do\"</em>. You must say <strong>recommend doing (-ing)</strong>!",
            "examplesTitle": "Climate Policy & Debate Examples",
            "examples": [
              "<em>\"European transport ministers suggested <strong>capping</strong> carbon subsidies for short-haul flights.\"</em>",
              "<em>\"The airline coalition agreed <strong>to invest</strong> in hydrogen fuel cell prototypes.\"</em>"
            ]
          },
          "toeic": {
            "stem": "High-speed rail ticket prices remain elevated; ________, passenger ridership has expanded steadily across major European corridors.",
            "options": [
              {
                "letter": "A",
                "text": "furthermore"
              },
              {
                "letter": "B",
                "text": "nevertheless"
              },
              {
                "letter": "C",
                "text": "therefore"
              },
              {
                "letter": "D",
                "text": "because"
              }
            ],
            "correctLetter": "B",
            "correctText": "nevertheless",
            "analysis": "\"Nevertheless\" is a transition adverb of concession/contrast meaning \"in spite of that\", connecting two independent clauses separated by a semicolon.",
            "strategy": "Look at the logical connection: elevated prices vs expanding ridership = contrast. \"Nevertheless\" expresses contrast; \"furthermore\" adds info; \"therefore\" shows cause/effect."
          },
          "resources": [
            {
              "url": "https://www.ipcc.ch",
              "tag": "01 \u2022 Climate Policy Evidence",
              "name": "IPCC Working Group III",
              "desc": "Intergovernmental Panel on Climate Change reports on transport mitigation options and policy mechanisms."
            },
            {
              "url": "https://www.transportenvironment.org",
              "tag": "02 \u2022 Clean Transport Campaign",
              "name": "Transport & Environment (T&E)",
              "desc": "Europe's leading clean transport campaign group with detailed empirical reports on aviation and rail."
            },
            {
              "url": "https://oxfordunion.org",
              "tag": "03 \u2022 Formal Debate Protocols",
              "name": "Oxford Union Debate Archives",
              "desc": "World-renowned debate society archives demonstrating formal argumentation protocols and rebuttal tactics."
            },
            {
              "url": "https://plato.stanford.edu",
              "tag": "04 \u2022 Critical Thinking & Logic",
              "name": "Stanford Encyclopedia of Philosophy",
              "desc": "Peer-reviewed analysis of formal logic, argumentation schemes, fallacies, and cognitive biases."
            },
            {
              "url": "https://ourworldindata.org",
              "tag": "05 \u2022 Global Policy Datasets",
              "name": "Our World in Data: Policy & Regulation",
              "desc": "Long-term data tracking global environmental regulations, public sentiment, and statutory mandates."
            },
            {
              "url": "https://www.etsglobal.org/fr/fr",
              "tag": "06 \u2022 TOEIC Argument Comprehension",
              "name": "ETS Global TOEIC Preparation",
              "desc": "Listening comprehension strategies for identifying disagreement and speaker attitude in business discussions."
            }
          ],
          "pageUrl": "session3/admat2.html",
          "articles": [
            {
              "topic": "Oxford Review of Economic Policy",
              "sourceTag": "Policy Analysis",
              "heading": "The Rhetoric of Climate Policy Negotiations",
              "snippet": "Analyzing discourse markers, persuasive framing, and consensus-building strategies in international climate accords and environmental diplomacy.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://academic.oup.com"
            },
            {
              "topic": "Centre for European Policy Studies (CEPS)",
              "sourceTag": "Economic Briefing",
              "heading": "Economic Trade-Offs in Transport Carbon Taxation",
              "snippet": "A balanced policy briefing modeling passenger demand elasticity, modal shift potential, and economic impacts under escalating carbon levies.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://www.ceps.eu"
            }
          ],
          "toeicQuestions": [
            {
              "stem": "High-speed rail ticket prices remain elevated; ________, passenger ridership has expanded steadily across major European corridors.",
              "options": [
                {
                  "letter": "A",
                  "text": "furthermore"
                },
                {
                  "letter": "B",
                  "text": "nevertheless"
                },
                {
                  "letter": "C",
                  "text": "therefore"
                },
                {
                  "letter": "D",
                  "text": "because"
                }
              ],
              "correctLetter": "B",
              "correctText": "nevertheless",
              "analysis": "\"Nevertheless\" is a transition adverb of concession/contrast meaning \"in spite of that\", connecting two independent clauses separated by a semicolon.",
              "strategy": "Look at the logical connection: elevated prices vs expanding ridership = contrast. \"Nevertheless\" expresses contrast; \"furthermore\" adds info; \"therefore\" shows cause/effect."
            },
            {
              "stem": "Aviation carbon taxes were raised significantly; ________, airline executives accelerated investments into fuel-efficient aircraft fleets.",
              "options": [
                {
                  "letter": "A",
                  "text": "consequently"
                },
                {
                  "letter": "B",
                  "text": "although"
                },
                {
                  "letter": "C",
                  "text": "whereas"
                },
                {
                  "letter": "D",
                  "text": "despite"
                }
              ],
              "correctLetter": "A",
              "correctText": "consequently",
              "analysis": "\"Consequently\" expresses a cause-and-effect result (taxes raised $\rightarrow$ investments accelerated).",
              "strategy": "Connecting semicolon + [TRANSITION] + comma with a cause/effect link requires \"consequently\", \"therefore\", or \"as a result\"."
            },
            {
              "stem": "Domestic short-haul flights produce heavy per-passenger carbon emissions, ________ high-speed trains emit up to ninety percent less carbon.",
              "options": [
                {
                  "letter": "A",
                  "text": "whereas"
                },
                {
                  "letter": "B",
                  "text": "despite"
                },
                {
                  "letter": "C",
                  "text": "in order that"
                },
                {
                  "letter": "D",
                  "text": "so that"
                }
              ],
              "correctLetter": "A",
              "correctText": "whereas",
              "analysis": "\"Whereas\" is a subordinating conjunction of contrast linking two contrasting factual clauses.",
              "strategy": "\"Whereas\" directly links two contrasting clauses (Clause A, whereas Clause B). \"Despite\" cannot be followed by a full clause."
            },
            {
              "stem": "The municipal transport authority expanded pedestrian zones; ________, it introduced discounted monthly transit passes for all students.",
              "options": [
                {
                  "letter": "A",
                  "text": "in addition"
                },
                {
                  "letter": "B",
                  "text": "instead"
                },
                {
                  "letter": "C",
                  "text": "nevertheless"
                },
                {
                  "letter": "D",
                  "text": "unless"
                }
              ],
              "correctLetter": "A",
              "correctText": "in addition",
              "analysis": "\"In addition\" adds another positive measure to the first (additive logical relationship).",
              "strategy": "When the second idea reinforces or supplements the first, choose an additive transition: \"in addition\", \"furthermore\", or \"moreover\"."
            },
            {
              "stem": "Public criticism of the urban road pricing project was vocal; ________, vehicle congestion dropped by eighteen percent within the first quarter.",
              "options": [
                {
                  "letter": "A",
                  "text": "even though"
                },
                {
                  "letter": "B",
                  "text": "however"
                },
                {
                  "letter": "C",
                  "text": "so that"
                },
                {
                  "letter": "D",
                  "text": "due to"
                }
              ],
              "correctLetter": "B",
              "correctText": "however",
              "analysis": "\"However\" is a transitional conjunctive adverb indicating contrast between initial opposition and subsequent positive outcomes.",
              "strategy": "Notice punctuation: [semicolon] + [However] + [comma]. Subordinating conjunctions like \"even though\" cannot take this punctuation."
            }
          ]
        }
      },
      "4": {
        "session": 4,
        "objectives": {
          "title": "Session 4 - Biodiversity in Urban Areas and Airports Objectives",
          "summary": "By the end of this session, you will be able to discuss urban biodiversity and green infrastructure with confidence, use key vocabulary and grammar, and build the skills needed for your TOEIC test and Session 5 evaluation.",
          "items": [
            {
              "num": 1,
              "title": "Practice TOEIC Part 5 Questions on Pronouns & Determiners",
              "description": "Select the correct pronouns (its, their, themselves) and determiners (each, every, either) under timed test conditions."
            },
            {
              "num": 2,
              "title": "Master Core Vocabulary for Urban Nature, Wildlife & Green Spaces",
              "description": "Learn vocabulary for wildlife corridors, green roofs, native species, bird strike prevention, and ecological corridors."
            },
            {
              "num": 3,
              "title": "Use Pronouns & Possessives Correctly for Organizations & Teams",
              "description": "Maintain consistency between singular companies (the airport ... its plan) and plural teams or groups."
            },
            {
              "num": 4,
              "title": "Discuss How Infrastructure Projects Can Protect Living Nature (DDRS)",
              "description": "Examine practical initiatives where transport hubs create protected natural habitats alongside daily operations."
            },
            {
              "num": 5,
              "title": "Finalize Speaking Skills and Timing for the Session 5 Evaluation",
              "description": "Rehearse your individual presentation with a timer, checking your fluency, vocabulary range, and grammar accuracy."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 4 Lesson Plan (2 Hours)",
          "summary": "A 2-hour session agenda combining conversational warm-ups, TOEIC test practice, vocabulary building, speaking activities, and evaluation preparation.",
          "items": [
            {
              "time": "0-15",
              "title": "Conversational Warm-Up: Nature Around Us (15 mins)",
              "description": "Students share observations of urban wildlife, green spaces, and bird control measures at transport hubs."
            },
            {
              "time": "15-45",
              "title": "TOEIC Strategy: Pronouns & Determiners in Part 5 (30 mins)",
              "description": "Fast drills selecting correct pronouns (its, their, each, neither) in professional administrative memos."
            },
            {
              "time": "45-65",
              "title": "Vocabulary Builder: Urban Ecology (20 mins)",
              "description": "Key terms for green roofs, wildlife corridors, native flora, habitat preservation, and ecological surveys."
            },
            {
              "time": "65-110",
              "title": "Structured Discussion & Grammar (45 mins)",
              "description": "Proposing a green infrastructure plan for a local transport hub using Pronouns & Determiners accurately."
            },
            {
              "time": "110-120",
              "title": "Evaluation Practice & Wrap-Up (10 mins)",
              "description": "Timed individual speaking practice with rubric assessment (fluency, pronunciation, range, grammatical control)."
            }
          ]
        },
        "revision": {
          "title": "Session 4: Biodiversity in Urban Areas and Airports",
          "summary": "Review the 18 key terms for Biodiversity in Urban Areas and Airports to build your fluency in discussions, professional reading, and TOEIC practice.",
          "terms": [
            {
              "num": "01",
              "term": "Bird Strike Hazard",
              "definition": "A collision between an airborne animal and an aircraft, posing acute mechanical danger during takeoff and landing."
            },
            {
              "num": "02",
              "term": "Habitat Fragmentation",
              "definition": "The division of expansive natural ecosystems into isolated parcels caused by highway and runway construction."
            },
            {
              "num": "03",
              "term": "Urban Tree Canopy",
              "definition": "The layer of leaves, branches, and stems formed by city trees, providing shade, cooling, and critical habitat for urban wildlife."
            },
            {
              "num": "04",
              "term": "Ecological Corridor",
              "definition": "A designated strip of vegetation linking wildlife populations separated by human infrastructure developments."
            },
            {
              "num": "05",
              "term": "Bioacoustic Deterrent",
              "definition": "Audio equipment broadcasting species-specific distress calls to disperse hazardous birds away from flight paths."
            },
            {
              "num": "06",
              "term": "Wildlife Hazard Management (WHM)",
              "definition": "A mandatory airport safety program systematically cataloging and mitigating animal attractants on airfields."
            },
            {
              "num": "07",
              "term": "Biodiversity Net Gain (BNG)",
              "definition": "A statutory planning requirement ensuring that infrastructure projects leave local natural habitats in a measurably better state."
            },
            {
              "num": "08",
              "term": "Attractant Mitigation",
              "definition": "Eliminating surface water bodies, refuse disposal sites, and roosting perches that attract hazardous wildlife to airfields."
            },
            {
              "num": "09",
              "term": "Grassland Ecology",
              "definition": "The study of short-grass prairie and meadow ecosystems adapted to frequent mowing and disturbed airfield soils."
            },
            {
              "num": "10",
              "term": "Living / Green Roof",
              "definition": "A building roof partially or completely covered with vegetation, creating urban habitats for pollinators and naturally insulating buildings."
            },
            {
              "num": "11",
              "term": "Pollinator Sanctuary",
              "definition": "Protected perimeter areas planted with native wildflowers to foster honeybee and butterfly biodiversity."
            },
            {
              "num": "12",
              "term": "Urban Rewilding",
              "definition": "An environmental conservation approach that restores natural ecological processes and native wilderness areas within cities and suburbs."
            },
            {
              "num": "13",
              "term": "Environmental Impact Assessment (EIA)",
              "definition": "A formal statutory study evaluating the prospective ecological consequences of proposed airport runway expansions."
            },
            {
              "num": "14",
              "term": "Native Vegetation Re-seeding",
              "definition": "Planting indigenous drought-tolerant grass varieties that require minimal mowing and provide unfavorable forage for geese."
            },
            {
              "num": "15",
              "term": "Wetland Preservation",
              "definition": "Protecting natural marshlands that filter surface runoff while engineering deterrents to prevent waterfowl concentration."
            },
            {
              "num": "16",
              "term": "Ecosystem Services",
              "definition": "The essential direct and indirect benefits that natural habitats provide to human society, including air filtration, stormwater management, and cooling."
            },
            {
              "num": "17",
              "term": "Bio-Indicator Species",
              "definition": "Organisms whose health, presence, or population shifts reflect the environmental quality of an entire airport watershed."
            },
            {
              "num": "18",
              "term": "Non-Lethal Harassment",
              "definition": "Trained border collies, pyrotechnics, and laser beams used to non-lethally displace birds from active runways."
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: Urban Rewilding: Bringing Nature Back to Modern Cities",
              "watchUrl": "https://www.youtube.com/watch?v=ouY7Bcs8zTQ",
              "tag": "Urban Ecology",
              "videoId": "ouY7Bcs8zTQ",
              "embedUrl": "https://www.youtube-nocookie.com/embed/ouY7Bcs8zTQ",
              "caption": "Focus: How metropolitan centers are creating living green roofs, urban tree canopies, and wildflower corridors to restore native biodiversity."
            },
            {
              "title": "Video 2: Wildlife Management and Ecological Coexistence at Airfields",
              "watchUrl": "https://www.youtube.com/watch?v=BxVWs5hBDeA",
              "tag": "Airfield Safety",
              "videoId": "BxVWs5hBDeA",
              "embedUrl": "https://www.youtube-nocookie.com/embed/BxVWs5hBDeA",
              "caption": "Focus: How airport safety teams manage avian hazards using bioacoustic deterrents and habitat controls while preserving grassland ecosystems."
            },
            {
              "title": "Video 3: Grammar in Action: Pronouns and Determiners in Environmental Reports",
              "watchUrl": "https://www.youtube.com/watch?v=r6XpFWmA7Gk",
              "tag": "Grammar Focus",
              "videoId": "r6XpFWmA7Gk",
              "embedUrl": "https://www.youtube-nocookie.com/embed/r6XpFWmA7Gk",
              "caption": "Focus: Targeted practice on using demonstrative pronouns, quantifiers, and determiners accurately when summarizing scientific and ecological data."
            }
          ],
          "grammar": {
            "title": "Pronouns & Possessives in Business",
            "badge": "B1\u2013B2 Grammar Focus",
            "patternTitle": "Key Business Rule",
            "formula": "Company / Authority / Organization = ITS (Singular, not \"their\")",
            "rulesTitle": "Core Rules",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. Companies &amp; Authorities use ITS:</strong> A company, airport, or committee is one single organization. Always use <span style=\"font-weight: 700; color: #49739a;\">its</span>, not <em>their</em> (<em>\"The authority released <strong>its</strong> report\"</em>).",
              "<strong style=\"color: #1e293b;\">2. Before a Noun vs. Alone:</strong> Use <span style=\"font-weight: 700; color: #49739a;\">its</span> or <em>their</em> right before a noun (<em>their plan</em>). Use <em>theirs</em> or <em>mine</em> only when there is NO noun after it.",
              "<strong style=\"color: #1e293b;\">3. -self words (itself / themselves):</strong> Use <span style=\"font-weight: 600; color: #334155;\">itself</span> when the subject does something to or by itself (<em>by itself</em>).",
              "<strong style=\"color: #1e293b;\">4. Determiners:</strong> <em>Each</em> / <em>every</em> take singular nouns; <em>other</em> takes plural nouns (<em>other airports</em>); <em>another</em> takes a single noun (<em>another terminal</em>)."
            ],
            "trap": "<strong>\u26a0\ufe0f TOEIC Trap Alert:</strong> <strong>its</strong> vs. <strong>it's</strong>! <em>Its</em> (no apostrophe) shows possession (<em>its report</em>). <em>It's</em> (with apostrophe) means <em>it is</em> or <em>it has</em>. In TOEIC Part 5, almost every blank before a noun needs <strong>its</strong>!",
            "examplesTitle": "Airport Biodiversity Examples",
            "examples": [
              "<em>\"The civil aviation commission updated <strong>its</strong> environmental impact charter for green perimeter zones.\"</em>",
              "<em>\"Urban planners designed the green corridor so that wildlife could navigate the transit hub by <strong>itself</strong>.\"</em>"
            ]
          },
          "toeic": {
            "stem": "Commercial flight operations continued without interruption ________ dense snow accumulation on taxiways throughout the early morning.",
            "options": [
              {
                "letter": "A",
                "text": "although"
              },
              {
                "letter": "B",
                "text": "despite"
              },
              {
                "letter": "C",
                "text": "even though"
              },
              {
                "letter": "D",
                "text": "whereas"
              }
            ],
            "correctLetter": "B",
            "correctText": "despite",
            "analysis": "\"Despite\" is a preposition followed by a noun phrase (\"dense snow accumulation\"). \"Although\" and \"even though\" must be followed by subject + verb.",
            "strategy": "Classic TOEIC Trap: Preposition vs. Conjunction. If followed by Noun Phrase only $\rightarrow$ despite / in spite of. If followed by Subject + Verb $\rightarrow$ although / even though."
          },
          "resources": [
            {
              "url": "https://www.icao.int",
              "tag": "01 \u2022 Aviation Safety Database",
              "name": "ICAO Wildlife Strike Hazard Database",
              "desc": "International Civil Aviation Organization official data on bird strike prevention and reporting standards."
            },
            {
              "url": "https://www.iucnredlist.org",
              "tag": "02 \u2022 Global Conservation Union",
              "name": "IUCN Red List of Threatened Species",
              "desc": "International Union for Conservation of Nature global species extinction risk metrics and habitat data."
            },
            {
              "url": "https://aci.aero",
              "tag": "03 \u2022 Airport Sustainability",
              "name": "Airports Council International (ACI World)",
              "desc": "ACI World Sustainability and Environmental Management guidelines for commercial airports."
            },
            {
              "url": "https://www.birdlife.org",
              "tag": "04 \u2022 Avian Conservation Network",
              "name": "BirdLife International",
              "desc": "Global partnership protecting bird populations, migratory flyways, and critical conservation areas."
            },
            {
              "url": "https://www.eea.europa.eu",
              "tag": "05 \u2022 European Biodiversity Data",
              "name": "European Environment Agency Nature Portal",
              "desc": "State of European nature reports and protected Natura 2000 network conservation data."
            },
            {
              "url": "https://www.etsglobal.org/fr/fr",
              "tag": "06 \u2022 TOEIC Scientific Reading",
              "name": "ETS Global TOEIC Preparation",
              "desc": "Technical reading practice with scientific environmental impact assessments and conservation reports."
            }
          ],
          "pageUrl": "session4/admat2.html",
          "articles": [
            {
              "topic": "European Environment Agency (EEA)",
              "sourceTag": "Environmental Briefing",
              "heading": "Urban Greening and Biodiversity in European Cities",
              "snippet": "Assessing how tree canopy expansion, rooftop gardens, and urban wetlands enhance ecological resilience and mitigate heat stress across metropolitan regions.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://www.eea.europa.eu"
            },
            {
              "topic": "Airport World Technical Review",
              "sourceTag": "Aviation Ecology",
              "heading": "Balancing Airfield Safety Standards with Habitat Conservation",
              "snippet": "Operational guidelines for airport environmental managers reconciling mandatory wildlife hazard controls with local biodiversity net gain objectives.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://airport-world.com"
            }
          ],
          "toeicQuestions": [
            {
              "stem": "Commercial flight operations continued without interruption ________ dense snow accumulation on taxiways throughout the early morning.",
              "options": [
                {
                  "letter": "A",
                  "text": "although"
                },
                {
                  "letter": "B",
                  "text": "despite"
                },
                {
                  "letter": "C",
                  "text": "even though"
                },
                {
                  "letter": "D",
                  "text": "whereas"
                }
              ],
              "correctLetter": "B",
              "correctText": "despite",
              "analysis": "\"Despite\" is a preposition followed by a noun phrase (\"dense snow accumulation\"). \"Although\" and \"even though\" must be followed by subject + verb.",
              "strategy": "Classic TOEIC Trap: Preposition vs. Conjunction. If followed by Noun Phrase only $\rightarrow$ despite / in spite of. If followed by Subject + Verb $\rightarrow$ although / even though."
            },
            {
              "stem": "The airport environment team constructed wildflower habitats around airfields ________ local bird nesting could be diverted safely away from flight paths.",
              "options": [
                {
                  "letter": "A",
                  "text": "so that"
                },
                {
                  "letter": "B",
                  "text": "in order to"
                },
                {
                  "letter": "C",
                  "text": "because of"
                },
                {
                  "letter": "D",
                  "text": "despite"
                }
              ],
              "correctLetter": "A",
              "correctText": "so that",
              "analysis": "\"So that\" introduces a clause of purpose containing subject + modal verb (\"could be diverted\"). \"In order to\" must be followed directly by a base verb.",
              "strategy": "Purpose structure: \"so that\" + [Subject + modal + verb]; \"in order to\" + [base verb]."
            },
            {
              "stem": "Several incoming flights were diverted to alternate airfields ________ severe crosswinds exceeding forty-five knots.",
              "options": [
                {
                  "letter": "A",
                  "text": "because"
                },
                {
                  "letter": "B",
                  "text": "owing to"
                },
                {
                  "letter": "C",
                  "text": "although"
                },
                {
                  "letter": "D",
                  "text": "whereas"
                }
              ],
              "correctLetter": "B",
              "correctText": "owing to",
              "analysis": "\"Owing to\" is a preposition meaning \"because of\", followed by a noun phrase (\"severe crosswinds\").",
              "strategy": "\"Because of\", \"owing to\", and \"due to\" take noun phrases. \"Because\" must take a full clause with subject and verb."
            },
            {
              "stem": "________ the airport expanded its passenger terminal capacity, it succeeded in maintaining net-zero airfield carbon neutrality.",
              "options": [
                {
                  "letter": "A",
                  "text": "Despite"
                },
                {
                  "letter": "B",
                  "text": "Even though"
                },
                {
                  "letter": "C",
                  "text": "Because of"
                },
                {
                  "letter": "D",
                  "text": "In spite of"
                }
              ],
              "correctLetter": "B",
              "correctText": "Even though",
              "analysis": "\"Even though\" is a subordinating conjunction followed by a full clause with subject (\"the airport\") and verb (\"expanded\").",
              "strategy": "Check what follows: \"the airport expanded\" is Subject + Verb $\rightarrow$ choose \"Even though\" (conjunction), not \"Despite\" (preposition)."
            },
            {
              "stem": "Biological retention ponds were built across the airport perimeter ________ prevent de-icing fluid runoff from infiltrating local river systems.",
              "options": [
                {
                  "letter": "A",
                  "text": "in order to"
                },
                {
                  "letter": "B",
                  "text": "so that"
                },
                {
                  "letter": "C",
                  "text": "because"
                },
                {
                  "letter": "D",
                  "text": "owing to"
                }
              ],
              "correctLetter": "A",
              "correctText": "in order to",
              "analysis": "\"In order to\" expresses purpose and is followed directly by the base verb \"prevent\".",
              "strategy": "Formula: \"in order to\" + [base verb]. Never choose \"so that\" directly before a bare infinitive."
            }
          ]
        }
      }
    }
  },
  "3": {
    "id": 3,
    "name": "Module 3",
    "title": "Safety and Security",
    "ddrs": {
      "title": "D\u00e9veloppement Durable & Responsabilit\u00e9 Soci\u00e9tale : Tags et D\u00e9finitions Officielles",
      "summary": "Le R\u00e9f\u00e9rentiel National DD&RS de l'Enseignement Sup\u00e9rieur et de la Recherche (Label DD&RS) structure les engagements \u00e9cologiques, soci\u00e9taux et \u00e9thiques des \u00e9tablissements et des grands projets de transport selon 5 axes strat\u00e9giques et leurs domaines transversaux d'application.",
      "pageUrl": "ddrs3.html",
      "axes": [
        {
          "badge": "Axe 1",
          "num": "1.",
          "title": "Gouvernance et Strat\u00e9gie",
          "desc": "Int\u00e9gration du d\u00e9veloppement durable dans la vision, le projet d'\u00e9tablissement et le pilotage d\u00e9cisionnel. Dialogue continu avec les parties prenantes (\u00e9tudiants, personnels, collectivit\u00e9s, partenaires), allocation de budgets d\u00e9di\u00e9s et suivi d'indicateurs d'impact mesurables."
        },
        {
          "badge": "Axe 2",
          "num": "2.",
          "title": "Formation et P\u00e9dagogie",
          "desc": "Sensibilisation et formation de 100 % des apprenants aux enjeux de la transition socio-\u00e9cologique (limites plan\u00e9taires, climat, biodiversit\u00e9). Int\u00e9gration transversale des comp\u00e9tences DD&RS (rapport Jouzel / socle MESR) pour pr\u00e9parer les ing\u00e9nieurs \u00e0 la prise de d\u00e9cision \u00e9thique et responsable."
        },
        {
          "badge": "Axe 3",
          "num": "3.",
          "title": "Recherche et Innovation",
          "desc": "Orientation et valorisation de l'activit\u00e9 scientifique et technologique en r\u00e9ponse aux Objectifs de D\u00e9veloppement Durable (ODD). Soutien aux programmes interdisciplinaires, recherche sobre et responsable, \u00e9co-conception et transfert de technologies vertes au service de la soci\u00e9t\u00e9."
        },
        {
          "badge": "Axe 4",
          "num": "4.",
          "title": "Gestion Environnementale",
          "desc": "Ma\u00eetrise et r\u00e9duction continue des impacts \u00e9cologiques directs : d\u00e9carbonation des mobilit\u00e9s pendulaires et professionnelles, efficacit\u00e9 et sobri\u00e9t\u00e9 \u00e9nerg\u00e9tique du patrimoine b\u00e2ti, gestion circulaire des d\u00e9chets, pr\u00e9servation de la biodiversit\u00e9 sur site et achats publics responsables."
        },
        {
          "badge": "Axe 5",
          "num": "5.",
          "title": "Politique Sociale et Inclusion",
          "desc": "Engagement institutionnel pour la responsabilit\u00e9 soci\u00e9tale : \u00e9galit\u00e9 professionnelle femmes-hommes, inclusion et accessibilit\u00e9 des personnes en situation de handicap, \u00e9galit\u00e9 des chances, am\u00e9lioration de la qualit\u00e9 de vie et sant\u00e9 globale, et pr\u00e9vention de toute forme de discrimination."
        }
      ],
      "items": [
        {
          "badge": "Axe 1",
          "num": "1.",
          "title": "Gouvernance et Strat\u00e9gie",
          "desc": "Int\u00e9gration du d\u00e9veloppement durable dans la vision, le projet d'\u00e9tablissement et le pilotage d\u00e9cisionnel. Dialogue continu avec les parties prenantes (\u00e9tudiants, personnels, collectivit\u00e9s, partenaires), allocation de budgets d\u00e9di\u00e9s et suivi d'indicateurs d'impact mesurables.",
          "isMuted": false
        },
        {
          "badge": "Axe 2",
          "num": "2.",
          "title": "Formation et P\u00e9dagogie",
          "desc": "Sensibilisation et formation de 100 % des apprenants aux enjeux de la transition socio-\u00e9cologique (limites plan\u00e9taires, climat, biodiversit\u00e9). Int\u00e9gration transversale des comp\u00e9tences DD&amp;RS (rapport Jouzel / socle MESR) pour pr\u00e9parer les ing\u00e9nieurs \u00e0 la prise de d\u00e9cision \u00e9thique et responsable.",
          "isMuted": false
        },
        {
          "badge": "Axe 3",
          "num": "3.",
          "title": "Recherche et Innovation",
          "desc": "Orientation et valorisation de l'activit\u00e9 scientifique et technologique en r\u00e9ponse aux Objectifs de D\u00e9veloppement Durable (ODD). Soutien aux programmes interdisciplinaires, recherche sobre et responsable, \u00e9co-conception et transfert de technologies vertes au service de la soci\u00e9t\u00e9.",
          "isMuted": false
        },
        {
          "badge": "Axe 4",
          "num": "4.",
          "title": "Gestion Environnementale",
          "desc": "Ma\u00eetrise et r\u00e9duction continue des impacts \u00e9cologiques directs : d\u00e9carbonation des mobilit\u00e9s pendulaires et professionnelles, efficacit\u00e9 et sobri\u00e9t\u00e9 \u00e9nerg\u00e9tique du patrimoine b\u00e2ti, gestion circulaire des d\u00e9chets, pr\u00e9servation de la biodiversit\u00e9 sur site et achats publics responsables.",
          "isMuted": false
        },
        {
          "badge": "Axe 5",
          "num": "5.",
          "title": "Politique Sociale et Inclusion",
          "desc": "Engagement institutionnel pour la responsabilit\u00e9 soci\u00e9tale : \u00e9galit\u00e9 professionnelle femmes-hommes, inclusion et accessibilit\u00e9 des personnes en situation de handicap, \u00e9galit\u00e9 des chances, am\u00e9lioration de la qualit\u00e9 de vie et sant\u00e9 globale, et pr\u00e9vention de toute forme de discrimination.",
          "isMuted": true
        },
        {
          "badge": "Tag",
          "num": "6.",
          "title": "Mobilit\u00e9 Durable &amp; Report Modal (Sustainable Mobility)",
          "desc": "Strat\u00e9gie d'optimisation des transports articul\u00e9e autour de la hi\u00e9rarchie \u00ab \u00c9viter - Transf\u00e9rer - Am\u00e9liorer \u00bb (ASI). Promotion active du report modal vers le ferroviaire, les transports en commun et les mobilit\u00e9s douces face \u00e0 l'autosolisme et aux vols court-courriers.",
          "isMuted": true
        },
        {
          "badge": "Tag",
          "num": "7.",
          "title": "Bilan d'\u00c9missions de GES (BEGES / Bilan Carbone)",
          "desc": "Comptabilisation r\u00e9glementaire des gaz \u00e0 effet de serre (m\u00e9thode ADEME / ISO 14064) sur les trois p\u00e9rim\u00e8tres : Scope 1 (\u00e9missions directes), Scope 2 (\u00e9missions indirectes \u00e9nerg\u00e9tiques) et Scope 3 (\u00e9missions indirectes amont/aval : d\u00e9placements, achats, logistique et cycle de vie).",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "8.",
          "title": "Sobri\u00e9t\u00e9 \u00c9nerg\u00e9tique &amp; Efficacit\u00e9",
          "desc": "D\u00e9marche articulant la sobri\u00e9t\u00e9 (questionnement et r\u00e9duction des consommations par la modification des comportements et des usages collectifs) et l'efficacit\u00e9 (optimisation technique des rendements \u00e9nerg\u00e9tiques pour un m\u00eame niveau de service).",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "9.",
          "title": "Pr\u00e9servation de la Biodiversit\u00e9 &amp; Z\u00e9ro Artificialisation Nette (ZAN)",
          "desc": "Protection des \u00e9cosyst\u00e8mes et des continuit\u00e9s \u00e9cologiques (trames vertes et bleues). Application des exigences l\u00e9gales (loi Climat et R\u00e9silience) visant \u00e0 stopper la disparition nette d'espaces naturels et agricoles caus\u00e9e par les infrastructures et l'am\u00e9nagement.",
          "isMuted": true
        },
        {
          "badge": "Tag",
          "num": "10.",
          "title": "\u00c9quit\u00e9 Territoriale &amp; Accessibilit\u00e9 (Territorial Equity)",
          "desc": "Principe de justice spatiale garantissant un acc\u00e8s universel, abordable et s\u00e9curis\u00e9 aux r\u00e9seaux de transport et aux services d'int\u00e9r\u00eat g\u00e9n\u00e9ral pour l'ensemble des territoires (urbains, p\u00e9riurbains et ruraux), luttant contre la fracture et la pr\u00e9carit\u00e9 mobilit\u00e9.",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "11.",
          "title": "Achats Responsables &amp; Analyse du Cycle de Vie (ACV / LCA)",
          "desc": "Int\u00e9gration syst\u00e9matique de crit\u00e8res environnementaux et sociaux dans la commande publique et priv\u00e9e. \u00c9valuation globale des impacts de chaque produit, infrastructure ou service de son extraction jusqu'\u00e0 son recyclage ou \u00e9limination finale.",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "12.",
          "title": "Objectifs de D\u00e9veloppement Durable (ODD - Agenda 2030)",
          "desc": "Cadre universel des Nations Unies comprenant 17 objectifs interd\u00e9pendants pour concilier prosp\u00e9rit\u00e9 \u00e9conomique, progr\u00e8s social et protection de la biosph\u00e8re. Les politiques de transport et d'ing\u00e9nierie s'articulent principalement autour des ODD 9, 11, 12 et 13.",
          "isMuted": false
        }
      ]
    },
    "sessions": {
      "1": {
        "session": 1,
        "objectives": {
          "title": "Session 1 - Artificial Intelligence Objectives",
          "summary": "By the end of this session, you will be able to discuss artificial intelligence and automation in everyday life and workplaces with confidence, use key vocabulary and grammar, and build the skills needed for your TOEIC test and Session 5 evaluation.",
          "items": [
            {
              "num": 1,
              "title": "Practice Reading TOEIC Technology Notices & Emails",
              "description": "Read technical announcements, office memos, and software update notices typical of TOEIC Part 7."
            },
            {
              "num": 2,
              "title": "Master Everyday AI & Automation Vocabulary",
              "description": "Learn and use key terms for machine learning, predictive tools, autonomous systems, and digital assistants."
            },
            {
              "num": 3,
              "title": "Understand Active vs. Passive Voice in Technical English",
              "description": "Identify when an action is done by a system (active) versus to a system (passive: is tested, must be reviewed)."
            },
            {
              "num": 4,
              "title": "Evaluate AI Ethics, Employment & Social Impact (DDRS)",
              "description": "Discuss how artificial intelligence affects employment, data privacy, and ethical decision-making in society."
            },
            {
              "num": 5,
              "title": "Build Fluency for the Session 5 Evaluation",
              "description": "Practice expressing opinions and evaluating technology trends clearly in pair and group discussions."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 1 Lesson Plan (2 Hours)",
          "summary": "A 2-hour session agenda combining conversational warm-ups, TOEIC test practice, vocabulary building, speaking activities, and evaluation preparation.",
          "items": [
            {
              "time": "0-15",
              "title": "Conversational Warm-Up: AI in Daily Life (15 mins)",
              "description": "Students discuss which AI tools they use regularly and whether AI improves their productivity or creates challenges."
            },
            {
              "time": "15-45",
              "title": "TOEIC Strategy: Tech Notices & Work Memos (30 mins)",
              "description": "Practice reading workplace IT guidelines, software rollouts, and tech policy announcements in Part 6 and 7."
            },
            {
              "time": "45-65",
              "title": "Vocabulary Builder: Automation & Intelligence (20 mins)",
              "description": "Everyday terms for algorithms, machine learning, predictive analytics, automation, and algorithmic bias."
            },
            {
              "time": "65-110",
              "title": "Structured Discussion & Grammar (45 mins)",
              "description": "Discuss the social and job impacts of AI using the Passive Voice (data is collected, decisions are made by algorithms)."
            },
            {
              "time": "110-120",
              "title": "Debrief, Evaluation Prep & Wrap-Up (10 mins)",
              "description": "Language review, feedback on passive voice accuracy, and Session 5 evaluation rubric check."
            }
          ]
        },
        "revision": {
          "title": "Session 1: Artificial Intelligence",
          "summary": "Review the 18 key terms for Artificial Intelligence to build your fluency in discussions, professional reading, and TOEIC practice.",
          "terms": [
            {
              "num": "01",
              "term": "Predictive Maintenance",
              "definition": "Using sensor telemetry and machine learning models to forecast equipment failures before costly breakdowns occur in industrial and transport systems."
            },
            {
              "num": "02",
              "term": "Machine Learning (ML)",
              "definition": "Algorithms that train statistical models on historical data to identify patterns and make predictions without explicit rules."
            },
            {
              "num": "03",
              "term": "Neural Network",
              "definition": "A computational model inspired by biological brains, composed of layered interconnected nodes that process complex data."
            },
            {
              "num": "04",
              "term": "Digital Twin",
              "definition": "A virtual real-time digital replica of a physical machine, building, or transport system used to simulate stress, wear, and performance."
            },
            {
              "num": "05",
              "term": "Human-in-the-Loop (HITL)",
              "definition": "A system architecture where an automated algorithm requires human operator validation before executing critical actions."
            },
            {
              "num": "06",
              "term": "Algorithmic Bias",
              "definition": "Systematic and unfair discriminatory outcomes in automated decisions caused by skewed training datasets."
            },
            {
              "num": "07",
              "term": "Computer Vision",
              "definition": "AI technology enabling computers and automated software to analyze, interpret, and extract meaningful data from digital images and real-time video feeds."
            },
            {
              "num": "08",
              "term": "Generative AI",
              "definition": "Artificial intelligence systems (such as large language models and image generators) capable of creating original text, images, code, or media from human prompts."
            },
            {
              "num": "09",
              "term": "Natural Language Processing (NLP)",
              "definition": "Algorithms enabling computers to parse, understand, interpret, and generate human speech and written language across software applications."
            },
            {
              "num": "10",
              "term": "Compute Carbon Footprint",
              "definition": "The substantial electrical energy and greenhouse emissions produced by massive AI model training data centers."
            },
            {
              "num": "11",
              "term": "Explainable AI (XAI)",
              "definition": "Machine learning models designed so that human engineers can clearly understand and audit how decisions were reached."
            },
            {
              "num": "12",
              "term": "Workplace Automation",
              "definition": "The application of AI algorithms, software bots, and robotic systems to perform repetitive professional and administrative tasks previously handled by humans."
            },
            {
              "num": "13",
              "term": "Deterministic Algorithm",
              "definition": "A computational process that produces the exact same output every time given a specific set of input parameters."
            },
            {
              "num": "14",
              "term": "AI Hallucination",
              "definition": "An occurrence where a generative AI model creates incorrect, fabricated, or nonsensical information while presenting it with high grammatical confidence."
            },
            {
              "num": "15",
              "term": "Synthetic Training Data",
              "definition": "Artificially generated computer datasets used to train machine learning models on complex, rare, or safety-critical scenarios without real-world risk."
            },
            {
              "num": "16",
              "term": "Black Box Algorithm",
              "definition": "A deep neural network whose internal decision weights cannot be directly inspected or explained by human operators."
            },
            {
              "num": "17",
              "term": "Cyber-Physical Security",
              "definition": "Protecting integrated AI software and physical avionics hardware from malicious interference or spoofing."
            },
            {
              "num": "18",
              "term": "Ethical AI Guidelines",
              "definition": "Formal regulatory standards, transparency rules, and corporate governance frameworks designed to ensure artificial intelligence is deployed safely, equitably, and without bias."
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: How Artificial Intelligence Actually Works",
              "watchUrl": "https://www.youtube.com/watch?v=aircAruvnKk",
              "tag": "AI Fundamentals",
              "videoId": "aircAruvnKk",
              "embedUrl": "https://www.youtube-nocookie.com/embed/aircAruvnKk",
              "caption": "Focus: Accessible breakdown of machine learning algorithms, deep neural networks, and how models process complex data patterns."
            },
            {
              "title": "Video 2: Generative AI & The Future of Everyday Work",
              "watchUrl": "https://www.youtube.com/watch?v=DVpTpx9Avf0",
              "tag": "Workplace Tech",
              "videoId": "DVpTpx9Avf0",
              "embedUrl": "https://www.youtube-nocookie.com/embed/DVpTpx9Avf0",
              "caption": "Focus: Exploring how large language models and automated bots are transforming professional workflows and everyday administrative tasks."
            },
            {
              "title": "Video 3: Active vs. Passive Voice in Technology Reports",
              "watchUrl": "https://www.youtube.com/watch?v=nI5zaB6QL-o",
              "tag": "Grammar Focus",
              "videoId": "nI5zaB6QL-o",
              "embedUrl": "https://www.youtube-nocookie.com/embed/nI5zaB6QL-o",
              "caption": "Focus: Targeted practice on using the passive voice accurately to describe automated technical processes, algorithms, and system outputs."
            }
          ],
          "grammar": {
            "title": "Active vs. Passive Voice",
            "badge": "B1\u2013B2 Grammar Focus",
            "patternTitle": "How Both Voices Work",
            "formula": "Active: Subject + Action + Object | Passive: Receiver + [be] + Past Participle (V3)",
            "rulesTitle": "Core Distinction",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. Active Voice (Subject does the action):</strong> Use when you want to focus on who or what does the work (<span style=\"font-weight: 700; color: #60854b;\">\"Engineers test the software\"</span>).",
              "<strong style=\"color: #1e293b;\">2. Passive Voice (Subject receives the action):</strong> Formed with <span style=\"font-weight: 700; color: #60854b;\">[be] + Past Participle (V3)</span>. Very common in aviation manuals and safety reports when the result is more important than who did it (<em>\"The software is tested\"</em>).",
              "<strong style=\"color: #1e293b;\">3. Passive with Modal Verbs:</strong> Formed with <span style=\"font-weight: 600; color: #334155;\">modal + be + Past Participle</span> (e.g., <em>must be tested</em>, <em>should be updated</em>, <em>can be operated</em>)."
            ],
            "trap": "<strong>\u26a0\ufe0f TOEIC Trap Alert:</strong> Check who does the action! If the subject is an object that cannot act on its own (like source code, a report, or equipment), and is followed by <em>\"by...\"</em>, you need the <strong>passive voice ([be] + V3)</strong>!",
            "examplesTitle": "Aviation & AI Examples",
            "examples": [
              "<em>\"Flight telemetry data <strong>is analyzed</strong> by deep learning models in real time.\" (Passive)</em>",
              "<em>\"Avionics engineers <strong>calibrated</strong> the autopilot sensor array before takeoff.\" (Active)</em>"
            ]
          },
          "toeic": {
            "stem": "By the end of this fiscal year, automated baggage tracking systems ________ at three major international hub terminals.",
            "options": [
              {
                "letter": "A",
                "text": "will install"
              },
              {
                "letter": "B",
                "text": "will have been installed"
              },
              {
                "letter": "C",
                "text": "were installed"
              },
              {
                "letter": "D",
                "text": "have installed"
              }
            ],
            "correctLetter": "B",
            "correctText": "will have been installed",
            "analysis": "The time expression \"By the end of [future time]\" requires the Future Perfect (\"will have been + V3\"), especially in passive voice.",
            "strategy": "Time marker \"By + future point\" triggers the Future Perfect (will have + V3). Add \"been\" when the subject receives the action."
          },
          "resources": [
            {
              "url": "https://partnershiponai.org",
              "tag": "01 \u2022 Global AI Ethics",
              "name": "Partnership on AI",
              "desc": "Global non-profit multi-stakeholder organization developing best practices and ethical standards for artificial intelligence."
            },
            {
              "url": "https://digital-strategy.ec.europa.eu",
              "tag": "02 \u2022 EU Regulatory Framework",
              "name": "European Commission AI Act",
              "desc": "The world's first comprehensive legal framework regulating high-risk AI applications and transparency mandates."
            },
            {
              "url": "https://www.computer.org",
              "tag": "03 \u2022 Computing Research Society",
              "name": "IEEE Computer Society",
              "desc": "Leading technical community for computing professionals developing standards for machine learning and systems engineering."
            },
            {
              "url": "https://hai.stanford.edu",
              "tag": "04 \u2022 Stanford AI Index",
              "name": "Stanford Institute for Human-Centered AI (HAI)",
              "desc": "Interdisciplinary research institute tracking annual metrics on AI capabilities, ethics, investment, and societal impacts."
            },
            {
              "url": "https://ourworldindata.org/artificial-intelligence",
              "tag": "05 \u2022 Technological Change Data",
              "name": "Our World in Data: Artificial Intelligence",
              "desc": "Comprehensive empirical datasets and interactive visualizations tracking global AI development, compute costs, and performance."
            },
            {
              "url": "https://www.etsglobal.org/fr/fr",
              "tag": "06 \u2022 TOEIC Passive Voice Reading",
              "name": "ETS Global TOEIC Preparation",
              "desc": "Business English reading and listening comprehension practice with office automation notices and technical procedure memos."
            }
          ],
          "pageUrl": "session1/admat3.html",
          "articles": [
            {
              "topic": "MIT Technology Review",
              "sourceTag": "Industry Analysis",
              "heading": "Generative AI and the Transformation of Modern Workplaces",
              "snippet": "Analyzing how enterprise deployment of generative AI tools reshapes professional productivity, human-in-the-loop workflows, and ethical benchmarks.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://www.technologyreview.com"
            },
            {
              "topic": "International Energy Agency (IEA)",
              "sourceTag": "Environmental Briefing",
              "heading": "The Compute Carbon Footprint: Data Centers and Energy Demands",
              "snippet": "Assessing the soaring electrical energy and water cooling demands required to train and deploy modern large-scale artificial intelligence models.",
              "readTime": "Estimated read: 6-8 mins",
              "url": "https://www.iea.org"
            }
          ],
          "toeicQuestions": [
            {
              "stem": "By the end of this fiscal year, automated baggage tracking systems ________ at three major international hub terminals.",
              "options": [
                {
                  "letter": "A",
                  "text": "will install"
                },
                {
                  "letter": "B",
                  "text": "will have been installed"
                },
                {
                  "letter": "C",
                  "text": "were installed"
                },
                {
                  "letter": "D",
                  "text": "have installed"
                }
              ],
              "correctLetter": "B",
              "correctText": "will have been installed",
              "analysis": "The time expression \"By the end of [future time]\" requires the Future Perfect (\"will have been + V3\"), especially in passive voice.",
              "strategy": "Time marker \"By + future point\" triggers the Future Perfect (will have + V3). Add \"been\" when the subject receives the action."
            },
            {
              "stem": "Predictive maintenance algorithms ________ aircraft technical teams to identify component wear before mechanical faults develop.",
              "options": [
                {
                  "letter": "A",
                  "text": "enable"
                },
                {
                  "letter": "B",
                  "text": "enabling"
                },
                {
                  "letter": "C",
                  "text": "enabler"
                },
                {
                  "letter": "D",
                  "text": "ably"
                }
              ],
              "correctLetter": "A",
              "correctText": "enable",
              "analysis": "The sentence requires a finite verb in the present tense matching plural subject \"algorithms\" (\"enable someone to do something\").",
              "strategy": "Every English sentence requires a finite verb. Gerunds (-ing) without auxiliaries and nouns cannot act as main verbs."
            },
            {
              "stem": "Autonomous electric ramp tractors ________ into routine cargo operations at Lyon-Saint Exup\u00e9ry Airport by 2028.",
              "options": [
                {
                  "letter": "A",
                  "text": "are integrating"
                },
                {
                  "letter": "B",
                  "text": "will be integrated"
                },
                {
                  "letter": "C",
                  "text": "were integrating"
                },
                {
                  "letter": "D",
                  "text": "has integrated"
                }
              ],
              "correctLetter": "B",
              "correctText": "will be integrated",
              "analysis": "Future timeframe (\"by 2028\") and passive voice (tractors do not integrate themselves) require future passive \"will be integrated\".",
              "strategy": "Check time (2028 = future) + voice (tractors are integrated = passive). Pick will be + V3."
            },
            {
              "stem": "The engineering team will initiate automated drone runway sweeps as soon as European aviation safety clearance ________ received.",
              "options": [
                {
                  "letter": "A",
                  "text": "is"
                },
                {
                  "letter": "B",
                  "text": "will be"
                },
                {
                  "letter": "C",
                  "text": "was"
                },
                {
                  "letter": "D",
                  "text": "has been"
                }
              ],
              "correctLetter": "A",
              "correctText": "is",
              "analysis": "In time clauses introduced by \"as soon as\", \"when\", or \"until\", use the Present Simple tense even when the main clause refers to the future.",
              "strategy": "Rule: Never use \"will\" in a time clause (when, as soon as, once, after). Use Present Simple: \"as soon as clearance is received\"."
            },
            {
              "stem": "Within the next five years, machine learning models ________ flight flight-altitude planning to minimize contrail formation.",
              "options": [
                {
                  "letter": "A",
                  "text": "optimize"
                },
                {
                  "letter": "B",
                  "text": "will optimize"
                },
                {
                  "letter": "C",
                  "text": "were optimizing"
                },
                {
                  "letter": "D",
                  "text": "have optimized"
                }
              ],
              "correctLetter": "B",
              "correctText": "will optimize",
              "analysis": "The future time frame \"Within the next five years\" requires a simple future prediction: \"will optimize\".",
              "strategy": "\"Within the next [years/months]\" refers to future events $\rightarrow$ choose \"will + base verb\"."
            }
          ]
        }
      },
      "2": {
        "session": 2,
        "objectives": {
          "title": "Session 2 - Future of travel Objectives",
          "summary": "By the end of this session, you will be able to discuss the future of travel with confidence, use key vocabulary and grammar, and build the skills needed for your TOEIC test and Session 5 evaluation.",
          "items": [
            {
              "num": 1,
              "title": "Practice TOEIC Listening Part 3: Business & Innovation Discussions",
              "description": "Catch key details and technical specifications in conversations between engineers, planners, and clients."
            },
            {
              "num": 2,
              "title": "Master Vocabulary for Future Mobility, Electric Vehicles & Clean Energy",
              "description": "Learn and use words for battery range, hydrogen fuel cells, autonomous shuttles, and charging infrastructure."
            },
            {
              "num": 3,
              "title": "Form and Use Comparatives & Degree Words (much faster, more costly than)",
              "description": "Use comparative adjectives and degree modifiers (far more efficient, slightly slower) to compare transit technologies."
            },
            {
              "num": 4,
              "title": "Analyze the Long-Term Environmental Benefits of Future Transit (DDRS)",
              "description": "Weigh the life-cycle carbon savings of electric and hydrogen systems against the resources needed to build them."
            },
            {
              "num": 5,
              "title": "Present Your Vision of Future Transportation in Pairs",
              "description": "Describe and defend an innovative transit idea in paired presentations, focusing on fluency and convincing delivery."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 2 Lesson Plan (2 Hours)",
          "summary": "A 2-hour session agenda combining conversational warm-ups, TOEIC test practice, vocabulary building, speaking activities, and evaluation preparation.",
          "items": [
            {
              "time": "0-15",
              "title": "Conversational Warm-Up: Travel in 2050 (15 mins)",
              "description": "In pairs, students predict how long-distance travel will look in 30 years and brainstorm emerging technologies."
            },
            {
              "time": "15-45",
              "title": "TOEIC Strategy: Listening to Product Pitches (30 mins)",
              "description": "Practice Part 3 conversations featuring tech presentations, innovation pitches, and investment decisions."
            },
            {
              "time": "45-65",
              "title": "Vocabulary Builder: Next-Gen Mobility (20 mins)",
              "description": "High-frequency terms for autonomous vehicles, hydrogen fuel cells, eVTOL shuttles, and charging networks."
            },
            {
              "time": "65-110",
              "title": "Structured Discussion & Grammar (45 mins)",
              "description": "Pitching and comparing future transport modes using Comparatives and Superlatives (far cleaner than, the most cost-effective)."
            },
            {
              "time": "110-120",
              "title": "Debrief, Evaluation Prep & Wrap-Up (10 mins)",
              "description": "Teacher language points, peer feedback on pitch clarity, and personal study targets."
            }
          ]
        },
        "revision": {
          "title": "Session 2: Future of travel",
          "summary": "Review the 18 key terms for Future of travel to build your fluency in discussions, professional reading, and TOEIC practice.",
          "terms": [
            {
              "num": "01",
              "term": "Electric Vertical Take-Off (eVTOL)",
              "definition": "Aircraft utilizing distributed electric propulsion to take off and land vertically, designed for urban air mobility."
            },
            {
              "num": "02",
              "term": "Urban Air Mobility (UAM)",
              "definition": "A safe and efficient aviation transit system for passenger and cargo transport across metropolitan airspace."
            },
            {
              "num": "03",
              "term": "Sustainable Aviation Fuel (SAF)",
              "definition": "Drop-in bio-based or synthetic fuels compatible with existing turbines, reducing net carbon lifecycle emissions by up to 80%."
            },
            {
              "num": "04",
              "term": "Hydrogen Fuel Cell",
              "definition": "An electrochemical device combining hydrogen and oxygen to produce electricity with water vapor as the sole byproduct."
            },
            {
              "num": "05",
              "term": "Vertiport",
              "definition": "A dedicated airport facility designed specifically for vertical take-off and landing passenger aircraft operations."
            },
            {
              "num": "06",
              "term": "Energy Density",
              "definition": "The amount of energy stored per unit mass in an aviation battery or fuel, a critical metric for flight range."
            },
            {
              "num": "07",
              "term": "High-Speed Rail Expansion",
              "definition": "The development and integration of high-speed passenger train networks (over 250 km/h) engineered to replace short-haul domestic and regional flights."
            },
            {
              "num": "08",
              "term": "Supersonic Transport (SST)",
              "definition": "Aircraft capable of cruising faster than the speed of sound (Mach 1.0) with low-boom aerodynamic profiling."
            },
            {
              "num": "09",
              "term": "Hyperloop Concept",
              "definition": "A sealed low-pressure tube transit system propelling levitating pods at near-aviation speeds using linear motors."
            },
            {
              "num": "10",
              "term": "Acoustic Footprint",
              "definition": "The geographic area exposed to aircraft noise levels during urban take-off, hover, and approach procedures."
            },
            {
              "num": "11",
              "term": "Solid-State Battery",
              "definition": "Next-generation batteries employing solid electrolytes to achieve higher energy densities and reduced thermal runaway risk."
            },
            {
              "num": "12",
              "term": "Modal Shift",
              "definition": "A policy and behavioral transition where travelers switch from high-carbon transport modes (private cars and flights) to lower-carbon alternatives like electric rail."
            },
            {
              "num": "13",
              "term": "Uncrewed Traffic Management (UTM)",
              "definition": "A digital, automated air traffic architecture designed to coordinate thousands of low-altitude drones and eVTOLs."
            },
            {
              "num": "14",
              "term": "Life-Cycle Assessment (LCA)",
              "definition": "Comprehensive evaluation of environmental impacts associated with raw material extraction through disposal."
            },
            {
              "num": "15",
              "term": "Mobility as a Service (MaaS)",
              "definition": "Digital travel platforms that integrate multiple transport services (trains, bike shares, e-buses, car rentals) into a single unified mobile app and booking ticket."
            },
            {
              "num": "16",
              "term": "Autonomous Shuttle",
              "definition": "Self-driving electric passenger vehicles operating on pre-mapped routes to connect neighborhoods, airports, and public transit nodes without human drivers."
            },
            {
              "num": "17",
              "term": "Overnight Sleeper Train",
              "definition": "Modern long-distance passenger rail services operating overnight with private sleeping cabins, offering a comfortable, low-carbon alternative to regional air travel."
            },
            {
              "num": "18",
              "term": "Zero-Emission Fleet",
              "definition": "Commercial transit networks, delivery vehicles, or airline ground support equipment powered 100% by renewable electricity or green hydrogen fuel."
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: The Future of Travel: High-Speed Trains vs. Flying",
              "watchUrl": "https://www.youtube.com/watch?v=NDs5baOoxao",
              "tag": "Mobility Trends",
              "videoId": "NDs5baOoxao",
              "embedUrl": "https://www.youtube-nocookie.com/embed/NDs5baOoxao",
              "caption": "Focus: Investigating Europe's high-speed rail expansion and the policy push to encourage passenger modal shift away from regional air routes."
            },
            {
              "title": "Video 2: Clean Flight: Electric Planes & Sustainable Fuels",
              "watchUrl": "https://www.youtube.com/watch?v=7KkBE0HgNJQ",
              "tag": "Clean Aviation",
              "videoId": "7KkBE0HgNJQ",
              "embedUrl": "https://www.youtube-nocookie.com/embed/7KkBE0HgNJQ",
              "caption": "Focus: Examining engineering breakthroughs in battery density, hybrid-electric propulsion, and certified Sustainable Aviation Fuels (SAF)."
            },
            {
              "title": "Video 3: Comparatives and Superlatives in Transport Reviews",
              "watchUrl": "https://www.youtube.com/watch?v=FAhpT7BH7GE",
              "tag": "Grammar Focus",
              "videoId": "FAhpT7BH7GE",
              "embedUrl": "https://www.youtube-nocookie.com/embed/FAhpT7BH7GE",
              "caption": "Focus: Targeted practice using comparative structures and degree adverbs to contrast travel speed, carbon efficiency, ticket prices, and comfort."
            }
          ],
          "grammar": {
            "title": "Comparing Things & Degree Words",
            "badge": "B1\u2013B2 Grammar Focus",
            "patternTitle": "Comparison Rules",
            "formula": "Comparative: [much / considerably] + [more + adj / -er] + than | Superlative: the + [most + adj / -est]",
            "rulesTitle": "Core Rules",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. Comparing Two Things (Comparative):</strong> Compare two items using <span style=\"font-weight: 700; color: #60854b;\">-er / more ... than</span> (e.g., <em>faster than</em>, <em>more efficient than</em>).",
              "<strong style=\"color: #1e293b;\">2. Degree Words (How much bigger or smaller):</strong> Use words like <span style=\"font-weight: 600; color: #334155;\">much, considerably, far, significantly, slightly</span> before comparatives (e.g., <em>considerably more costly</em>, <em>significantly higher</em>).",
              "<strong style=\"color: #1e293b;\">3. The Top of a Group (Superlative):</strong> Use <span style=\"font-weight: 700; color: #60854b;\">the + -est / the most + adjective</span> for three or more things (e.g., <em>the most viable solution</em>, <em>the cheapest option</em>)."
            ],
            "trap": "<strong>\u26a0\ufe0f TOEIC Trap Alert:</strong> Never put <strong>very</strong> in front of a comparative (NOT <em>very more expensive</em> \u274c)! When you see <em>than</em> after the blank, you must use a comparative (<em>more costly</em>), never a superlative (<em>most costly</em>).",
            "examplesTitle": "Propulsion & Energy Examples",
            "examples": [
              "<em>\"Hydrogen yields <strong>significantly higher</strong> gravimetric energy density than battery cells.\" (Comparative)</em>",
              "<em>\"Hybrid turboprops represent <strong>the most viable</strong> interim solution for regional carriers.\" (Superlative)</em>"
            ]
          },
          "toeic": {
            "stem": "Rarely ________ airline dispatch teams encountered such extensive cloud infrastructure outages across European air control centers.",
            "options": [
              {
                "letter": "A",
                "text": "have"
              },
              {
                "letter": "B",
                "text": "had"
              },
              {
                "letter": "C",
                "text": "did"
              },
              {
                "letter": "D",
                "text": "were"
              }
            ],
            "correctLetter": "A",
            "correctText": "have",
            "analysis": "When a sentence starts with a restrictive or negative adverb (\"Rarely\", \"Seldom\", \"Never\"), subject-auxiliary inversion occurs: Rarely + have + subject + past participle.",
            "strategy": "Negative Inversion Formula: [Negative adverb] + [auxiliary verb] + [Subject] + [Main verb]. Look for have/has before the subject."
          },
          "resources": [
            {
              "url": "https://www.cer.be",
              "tag": "01 \u2022 European Rail Network",
              "name": "Community of European Railway & Infrastructure (CER)",
              "desc": "Representing European passenger and freight railway operators advocating for cross-border high-speed rail connections."
            },
            {
              "url": "https://www.clean-aviation.eu",
              "tag": "02 \u2022 Clean Aviation Alliance",
              "name": "Clean Aviation Joint Undertaking",
              "desc": "European Union public-private partnership developing disruptive zero-emission aircraft technologies by 2035."
            },
            {
              "url": "https://theicct.org",
              "tag": "03 \u2022 Clean Transport Research",
              "name": "International Council on Clean Transportation (ICCT)",
              "desc": "Independent research organization providing first-rate technical and scientific analysis to environmental regulators."
            },
            {
              "url": "https://www.itdp.org",
              "tag": "04 \u2022 Sustainable Transit Institute",
              "name": "Institute for Transportation & Development Policy (ITDP)",
              "desc": "Global non-profit organization promoting sustainable, equitable, and integrated public transportation systems."
            },
            {
              "url": "https://ourworldindata.org/transport",
              "tag": "05 \u2022 Energy Transition Data",
              "name": "Our World in Data: Energy & Transport",
              "desc": "Empirical metrics tracking global greenhouse gas emissions by transport mode, electric vehicle adoption, and energy intensity."
            },
            {
              "url": "https://www.etsglobal.org/fr/fr",
              "tag": "06 \u2022 TOEIC Comparative Reading",
              "name": "ETS Global TOEIC Preparation",
              "desc": "Reading comprehension practice analyzing comparative travel options, service schedules, and infrastructure investment tenders."
            }
          ],
          "pageUrl": "session2/admat3.html",
          "articles": [
            {
              "topic": "International Council on Clean Transportation (ICCT)",
              "sourceTag": "Policy Analysis",
              "heading": "The European Rail Renaissance: Can High-Speed Rail Replace Regional Flights?",
              "snippet": "Comparative modeling of travel times, carbon savings, and infrastructure investment required to achieve competitive rail alternatives across European corridors.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://theicct.org"
            },
            {
              "topic": "McKinsey Transport &amp; Logistics Review",
              "sourceTag": "Industry Forecast",
              "heading": "The Next Decade of Sustainable Mobility &amp; Clean Fuels",
              "snippet": "Assessing commercial scaling timelines for electric fleets, hydrogen fuel cells, autonomous shuttles, and net-zero passenger transport.",
              "readTime": "Estimated read: 6-8 mins",
              "url": "https://www.mckinsey.com"
            }
          ],
          "toeicQuestions": [
            {
              "stem": "Rarely ________ airline dispatch teams encountered such extensive cloud infrastructure outages across European air control centers.",
              "options": [
                {
                  "letter": "A",
                  "text": "have"
                },
                {
                  "letter": "B",
                  "text": "had"
                },
                {
                  "letter": "C",
                  "text": "did"
                },
                {
                  "letter": "D",
                  "text": "were"
                }
              ],
              "correctLetter": "A",
              "correctText": "have",
              "analysis": "When a sentence starts with a restrictive or negative adverb (\"Rarely\", \"Seldom\", \"Never\"), subject-auxiliary inversion occurs: Rarely + have + subject + past participle.",
              "strategy": "Negative Inversion Formula: [Negative adverb] + [auxiliary verb] + [Subject] + [Main verb]. Look for have/has before the subject."
            },
            {
              "stem": "Not only ________ the biometric boarding gate accelerate passenger boarding, but it also eliminated boarding pass fraud.",
              "options": [
                {
                  "letter": "A",
                  "text": "did"
                },
                {
                  "letter": "B",
                  "text": "does"
                },
                {
                  "letter": "C",
                  "text": "has"
                },
                {
                  "letter": "D",
                  "text": "had"
                }
              ],
              "correctLetter": "A",
              "correctText": "did",
              "analysis": "Negative inversion with \"Not only\". Since the parallel clause uses past simple (\"eliminated\"), the auxiliary must be past (\"did... accelerate\").",
              "strategy": "Formula: Not only + did + S + base verb ..., but [S] also + past verb."
            },
            {
              "stem": "Under no circumstances ________ international passengers bypass biometric verification gates without presenting their digital credentials.",
              "options": [
                {
                  "letter": "A",
                  "text": "should"
                },
                {
                  "letter": "B",
                  "text": "ought"
                },
                {
                  "letter": "C",
                  "text": "must have"
                },
                {
                  "letter": "D",
                  "text": "were"
                }
              ],
              "correctLetter": "A",
              "correctText": "should",
              "analysis": "Negative inversion after \"Under no circumstances\": modal auxiliary (\"should\") precedes the subject \"international passengers\".",
              "strategy": "\"Under no circumstances\" + modal (should / can) + Subject + base verb."
            },
            {
              "stem": "Modern automated self-service check-in kiosks must be rapid, reliable, and ________ for all arriving travelers.",
              "options": [
                {
                  "letter": "A",
                  "text": "accessible"
                },
                {
                  "letter": "B",
                  "text": "accessibility"
                },
                {
                  "letter": "C",
                  "text": "accessing"
                },
                {
                  "letter": "D",
                  "text": "accessibly"
                }
              ],
              "correctLetter": "A",
              "correctText": "accessible",
              "analysis": "Parallel grammatical structure requires an adjective to match \"rapid\" and \"reliable\" in the series: [adj], [adj], and [adj].",
              "strategy": "Parallelism rule: In a series connected by \"and\" or \"or\", items must share the same part of speech (rapid, reliable, and accessible)."
            },
            {
              "stem": "Hardly had the high-speed electric train ________ the terminal when diagnostic sensors transmitted telemetry to the dispatch center.",
              "options": [
                {
                  "letter": "A",
                  "text": "left"
                },
                {
                  "letter": "B",
                  "text": "leave"
                },
                {
                  "letter": "C",
                  "text": "leaving"
                },
                {
                  "letter": "D",
                  "text": "leaves"
                }
              ],
              "correctLetter": "A",
              "correctText": "left",
              "analysis": "The structure \"Hardly had [subject] [past participle] when [past clause]\" requires the past participle form \"left\".",
              "strategy": "Inversion formula: Hardly had + S + [V3] ... when + [Past Simple]."
            }
          ]
        }
      },
      "3": {
        "session": 3,
        "objectives": {
          "title": "Session 3 - Debate and Critical Thinking Objectives",
          "summary": "By the end of this session, you will be able to engage in debates and critical discussions with confidence, use key vocabulary and grammar, and build the skills needed for your TOEIC test and Session 5 evaluation.",
          "items": [
            {
              "num": 1,
              "title": "Practice Identifying Argument Structures & Cause/Effect in TOEIC Reading",
              "description": "Analyze editorial articles and opinion pieces to separate central claims from supporting evidence and assumptions."
            },
            {
              "num": 2,
              "title": "Master Polite Debate Language, Concessions, and Rhetorical Questions",
              "description": "Use diplomatic phrasing to question assumptions, acknowledge opposing arguments, and clarify misunderstandings."
            },
            {
              "num": 3,
              "title": "Use Conjunctions (although, because) vs. Prepositions (despite, due to)",
              "description": "Correctly choose between conjunctions requiring a full clause and prepositions followed by a noun phrase or gerund."
            },
            {
              "num": 4,
              "title": "Debate Technological Innovation vs. Environmental Caution (DDRS)",
              "description": "Explore the balance between rapid tech adoption and the precautionary principle for public safety and ecology."
            },
            {
              "num": 5,
              "title": "Participate in an Interactive Class Debate with Constructive Feedback",
              "description": "Deliver concise, persuasive spoken contributions during a team debate while staying polite and focused on the topic."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 3 Lesson Plan (2 Hours)",
          "summary": "A 2-hour session agenda combining conversational warm-ups, TOEIC test practice, vocabulary building, speaking activities, and evaluation preparation.",
          "items": [
            {
              "time": "0-15",
              "title": "Conversational Warm-Up: Agree or Disagree? (15 mins)",
              "description": "Students quickly vote and give one reason for controversial tech statements (e.g. banning short-haul flights)."
            },
            {
              "time": "15-45",
              "title": "TOEIC Strategy: Cause & Effect in Part 7 (30 mins)",
              "description": "Practice analyzing texts for cause-and-effect relationships, contrasting arguments, and author stance."
            },
            {
              "time": "45-65",
              "title": "Vocabulary Builder: Debate & Discussion Signposts (20 mins)",
              "description": "Linking words and phrases for counter-arguments, concessions, rhetorical questions, and conclusions."
            },
            {
              "time": "65-110",
              "title": "Structured Discussion & Grammar (45 mins)",
              "description": "Structured classroom debate using Conjunctions (whereas, provided that) vs. Prepositions (despite, in spite of)."
            },
            {
              "time": "110-120",
              "title": "Debrief, Evaluation Prep & Wrap-Up (10 mins)",
              "description": "Peer debate feedback, pronunciation check, and preparation checklist for the Session 5 evaluation."
            }
          ]
        },
        "revision": {
          "title": "Session 3: Debate and Critical Thinking",
          "summary": "Review the 18 key terms for Debate and Critical Thinking to build your fluency in discussions, professional reading, and TOEIC practice.",
          "terms": [
            {
              "num": "01",
              "term": "Confirmation Bias",
              "definition": "The psychological tendency to search for, interpret, and favor information that confirms preexisting beliefs while ignoring or dismissing contradictory evidence."
            },
            {
              "num": "02",
              "term": "Constructive Disagreement",
              "definition": "A debate communication method where opposing speakers challenge ideas respectfully using evidence and logic to reach better shared solutions without personal conflict."
            },
            {
              "num": "03",
              "term": "Liability Allocation",
              "definition": "The legal decision of who is responsible (operators, manufacturers, or programmers) when an automated system fails."
            },
            {
              "num": "04",
              "term": "Machine Ethics",
              "definition": "Teaching moral rules and ethical boundaries to automated computer systems and algorithms."
            },
            {
              "num": "05",
              "term": "Workforce Disruption",
              "definition": "Changes and job losses caused when automated machines or AI tools replace human workers."
            },
            {
              "num": "06",
              "term": "Cognitive Complacency",
              "definition": "When people rely too much on automated tools and stop paying close attention to what is happening."
            },
            {
              "num": "07",
              "term": "Situational Awareness",
              "definition": "A pilot&#x27;s real-time perception and understanding of aircraft status, flight envelope, and atmospheric surroundings."
            },
            {
              "num": "08",
              "term": "Algorithmic Accountability",
              "definition": "The principle that developers, corporations, and governments must be held legally and morally responsible for the outcomes and decisions made by automated systems."
            },
            {
              "num": "09",
              "term": "Ethical Dilemma",
              "definition": "A complex situation in which a decision-maker must choose between two conflicting moral options, neither of which is entirely satisfactory or free from negative consequences."
            },
            {
              "num": "10",
              "term": "Counter-Claim / Rebuttal",
              "definition": "An argument, empirical piece of evidence, or logical reasoning presented directly to challenge, weaken, or disprove an opposing speaker's position in a debate."
            },
            {
              "num": "11",
              "term": "Automation Bias",
              "definition": "Trusting a computer or automated suggestion even when your own judgment warns you something is wrong."
            },
            {
              "num": "12",
              "term": "Discourse Concession",
              "definition": "Acknowledging that an opponent has a valid point before presenting your own counter-argument in a debate."
            },
            {
              "num": "13",
              "term": "Social Equity in Automation",
              "definition": "Ensuring that efficiency gains from automation are shared equitably rather than concentrating profits while eliminating jobs."
            },
            {
              "num": "14",
              "term": "Human Factors Engineering",
              "definition": "Designing technology interfaces tailored to human psychological capabilities and sensory limitations."
            },
            {
              "num": "15",
              "term": "Critical Evaluation",
              "definition": "The systematic examination of arguments, evidence, and underlying assumptions to assess their factual accuracy, logical validity, and fairness before drawing conclusions."
            },
            {
              "num": "16",
              "term": "Nuanced Argument",
              "definition": "A balanced line of reasoning that recognizes complexities, qualifications, and trade-offs rather than presenting an oversimplified black-and-white perspective."
            },
            {
              "num": "17",
              "term": "Regulatory Oversight",
              "definition": "Governmental safety supervision verifying that automated innovations meet rigorous legal and moral benchmarks."
            },
            {
              "num": "18",
              "term": "Stakeholder Advocacy",
              "definition": "Public communication, campaigning, and representation by affected community, worker, or consumer groups to ensure their rights and safety are protected in tech transitions."
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: 5 Tips to Improve Your Critical Thinking",
              "watchUrl": "https://www.youtube.com/watch?v=dItUGF8GdTw",
              "tag": "Critical Thinking",
              "videoId": "dItUGF8GdTw",
              "embedUrl": "https://www.youtube-nocookie.com/embed/dItUGF8GdTw",
              "caption": "Focus: Samantha Agoos outlines a practical 5-step framework to formulate questions, test assumptions, evaluate evidence, and explore opposing perspectives."
            },
            {
              "title": "Video 2: The Ethics of Algorithmic Decisions & Autonomous Systems",
              "watchUrl": "https://www.youtube.com/watch?v=gV0_raKR2UQ",
              "tag": "Machine Ethics",
              "videoId": "gV0_raKR2UQ",
              "embedUrl": "https://www.youtube-nocookie.com/embed/gV0_raKR2UQ",
              "caption": "Focus: Examining real-world ethical dilemmas when algorithms make automated decisions in transportation, hiring, and legal systems."
            },
            {
              "title": "Video 3: Conjunctions and Transition Words for Persuasive Arguments",
              "watchUrl": "https://www.youtube.com/watch?v=BECe_ok1RI8",
              "tag": "Grammar Focus",
              "videoId": "BECe_ok1RI8",
              "embedUrl": "https://www.youtube-nocookie.com/embed/BECe_ok1RI8",
              "caption": "Focus: Targeted practice using coordinating and subordinating conjunctions (furthermore, however, consequently, whereas) to structure cohesive debate points."
            }
          ],
          "grammar": {
            "title": "Connecting Sentences & Ideas",
            "badge": "B1\u2013B2 Grammar Focus",
            "patternTitle": "Connecting Words",
            "formula": "Conjunction: [Although / Because] + Subject + Verb | Preposition: [Despite / Due to] + Noun",
            "rulesTitle": "Core Rules",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. Conjunctions (Although, Even though, Because, Since):</strong> Followed by a complete sentence with a <span style=\"font-weight: 700; color: #60854b;\">Subject and a Verb</span> (<em>\"Although the model worked...\"</em>).",
              "<strong style=\"color: #1e293b;\">2. Prepositions (Despite, In spite of, Because of, Due to):</strong> Followed only by a <span style=\"font-weight: 700; color: #60854b;\">noun or an -ing word</span>, never a full subject + verb (<em>\"Despite high accuracy...\"</em>).",
              "<strong style=\"color: #1e293b;\">3. Transition Words (However, Therefore, Furthermore):</strong> Start a new sentence after a period or semicolon, usually followed by a comma (<span style=\"font-weight: 600; color: #334155;\">\"However, regulators hesitated.\"</span>)."
            ],
            "trap": "<strong>\u26a0\ufe0f TOEIC Trap Alert:</strong> The <em>\"Although vs. Despite\"</em> trap! If you see a <strong>Subject and a Verb</strong> after the blank, choose <em>Although / Even though</em>. If you see only a noun phrase, choose <em>Despite / In spite of</em>!",
            "examplesTitle": "Governance & Ethics Examples",
            "examples": [
              "<em>\"<strong>Although</strong> the model demonstrated accuracy, bias audits remained mandatory.\" (+ Clause)</em>",
              "<em>\"<strong>Despite</strong> high statistical accuracy, public deployment was delayed.\" (+ Noun Phrase)</em>"
            ]
          },
          "toeic": {
            "stem": "European air transport regulators recommend that every commercial AI guidance system ________ audited by human flight safety panels.",
            "options": [
              {
                "letter": "A",
                "text": "is"
              },
              {
                "letter": "B",
                "text": "be"
              },
              {
                "letter": "C",
                "text": "was"
              },
              {
                "letter": "D",
                "text": "been"
              }
            ],
            "correctLetter": "B",
            "correctText": "be",
            "analysis": "The verb \"recommend that\" requires the mandative subjunctive mood, which uses the base form of the verb (\"be audited\"), regardless of the singular subject.",
            "strategy": "Subjunctive triggers: recommend that, require that, demand that, suggest that $\rightarrow$ always choose the BASE verb (be, go, submit)."
          },
          "resources": [
            {
              "url": "https://hai.stanford.edu",
              "tag": "01 \u2022 AI Ethics & Governance",
              "name": "Stanford Human-Centered AI (HAI)",
              "desc": "Advancing AI research, education, and policy to benefit humanity through interdisciplinary scholarship."
            },
            {
              "url": "https://www.acm.org/code-of-ethics",
              "tag": "02 \u2022 Human-Computer Ethics",
              "name": "ACM Code of Ethics & Professional Conduct",
              "desc": "Foundational ethical guidelines established by the Association for Computing Machinery to govern responsible technological stewardship."
            },
            {
              "url": "https://www.criticalthinking.org",
              "tag": "03 \u2022 Critical Thinking Foundation",
              "name": "Foundation for Critical Thinking",
              "desc": "Global non-profit educational organization advancing essential critical thinking tools, Socratic questioning, and logical evaluation."
            },
            {
              "url": "https://www.eff.org",
              "tag": "04 \u2022 Public Interest Tech",
              "name": "Electronic Frontier Foundation (EFF)",
              "desc": "Leading non-profit defending civil liberties, algorithmic transparency, privacy rights, and user autonomy in the digital world."
            },
            {
              "url": "https://ourworldindata.org/technological-change",
              "tag": "05 \u2022 Technological Change Data",
              "name": "Our World in Data: Technological Change",
              "desc": "Global historical data tracking rates of technological diffusion, workplace productivity, and societal adaptation."
            },
            {
              "url": "https://www.etsglobal.org/fr/fr",
              "tag": "06 \u2022 TOEIC Argument Analysis",
              "name": "ETS Global TOEIC Preparation",
              "desc": "Business English listening and reading comprehension strategies for identifying speaker stance, counter-claims, and concession markers."
            }
          ],
          "pageUrl": "session3/admat3.html",
          "articles": [
            {
              "topic": "Stanford Center for Human-Centered AI",
              "sourceTag": "Academic Briefing",
              "heading": "Critical Thinking in the Age of Automated Algorithms",
              "snippet": "Analyzing how human operators can maintain situational awareness, recognize cognitive complacency, and challenge flawed automated outputs.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://hai.stanford.edu"
            },
            {
              "topic": "Harvard Law Review Digital Governance",
              "sourceTag": "Legal &amp; Policy Review",
              "heading": "Allocating Legal Liability for Automated Decisions",
              "snippet": "Exploring legal doctrines and ethical frameworks for attributing fault when autonomous vehicles, AI models, or automated systems cause harm.",
              "readTime": "Estimated read: 6-8 mins",
              "url": "https://harvardlawreview.org"
            }
          ],
          "toeicQuestions": [
            {
              "stem": "European air transport regulators recommend that every commercial AI guidance system ________ audited by human flight safety panels.",
              "options": [
                {
                  "letter": "A",
                  "text": "is"
                },
                {
                  "letter": "B",
                  "text": "be"
                },
                {
                  "letter": "C",
                  "text": "was"
                },
                {
                  "letter": "D",
                  "text": "been"
                }
              ],
              "correctLetter": "B",
              "correctText": "be",
              "analysis": "The verb \"recommend that\" requires the mandative subjunctive mood, which uses the base form of the verb (\"be audited\"), regardless of the singular subject.",
              "strategy": "Subjunctive triggers: recommend that, require that, demand that, suggest that $\rightarrow$ always choose the BASE verb (be, go, submit)."
            },
            {
              "stem": "It is essential that passenger biometric identification records ________ strictly encrypted during data transmission.",
              "options": [
                {
                  "letter": "A",
                  "text": "remain"
                },
                {
                  "letter": "B",
                  "text": "remains"
                },
                {
                  "letter": "C",
                  "text": "remained"
                },
                {
                  "letter": "D",
                  "text": "will remain"
                }
              ],
              "correctLetter": "A",
              "correctText": "remain",
              "analysis": "The impersonal construction \"It is essential that\" demands the subjunctive base form (\"remain\"), without third-person -s.",
              "strategy": "Pattern: It is essential/imperative/vital that + Subject + [BASE VERB] (no -s, no ed, no will)."
            },
            {
              "stem": "The digital privacy board insisted that automated profiling systems ________ subject to independent human review upon passenger request.",
              "options": [
                {
                  "letter": "A",
                  "text": "be"
                },
                {
                  "letter": "B",
                  "text": "are"
                },
                {
                  "letter": "C",
                  "text": "was"
                },
                {
                  "letter": "D",
                  "text": "were"
                }
              ],
              "correctLetter": "A",
              "correctText": "be",
              "analysis": "\"Insisted that\" triggers the mandative subjunctive, requiring the uninflected base verb \"be\".",
              "strategy": "Verbs of demand or insistence (insist, demand, urge that) trigger base verb subjunctive: \"insisted that S be...\"."
            },
            {
              "stem": "Civil aviation authority members debated ________ the new algorithm met international safety redundancy certifications.",
              "options": [
                {
                  "letter": "A",
                  "text": "whether"
                },
                {
                  "letter": "B",
                  "text": "that"
                },
                {
                  "letter": "C",
                  "text": "which"
                },
                {
                  "letter": "D",
                  "text": "what"
                }
              ],
              "correctLetter": "A",
              "correctText": "whether",
              "analysis": "\"Debated whether\" introduces an indirect question noun clause expressing an issue with two possibilities (whether or not).",
              "strategy": "After verbs of discussion, uncertainty, or debate (debate, wonder, doubt), use \"whether\" rather than \"that\"."
            },
            {
              "stem": "It is imperative that the aerospace engineering contractor ________ international data privacy covenants during software updates.",
              "options": [
                {
                  "letter": "A",
                  "text": "follows"
                },
                {
                  "letter": "B",
                  "text": "follow"
                },
                {
                  "letter": "C",
                  "text": "followed"
                },
                {
                  "letter": "D",
                  "text": "will follow"
                }
              ],
              "correctLetter": "B",
              "correctText": "follow",
              "analysis": "\"It is imperative that\" takes the subjunctive base form \"follow\", even though the subject \"contractor\" is singular.",
              "strategy": "Never add -s to the verb after \"It is imperative / crucial / necessary that\"."
            }
          ]
        }
      },
      "4": {
        "session": 4,
        "objectives": {
          "title": "Session 4 - Biometrics and digital identity Objectives",
          "summary": "By the end of this session, you will be able to discuss biometrics and digital identity with confidence, use key vocabulary and grammar, and build the skills needed for your TOEIC test and Session 5 evaluation.",
          "items": [
            {
              "num": 1,
              "title": "Practice TOEIC Part 5 Dependent Prepositions & Common Collocations",
              "description": "Identify high-frequency verb + preposition combinations (comply with, specialize in, account for) in test sentences."
            },
            {
              "num": 2,
              "title": "Master Vocabulary for Digital Passports, Facial Recognition & Data Privacy",
              "description": "Learn key vocabulary for contactless travel, biometric authentication, encrypted data, and cybersecurity."
            },
            {
              "num": 3,
              "title": "Form Common Business Collocations (comply with, meet standards)",
              "description": "Use natural word pairings in professional speaking and writing to sound more fluent and accurate."
            },
            {
              "num": 4,
              "title": "Discuss Privacy Rights and Ethical Data Governance in Travel (DDRS)",
              "description": "Evaluate how border authorities and tech companies can respect passenger privacy and fundamental rights."
            },
            {
              "num": 5,
              "title": "Rehearse and Polish Your Session 5 Formative Evaluation Topic",
              "description": "Deliver a mock assessment talk, focusing on clear signposting, fluent delivery, and responding to follow-up questions."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 4 Lesson Plan (2 Hours)",
          "summary": "A 2-hour session agenda combining conversational warm-ups, TOEIC test practice, vocabulary building, speaking activities, and evaluation preparation.",
          "items": [
            {
              "time": "0-15",
              "title": "Conversational Warm-Up: Digital Check-in (15 mins)",
              "description": "Students share experiences with digital boarding passes, e-gates, and smartphone authentication."
            },
            {
              "time": "15-45",
              "title": "TOEIC Strategy: Collocations & Prepositions in Part 5 (30 mins)",
              "description": "Timed completion of Part 5 questions testing verb-noun collocations and dependent prepositions."
            },
            {
              "time": "45-65",
              "title": "Vocabulary Builder: Identity & Cybersecurity (20 mins)",
              "description": "Key vocabulary for biometric authentication, facial recognition, data privacy, GDPR, and cyber protection."
            },
            {
              "time": "65-110",
              "title": "Structured Discussion & Grammar (45 mins)",
              "description": "Debate the balance between seamless travel and personal privacy using Business Collocations (ensure compliance, uphold standards)."
            },
            {
              "time": "110-120",
              "title": "Final Evaluation Simulation & Wrap-Up (10 mins)",
              "description": "Complete mock evaluation talk under timed conditions with teacher and peer rubric scoring."
            }
          ]
        },
        "revision": {
          "title": "Session 4: Biometrics and digital identity",
          "summary": "Review the 18 key terms for Biometrics and digital identity to build your fluency in discussions, professional reading, and TOEIC practice.",
          "terms": [
            {
              "num": "01",
              "term": "Biometric Token",
              "definition": "A digital credential containing encrypted mathematical representations of facial, iris, or fingerprint features."
            },
            {
              "num": "02",
              "term": "Automated Border Control (e-Gate)",
              "definition": "An automated security barrier verifying traveler passport chips against live biometric facial captures."
            },
            {
              "num": "03",
              "term": "Seamless Travel Experience",
              "definition": "A frictionless passenger journey through ticketing, bag drop, security, and boarding using biometric verification."
            },
            {
              "num": "04",
              "term": "General Data Protection Regulation (GDPR)",
              "definition": "Strict European Union privacy law governing the collection, processing, and storage of personal biometric data."
            },
            {
              "num": "05",
              "term": "Decentralized Identity (DID)",
              "definition": "A self-sovereign digital identity architecture where travelers store their own credentials on personal devices."
            },
            {
              "num": "06",
              "term": "Facial Recognition Matching",
              "definition": "Comparing live digital video feeds against stored passport reference photos using deep neural networks."
            },
            {
              "num": "07",
              "term": "Liveness Detection",
              "definition": "Anti-spoofing software verifying that a biometric image belongs to a physically present living subject rather than a photo."
            },
            {
              "num": "08",
              "term": "Data Sovereignty",
              "definition": "The principle that digital information is subject to the laws and governance structures of the country where it is processed."
            },
            {
              "num": "09",
              "term": "Passenger Consent Framework",
              "definition": "An explicit, informed legal agreement where a passenger willingly opts into biometric screening with clear opt-out rights."
            },
            {
              "num": "10",
              "term": "Two-Factor Authentication (2FA)",
              "definition": "A security verification process requiring users to provide two separate forms of identification (e.g., password + biometric scan or SMS code) before granting account access."
            },
            {
              "num": "11",
              "term": "False Match Rate (FMR)",
              "definition": "The statistical percentage of biometric verification trials where the system incorrectly matches distinct individuals."
            },
            {
              "num": "12",
              "term": "Identity Theft",
              "definition": "The illegal acquisition, cloning, and fraudulent use of another individual's personal data, digital credentials, or biometric information for financial or criminal gain."
            },
            {
              "num": "13",
              "term": "Demographic Disparity",
              "definition": "Measurable performance discrepancies in facial recognition accuracy across different racial, gender, or age demographics."
            },
            {
              "num": "14",
              "term": "Data Breach",
              "definition": "A security incident in which sensitive, confidential, or biometric customer data is unlawfully accessed, extracted, copied, or transmitted by unauthorized malicious actors."
            },
            {
              "num": "15",
              "term": "Surveillance Creep",
              "definition": "The gradual expansion of a security technology beyond its original authorized scope into invasive public tracking."
            },
            {
              "num": "16",
              "term": "Opt-Out Protocol",
              "definition": "A mandatory alternative pathway allowing passengers to undergo traditional manual document checks without penalty."
            },
            {
              "num": "17",
              "term": "Digital Travel Credential (DTC)",
              "definition": "An official digital representation of a physical passport conforming to international civil aviation (ICAO) standards."
            },
            {
              "num": "18",
              "term": "Digital Wallet",
              "definition": "A secure mobile application that stores virtual identity credentials, digital passports, boarding passes, and payment cards on a traveler's personal smartphone."
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: How Facial Recognition & Biometric Borders Actually Work",
              "watchUrl": "https://www.youtube.com/watch?v=cc0dqW2HCRc",
              "tag": "Biometrics",
              "videoId": "cc0dqW2HCRc",
              "embedUrl": "https://www.youtube-nocookie.com/embed/cc0dqW2HCRc",
              "caption": "Focus: Vox investigation into how computer vision algorithms map facial landmarks, match biometric templates, and power automated e-Gates."
            },
            {
              "title": "Video 2: Digital Identity & Privacy: What Happens to Your Data?",
              "watchUrl": "https://www.youtube.com/watch?v=4HkaGuvoyjY",
              "tag": "Cybersecurity & Privacy",
              "videoId": "4HkaGuvoyjY",
              "embedUrl": "https://www.youtube-nocookie.com/embed/4HkaGuvoyjY",
              "caption": "Focus: The Wall Street Journal explores how traveler biometric data is captured, stored, tokenized, and protected under privacy regulations like GDPR."
            },
            {
              "title": "Video 3: Essential Technology Collocations & Word Partnerships",
              "watchUrl": "https://www.youtube.com/watch?v=CqRloBkyqQs",
              "tag": "Grammar Focus",
              "videoId": "CqRloBkyqQs",
              "embedUrl": "https://www.youtube-nocookie.com/embed/CqRloBkyqQs",
              "caption": "Focus: Targeted practice mastering high-frequency verb-noun and adjective-noun combinations (verify identity, grant access, breach security, protect privacy)."
            }
          ],
          "grammar": {
            "title": "Words That Go Together (Collocations)",
            "badge": "B1\u2013B2 Grammar Focus",
            "patternTitle": "Key Word Pairs",
            "formula": "Verb + Preposition: comply with / adhere to | Verb + Noun: meet standards / conduct an audit",
            "rulesTitle": "Core Rules",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. Verbs with Fixed Prepositions:</strong> <span style=\"font-weight: 700; color: #60854b;\">comply with</span> (rules), <span style=\"font-weight: 700; color: #60854b;\">adhere to</span> (policies), <span style=\"font-weight: 700; color: #60854b;\">participate in</span> (events), <span style=\"font-weight: 700; color: #60854b;\">account for</span> (a percentage).",
              "<strong style=\"color: #1e293b;\">2. Verbs with NO Preposition:</strong> <span style=\"font-weight: 600; color: #334155;\">meet standards</span> (NOT <em>meet with standards</em>), <span style=\"font-weight: 600; color: #334155;\">follow rules</span>, <span style=\"font-weight: 600; color: #334155;\">observe regulations</span>.",
              "<strong style=\"color: #1e293b;\">3. Natural Business Pairs:</strong> <span style=\"font-weight: 600; color: #334155;\">conduct an audit</span>, <span style=\"font-weight: 600; color: #334155;\">grant clearance</span>, <span style=\"font-weight: 600; color: #334155;\">implement measures</span>, <span style=\"font-weight: 600; color: #334155;\">strict confidentiality</span>."
            ],
            "trap": "<strong>\u26a0\ufe0f TOEIC Trap Alert:</strong> Pay close attention to the preposition right after the blank! If you see <em>with</em>, you cannot pick <em>meet</em>, <em>follow</em>, or <em>observe</em> (they don't use <em>with</em>). You must pick <strong>comply with</strong>!",
            "examplesTitle": "Biometrics & Security Examples",
            "examples": [
              "<em>\"Border control e-gates must <strong>comply with</strong> international encryption protocols.\" (Verb + Prep)</em>",
              "<em>\"The airport authority will <strong>conduct a comprehensive audit</strong> of its facial scanner feeds.\" (Verb + Noun)</em>"
            ]
          },
          "toeic": {
            "stem": "________ their digital identity tokens at the self-service terminal, passengers proceed seamlessly through automated biometric boarding lanes.",
            "options": [
              {
                "letter": "A",
                "text": "Verified"
              },
              {
                "letter": "B",
                "text": "Having verified"
              },
              {
                "letter": "C",
                "text": "Verification"
              },
              {
                "letter": "D",
                "text": "Verifies"
              }
            ],
            "correctLetter": "B",
            "correctText": "Having verified",
            "analysis": "The perfect active participle (\"Having verified\") indicates that the action of verifying tokens occurred before the main action (\"proceed\").",
            "strategy": "Perfect Participle Formula: Having + V3 indicates an action completed before the main clause action."
          },
          "resources": [
            {
              "url": "https://www.icao.int",
              "tag": "01 \u2022 Digital Travel Standards",
              "name": "ICAO Digital Travel Credential (DTC)",
              "desc": "International Civil Aviation Organization technical specifications for secure digital travel credentials on mobile devices."
            },
            {
              "url": "https://www.nist.gov",
              "tag": "02 \u2022 Biometric Accuracy Benchmarks",
              "name": "NIST Face Recognition Vendor Test (FRVT)",
              "desc": "National Institute of Standards and Technology official ongoing evaluations measuring algorithmic accuracy and demographic fairness."
            },
            {
              "url": "https://edpb.europa.eu",
              "tag": "03 \u2022 European Privacy Authority",
              "name": "European Data Protection Board (EDPB)",
              "desc": "Independent European body ensuring the consistent application of GDPR rules regarding personal biometric data processing."
            },
            {
              "url": "https://www.iata.org",
              "tag": "04 \u2022 Passenger Identity Initiative",
              "name": "IATA One ID Initiative",
              "desc": "Global air transport initiative working to create a seamless, paperless airport journey using collaborative biometric identity tokens."
            },
            {
              "url": "https://www.eff.org",
              "tag": "05 \u2022 Digital Civil Liberties",
              "name": "Electronic Frontier Foundation (EFF) Biometrics",
              "desc": "Public interest legal analysis and campaign resources defending individual privacy against mass surveillance and biometric overreach."
            },
            {
              "url": "https://www.etsglobal.org/fr/fr",
              "tag": "06 \u2022 TOEIC Collocation Practice",
              "name": "ETS Global TOEIC Preparation",
              "desc": "Vocabulary drills focusing on professional tech collocations, data security policy statements, and passenger service agreements."
            }
          ],
          "pageUrl": "session4/admat3.html",
          "articles": [
            {
              "topic": "NIST / European Data Protection Board",
              "sourceTag": "Scientific Evaluation",
              "heading": "Facial Recognition at the Border: Privacy Safeguards and Demographic Fairness",
              "snippet": "Technical evaluation of automated border e-Gates examining false match rates, demographic performance parity, and strict GDPR privacy compliance.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://www.nist.gov"
            },
            {
              "topic": "International Air Transport Association (IATA)",
              "sourceTag": "Industry Whitepaper",
              "heading": "The Rise of Digital Passports &amp; Self-Sovereign Identity in Travel",
              "snippet": "Evaluating the transition from physical passports to encrypted digital credentials, contactless boarding tokens, and passenger consent protocols.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://www.iata.org"
            }
          ],
          "toeicQuestions": [
            {
              "stem": "________ their digital identity tokens at the self-service terminal, passengers proceed seamlessly through automated biometric boarding lanes.",
              "options": [
                {
                  "letter": "A",
                  "text": "Verified"
                },
                {
                  "letter": "B",
                  "text": "Having verified"
                },
                {
                  "letter": "C",
                  "text": "Verification"
                },
                {
                  "letter": "D",
                  "text": "Verifies"
                }
              ],
              "correctLetter": "B",
              "correctText": "Having verified",
              "analysis": "The perfect active participle (\"Having verified\") indicates that the action of verifying tokens occurred before the main action (\"proceed\").",
              "strategy": "Perfect Participle Formula: Having + V3 indicates an action completed before the main clause action."
            },
            {
              "stem": "________ with high-resolution infrared biometric sensors, the smart e-gate authenticates traveler identities in under three seconds.",
              "options": [
                {
                  "letter": "A",
                  "text": "Equipped"
                },
                {
                  "letter": "B",
                  "text": "Equipping"
                },
                {
                  "letter": "C",
                  "text": "Equipment"
                },
                {
                  "letter": "D",
                  "text": "Equip"
                }
              ],
              "correctLetter": "A",
              "correctText": "Equipped",
              "analysis": "The past participle (\"Equipped\") functions as a passive participial adjective modifying the subject \"smart e-gate\" (the e-gate is equipped).",
              "strategy": "Passive participial clause: [Past Participle V3] ..., [Subject]. The e-gate is equipped with sensors."
            },
            {
              "stem": "When ________ physical travel passports, border control agents cross-examine embedded cryptographic chip signatures.",
              "options": [
                {
                  "letter": "A",
                  "text": "inspect"
                },
                {
                  "letter": "B",
                  "text": "inspecting"
                },
                {
                  "letter": "C",
                  "text": "inspected"
                },
                {
                  "letter": "D",
                  "text": "inspection"
                }
              ],
              "correctLetter": "B",
              "correctText": "inspecting",
              "analysis": "After temporal prepositions and conjunctions like \"When\" or \"While\", active participial clauses take the -ing form (\"When inspecting\").",
              "strategy": "Formula: When/While + [V-ing] + [Object] when the subject of both clauses is the same agent (border agents inspect)."
            },
            {
              "stem": "Digital travel credentials, ________ mutually across all twenty-seven European member states, will standardize passenger border processing.",
              "options": [
                {
                  "letter": "A",
                  "text": "recognized"
                },
                {
                  "letter": "B",
                  "text": "recognizing"
                },
                {
                  "letter": "C",
                  "text": "recognize"
                },
                {
                  "letter": "D",
                  "text": "recognition"
                }
              ],
              "correctLetter": "A",
              "correctText": "recognized",
              "analysis": "Reduced relative clause with passive meaning: credentials [which are] recognized mutually across states.",
              "strategy": "Participial modifier: When modifying a noun passively (credentials are recognized), use the past participle (recognized)."
            },
            {
              "stem": "________ to prevent unauthorized digital identity cloning, border IT departments implemented zero-trust quantum-resistant encryption.",
              "options": [
                {
                  "letter": "A",
                  "text": "Seeking"
                },
                {
                  "letter": "B",
                  "text": "Sought"
                },
                {
                  "letter": "C",
                  "text": "Seek"
                },
                {
                  "letter": "D",
                  "text": "Seekingly"
                }
              ],
              "correctLetter": "A",
              "correctText": "Seeking",
              "analysis": "The present active participle clause (\"Seeking to prevent...\") indicates the reason or purpose of the main subject (\"border IT departments\").",
              "strategy": "Active participial clause showing intent or motive: [V-ing] to + verb ..., [Subject] + [main verb]."
            }
          ]
        }
      }
    }
  }
};

  return {
    ag: agData,
    aas: aasData,
    "1": agData["1"],
    "2": agData["2"],
    "3": agData["3"]
  };
});
