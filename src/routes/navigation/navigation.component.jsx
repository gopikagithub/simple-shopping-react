import React,{Fragment, useContext} from "react";
import {Outlet,Link} from 'react-router-dom';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
//import  './navigation.style.scss'; changed to below 
import { NavigationComponent,NavLinks,NavLink,LogoContainer } from "./navigation.style";


const Navigation=()=>{
  const {currentUser}=useContext(UserContext);
  const {isCartOpen}=useContext(CartContext);
  return(
    <Fragment>
      <NavigationComponent>
        <LogoContainer to={'/'}>
          <CrwnLogo/> 
        </LogoContainer>
        <NavLinks>        
          <NavLink to={'/shop'}>
            <div>SHOP</div>
          </NavLink>
          <NavLink to={'/contact'}>
            <div>CONTACT</div>
          </NavLink>
          { currentUser? ( <NavLink as='span' onClick={signOutUser}>SIGN-OUT</NavLink>) : (<NavLink to={'/auth'}>SIGN-IN</NavLink>) }   
            <CartIcon/> 
        </NavLinks>
        {isCartOpen && <CartDropdown/>}
        </NavigationComponent>
       
          
      <Outlet/>
     </Fragment>
    
  )
}
export default Navigation;

 
  /*  return(
      <Fragment>
        <div className="navigation">
          <Link className="logo-container" to={'/'}>
            <CrwnLogo/> 
          </Link>
          <div className="nav-links-container">        
            <Link className="nav-link" to={'/shop'}>
              <div>SHOP</div>
            </Link>
            <Link className="nav-link" to={'/contact'}>
              <div>CONTACT</div>
            </Link>
            { currentUser? ( <span className="nav-link" onClick={signOutUser}>SIGN-OUT</span>) : (<Link className="nav-link" to={'/auth'}> <div>SIGN-IN</div></Link>) }   
              <CartIcon/> 
          </div>
          {isCartOpen && <CartDropdown/>}
         </div>
            
        <Outlet/>
       </Fragment>
      
    )
  }
  export default Navigation;*/
  