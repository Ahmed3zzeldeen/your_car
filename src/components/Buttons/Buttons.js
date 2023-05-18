import './Buttons.css';

const PrimaryBtn = (props) => {
  return (
    <button className="btn btn-primary">{props.children}</button>
  );
}



export default PrimaryBtn;