function Login(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');    

  return (
    <Card
      bgcolor="secondary"
      header="Login"
      status={status}
      body={show ? 
        <LoginForm setShow={setShow} setStatus={setStatus}/> :
        <LoginMsg setShow={setShow} setStatus={setStatus}/>}
    />
  ) 
}

function LoginMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        Authenticate again
    </button>
  </>);
}

function LoginForm(props){
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleLogout(){
    props.setStatus("User logged out!");

  }

  function handle(){

    if(email == '')
    {
      alert('email is required .!')
    }
  
    fetch(`/account/login/${email}/${password}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            //props.setStatus("Welocome ");
            const name=Object.values(data); 
            console.log(name[2]);
            props.setStatus("Welcome "+name[1]+" !" );
            props.setShow(false);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus('Email or password not correct!')
            //props.setShow(false);
            console.log('err:', text);
        }
    });
  }


  return (<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Password<br/>
    <input type="password" 
      className="form-control" 
      placeholder="Enter password" 
      value={password} 
      onChange={e => setPassword(e.currentTarget.value)}/><br/>

    <button type="submit" className="btn btn-light" disabled={!password} onClick={handle}>Login</button>
    <button type="submit" className="btn btn-light"  onClick={handleLogout}>Logout</button>
  </>);
}