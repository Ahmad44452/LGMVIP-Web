import { useLogout } from "../../hooks/useLogout";

const today = new Date();
const todayDay = String(today.getDate()).padStart(2, '0');
const todayMonth = String(today.toLocaleString('en-US', {
  month: 'short',
}));
const todayYear = today.getFullYear();
const todayDayEng = String(today.toLocaleString('en-US', {
  weekday: 'long'
}));



const AppHeader = () => {

  const { logout } = useLogout();

  return (
    <div className="app__header">
      <div className="app__header--left">
        <div className="app__header--left-day">{todayDay}</div>
        <div>
          <div className="app__header--left-month">{todayMonth}</div>
          <div className="app__header--left-year">{todayYear}</div>
        </div>
      </div>
      <div className="app__header--right">
        <span className="app__header--right-day">{todayDayEng}</span>
        <span className="app__header--right-logout" onClick={() => logout()}>Logout</span>
      </div>
    </div>
  )
}

export default AppHeader;