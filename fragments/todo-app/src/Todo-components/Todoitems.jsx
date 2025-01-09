  function Todoitems(){
    let itemName = 'Buy Milk';
    let itemdate = '4/10/2023';
    return <div className = "container text-center">
      <div className="row">
    <div className="col-6">{itemName}</div>
    <div className="col-4">{itemdate}</div>
    <div className="col-2">
      <button className="btn btn-danger">Delete</button>
    </div>
  </div>
  <div className="row">
    <div className="col-6">{itemName}</div>
    <div className="col-4">{itemdate}</div>
    <div className="col-2">
      <button className="btn btn-danger">Delete</button>
    </div>
  </div>
    </div>
  }
  export default Todoitems;