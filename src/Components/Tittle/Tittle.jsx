import './tittle.css';

function Tittle(props) {
    switch (props.h) {
        case 1:
            return <h1 className={props.className ? props.className : ''}>{props.tittle}</h1>;
        case 2:
            return <h2>{props.tittle}</h2>;
        case 3:
            return <h3>{props.tittle}</h3>;
        case 4:
            return <h4>{props.tittle}</h4>;
        case 5:
            return <h5>{props.tittle}</h5>;
        default:
            return <h6>{props.tittle}</h6>;
    }
}

export default Tittle;
