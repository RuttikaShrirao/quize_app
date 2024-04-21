import Form_Heading from "../Form_Heading"
import Formdata from "./Formdata"
import Sidebar from '../Sidebar'

export default function Display_form (){
    return(
        <div className="form">
        <Sidebar />
        <div style={{marginLeft:'2rem'}}>
            <Form_Heading heading='Display form'/>
            <Formdata />
            </div>
            {/* <List_form /> */}
        </div>
    )
}