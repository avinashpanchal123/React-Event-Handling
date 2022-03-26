import React, {useState} from "react";

const Input = ()=>{
    let iniInfo = {
        name : "",
        email : "",
        age : ""
    }

    const [info, setInfo] = useState(iniInfo);

    const [data , setdata] = useState([])

    

    const handleChange = e=>{
     let {name ,value} = e.target
        setInfo({...info, [name] : value})
    }

    const  handleData= ()=>{
        let newData = [...data, info];

        setdata(newData)
        console.log(data);
        setInfo(iniInfo)
        
    }

    let i = 0;

    return (
        <>
        <input type="email"
        onChange={handleChange}
         name="email"
        value={info.email}
         placeholder="email" />

        <input type="name"
        onChange={handleChange}
         name="name" 
        value={info.name}
        placeholder="name"/>

        <input type="Number"
        onChange={handleChange}
         name="age"
        value={info.age}
         placeholder="age"/>
         <button onClick={handleData}>get Data</button>
        <ol>
            {
                 data.map((item)=>{
                 return <li key={i++}>{[item.name, item.email, item.age]}</li>
                })
            }
        </ol>
        </>
        
    )
}

export {Input}