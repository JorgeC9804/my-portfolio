import React, { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {    

    // NO SE CORROMPE POR LA INFORMACION    

    // el problea viene de las rutas

    const [text, setText] = useState('ayudenme');
    
    const handle = () => {
        console.log('active');
    }
 
    return (
        <div>
            About Me
            
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type='text'
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <button onClick={handle}>Push</button>

            </form>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsa minus dolorum tenetur illo maxime possimus repellat illum aspernatur impedit? Sit dolor numquam nisi est repellat harum nesciunt incidunt maiores.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum a nihil inventore doloribus officiis voluptatibus cumque reiciendis unde laboriosam iste, consectetur repellendus ipsam accusantium amet repudiandae voluptate suscipit laudantium delectus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam exercitationem deleniti, accusamus cupiditate et, quis reiciendis nulla neque consequuntur modi earum! Impedit aperiam aut labore sed! Quisquam repudiandae mollitia molestias!
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsa minus dolorum tenetur illo maxime possimus repellat illum aspernatur impedit? Sit dolor numquam nisi est repellat harum nesciunt incidunt maiores.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum a nihil inventore doloribus officiis voluptatibus cumque reiciendis unde laboriosam iste, consectetur repellendus ipsam accusantium amet repudiandae voluptate suscipit laudantium delectus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam exercitationem deleniti, accusamus cupiditate et, quis reiciendis nulla neque consequuntur modi earum! Impedit aperiam aut labore sed! Quisquam repudiandae mollitia molestias!
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsa minus dolorum tenetur illo maxime possimus repellat illum aspernatur impedit? Sit dolor numquam nisi est repellat harum nesciunt incidunt maiores.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum a nihil inventore doloribus officiis voluptatibus cumque reiciendis unde laboriosam iste, consectetur repellendus ipsam accusantium amet repudiandae voluptate suscipit laudantium delectus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam exercitationem deleniti, accusamus cupiditate et, quis reiciendis nulla neque consequuntur modi earum! Impedit aperiam aut labore sed! Quisquam repudiandae mollitia molestias!
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsa minus dolorum tenetur illo maxime possimus repellat illum aspernatur impedit? Sit dolor numquam nisi est repellat harum nesciunt incidunt maiores.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum a nihil inventore doloribus officiis voluptatibus cumque reiciendis unde laboriosam iste, consectetur repellendus ipsam accusantium amet repudiandae voluptate suscipit laudantium delectus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam exercitationem deleniti, accusamus cupiditate et, quis reiciendis nulla neque consequuntur modi earum! Impedit aperiam aut labore sed! Quisquam repudiandae mollitia molestias!
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsa minus dolorum tenetur illo maxime possimus repellat illum aspernatur impedit? Sit dolor numquam nisi est repellat harum nesciunt incidunt maiores.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum a nihil inventore doloribus officiis voluptatibus cumque reiciendis unde laboriosam iste, consectetur repellendus ipsam accusantium amet repudiandae voluptate suscipit laudantium delectus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam exercitationem deleniti, accusamus cupiditate et, quis reiciendis nulla neque consequuntur modi earum! Impedit aperiam aut labore sed! Quisquam repudiandae mollitia molestias!
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsa minus dolorum tenetur illo maxime possimus repellat illum aspernatur impedit? Sit dolor numquam nisi est repellat harum nesciunt incidunt maiores.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum a nihil inventore doloribus officiis voluptatibus cumque reiciendis unde laboriosam iste, consectetur repellendus ipsam accusantium amet repudiandae voluptate suscipit laudantium delectus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam exercitationem deleniti, accusamus cupiditate et, quis reiciendis nulla neque consequuntur modi earum! Impedit aperiam aut labore sed! Quisquam repudiandae mollitia molestias!
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsa minus dolorum tenetur illo maxime possimus repellat illum aspernatur impedit? Sit dolor numquam nisi est repellat harum nesciunt incidunt maiores.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum a nihil inventore doloribus officiis voluptatibus cumque reiciendis unde laboriosam iste, consectetur repellendus ipsam accusantium amet repudiandae voluptate suscipit laudantium delectus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam exercitationem deleniti, accusamus cupiditate et, quis reiciendis nulla neque consequuntur modi earum! Impedit aperiam aut labore sed! Quisquam repudiandae mollitia molestias!
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsa minus dolorum tenetur illo maxime possimus repellat illum aspernatur impedit? Sit dolor numquam nisi est repellat harum nesciunt incidunt maiores.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum a nihil inventore doloribus officiis voluptatibus cumque reiciendis unde laboriosam iste, consectetur repellendus ipsam accusantium amet repudiandae voluptate suscipit laudantium delectus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam exercitationem deleniti, accusamus cupiditate et, quis reiciendis nulla neque consequuntur modi earum! Impedit aperiam aut labore sed! Quisquam repudiandae mollitia molestias!
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsa minus dolorum tenetur illo maxime possimus repellat illum aspernatur impedit? Sit dolor numquam nisi est repellat harum nesciunt incidunt maiores.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum a nihil inventore doloribus officiis voluptatibus cumque reiciendis unde laboriosam iste, consectetur repellendus ipsam accusantium amet repudiandae voluptate suscipit laudantium delectus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam exercitationem deleniti, accusamus cupiditate et, quis reiciendis nulla neque consequuntur modi earum! Impedit aperiam aut labore sed! Quisquam repudiandae mollitia molestias!
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsa minus dolorum tenetur illo maxime possimus repellat illum aspernatur impedit? Sit dolor numquam nisi est repellat harum nesciunt incidunt maiores.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum a nihil inventore doloribus officiis voluptatibus cumque reiciendis unde laboriosam iste, consectetur repellendus ipsam accusantium amet repudiandae voluptate suscipit laudantium delectus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam exercitationem deleniti, accusamus cupiditate et, quis reiciendis nulla neque consequuntur modi earum! Impedit aperiam aut labore sed! Quisquam repudiandae mollitia molestias!
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsa minus dolorum tenetur illo maxime possimus repellat illum aspernatur impedit? Sit dolor numquam nisi est repellat harum nesciunt incidunt maiores.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum a nihil inventore doloribus officiis voluptatibus cumque reiciendis unde laboriosam iste, consectetur repellendus ipsam accusantium amet repudiandae voluptate suscipit laudantium delectus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam exercitationem deleniti, accusamus cupiditate et, quis reiciendis nulla neque consequuntur modi earum! Impedit aperiam aut labore sed! Quisquam repudiandae mollitia molestias!
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsa minus dolorum tenetur illo maxime possimus repellat illum aspernatur impedit? Sit dolor numquam nisi est repellat harum nesciunt incidunt maiores.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum a nihil inventore doloribus officiis voluptatibus cumque reiciendis unde laboriosam iste, consectetur repellendus ipsam accusantium amet repudiandae voluptate suscipit laudantium delectus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam exercitationem deleniti, accusamus cupiditate et, quis reiciendis nulla neque consequuntur modi earum! Impedit aperiam aut labore sed! Quisquam repudiandae mollitia molestias!
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsa minus dolorum tenetur illo maxime possimus repellat illum aspernatur impedit? Sit dolor numquam nisi est repellat harum nesciunt incidunt maiores.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum a nihil inventore doloribus officiis voluptatibus cumque reiciendis unde laboriosam iste, consectetur repellendus ipsam accusantium amet repudiandae voluptate suscipit laudantium delectus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam exercitationem deleniti, accusamus cupiditate et, quis reiciendis nulla neque consequuntur modi earum! Impedit aperiam aut labore sed! Quisquam repudiandae mollitia molestias!
            </p>
            <Link to='/'>
                Go back ! 
            </Link>
        </div>
    )
};

export default About;