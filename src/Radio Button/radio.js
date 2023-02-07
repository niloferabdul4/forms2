import React from "react";
import  ReactDOM  from "react-dom";

import '../Text Area/styles.css'

export default function Radio(){
        const[formData,setFormdata]=React.useState({email:"",
                                                    password:"",
                                                    comments:"",
                                                    isChecked:false,
                                                    employment:""
                                                  })

            console.log(formData)
            //console.log(formData.employment)


           function handleChange(event)

           {
                const {name,value,checked,type}=event.target;
                setFormdata(prevForm=>{return {...prevForm,[name]:type==="checkbox" ? checked:value}})
           }     
           
           
          
    return(
        <>
            <form>

    
            <div className="container">                             
                <label className="label">Email</label>
                <input  type="text"                                                     //   for email  ///
                        name="email"                                                    // name should be same as object property //
                        value={formData.email} 
                        onChange={handleChange} 
                        className="text"
                />
                </div>



          {/*******        PASSWORD CODE HERE    ********/}

                <div className="container">
                    <label className="label">Password</label>
                    <input  type="text"  
                            name="password"                                         //   for password  ///
                            value={formData.password} 
                            onChange={handleChange}  
                            className="text"           
                    />
                </div>

                <div className="container">

                    <label className="label">Comments</label>
                    <textarea  type="text"
                                name="comments"  
                                value={formData.comments}                          //   for comments  ///
                                onChange={handleChange}
                                className="text"  
                     />
                </div>



         {/*******        CHECKBOX CODE HERE    ********/}

                <div className="container">
                    <label className="label">Are You Friendly</label>
                    <input type="checkbox" 
                            name="isChecked"                                        //  for checkbox // 
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
                                    checked={formData.employment==='part time'}             //  formData.employment is sequal to part time,then checked is true //
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
            </form>
        </>
    )
}

ReactDOM.render(<Radio />,document.getElementById('root'))