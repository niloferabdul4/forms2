import React from "react";
import  ReactDOM  from "react-dom";

import '../Text Area/styles.css'
export default function Select(){
    const [formData,setFormData]=React.useState({   email:"",
                                                    password:"",
                                                    comments:"",
                                                    isChecked:false,
                                                    employment:"",
                                                    country:""
                                                })
     console.log(formData)
     function handleChange(event) 
     {
            const {name,value,checked,type}=event.target
            setFormData(prevForm=>{return {...prevForm,
                                                [name]:type==='checkbox'?  checked:value}})   // if the type is checkbox, use 'checked' property or else use 'value property  //
    } 
    
    function submitFn(event){
        event.preventDefault()
    }
    return(
        <>

        <form onSubmit={submitFn}>

            <div className="container">
                <label className="label">Email</label>
                <input  type="text"
                        placeholder="email"
                        name="email"
                        value={formData.email}
                        className="text"
                        onChange={handleChange}

                  />      
                
            </div>


            <div className="container">
                <label className="label">Password</label>
                <input  type="text"
                        placeholder="password"
                        name="password"
                        value={formData.password}
                        className="text"
                        onChange={handleChange}

                  />      
                
            </div>

            <div className="container">
                <label className="label">Comments</label>
                <textarea  type="text"
                            placeholder="comment here"
                            name="comments"
                            value={formData.comments}
                            className="text"
                            onChange={handleChange}

                  />      
                
            </div>


            <div className="container">

                    <label className="label">Are you interested</label>
                    <input type="checkbox"
                            name="isChecked"
                            checked={formData.isChecked}
                            onChange={handleChange}
                            className="text"
                    />    

            </div>

             {/*******        RADIO ITEMS CODE HERE    ********/}  
             <fieldset>
            <legend> Employment Type: </legend>
                <div className="radio_container">
              
                        <span>
                            <input type="radio" 
                                    value="part time"                                       // for 1st radio btn //
                                    checked={formData.employment==='part time'}             // part time is stored in formData.employment //
                                    onChange={handleChange} 
                                    name="employment"
                             />
                            <label>Part Time</label>
                        </span>


                        <span>
                            <input type="radio" 
                                    value="full time"                                           // for 2nd radio btn //
                                    checked={formData.employment==='full time'}                 // full time is stored in formData.employment //
                                    onChange={handleChange} 
                                    name="employment"
                            />
                            <label>Full Time</label>
                        </span>


                        <span>
                    
                            <input type="radio"
                                    value="remote"                                               // for 3rd radio btn //
                                    checked={formData.employment==='remote'}                    // remote is stored in formData.employment //
                                    onChange={handleChange} 
                                    name="employment"
                            />
                            <label>Remote</label>
                        </span>
                    
                </div>
            </fieldset>
        
         {/*******        SELECT ITEMS CODE HERE    ********/}

        <selectbox>
         <label htmlFor="country">Select the Country</label>
         <select id="country"  
                 type="select"               
                 name='country'
                 onChange={handleChange}
                 value={formData.country}
         >
            <option value="">Select</option>
            <option value="USA"> USA</option>
            <option value="UAE">UAE </option>
            <option value="INDIA">INDIA</option>
         </select>
      </selectbox>
          <button className="btn">Submit</button>
        </form>
        </>
    )
}

ReactDOM.render(<Select />,document.getElementById('root'))