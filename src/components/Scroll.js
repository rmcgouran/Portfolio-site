import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/icons";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const Scroll = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);
  const handleClick = () => {
    window["scrollTo"]({ top: 0, behavior: "smooth" });
    if (window.pageXOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };
  return (
    <div>
      {show && (
        <IconButton onClick={handleClick} className={classes.Top}>
          <ExpandLessIcon />
        </IconButton>
      )}
    </div>
  );
};

export default Scroll;
