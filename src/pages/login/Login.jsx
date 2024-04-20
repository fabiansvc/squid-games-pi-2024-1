import { useNavigate } from "react-router-dom";
import "./stylesLogin.css";
export default function Login() {

    const navigate = useNavigate();

    const onHandleButtonStart = () => {
        navigate('/level1', {
            state: {
                firstTime: true
            }
        })
    }

    return (
        <div className="container">
            <div className="logo-univalle">
                <img src="/assets/images/logo-univalle.png" alt="Logo Universidad del Valle" />
            </div>
            <div className="title-squid-games">
                Bienvenido a<br/>Squid Games
            </div>
            <div onClick={onHandleButtonStart} className="button-start">
                <button>Iniciar</button>
            </div>
        </div>
    );

}