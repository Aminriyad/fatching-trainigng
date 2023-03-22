import source from "./amin.js"
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
      {source.map((x) => {
        return(
      <div key={x.id}>
          <h4>{x.brand}</h4>
          <b>{x.name}</b>
          <b>"{x.price}"</b>
          {x.rating && <p>rating : {x.rating}</p>}
          <img src={x.image_link} alt="" style={{height:"auto",width:"100px"}}/>
        </div>)})}
    </div>
    </div>
  );
};

export default Work;
