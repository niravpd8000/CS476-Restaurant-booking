import React, {useState} from 'react';
import axios from 'axios';
import GreenButton from "../GreenButton";

const ImageUploadForm = ({setImageUrl}) => {
    const [selectedFile, setSelectedFile] = useState(null);
    // const [image, setImage] = useState(null);
    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        await setSelectedFile(file);
        await handleUpload(file);
    };

    const handleUpload = async (file) => {
        try {
            if (!selectedFile) {
                console.error('No file selected.');
                return;
            }

            const image_url = await uploadImage(file);
            // setImageUrl(image_url)
            // Now you can use the imageUrl as needed (e.g., save it to state, send it to the server, etc.)

            // Clear the selected file
            setSelectedFile(null);
        } catch (error) {
            // Handle upload error
            console.error('File upload failed:', error.message);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange}/>
            <GreenButton onClick={handleUpload}>Upload</GreenButton>
        </div>
    );
};

export default ImageUploadForm;


const uploadImage = async (file) => {
    try {
        // Create a FormData object
        const formData = new FormData();
        formData.append('file', file);

        // Make a request to your server endpoint
        const response = await axios.post('http://localhost:8080/api/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Set the correct content type
            },
        });

        // Assuming the server responds with the URL of the uploaded image
        const imageUrl = response.data.image_url;

        // Log the response (you may want to handle it differently)
        console.log('File uploaded successfully:', response.data);

        return imageUrl; // Return the URL of the uploaded image
    } catch (error) {
        // Handle upload error
        console.error('File upload failed:', error.message);
        throw error; // Rethrow the error for the caller to handle
    }
};

