import React, { useState } from 'react'

function UploadImages() {

            
        const [selectedFileList, setSelectedFileList]=useState([]); 
        const onFileSelected=(event)=>{
            const files=event.target.files;

            for(let i=0; i<files?.length; i++)
            {
            const file=files[i];
            setSelectedFileList((prev) => [...prev, file])
            }
    }


  return (
    <div>
    <h2 className="font-medium text-xl my-3">Upload Car Images</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
     {selectedFileList.map((image,index)=>(
        <div key={index}>
            <img src={URL.createObjectURL(image)} className='w-full h-[130px] object-cover rounded-xl'/>

        </div>
     ))}
      {/* Label for input */}
      <label htmlFor="upload-images">
        <div className="border rounded-xl border-dotted border-primary bg-blue-100 p-10 cursor-pointer hover:shadow-md">
          <h2 className="text-lg text-center text-primary">+</h2>
        </div>
      </label>
      {/* Input for file upload */}
      <input
        type="file"
        multiple={true}
        id="upload-images"
        className="opacity-0"
      />
    </div>
  </div>
);
}

export default UploadImages
