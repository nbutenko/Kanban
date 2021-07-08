import DeleteCardPopUp from "./card/DeleteCardPopUp";
import React from "react";
import Trash from "./Trash";
import AddCardForm from "./card/AddCardForm";
import AddColumn from "./column/AddColumn";
import EditCardForm from "./card/EditCardForm";
import DeleteAllCardsPopUp from "./card/DeleteAllCardsPopUp";
import DeleteColumnPopUp from "./column/DeleteColumnPopUp";
import UserRegistration from "./user/UserRegistration";
import UserAuthorization from "./user/UserAuthorization";
import UserLogout from "./user/UserLogout";
import CardImageFullSizePopUp from "./card/CardImageFullSizePopUp";

function ModalWindow (props) {
    switch (props.component) {
        case 'CARD_ADD_NEW':
            return <AddCardForm />

        case 'DELETE_CARD':
            return <DeleteCardPopUp />

        case 'EDIT_CARD':
            return <EditCardForm />

        case 'TRASH':
            return <Trash />

        case 'DELETE_ALL':
            return <DeleteAllCardsPopUp />

        case 'ADD_COLUMN':
            return <AddColumn />

        case 'DELETE_COLUMN':
            return <DeleteColumnPopUp />

        case 'USER_REG':
            return <UserRegistration />

        case 'USER_AUTH':
            return <UserAuthorization />

        case 'LOGOUT':
            return <UserLogout />

        case 'CARD_IMG':
            return <CardImageFullSizePopUp />

        default:
            return null;
    }
}

export default ModalWindow;