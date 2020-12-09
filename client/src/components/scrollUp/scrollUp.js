import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import "../scrollUp/scrollUp.css";

export default function ScrollUp() {
    return (
        <div>
            <Link 
            id="scroll-up"
            to="root"
            smooth={true}
            offset={0}
            duration={300}
            delay={100}
            isDynamic={true}
            >
              <ExpandLessIcon></ExpandLessIcon>
            </Link>
        </div>
    )
}