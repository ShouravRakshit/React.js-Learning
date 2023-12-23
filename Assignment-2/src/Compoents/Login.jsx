const LoginStatusBtn = (status) => {
    if (status) {
        return(
            <h2 >Logout</h2>
        )
    } else {
        return(
            <h2 style={{color: "gold"}}>Login</h2>
        )
    }
}


const Login = () => {
  const status = false;

  return (<div>
    <h1>Login Status</h1>
    {LoginStatusBtn(status)}
  </div>);
};

export default Login;
