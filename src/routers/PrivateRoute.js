import{Route} from 'react-router-dom';
export default function PrivatRoute(props){
    return(
        <Route exact = {props.exact} path={props.pathprops.component} />
    )
}