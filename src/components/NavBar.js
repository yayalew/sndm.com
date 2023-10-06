import React ,{useState }from "react";
import { Nav, NavLink}  from 'react-router-dom';
import "./NavBar.css";


import Sandman from '../assets/SANDMAN1111_w.png'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import DateRangeIcon from '@mui/icons-material/DateRange';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';


const navTabs = [
  {route: "/Music",
  icon: <LibraryMusicIcon />,
  label: "MUSIC",
  flag: true,
  },
  {route: "/Contact",
  icon: <MarkEmailUnreadIcon />,
  label: "CONTACT",
  flag: true,
  },
  {
    route: "/",
    label: "",
    image: <img src={Sandman} alt="Sandman Logo" className="artist-logo-nav"/>,
    flag: false,
    icon: <HomeIcon />,
    },
  {route: "/Shows",
  icon: <DateRangeIcon />,
  label: "SHOWS",
  flag: true,
  },
  {
    route: "/Merch",
    icon: <LocalMallIcon />,
    label: "MERCH",
    flag: true,
    external: "https://www.justbuyingtime.ca/",
  },
]

const isMobile = window.innerWidth <= 768; // Set your desired mobile breakpoint

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-menu">
        {navTabs.map((tab) => (
          <React.Fragment key={tab.route}>
            {tab.external ? (
              <a
                href={tab.external}
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="nav-item">
                  <div className="nav-icon">{tab.icon}</div>
                  <div className="nav-label">{tab.label}</div>
                </div>
              </a>
            ) : (
              <NavLink
                to={tab.route}
                className="nav-link"
                activeClassName="active"
              >
                {tab.flag || isMobile ? (
                  <div className="nav-item">
                    <div className="nav-icon">{tab.icon}</div>
                    <div className="nav-label">{tab.label}</div>
                  </div>
                ) : (
                  <div className="artist-box">
                    <div>{tab.image}</div>
                  </div>
                )}
              </NavLink>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

 