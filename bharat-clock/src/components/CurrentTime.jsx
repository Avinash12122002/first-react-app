 let CurrentTime = () =>{
  return <p className="lead">This Is The Curent Time: {new Date().toLocaleDateString()} - {new Date().toLocaleTimeString()}
</p>;
 }
 export default CurrentTime;