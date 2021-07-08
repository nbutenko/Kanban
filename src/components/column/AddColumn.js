import {Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {connect} from "react-redux";
import React, {useState} from "react";
import {columnSaveNew} from "../../redux/actions/column";

function AddColumn (props) {
    const [title, setTitle] = useState('');
    const closeModal = () => {
        setTitle('');
        props.toggle();
    }

    return (
        <Modal isOpen={props.modal.isOpen} toggle={closeModal}>
            <ModalHeader toggle={closeModal}>Add new column</ModalHeader>
            <ModalBody>
                <Label for="title">Title: </Label>
                <Input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)}/>
            </ModalBody>

            <ModalFooter>
                <Button color="success" onClick={() => {props.columnSaveNew(title); closeModal()}}>&#10004; Save</Button>
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
    columnSaveNew: (title) => dispatch(columnSaveNew(title))
})

export default connect (mapStateToProps, mapDispatchToProps)(AddColumn);