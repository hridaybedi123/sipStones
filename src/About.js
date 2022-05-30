import './App.css';
import Navi from './Navi';
import './About.css';
function About() {
    return (
        <div>
            <Navi/>
            <div className='fumbo pt-64'>
                <div className='borderlands p-3 ml-96 mr-96 text-white'>
                    <h1 class='text-5xl'>About Stepping Stones</h1>
                    <p1 class='p1'>Stepping stones is a website focused on streamlining the process of figuring out what you need to do to achieve your dream job. Our mission is to simplify the transition from highschool to post secondary by ensuring students get all pre-requisites for the courses they will be taking and we also wanted to give students the tools to be successful. It is a hassle to find the pre-requisites to many courses in post secondary, and an even bigger hassle finding what courses get you qualified for your dream career. This website hopes to ease that pain, and reduce confusion for students.</p1>
                </div>
            </div>
        </div>
        
      
    );
}
    
export default About;