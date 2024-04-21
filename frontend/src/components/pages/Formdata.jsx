import { useEffect, useState } from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import { useParams } from "react-router-dom";
import SubmitModal from '../Modals/Submit_modal'

export default function Formdata() {
  const[msg,setMsg]=useState()
  const [formdata, setFormdata] = useState({ catagory: [] });
  const [answer, setAnswer] = useState([]);
  // const [que_id, setQue_id] = useState([]);
  const [alignment, setAlignment] = useState([]);

  // modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { form_id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/api/get_form-data/${form_id}`)
      .then((res) => res.json())
      .then((data) => {
        // const question = data.data.catagory;
        // {
        //   question.map((e) => {
        //     {
        //       e.questions.map((e) => setQue_id(e._id));
        //     }
        //   });
        // }
      console.log(data)
        setFormdata(data.data);
      })

      .catch((e) => console.log(e.msg));
  }, []);

  const handleChange = (event, newAlignment) => {
    setAlignment([...alignment,newAlignment]);
  };
  // const answerHandler=()=>{
  //   setAnswer(...alignment)

  // }

  
  const form_submitHandler = () => {
    // const tokenid=localStorage.getItem('token')
    console.log(alignment)
    fetch(`http://localhost:5000/api/answed_by_user`, {
      method: "POST",
      body: JSON.stringify({
        form_id: form_id,
        answered_byuser: alignment,
        // form_submittedby: name,
      }),
      headers: {
        // token: tokenid,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setMsg(data.msg);
      })
      .catch((e) => setMsg(e.data.msg));
     handleOpen()  
  };

  // console.log(alignment,'uuuuuuu')

  return (
    <>
    
     { open && (<SubmitModal
        handleClose={handleClose}
        open={open}
      />)
      }

      <h2>{formdata.form_name}</h2>
      {formdata.catagory.map((categoryobj, k) => (
        <div key={k}>
          <h3>{categoryobj.category_name}</h3>
          <div className="categories">
            {categoryobj.questions.map((questionObj, index) => (
              <div className="category-que" key={index}>
                <p>{questionObj.question_text}</p>
                <div className="option-edid">
                  <ToggleButtonGroup
                    color="info"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    // onClick={answerHandler}
                    aria-label="Platform"
                    className="options"
                  >
                    {questionObj.options.map((option, index) => (
                      <ToggleButton key={index} value={option} >
                        {option}
                      </ToggleButton>
                    ))}
                  </ToggleButtonGroup>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div></div>

      <div className="" style={{ textAlign: "center", marginTop: "2rem" }}>
        <button className="save-cancle_button" onClick={form_submitHandler}>
          SAVE
        </button>
        <button
          style={{ borderRadius: "10px", padding: ".5rem 1.5rem" }}
          // onClick={handleClose }
        >
          CANCLE
        </button>
      </div>
    </>
  );
}
