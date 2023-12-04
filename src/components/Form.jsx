import { FormControl, Input, Textarea,Button } from '@chakra-ui/react'
import React from 'react'
import '../App.css'

const Form = () => {
  return (




<form action="https://formspree.io/f/mknaagln" method="POST" className="Cform">
           <p>DROP A LINE</p>
                    <input type="text" placeholder="Your Name" name="username" id=""
                    required
                    autoComplete="off"
                    />
                    <input type="email" name="Email" placeholder="Email"
                    autoComplete="off"
                    required />
<input type="number" name="mobile" placeholder="Mobile Number"
                    autoComplete="off"
                    required />                    

                    <textarea name="massage" id="" cols="30" rows="10" required autoComplete="off" placeholder='Message'></textarea>
                    <input type="submit" name="" value={"Send Message"} className='submit'/>
                </form>
  )
}

export default Form
