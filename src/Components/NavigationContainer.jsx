import Movienies from './Movienies'
import NavItems from './NavItems'
import '../styles/NavigationContainerStyles.css'
import { Link } from "react-router-dom";


const NavigationContainer = () =>{
    return(
        <div className='navcontainer'>
            <div>
                <Link to="/wishlist"> <NavItems text='My List' /></Link>
            </div>

            <div>
                <Movienies />
            </div>

            <div>
                <Link to="/login" ><NavItems text='Log in' /></Link>                
            </div>
        </div>
    )
}

export default NavigationContainer;