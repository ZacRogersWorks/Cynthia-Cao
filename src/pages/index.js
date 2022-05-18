// Dependencies
import React, { useEffect } from "react"
import '../sass/styles.scss';
import { Helmet } from 'react-helmet'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";

// Lists
import { ANIMATION_VARIANTS } from "../components/ANIMATION_VARIANTS";

// Components
import PhotoWall from '../components/PhotoWall'
import Video from '../components/Video'
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
      interestsControls.start("show")
    }
  }, [interestsControls, interestsInView])

  // Audio Players scroll animation\
  const audioPlayerControls = useAnimation();
  const [audioPlayerMotionRef, playersInView] = useInView();
  useEffect(() => {
    if (playersInView) {
      audioPlayerControls.start("show")
    }
  }, [audioPlayerControls, playersInView])


  return (
    <>
      <div className="test-strip"></div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cynthia Cao | Artist, Investor, Entrepreneur</title>
        <meta name="description" content="
            As a music industry professional for 6 years, I have worked in event planning, artist management, and as a musician and artist myself. Now I am full-time dedicated to Starseed DAO, where I am building a parallel music industry on-chain in the metaverse.
      " />
        <link rel="canonical" href="http://cynthiacao.xyz" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="Cynthia Cao | Artist, Investor, Entrepreneur" />
        <meta property="og:url" content="https://cynthiacao.xyz" />
        <meta property="og:url" content="https://cynthiacao.xyz/og-meta.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="As a music industry professional for 6 years, I have worked in event planning, artist management, and as a musician and artist myself. Now I am full-time dedicated to Starseed DAO, where I am building a parallel music industry on-chain in the metaverse." />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>
      <HeroBackground />
      <main className="main">
        <section className="about">
          <motion.div className="about__sticky"
            variants={ANIMATION_VARIANTS.heading}
            initial="hidden"
            animate="show"
          >
            <motion.h1 className="header--primary" variants={ANIMATION_VARIANTS.heading}>
              Hi, my name is <span className="rainbow">Cynthia</span>🦄
            </motion.h1>
            <motion.p className="about-tagline" variants={ANIMATION_VARIANTS.heading}>I am an artist, investor, entrepreneur <br />that crazy builder in Web3 Music</motion.p>
          </motion.div>
          <motion.div className="about-row"
            variants={ANIMATION_VARIANTS.about}
            initial="hidden"
            animate="show"
          >
            <motion.div className="about-text" variants={ANIMATION_VARIANTS.about}>
              <p>As a music industry veteran, I have worked in event planning, artist management, and as a musician and artist myself.</p>

              <p>Aside from my entertainment experiences, I have been working as an investor with a family office background and led investments ranging from early blockchain protocols to pre-IPO tech companies.</p>

              <p>Now I am full-time dedicated to Starseed DAO, where I am building a parallel music industry on-chain in the metaverse.</p>
            </motion.div>
            <div className="col-spacer"></div>
            <motion.aside className="quote" variants={ANIMATION_VARIANTS.about}>
              <p>
                "My life mission is to help with earth's ascension and humanity's collective consciousness to rise above to achieve interstellar civilization."
              </p>
              <SocialLinks />
            </motion.aside>
          </motion.div>
          <motion.div className="interests"
            variants={ANIMATION_VARIANTS.interests}
            initial="hidden"
            animate={interestsControls}
            ref={interestsMotionRef}
          >
            <motion.div className="interests__col" variants={ANIMATION_VARIANTS.interests}>
              <span>✨</span>
              <h3 className="interests__header">
                My Interests
              </h3>
              <p>
                Music, Blockchain, Metaverse, NFTs, DAOs, Defi, Artificial Intelligence, Neuroscience
              </p>
            </motion.div>
            <motion.div className="interests__col"
              variants={ANIMATION_VARIANTS.interests}>
              <span>💭</span>
              <h3 className="interests__header">
                My Thoughts
              </h3>
              <a href="https://medium.com/@ccisdreaming" className="color-text" target="_blank">
                Read my Medium articles
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 27 27">
                  <path id="Icon_material-open-in-new" data-name="Icon material-open-in-new" d="M28.5,28.5H7.5V7.5H18v-3H7.5a3,3,0,0,0-3,3v21a3,3,0,0,0,3,3h21a3.009,3.009,0,0,0,3-3V18h-3ZM21,4.5v3h5.385L11.64,22.245l2.115,2.115L28.5,9.615V15h3V4.5Z" transform="translate(-4.5 -4.5)" />
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
          <motion.div className="speaking-section__audio-players"
            variants={ANIMATION_VARIANTS.audioPlayerContainer}
            initial="hidden"
            animate={audioPlayerControls}
            ref={audioPlayerMotionRef}
          >
            <motion.div className="player"
              variants={ANIMATION_VARIANTS.audioPlayerOne}
            >
              <AudioPlayer
                title="SXSW Panel"
                src='https://www.mfiles.co.uk/mp3-downloads/Toccata-and-Fugue-Dm.mp3'
              />
              <p className="player__caption">SXSW Panel</p>
            </motion.div>
            <div className="player__border"></div>
            <motion.div className="player player--reverse"
              variants={ANIMATION_VARIANTS.audioPlayerTwo}
            >
              <AudioPlayer
                title="Solana Hacker House Panel"
                src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8ab52cf3-0fe6-40a7-a380-c68c7e4dc710/Artists__Curators_in_the_Evolving_NFT_Landscape.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220513T223702Z&X-Amz-Expires=86400&X-Amz-Signature=415111c9601ae16ae4a1a2accb3f43806cf8bcca3d90bce74eb11f26030a8f8d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Artists%2520%2526%2520Curators%2520in%2520the%2520Evolving%2520NFT%2520Landscape.mp3%22&x-id=GetObject'
              />
              <p className="player__caption">
                Solana Hacker<br /> House Panel
              </p>
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
        <p>
          &copy;2022 ccisdreaming. All right reserved.
        </p>
      </footer>
    </>
  )
}

export default IndexPage
