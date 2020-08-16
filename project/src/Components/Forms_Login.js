import React, { useState, useEffect } from "react";
import * as yup from "yup";
//time to send some data away
import axios from "axios";

 /*******************************************SCHEMA*******************************************/
const formSchema = yup.object().shape({
 name: yup.string().required("Name is a required field."),
 email: yup.string().email("Please, Use a valid address.").required("E-Mail is required to use service."),
 password: yup.string("Do not use your dogs name.").required("Please enter your password."),
 terms: yup.boolean().oneOf([true], "Agree before using service. Please read ALL TERMS"),
});

//************************************DEFAULT***********************************************//
const LoginForm = () => {
  //*******************************************STATE*******************************************//
 //INPUTS
 const [formState, setFormState] = useState({  name: "",  email: "",  password: "",  terms: false, });
 //ERRORS
 const [errors, setErrors] = useState({  name: "",  email: "",  password: "",  terms: "", });
 //BUTTONS!!!
 const [buttonDisabled, setButtonDisabled] = useState(false);
 //REQUESTS
 const [post, setPost] = useState([]);

//**************************************HELPERS?*************************************************//
/**inline validation for inputs, to keep a particular eye on troublemakers*/
 const validateChange = (event) => 
  {
    yup
      .reach(formSchema, event.target.name)
      .validate(event.target.name === "terms" ? event.target.checked : event.target.value)
      .then( (valid) => { setErrors({ ...errors, [event.target.name]: "" }) })
      .catch( (err) => { setErrors({ ...errors, [event.target.name]: err.errors[0]}) });
  };

  const inputChange = (event) => 
  {  
    event.persist();
    const newFormData = {
     ...formState,
     [event.target.name]:
      event.target.type === "checkbox"
       ? event.target.checked
       : event.target.value,
    };
    validateChange(event);
    setFormState(newFormData);
     console.log("Errors", errors);
  };

 /*formschema formstate validation*/
 useEffect( () => 
  { 
    formSchema.isValid(formState).then((isValid) => 
      { 
        setButtonDisabled(!isValid);
      });
  }, [formState]
 );

 const formSubmit = (event) => 
  {
      event.preventDefault();
      axios
       .post("https://reqres.in/api/users", formState)
       .then((res) => {
        setPost(res.data);
        console.log("success", post);
        setFormState({ name: "", email: "", password: "", terms: "",});
       })
       .catch((err) => console.log(err.response));
  };

//*****************************RENDER*********************************************//
 return (
  <div>
   {/*remember to comment!!!*/}
   {/*states/}
        {/*form goes here*/}
   <div>
    <form onSubmit={formSubmit}>
     <div>
      <label htmlFor="name">
        Name: 
      {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
    </label>
      <input
       id="name"
       type="text"
       name="name"
       placeholder="type here please"
       value={formState.name}
       onChange={inputChange}
      />
     </div>

     <div>
      <label htmlFor="email">E-Mail: 
      {errors.email.length > 0 ? <p className="error">{errors.email}</p> : null}
      </label>
      <input
       id="email"
       type="email"
       name="email"
       placeholder="please, no hotmail accounts."
       value={formState.email}
       onChange={inputChange}
      />
     </div>

     <div>
      <label htmlFor="password">Password:
      {errors.password.length > 0 ? (
       <p className="error">{errors.password}</p>
      ) : null}
       </label>
      <input
       id="password"
       type="password"
       name="password"
       placeholder="be safe"
       value={formState.password}
       onChange={inputChange}
      />
     </div>

     <div>
      <label htmlFor="terms">Please read terms of use before continuing
      {errors.terms.length > 0 ? <p className="error">{errors.terms}</p> : null}
      </label>
      <input
       id="terms"
       type="checkbox"
       name="terms"
       value={formState.terms}
       onChange={inputChange}
      />

     </div>

     <div>
      <button disabled={buttonDisabled} type="submit">
       Allons-y
      </button>
     </div>
     <pre>post and return request: {JSON.stringify(post,null,2)}</pre>
    </form>
   </div>
  </div>
 );
};

export default LoginForm;
