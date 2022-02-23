const Auth = () => {
    if (localStorage.getItem('user')) {
        return localStorage.getItem('user');
    } else {
        return false;
    }
}

export default Auth;