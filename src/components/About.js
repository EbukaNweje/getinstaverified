import React from 'react'
import '../css/About.css'
import '../css/mobileabout.css'
import Logo1 from '../asset/First.png'
import Logo2 from '../asset/Second.png'
import Logo3 from '../asset/Third.png'

const About = () => {
  return (
    <div>
        <div class="Aboutmain">
    <div class="ccontainer">
        <div class="cone">
            <div class="txtone">
            <h3>We Build Relationships</h3>
            <p>Our relationship with Instagram has never been stronger, 
                we’ve helped over 500 Instagram accounts get verified.</p>
            </div>
            <div class="txtone">
                <h3>Professional PR articles</h3>
                <p>Our dedicated team of PR experts have written hundreds of 
                    articles to increase social proof and get clients verified.</p>
            </div>
        </div>
        <div class="two">
            <div class="innertwo">
            <div><img src={Logo1} alt=""/></div>
            <div class="text">
            <h4>No Password Needed</h4>
            <p>We don’t need access to your account and don’t need any login information.</p>
        </div>
    </div>
    <div class="innertwo">
        <div><img src={Logo2} alt=""/></div>
        <div class="text">
        <h4>High Success Rate</h4>
        <p>Clients that use our method have a 96% higher chance of getting verified.</p>
    </div>
</div>
<div class="innertwo">
    <div><img src={Logo3} alt=""/></div>
    <div class="text">
    <h4>Fast Turnaround Time</h4>
    <p>We’ll have everything sorted and ready within 3 to 8 business days.</p>
</div>
</div>
        </div>
    </div>
</div>
    </div>
  )
}

export default About