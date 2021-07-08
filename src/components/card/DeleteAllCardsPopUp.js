import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {connect} from "react-redux";
import React from "react";
import {cardAllChangeTrashFlag} from "../../redux/actions/card";

function DeleteAllCardsPopUp (props) {

    return (
        <Modal isOpen={props.modal.isOpen} toggle={props.toggle}>
            <ModalHeader toggle={props.toggle}>Delete all cards</ModalHeader>
            <ModalBody>Are you sure you want to delete <b>all the cards</b>? Please, confirm your decision.</ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={() => {props.cardAllChangeTrashFlag(props.cards, true); props.toggle()}}>Delete</Button>
                <Button color="secondary" onClick={props.toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}

const mapStateToProps = (state) => ({
    modal: state.modal,
    cards: state.card
})

const mapDispatchToProps = (dispatch) => ({
    toggle: () => dispatch({type: "TOGGLE"}),
    cardAllChangeTrashFlag: (cards, flag) => dispatch(cardAllChangeTrashFlag(cards, flag)),
})

export default connect (mapStateToProps, mapDispatchToProps)(DeleteAllCardsPopUp);