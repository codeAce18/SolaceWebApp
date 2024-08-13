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

interface State {
  id: string;
  name: string;
}

interface Town {
  id: string;
  name: string;
}

const Form: React.FC = () => {
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
    }
  };

  // Handle dropdown changes
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    switch (name) {
      case 'interests':
        setInterests(value as string);
        break;
      case 'referral':
        setReferral(value as string);
        break;
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
      interests !== '' &&
      referral !== ''
    );
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (isFormValid()) {
      // Navigate to the desired page after form submission
      router.push('/laceaisuccess'); // Replace with the desired route
    }
  };

  return (
    <Box  className="w-full max-w-[600px] mx-auto lg:pt-12 pt-8 lg:p-0 p-[20px]">
      <form onSubmit={handleSubmit}>
        <Box>
          <Box className="lg:flex lg:flex-row flex flex-col" gap={2} mb={2}>
            <TextField
              label="First Name"
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
                  color: '#DBA73B', // Default label color
                },
                
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#DBA73B', // Label color when focused
                },
              }}

                  
            />


              <TextField
              label="Last Name"
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
                  color: '#DBA73B', // Default label color
                },
                
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#DBA73B', // Label color when focused
                },

                  
              }}
            />
          </Box>


          <Box className="lg:flex lg:flex-row flex flex-col" gap={2} mb={2}>
            <TextField
              label="Email Address"
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
                  color: '#DBA73B', // Default label color
                },
                
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#DBA73B', // Label color when focused
                },

                  
              }}
            />

              <TextField
              label="Phone Number"
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
                  color: '#DBA73B', // Default label color
                },
                
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#DBA73B', // Label color when focused
                },

                  
              }}
            />
          </Box>
        </Box>

        <Box className="lg:flex lg:flex-row flex flex-col" gap={2} mb={2}>
          <FormControl fullWidth margin="normal" 
          sx={{
            '& .MuiInputLabel-root': {
              color: '#DBA73B', // Default label color
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#DBA73B', // Label color when focused
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
            <InputLabel>State of Residence</InputLabel>
            <Select
              value={selectedState}
              onChange={handleStateChange}
              label="State of Residence"
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
                color: '#DBA73B', // Default label color
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#DBA73B', // Label color when focused
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
            <InputLabel>City of Residence</InputLabel>
            <Select
              value={selectedTown}
              onChange={handleTownChange}
              label="City of Residence"
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

      
        
        <Box className="lg:flex lg:flex-row flex flex-col" gap={2} mb={2}>
          <FormControl fullWidth margin="normal"  
            sx={{
              '& .MuiInputLabel-root': {
                color: '#DBA73B', // Default label color
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#DBA73B', // Label color when focused
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
            <InputLabel>What Interests You About LaceAI?</InputLabel>
            <Select
              name="interests"
              value={interests}
              onChange={handleSelectChange}
              label="What Interests You About LaceAI?"
              required
            >
              <MenuItem value="Customer Service">
                Customer Service
              </MenuItem>
              <MenuItem value="Personal Development">
                Personal Development
              </MenuItem>
              <MenuItem value="Leadership">
                Leadership
              </MenuItem>
              <MenuItem value="Community">
                Community
              </MenuItem>
              <MenuItem value="Volunteering">
                Volunteering
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal"  
            sx={{
              '& .MuiInputLabel-root': {
                color: '#DBA73B', // Default label color
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#DBA73B', // Label color when focused
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
            <InputLabel>Where Did You Hear About Us?</InputLabel>
            <Select
              name="referral"
              value={referral}
              onChange={handleSelectChange}
              label="Where Did You Hear About Us?"
              required
            >
              <MenuItem value="Social Media">Social Media</MenuItem>
              <MenuItem value="Friends and Family">
                Friends and Family
              </MenuItem>
              <MenuItem value="LaceAI Event">LaceAI Event</MenuItem>
              <MenuItem value="Website">Website</MenuItem>
            </Select>
          </FormControl>
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
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
