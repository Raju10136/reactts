
const PdfCards = ({ title, content }) => {
  return (
    <div className="card sd-home-card" >
      <header className="card-header">
        <p className="card-header-title">
          {title}
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          <i></i>
          {content}
        </div>
      </div>
      <div className="card-footer">
        <button className="button is-info">live</button>
        <span style={{ paddingLeft: "3px" }}>
        <button className="button is-info">demo</button></span> </div>
    </div>
  )
}

export default PdfCards;