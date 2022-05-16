import * as React from "react"
import '../sass/styles.scss';

import PhotoWall from '../components/PhotoWall'
import Video from '../components/Video'

import { PRESS_LINKS } from "../components/PRESS_LINKS";
import HeroBackground from "../components/HeroBackground";
import FooterBackground from "../components/FooterBackground";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";
import SocialLinks from "../components/SocialLinks";

// markup
const IndexPage = () => {
  return (
    <>
      <main className="main">
        {/* <HeroBackground /> */}
        <section className="about">
          <div className="about__sticky">
            <h1 className="header--primary">Hi, my name is <span className="rainbow">Cynthia</span>🦄
              <br />I am an artist, investor, entrepreneur that crazy builder in Web3 Music</h1>
          </div>
          <div className="about__text">
            <p>As a music industry professional for 6 years, I have worked in event planning, artist management, and as a musician and artist myself.</p>

            <p>Aside from my entertainment experiences, I have been working as an investor with a family office background and led investments ranging from early blockchain protocols to pre-IPO tech companies.</p>

            <p>Now I am full-time dedicated to Starseed DAO, where I am building a parallel music industry on-chain in the metaverse.</p>
          </div>
          <aside className="quote">
            <p>
              "My life mission is to help with earth's ascension and humanity's collective consciousness to rise above to achieve interstellar civilization."
            </p>
            <SocialLinks />
          </aside>
          <div className="interests">
            <div className="interests__col">
              <span>✨</span>
              <h3 className="interests__header">
                My Interests
              </h3>
              <p>
                Music, Blockchain, Metaverse, NFTs, DAOs, Defi, Artificial Intelligence, Neuroscience
              </p>
            </div>
            <div className="interests__col">
              <span>💭</span>
              <h3 className="interests__header">
                My Thoughts
              </h3>
              <a href="https://medium.com/@ccisdreaming" className="color-text" target="_blank">
                https://medium.com/@ccisdreaming
              </a>
            </div>
          </div>
        </section>
        <section className="media-section">
          <div className="heading-container">
            <h2 className="header--primary">Photo Wall</h2>
          </div>
          <PhotoWall />
        </section>
        <section className="speaking-section">
          <div className="heading-container">
            <h2 className="header--primary mt-1">Speaking</h2>
          </div>
          <Video />
          <div className="speaking-section__audio-players">
            <div className="player">
              <AudioPlayer
                title="SXSW Panel"
                src='https://www.mfiles.co.uk/mp3-downloads/Toccata-and-Fugue-Dm.mp3'
              />
              <p className="player__caption">SXSW Panel</p>
            </div>
            <div className="player player--reverse">
              <AudioPlayer
                title="Solana Hacker House Panel"
                src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8ab52cf3-0fe6-40a7-a380-c68c7e4dc710/Artists__Curators_in_the_Evolving_NFT_Landscape.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220513T223702Z&X-Amz-Expires=86400&X-Amz-Signature=415111c9601ae16ae4a1a2accb3f43806cf8bcca3d90bce74eb11f26030a8f8d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Artists%2520%2526%2520Curators%2520in%2520the%2520Evolving%2520NFT%2520Landscape.mp3%22&x-id=GetObject'
              />
              <p className="player__caption">
                Solana Hacker<br /> House Panel
              </p>
            </div>
          </div>
        </section>
        <section className="press-section">
          <div className="heading-container">
            <h2 className="header--primary">Press</h2>
          </div>
          <ul className="press-links">
            {PRESS_LINKS.map(article => {
              return (
                <li key={article.id}>
                  <a className="color-text" href={`${article.link}`}>{article.title}</a>
                </li>
              )
            })}
          </ul>
        </section>
        <section className="contact-section">
          <div className="heading-container">
            <h2 className="header--primary">Contact me</h2>
          </div>
          <form className="contact-form">
            <input type="text" id="name" name="name" placeholder="Enter Name" required></input>
            <input type="email" id="email" name="email" placeholder="Enter E-mail" required></input>
            <textarea id="message" name="message" placeholder="Message..."></textarea>
            <button className="btn" type="submit">Submit</button>
          </form>
          <div className="social-links-container">
            <SocialLinks otherClasses="social-icons--footer" />
          </div>
        </section>
      </main>
      <footer>
        {/* <FooterBackground /> */}
        <p>
          &copy;2022 ccisdreaming. All right reserved.
        </p>
      </footer>
    </>
  )
}

export default IndexPage
