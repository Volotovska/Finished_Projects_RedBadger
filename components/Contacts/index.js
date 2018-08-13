import React, { Component } from 'react';

      class Contacts extends React.Component {
        render() {
          return(
            <div id="contactsPart">
              <div id='contactsPart1'>
                <header id="contactsHeader">
                  Sign up to Badger News to hear more from us
                </header>
                <div id="contactsPeriod">
                  (every 6 weeks or so)
                </div>
                <div id="contactsContainer1">
                  <div className="contactsContItem">
                    Email
                  </div>
                  <div className="contactsContItem">
                      <input value="name@example.com" id="contactsInput" type="text"/>
                  </div>
                  <div className="contactsContItem">
                      <input type="submit" value="Sign Up" id="contactsSign"/>
                  </div>
                </div>
                <div id="contactsText">
                Once you are signed up to our newsletter, you can unsubscribe and update your preferences at any time. We'll share our news, blogs, and invitations to our events and webinars. View our Privacy policy to find out more about how we take care of your personal data.
                </div>
              </div>
              <div id="contactsPart3">
                <div className="contactsPart3Item">
                  <div className="contactsPart3Li">
                    Home
                  </div>
                  <div className="contactsPart3Li">
                    About us
                  </div>
                  <div className="contactsPart3Li">
                    What we do
                  </div>
                  <div className="contactsPart3Li">
                    Blog
                  </div>
                  <div className="contactsPart3Li">
                    Events
                  </div>
                  <div className="contactsPart3Li">
                    Jobs
                  </div>
                </div>
                <div className="contactsPart3Item">
                  <div className="contactsPart3Contacts">
                    hello@red-badger.com
                  </div>
                  <div className="contactsPart3Contacts">
                    +44(0)2035670555
                  </div>
                  <div id="contactsPart3Container">
                    <img src="img/github.png" className="contactsContainerImg" />
                    <img src="img/twitter.png" className="contactsContainerImg" />
                    <img src="img/slack.png" className="contactsContainerImg" />
                    <img src="img/linkedin.png" className="contactsContainerImg" />
                    <img src="img/insta.jpg" className="contactsContainerImg" />
                    <img src="img/facebook.jpg" className="contactsContainerImg" />
                    <img src="img/youtube.png" className="contactsContainerImg" />
                    <img src="img/google.jpg" className="contactsContainerImg" />
                  </div>
                  <div id="contactsPart3Container2">
                    <div className="contactsContainer2Item">
                      <img src="img/point.png" />
                    </div>
                    <div className="contactsContainer2Item">
                      <div className="contactsContainer2Li">
                          4th Floor
                      </div>
                      <div className="contactsContainer2Li">
                        2 Old Street Yard
                      </div>
                      <div className="contactsContainer2Li">
                        London
                      </div>
                      <div className="contactsContainer2Li">
                        EC1Y 8AF
                      </div>
                      <div className="contactsContainer2Li">
                        (Featherstone Street entrance)
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contactsPart3Item">
                  <img src="img/map.png" id="contactsMapImg" />
                </div>
              </div>
              <footer>
                <div id="contactsFooterCont">
                  <div className="contactsFooterItem">
                      © Red Badger Consulting Limited 2018
                  </div>
                  <div className="contactsFooterItem contactsFooterLine">
                  </div>
                  <div className="contactsFooterItem">
                    Registered in England No. 7242017
                  </div>
                  <div className="contactsFooterItem contactsFooterLine">
                  </div>
                  <div className="contactsFooterItem">
                    VAT Registration No. 990 8085 82
                  </div>
                </div>
                <div id="contactsFooterInfo">
                  We use cookies on our website. For more information, view our privacy policy and website T&C's.
                </div>
              </footer>
            </div>
          )
        }
      }

export default Contacts;
