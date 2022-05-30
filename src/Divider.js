import './Divider.css';
import Scholarships from './Scholarships';
function Divider() {
    return ( 
        <div className="divvy pl-96">
            <div className='column'>
                <a href='/Scholarships'>
                    <img src="booka.png" class="pogo"/>
                    <span>Scholarships</span>
                </a>
            </div>
            <div className='column2'>
                <a href='/PostSecondary'>
                    <img src="Post.png" class="nogo"/>
                    <span>Post HighSchool</span>
                </a>
            </div>
            
        </div>
    );
}

export default Divider;