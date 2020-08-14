import React, { useState, useEffect } from "react";
import * as yup from "yup";

const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field."),
    email: yup.string().email("Please, Use a valid address.").required("E-Mail is required to use service."),
    password: yup.string("Do not use your dogs name.").required("Please enter your password."),
    terms: yup.boolean().oneOf([true], "Agree before using service. Please read ALL TERMS")
});

/*each time the form value state gets updated (someone types in an input box) we check to see if its valid as stated in the formSchema which will allow disabled and enabling the button*/ 
useEffect(() => {
    console.log("changes made")
    formSchema.isValid(formState.then(valid => {
        console.log("valid?", valid)
        setButtonDisabled(valid);
    }));
}, [formState]);


const LoginForm = () => {

    //managing state for INPUTS
    const [formState, setFormState] = useState({
        name:"",
        email:"",
        password:"",
        terms:false
    })
    //managing state for BUTTONS!!!
    const [buttonDisabled, setButtonDisabled] = useState(false);
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
            <form>
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