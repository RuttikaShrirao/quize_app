import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Buttons from "./Buttons";

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

export default function Form_modal({
 


  handleeditClose,
  editopen,
}) {


  return (
    // category
    <div>
      

      {/* question */}
   

      {/* edit */}
      <Modal
        open={editopen}
        onClose={handleeditClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2>Edit question</h2>
          <h4>Question</h4>
          <input placeholder="Enter question" className="modal-input" />
          <h4>Option text</h4>

          <input placeholder="Enter option" className="modal-input" />
          <Button onClick={() => addCategoryHandler(category_name)}>
            Save
          </Button>
          <Button onClick={handleeditClose}>Cancle</Button>
        </Box>
      </Modal>
    </div>
  );
}
