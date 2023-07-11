import {NavLink} from 'react-router-dom';
import {navigationLinks} from '../constants/navigationLinkConst';
const Navbar = () => {
   return (
      <nav>
         {navigationLinks.map((item, index)=>(<NavLink className='navigLink' key={index} to={item.path}>{item.name}</NavLink>))}
      </nav>
      )
}
export default Navbar;