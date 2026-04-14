import { useEffect, useRef, useState } from 'react'
import './App.css'
import profilePhoto from '../Kim_Kiseong_Photo.jpeg'
import resumePdf from '../Kiseong Kim Resume.pdf'
import ploLogo from '../logo/PLO_logo.png'
import avtLogo from '../logo/AVT_logo.jpg'
import tagoLogo from '../logo/TAGO_logo.png'
import aidLogo from '../logo/AID_logo.png'
import cucoLogo from '../logo/CUCO_logo.png'

type Locale = 'ko' | 'en'
type TabId = 'overview' | 'projects' | 'stack'
type LocalizedText = Record<Locale, string>
type ProjectDeliverable = {
  label: LocalizedText
  url?: string
  note?: LocalizedText
}

const copy = (en: string, ko: string): LocalizedText => ({ en, ko })

const navigation: Array<{ id: TabId; label: LocalizedText }> = [
  { id: 'overview', label: copy('Overview', '개요') },
  { id: 'projects', label: copy('Projects', '프로젝트') },
  { id: 'stack', label: copy('Stack', '스택') },
]

const profileItems: Array<{
  label: LocalizedText
  value: string | string[]
  href: string
}> = [
  {
    label: copy('Phone', '휴대폰'),
    value: ['+1 814-810-3800', '+82 10-7143-4740'],
    href: 'tel:+18148103800',
  },
  {
    label: copy('Email', '이메일'),
    value: 'kiseong.kim.2002@gmail.com',
    href: 'mailto:kiseong.kim.2002@gmail.com',
  },
  {
    label: copy('LinkedIn', 'LinkedIn'),
    value: 'linkedin.com/in/kiseong-kim-7b321b354',
    href: 'https://www.linkedin.com/in/kiseong-kim-7b321b354/',
  },
  {
    label: copy('GitHub', 'GitHub'),
    value: 'github.com/kjk6172',
    href: 'https://github.com/kjk6172',
  },
]

const projectTimeline = [
  {
    id: '01',
    logoSrc: ploLogo,
    logoAlt: 'PLO logo',
    title: copy(
      'Natural Language Prompt-Based AI Drone Control System',
      '자연어 프롬프트 기반 AI 드론 제어 시스템 개발',
    ),
    organization: copy(
      'People Link One (PLO) / Pennsylvania State University',
      'People Link One (PLO) / Pennsylvania State University',
    ),
    period: copy('Jan 2026 — Present', '2026.01 — 현재'),
    description: copy(
      'Developing a prototype that turns natural language prompts into drone flight commands by connecting GPU inference, telemetry, and real-time networking.',
      'GPU 추론, 텔레메트리, 실시간 네트워크를 연결해 자연어 프롬프트를 드론 비행 명령으로 변환하는 프로토타입을 개발하고 있습니다.',
    ),
    roles: {
      en: [
        'Developed software for a natural-language drone control system',
        'Designed telemetry communication and real-time laptop-to-drone networking',
        'Built Raspberry Pi networking and control-signal relay logic',
        'Implemented GPU-side AI processing that converts inference into flight commands',
        'Performed integrated hardware/software testing with mechanical engineering collaborators',
      ],
      ko: [
        '자연어 프롬프트 기반 드론 제어 시스템 소프트웨어 개발',
        '드론 텔레메트리 통신 구조 설계 및 노트북-드론 간 실시간 통신 환경 구현',
        'Raspberry Pi 기반 드론-컴퓨터 간 네트워크 통신 및 제어 신호 전달 로직 개발',
        'GPU 환경에서 AI 연산 수행 후 비행 명령으로 변환하는 처리 로직 구현',
        '기계공학과 팀원들과 협업하여 드론 하드웨어 및 소프트웨어 통합 테스트 수행',
      ],
    },
    outcomes: {
      en: [
        'Implemented flight control from natural language input',
        'Established a real-time drone control environment between Raspberry Pi and laptop',
        'Built a drone control prototype combining AI inference with telemetry communication',
      ],
      ko: [
        '자연어 입력을 기반으로 드론 비행 명령을 수행하는 제어 기능 구현',
        'Raspberry Pi와 노트북 간 실시간 통신 기반 드론 제어 환경 구축',
        'AI 연산과 텔레메트리 통신을 결합한 드론 제어 프로토타입 개발',
      ],
    },
    deliverables: [
      {
        label: copy('GitHub Repository', 'GitHub 저장소'),
        url: 'https://github.com/kjk6172/drone',
      },
    ] as ProjectDeliverable[],
  },
  {
    id: '02',
    logoSrc: avtLogo,
    logoAlt: 'AVT logo',
    title: copy(
      'HD Map Path Generation and CI/CD Automation for Autonomous Vehicles',
      '자율주행 차량 HD Map 기반 경로 생성 및 CI/CD 자동화 시스템 개발',
    ),
    organization: copy(
      'Penn State Autonomous Vehicle Team (SAE Autodrive II)',
      'Penn State Autonomous Vehicle Team (SAE Autodrive II)',
    ),
    period: copy('Jan 2026 — Present', '2026.01 — 현재'),
    description: copy(
      'Automating model validation and route-level decision logic for autonomous vehicle software using Simulink, GitLab CI/CD, PostGIS HD maps, and ROS2.',
      'Simulink, GitLab CI/CD, PostGIS HD Map, ROS2를 활용해 자율주행 소프트웨어의 모델 검증과 경로 수준 의사결정 로직을 자동화하고 있습니다.',
    ),
    roles: {
      en: [
        'Built a CI/CD pipeline for Simulink model validation automation',
        'Designed and implemented GitLab-based automated testing and model verification',
        'Developed an obstacle-avoidance lane-change algorithm using HD maps in PostGIS',
        'Implemented ROS2-based autonomous driving decision logic',
      ],
      ko: [
        'Simulink 모델 검증 자동화를 위한 CI/CD 파이프라인 구축',
        'GitLab 기반 자동 테스트 및 모델 검증 환경 설계 및 구현',
        'HD Map(PostGIS) 기반 장애물 회피 차선 변경 알고리즘 개발',
        'ROS2 기반 자율주행 의사결정 로직 개발',
      ],
    },
    outcomes: {
      en: [
        'Improved development efficiency through automated model verification',
        'Advanced autonomous decision-making with HD map-based lane-change logic',
        'Built an automated development workflow for autonomous driving software',
      ],
      ko: [
        'Simulink 모델 자동 검증 시스템 구축을 통해 개발 효율 향상',
        'HD Map 기반 차선 변경 로직 구현으로 자율주행 의사결정 기능 고도화',
        '자율주행 소프트웨어 개발 프로세스 자동화 환경 구축',
      ],
    },
    deliverables: [] as ProjectDeliverable[],
  },
  {
    id: '03',
    logoSrc: tagoLogo,
    logoAlt: 'TAGO logo',
    title: copy(
      'TAGO Airport Shuttle - Campus Ride Matching Platform',
      'TAGO Airport Shuttle - 캠퍼스 택시 매칭 플랫폼 개발',
    ),
    organization: copy('CUCO LLC', 'CUCO LLC'),
    period: copy('Sep 2024 — Present', '2024.09 — 현재'),
    description: copy(
      'Building and operating a campus airport-shuttle matching platform with a Flutter mobile app, Firebase backend, reservation flows, and App Store deployment.',
      'Flutter 모바일 앱, Firebase 백엔드, 예약 플로우, App Store 배포를 포함한 캠퍼스 공항 셔틀 매칭 플랫폼을 개발하고 운영하고 있습니다.',
    ),
    roles: {
      en: [
        'Developed iOS and Android mobile apps with Flutter',
        'Designed and built the backend and database using Firebase',
        'Implemented authentication, reservation management, and real-time notifications',
        'Handled Apple App Store deployment and in-app purchases',
        'Integrated service APIs and backend logic for production operations',
      ],
      ko: [
        'Flutter 기반 iOS/Android 모바일 애플리케이션 개발',
        'Firebase 기반 백엔드 및 데이터베이스 설계 및 구축',
        '사용자 인증, 예약 관리, 실시간 알림 기능 구현',
        'Apple App Store 배포 및 인앱결제 기능 구현',
        '서비스 운영을 위한 API 연동 및 백엔드 로직 개발',
      ],
    },
    outcomes: {
      en: [
        'Launched on the iOS App Store and established a production service environment',
        'Acquired about 50 early users',
        'Opened partnership discussions with local taxi companies toward commercialization',
      ],
      ko: [
        'iOS App Store 출시 완료 및 실제 서비스 운영 환경 구축',
        '약 50명의 초기 사용자 확보',
        '지역 택시 업체와 제휴 논의 진행을 통해 서비스 상용화 기반 마련',
      ],
    },
    deliverables: [
      {
        label: copy('User App (App Store)', '유저 앱 (App Store)'),
        url: 'https://apps.apple.com/us/app/tago-airport-shuttle/id6755057592',
      },
      {
        label: copy('Driver App (App Store)', '드라이버 앱 (App Store)'),
        url: 'https://apps.apple.com/us/app/tago-airport-shuttle-driver/id6755074138',
      },
      {
        label: copy('App Store Search', '앱스토어 검색'),
        note: copy(
          'Search for "TAGO Airport Shuttle" in the App Store',
          '앱스토어에서 "TAGO Airport Shuttle" 검색',
        ),
      },
    ] as ProjectDeliverable[],
  },
  {
    id: '04',
    logoSrc: cucoLogo,
    logoAlt: 'CUCO logo',
    title: copy(
      'UniGuide AI - University Information AI Chatbot',
      'UniGuide AI - 대학 정보 AI 챗봇 개발',
    ),
    organization: copy(
      'CUCO LLC / People Link One (PLO)',
      'CUCO LLC / People Link One (PLO)',
    ),
    period: copy('Jan 2025 — Dec 2025', '2025.01 — 2025.12'),
    description: copy(
      'Led AI/ML engineering for a university information chatbot by building a large web dataset, fine-tuning Phi-3, and deploying FastAPI plus RAG on AWS.',
      '대규모 웹 데이터셋 구축, Phi-3 파인튜닝, FastAPI와 RAG의 AWS 배포를 통해 대학 정보 챗봇의 AI/ML 엔지니어링을 리드했습니다.',
    ),
    roles: {
      en: [
        'Crawled Penn State website data and built a Q/A dataset',
        'Fine-tuned a Phi-3 based LLM and cleaned training data',
        'Developed the FastAPI chatbot backend server',
        'Integrated RAG and served as AI/ML engineering lead',
      ],
      ko: [
        'Penn State 웹사이트 데이터 크롤링 및 Q/A 데이터셋 구축',
        'Phi-3 기반 LLM 파인튜닝 수행 및 학습 데이터 정제',
        'FastAPI 기반 챗봇 백엔드 서버 개발',
        'RAG 시스템 연동 및 AI/ML 엔지니어링 리드 역할 수행',
      ],
    },
    outcomes: {
      en: [
        'Collected about 57,000 webpages and generated 200,000 Q/A pairs',
        'Built a high-quality training dataset of 90,000 entries',
        'Implemented an AI chatbot for university information Q&A',
      ],
      ko: [
        '약 57,000개 웹페이지 수집 및 200,000개 Q/A 데이터 생성',
        '90,000개 고품질 학습 데이터셋 구축',
        '대학 정보 질의응답이 가능한 AI 챗봇 구현',
      ],
    },
    deliverables: [
      {
        label: copy('GitHub Repository', 'GitHub 저장소'),
        url: 'https://github.com/kjk6172/UniGuide',
      },
    ] as ProjectDeliverable[],
  },
  {
    id: '05',
    logoSrc: aidLogo,
    logoAlt: 'AID logo',
    title: copy(
      'AID - AI-Generated Content Verification Website',
      'AID - AI 생성 콘텐츠 검증 웹사이트 개발',
    ),
    organization: copy('People Link One (PLO)', 'People Link One (PLO)'),
    period: copy('Sep 2025 — Dec 2025', '2025.09 — 2025.12'),
    description: copy(
      'Developed a web service that verifies AI-generated images, video, and audio by integrating external detection APIs and deploying the service on AWS.',
      '외부 판별 API와 AWS 배포 환경을 활용해 AI 생성 이미지, 영상, 음원을 검증하는 웹 서비스를 개발했습니다.',
    ),
    roles: {
      en: [
        'Built the website with React.js and TypeScript',
        'Deployed the web service on AWS (S3, DynamoDB, etc.)',
        'Integrated external AI-detection APIs for image, video, and audio verification',
        'Designed the upload and result interface for users',
        'Collaborated with teammates to develop the service end-to-end',
      ],
      ko: [
        'React.js와 TypeScript 기반 웹사이트 개발',
        'AWS 환경을 활용한 웹 서비스 배포 (S3, DynamoDB 등)',
        '외부 AI 판별 API 연동을 통한 이미지·영상·음원 검증 기능 구현',
        '사용자 업로드 및 결과 확인을 위한 UI 설계 및 인터페이스 개발',
        '팀 프로젝트 환경에서 협업을 통한 웹 서비스 개발 수행',
      ],
    },
    outcomes: {
      en: [
        'Delivered a web service for AI-generated content verification',
        'Built AWS-based deployment and operations environment',
        'Implemented upload and analysis flows for image, video, and audio',
      ],
      ko: [
        'AI 생성 콘텐츠 판별 기능을 제공하는 웹 서비스 구현',
        'AWS 기반 배포 및 운영 환경 구축',
        '이미지·영상·음원 업로드 및 분석 기능 개발',
      ],
    },
    deliverables: [
      {
        label: copy('Live Website', '배포 사이트'),
        url: 'https://aid-proto.vercel.app/',
      },
    ] as ProjectDeliverable[],
  },
]

const stackGroups = [
  {
    title: copy('Programming Languages', '프로그래밍 언어'),
    items: {
      en: [
        'Python',
        'Dart (Flutter)',
        'Java',
        'C',
        'JavaScript',
        'TypeScript',
        'SQL',
        'Verilog',
        'MIPS Assembly',
      ],
      ko: [
        'Python',
        'Dart (Flutter)',
        'Java',
        'C',
        'JavaScript',
        'TypeScript',
        'SQL',
        'Verilog',
        'MIPS Assembly',
      ],
    },
  },
  {
    title: copy('Frontend / Mobile Development', '프론트엔드 / 모바일 개발'),
    items: {
      en: [
        'Flutter (iOS / Android)',
        'React.js',
        'HTML / CSS',
        'UI/UX',
        'App Store Deployment',
      ],
      ko: [
        'Flutter (iOS / Android)',
        'React.js',
        'HTML / CSS',
        'UI/UX',
        'App Store 배포',
      ],
    },
  },
  {
    title: copy('Backend / Server', '백엔드 / 서버'),
    items: {
      en: [
        'FastAPI (Python)',
        'Firebase',
        'AWS (S3, DynamoDB, etc.)',
        'Authentication',
        'Firestore / Realtime Database',
        'Notifications',
        'REST API',
      ],
      ko: [
        'FastAPI (Python)',
        'Firebase',
        'AWS (S3, DynamoDB 등)',
        'Authentication',
        'Firestore / Realtime DB',
        'Notifications',
        'REST API',
      ],
    },
  },
  {
    title: copy('Machine Learning / AI', '머신러닝 / AI'),
    items: {
      en: [
        'PyTorch',
        'Hugging Face Transformers',
        'CUDA',
        'LoRA / QLoRA Fine-tuning',
        'bitsandbytes (quantization)',
        'LLM Fine-tuning',
        'Dataset (Q/A pair generation)',
        'RAG',
        'Ollama (local LLM)',
        'Apple MLX / MPS',
      ],
      ko: [
        'PyTorch',
        'Hugging Face Transformers',
        'CUDA',
        'LoRA / QLoRA 파인튜닝',
        'bitsandbytes (양자화)',
        'LLM 파인튜닝',
        '데이터셋 (Q/A pair 생성)',
        'RAG',
        'Ollama (로컬 LLM)',
        'Apple MLX / MPS',
      ],
    },
  },
  {
    title: copy('Data Engineering / Crawling', '데이터 엔지니어링 / 크롤링'),
    items: {
      en: [
        'BeautifulSoup',
        'Scrapy',
        'Web Crawling',
        'JSONL dataset generation and preprocessing',
      ],
      ko: [
        'BeautifulSoup',
        'Scrapy',
        '웹 크롤링',
        'JSONL 데이터셋 생성 및 전처리',
      ],
    },
  },
  {
    title: copy('Database / Storage', '데이터베이스 / 스토리지'),
    items: {
      en: ['PostgreSQL', 'PostGIS', 'pgAdmin', 'Derby DB (Java DB)', 'Firebase Database'],
      ko: ['PostgreSQL', 'PostGIS', 'pgAdmin', 'Derby DB (Java DB)', 'Firebase Database'],
    },
  },
  {
    title: copy('DevOps / Deployment', '데브옵스 / 배포'),
    items: {
      en: [
        'Docker',
        'AWS EC2',
        'Vast.ai (GPU servers)',
        'SSH / Remote Server',
        'GitHub / GitLab CI/CD',
      ],
      ko: [
        'Docker',
        'AWS EC2',
        'Vast.ai (GPU 서버)',
        'SSH / Remote Server',
        'GitHub / GitLab CI/CD',
      ],
    },
  },
  {
    title: copy('Robotics / Simulation', '로보틱스 / 시뮬레이션'),
    items: {
      en: ['ROS2', 'MATLAB', 'Simulink', 'RoadRunner', 'Pixhawk'],
      ko: ['ROS2', 'MATLAB', 'Simulink', 'RoadRunner', 'Pixhawk'],
    },
  },
  {
    title: copy('Tools / Environment', '도구 / 환경'),
    items: {
      en: [
        'VSCode',
        'NetBeans (Java GUI)',
        'WSL2 (Ubuntu 22.04)',
        'QGIS',
        'Linux (Ubuntu)',
        'macOS / Windows dual environment',
      ],
      ko: [
        'VSCode',
        'NetBeans (Java GUI)',
        'WSL2 (Ubuntu 22.04)',
        'QGIS',
        'Linux (Ubuntu)',
        'macOS / Windows 듀얼 환경',
      ],
    },
  },
]

const militaryService = {
  title: copy('Military Service', '군복무'),
  branch: copy('Republic of Korea Air Force', '대한민국 공군'),
  detail: copy('Sergeant, completed mandatory service', '병장 만기제대'),
  period: '2022.09 — 2024.06',
}

function App() {
  const [locale, setLocale] = useState<Locale>('en')
  const [activeTab, setActiveTab] = useState<TabId>('overview')
  const overviewSectionRef = useRef<HTMLElement | null>(null)
  const projectsSectionRef = useRef<HTMLElement | null>(null)
  const stackSectionRef = useRef<HTMLElement | null>(null)

  const t = (value: LocalizedText) => value[locale]

  const getSectionElement = (tabId: TabId) => {
    if (tabId === 'overview') {
      return overviewSectionRef.current
    }

    if (tabId === 'projects') {
      return projectsSectionRef.current
    }

    return stackSectionRef.current
  }

  const handleTabClick = (tabId: TabId) => {
    setActiveTab(tabId)

    const section = getSectionElement(tabId)
    if (!section) {
      return
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    section.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    })
  }

  useEffect(() => {
    document.documentElement.lang = locale
    document.title =
      locale === 'en'
        ? 'Kiseong Kim Portfolio'
        : '김기성 포트폴리오'
  }, [locale])

  useEffect(() => {
    const updateActiveTabByScroll = () => {
      const viewportAnchor = window.scrollY + 220
      let nextActiveTab: TabId = 'overview'

      for (const item of navigation) {
        const section = getSectionElement(item.id)
        if (!section) {
          continue
        }

        if (section.offsetTop <= viewportAnchor) {
          nextActiveTab = item.id
        }
      }

      setActiveTab((currentTab) =>
        currentTab === nextActiveTab ? currentTab : nextActiveTab,
      )
    }

    updateActiveTabByScroll()
    window.addEventListener('scroll', updateActiveTabByScroll, { passive: true })
    window.addEventListener('resize', updateActiveTabByScroll)

    return () => {
      window.removeEventListener('scroll', updateActiveTabByScroll)
      window.removeEventListener('resize', updateActiveTabByScroll)
    }
  }, [locale])

  return (
    <div className="app-shell">
      <header className="site-header">
        <a
          className="brand"
          href="#overview"
          aria-label={locale === 'en' ? 'Kiseong Kim home' : '김기성 홈'}
        >
          <span className="brand__dot" aria-hidden="true" />
          <span className="brand__name">{locale === 'en' ? 'Kiseong Kim' : '김기성'}</span>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`site-nav__tab ${activeTab === item.id ? 'is-active' : ''}`}
              onClick={() => handleTabClick(item.id)}
            >
              {t(item.label)}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <div className="language-toggle" aria-label="Language toggle">
            <button
              type="button"
              className={locale === 'ko' ? 'is-active' : undefined}
              onClick={() => setLocale('ko')}
              aria-pressed={locale === 'ko'}
            >
              한국어
            </button>
            <button
              type="button"
              className={locale === 'en' ? 'is-active' : undefined}
              onClick={() => setLocale('en')}
              aria-pressed={locale === 'en'}
            >
              ENG
            </button>
          </div>
        </div>
      </header>

      <main className="site-main">
        <section ref={overviewSectionRef} id="overview" className="section-card section-anchor">
          <div className="hero-layout">
            <article className="profile-panel">
              <div className="profile-photo-frame">
                <img src={profilePhoto} alt="Portrait of Kiseong Kim" />
              </div>
            </article>

            <article className="hero-copy">
              <div className="hero-copy__main">
                <h1 className="hero-title">
                {locale === 'en'
                  ? (
                      <>
                        Building AI, systems, and software
                        <br />
                        that turn real user problems
                        <br />
                        into real-world solutions.
                      </>
                    )
                  : (
                      <>
                        사용자 문제를 실제 서비스로
                        <br />
                        해결하는 AI·시스템·<span className="nowrap">소프트웨어</span>
                        <br />
                        엔지니어로 성장하고자 합니다.
                      </>
                    )}
              </h1>
              <p className="hero-summary">
                {locale === 'en'
                  ? 'I focus on taking ideas from concept to production—designing, building, and deploying end-to-end systems that deliver real value to users through data, APIs, and scalable infrastructure.'
                  : '아이디어를 실제 서비스로 구현하는 전 과정을 경험하며, 데이터와 API, 배포와 사용자 전달까지 이어지는 완성도 높은 제품을 만드는 데 집중합니다.'}
              </p>

                <div className="profile-list profile-list--hero">
                  {profileItems.map((item) => {
                    const key = Array.isArray(item.value) ? item.value.join('-') : item.value
                    const isStaticItem =
                      item.href.startsWith('tel:') || item.href.startsWith('mailto:')

                    const content = (
                      <>
                        <span className="profile-item__label">{t(item.label)}</span>
                        <strong>
                          {Array.isArray(item.value) ? (
                            item.value.map((line) => (
                              <span key={line} className="profile-item__line">
                                {line}
                              </span>
                            ))
                          ) : (
                            item.value
                          )}
                        </strong>
                      </>
                    )

                    if (isStaticItem) {
                      return (
                        <div key={key} className="profile-item profile-item--static">
                          {content}
                        </div>
                      )
                    }

                    return (
                      <a
                        key={key}
                        className="profile-item"
                        href={item.href}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {content}
                      </a>
                    )
                  })}
                </div>
              </div>

              <div className="hero-resume-card">
                <a className="resume-link" href={resumePdf} download="Kiseong_Kim_Resume.pdf">
                  {locale === 'en' ? 'Download Resume PDF' : '이력서 PDF 다운로드'}
                </a>
                <div className="resume-preview-frame">
                  <iframe
                    src={`${resumePdf}#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH`}
                    title="Kiseong Kim resume preview (hero)"
                    loading="lazy"
                  />
                </div>
              </div>
            </article>
          </div>

          <div className="overview-meta">
            <article className="info-card">
              <p className="section-label">{locale === 'en' ? 'Education' : '학력'}</p>
              <div className="info-card__body">
                <h2>Pennsylvania State University</h2>
                <div className="info-card__row">
                  <span>{locale === 'en' ? 'Major' : '전공'}</span>
                  <strong>Computer Science</strong>
                </div>
                <p>College of Engineering</p>
                <p>{locale === 'en' ? 'Expected Graduation: 2026.12' : '졸업 예정: 2026.12'}</p>
              </div>
            </article>

            <article className="info-card">
              <p className="section-label">{t(militaryService.title)}</p>
              <div className="info-card__body">
                <h2>{t(militaryService.branch)}</h2>
                <p>
                  {locale === 'en'
                    ? `Duration: ${militaryService.period}`
                    : `복무 기간: ${militaryService.period}`}
                </p>
              </div>
            </article>
          </div>
        </section>

        <section
          ref={projectsSectionRef}
          id="projects"
          className="section-card section-anchor projects-section"
        >
          <div className="section-head">
            <h2>{locale === 'en' ? 'Projects' : '프로젝트'}</h2>
          </div>

          <div className="timeline-list">
            {projectTimeline.map((project) => (
              <article className="timeline-project" key={project.id}>
                <div className="timeline-project__rail">
                  <div className="timeline-project__logo-slot">
                    <img
                      className="timeline-project__logo-image"
                      src={project.logoSrc}
                      alt={project.logoAlt}
                      loading="lazy"
                    />
                  </div>
                  <span className="timeline-project__dot" aria-hidden="true" />
                </div>

                <div className="timeline-project__body">
                  <div className="timeline-project__meta">
                    <div>
                      <p className="timeline-project__org">{t(project.organization)}</p>
                      <h3>{t(project.title)}</h3>
                    </div>
                    <p className="timeline-project__period">{t(project.period)}</p>
                  </div>

                  <p className="timeline-project__description">{t(project.description)}</p>

                  <div className="timeline-project__sections">
                    <section className="timeline-project__section">
                      <h4>{locale === 'en' ? 'Key Roles' : '주요 역할'}</h4>
                      <ul>
                        {project.roles[locale].map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </section>

                    <section className="timeline-project__section">
                      <h4>{locale === 'en' ? 'Outcomes' : '업무 성과'}</h4>
                      <ul>
                        {project.outcomes[locale].map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </section>
                  </div>

                  {project.deliverables.length > 0 ? (
                    <section className="timeline-project__deliverables">
                      <h4>{locale === 'en' ? 'Project Results' : '프로젝트 결과물'}</h4>
                      <ul className="timeline-project__deliverable-list">
                        {project.deliverables.map((item, index) => (
                          <li key={`${project.id}-${item.label.en}-${index}`}>
                            {item.url ? (
                              <a
                                className="timeline-project__deliverable-link"
                                href={item.url}
                                target="_blank"
                                rel="noreferrer noopener"
                              >
                                <span className="timeline-project__deliverable-name">
                                  {t(item.label)}
                                </span>
                                <span className="timeline-project__deliverable-url">
                                  {item.url.replace(/^https?:\/\//, '')}
                                </span>
                              </a>
                            ) : (
                              <div className="timeline-project__deliverable-note">
                                <span className="timeline-project__deliverable-name">
                                  {t(item.label)}
                                </span>
                                <span className="timeline-project__deliverable-text">
                                  {item.note ? t(item.note) : ''}
                                </span>
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </section>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section ref={stackSectionRef} id="stack" className="section-card section-anchor">
          <div className="section-head">
            <h2>{locale === 'en' ? 'Tech Stack' : '기술 스텍'}</h2>
          </div>

          <div className="stack-grid">
            {stackGroups.map((group) => (
              <article className="stack-card" key={group.title.en}>
                <div className="stack-card__header">
                  <h3>{t(group.title)}</h3>
                  <p className="stack-card__count">
                    {locale === 'en'
                      ? `${group.items.en.length} items`
                      : `${group.items.ko.length}개 항목`}
                  </p>
                </div>
                <ul className="stack-card__items">
                  {group.items[locale].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
