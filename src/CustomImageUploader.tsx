// import React, { useState } from 'react';
// import { Box, Label, Text } from '@adminjs/design-system';
// import axios from 'axios';

// const CustomImageUploader = (props) => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [fileName, setFileName] = useState(null);

//   const { property } = props;
//   let label = 'Завантажити файл';

//   if (property.name === 'imageUrl') {
//     label = 'Додайте зображення у форматі jpeg/jpg';
//   } else if (property.name === 'audioUrl') {
//     label = 'Додайте аудіо-файл у форматі mp3';
//   } else if (property.name === 'fileUrl') {
//     label = 'Додайте аудіо-файл у форматі mp3 або відео-файл у форматі mp4';
//   }

//   const handleUploadClick = async (event) => {
//     const file = event.target.files[0];
//     setSelectedImage(URL.createObjectURL(file));

//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const response = await axios.post(
//         'http://localhost:4000/files',
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         },
//       );

//       // Використовуємо метод onChange, щоб повідомити AdminJS про зміну значення
//       props.onChange(property.name, response.data.filename);

//       setFileName(response.data.filename);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <Box>
//       <Label>{label}</Label>
//       <input
//         id="fileInput"
//         name="fileInput"
//         type="file"
//         onChange={handleUploadClick}
//         accept="image/*,audio/*,video/*"
//       />
//       {selectedImage && (
//         <Box>
//           <Text>Попередній перегляд:</Text>
//           <img
//             src={selectedImage}
//             alt="Selected"
//             style={{ width: '200px', height: '200px' }}
//           />
//         </Box>
//       )}
//       {fileName && (
//         <Box>
//           <Text>Ім'я завантаженого файлу: </Text>
//           <Text variant="bold">{fileName}</Text>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default CustomImageUploader;
