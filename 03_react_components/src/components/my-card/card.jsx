import "./style.css"
const card = ({pic,title,text}) => {
    return(
        <>
      <div className="card">
        <img src={pic} className="Card-Image"></img>
        <div className="card-content">
          <img className="card-image" src={pic} alt="Card Image"></img>
          <div className="card-text">
            <p className="card-title">{title}</p>
            <p className="card-description">{text}</p>
          </div>
        </div>
      </div>
    </>
    )
};
export default card