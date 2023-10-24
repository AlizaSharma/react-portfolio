import React from 'react';

const Portfolio = () => {
  return (
    <section>
    <div class="columns is-multiline">
        <div class="column is-one-third">
            <div id="work" class="box">
                <h1 class="title is-1"><strong>Work</strong></h1>
            </div>    
        </div>
        
       
            <div class="column">
                <div class="box">
                    <a href="https://alizasharma.github.io/mood-to-music/">
                        <img src="./assets/MoodToMusic.png" alt="webpage image"></img>
                    </a>
                </div>
    
                <div class="column">
                    <div class="box">
                        <a href="https://infinite-crag-92779-668e16ae735a.herokuapp.com/">
                            <img src="./assets/social-sniffers.png" alt="webpage image"></img>
                        </a>
                    </div>
        
        </div>
    </div>
    </div>
   </section>

  );
}

export default Portfolio;