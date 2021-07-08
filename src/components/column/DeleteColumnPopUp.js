import {Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {connect} from "react-redux";
import React, {useState} from "react";
import {columnDeleteById} from "../../redux/actions/column";

function DeleteColumnPopUp (props) {
    const [columnId, setColumnId] = useState('');

    return (
        <Modal isOpen={props.modal.isOpen} toggle={props.toggle}>
            <ModalHeader toggle={props.toggle}>Delete column</ModalHeader>

            <ModalBody>
                <Label for="columnId">Choose a column to delete: </Label>
                <Input type="select" id="columnId" value={columnId} onChange={e => setColumnId(e.target.value)}>
                    {props.columns.map(el => <option value={el._id}>{el.title}</option>)}
                </Input>
            </ModalBody>

            <ModalFooter>
                <Button color="danger" onClick={() => props.columnDeleteById(columnId)}>&#10008; Delete</Button>
                <Button color="secondary" onClick={props.toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}

const mapStateToProps = (state) => ({
    modal: state.modal,
    columns: state.column
})

const mapDispatchToProps = (dispatch) => ({
    toggle: () => dispatch({type: "TOGGLE"}),
    columnDeleteById: (id) => dispatch(columnDeleteById(id)),
})

export default connect (mapStateToProps, mapDispatchToProps)(DeleteColumnPopUp);