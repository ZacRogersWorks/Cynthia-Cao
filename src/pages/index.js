import * as React from "react"

// markup
const IndexPage = () => {
  return (
    <>
      <main className="main">
        <section className="row">
          <h1 className="header--primary">Hi, my name is <span className="rainbow">Cynthia</span> 🦄
            <br />I am an artist, investor, entrepreneur that crazy builder in Web3 Music</h1>
          <div className="row">
            <div className="col">
              <p>As a music industry professional for 6 years, I have worked in event planning, artist management, and as a musician and artist myself.</p>

              <p>Aside from my entertainment experiences, I have been working as an investor with a family office background and led investments ranging from early blockchain protocols to pre-IPO tech companies.</p>

              <p>Now I am full-time dedicated to Starseed DAO, where I am building a parallel music industry on-chain in the metaverse.</p>
            </div>
            <div className="col">
              <p>My life mission is to help with earth&apos;s ascension and humanity&apos;s collective consciousness to rise above to achieve interstellar civilization 👽 🛸.</p>
              <div className="social-icons">
                <span>Twitter</span>
                <span>Instagram</span>
                <span>Medium</span>
                <span>LinkedIn</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3 className="header--aside">
                My Interests
              </h3>
              <p>
                Music, Blockchain, Metaverse, NFTs, DAOs, Defi, Artificial Intelligence, Neuroscience
              </p>
            </div>
            <div className="col">
              <h3 className="header--aside">
                My Thoughts
              </h3>
              <a href="https://medium.com/@ccisdreaming">https://medium.com/@ccisdreaming</a>
            </div>
          </div>
        </section>
        <section className="row">
          <div className="col">
            <h2 className="header--primary">Photo Wall</h2>
            <div className="photo-wall">
              <img src="#" />
              <img src="#" />
              <img src="#" />
              <img src="#" />
              <img src="#" />
            </div>
          </div>
        </section>
        <section className="row">
          <div className="col">
            <h3 className="header--primary">Speaking</h3>
            <p>{"<<<< video element here>>>>"}</p>
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
        <section className="row">
          <div className="col">
            <h3 className="header--primary">Contact Me</h3>
          </div>
          <div className="col">
            <h3 className="header--primary">Press</h3>
          </div>
        </section>
      </main>
      <footer>
        <p>
          &copy;2022 ccisdreaming. All right reserved.
        </p>
      </footer>
    </>
  )
}

export default IndexPage
