import './Buttons.css';

const PrimaryBtn = (props) => {
  // props.link 
  return (
    <a href={`./${props.link}`} className="btn btn-primary">{props.children}</a>
  );
}



export default PrimaryBtn;