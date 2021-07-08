import {Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import React, {useState} from "react";
import {connect} from "react-redux";
import {cardSaveNew} from "../../redux/actions/card";

function EditCardForm (props) {
    const [name, setName] = useState(props.modal.data.name);
    const [description, setDescription] = useState(props.modal.data.description);
    const [priority, setPriority] = useState(props.modal.data.priority);
    const [status, setStatus] = useState(props.modal.data.status);

    return (
        <Modal isOpen={props.modal.isOpen} toggle={props.toggle}>
            <ModalHeader
                toggle={props.toggle}>Edit card</ModalHeader>
            <ModalBody>
                <Label for="name">Name: </Label>
                <Input type="text" id="name" value={name} onChange={e => setName(e.target.value)}/>

                <Label for="description">Description: </Label>
                <Input type="textarea" id="description" rows={5} value={description} onChange={e => setDescription(e.target.value)}/>

                <Label for="priority">Priority: </Label>
                <Input type="number" min={1} id="priority" value={priority} onChange={e => setPriority(e.target.value)}/>

                <Label for="status">Status: </Label>
                <Input type="select" id="status" value={status} onChange={e => setStatus(e.target.value)}>
                    <option value="to do">To do</option>
                    <option value="progress">In progress</option>
                    <option value="review">Review</option>
                    <option value="done">Done</option>
                </Input>
            </ModalBody>

            <ModalFooter>
                <Button color="success" onClick={() => {props.saveCard(props.modal.data.id, name, description, priority, status); props.toggle()}}>&#10004; Save</Button>
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
    saveCard: (id, name, description, priority, status) => dispatch(cardSaveNew(id, name, description, priority, status))
})

export default connect (mapStateToProps, mapDispatchToProps)(EditCardForm);