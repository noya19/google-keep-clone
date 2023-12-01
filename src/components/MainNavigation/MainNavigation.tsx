import LeftNavigation from "./LeftNav/LeftNavigation";
import MiddleNavigation from "./MiddleNav/MiddleNavigation";
import RightNavigation from "./RightNav/RightNavigation";
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return <div className={classes.nav}>
        <LeftNavigation />
        <MiddleNavigation />
        <RightNavigation />
    </div>
}

export default MainNavigation;