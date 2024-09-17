import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';
import { IoMdCloseCircle } from "react-icons/io";
import { storage } from './../../../configs/firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db } from './../../../configs';
import { CarImages } from './../../../configs/schema';

function UploadImages({triggerUploadImages, setLoader}) {
  const [selectedFileList, setSelectedFileList] = useState([]);

  const onFileSelected = (event) => {
    const files = Array.from(event.target.files); // Convert to an array
    setSelectedFileList((prev) => [...prev, ...files]); // Append all files at once
  };


  useEffect(()=>{
    if(triggerUploadImages)
    {
      UploadImagesToServer();
    }
  },[triggerUploadImages])

  

  const onImageRemove = (imageToRemove) => {
    // Filter out the image to be removed
    const updatedList = selectedFileList.filter((image) => image !== imageToRemove);
    setSelectedFileList(updatedList); // Update the state with the new list
  };

      
  const UploadImagesToServer = async () => {
    setLoader(true); // Fix the typo here
      await selectedFileList.forEach((file) => {
      const fileName = Date.now() + '.jpeg';
      const storageRef = ref(storage, 'car-marketplace/' + fileName);
      const metaData = {
        contentType: "image/jpeg"
      };
  
      uploadBytes(storageRef, file, metaData).then((snapShot) => {
        // console.log('Uploaded File');
      }).then(resp => {
        getDownloadURL(storageRef).then(async (downloadUrl) => {
          await db.insert(CarImages).values({
            imageUrl: downloadUrl,
            carListingId: triggerUploadImages
          });
        });
      });
  
      setLoader(false);
    });
  };
  

  return (
    <div>
      <h2 className="font-medium text-xl my-4">Upload Car Images</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {/* Display uploaded images */}
        {selectedFileList.map((image, index) => (
          <div key={index} className="relative">
            <IoMdCloseCircle
              className="absolute top-2 right-2 text-white text-xl cursor-pointer"
              onClick={() => onImageRemove(image)} // Remove the selected image
            />
            <img
              src={URL.createObjectURL(image)}
              alt={`upload-preview-${index}`}
              className="w-full h-[130px] object-cover rounded-xl"
            />
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
          multiple
          id="upload-images"
          className="opacity-0"
          onChange={onFileSelected} // Attach the onChange handler
        />
      </div>
     
    </div>
  ); 
}

export default UploadImages;
