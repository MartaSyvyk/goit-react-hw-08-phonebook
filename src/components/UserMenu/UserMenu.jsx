import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import operations from 'redux/auth/auth_operations';
import css from './UserMenu.module.css';

function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user.name);
  return (
    <div className={css.container}>
      <div>{user}, welcome to your account </div>
      <button type="button" onClick={() => dispatch(operations.logout())}>
        Logout
      </button>
    </div>
  );
}
export default UserMenu;
