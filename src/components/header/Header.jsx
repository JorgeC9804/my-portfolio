import React, { useState } from 'react';
import { FullscreenExitOutlined, MenuOutlined } from '@ant-design/icons';

import '../header/Header.styles.css'
import Menu from '../menu/Menu';

const Header = () => {

    const [state, setState] = useState(true);
    const [change, setChange] = useState('');

    const handleChange = () => {
        setState(!state);
        setChange('close-menu');
    }
    /**Presentacion
     * 1. Varias Lineas saliendo de los lados estilo tron
     */

    return (
        <div> 
            <div className={state ? 'sec-info' : 'none' }>
                <Menu cname={'header-1'} change={'change-1'} linkTo={'link'}/>
            </div>
            {
                state ? // if state === true show icon
                <div className={change}>
                    <button //icon menu
                            className='show-menu-icon'
                            // despliega al  menu el show-menu
                            onClick={handleChange}
                        > 
                            <MenuOutlined />
                    </button>
                </div>
                :
                <div className='menu'> 
                    <button /*
                            * div show men
                            * button doing close menu
                            */
                            className='close-menu-icon'
                            onClick={handleChange}
                        >
                            <FullscreenExitOutlined />
                    </button>
                    <Menu cname={'header-2'} change='change-2' linkTo={'none'} />
                </div>
            }
        </div>
    )
};

export default Header;