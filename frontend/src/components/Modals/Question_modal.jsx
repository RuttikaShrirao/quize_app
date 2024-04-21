import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// import Buttons from "../Buttons";

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

export default function Question_modal ({  handlequeClose, categoryToUpdate,
    queModelopen,addQuestionHandler}){
    const [queData, setQueData] = React.useState({
                                                    question_text: "",
                                                    options: [""],
                                                });
    

                                             
    const queHandler =(e)=>{
        setQueData({...queData, question_text :  e.target.value})
        // setQue_text(e.target.value)
        // console.log(que_text, "qqqqq");
      }
      const queOptionsHandler =(e, optionInx)=>{
        queData.options[optionInx] = e.target.value
        setQueData({...queData})
        // setQue_text(e.target.value)
        // console.log(que_text, "qqqqq");
      }
      const addOptionHandler = () =>{
        setQueData({...queData, options:[...queData.options, '']})
      }
    return(
        <Modal
        open={queModelopen}
        onClose={handlequeClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2>Add Question</h2>
          <h4>Question</h4>
          <input
            placeholder="Enter question"
            className="modal-input"
            onChange={queHandler}
          />
          <h4>Option</h4>
            {
                queData.options.map((option, key) => (
                            <input key={key}
                    placeholder="Enter option"
                    className="modal-input"
                    onChange={(e) => queOptionsHandler(e, key)}
                    />
                ))
            }

          <h4 style={{ color: "#2563CC", cursor:'pointer' }} onClick={addOptionHandler}>Add Option</h4>


          <div className="" style={{ textAlign: "center", marginTop: "2rem" }}>
        <button className="save-cancle_button" onClick={() => addQuestionHandler(categoryToUpdate,queData)}>SAVE</button>
        <button style={{ borderRadius: "10px", padding: ".5rem 1.5rem" }}  onClick={handlequeClose} >
          CANCLE
        </button>
      </div>
        </Box>
      </Modal>
    )
}