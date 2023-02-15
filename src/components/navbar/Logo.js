import AdbIcon from '@mui/icons-material/Adb';

import './Navbar.scss';
import navbarLogo from '../../assets/log-navbar.png';

function Logo({hasLogo}) {
  return (
    <>
      {hasLogo?
        (
          <div className='logo__container'>
            <div className='logo__image'>
              <img src={navbarLogo} alt='logo' width={30}/>
            </div>
          </div>
        ) : (
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        )
      }
    </>
  );
}

export default Logo;