import PropTypes from "prop-types";
import "./Pointer.css";
import useData from '../context/data';
import { useState,useEffect } from "react";

const Pointer = ({ className = "" }) => {
  
  const { data, loading, error } = useData();
  let response;
  const [box3,setBox3]=useState({
    heading:"Loading...",
    description:"Loading..."
  });

  const [box4,setBox4]=useState({
    heading:"Loading...",
    description:"Loading..."
  });

  useEffect(()=>{

    async function immediate()
    {
      if(data && data.length > 0){
        const result=data[0];
        response=JSON.parse(result.result);
        response=response.tasks[0].assets;
          
          setBox3({
            heading:response[2].asset_title,
            description:response[2].asset_description
          });
          setBox4({
            heading:response[3].asset_title,
            description:response[3].asset_description,
            videourl:response[3].asset_content
          });

        }
    }

    immediate();

  },[data]);

  return (
    <section className={`structure-content-wrapper ${className}`}>
      <div className="structure-content">
        <div className="body-wrapper">
          <div className="body">
            <div className="structure-header">
              <img
                className="structure-header-child"
                alt=""
                src="/rectangle-1871@2x.png"
              />
              <div className="structure-method-parent">
                <div className="structure-method">
                  <div className="structure-method-child" />
                  <div className="structure-your-pointers1">
                    {box3.heading}
                  </div>
                  <div className="pointer-icon">
                    <div className="info" />
                    <div className="i5">i</div>
                  </div>
                </div>
                <div className="edit-button">
                  <div className="description-write-container">
                    <span className="description5">
                      <span>{`Description `}</span>
                      <span className="span8">:</span>
                    </span>
                    <span className="write-a-300-400-word-article">
                      <span className="span9">{` `}</span>
                      <span>{box3.description}</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="structure-content-header">
                <div className="structure-content-header-child" />
                <div className="title-parent">
                  <input className="title2" placeholder="Title " type="text" />
                  <div className="title-divider" />
                </div>
                <div className="content-more">
                  <div className="content1">Content</div>
                  <div className="structure-title">
                    <div className="rectangle-parent11">
                      <div className="frame-child15" />
                      <div className="expand-items">
                        <div className="tools-container">
                          <div className="more-menu">
                            <div className="file-action">
                              <div className="edit">Edit</div>
                            </div>
                            <img
                              className="arrow-curve-left-down-icon"
                              loading="lazy"
                              alt=""
                              src="/arrowcurveleftdown.svg"
                            />
                          </div>
                        </div>
                        <div className="edit-action">
                          <div className="paragraph-container">
                            <div className="file">File</div>
                          </div>
                          <img
                            className="arrow-curve-left-right-icon"
                            loading="lazy"
                            alt=""
                            src="/arrowcurveleftright@2x.png"
                          />
                        </div>
                        <div className="tools-option">
                          <div className="content-title">
                            <div className="edit-container">
                              <div className="tools1">Tools</div>
                            </div>
                            <div className="menu-options">
                              <div className="expand-action">
                                <div className="view">View</div>
                                <div className="insert">Insert</div>
                                <div className="format">Format</div>
                              </div>
                              <div className="icons">
                                <div className="tools-action">
                                  <div className="sub-option" />
                                  <div className="sub-option-two" />
                                </div>
                                <div className="tools-button">
                                  <div className="paragraph-content">
                                    <img
                                      className="arrow-expand-02-icon"
                                      loading="lazy"
                                      alt=""
                                      src="/arrowexpand02.svg"
                                    />
                                    <div className="option-icon">
                                      <div className="paragraph-button">
                                        <div className="paragraph-button-child" />
                                        <div className="paragraph">
                                          Paragraph
                                        </div>
                                      </div>
                                    </div>
                                    <div className="expand-container">
                                      <div className="option-circle" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="items">
                        <div className="table">Table</div>
                        <div className="help">
                          <div className="help1">Help</div>
                        </div>
                      </div>
                    </div>
                    <textarea className="menu-divider" rows={7} cols={21} />
                  </div>
                </div>
              </div>
            </div>
            <div className="structure-header1">
              <img
                className="structure-header-item"
                alt=""
                src="/rectangle-1871@2x.png"
              />
              <div className="rectangle-parent12">
                <div className="frame-child16" />
                <div className="sa-method">{box4.heading}</div>
                <div className="method">
                  <div className="info-icon-parent">
                    <div className="info-icon" />
                    <div className="i6">i</div>
                  </div>
                </div>
              </div>
              <div className="structure-layout">
                <div className="pointer-structure">
                  <div className="description-to-container">
                    <span className="description6">
                      <span>{`Description `}</span>
                      <span className="span10">:</span>
                    </span>
                    <span className="to-explore-more-read-more">
                      <span className="span11">{` `}</span>
                      <span>{box4.description}</span>
                    </span>
                  </div>
                </div>
                <div className="rectangle-parent13">
                  <div className="frame-child17" />
                  <div className="thread-header1">
                    <div className="intro1">
                      <div className="intro-child" />
                      <div className="thread-name">
                        <img
                          className="vector-icon8"
                          alt=""
                          src="/vector-5.svg"
                        />
                      </div>
                      <div className="introduction">{`Introduction `}</div>
                    </div>
                    <div className="thread-question">
                      <div className="the-4sa-method">
                        The 4SA Method , How to bring a idea into progress ?
                      </div>
                    </div>
                  </div>
                  <div className="thread-more">
                    <div className="see-more">See More</div>
                  </div>
                  <div className="thread-example">
                    <div className="example-content">
                      <div className="thread-title">
                        <div className="thread-title-child" />
                        <div className="example-description">
                          <img
                            className="thread-icon"
                            alt=""
                            src="/vector-5.svg"
                          />
                        </div>
                        <div className="thread-a2">Thread A</div>
                      </div>
                      <div className="thread-more1">
                        <div className="how-are-you">
                          How are you going to develop your stratergy ? Which
                          method are you going to use to develop a stratergy ?
                          What if the project is lengthy?
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="see-more-wrapper">
                    <div className="see-more1">See More</div>
                  </div>
                  <div className="structure-content1">
                    <div className="example-title-parent">
                      <div className="example-title">
                        <div className="example-title-child" />
                        <div className="example-1">Example 1</div>
                      </div>
                      <div className="thread-content1">
                        <div className="you-have-a">
                          You have a concept , How will you put into progress?
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="action-icons">
          <div className="action-icons-inner">
            <div className="pointer-shapes-parent">
              <div className="pointer-shapes" />
              <img
                className="question-mark-2-1"
                loading="lazy"
                alt=""
                src="/questionmark-2-1@2x.png"
              />
            </div>
          </div>
          <div className="action-icons-child">
            <div className="ellipse-container">
              <div className="frame-child18" />
              <img
                className="meeting-1-icon"
                loading="lazy"
                alt=""
                src="/meeting-1@2x.png"
              />
            </div>
          </div>
          <div className="action-icons-inner1">
            <div className="ellipse-parent1">
              <div className="frame-child19" />
              <img
                className="schedule-1-1"
                loading="lazy"
                alt=""
                src="/schedule-1-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Pointer.propTypes = {
  className: PropTypes.string,
};

export default Pointer;
