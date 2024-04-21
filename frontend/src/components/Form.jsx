import Form_Heading from "./Form_Heading"
import Form_catagories from "./Form_catagories"
import Sidebar from './Sidebar'

export default function Form (){
    return(
        <div className="form">
        <Sidebar />
        <div style={{marginLeft:'2rem'}}>
            <Form_Heading heading='Configure form'/>
            <Form_catagories />
            </div>
            {/* <List_form /> */}
        </div>
    )
}