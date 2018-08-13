import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Work from '../Work';
import Slider from '../Slider';
import Help from '../Help';
import Tech from '../Tech';
import Pic from '../Pic';
import Contacts from '../Contacts';

      class Main extends React.Component {
        constructor(props) {
          super(props);
           this.state = {
              liWhat1: "mainInv",
              liWhat2: "mainInv",
              liAbout: "mainInv",
            };
          this.showLiWhat = this.showLiWhat.bind(this);
          this.hideLiWhat = this.hideLiWhat.bind(this);
          this.showLiAbout = this.showLiAbout.bind(this);
          this.hideLiAbout = this.hideLiAbout.bind(this);
        }
        showLiWhat() {
          this.setState({
            liWhat1: 'mainVis1',
            liWhat2: 'mainVis2',
          })
        }
        hideLiWhat() {
          this.setState({
            liWhat1: 'mainInv',
            liWhat2: 'mainInv',
          })
        };
        showLiAbout() {
          this.setState({
            liAbout: 'mainVis',
          })
        }
        hideLiAbout() {
          this.setState({
            liAbout: 'mainInv',
          })
        };
        render() {
          return(
            <div>
            <div id="mainPart">
              <header id='mainHeader'>
                <div>
                  <img src="img/animal.png" id="mainImg" />
                </div>
                <div id="mainTitle">
                  <font className="mainRedLine" > 
                    Red Badger
                  </font>
                </div>
                <div className="mainMenu mainRedLine" onMouseMove={this.showLiWhat} onMouseLeave={this.hideLiWhat} >
                    <Link to={{
                      className: "mainRedLine",
                      pathname: "/what-we-do",
                    }}>
                      What we do
                    </Link>
                </div>
                  <ul>
                      <li className={this.state.liWhat1}>
                        <a href="" className="mainRedLine"> 
                          Technology
                        </a>
                      </li>
                      <li className={this.state.liWhat2}>
                        <a href="" className="mainRedLine"> 
                          Our work
                        </a>
                      </li>
                  </ul>
                <div className="mainMenu" onMouseMove={this.showLiAbout} onMouseLeave={this.hideLiAbout}>
                    <a className="mainRedLine"> 
                      About us
                    </a>
                  </div>
                  <ul>
                    <li className={this.state.liAbout}>
                      <a href="" className="mainRedLine"> 
                        Our team
                      </a>
                    </li>
                  </ul>
                <div className="mainMenu">
                  <a className="mainRedLine"> 
                    Blog
                  </a> 
                </div>
                <div className="mainMenu">
                  <a className="mainRedLine"> 
                    Events
                  </a>
                </div>
                <div className="mainMenu">
                  <a className="mainRedLine"> 
                    Jobs
                  </a>
                </div>
              </header>
              <div id="mainContainer">
                <div id="mainHoverCont" >
                    <div className="mainNoUnderline">
                      <span className="mainNoUnderlineSpan1">
                        Let's make
                      </span>
                    </div>
                    <div className="mainNoUnderline">
                    <span className="mainNoUnderlineSpan2">
                      things better
                    </span>
                    </div>
                </div>

                <svg id="imgHeart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="animationMask_vNWWqXnikN"><rect width="48" height="48" x="0" y="0"></rect></clipPath><mask id="ly_th6jyWokuZ" mask-type="alpha"><g transform="matrix(1.1200000047683716,0,0,1.1200000047683716,12.039999008178711,13.25999927520752)" opacity="1" style={{display: 'block'}}><g opacity="1" transform="matrix(1,0,0,1,10.25,9.140000343322754)"><path fill="rgb(224,224,224)" fillOpacity="1" d=" M10,-3.384999990463257 C10,-6.426000118255615 7.534999847412109,-8.890999794006348 4.494999885559082,-8.890999794006348 C2.635999917984009,-8.890999794006348 0.996999979019165,-7.9670000076293945 0,-6.557000160217285 C-0.996999979019165,-7.9670000076293945 -2.63700008392334,-8.890999794006348 -4.494999885559082,-8.890999794006348 C-7.535999774932861,-8.890999794006348 -10,-6.426000118255615 -10,-3.384999990463257 C-10,-1.6319999694824219 -8.776000022888184,0.11400000005960464 -7.934000015258789,0.9559999704360962 C-7.091000080108643,1.7990000247955322 0,8.890999794006348 0,8.890999794006348 C0,8.890999794006348 7.941999912261963,0.9470000267028809 7.941999912261963,0.9470000267028809 C8.682000160217285,0.20800000429153442 10,-1.6319999694824219 10,-3.384999990463257z"></path></g></g></mask></defs><g clipPath="url(#animationMask_vNWWqXnikN)"><g transform="matrix(1,0,0,1,7.299999237060547,8.399999618530273)" opacity="1" style={{display: 'block'}}><g opacity="1" transform="matrix(1,0,0,1,16.25,15.140000343322754)"><path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(204,204,204)" strokeOpacity="1" strokeWidth="2.5" d=" M10,-3.384999990463257 C10,-6.426000118255615 7.534999847412109,-8.890999794006348 4.494999885559082,-8.890999794006348 C2.635999917984009,-8.890999794006348 0.996999979019165,-7.9670000076293945 0,-6.557000160217285 C-0.996999979019165,-7.9670000076293945 -2.63700008392334,-8.890999794006348 -4.494999885559082,-8.890999794006348 C-7.535999774932861,-8.890999794006348 -10,-6.426000118255615 -10,-3.384999990463257 C-10,-1.6319999694824219 -8.776000022888184,0.11400000005960464 -7.934000015258789,0.9559999704360962 C-7.091000080108643,1.7990000247955322 0,8.890999794006348 0,8.890999794006348 C0,8.890999794006348 7.941999912261963,0.9470000267028809 7.941999912261963,0.9470000267028809 C8.682000160217285,0.20800000429153442 10,-1.6319999694824219 10,-3.384999990463257z"></path></g></g><g transform="matrix(1,0,0,1,13.25,14.360000610351562)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,10.25,9.140000343322754)"><path fill="rgb(44,218,157)" fillOpacity="1" d=" M10,-3.384999990463257 C10,-6.426000118255615 7.534999847412109,-8.890999794006348 4.494999885559082,-8.890999794006348 C2.635999917984009,-8.890999794006348 0.996999979019165,-7.9670000076293945 0,-6.557000160217285 C-0.996999979019165,-7.9670000076293945 -2.63700008392334,-8.890999794006348 -4.494999885559082,-8.890999794006348 C-7.535999774932861,-8.890999794006348 -10,-6.426000118255615 -10,-3.384999990463257 C-10,-1.6319999694824219 -8.776000022888184,0.11400000005960464 -7.934000015258789,0.9559999704360962 C-7.091000080108643,1.7990000247955322 0,8.890999794006348 0,8.890999794006348 C0,8.890999794006348 7.941999912261963,0.9470000267028809 7.941999912261963,0.9470000267028809 C8.682000160217285,0.20800000429153442 10,-1.6319999694824219 10,-3.384999990463257z"></path></g></g><g mask="url(#ly_th6jyWokuZ)"><g id='innerHeart'  opacity="1"><g opacity="1" transform="matrix(1,0,0,1,14.470999717712402,14.470000267028809)"><path fill="rgb(255,91,68)" fillOpacity="1" d=" M3.8459999561309814,-14.220999717712402 C3.8459999561309814,-14.220999717712402 -14.220000267028809,3.8459999561309814 -14.220000267028809,3.8459999561309814 C-14.220000267028809,3.8459999561309814 -14.220000267028809,14.220999717712402 -14.220000267028809,14.220999717712402 C-14.220000267028809,14.220999717712402 14.220000267028809,-14.220999717712402 14.220000267028809,-14.220999717712402 C14.220000267028809,-14.220999717712402 3.8459999561309814,-14.220999717712402 3.8459999561309814,-14.220999717712402z"></path></g><g opacity="1" transform="matrix(1,0,0,1,17.17799949645996,18.0310001373291)"><path fill="rgb(255,217,94)" fillOpacity="1" d=" M11.512999534606934,-17.7810001373291 C11.512999534606934,-17.7810001373291 -16.92799949645996,10.65999984741211 -16.92799949645996,10.65999984741211 C-16.92799949645996,10.65999984741211 -16.92799949645996,14.526000022888184 -16.92799949645996,14.526000022888184 C-16.92799949645996,14.526000022888184 -13.673999786376953,17.7810001373291 -13.673999786376953,17.7810001373291 C-13.673999786376953,17.7810001373291 16.92799949645996,-12.821000099182129 16.92799949645996,-12.821000099182129 C16.92799949645996,-12.821000099182129 11.968000411987305,-17.7810001373291 11.968000411987305,-17.7810001373291 C11.968000411987305,-17.7810001373291 11.512999534606934,-17.7810001373291 11.512999534606934,-17.7810001373291z"></path></g><g opacity="1" transform="matrix(1,0,0,1,20.524999618530273,23.104999542236328)"><path fill="rgb(195,211,13)" fillOpacity="1" d=" M-17.020000457763672,12.706999778747559 C-17.020000457763672,12.706999778747559 -11.831999778747559,17.895000457763672 -11.831999778747559,17.895000457763672 C-11.831999778747559,17.895000457763672 17.020000457763672,-10.958000183105469 17.020000457763672,-10.958000183105469 C17.020000457763672,-10.958000183105469 17.020000457763672,-14.456999778747559 17.020000457763672,-14.456999778747559 C17.020000457763672,-14.456999778747559 13.581999778747559,-17.895000457763672 13.581999778747559,-17.895000457763672 C13.581999778747559,-17.895000457763672 -17.020000457763672,12.706999778747559 -17.020000457763672,12.706999778747559z"></path></g><g opacity="1" transform="matrix(1,0,0,1,23.118000030517578,28.30299949645996)"><path fill="rgb(0,162,188)" fillOpacity="1" d=" M-14.425999641418457,12.696999549865723 C-14.425999641418457,12.696999549865723 -10.967000007629395,16.1560001373291 -10.967000007629395,16.1560001373291 C-10.967000007629395,16.1560001373291 -7.508999824523926,16.1560001373291 -7.508999824523926,16.1560001373291 C-7.508999824523926,16.1560001373291 14.425999641418457,-5.781000137329102 14.425999641418457,-5.781000137329102 C14.425999641418457,-5.781000137329102 14.425999641418457,-16.1560001373291 14.425999641418457,-16.1560001373291 C14.425999641418457,-16.1560001373291 -14.425999641418457,12.696999549865723 -14.425999641418457,12.696999549865723z"></path></g></g></g></g></svg>
              </div>
              <div className="mainAfterSl">
                We are digital transformation experts 
              </div>
              <div className="mainAfterSl">
                <div className="mainArrowItem">
                  who <font className="mainRedLine"> 
                    innovate and deliver.
                  </font>
                </div>
                <div className="mainArrowItem">
                  <div id="imgArrow"></div>
                </div>
              </div>
            </div>

            <Work />

            <Slider />

            <Help />

            <Tech />

            <Pic />

            <Contacts />
            
            </div>

          )
        }
      }

export default Main;