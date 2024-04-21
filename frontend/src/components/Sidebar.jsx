import logo from '../assets/sidebar/logo.png'
import calendar from '../assets/sidebar/calendar.png'
import folder from '../assets/sidebar/folder.png'
import house from '../assets/sidebar/house.png'
import letter_pad from '../assets/sidebar/letter_pad.png'
import office from '../assets/sidebar/office.png'
import page from '../assets/sidebar/page.png'
import people from '../assets/sidebar/people.png'
import play from '../assets/sidebar/play.png'
import setting from '../assets/sidebar/setting.png'
import '../../src/index.css'

const sidebar=[
    {
    img:house,
    bg_color:'#FFE8E8'
    },
    {img:letter_pad},
    {img:play},
    {img:page},
    {img:folder},
    {img:calendar},
    {img:setting},
    {img:people}
]

export default function Sidebar(){
    return(
        <div className='sidebar'>
          <img src={logo} className='logo'/>
        {
            sidebar.map((e, index)=>(
                <div key={index} className='sidebar-menu' >
               <img src={e.img} className='sidebar-icons' style={{backgroundColor:e.bg_color,padding:'.5rem', borderRadius:'10px'}}/>
              </div>
            ))  
        }

        </div>
    )
}