import React, {useState,useEffect} from "react"
import Typist from "react-typist"
import AboutUs from "../components/atoms/about-us"

const HomePage = ({}) => {
    const [loopCounter,setLoopCounter] = useState(1)

    useEffect(() => {
        setLoopCounter(1);
      }, [loopCounter]);
    return(
        <div className="home-page-container" >
            <div className="first-section">
            <div className="typist-container">
                { loopCounter ? (<Typist onTypingDone={()=>setLoopCounter(0)}>
                There are lots of good restaurants and events lets find the best one and join them!
                </Typist>) : (<div></div>)}
            </div>
            <button className="action"> More Information</button>
            </div>
            <div className="second-section">
                <AboutUs/>
            </div>
            <div className="third-section">
                TODO: BEST RESTARUANT AOPTIONS WILL COME HERE
            </div>
        </div>
    )
}

export default HomePage;