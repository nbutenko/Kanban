import {Modal} from "reactstrap";
import {connect} from "react-redux";
import React from "react";

function CardImageFullSizePopUp (props) {
    console.log()
    return (
        <Modal isOpen={props.modal.isOpen} toggle={props.toggle} className={"card-img-full"}>
            <img src={props.modal.data.img} alt={"Full size card"} className={"container-fluid"}/>
        </Modal>
    )
}

const mapStateToProps = (state) => ({
    modal: state.modal,
})

const mapDispatchToProps = (dispatch) => ({
    toggle: () => dispatch({type: "TOGGLE"}),
})

export default connect (mapStateToProps, mapDispatchToProps)(CardImageFullSizePopUp);