import React from "react";
import "./Main.scss";
const Main = () => {
    return(
      <div className="Main-Wrapper">
          <div className="Main-Header">
              <div className="Logo">
                AppCo
              </div>
              <h3>
                  Brainstorming for desired perfect Usability
              </h3>
              <p>
                  Our design projects are fresh and simple and will benefit your business greatly.
                  Learn more about our work!
              </p>
              <button className="Main-Header-Button">View Stats</button>
            <div className="Main-Content">
                <h3>
                    Why small business owners love AppCo?
                </h3>
                <p>
                    Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!
                </p>

            </div>
          </div>
          <div className="Main-Content">
              <h3>Why <strong>small business owners <br/>love</strong> AppCo?</h3>

              <p>
                  Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!
              </p>
              <div className="Card-Wrapper">
                  <div className="Small-Card"></div>
                  <div className="Small-Card"></div>
                  <div className="Small-Card"></div>
              </div>
              <div className="Main-Banner">

              </div>
              <div>
                  <h3>Afforadble Pricing and Packages choose your best one</h3>

                  <p>
                      Monotonectally grow strategic process improvements vis-a-vis integrated resources.
                  </p>
                  <div className="Card-Wrapper">
                      <div className="Card"></div>
                      <div className="Card"></div>
                      <div className="Card"></div>
                  </div>
              </div>
          </div>
          <div className="Main-Footer-Wrapper">
              <form className="Form">
                  <input  type="text"/>
                  <button>Subscribe</button>
              </form>
              <div className="Main-Footer">
                  <div>AppCo</div>
                  <div> All rights reserved by ThemeTags</div>
                  <div>Copyrights © 2019</div>
              </div>
          </div>
      </div>
    );
}

export default Main;