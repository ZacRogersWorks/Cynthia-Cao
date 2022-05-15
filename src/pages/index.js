import * as React from "react"
import '../sass/styles.scss';

import PhotoWall from '../components/PhotoWall'
import Video from '../components/Video'

import { PRESS_LINKS } from "../components/PRESS_LINKS";
import HeroBackground from "../components/HeroBackground";
import FooterBackground from "../components/FooterBackground";

// markup
const IndexPage = () => {
  return (
    <>
      <main className="main">
        <HeroBackground />
        <section className="row">
          <h1 className="header--primary">Hi, my name is <span className="rainbow">Cynthia</span>🦄
          <br />I am an artist, investor, entrepreneur that crazy builder in Web3 Music</h1>
          <div className="row">
            <div className="col about--text">
              <p>As a music industry professional for 6 years, I have worked in event planning, artist management, and as a musician and artist myself.</p>

              <p>Aside from my entertainment experiences, I have been working as an investor with a family office background and led investments ranging from early blockchain protocols to pre-IPO tech companies.</p>

              <p>Now I am full-time dedicated to Starseed DAO, where I am building a parallel music industry on-chain in the metaverse.</p>
            </div>
            <div className="col">
              <aside className="quote">
                <p>
                  "My life mission is to help with earth's ascension and humanity's collective consciousness to rise above to achieve interstellar civilization."<span>👽 🛸</span>
                </p>

                <ul className="social-icons">
                  <svg className="svg-twitter" xmlns="http://www.w3.org/2000/svg" width="32" height="25.99" viewBox="0 0 32 25.99">
                    <path id="Icon_awesome-twitter" data-name="Icon awesome-twitter" d="M28.711,9.858c.02.284.02.569.02.853,0,8.67-6.6,18.66-18.66,18.66A18.533,18.533,0,0,1,0,26.427a13.568,13.568,0,0,0,1.584.081,13.135,13.135,0,0,0,8.142-2.8,6.57,6.57,0,0,1-6.132-4.548,8.27,8.27,0,0,0,1.239.1,6.936,6.936,0,0,0,1.726-.223A6.559,6.559,0,0,1,1.3,12.6v-.081a6.6,6.6,0,0,0,2.964.832,6.568,6.568,0,0,1-2.03-8.772,18.642,18.642,0,0,0,13.523,6.863,7.4,7.4,0,0,1-.162-1.5,6.565,6.565,0,0,1,11.35-4.487,12.912,12.912,0,0,0,4.162-1.584,6.541,6.541,0,0,1-2.883,3.614A13.148,13.148,0,0,0,32,6.467a14.1,14.1,0,0,1-3.289,3.391Z" transform="translate(0 -3.381)" />
                  </svg>
                  <svg className="svg-ig" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <path id="Icon_metro-instagram" data-name="Icon metro-instagram" d="M29.258,1.928H7.883A5.328,5.328,0,0,0,2.571,7.241V28.616a5.328,5.328,0,0,0,5.313,5.312H29.258a5.328,5.328,0,0,0,5.312-5.312V7.241a5.328,5.328,0,0,0-5.312-5.313Zm-16.444,14H24.327a6.094,6.094,0,1,1-11.513,0Zm17.756,0v12a2.006,2.006,0,0,1-2,2h-20a2.006,2.006,0,0,1-2-2v-12H9.7a9.094,9.094,0,1,0,17.743,0Zm0-7a1,1,0,0,1-1,1h-2a1,1,0,0,1-1-1v-2a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Z" transform="translate(-2.571 -1.928)" />
                  </svg>
                  <svg className="svg-medium" xmlns="http://www.w3.org/2000/svg" width="32" height="25.321" viewBox="0 0 32 25.321">
                    <path id="Icon_metro-medium" data-name="Icon metro-medium" d="M34.571,25.91v3.732H23.106V25.91H25.5V9.374h-.107L19.785,29.642H15.446L9.91,9.374H9.767V25.91h2.411v3.732H2.571V25.91H3.8a1.176,1.176,0,0,0,.768-.348.95.95,0,0,0,.393-.67V9.16a1.087,1.087,0,0,0-.393-.714A1.119,1.119,0,0,0,3.8,8.053H2.571V4.321h12l3.946,14.661h.107L22.606,4.321H34.571V8.053H33.3a1.1,1.1,0,0,0-.732.393,1.087,1.087,0,0,0-.393.714V24.892a.955.955,0,0,0,.384.67,1.13,1.13,0,0,0,.741.348Z" transform="translate(-2.571 -4.321)" />
                  </svg>
                  <svg className="svg-linkedin" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <path id="Icon_awesome-linkedin" data-name="Icon awesome-linkedin" d="M29.714,2.25H2.279A2.3,2.3,0,0,0,0,4.557V31.943A2.3,2.3,0,0,0,2.279,34.25H29.714A2.3,2.3,0,0,0,32,31.943V4.557A2.3,2.3,0,0,0,29.714,2.25ZM9.671,29.679H4.929V14.407h4.75V29.679ZM7.3,12.321a2.75,2.75,0,1,1,2.75-2.75,2.751,2.751,0,0,1-2.75,2.75ZM27.45,29.679H22.707V22.25c0-1.771-.036-4.05-2.464-4.05-2.471,0-2.85,1.929-2.85,3.921v7.557H12.65V14.407H17.2v2.086h.064a5,5,0,0,1,4.493-2.464c4.8,0,5.693,3.164,5.693,7.279Z" transform="translate(0 -2.25)" />
                  </svg>
                </ul>
              </aside>
            </div>
          </div>
          <div className="row hero--subsection">
            <div className="col hero--subsection_col">
              <span>✨</span>
              <h3>
                My Interests
              </h3>
              <p>
                Music, Blockchain, Metaverse, NFTs, DAOs, Defi, Artificial Intelligence, Neuroscience
              </p>
            </div>
            <div className="col hero--subsection_col">
              <span>💭</span>
              <h3>
                My Thoughts
              </h3>
              <a href="https://medium.com/@ccisdreaming" target="_blank">https://medium.com/@ccisdreaming</a>
            </div>
          </div>
        </section>
        <section className="media-section">
          <div className="heading-container">
            <h2 className="header--primary">Media</h2>
          </div>
          <PhotoWall />
        </section>
        <section className="speaking-section row">
          <div className="col">
            <div className="heading-container">
            <h2 className="header--primary">Speaking</h2>
            </div>
            <Video />
            <div className="row audio-players">
              <div className="col">
                {"<<audio player 1>>"}
                <p>Solana Hacker House Panel</p>
              </div>
              <div className="col">
                {"<<audio player 2>>"}
                <p>SXSW Panel</p>
              </div>
            </div>
          </div>
        </section>
        <section className="press-section">
          <div className="col">
            <div className="heading-container">
              <h2 className="header--primary">Press</h2>

            </div>
            <ul className="press-links">
              {PRESS_LINKS.map(article => {
                return (
                  <li key={article.id}>
                    <a
                      href={`${article.link}`}
                    >{article.title}</a>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
        <section className="contact-section row">
          <div className="col contact-column">
            <div className="heading-container">
              <h2 className="header--primary">Contact Me</h2>
            </div>
            <form className="contact-form">
              <input type="text" id="name" name="name" placeholder="Enter Name" required></input>
              <input type="email" id="email" name="email" placeholder="Enter Email" required></input>
              <textarea id="message" name="message" placeholder="Enter Message..."></textarea>
              <button className="btn" type="submit">Submit</button>
            </form>
            <div className="social-links-container">
              <ul className="social-icons social-icons--footer">
                <svg className="svg-twitter" xmlns="http://www.w3.org/2000/svg" width="32" height="25.99" viewBox="0 0 32 25.99">
                  <path id="Icon_awesome-twitter" data-name="Icon awesome-twitter" d="M28.711,9.858c.02.284.02.569.02.853,0,8.67-6.6,18.66-18.66,18.66A18.533,18.533,0,0,1,0,26.427a13.568,13.568,0,0,0,1.584.081,13.135,13.135,0,0,0,8.142-2.8,6.57,6.57,0,0,1-6.132-4.548,8.27,8.27,0,0,0,1.239.1,6.936,6.936,0,0,0,1.726-.223A6.559,6.559,0,0,1,1.3,12.6v-.081a6.6,6.6,0,0,0,2.964.832,6.568,6.568,0,0,1-2.03-8.772,18.642,18.642,0,0,0,13.523,6.863,7.4,7.4,0,0,1-.162-1.5,6.565,6.565,0,0,1,11.35-4.487,12.912,12.912,0,0,0,4.162-1.584,6.541,6.541,0,0,1-2.883,3.614A13.148,13.148,0,0,0,32,6.467a14.1,14.1,0,0,1-3.289,3.391Z" transform="translate(0 -3.381)" />
                </svg>
                <svg className="svg-ig" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <path id="Icon_metro-instagram" data-name="Icon metro-instagram" d="M29.258,1.928H7.883A5.328,5.328,0,0,0,2.571,7.241V28.616a5.328,5.328,0,0,0,5.313,5.312H29.258a5.328,5.328,0,0,0,5.312-5.312V7.241a5.328,5.328,0,0,0-5.312-5.313Zm-16.444,14H24.327a6.094,6.094,0,1,1-11.513,0Zm17.756,0v12a2.006,2.006,0,0,1-2,2h-20a2.006,2.006,0,0,1-2-2v-12H9.7a9.094,9.094,0,1,0,17.743,0Zm0-7a1,1,0,0,1-1,1h-2a1,1,0,0,1-1-1v-2a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Z" transform="translate(-2.571 -1.928)" />
                </svg>
                <svg className="svg-medium" xmlns="http://www.w3.org/2000/svg" width="32" height="25.321" viewBox="0 0 32 25.321">
                  <path id="Icon_metro-medium" data-name="Icon metro-medium" d="M34.571,25.91v3.732H23.106V25.91H25.5V9.374h-.107L19.785,29.642H15.446L9.91,9.374H9.767V25.91h2.411v3.732H2.571V25.91H3.8a1.176,1.176,0,0,0,.768-.348.95.95,0,0,0,.393-.67V9.16a1.087,1.087,0,0,0-.393-.714A1.119,1.119,0,0,0,3.8,8.053H2.571V4.321h12l3.946,14.661h.107L22.606,4.321H34.571V8.053H33.3a1.1,1.1,0,0,0-.732.393,1.087,1.087,0,0,0-.393.714V24.892a.955.955,0,0,0,.384.67,1.13,1.13,0,0,0,.741.348Z" transform="translate(-2.571 -4.321)" />
                </svg>
                <svg className="svg-linkedin" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <path id="Icon_awesome-linkedin" data-name="Icon awesome-linkedin" d="M29.714,2.25H2.279A2.3,2.3,0,0,0,0,4.557V31.943A2.3,2.3,0,0,0,2.279,34.25H29.714A2.3,2.3,0,0,0,32,31.943V4.557A2.3,2.3,0,0,0,29.714,2.25ZM9.671,29.679H4.929V14.407h4.75V29.679ZM7.3,12.321a2.75,2.75,0,1,1,2.75-2.75,2.751,2.751,0,0,1-2.75,2.75ZM27.45,29.679H22.707V22.25c0-1.771-.036-4.05-2.464-4.05-2.471,0-2.85,1.929-2.85,3.921v7.557H12.65V14.407H17.2v2.086h.064a5,5,0,0,1,4.493-2.464c4.8,0,5.693,3.164,5.693,7.279Z" transform="translate(0 -2.25)" />
                </svg>
              </ul>
            </div>
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
