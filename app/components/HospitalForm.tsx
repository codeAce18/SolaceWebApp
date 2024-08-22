import React, { useEffect, useState } from 'react';
import { 
  FormControl, 
  InputLabel, 
  MenuItem, 
  Select, 
  CircularProgress, 
  Button, 
  TextField, 
  Box
} from '@mui/material';
import { useRouter } from 'next/router'; // Import useRouter for navigation
import { SelectChangeEvent } from '@mui/material/Select'; // Import SelectChangeEvent
import FileUploadPharm from './FileUploadPharm';
// import FileUploadFharm from './FileUploadFharm';
// import FileUploadPharma from './FileUploadPharma';
import FileUploadHospital from './FileUploadHospital';
import FileUploadHospt from './FileUploadHospt';

interface State {
  id: string;
  name: string;
}

interface Town {
  id: string;
  name: string;
}


  

const HospitalForm: React.FC = () => {
  const [states, setStates] = useState<State[]>([]);
  const [towns, setTowns] = useState<Town[]>([]);
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedTown, setSelectedTown] = useState<string>('');
  const [loadingStates, setLoadingStates] = useState<boolean>(true);
  const [loadingTowns, setLoadingTowns] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [interests, setInterests] = useState<string>('');
  const [referral, setReferral] = useState<string>('');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [pharmFiles, setPharmFiles] = useState<File[]>([]);
  const [fharmFiles, setFharmFiles] = useState<File[]>([]);
  const [pharmaFiles, setPharmaFiles] = useState<File[]>([]);
  const [hospitalFiles, setHospitalFiles] = useState<File[]>([]);
  const [hosptFiles, setHosptFiles] = useState<File[]>([]);
  const [operationLicenseNumber, setOperationLicenseNumber] = React.useState('');
  const [ninNumber, setNinNumber] = React.useState('');
  const [numberOfStores, setNumberOfStores] = React.useState('');
  const [storeLocationStates, setStoreLocationStates] = React.useState('');
  const [receiverAddress, setReceiverAddress] = useState<string>('');

  const router = useRouter(); // Initialize the router

  // Fetch states from the API
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch('https://nigeria-states-towns-lgas.onrender.com/api/states');
        const data: State[] = await response.json();
        setStates(data);
        setLoadingStates(false);
      } catch (error) {
        console.error('Error fetching states:', error);
        setLoadingStates(false);
      }
    };

    fetchStates();
  }, []);

  // Fetch towns when a state is selected
  const handleStateChange = async (event: SelectChangeEvent<string>) => {
    const stateName = event.target.value as string;
    setSelectedState(stateName);
    setLoadingTowns(true);

    try {
      const response = await fetch(`https://nigeria-states-towns-lgas.onrender.com/api/${stateName.toUpperCase()}/towns`);
      const data: Town[] = await response.json();

      if (Array.isArray(data)) {
        setTowns(data);
      } else {
        console.error('Unexpected response format:', data);
        setTowns([]);
      }
      setLoadingTowns(false);
    } catch (error) {
      console.error('Error fetching towns:', error);
      setLoadingTowns(false);
    }
  };

  // Handle changes in the town selection
  const handleTownChange = (event: SelectChangeEvent<string>) => {
    setSelectedTown(event.target.value as string);
  };

  // Handle input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phoneNumber':
        setPhoneNumber(value);
        break;
        case 'receiverAddress':
            setReceiverAddress(value);
            break;
    }
  };

  // Handle dropdown changes
//   const handleSelectChange = (event: SelectChangeEvent<string>) => {
//     const { name, value } = event.target;
//     switch (name) {
//       case 'interests':
//         setInterests(value as string);
//         break;
//       case 'referral':
//         setReferral(value as string);
//         break;
//     }
//   };

const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const target = event.target as HTMLSelectElement;
    const { name, value } = target;

    if (name === 'numberOfStores') {
      setNumberOfStores(value);
    } else if (name === 'storeLocationStates') {
      setStoreLocationStates(value);
    }
  };


  // Check if the form is valid
  const isFormValid = () => {
    return (
      
        firstName !== '' &&
        lastName !== '' &&
        email !== '' &&
        phoneNumber !== '' &&
        selectedState !== '' &&
        selectedTown !== '' &&
        numberOfStores !== '' &&
        storeLocationStates !== '' &&
        pharmFiles.length > 0  &&
        hospitalFiles.length > 0  &&
        hosptFiles.length > 0 
        
    );
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (isFormValid()) {
      // Navigate to the desired page after form submission
      router.push('/partnershipsuccess'); // Replace with the desired route
    }
  };

  const handlePharmacyDetailsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'operationLicenseNumber') {
      setOperationLicenseNumber(value);
    } else if (name === 'ninNumber') {
      setNinNumber(value);
    }
  };

//   const handleFileDrop = (files: File[]) => {
//     setUploadedFiles(files);
//     // Further processing or uploading logic can go here
//     console.log('Uploaded files:', files);
//   };

const handlePharmFileDrop = (files: File[]) => {
    setPharmFiles(files);
    console.log('Uploaded files for pharmacy:', files);
  };

  const handleFharmFileDrop = (files: File[]) => {
    setFharmFiles(files);
    console.log('Uploaded files for fharm:', files);
  };

  const handlePharmaFileDrop = (files: File[]) => {
    setPharmaFiles(files);
    console.log('Uploaded files for pharma:', files);
  };


  const handleHospitalFileDrop = (files: File[]) => {
    setHospitalFiles(files);
    console.log('Uploaded files for hospital:', files);
  };

  const handleHosptFileDrop = (acceptedFiles: File[]) => {
    setHosptFiles(acceptedFiles);
    console.log('Uploaded files for hospital:', acceptedFiles);
  };


  return (
    <Box  className="w-full max-w-[600px] mx-auto lg:pt-12 pt-8 lg:p-0 p-[20px]">
      <form onSubmit={handleSubmit}>
        <Box>
            <Box className="lg:flex lg:flex-row flex flex-col" gap={2} mb={2}>
                <TextField
                name="pharmacyName"
                label="Enter name of hospital or clinic"
                fullWidth
                margin="normal"
                required
                sx={{ 
                    flex: 1,
                    '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': { borderColor: '#DBA73B' },
                    '&.Mui-focused fieldset': { borderColor: '#DBA73B' },
                    },
                    '& .MuiInputLabel-root': {
                    color: '#646464', // Default label color
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                    color: '#646464', // Label color when focused
                    },
                }}
                />

                <TextField
                name="cacBnNumber"
                label="Enter your CAC or BN number"
                fullWidth
                margin="normal"
                sx={{ 
                    flex: 1,
                    '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': { borderColor: '#DBA73B' },
                    '&.Mui-focused fieldset': { borderColor: '#DBA73B' },
                    },
                    '& .MuiInputLabel-root': {
                    color: '#646464', // Default label color
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                    color: '#646464', // Label color when focused
                    },
                }}
                />
            </Box>
            
            <Box className="flex flex-col"  mb={2}>
                 <FileUploadPharm onDrop={handlePharmFileDrop} />
                <ul>
                    {pharmFiles.map((file, index) => (
                    <li key={index}>{file.name}</li>
                    ))}
                </ul>
            </Box>

          <Box className="lg:flex lg:flex-row flex flex-col" gap={2} mb={2}>
            <TextField
              label="First name of owner"
              name="firstName"
              value={firstName}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: '#DBA73B', // Border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#DBA73B', // Border color when focused
                  },
                },

                '& .MuiInputLabel-root': {
                  color: '#646464', // Default label color
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#646464', // Label color when focused
                },
              }}

                  
            />


              <TextField
              label="Last name of owner"
              name="lastName"
              value={lastName}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required

              sx={{
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: '#DBA73B', // Border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#DBA73B', // Border color when focused
                  },
                },

                '& .MuiInputLabel-root': {
                  color: '#646464', // Default label color
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#646464', // Label color when focused
                },
                  
              }}
            />
          </Box>


          <Box className="lg:flex lg:flex-row flex flex-col" gap={2} mb={2}>
            <TextField
              label="Email Address of owner"
              name="email"
              value={email}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
              type="email"

              sx={{
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: '#DBA73B', // Border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#DBA73B', // Border color when focused
                  },
                },

                '& .MuiInputLabel-root': {
                  color: '#646464', // Default label color
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#646464', // Label color when focused
                },

                  
              }}
            />

              <TextField
              label="Phone number of owner"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
              type="tel"

              sx={{
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: '#DBA73B', // Border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#DBA73B', // Border color when focused
                  },
                },

                '& .MuiInputLabel-root': {
                  color: '#646464', // Default label color
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#646464', // Label color when focused
                },

                  
              }}
            />
          </Box>


          <Box className="lg:flex lg:flex-row flex flex-col" gap={2} mb={2}>
          <TextField
                    label="Enter operation License Number"
                    name="operationLicenseNumber"
                    value={operationLicenseNumber}
                    onChange={handlePharmacyDetailsChange}
                    fullWidth
                    margin="normal"
                    required
                    type="text"
                    sx={{
                    '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                        borderColor: '#DBA73B', // Border color on hover
                        },
                        '&.Mui-focused fieldset': {
                        borderColor: '#DBA73B', // Border color when focused
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: '#646464', // Default label color
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: '#646464', // Label color when focused
                    },
                    }}
                />
              <TextField
                label="NIN number of owner"
                name="ninNumber"
                value={ninNumber}
                onChange={handlePharmacyDetailsChange}
                fullWidth
                margin="normal"
                required
                type="text"
                sx={{
                '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                    borderColor: '#DBA73B', // Border color on hover
                    },
                    '&.Mui-focused fieldset': {
                    borderColor: '#DBA73B', // Border color when focused
                    },
                },
                '& .MuiInputLabel-root': {
                    color: '#646464', // Default label color
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: '#646464', // Label color when focused
                },
                }}
                />          
            </Box>
        </Box>

        <Box className="flex flex-col"  mb={2}>
          <FileUploadHospital onDrop={handleHospitalFileDrop} />
          <ul>
            {hospitalFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </Box>
        
        <Box className="lg:flex lg:flex-row flex flex-col" gap={2} mb={2}>
            <FormControl fullWidth margin="normal"
                sx={{
                '& .MuiInputLabel-root': {
                    color: '#646464', // Default label color
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: '#646464', // Label color when focused
                },
                '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                    borderColor: '#DBA73B', // Border color on hover
                    },
                    '&.Mui-focused fieldset': {
                    borderColor: '#DBA73B', // Border color when focused
                    },
                },
                }}
            >
            <InputLabel>Number of hospital or clinic</InputLabel>
            <Select
                name="numberOfStores"
                value={numberOfStores}
                onChange={handleSelectChange}
                label="Number of hospital or clinic"
                required
            >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
                <MenuItem value="6">6</MenuItem>
                <MenuItem value="7">7</MenuItem>
                <MenuItem value="8">8</MenuItem>
                <MenuItem value="9">9</MenuItem>
                <MenuItem value="10">10</MenuItem>
            </Select>
            </FormControl>

            <FormControl fullWidth margin="normal"
            sx={{
                '& .MuiInputLabel-root': {
                color: '#646464', // Default label color
                },
                '& .MuiInputLabel-root.Mui-focused': {
                color: '#646464', // Label color when focused
                },
                '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                    borderColor: '#DBA73B', // Border color on hover
                },
                '&.Mui-focused fieldset': {
                    borderColor: '#DBA73B', // Border color when focused
                },
                },
            }}
            >
            <InputLabel>Location in How Many States?</InputLabel>
            <Select
                name="storeLocationStates"
                value={storeLocationStates}
                onChange={handleSelectChange}
                label="Location in How Many States?"
                required
            >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
                <MenuItem value="6">6</MenuItem>
                <MenuItem value="7">7</MenuItem>
                <MenuItem value="8">8</MenuItem>
                <MenuItem value="9">9</MenuItem>
                <MenuItem value="10">10</MenuItem>
            </Select>
            </FormControl>
        </Box>
        

        <Box className="lg:flex lg:flex-row flex flex-col" gap={2} mb={2}>
          <FormControl fullWidth margin="normal" 
          sx={{
            '& .MuiInputLabel-root': {
              color: '#646464', // Default label color
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#646464', // Label color when focused
            },
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                borderColor: '#DBA73B', // Border color on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: '#DBA73B', // Border color when focused
              },
            },
          }}
          >
            <InputLabel>State of where HQ is located</InputLabel>
            <Select
              value={selectedState}
              onChange={handleStateChange}
              label="State of where HQ is located"
              required
            >
              <MenuItem value="">
                {loadingStates ? <CircularProgress size={24} /> : 'Select your state'}
              </MenuItem>
              {states.map((state) => (
                <MenuItem key={state.id} value={state.name}>
                  {state.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal"  
            sx={{
              '& .MuiInputLabel-root': {
                color: '#646464', // Default label color
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#646464', // Label color when focused
              },
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: '#DBA73B', // Border color on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#DBA73B', // Border color when focused
                },
              },
            }}
          
          >
            <InputLabel>City of where HQ is located</InputLabel>
            <Select
              value={selectedTown}
              onChange={handleTownChange}
              label="City of where HQ is located"
              required
              disabled={!selectedState} // Disable if no state is selected
            >
              <MenuItem value="">
                {loadingTowns ? <CircularProgress size={24} /> : 'Select your city'}
              </MenuItem>
              {towns.map((town) => (
                <MenuItem key={town.id} value={town.name}>
                  {town.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <TextField
              name="receiverAddress"
              label="Address of hospital or clinic headquater"
              value={receiverAddress}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              sx={{ 
                flex: 1 ,
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: '#DBA73B', // Border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#DBA73B', // Border color when focused
                  },
                },

                
                '& .MuiInputLabel-root': {
                  color: '#646464', // Default label color
                },
                
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#646464', // Label color when focused
                },
              }}
            />

      
        
        <Box className="flex flex-col"  mb={2}>
          <FileUploadHospt onDrop={handleHosptFileDrop} />
          <ul>
            {hosptFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </Box>

        <Box display="flex" justifyContent="center" p={1}>
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            disabled={!isFormValid()}
            sx={{
              backgroundColor: '#DBA73B',
              color: 'white',  // Specific background color
              padding: '12px 24px', // Adjust padding as needed
              width: {
                xs: '100%', // 100% width on mobile
                md: '700px', // Specific width on desktop
              },
              '&:hover': {
                backgroundColor: '#c49130', // Darker shade on hover
              },
              '&.Mui-disabled': {
                backgroundColor: 'rgba(219, 167, 59, 0.5)', // Same color with lower opacity when inactive
              },
            }}
            >
            Submit  Form
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default HospitalForm;
