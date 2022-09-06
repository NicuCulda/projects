import './HomePage.css'
import React from 'react'
import img from '../../Images/img-intro.jpg'
import Image from 'react-bootstrap/Image'

const HomePage = () => {


    return (
        <div className='intro'>
            <div className='intro-left'>
                <div className='intro-left-wrapper'>
                    <h2 className='intro-introduction'>Hello, My Name Is</h2>
                    <h2 className='intro-name'>Nicolae Culda</h2>
                    <div className='intro-title'>
                        <div className='intro-title-wrapper'>
                            <div className='intro-title-item'>Web Developer</div>
                            <div className='intro-title-item'>JavaScript Developer</div>
                            <div className='intro-title-item'>React.Js</div>
                            <div className='intro-title-item'>Front-End Developer</div>
                        </div>
                    </div>
                    <div className='intro-description'>
                        <p>Web developer in the making, learning HTML, CSS, Javascript and React.</p>
                    </div>
                </div>
            </div>
            <div className='intro-right'>
                <div className='intro-bg'></div>
                <img src={img} alt='' className='intro-img' />
            </div>
        </div>
    )
}


export default HomePage;