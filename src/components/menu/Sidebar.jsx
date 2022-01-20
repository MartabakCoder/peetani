import {
  Home,
  Alarm,
  PermIdentity,
  History,
  ExitToApp
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
          <ul className="sidebarList">
            <NavLink to="/" className="link" exact>
            <li className="sidebarListItem">
              <Home className="sidebarIcon" />
              Home
            </li>
            </NavLink>
            <NavLink to="/timer" className="link">
            <li className="sidebarListItem">
              <Alarm className="sidebarIcon" />
              Timer
            </li>
            </NavLink>
            <NavLink to="/history" className="link">
              <li className="sidebarListItem">
                <History className="sidebarIcon" />
                History
              </li>
            </NavLink>
            <NavLink to="/profile" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Profile
              </li>
            </NavLink>
          </ul>
      </div>
      <div className="sidebarWrapperBottom">
          <ul className="sidebarList">
            <NavLink to="/logout" className="link" exact>
            <li className="sidebarListItem" sx={{ color: 'error.main' }}>
              <ExitToApp className="sidebarIcon" />
              Logout
            </li>
            </NavLink>
          </ul>
      </div>
    </div>
  );
}
