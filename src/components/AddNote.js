 import React ,{useContext,useState}from "react";
import noteContext from "../context/notes/noteContext";
const AddNote = (props) => {
    const context = useContext(noteContext);
    const {addNote} = context;
    const[note, setNote]=useState({title:"",description:"",tag:""})
    const handleClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag)
        setNote({title:"",description:"",tag:""})
        props.showAlert("Added Successfully","success");
      }
    const onChange=(e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
    <div className="container my-3">
      <h1>Add a note</h1>
      <form className="my-3 ">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            title
          </label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="title"
            value={note.title}
            aria-describedby="emailHelp"
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
          description
          </label>
          <input
            name="description"
            value={note.description}
            type="text"
            className="form-control"
            id="description"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
          tag
          </label>
          <input
            name="tag"
            type="text"
            className="form-control"
            value={note.tag}
            id="tag"
            onChange={onChange}
          />
        </div>

        <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNote;
