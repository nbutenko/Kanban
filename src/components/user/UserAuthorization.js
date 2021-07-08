import React, {useState} from 'react';
import {connect} from "react-redux";
import {Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {userLogin} from "../../redux/actions/user";

function UserRegistration(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function closeModal() {
        setEmail('');
        setPassword('');
        props.toggle();
    }

    //TODO: Add form validation
    return (
        <Modal isOpen={props.modal.isOpen} toggle={closeModal}>
            <ModalHeader
                toggle={closeModal}>Login</ModalHeader>
            <ModalBody>
                <Label for="email">Email: </Label>
                <Input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)}/>

                <Label for="password">Password: </Label>
                <Input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </ModalBody>

            <ModalFooter>
                <Button color="success" onClick={() => {props.userLogin(email, password); closeModal()}}>Login</Button>
                <Button color="secondary" onClick={closeModal}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}

const mapStateToProps = (state) => ({
    modal: state.modal
})

const mapDispatchToProps = (dispatch) => ({
    toggle: () => dispatch({type: "TOGGLE"}),
    userLogin: (email, password) => dispatch(userLogin(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserRegistration)