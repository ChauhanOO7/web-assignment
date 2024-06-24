import { useMemo } from "react";
import PropTypes from "prop-types";
import "./GroupComponent.css";

const GroupComponent = ({
  className = "",
  logo1,
  group1098,
  vector,
  ellipseDiv,
  ellipseDivPosition,
  ellipseDivMargin,
  ellipseDivRight,
  ellipseDivBottom,
}) => {
  const ellipseDivStyle = useMemo(() => {
    return {
      position: ellipseDivPosition,
      margin: ellipseDivMargin,
      right: ellipseDivRight,
      bottom: ellipseDivBottom,
    };
  }, [ellipseDivPosition, ellipseDivMargin, ellipseDivRight, ellipseDivBottom]);

  return (
    <header className={`group-header ${className}`}>
      <div className="frame-child4" />
      {!ellipseDiv && <div className="ellipse-div" style={ellipseDivStyle} />}
      <img className="logo-1-icon" loading="lazy" alt="" src={logo1} />
      <div className="header-tools-wrapper">
        <div className="header-tools">
          <div className="home-icon">
            <div className="home-icon-child" />
            <div className="div1"></div>
          </div>
          <div className="frame-parent2">
            <img className="group-icon" loading="lazy" alt="" src={group1098} />
            <a className="tools">T</a>
          </div>
          <div className="search">
            <img className="vector-icon3" loading="lazy" alt="" src={vector} />
            <div className="search-child" />
          </div>
          <div className="notification-icon">
            <img
              className="notification-icon-child"
              loading="lazy"
              alt=""
              src="/ellipse-53@2x.png"
            />
          </div>
          <div className="profile-menu">
            <div className="profile-icons">
              <div className="profile-icons-child" />
              <div className="profile-icons-item" />
              <div className="profile-icons-inner" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  logo1: PropTypes.string,
  group1098: PropTypes.string,
  vector: PropTypes.string,
  ellipseDiv: PropTypes.bool,

  /** Style props */
  ellipseDivPosition: PropTypes.any,
  ellipseDivMargin: PropTypes.any,
  ellipseDivRight: PropTypes.any,
  ellipseDivBottom: PropTypes.any,
};

export default GroupComponent;
