import React, { useState } from "react";

const LoginForm = () => {

    {/**schema */}
return(
    <div>
        {/*remember to comment!!!*/}
        {/*states/}
        {/*form goes here*/}
        <div>
            <form onSubmit={console.log("submitted!")}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input id="name" type="text" name="name" placeholder="type here please"/>
                </div>

                <div>
                    <label htmlFor="email">E-Mail: </label>
                    <input id="email" type="email" name="email" placeholder="please, no hotmail accounts."/>
                </div>

                <div>
                    <label htmlFor="password">Password: </label>
                    <input id="password" type="password" name="password" placeholder="be safe"/>
                </div>

                <div>
                    <label htmlFor="terms">Please read terms of use before continuing</label>
                    <input id="terms" type="checkbox" name="terms"/>
                </div>

                <div>
                    <button type="submit">Allons-y</button>
                </div>
            </form>            

        </div>
    </div>
)

};

export default LoginForm;