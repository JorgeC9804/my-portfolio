import React, { useState } from "react";
//import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './Intro.styles.css'

const Intro = () => {

    const [welcome, setWelcome] = useState(false);

    setTimeout(() => {
        setWelcome(true);
    }, 2000);

    return(
        <div className="intro">
            <div className="presentacion">   
                <div className={welcome ? 'sym-1' : 'sym-1-1'}>&lt;</div>
                <div className={welcome ? 'sym-2' : 'sym-2-1'}>
                    welcome
                </div>
                <div className={welcome ? 'sym-3' : 'sym-3-1'}>/</div>
                <div className={welcome ? 'sym-4' : 'sym-4-1'}>&gt;</div>
            </div>
        </div>
    )
}

export default Intro