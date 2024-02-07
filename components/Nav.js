import react from 'react'

function Nav(){
    return(
        <nav>
            <ul>
                <li><img src="https://www.48hourslogo.com/oss/works/2022/01/08/0505469710/115168_45900_b7fe96b1-15b4-4d63-a08e-b0f50524f3a9.jpg" width={200} height={50} alt='Image'></img></li>
                <li><a href='/home'>Homepage</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/blog'>Blog</a></li>
            </ul>
        </nav>
    );
}
export default Nav;