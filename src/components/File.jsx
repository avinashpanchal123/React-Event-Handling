import React, {useState, useRef} from 'react'

function File() {
    const fileReference = useRef();

    const uploadFile = ()=>{
        let file = fileReference.current.files;
        console.log(file);
    }
  return (
    <>
    <input type="file"
    ref={fileReference}
    multiple
     name="" id="" />
     <button onClick={uploadFile}>Upload</button>
    </>
  )
}

export  {File}