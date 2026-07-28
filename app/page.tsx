"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"

const buildSteps = [
  {
    name: "Frame",
    description: "Find the real constraint.",
  },
  {
    name: "Build",
    description: "Ship the whole system.",
  },
  {
    name: "Verify",
    description: "Prove that it works.",
  },
]

const projects = [
  {
    number: "01",
    name: "Appfi",
    kicker: "Founder · Product · Engineering",
    description:
      "The assistant you text. It remembers the context, does real work, and checks the result before it says done.",
    href: "https://appfi.dev",
    cta: "Meet Appfi",
    tags: ["iMessage + SMS", "AI systems", "2026"],
    visual: "appfi",
  },
  {
    number: "02",
    name: "SwiftSign",
    kicker: "Product · Full-stack · Infrastructure",
    description:
      "A calmer agreement workflow that brings contract analysis, e-signatures, and an audit trail into one place.",
    href: "https://www.swiftsign.ca",
    cta: "Open SwiftSign",
    tags: ["Web product", "AI + e-sign", "2025"],
    visual: "swiftsign",
  },
  {
    number: "03",
    name: "Scoli + MyBackPal",
    kicker: "iOS · Product · App Store",
    description:
      "Two native iPhone products for back health, taken from the first build through production and App Store review.",
    href: "https://apps.apple.com/ca/app/scoli-manage-scoliosis/id6741025066",
    secondaryHref: "https://apps.apple.com/ca/app/mybackpal-healthier-backs/id6744826935",
    cta: "View Scoli",
    secondaryCta: "View MyBackPal",
    tags: ["Native iOS", "Health + habits", "2025"],
    visual: "health",
  },
]

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

function ProjectVisual({ type }: { type: string }) {
  if (type === "appfi") {
    return (
      <div className="project-visual appfi-visual" aria-hidden="true">
        <div className="message-window">
          <div className="message-window__bar">
            <span />
            <span>Appfi</span>
            <span>•••</span>
          </div>
          <div className="message message--sent">remind me to send that proposal friday</div>
          <div className="message message--received">set for friday at 9am</div>
          <div className="message-proof">
            <span className="proof-dot" />
            reminder verified
          </div>
        </div>
        <span className="visual-stamp">TEXT → WORK</span>
      </div>
    )
  }

  if (type === "swiftsign") {
    return (
      <div className="project-visual swiftsign-visual" aria-hidden="true">
        <div className="document-sheet document-sheet--back">
          <span />
          <span />
          <span />
        </div>
        <div className="document-sheet document-sheet--front">
          <div className="document-mark">S</div>
          <strong>Agreement ready</strong>
          <span />
          <span />
          <div className="signature-line">signed ✓</div>
        </div>
        <div className="audit-chip">AUDIT TRAIL · 04/04</div>
      </div>
    )
  }

  return (
    <div className="project-visual health-visual" aria-hidden="true">
      <div className="phone phone--left">
        <div className="phone-island" />
        <span className="phone-label">SCOLI</span>
        <strong>78%</strong>
        <span className="phone-caption">weekly habits</span>
        <div className="phone-meter">
          <span />
        </div>
      </div>
      <div className="phone phone--right">
        <div className="phone-island" />
        <span className="phone-label">BACKPAL</span>
        <div className="posture-orbit">
          <span />
        </div>
        <span className="phone-caption">posture check</span>
      </div>
      <span className="visual-stamp visual-stamp--light">2× APP STORE</span>
    </div>
  )
}

export default function Portfolio() {
  const [activeStep, setActiveStep] = useState(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return

    const timer = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % buildSteps.length)
    }, 2600)

    return () => window.clearInterval(timer)
  }, [reduceMotion])

  const advanceLoop = () => {
    setActiveStep((current) => (current + 1) % buildSteps.length)
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div className="site-shell">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Shahdad Kompani, home">
            SK<span className="wordmark-dot">.</span>
          </a>

          <nav className="site-nav" aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="mailto:shahdad@appfi.dev">Contact</a>
          </nav>

          <div className="availability">
            <span className="availability-dot" />
            Building in Waterloo
          </div>
        </header>

        <main id="main">
          <section className="hero" id="top">
            <motion.div
              className="hero-copy"
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.09 } },
              }}
            >
              <motion.p className="eyebrow" variants={reveal}>
                Shahdad Kompani · Founder + engineer
              </motion.p>
              <motion.h1 variants={reveal}>
                I build useful
                <br />
                software.
                <br />
                <span>Unreasonably fast.</span>
              </motion.h1>
              <motion.div className="hero-bottom" variants={reveal}>
                <p>
                  Building <a href="https://appfi.dev">Appfi</a>, shipping products, and studying
                  engineering at the University of Waterloo.
                </p>
                <a className="circle-link" href="#work" aria-label="See selected work">
                  <ArrowDownRight aria-hidden="true" />
                </a>
              </motion.div>
            </motion.div>

            <motion.aside
              className="build-panel"
              initial={reduceMotion ? false : { opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <button className="build-loop" type="button" onClick={advanceLoop}>
                <span className="build-loop__top">
                  <span>Build loop</span>
                  <span>Tap to advance ↗</span>
                </span>
                <span className="build-loop__number">0{activeStep + 1}</span>
                <span className="build-loop__content" aria-live="polite">
                  <strong>{buildSteps[activeStep].name}</strong>
                  <span>{buildSteps[activeStep].description}</span>
                </span>
                <span className="build-loop__steps" aria-hidden="true">
                  {buildSteps.map((step, index) => (
                    <span key={step.name} className={index === activeStep ? "is-active" : ""}>
                      {step.name}
                    </span>
                  ))}
                </span>
              </button>

              <div className="identity-grid">
                <div>
                  <span>Now</span>
                  <strong>Building Appfi</strong>
                </div>
                <div>
                  <span>Based</span>
                  <strong>Waterloo, CA</strong>
                </div>
                <div>
                  <span>Mode</span>
                  <strong>Founder / Eng.</strong>
                </div>
                <div>
                  <span>Off-screen</span>
                  <strong>Probably biking</strong>
                </div>
              </div>
            </motion.aside>
          </section>

          <div className="signal-strip" aria-label="Current focus">
            <span>PRODUCTS → PRODUCTION</span>
            <span>AI SYSTEMS</span>
            <span>NATIVE iOS</span>
            <span>FULL-STACK</span>
          </div>

          <section className="work-section" id="work">
            <div className="section-heading">
              <p className="eyebrow">Selected work · 2025—2026</p>
              <h2>Ideas are cheap.<br />Shipped work is not.</h2>
              <p>
                Products where I owned the hard parts, from the first sketch to the production
                system behind it.
              </p>
            </div>

            <div className="project-list">
              {projects.map((project, index) => (
                <motion.article
                  className={`project project--${project.visual}`}
                  key={project.name}
                  initial={reduceMotion ? false : { opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="project-copy">
                    <div className="project-index">
                      <span>{project.number}</span>
                      <span>{project.kicker}</span>
                    </div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.href} target="_blank" rel="noreferrer">
                        {project.cta}
                        <ArrowUpRight aria-hidden="true" />
                      </a>
                      {"secondaryHref" in project && project.secondaryHref ? (
                        <a href={project.secondaryHref} target="_blank" rel="noreferrer">
                          {project.secondaryCta}
                          <ArrowUpRight aria-hidden="true" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                  <ProjectVisual type={project.visual} />
                </motion.article>
              ))}
            </div>
          </section>

          <section className="about-section" id="about">
            <div className="about-statement">
              <p className="eyebrow">A little context</p>
              <h2>
                I like the distance between
                <span> “this should exist” </span>
                and
                <span> “it does” </span>
                to be short.
              </h2>
            </div>

            <div className="about-details">
              <p>
                I&apos;m Shahdad, a founder and engineer in Waterloo, Canada. I work across product,
                code, infrastructure, and the strange last mile that turns a demo into something
                people can actually use.
              </p>

              <dl className="fact-list">
                <div>
                  <dt>Currently</dt>
                  <dd>Founder, Appfi</dd>
                </div>
                <div>
                  <dt>Studying</dt>
                  <dd>Engineering, University of Waterloo</dd>
                </div>
                <div>
                  <dt>Recognized</dt>
                  <dd>Norman Esch Enterprise Co-op Award, 2025</dd>
                </div>
              </dl>

              <div className="affiliations">
                <span>Community</span>
                <a
                  href="https://velocityincubator.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="University of Waterloo and Velocity"
                >
                  <img
                    src="/uw-velocity-logo.png"
                    alt="University of Waterloo and Velocity"
                    width="483"
                    height="67"
                  />
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="footer-cta">
            <p className="eyebrow">Have something real to build?</p>
            <a href="mailto:shahdad@appfi.dev">
              Let&apos;s talk.
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Shahdad Kompani</span>
            <div className="social-links">
              <a href="mailto:shahdad@appfi.dev" aria-label="Email Shahdad">
                <Mail aria-hidden="true" />
              </a>
              <a
                href="https://github.com/shahdadk"
                target="_blank"
                rel="noreferrer"
                aria-label="Shahdad on GitHub"
              >
                <Github aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com/in/shahdadk"
                target="_blank"
                rel="noreferrer"
                aria-label="Shahdad on LinkedIn"
              >
                <Linkedin aria-hidden="true" />
              </a>
            </div>
            <a href="#top">Back to top ↑</a>
          </div>
        </footer>
      </div>
    </>
  )
}
