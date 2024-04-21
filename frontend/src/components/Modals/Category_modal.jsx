import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Buttons from "../Buttons";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Category_modal({ open,
    handleClose,  addCategoryHandler}){
    const [category_name, setCategory_name] = React.useState();

    const categoryHandler = (e) => {
      setCategory_name(e.target.value);
   
    };
  
    return(
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2>Add Category</h2>
          <h4>Category</h4>
          <input
            placeholder="Category"
            onChange={categoryHandler}
            className="modal-input"
          />


<div className="" style={{ textAlign: "center", marginTop: "2rem" }}>
        <button className="save-cancle_button" onClick={() => addCategoryHandler(category_name)}>SAVE</button>
        <button style={{ borderRadius: "10px", padding: ".5rem 1.5rem" }}  onClick={handleClose } >
          CANCLE
        </button>
      </div>
        </Box>
      </Modal>
    )
}