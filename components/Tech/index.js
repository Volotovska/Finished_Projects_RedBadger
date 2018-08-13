import React, { Component } from 'react';

      class Tech extends React.Component {
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
            <div id="techPart">
              <header id="techHeader">
                We love tech. But we only use what’s right for the job.
              </header>
              <div id="techText">
                Here is a selection of what we’ve used on recent projects.
              </div>
              <div className="techContainer">
                <img src="img/serverless.png" className="techImg" id="techImgServer"/>
                <img src="img/graphql.png" className="techImg" />
                <img src="img/docker.png" className="techImg" id="techImgDocker"/>
                <img src="img/nodejs.png" className="techImg techImgSpecial" id="techImgJs"/>
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
                <div className="techContainerText" id="techTextDocker">
                  Docker
                </div>
                <div className="techContainerText">
                  NodeJS
                </div>
                <div className="techContainerText" id="techTextReact">
                  React
                </div>
                <div className="techContainerText" id="techTextElasticsearch">
                  Elasticsearch
                </div>
              </div>
              <div>
                <button id ="techButton" className={this.state.backgroundColor} onMouseEnter={this.onChangeColor} onMouseLeave={this.onRemoveColor}>
                  <font>
                    See more of our tech
                  </font>
                </button>
              </div>
            </div>
          )
        }
      }

export default Tech;