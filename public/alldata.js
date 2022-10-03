
function AllData(){
    const [data, setData] = React.useState('');    
    
    React.useEffect(() => {
        
        // fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);                
            });

    }, []);

    function JsonDataDisplay(){
        var allData= Array.from(data);
        console.log(allData)
        const DisplayData=allData.map(
            (info)=>{
                return(
                    <tr>
                        <td>{info.name}</td>
                        <td>{info.email}</td>
                        <td>{info.password}</td>
                        <td>{info.balance}</td>
                    </tr>
                )
            }
        )
     
        return(
            <div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                     
                        
                        {DisplayData}
                        
                    </tbody>
                </table>
                 
            </div>
        )
     }

    return (<>
      <div>
      <h1>All User's Details in Bad Bank</h1>
      <JsonDataDisplay/>
    </div>
        
        
    </>);

    

}
