// Dependencies
import React, { useEffect } from "react";
import "../sass/styles.scss";
import { Helmet } from "react-helmet";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Lists
import { ANIMATION_VARIANTS } from "../components/ANIMATION_VARIANTS";

// Components
import PhotoWall from "../components/PhotoWall";
import Video from "../components/Video";
import HeroBackground from "../components/HeroBackground";
import FooterBackground from "../components/FooterBackground";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";
import SocialLinks from "../components/SocialLinks";
import Press from "../components/Press";
import ContactForm from "../components/ContactForm";

// markup
const IndexPage = () => {
  //Interests scroll aniamtion
  const interestsControls = useAnimation();
  const [interestsMotionRef, interestsInView] = useInView();

  useEffect(() => {
    if (interestsInView) {
      interestsControls.start("show");
    }
  }, [interestsControls, interestsInView]);

  // Audio Players scroll animation\
  const audioPlayerControls = useAnimation();
  const [audioPlayerMotionRef, playersInView] = useInView();
  useEffect(() => {
    if (playersInView) {
      audioPlayerControls.start("show");
    }
  }, [audioPlayerControls, playersInView]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cynthia Cao | Artist, Investor, Entrepreneur</title>
        <meta
          name="description"
          content="
            As a music industry professional for 6 years, I have worked in event planning, artist management, and as a musician and artist myself. Now I am full-time dedicated to Starseed DAO, where I am building a parallel music industry on-chain in the metaverse.
      "
        />
        <link rel="canonical" href="https://cynthiacao.xyz" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          property="og:title"
          content="Cynthia Cao | Artist, Investor, Entrepreneur"
        />
        <meta property="og:url" content="https://cynthiacao.xyz" />
        <meta property="og:url" content="https://cynthiacao.xyz/og-meta.jpg" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="As a music industry professional for 6 years, I have worked in event planning, artist management, and as a musician and artist myself. Now I am full-time dedicated to Starseed DAO, where I am building a parallel music industry on-chain in the metaverse."
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>
      <HeroBackground />
      <main className="main">
        <section className="about">
          <motion.div
            className="about__sticky"
            variants={ANIMATION_VARIANTS.heading}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              className="header--primary"
              variants={ANIMATION_VARIANTS.heading}
            >
              Hi, my name is <span className="rainbow">Cynthia</span>🦄
            </motion.h1>
            <motion.p
              className="about-tagline"
              variants={ANIMATION_VARIANTS.heading}
            >
              I am an artist, investor, entrepreneur, <br />
              & builder in the intersection of creator economy & Web3
            </motion.p>
          </motion.div>
          <motion.div
            className="about-row"
            variants={ANIMATION_VARIANTS.about}
            initial="hidden"
            animate="show"
          >
            <motion.div
              className="about-text"
              variants={ANIMATION_VARIANTS.about}
            >
              <p>
              As an entertainment industry veteran, it's my dream to help all content creators to make a living by doing what they love to do.<br/>
              That's why I started STARSEED, the operating system for the true creator economy, built-in Web3

              </p>

              <p>
              STARSEED is built upon one core thesis: We cannot talk about the Creator Economy without Creator Ownership. <br/>

Through STARSEED, we aim to give freedom of distribution and monetization back to creators, so they can become self-sovereign creators and have control over their careers. 

              </p>

              <p>
              When I'm not working on STARSEED, I ponder upon the future of human evolution and the next step in human existence. <br/>
              Love a fruitful conversation on topics in Singularity, Human-Computer Interface, Meditation, AI & Super Intelligence, Crypto Nation, Metaverse, mystic experiences, and Hyperstructure.
              </p>
            </motion.div>
            <div className="col-spacer"></div>
            <motion.aside className="quote" variants={ANIMATION_VARIANTS.about}>
              <p>
                "My life mission is to help with earth's ascension and
                humanity's collective consciousness to rise above to achieve
                interstellar civilization."
              </p>
              <SocialLinks />
            </motion.aside>
          </motion.div>
          <motion.div
            className="interests"
            variants={ANIMATION_VARIANTS.interests}
            initial="hidden"
            animate={interestsControls}
            ref={interestsMotionRef}
          >
            <motion.div
              className="interests__col"
              variants={ANIMATION_VARIANTS.interests}
            >
              <span>✨</span>
              <h3 className="interests__header">My Interests</h3>
              <p>
                Music, Blockchain, Metaverse, NFTs, DAOs, Defi, Artificial
                Intelligence, Neuroscience
              </p>
            </motion.div>
            <motion.div
              className="interests__col"
              variants={ANIMATION_VARIANTS.interests}
            >
              <span>💭</span>
              <h3 className="interests__header">My Thoughts</h3>
              <a
                href="https://medium.com/@ccisdreaming"
                className="color-text"
                rel="noreferrer"
                target="_blank"
              >
                Read my Medium articles
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 27 27"
                >
                  <path
                    id="Icon_material-open-in-new"
                    data-name="Icon material-open-in-new"
                    d="M28.5,28.5H7.5V7.5H18v-3H7.5a3,3,0,0,0-3,3v21a3,3,0,0,0,3,3h21a3.009,3.009,0,0,0,3-3V18h-3ZM21,4.5v3h5.385L11.64,22.245l2.115,2.115L28.5,9.615V15h3V4.5Z"
                    transform="translate(-4.5 -4.5)"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </section>
        <section className="media-section">
          <PhotoWall />
        </section>
        <section className="speaking-section">
          <Video />
          <motion.div
            className="speaking-section__audio-players"
            variants={ANIMATION_VARIANTS.audioPlayerContainer}
            initial="hidden"
            animate={audioPlayerControls}
            ref={audioPlayerMotionRef}
          >
            <motion.div
              className="player"
              variants={ANIMATION_VARIANTS.audioPlayerOne}
            >
              <AudioPlayer
                title="SXSW Panel"
                src="https://w.soundcloud.com/player/?url=https://soundcloud.com/ccisdreaming/artists-curators-in-the-evolving-nft-landscape&amp;"
              />
              <p className="player__caption">SXSW Panel</p>
            </motion.div>
          </motion.div>
        </section>
        <div className="contact-press-container">
          <section className="press-section">
            <Press />
          </section>
          <section className="contact-section">
            <ContactForm />
            <div className="social-links-container">
              <SocialLinks otherClasses="social-icons--footer" />
            </div>
          </section>
        </div>
      </main>
      <footer>
        <FooterBackground />
        <p>&copy;2022 ccisdreaming. All right reserved.</p>
      </footer>
    </>
  );
};

export default IndexPage;
