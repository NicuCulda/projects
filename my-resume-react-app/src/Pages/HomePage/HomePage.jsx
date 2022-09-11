import './HomePage.css'
import React from "react"
import Typed from "react-typed"


const HomePage = () => {

    return (
                <div className='header'>
                    <div className='main-info'>
                        <h1>My Online Resume</h1>
                        <div>
                            <Typed
                            className="typed-text"
                            strings={['Web Development', 'Front-End Development', 'JavaScript Development']} 
                            typeSpeed={40}
                            backSpeed={60}
                            loop
                            />
                        </div>
                    </div>
                </div>
    )
}





export default HomePage