import './SectionHeading.css';

const SectionHeading = (props) => {
  // Some Props I Use
  // mainTitle =   
  // subTitle =  
  // subColor= primary or secondary    
  // subPosition= 
  // --> start ,
  // --> center;

  const styleElem = {
    color: (props.subColor === "primary") ? "var(--color-primary)" : "var(--color-third)",
    textAlign: (props.subPosition === "start") ? "start" : "center",
    marginTop: "-5rem",
    marginLeft: (props.subPosition === "start") ? "3rem" : "",
  }
  return (
    <div className="section-heading">
      <h2 className="main-heading" style={{ textAlign: (props.subPosition === "start") ? "start" : "center" }} >{props.mainTitle}</h2>
      <h3 className="sub-heading" style={styleElem}>{props.subTitle}</h3>
    </div >
  )
}

export default SectionHeading;