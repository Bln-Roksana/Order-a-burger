import React, {Component, Fragment} from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';


class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState){
        //this is short for IF statement
        return nextProps.show!==this.props.show;
    }

    render (){
        return (
            <Fragment >
            <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div className={classes.Modal}
                style={{
                    transform: this.props.show? 'translateY(0)': 'translateY(-100vh)',
                    opacity: this.props.show? '1': '0'
                }} >
                    {this.props.children}
                </div>
        </Fragment>
        )
    }
}


export default Modal;


// const modal = (props) => (

//     <Fragment >
//         <Backdrop show={props.show} clicked={props.modalClosed} />
//             <div className={classes.Modal}
//             style={{
//                 transform: props.show? 'translateY(0)': 'translateY(-100vh)',
//                 opacity: props.show? '1': '0'
//             }} >
//                 {props.children}
//             </div>
//     </Fragment>
// );