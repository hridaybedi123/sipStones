import './Navi.css';
function Navi() {
    return ( 
        <div className="Navi">
            
            <nav className='navg'>
            
                <ul className='list'>
                <a href='/#'>
                <img src="SSIco.png" class="logo"/>
                </a>
                    <li><a href='http://localhost:3000/#'>Home</a></li>
                    <li><a href='/About'>About</a></li>
                    <li><a href='/Contact'>Contact Us</a></li>
                    <li><a href='/login'>Login</a></li>
                </ul>
            </nav>
        </div>
     );
}

export default Navi;