import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {connect} from "react-redux";
import React from "react";
import {cardChangeTrashFlag} from "../../redux/actions/card";

function DeleteCardPopUp (props) {
    return (
        <Modal isOpen={props.modal.isOpen} toggle={props.toggle}>
            <ModalHeader toggle={props.toggle}>Delete card</ModalHeader>
            <ModalBody>Are you sure you want to delete this card? Please, confirm your decision.</ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={() => {props.cardChangeTrashFlag(props.modal.id, true); props.toggle()}}>&#10008; Delete</Button>
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
    cardChangeTrashFlag: (id, flag) => dispatch(cardChangeTrashFlag(id, flag)),
})

export default connect (mapStateToProps, mapDispatchToProps)(DeleteCardPopUp);