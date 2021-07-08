import Column from "../column/Column";
import React from "react";
import {connect} from "react-redux";

function Cards(props) {
    return (
    <div>
        <nav className="navbar navbar-dark bg-dark form-inline jd-flex bd-highlight mb-3">
            <button type="button" className="btn btn-outline-info p-2 bd-highlight" onClick={() => props.toggle('CARD_ADD_NEW')}>&#10010; Add new card</button>
            <button type="button" className="btn btn-outline-warning p-2 bd-highlight" onClick={() => props.toggle('TRASH')}
                    disabled={!props.cards.find(({trash}) => trash === true)}>&#9850; Trash can</button>
            <button type="button" className="btn btn-outline-danger p-2 bd-highlight" onClick={() => props.toggle('DELETE_ALL')}
                    disabled={!props.cards.find(({trash}) => trash === false)}>	&#9888; Delete all cards</button>
            <button type="button" className="btn btn-outline-success p-2 bd-highlight" onClick={() => props.toggle('ADD_COLUMN')}>&#10010; Add new column</button>
            <button type="button" className="btn btn-outline-danger p-2 bd-highlight" onClick={() => props.toggle('DELETE_COLUMN')}>	&#9888; Delete column</button>

            <button type="button" className="btn btn-outline-secondary ms-auto p-2 bd-highlight logout" onClick={() => props.toggle('LOGOUT')}>&#x27F2; Logout</button>
        </nav>

        <div className="row align-items-start cards">
            {props.columns.map(el => <Column key={el._id} column={el} cards={props.cards}/>)}
        </div>
    </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    toggle: (component) => dispatch({type: "TOGGLE", payload: component}),
})

export default connect (null, mapDispatchToProps)(Cards);