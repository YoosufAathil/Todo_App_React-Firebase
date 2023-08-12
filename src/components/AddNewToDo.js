import React, {useState} from "react";
import Modal from "./Modal";

function AddNewToDo() {
    const [showModal, setShowModal] = useState(false)

    return (
        <div className="AddNewToDo"> 
        <div className="btn">
            <button onClick={() => setShowModal(true)}>
                + ADD NEW
            </button>
        </div>
       <Modal showModal={showModal} setShowModal={setShowModal} >
            <div>
                Hello World
            </div>
       </Modal>
        </div>
    )
}

export default AddNewToDo