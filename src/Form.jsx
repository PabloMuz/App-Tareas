import { useState } from "react";
import Swal from "sweetalert2";

const Form = ({addTodo}) => {
  const [todo, setTodo] = useState({
    title: "Title",
    description: "Description",
    state: "pending",
    priority: true,
  });

  const {title, description, state, priority} = todo;

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title.trim() || !description.trim() ){
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Title and Description Obligatory",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
      
    }

    addTodo({
      id: Date.now(),
      ...todo,
      state: state === "complete"
    })

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your Todo has been saved",
      showConfirmButton: false,
      timer: 1500
    });
  };

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setTodo({
      ...todo, [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className=" mt-5">
      <h2 className="form-title text-center">Add task Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="section-contact-form">
          <div className="form-field">
            <label htmlFor="title" className="form-label">
              Title:
            </label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Title"
              className="form-input form-control mb-3"
              value={title}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              type="text"
              placeholder="Description"
              className="form-control mb-3"
              value={description}
              onChange={handleChange}
            />
          </div>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              name="priority"
              id="checkPriority"
              className="form-check-input mb-23"
              checked={priority}
              onChange={handleChange}
            />
            <label htmlFor="checkPriority">With Priority</label>
          </div>

          <select name="state" value={state} onChange={handleChange}>
            <option value="complete">Complete</option>
            <option value="pending">Pending</option>
            <option value="inprogress">In progress</option>
          </select>

          <button type="submit" className="submit-button">
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
