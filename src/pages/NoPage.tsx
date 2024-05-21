import { Link } from 'react-router-dom'; 
import errorImage from '../../images/errorimage.gif';
import './ErrorPage.css';

export function NoPage() {
    return (
        <div className="error-page">
            <h1>Nem várt hiba történt!</h1>
            <img src={errorImage} alt="error-image" />
            <Link to="/">Vissza</Link> 
        </div>
    );
}
