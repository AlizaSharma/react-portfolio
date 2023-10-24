import React from 'react';

const Contact = () => {
  return (
    <section>
      <div className="columns is-multiline">
        <div className="column is-one-third">
          <div id="contact" className="box">
            <h1 className="title is-1"><strong>Contact Me</strong></h1>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <div className="content">
              <ul>
                <li>Aliza Sharma</li>
                <li><a href="https://github.com/AlizaSharma">GitHub Repo</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;