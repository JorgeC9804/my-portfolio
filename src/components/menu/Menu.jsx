import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import { initialState, reducer } from '../reducer/initialState';
import './menu.styles.css';

const Menu = ({cname, change, linkTo}) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const handleChange = (id) => {
        state.map( restore => restore.status = false );
        dispatch({type: id, dispatch: { id: id, active: 'una mamada' }})
    }

    return (
        <nav className={cname}>
            <Link to='/' className={linkTo}>
                The red
            </Link>
            <Link to='/' className={state[0].status ? state[0].conection : change} onClick={() => handleChange(0)}>
                home
            </Link>
            <Link to='/about' className={state[1].status ? state[1].conection : change} onClick={() => handleChange(1)}>
                about me
            </Link>
            <Link to='/undefined-2' className={state[2].status ? state[2].conection : change} onClick={() => handleChange(2)}>
                works
            </Link>
            <Link to='/settings' className={state[3].status ? state[3].conection : change} onClick={() => handleChange(3)}>
                settings
            </Link>
        </nav>
    )
};

export default Menu;