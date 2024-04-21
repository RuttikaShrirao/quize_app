import * as React from "react";
import { Box, Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function LinkModal({handleClose, open,formid}){
  
  console.log(formid,'qqqqqqq')
    return(

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <h2>Your form is created Successfully..</h2>
        <h2>Link is ready to share</h2>

        <Button onClick={() => {navigator.clipboard.writeText(`http://localhost:5173/user_formdata/${formid}`)}}>
            Copy form URL
        </Button>
        <Button variant="contained" color="primary">Go To Dashboard</Button>
        </Box>
      </Modal>
    )
}