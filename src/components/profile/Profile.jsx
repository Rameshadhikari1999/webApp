import React, { useState } from "react";
import myImage from "../../assets/images/ramesh.png";
import { MdModeEdit } from "react-icons/md";


const Profile = () => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleEditImg = () => {
        document.getElementById('fileInput').click();
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if(file){
            setSelectedImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            }
            reader.readAsDataURL(file);
        }
    }
  return (
    <div id="profile" className="w-full h-screen bg-gray-800 text-white">
      <h1 className="text-3xl font-serif font-bold p-5 ml-10 md:pt-10 ">Your Profile</h1>

      <div className=" w-full md:w-[80%] lg:w-full flex justify-around p-2 md:p-10">

        <div className="w-1/2 flex flex-col justify-center items-start">
          <h3 className="text-lg font-serif font-bold text-blue-400">Ramesh Adhikari</h3>
          <p className="font-serif text-green-500">2021rameshprasad@gmail.com</p>
          <p className="font-serif">+977-9865295585</p>
        </div>

        <div className=" w-1/2 flex flex-col pr-2">
          <div className="flex justify-end">
            <img src={preview?preview:myImage} className="w-1/2 rounded" alt="profile image" />
          </div>
          <div className="flex justify-end">
          <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
            />
            <MdModeEdit onClick={handleEditImg} className="text-3xl cursor-pointer hover:text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
