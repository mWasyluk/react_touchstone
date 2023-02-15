import NotFoundImage from 'assets/not-found.gif'
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const NotFoundView = styled.div`
    font-size: 2.5em;
    color: rgb(255, 150, 150);

    padding: 20px;
`;

const Underlined = styled.span`
    text-decoration: underline;
`;

function NotFound() {
    const location = useLocation();

    return (
        <NotFoundView className="center-view-container">
            <h1>#404</h1>
            <h2>Taka strona nie istnieje</h2>
            <h5>
                Upewnij się, że w adresie <Underlined>{window.location.host + location.pathname}</Underlined> nie ma błędu i spróbuj ponownie.
            </h5>
            <img alt='' src={NotFoundImage}></img>
        </NotFoundView>
    )
}

export default NotFound;