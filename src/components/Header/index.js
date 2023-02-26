import './_styles/style.css'

import AppLogo from './_components/AppLogo';
import DashboardImage from 'assets/dashboard.png';
import LogotypImage from 'assets/touchstone-logotyp.svg'
import Navigation from './_components/Navigation';
import NavigationUtil from 'utils/NavigationUtil';
import ProfileImage from 'assets/profile.png';
import { appTitle } from 'App';

function Header() {
    const headerNavigations = {
        home: {
            title: appTitle,
            image: LogotypImage,
            link: NavigationUtil.links.home
        },
        profile: {
            title: 'Profil',
            image: ProfileImage,
            link: NavigationUtil.links.ofProfiles.home
        },
        dashboard: {
            title: 'Tablica',
            image: DashboardImage,
            link: NavigationUtil.links.ofDashboard.home
        }
    }

    return (
        <header className="header">
            <AppLogo {...headerNavigations.home} />
            <Navigation options={[
                headerNavigations.dashboard,
                headerNavigations.profile
            ]} />
        </header>
    )
}

export default Header;