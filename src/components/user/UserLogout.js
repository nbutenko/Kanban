import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {connect} from "react-redux";
import React from "react";
import {userLogout} from "../../redux/actions/user";

function UserLogout (props) {
    return (
        <Modal isOpen={props.modal.isOpen} toggle={props.toggle}>
            <ModalHeader toggle={props.toggle}>We'll miss you &#9785;</ModalHeader>
            <ModalBody>Are you sure you want to logout?</ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={() => {props.userLogout(); props.toggle()}}>Logout</Button>
                <Button color="secondary" onClick={props.toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}

const mapStateToProps = (state) => ({
    modal: state.modal,
})

const mapDispatchToProps = (dispatch) => ({
    toggle: () => dispatch({type: "TOGGLE"}),
    userLogout: () => dispatch(userLogout()),
})

export default connect (mapStateToProps, mapDispatchToProps)(UserLogout);