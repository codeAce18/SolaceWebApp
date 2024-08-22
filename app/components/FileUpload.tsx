import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Typography, IconButton } from '@mui/material';
import Image from 'next/image';
import UploadIcon from '../../public/assests/Uploader.svg'; // Import a file upload icon

interface FileUploadProps {
    onDrop: (acceptedFiles: File[]) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onDrop }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      // Call the passed onDrop function with the accepted files
      onDrop(acceptedFiles);
    },
    accept: {
      'application/pdf': [], // Accept PDFs
      'image/*': [],         // Accept all image types
    },
    maxSize: 5242880, // Set maximum file size to 5MB
  });

  return (
    <Box
      {...getRootProps()}
      sx={{
        border: '1px dashed #DBA73B',
        borderRadius: '8px',
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        backgroundColor: isDragActive ? '#f5f5f5' : 'transparent',
        transition: 'background-color 0.3s ease',
        width: '100%',
        textAlign: 'center'
      }}
    >
      <input {...getInputProps()} />
      <IconButton sx={{ mb: 2 }}>
        <Image src={UploadIcon} alt="UploadIcon" />
      </IconButton>
      <Typography>
        <span className="text-Fozanova-gold  lg:text-[17px] text-[15px]">Click to upload beneficiary photo</span> or drag and drop
      </Typography>
      <Typography className="text-p-grey lg:text-[15px] text-[12px]">
        PDF, PNG or JPG [max. 5mb]
      </Typography>
    </Box>
  );
};

export default FileUpload;
