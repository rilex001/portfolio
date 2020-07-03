import React from 'react'


function Project({name, info, picture, sitelink, codelink}) {
    return (
        <>
            <h3 className='center'>{name}</h3>
            <img className='projectimage' src={picture} alt='video' />
            <p className='projectinfo'>{info}</p>
            <div className='buttoncontainer center'>
            {sitelink.length > 1 ? <a className='button' href={sitelink} target='blank'>Visit site</a> : null}
            <a className='button' href={codelink} target='blank'>View code</a>
            </div>
        </>
    )
}

export default Project
