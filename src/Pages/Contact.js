import React from 'react'

export default function Contact() {

    function handleSubmit() {
        console.log('You clicked submit.');
      }
    return (
        <div className='contact'>
            <form action="#">
                <ul>

                    <li>
                        <p>
                            <label>first name</label>
                            <input type="text" name="first_name" placeholder="John" />
                        </p>
                        <p>
                            <label>last name</label>
                            <input type="text" name="last_name" placeholder="Smith" />
                        </p>
                        <p>
                            <label>email <span >*</span></label>
                            <input type="email" name="email" placeholder="john.smith@gmail.com" />
                        </p>
                    </li>
                    <li>
                        <input className="btnSumbit" onClick={handleSubmit} type="button" value="Submit" />
                    </li>

                </ul>
            </form>
        </div>
    )
}
