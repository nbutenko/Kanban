import React, {useState} from 'react';
import {connect} from "react-redux";
import {Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {userRegistration} from "../../redux/actions/user";

function UserRegistration(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [role, setRole] = useState('user');

    function closeModal() {
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setRole('user');
        props.toggle();
    }

    //TODO: Add form validation
    return (
        <Modal isOpen={props.modal.isOpen} toggle={closeModal}>
            <ModalHeader
                toggle={closeModal}>Create new user</ModalHeader>
            <ModalBody>
                <Label for="firstName">First Name: </Label>
                <Input type="text" id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)}/>

                <Label for="lastName">Last Name: </Label>
                <Input type="text" id="lastName" value={lastName} onChange={e => setLastName(e.target.value)}/>

                <Label for="email">Email: </Label>
                <Input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)}/>

                <Label for="password">Password: </Label>
                <Input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>

                <Label for="role">Role: </Label>
                <Input type="select" id="role" onChange={e => setRole(e.target.value)}>
                    <option value="USER">User</option>
                    <option value="ADMIN">Admin</option>
                </Input>
            </ModalBody>

            <ModalFooter>
                <Button color="success" onClick={() => {props.userRegistration(email, password, firstName, lastName, role); closeModal()}}>Register</Button>
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
    userRegistration: (email, password, firstName, lastName, role) => dispatch(userRegistration(email, password, firstName, lastName, role))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserRegistration)