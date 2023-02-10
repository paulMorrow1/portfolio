import { combineReducers } from "redux";

const projects = () => {
    return (
        "Projects will go here!"
    )
}

const counter = () => {
    return (
        'Counter will go here!'
    )
}


export default combineReducers({projects, counter});