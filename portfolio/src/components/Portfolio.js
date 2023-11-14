import React from 'react';

const Portfolio = () => {
  return (
    <section>
      <div className="columns is-multiline">
        <div className="column is-one-third">
          <div id="work" className="box">
            <h1 className="title is-1"><strong>Work</strong></h1>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <a href="https://alizasharma.github.io/mood-to-music/">
              <img src="./assets/MoodToMusic.png" alt="" className="is-fullwidth" />
            </a>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <a href="https://infinite-crag-92779-668e16ae735a.herokuapp.com/">
              <img src="./assets/social-sniffers.png" alt="" className="is-fullwidth" />
            </a>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <a href="https://keepitkandy-131b285227bb.herokuapp.com/">
              <img src="./assets/KeepItKandy.png" alt="" className="is-fullwidth" />
            </a>
          </div>
        </div>
      </div> 
    </section>
  );
}

export default Portfolio;