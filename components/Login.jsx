import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.upper}></div>

      <div className={styles.content}>
        <div className={styles.down}>
          <h1>Log In</h1>
          <form action="">
            <input type="text" placeholder="     Username" /> <br />
        
            <input type="password" id={styles.myInput} placeholder="     Password" /> <br />
         
            <button type="submit" className={styles.sub}>LOG IN</button>

            <div className={styles.btns}>
                <a href="http://localhost:3000/Fpage">Sign Up</a>  <br />
                <a href="">Forgot Password?</a> 
                
            </div>
        
          </form>

    
        </div>
      </div>
    </div>
  );
};

export default Login;
