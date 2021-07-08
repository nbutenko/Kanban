import './App.css';
import {connect} from "react-redux";
import React, {useEffect} from "react";
import ModalWindow from "./components/ModalWindow";
import Home from "./components/Home";
import Cards from "./components/card/Cards";
import {cardGetAll} from "./redux/actions/card";
import {columnGetAll} from "./redux/actions/column";

function App(props) {
    const isAuth = props.user.isAuth;
    const cards = props.cards || [];
    const columns = props.columns || [];

    useEffect(() => {
        props.columnGetAll();
        props.cardGetAll();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="App">
            {(isAuth) ? <Cards cards={cards} columns={columns}/> : <Home />}
            <ModalWindow isOpen={props.modal.isOpen} toggle={props.toggle} component={props.modal.component}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cards: state.card,
    columns: state.column,
    modal: state.modal,
    user: state.user,
})

const mapDispatchToProps = (dispatch) => ({
    cardGetAll: () => dispatch(cardGetAll()),
    columnGetAll: () => dispatch(columnGetAll()),
})

export default connect (mapStateToProps, mapDispatchToProps)(App);
