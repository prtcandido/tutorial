
// Usar o componente Link para navega��o. O Link os componentes s�o trocados sem ocorrer refresh da p�gina.
import { Link, Outlet } from 'react-router-dom';
import './Layout.scss';

export default function Layout() {
    return (
        <div>
            <nav className="menu">
                <ul>
                    <li>
                        <Link to="/">Home </Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre </Link>
                    </li>
                    <li>
                        <Link to="/produto">Produto </Link>
                    </li>
                    <li>
                        <Link to="/iot">IoT </Link>
                    </li>
                </ul>
            </nav>
            <div className="grade">
                <div className="lateral"></div>
                <Outlet /> {/* P�gina correspondente ao link selecionado � exibida aqui. */}
                <div className="lateral"></div>
            </div>
        </div>
    )
}