import React, { Component } from 'react';

      class Right extends React.Component {
        constructor(props) {
          super(props);
           this.state = {
              backgroundColor: 'techButtonRed',
            };
          this.onChangeColor = this.onChangeColor.bind(this);
          this.onRemoveColor = this.onRemoveColor.bind(this);
        }

        onChangeColor(){  
          this.setState({
            backgroundColor: 'techButtonGrey',
          })
        }
        onRemoveColor(){  
          this.setState({
            backgroundColor: 'techButtonRed',
          })
        }

        render() {
          return(
            <div id="rightPart">
              <header id="rightHeader">
                We love tech. But we only use what’s right for the job.
              </header>
              <div id="rightText">
                Here is a selection of what we’ve used on recent projects.
              </div>
              <div className="rightContainer">
                <img src="img/serverless.png" className="techImg" id="rightImgServer"/>
                <img src="img/graphql.png" className="techImg" />
                <img src="img/docker.png" className="techImg" id="rightImgDocker"/>
                <img src="img/nodejs.png" className="techImg techImgSpecial" id="rightImgJs"/>
                <img src="img/react.png" className="techImg" />
                <img src="img/elasticsearch.png" className="techImg techImgSpecial" />
              </div>
              <div className="techContainer">
                <div className="techContainerText">
                  Serverless
                </div>
                <div className="techContainerText">
                  GraphQL
                </div>
                <div className="techContainerText" id="rightTextDocker">
                  Docker
                </div>
                <div className="techContainerText">
                  NodeJS
                </div>
                <div className="techContainerText" id="rightTextReact">
                  React
                </div>
                <div className="techContainerText" id="rightTextElasticsearch">
                  Elasticsearch
                </div>
              </div>
              <div>
                <button id ="rightButton" className={this.state.backgroundColor} onMouseEnter={this.onChangeColor} onMouseLeave={this.onRemoveColor}>
                  <font>
                    More about the tech
                  </font>
                </button>
              </div>
            </div>
          )
        }
      }
export default Right;
