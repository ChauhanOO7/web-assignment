import PropTypes from "prop-types";
import "./SidebarContent.css";
import useData from '../context/data';
import { useState,useEffect } from "react";

const SidebarContent = ({ className = "" }) => {
  const { data, loading, error } = useData();
  let response;
  const [box1,setBox1]=useState({
    heading:"Loading...",
    description:"Loading...",
    videourl:"Loading..."
  });

  const [box2,setBox2]=useState({
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
          setBox1({
            heading:response[0].asset_title,
            description:response[0].asset_description,
            videourl:response[0].asset_content
          });
          setBox2({
            heading:response[1].asset_title,
            description:response[1].asset_description
          });

        }
    }

    immediate();

  },[data]);

  
  return (
    <div className={`sidebar-content ${className}`}>
      <div className="banner">
        <div className="banner-child" />
        <div className="rectangle-parent3">
          <div className="frame-child5" />
          <img
            className="screenshot-from-2024-06-19-11-1"
            loading="lazy"
            alt=""
            src="/screenshot-from-20240619-115844-1@2x.png"
          />
        </div>
        <div className="rectangle-parent4">
          <div className="frame-child6" />
          <div className="process-select">
            <div className="process-select-child" />
            <div className="div2">1</div>
          </div>
        </div>
      </div>
      <div className="title">
        <div className="title1">
          <div className="hero">
            <div className="resource-card">
              <h1 className="technical-project-management4">
                Technical Project Management
              </h1>
              <button className="component-581">
                <div className="component-58-item" />
                <div className="submit-task1">Submit task</div>
              </button>
            </div>
            <div className="description2">
              <div className="description-child" />
              <h2 className="explore-the-world1">
                Explore the world of management
              </h2>
              <div className="as-a-project1">
                As a project manager, you play an important reole in leading a
                project through initiation, planning, execution, monitoring,
                controlling and completion. How? Do you want to manage each and
                every step of your life?
              </div>
            </div>
          </div>
          <div className="main">
            <div className="thread-item">
              <div className="top">
                <img
                  className="top-child"
                  alt=""
                  src="/rectangle-1869@2x.png"
                />
                <div className="resource-header">
                  <div className="resource-header-child" />
                  <div className="technical-project-management5">
                    {box1.heading}
                  </div>
                  <div className="resource-icon">
                    <div className="resource-icon-child" />
                    <div className="i2">i</div>
                  </div>
                </div>
                <div className="thread-description">
                  <div className="description-story-of-container1">
                    <span className="description3">Description</span>
                    <span className="span4">
                      <span>:</span>
                    </span>
                    <span className="story-of-alignment-scope-of-ag1">
                      <span className="span5">{` `}</span>
                      <span>
                        {box1.description}
                      </span>
                    </span>
                  </div>
                </div>
                <iframe className="image-13-icon1"
                  width="560"
                  height="315"
                  src={box1.videourl}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="top1">
                <div className="top-item" />
                <div className="rectangle-parent5">
                  <div className="frame-child7" />
                  <div className="threadbuild2">{box2.heading}</div>
                  <div className="ellipse-group">
                    <div className="frame-child8" />
                    <div className="i3">i</div>
                  </div>
                </div>
                <div className="rectangle-parent6">
                  <div className="frame-child9" />
                  <div className="description-watch-the-container1">
                    <span className="description4">Description</span>
                    <span className="span6">
                      <span>:</span>
                    </span>
                    <span className="watch-the-video-and-threadbuil1">
                      <span className="span7">{` `}</span>
                      <span>
                        {box2.description}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="resource-content">
                  <div className="rectangle-parent7">
                    <div className="frame-child10" />
                    <div className="vector-frame">
                      <img
                        className="vector-icon4"
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                    <b className="thread-a1">Thread A</b>
                  </div>
                </div>
                <div className="resource">
                  <div className="threads">
                    <div className="thread-content">
                      <div className="thread-actions">
                        <div className="thread-interpretation">
                          <div className="thread-header">
                            <div className="bg-layer7">
                              <div className="bg-layer8" />
                            </div>
                            <input
                              className="enter-text-here2"
                              placeholder="Enter Text here"
                              type="text"
                            />
                          </div>
                          <div className="sub-thread1">
                            <div className="bg-layer9" />
                            <input
                              className="sub-thread-11"
                              placeholder="Sub thread 1"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="sub-interpretation-input">
                          <div className="background">
                            <div className="bg-layer10" />
                            <div className="sub-interpretation-11">
                              Sub Interpretation 1
                            </div>
                          </div>
                          <div className="thread-summary">
                            <div className="bg-layer11">
                              <div className="bg-layer12" />
                            </div>
                            <input
                              className="enter-text-here3"
                              placeholder="Enter Text here"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="thread-summary1">
                        <div className="thread-summary-inner">
                          <img
                            className="frame-child11"
                            loading="lazy"
                            alt=""
                            src="/group-1588.svg"
                          />
                        </div>
                        <div className="rectangle-parent8">
                          <div className="frame-child12" />
                          <div className="select-categ1">Select Categ</div>
                          <div className="vector-wrapper1">
                            <img
                              className="vector-icon5"
                              alt=""
                              src="/vector-2.svg"
                            />
                          </div>
                        </div>
                        <div className="rectangle-parent9">
                          <div className="frame-child13" />
                          <div className="select-proces1">Select Proces</div>
                          <div className="vector-wrapper2">
                            <img
                              className="vector-icon6"
                              alt=""
                              src="/vector-2.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="intro">
                      <div className="component-571">
                        <div className="component-57-item" />
                        <h2 className="content">+</h2>
                        <div className="subthread-summary">
                          <div className="sub-thread2">Sub-thread</div>
                        </div>
                      </div>
                      <div className="thread-details">
                        <div className="summary-header">
                          <div className="bg-layer13" />
                          <input
                            className="summary-for-thread1"
                            placeholder="Summary for Thread A"
                            type="text"
                          />
                        </div>
                        <textarea
                          className="summary-content1"
                          placeholder="Enter Text Here"
                          rows={4}
                          cols={21}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SidebarContent.propTypes = {
  className: PropTypes.string,
};

export default SidebarContent;
