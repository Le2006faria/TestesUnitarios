import AuthRequests from '../../fetch/AuthRequests';
import { useState } from 'react';

function FormLogout() {
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Gerenciando estado de login

    const handleLogout = async (e) => {
        e.preventDefault();

        try {
            // Remove o token e redireciona para a página inicial
            AuthRequests.removeToken();
            setIsLoggedIn(false);
            window.location.href = '/';
        } catch (error) {
            console.error('Erro ao tentar realizar logout:', error);
            alert('Erro ao fazer logout, tente novamente.');
        }
    };

    return (
        <button onClick={handleLogout}>Logout</button> // Usando onClick em vez de onSubmit
    );
}

export default FormLogout;
