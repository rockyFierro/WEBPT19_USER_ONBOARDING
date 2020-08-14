import React, { useState } from "react";
import * as yup from "yup";

const formSchema = yup.object().shape({
    
});


const LoginForm = () => {

    //managing state for INPUTS
    const [formState, setFormState] = useState({
        name:"",
        email:"",
        password:"",
        terms:false
    })
    //managing state for BUTTONS!!!
    const [buttonDisabled, setButtonDisabled] = useState(false)
    {/**schema */}

    const inputChange =event=>{
        const newFormData = {
            ...formState,
            [event.target.name]:
            event.target.type === "checkbox" ? event.target.checked : event.target.value
       }
       //validateChange(event)
       setFormState(newFormData);
    }

return(
    <div>
        {/*remember to comment!!!*/}
        {/*states/}
        {/*form goes here*/}
        <div>
            <form onSubmit={console.log("submitted!")}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input id="name" type="text" name="name" placeholder="type here please" value={formState.name} onChange={inputChange}/>
                </div>

                <div>
                    <label htmlFor="email">E-Mail: </label>
                    <input id="email" type="email" name="email" placeholder="please, no hotmail accounts." value={formState.email} onChange={inputChange}/>
                </div>

                <div>
                    <label htmlFor="password">Password: </label>
                    <input id="password" type="password" name="password" placeholder="be safe" value={formState.password} onChange={inputChange}/>
                </div>

                <div>
                    <label htmlFor="terms">Please read terms of use before continuing</label>
                    <input id="terms" type="checkbox" name="terms" value={formState.terms} onChange={inputChange}/>
                </div>

                <div>
                    <button disabled={buttonDisabled} type="submit">Allons-y</button>
                </div>
            </form>            

        </div>
    </div>
)

};

export default LoginForm;