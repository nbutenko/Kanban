import {connect} from "react-redux";
import React from "react";
import {cardChangePriorityById, cardChangeStatusById} from "../../redux/actions/card";
// import {Image} from "cloudinary-react";

function Card(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.card.name}</h5>
                <p className="card-text">{props.card.description}</p>
                {/*<Image cloudName={"nbutenko"} publicId={props.card.file} witdh={"50"}/>*/}
            </div>
            {props.card.file &&
            <li className="list-group-item">Image <span className={"img-preview-title"}>(click for full size view)</span>:
                <img src={props.card.file} alt="Card" className={"card-image"} onClick={() => props.toggle('CARD_IMG', {
                    img: props.card.file})}/>
            </li>}
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Status: {props.card.status}
                    <button type="button" className="btn btn-primary btn-sm"
                            onClick={() => props.cardChangeStatusById(props.card._id, props.card.status, '-')}
                            disabled={props.card.status === 'to do' ? true : false}>←
                    </button>
                    <button type="button" className="btn btn-primary btn-sm"
                            onClick={() => props.cardChangeStatusById(props.card._id, props.card.status, '+')}
                            disabled={props.card.status === 'done' ? true : false}>→
                    </button>

                </li>
                <li className="list-group-item">Priority: {props.card.priority}
                    <button type="button" className="btn btn-secondary btn-sm"
                            onClick={() => props.cardChangePriorityById(props.card._id, props.card.priority + 1)}>↑
                    </button>
                    <button type="button" className="btn btn-secondary btn-sm"
                            onClick={() => props.cardChangePriorityById(props.card._id, props.card.priority - 1)}
                            disabled={props.card.priority === 1 ? true : false}>↓
                    </button>
                </li>
            </ul>
            <div className="card-body">
                <button type="button" className="btn btn-outline-danger"
                        onClick={() => props.toggle('DELETE_CARD', {
                            id: props.card._id, name: props.card.name, description: props.card.description, status: props.card.status, priority: props.card.priority})}>
                    &#10008; Delete card
                </button>
                <button type="button" className="btn btn-outline-dark"
                        onClick={() => props.toggle('EDIT_CARD', {
                            id: props.card._id, name: props.card.name, description: props.card.description,
                            status: props.card.status, priority: props.card.priority
                        })}>
                    &#9998; Edit
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    modal: state.modal,
})

const mapDispatchToProps = (dispatch) => ({
    cardChangeStatusById: (cardId, currentStatus, operation) => dispatch(cardChangeStatusById(cardId, currentStatus, operation)),
    cardChangePriorityById: (cardId, newPriority) => dispatch(cardChangePriorityById(cardId, newPriority)),
    toggle: (component, cardData) => dispatch({type: "TOGGLE", payload: {component, cardData}})
})

export default connect(mapStateToProps, mapDispatchToProps)(Card);