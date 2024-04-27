import { useNavigate } from "react-router-dom";
import "./stylesLogin.css";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
    const navigate = useNavigate();
    const auth = useAuth();

    const onHandleButtonLogin = async () => {
        await auth.loginWithGoogle().then((res)=>{
            navigate('/level1')
        }).catch((error)=>{
            console.error(error)
        })
    }

    return (
        <div className="container">
            <div className="logo-univalle">
                <img src="/assets/images/logo-univalle.png" alt="Logo Universidad del Valle" />
            </div>
            <div className="title-squid-games">
                Bienvenido a<br />Squid Games
            </div>
            <div onClick={onHandleButtonLogin} className="button-start">
                <button>Login</button>
            </div>
        </div>
    );

}