import {Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup} from "reactstrap";
import {connect} from "react-redux";
import React, {useState} from "react";
import {cardSaveNew} from "../../redux/actions/card";

function AddCardForm (props) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('to do');

    const closeModal = () => {
        setName('');
        setDescription('');
        setFile(null);
        setPriority('');
        setStatus('to do');
        props.toggle();
    }

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setFile(reader.result);
        }
    }

    return (
        <Modal isOpen={props.modal.isOpen} toggle={closeModal}>
            <ModalHeader
                toggle={closeModal}>Add new card</ModalHeader>
            <ModalBody>
                <Label for="name">Name:</Label>
                <Input type="text" id="name" value={name} onChange={e => setName(e.target.value)}/>

                <Label for="description">Description: </Label>
                <Input type="textarea" id="description" rows={5} value={description} onChange={e => setDescription(e.target.value)}/>

                <FormGroup row>
                    <Label for="file">Upload file: </Label>
                    <Input type="file" id="file" onChange={(e) => handleFileInputChange(e)}/>
                    {file && (
                        <img src={file} alt="chosen" className="previewImg"/>
                    )}
                </FormGroup>

                <Label for="priority">Priority: </Label>
                <Input type="number" min={1} id="priority" value={priority} onChange={e => setPriority(e.target.value)}/>

                <Label for="status">Status: </Label>
                <Input type="select" id="status" onChange={e => setStatus(e.target.value)}>
                    <option value="to do">To do</option>
                    <option value="progress">In progress</option>
                    <option value="review">Review</option>
                    <option value="done">Done</option>
                </Input>
            </ModalBody>

            <ModalFooter>
                <Button color="success" onClick={() => {props.cardSaveNew('', name, description, file, priority, status); closeModal()}}>&#10004; Save</Button>
                <Button color="secondary" onClick={closeModal}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}

const mapStateToProps = (state) => ({
    modal: state.modal,
})

const mapDispatchToProps = (dispatch) => ({
    toggle: () => dispatch({type: "TOGGLE"}),
    cardSaveNew: (id, name, description, file, priority, status) => dispatch(cardSaveNew(id, name, description, file, priority, status))
})

export default connect (mapStateToProps, mapDispatchToProps)(AddCardForm);