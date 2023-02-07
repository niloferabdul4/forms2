import React from "react";
import  ReactDOM  from "react-dom";


import './styles.css'
export default function Textarea(){

    const [FormData,setFormdata]=React.useState({name:"",email:"",password:"",comments:"" })


    function handleChange(event){
        setFormdata(prevForm=>{return {...prevForm,
                                       [event.target.name]:event.target.value
                                      }})
    }

   
    console.log(FormData)
    return(
        <>
        <form>
            <div className="container">
            <label className="label">Name</label>
            <input  type="text" 
                    placeholder="Name" 
                    name="name" 
                    value={FormData.name} 
                    onChange={handleChange}
                    className="text"
            />
            </div>



            <div className="container">
            <label className="label">Email</label>
            <input  type="text" 
                    placeholder="Name" 
                    name="email" 
                    value={FormData.email} 
                    onChange={handleChange}
                    className="text"
            /> 
            </div>


            <div className="container">
            <label className="label">Password</label>
            <input  type="text" 
                    placeholder="Password"  
                    name="password"  
                    value={FormData.password}  
                    onChange={handleChange}
                    className="text"

             />
             </div>

             <div className="container">
             <label className="label" >Comments</label>
             <textarea placeholder="Comment Here"   
                        name="comments"    
                        value={FormData.comments}
                        onChange={handleChange}
                        className="text"
              />
              </div>

              

             

        </form>
        
        </>
    )
    
}

ReactDOM.render(<Textarea/>,document.getElementById('root'))