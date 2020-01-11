import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {addArticle} from "../actions/index";

function ConnectedForm(props) {

    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setTitle(event.target.value);
        // setState({ [event.target.id]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(addArticle({ title }))
        setTitle("");
    };


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">SAVE</button>
        </form>
    );
}

export default ConnectedForm;
