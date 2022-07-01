import React from "react";
import { DownOutlined } from '@ant-design/icons'; 

const ViewOne = ({downPixel}) => {

    const handleDown = () => {
        window.scrollTo({
            behavior: 'smooth',
            top: downPixel
        })

    }

    /*useEffect( () => {
        const handleEvent = e => {
            //setScrollFixed(window.pageYOffset);
            /**
             * Muestra los pixeles que se han recorrido
             */
        //}

        /*window.addEventListener("scroll", handleEvent);

        return () => {
            window.removeEventListener('scroll', handleEvent);
        }*/
    //}, [] )
    
    return (
        <>
            <h1 className="me" align='left'>
                Hi,
                <br />
                Jorge Castro
            </h1>
                {/*<p>
                Cada uno de nosotros le atribuye un sentimiento de arte a aquello emocional para el.
                <br />
                La creacion, estructura y complejidad al escribir codigo, es mi arte.
                </p>*/}
            <div className="inital">
                <h3 className="transition">Interactive Front-end Developer</h3>
            </div>  
            <button onClick={handleDown} className='btn-down'>
                <DownOutlined />
            </button>
        </>
    )
};

export default ViewOne;