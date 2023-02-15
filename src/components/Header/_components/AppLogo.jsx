import { Link } from "react-router-dom";

function AppLogo(props) {
    const {
        title,
        image,
        link
    } = props;

    return (
        <div className="logo">
            <Link to={link} className='animated'><img alt='menu' src={image}></img> <span>{title}</span></Link>
        </div>
    )
}

export default AppLogo;