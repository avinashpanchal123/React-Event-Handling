import React, {useState, useRef} from 'react'

let iniState = {
    name : "",
    email:"",
    isMarried:"",
    gender:""
}

export default function Form() {
    const [info, setInfo] = useState(iniState);

    let {name, email, isMarried, gender} = info
    // here we are extracting attributes and values from form

    const handleSubmit = (event) => {
        event.preventDefault();
       
        alert('A name was submitted: ' + name );
        setInfo(iniState)

        console.log(info);
      }

    const handleChange =  e=>{
        let {name, value, checked, type} = e.target

        value = type == "checkbox"? checked : value
        // if type = checkbox check checked attribute else check for value

        let newInfo = {...info, [name]:value};
        setInfo(newInfo)
    }
  return (
    <>
    <form onSubmit={handleSubmit} action="">
       <div>
       <input
        name='name'
         type="text"
         onChange={handleChange}
         value={name}
         placeholder='name'
          />
       </div>

       <div>
       <input 
         type="email"
          name="email"
          onChange={handleChange}
          value={email}
          placeholder='email'
           />
       </div>

        <div>
        <input
           type="checkbox"
           onChange={handleChange}
           checked={isMarried}
           name="isMarried"/>

           <label htmlFor="isMarried">Married Status</label>
        </div>

        <div>
            <select name="gender"
            onChange={handleChange}
             value={gender}>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
            </select>
        </div>

        <button type="submit">Submit</button>
    </form>
    </>
  )
}

export {Form}
