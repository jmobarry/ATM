const ATMDeposit = ({onChange,isDeposit}) =>{
   
    const choice = ["Deposit","Cash back"]

    return (
        <label className ="label huge">
            <p>{choice[Number(!isDeposit)]}</p>
            <input type="number" width ="200" onChange={onChange}></input>
            <input type="submit" width ="200"value="Submit"></input>
        </label>
    )
}

const Account = () => {

    let deposit = 0;
    const [totalState,setTotalState] = React.useState(0);
    const [isDeposit,setIsDeposit] = React.useState(true);

    let status = `Account Balance $${totalState}`;
    
    const handleChange = event=>{
        console.log(`handleChange ${event.target.value}`);
        deposit = Number(event.target.value);
    };
    
    const handleSubmit = () =>{

        if(isDeposit == true){
            setTotalState(totalState+deposit);
            event.preventDefault();
        }
        else if(isDeposit ==false){

            if((totalState-deposit) >= 0){
                setTotalState(totalState-deposit);
                event.preventDefault();
            }
            else{
                alert("You will overdraw");
                event.preventDefault();
                return;
            }
        }
        event.preventDefault(); 
       
    }

    return(
        <form id='form' onSubmit ={handleSubmit}>
            <h5 id ='total'>{status}</h5>
            <button id="button"onClick ={() => setIsDeposit(true)}>Deposit</button>
            <button id="button" onClick ={() => setIsDeposit(false)}>Cash Back</button>
            <ATMDeposit onChange={handleChange} isDeposit={isDeposit}>Deposit</ATMDeposit>
            
        </form>
    )
}

ReactDOM.render(<Account/>, document.getElementById("root"));

