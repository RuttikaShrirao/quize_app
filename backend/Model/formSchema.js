const mongoose= require('mongoose') 
const formSchema= new mongoose.Schema({
    user_form_creater_id:{
        type:Object,
        required:true
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    form_name:{
        type:String,
        required:true,
    },
    catagory:[{
        categ_id:{
            type:Number
        },
        category_name:{
            type:String
        },
        questions:[{
            que_id:{
                type:String
            },
            question_text:{
                type:String
            },
            options:[{
                type:String
            }],
            answer:{
                type:String
            }
        }]
    }]
})

// form_answerSchema
const form_answerSchema = new mongoose.Schema({
    // form_answerid:{
    //     type:Number
    // },
    form_id:{
        type:String
    },
    answered_byuser:[{
        type:String 
    }]
    // answers:[{
    //     que_id:{
    //         type:String
    //     },
    //     answered_byuser:{
    //         type:String 
    //     }
    // }],
    // form_submittedby:{
    //     type:String ,
    //     default:Date.now()
    // }
 })

 const form = mongoose.model('form', formSchema); 
const form_answer = mongoose.model('form_answer', form_answerSchema); 

module.exports = { 
    form, form_answer 
}