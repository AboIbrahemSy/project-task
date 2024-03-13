import './Buy.css'
const Buy=()=>{
    return  (
      <div className="center">
       <h1>Thanks</h1>
        <form >
          <div className="inputbox">
            <input type="text" required id="name"/>
            <span>Name</span>
          </div>
          <div className="inputbox">
            <input type="text" required id="message"/>
            <span>Message</span>
          </div>
          <div className="inputbox">
            <button type="submit">Pay</button>
          </div>
        </form>
          
        </div>
      );
}
export default Buy;