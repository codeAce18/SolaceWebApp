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
  const handleStateChange = async (event: React.ChangeEvent<{ value: unknown }>) => {
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
  const handleTownChange = (event: React.ChangeEvent<{ value: unknown }>) => {
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
  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
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
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={2}
      sx={{ maxWidth: 1200, margin: 'auto' }}
    >
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          flexWrap="wrap"
          justifyContent="center"
        >
          <Box width={{ xs: '100%', sm: '45%', md: 'w-96' }} p={1}>
            <TextField
              label="First Name"
              name="firstName"
              value={firstName}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
            />
          </Box>
          <Box width={{ xs: '100%', sm: '45%', md: 'w-96' }} p={1}>
            <TextField
              label="Last Name"
              name="lastName"
              value={lastName}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
            />
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          flexWrap="wrap"
          justifyContent="center"
        >
          <Box width={{ xs: '100%', sm: '45%', md: 'w-96' }} p={1}>
            <TextField
              label="Email Address"
              name="email"
              value={email}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
              type="email"
            />
          </Box>
          <Box width={{ xs: '100%', sm: '45%', md: 'w-96' }} p={1}>
            <TextField
              label="Phone Number"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
              type="tel"
            />
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          flexWrap="wrap"
          justifyContent="center"
        >
          <Box width={{ xs: '100%', sm: '45%', md: 'w-96' }} p={1}>
            <FormControl fullWidth margin="normal">
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
          </Box>
          <Box width={{ xs: '100%', sm: '45%', md: 'w-96' }} p={1}>
            <FormControl fullWidth margin="normal">
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
        </Box>

        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          flexWrap="wrap"
          justifyContent="center"
        >
          <Box width={{ xs: '100%', sm: '45%', md: 'w-96' }} p={1}>
            <FormControl fullWidth margin="normal">
              <InputLabel>What Interests You About LaceAI?</InputLabel>
              <Select
                name="interests"
                value={interests}
                onChange={handleSelectChange}
                label="What Interests You About LaceAI?"
                required
              >
                <MenuItem value="">
                  {'Select your reasons'}
                </MenuItem>
                <MenuItem value="Option 1">Just Curious</MenuItem>
                <MenuItem value="Option 2">My Dad's Health</MenuItem>
                <MenuItem value="Option 3">My Mom's Health</MenuItem>
                <MenuItem value="Option 1">My Personal Health</MenuItem>
                <MenuItem value="Option 2">My Guardian's Health</MenuItem>
                <MenuItem value="Option 3">My Children's Health</MenuItem>
                <MenuItem value="Option 2">Nothing</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box width={{ xs: '100%', sm: '45%', md: 'w-96' }} p={1}>
            <FormControl fullWidth margin="normal">
              <InputLabel>How Did You Hear About Us?</InputLabel>
              <Select
                name="referral"
                value={referral}
                onChange={handleSelectChange}
                label="How Did You Hear About Us?"
                required
              >
                <MenuItem value="">
                  {'Select from list'}
                </MenuItem>
                <MenuItem value="Option 1">On Radio</MenuItem>
                <MenuItem value="Option 2">On Linkedin</MenuItem>
                <MenuItem value="Option 3">On Youtube</MenuItem>
                <MenuItem value="Option 1">On Tiktok</MenuItem>
                <MenuItem value="Option 2">On Instagram</MenuItem>
                <MenuItem value="Option 3">On Television</MenuItem>
                <MenuItem value="Option 2">Via Word of Mouth</MenuItem>
                <MenuItem value="Option 3">On Others Platform</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Box textAlign="center" mt={2}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: '#DBA73B',
              color: '#fff',
              width: '420px', // Set the button width
              '&:hover': {
                backgroundColor: '#DBA73B', // Slightly darker shade on hover
              },

              '&.Mui-disabled': {
                backgroundColor: '#DBA73B', // Disabled color
                color: '#fff', // Text color when disabled
                opacity: 0.3,
              },
            }}
            disabled={!isFormValid()}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
