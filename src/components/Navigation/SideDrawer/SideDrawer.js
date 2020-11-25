import React,{Fragment} from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';


const sideDrawer = (props) => {
    
    let attachedClasses=[classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasses=[classes.SideDrawer, classes.Open]
    }
    
    
    
    //..before returning something, we want to add something conditionallt
    return (
        <Fragment>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                    {/* <Logo height="11%"/> */}
                </div>

                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Fragment>
    );
}

export default sideDrawer;