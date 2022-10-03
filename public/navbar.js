function NavBar(){
  return(

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src='./wallet.PNG' width="50 px" height="50 px" />
      <a className="navbar-brand" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-toggle="tooltip" title="Creating new Account Page" href="#/CreateAccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tooltip" title="User Login Page" href="#/login/">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tooltip" title="Amount Deposit Page" href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tooltip" title="Amount Withdraw Page" href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tooltip" title="Balance checking page" href="#/balance/">Balance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tooltip" title=" All user data page" href="#/alldata/">AllData</a>
          </li>         
        </ul>
      </div>
    </nav>

  );
}