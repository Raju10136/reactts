
const Cards=({ title, content }) =>{
    return (
      <>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="card" style={{ width: "200px" }}>
            <header className="card-header">
              <p className="card-header-title" style={{ display: "flex", justifyContent: "center" }}>
                {title}
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                {content}
              </div>
            </div>
            <div style={{ paddingBottom: "6px" }} >
              <button className="button is-info">live</button>
              <span style={{ paddingLeft: "3px" }}><button className="button is-info">demo</button></span> </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Cards;