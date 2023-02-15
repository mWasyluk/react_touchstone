import { Link } from "react-router-dom";

function NavigationItem(props) {
    const {
        title,
        image,
        link,
    } = props;

    return (
        <Link to={link} className='animated'><span>{title}</span> <img alt={title} src={image}></img></Link>
    )
}

export default NavigationItem;