// Dependencies
import React, { useEffect } from "react";
import "../sass/styles.scss";
import { Helmet } from "react-helmet";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { StaticImage } from "gatsby-plugin-image";

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
              I am an artist, entrepreneur,
 <br />& builder for the Open Metaverse

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
              Everything I do is to fulfill my mission in this lifetime on Earth, which is to help humanity transcend from 3D to 5D reality (aka the metaverse)

                <br />
                I created CCisDreaming, my metaverse alter ego, to embody the unlimited potential I didn't dare to embrace. She came back and empowered me to step into my mission and found <a href="https://www.starseed.io/" target="_blank">STARSEED</a>, helping others create their own Metaverse personas.

              </p>

              <p>
                
When I'm not reshaping reality, catch me meditating, practicing yoga, exploring metaphysics, jamming to cool tunes, or working out. Let's co-create our metaverse destinies together! 🚀

              </p>
            </motion.div>
            <div className="col-spacer"></div>
            <motion.aside className="quote" variants={ANIMATION_VARIANTS.about}>
              <p>
                "From physical to digital, from limited being to unlimited potential"
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
              Blockchain, Digital Identity, Brain-Computer-Interface, Singularity, Artificial Intelligence, Quantum Physics, Metaphysics
              </p>
            </motion.div>
            <motion.div
              className="interests__col"
              variants={ANIMATION_VARIANTS.interests}
            >
              <span className="mirror-logo">
                <StaticImage
                  src="../images/substack-icon.png"
                  alt="CCIsDreaming Substack"
                  placeholder="blurred"
                  layout="fixed"
                  height={36}
                />
              </span>
              <h3 className="interests__header">My Thoughts</h3>
              <a
                href="https://ccisdreaming.substack.com/"
                className="color-text"
                rel="noreferrer"
                target="_blank"
              >
                Subscribe to my Substack
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
