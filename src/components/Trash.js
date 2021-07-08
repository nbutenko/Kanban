import React from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader, Table} from "reactstrap";
import {connect} from "react-redux";
import {cardAllDeleteFromTrashCan, cardChangeTrashFlag, cardDeleteById} from "../redux/actions/card";

export function Trash(props) {
    return(
        <Modal isOpen={props.modal.isOpen} toggle={props.toggle} className={'trash'}>
            <ModalHeader toggle={props.toggle}>Trash can</ModalHeader>
            <ModalBody>
                <Table bordered>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Priority</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.cards.filter(el => el.trash).map(el =>
                        <tr key={el._id}>
                            <td>{el.name}</td>
                            <td>{el.description}</td>
                            <td>{el.status}</td>
                            <td>{el.priority}</td>
                            <td>
                                <Button color="danger" size="sm" onClick={() => {props.cardDelete(el._id); props.toggle()}}>&#10008; Delete forever</Button>
                                <Button color="success" size="sm" onClick={() => {props.cardChangeTrashFlag(el._id, false);props.toggle()}}>&#8634; Restore</Button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={() => {props.cardAllDeleteFromTrashCan(props.cards); props.toggle()}}>Delete all forever</Button>
                <Button color="secondary" onClick={props.toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
        )
}

const mapStateToProps = (state) => ({
    modal: state.modal,
    cards: state.card,
})

const mapDispatchToProps = (dispatch) => ({
    cardChangeTrashFlag: (cardId, flag) => dispatch(cardChangeTrashFlag(cardId, flag)),
    cardDelete: (cardId) => dispatch(cardDeleteById(cardId)),
    cardAllDeleteFromTrashCan: (cards, flag) => dispatch(cardAllDeleteFromTrashCan(cards, flag)),
    toggle: () => dispatch({type: "TOGGLE"}),
})

export default connect(mapStateToProps, mapDispatchToProps)(Trash)