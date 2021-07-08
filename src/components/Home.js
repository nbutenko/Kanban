import React from "react";
import {connect} from "react-redux";

function Home(props){
    return (
        <div className={"box"}>
            <nav className="navbar navbar-dark img-header transparent"></nav>
            <nav className="navbar navbar-dark form-inline justify-content-start img-header">
                <button type="button" className="btn btn-outline-light" onClick={() => props.toggle('USER_REG')}>New user</button>
                <button type="button" className="btn btn-outline-warning" onClick={() => props.toggle('USER_AUTH')}>Registered user</button>
            </nav>

            <img src="https://miro.medium.com/max/5878/1*O-VF1f6TUrJc1c3bRjEH1w.jpeg" className="img-fluid" alt="..." />
        </div>
    )
}

const mapStateToProps = (state) => ({
    modal: state.modal
})

const mapDispatchToProps = (dispatch) => ({
    toggle: (component) => dispatch({type: "TOGGLE", payload: component}),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);