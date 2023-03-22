import amin from "./amin.js"
import "./aminer.css"
const Work = () => {
    let x = document.getElementById("amin")
    const mm = (event) =>{
        event.preventDefault()
            alert(`${x.value} you fucker`)
    }
  return (
    <div>
      <h2>amin's</h2>
      <form onSubmit={mm}>
      <input id={"amin"}type="text" />
      <button>button</button>
      </form>
      <div className={"aminer"}>
      {amin.map((amin) => {
        return(
      <div key={amin.id}>
          <h4>{amin.brand}</h4>
          <b>{amin.name}</b>
          <b>"{amin.price}"</b>
          {amin.rating && <p>rating : {amin.rating}</p>}
          <img src={amin.image_link} alt="" style={{height:"auto",width:"100px"}}/>
        </div>)})}
    </div>
    </div>
  );
};

export default Work;
