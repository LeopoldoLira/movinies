import '../styles/NavItemsStyles.css'


const NavItems = ({text}) => {
    return(
        <div>
            <ul>
             <li>{text}</li>
            </ul>
        </div>
    );
}

export default NavItems;