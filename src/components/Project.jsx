import React from 'react'
import {v4} from 'uuid';
import { Button } from 'react-bootstrap';


function Project({name, info, picture, sitelink, codelink, stack}) {
    return (
        <div key={v4()} >
            <h3 className='center'>{name}</h3>
            <div className='project' >
                <div className='imagecontainer'>
                    <img className='projectimage' src={picture} alt='video' />
                </div>
                <div className='projecttext'>
                    <p className='projectinfo center'>{info}</p>
                    <div className='stack'>
                        {stack && stack.map(item => <span className='program' key={v4()}><b>{item}</b></span>)}
                    </div>
                    <div className='buttoncontainer center'>
                        {sitelink.length > 1 ? <a className='button' href={sitelink} target='blank'>Visit site</a> : null}
                    <a className='button' href={codelink} target='blank'>View code</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
