import React, { useEffect, useState } from 'react';
import { 
  FormControl, 
  InputLabel, 
  MenuItem, 
  Select, 
  CircularProgress, 
  Button, 
  TextField, 
  Box,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import { useRouter } from 'next/router'; // Import useRouter for navigation
import { SelectChangeEvent } from '@mui/material/Select'; // Import SelectChangeEvent
import FileUploadPharm from './FileUploadPharm';
import FileUploadFharm from './FileUploadFharm';
import FileUploadPharma from './FileUploadPharma';
import FileUploadDoc from './FileUploadDoc';
import FileUploadDoctor from './FileUploadDoctor';
import FileUploadDocto from './FileUploadDocto';

interface State {
  id: string;
  name: string;
}

interface Town {
  id: string;
  name: string;
}


  

const UndertakersForm: React.FC = () => {
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
  const [docFiles, setDocFiles] = useState<File[]>([]);

  const [doctorFiles, setDoctorFiles] = useState<File[]>([]);
  const [doctoFiles, setDoctoFiles] = useState<File[]>([]);
  const [operationLicenseNumber, setOperationLicenseNumber] = React.useState('');
  const [ninNumber, setNinNumber] = React.useState('');
  const [numberOfStores, setNumberOfStores] = React.useState('');
  const [storeLocationStates, setStoreLocationStates] = React.useState('');
  const [receiverAddress, setReceiverAddress] = useState<string>('');
  const [specialty, setSpecialty] = React.useState('');
  const [employmentStatus, setEmploymentStatus] = useState<string>('');
  const [jobRole, setJobRole] = useState<string>('');
  const [placeOfWork, setPlaceOfWork] = useState<string>('');
  const [yearsWithEmployer, setYearsWithEmployer] = useState<number | string>('');
  const [medicalSchool, setMedicalSchool] = useState<string>('');
  const [yearGraduated, setYearGraduated] = useState<string>('');
  const [referralNumber, setReferralNumber] = useState<string>('');
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);


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

const handleChange = (event: SelectChangeEvent<string>) => {
    setSpecialty(event.target.value);
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
        ninNumber !== '' &&
        referralNumber !== '' &&
        receiverAddress !== '' &&
        docFiles.length > 0 &&
        doctoFiles.length > 0 &&
        termsAccepted 
        
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

  const handleMedicalSchoolChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMedicalSchool(event.target.value);
  };

  const handlePharmacyDetailsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'operationLicenseNumber') {
      setOperationLicenseNumber(value);
    } else if (name === 'ninNumber') {
      setNinNumber(value);
    }
  };

  const handleEmploymentStatusChange = (event: SelectChangeEvent<string>) => {
    setEmploymentStatus(event.target.value);
  };

  const handleJobRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setJobRole(event.target.value);
  };

  const handlePlaceOfWorkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlaceOfWork(event.target.value);
  };

  const handleYearsWithEmployerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setYearsWithEmployer(value ? Number(value) : '');
  };

  const handleYearGraduatedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYearGraduated(event.target.value);
  };


  const handleReferralNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReferralNumber(event.target.value);
  };

  const handleTermsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTermsAccepted(event.target.checked);
  };







  const handleDocFileDrop = (files: File[]) => {
    setDocFiles(files);
    console.log('Uploaded files for Doc:', files);
  };

  const handleDoctorFileDrop = (acceptedFiles: File[]) => {
    setDoctorFiles(acceptedFiles);
    console.log('Uploaded files for doctor:', acceptedFiles);
  };

  const handleDoctoFileDrop = (acceptedFiles: File[]) => {
    setDoctoFiles(acceptedFiles);
    console.log('Uploaded files for doctor:', acceptedFiles);
  };




  return (
    <Box  className="w-full max-w-[600px] mx-auto lg:pt-12 pt-8 lg:p-0 p-[20px]">
        <div>
            <h1 className="lg:text-[20px] text-[17px] font-normal tracking-[-0.96px] lg:leading-[27.42px] leading-[25px] text-[#121933] lg:text-left text-center">For Nigerian Undertakers Only</h1>
        </div>
      <form onSubmit={handleSubmit}>
        <Box>
            <Box className="lg:flex lg:flex-row flex flex-col" gap={2} mb={2}>
                <FormControl fullWidth margin="normal" sx={{ flex: 1,
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
                  }}>
                <InputLabel
                >
                    Do you offer undertaking services?
                </InputLabel>
                <Select
                    value={specialty}
                    onChange={handleChange}
                    label="Do you offer undertaking services?"
                    required
                >
                    <MenuItem value="No">No</MenuItem>
                    <MenuItem value="yes">yes</MenuItem>
                </Select>
                </FormControl>
                
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
            
            <Box className=" flex flex-col"  mb={2}>
                 <FileUploadDoc onDrop={handleDocFileDrop} />
                <ul>
                    {docFiles.map((file, index) => (
                    <li key={index}>{file.name}</li>
                    ))}
                </ul>
            </Box>

          <Box className="lg:flex lg:flex-row flex flex-col" gap={2} mb={2}>
            <TextField
              label="First name"
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
              label="Last name"
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
              label="Email address"
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
              label="Phone number"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const inputValue = e.target.value;
                // Allow only numbers and limit to 11 digits
                if (/^\d{0,11}$/.test(inputValue)) {
                  handleInputChange(e);
                }
              }}
              fullWidth
              margin="normal"
              required
              inputProps={{
                inputMode: 'numeric', // Mobile keyboards will show number pad
                pattern: '[0-9]*',    // Enforces numeric input
              }}
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
                label="National Identity Number (NIN)"
                name="ninNumber"
                value={ninNumber}
                onChange={handlePharmacyDetailsChange}
                fullWidth
                margin="normal"
                required
                type="text"
                sx={{
                    flex: 1,
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
                name="referralNumber"
                label="Referral Number (Optional)"
                value={referralNumber}
                onChange={handleReferralNumberChange }
                fullWidth
                margin="normal"
                sx={{
                flex: 1,
                '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': { borderColor: '#DBA73B' },
                    '&.Mui-focused fieldset': { borderColor: '#DBA73B' },
                },
                '& .MuiInputLabel-root': {
                    color: '#646464',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: '#646464',
                },
                }}
            />
        </Box>

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
            <InputLabel>State where office is located</InputLabel>
            <Select
              value={selectedState}
              onChange={handleStateChange}
              label="State where office is located"
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
            <InputLabel>City where office is located</InputLabel>
            <Select
              value={selectedTown}
              onChange={handleTownChange}
              label="City where office is located"
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
              label="Enter office valid address in details"
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
            <FileUploadDocto onDrop={handleDoctoFileDrop} />
            <ul>
                {doctoFiles.map((file, index) => (
                <li key={index}>{file.name}</li>
                ))}
            </ul>
        </Box>

        <FormControlLabel
            control={
            <Checkbox
                checked={termsAccepted}
                onChange={handleTermsChange}
                color="primary"
                sx={{
                    '& .MuiSvgIcon-root': {
                      color: '#DBA73B', // Color of the check mark
                    },
                    '&:hover': {
                      backgroundColor: 'transparent', // Remove background color on hover
                    },
                  }}
            />
            }
            label={
                <span className='lg:text-[12px] max-w-[578px] text-[10px] lg:leading-[18px] leading-[8px] text-p-grey'>
                  I have read my role as a Doctor and agree with our <span className='text-[#DBA73B]'>Confidentiality</span> and <span className='text-[#DBA73B]'>Condition of Usage</span> Agreement.
                </span>
            }
        />


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
            Submit Application
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default UndertakersForm;
