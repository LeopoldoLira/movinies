import Movienies from './Movienies'
import NavItems from './NavItems'
import '../styles/NavigationContainerStyles.css'


const NavigationContainer = () =>{
    return(
        <div className='navcontainer'>
            <div>
                <NavItems text='My List' />
            </div>

            <div>
                <Movienies />
            </div>

            <div>
                <NavItems text='Log in' />
            </div>
        </div>
    )
}

export default NavigationContainer;