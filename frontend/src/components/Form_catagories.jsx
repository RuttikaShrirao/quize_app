import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import "../css/categories.css";
import edit from "../assets/utils_img/edit.png";
// import Form_modal from "./Modal";
import Buttons from "./Buttons";
import Category_modal from "./Modals/Category_modal";
import Question_modal from "./Modals/Question_modal";
import LinkModal from './Modals/Link_modal'

export default function Form_catagories() {
  // const [alignment, setAlignment] = React.useState();
  const [formdata, setFormdata] = React.useState([]);
  const [categoryToUpdate, setCategoryToUpdate] = React.useState();
  const [form_name, setForm_name] = React.useState();

  // category
  const [open, setOpen] = React.useState(false);
  const[msg, setMsg] =React.useState()
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // question
  const [queModelopen, setQue_open] = React.useState(false);
  const handlequeopen = () => setQue_open(true);
  const handlequeClose = () => setQue_open(false);

  // edit
  const [editopen, setEdit_open] = React.useState(false);
  const handleediteopen = () => setQue_open(true);
  const handleeditClose = () => setQue_open(false);

  // LinkModal

  const [linkopen, setLinkopen] = React.useState(false);
  const handlelinkopen = () => setLinkopen(true);
  const handlelinkclose = () => setLinkopen(false);

  // form id
  const[formid, setFormid]=React.useState()

  // const handleChange = (event, newAlignment) => {
  //   setAlignment(newAlignment);
  // };

  const form_nameHandler=(e)=>{
    setForm_name(e.target.value)
  }
 

  const addCategoryHandler = (category_name) => {
    setFormdata([
      ...formdata,
      {
        category_name: category_name,
        questions: [],
      },
    ]);

    handleClose();
  };

  const questionModelHandler = (catIndx) => {
    setCategoryToUpdate(catIndx)
    handlequeopen()
  }

  const addQuestionHandler = (category_indx, questionData) => {
    formdata[category_indx] = {...formdata[category_indx], 
                              questions : [...formdata[category_indx].questions, questionData]}

                           
    setFormdata([
      ...formdata
    ])
    
    //   {
    //     category_name: category_name,
    //     questions: [
    //       {
    //         question_text: que_text,
    //         options: ["web", "desktop", "tablate", "mobile"],
    //       },
    //     ],
    //   },
    // ]);
    handlequeClose();
  };

  const form_submitHandler=()=>{
    const tokenid=localStorage.getItem('token')

    fetch(`http://localhost:5000/api/create_form`,
    {
        method:'POST',
        body:JSON.stringify({form_name:form_name, catagory:formdata}),
        headers: {
          token:tokenid,
          'Content-Type': 'application/json',
        }
    }
    )
    .then(res=>res.json())
  .then(data=>{
    setFormid(data.id);
    setMsg(data.msg)
  }).catch((e) => setMsg(e.data.msg))
  handlelinkopen()
  }
 

  return (
    <>
     { open && (<Category_modal
        addCategoryHandler={addCategoryHandler}
        handleClose={handleClose}
        open={open}
      />)}
      { queModelopen && (<Question_modal handlequeClose={handlequeClose} 
      queModelopen={queModelopen}   
      categoryToUpdate = {categoryToUpdate}
      addQuestionHandler={addQuestionHandler}/>)}

{ linkopen && (<LinkModal
        handleClose={handlelinkclose}
        open={linkopen}
        formid={formid}
      />)
      }

      {/* <Form_modal
        // edit
        handleeditClose={handleeditClose}
        editopen={editopen}
      /> */}

<input placeholder="Enter Form_Name" className="modal-input" onChange={form_nameHandler}/>

      {formdata.map((categoryobj, k) => (
        <div key={k}>
       
          <h3>{categoryobj.category_name}</h3>
          <div className="categories">
            {categoryobj.questions.map((questionObj, index) => (
              <div className="category-que" key={index}>
              
                <p>{questionObj.question_text}</p>
                <div className="option-edid">
                  {/* <ToggleButtonGroup */}
                  <div
                    // color="primary"
                    // value={alignment}
                    // exclusive
                    // onChange={handleChange}
                    // aria-label="Platform"
                    className="options"
                  >
                  {
                    questionObj.options.map((option, index) => (
                    <ToggleButton key={index} value={option}>{option}</ToggleButton>
                    ))

                  }
                  </div>
                  {/* </ToggleButtonGroup> */}

                  <img
                    src={edit}
                    className="edit-menu"
                    onClick={handleediteopen}
                  />
                </div>
              </div>
            ))}

            <a href="#" className="add-que-catogory" onClick={()=>questionModelHandler(k)}>
              ADD QUESTION
            </a>
          </div>
        </div>
      ))}
      <div>
        <a href="#" className="add-que-catogory" onClick={handleOpen}>
          ADD CATEGORY
        </a>
      </div>

      <div className="" style={{ textAlign: "center", marginTop: "2rem" }}>
        <button className="save-cancle_button"
         onClick={form_submitHandler}
          >SAVE</button>
        <button style={{ borderRadius: "10px", padding: ".5rem 1.5rem" }}  onClick={handleClose } >
          CANCLE
        </button>
      
      </div>
    </>
  );
}


 