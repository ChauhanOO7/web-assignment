import PropTypes from "prop-types";
import "./StructureDescription.css";

const StructureDescription = ({ className = "" }) => {
  return (
    <div className={`structure-description ${className}`}>
      <div className="notice-board-content">
        <div className="sidebar">
          <div className="header">
            <div className="header-child" />
            <div className="rectangle-parent10">
              <div className="frame-child14" />
              <img className="x-01-icon" loading="lazy" alt="" src="/x01.svg" />
              <div className="notice-board">
                <div className="n-o-t-container">
                  <p className="n">N</p>
                  <p className="o">o</p>
                  <p className="t">t</p>
                  <p className="i4">i</p>
                  <p className="c">c</p>
                  <p className="e">e</p>
                  <p className="blank-line">&nbsp;</p>
                  <p className="b">B</p>
                  <p className="o1">o</p>
                  <p className="a">a</p>
                  <p className="r">r</p>
                  <p className="d">d</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="notice">
          <div className="notice-child" />
          <div className="select-process">Select Process</div>
          <img className="vector-icon7" alt="" src="/vector-4.svg" />
        </div>
      </div>
    </div>
  );
};

StructureDescription.propTypes = {
  className: PropTypes.string,
};

export default StructureDescription;
