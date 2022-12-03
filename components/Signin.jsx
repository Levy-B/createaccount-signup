import styles from "./Signin.module.css";

const Signin = () => {
  return (
    <div className={styles.container}>
      <div className={styles.upper}></div>

      <div className={styles.content}>
        <div className={styles.down}>
          <h1>Create Account</h1>
          <form action="">
            <input type="text" placeholder="     Username" /> <br />
            <input type="text" placeholder="     EmailAddress" /> <br />
            <input type="password" id={styles.myInput} placeholder="     Password" /> <br />
            <input type="password" placeholder="     Confirm password" /> <br />
          
         
            <button type="submit" className={styles.sub}>SUBMIT</button>
         
            <a href="http://localhost:3000/Login">Already have an account?  Sign in</a>
        
          </form>

    
        </div>
      </div>
    </div>
  );
};

export default Signin;
