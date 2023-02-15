import css from './AppBar.module.css';
import { useSelector } from 'react-redux';

import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';



function AppBar () {
    const isLogged = useSelector(state => state.auth.isLoggedIn);
    return(
        <div className={css.container}>
            <Navigation/>
            {  isLogged ? <UserMenu/> : <AuthNav/> }
        

        </div>
    )

}
export default AppBar