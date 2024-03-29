import React, { useState } from "react";
import '../collapse/collapse.scss';
import arrow from '../../assets/images/arrow_up_ios-24px.png';

function Collapse (props) {
  const [isOpen, setIsOpen] = useState(false);
  const collapseRules = `collapse ${isOpen && 'visible'}`;
  const handleArrow = `arrow ${isOpen ? 'arrow_down':'arrow_up'}`;

  function handleCollapse () {
    setIsOpen(!isOpen);
  };

  return (
    <div className={collapseRules}>
      <div>
        <h3 onClick={handleCollapse} className="collapse_title">{props.title}
          <img className={handleArrow} src={arrow} alt='click_arrow'/>
        </h3>   
        {isOpen && (
          <div className={`collapse_content ${props.contentClass || ''}`}>
            {Array.isArray(props.content) ? props.content.map((item, index) => <p className="collapse_items" key={index}>{item}</p> ) : props.content}
          </div>
        )}           
      </div>
    </div>
  );
}
export default Collapse