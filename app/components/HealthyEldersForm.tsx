import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { useRouter } from 'next/router';
import SecuredByPaystack from '../../public/assests/Secured by Paystack.svg';
import { SelectChangeEvent } from '@mui/material';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  IconButton,
  InputAdornment,
  StepConnector,
  stepConnectorClasses
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PasswordStrengthBar from 'react-password-strength-bar';

const steps = ['Sign Up', 'Add Address', 'Make Payments'];

const StyledStepConnector = (props: any) => (
  <StepConnector
    {...props}
    sx={{
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#DBA73B',
      },
    }}
  />
);

const StyledStepIcon = (props: any) => {
  const { active, completed } = props;
  return (
    <div
      style={{
        width: 24,
        height: 24,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: active ? '#DBA73B' : completed ? '#F0C78B' : '#F0E8D1',
        color: '#fff',
      }}
    >
      {props.icon}
    </div>
  );
};

const HealthyEldersForm: React.FC = () => {
  const router = useRouter(); // Initialize the router
  const [activeStep, setActiveStep] = useState<number>(0);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [referralCode, setReferralCode] = useState<string>('');
  const [howDidYouHear, setHowDidYouHear] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const [receiverFirstName, setReceiverFirstName] = useState<string>('');
  const [receiverLastName, setReceiverLastName] = useState<string>('');
  const [receiverEmail, setReceiverEmail] = useState<string>('');
  const [receiverPhoneNumber, setReceiverPhoneNumber] = useState<string>('');
  const [receiverState, setReceiverState] = useState<string>('');
  const [receiverCity, setReceiverCity] = useState<string>('');
  const [receiverAddress, setReceiverAddress] = useState<string>('');


  const [states, setStates] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [loadingStates, setLoadingStates] = useState<boolean>(true);
  const [loadingCities, setLoadingCities] = useState<boolean>(true);

  const [monthlyMembershipFee, setMonthlyMembershipFee] = useState<string>('₦1,000');
  const [totalAmount, setTotalAmount] = useState<string>('₦12,000');
const [renewalOption, setRenewalOption] = useState<string>('autoRenew');
const [paymentMethod, setPaymentMethod] = useState<string>('debitCard');
const [referralName, setReferralName] = useState<string>('');

const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = event.target;
  switch (name) {
    case 'monthlyMembershipFee':
      setMonthlyMembershipFee(value);
      break;
    case 'totalAmount':
      setTotalAmount(value);
      break;
    case 'referralCode':
      setReferralCode(value);
      break;
    case 'referralName':
      setReferralName(value);
      break;
  }
};

const handleRenewalOptionChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  setRenewalOption(event.target.value as string);
};

const handlePaymentMethodChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  setPaymentMethod(event.target.value as string);
};


  

  // Fetch states from the API
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch('https://nigeria-states-towns-lgas.onrender.com/api/states');
        const data = await response.json();
        // Assuming data is an array of objects with a 'name' property
        setStates(data.map((state: { name: string }) => state.name)); 
      } catch (error) {
        console.error('Error fetching states:', error);
      } finally {
        setLoadingStates(false);
      }
    };

    fetchStates();
  }, []);

  // Fetch cities when a state is selected
  useEffect(() => {
    const fetchCities = async () => {
      if (receiverState) {
        try {
          const response = await fetch(`https://nigeria-states-towns-lgas.onrender.com/api/${receiverState.toUpperCase()}/towns`);
          const data = await response.json();
          // Assuming data is an array of objects with a 'name' property
          setCities(data.map((city: { name: string }) => city.name));
        } catch (error) {
          console.error('Error fetching cities:', error);
        } finally {
          setLoadingCities(false);
        }
      }
    };

    fetchCities();
  }, [receiverState]);

  const handleStateChange = (event: SelectChangeEvent<string>) => {
    setReceiverState(event.target.value as string);
  };

  const handleCityChange = (event: SelectChangeEvent<string>) => {
    setReceiverCity(event.target.value as string);
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      // Navigate to 'subscribed' page on final step
      router.push('/subscribedsuccess');
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      case 'referralCode':
        setReferralCode(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
    }
  };

  const handleReceiverChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case 'receiverFirstName':
        setReceiverFirstName(value);
        break;
      case 'receiverLastName':
        setReceiverLastName(value);
        break;
      case 'receiverEmail':
        setReceiverEmail(value);
        break;
      case 'receiverPhoneNumber':
        setReceiverPhoneNumber(value);
        break;
      case 'receiverAddress':
        setReceiverAddress(value);
        break;
    }
  };

  // const handleStateChange = (event: SelectChangeEvent<string>) => {
  //   setReceiverState(event.target.value as string);
  // };

  const handleReceiverSelectChange = (event: React.ChangeEvent<{ value: unknown }>, type: 'state' | 'city') => {
    if (type === 'state') {
      setReceiverState(event.target.value as string);
    } else {
      setReceiverCity(event.target.value as string);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show); // Toggles the state
  };


  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword((show) => !show); // Toggles the state
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setHowDidYouHear(event.target.value as string);
  };
  
  const isStepValid = () => {
    if (activeStep === 0) {
      return (
        firstName &&
        lastName &&
        email &&
        phoneNumber &&
        referralCode &&
        howDidYouHear &&
        password &&
        confirmPassword &&
        password === confirmPassword &&
        password.length >= 8
      );
    } else if (activeStep === 1) {
      return (
        receiverFirstName &&
        receiverLastName &&
        receiverEmail &&
        receiverPhoneNumber &&
        receiverState &&
        receiverCity &&
        receiverAddress
      );
    }
    return true;
  };

  // Determine heading text based on active step
  const getHeadingText = () => {
    switch (activeStep) {
      case 0:
        return 'Personal Details of Solace User';
      case 1:
        return 'Add Shipping Address of Receiver';
      case 2:
        return 'Make  Payment Securely';
      default:
        return '';
    }
  };

  return (
    <>
      <div>
        <h1 className="text-center lg:text-[48px] text-[40px] text-[#121933] lg:leading-[58px] leading-[50px] tracking-[-1px] max-w-[935px] mx-auto">
          Healthy Elders Club Subscription Form
        </h1>
      </div>
      <div className="lg:flex lg:flex-row  flex flex-col gap-y-5 items-start justify-center lg:pt-16 pt-10 max-w-[700px] mx-auto">
        <h1 className="lg:text-[20px] text-[15px] text-[#121933] lg:leading-[27.42px] leading-[25px] font-normal tracking-[-0.96] mx-auto">{getHeadingText()}</h1>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          connector={<StyledStepConnector />}
          sx={{
            width: '80%',
            maxWidth: '400px',
            margin: '0 auto',
            '& .MuiStepLabel-root': {
              color: '#DBA73B',
            },
          }}
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel
                StepIconComponent={(props) => <StyledStepIcon {...props} icon={index + 1} />}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <div className="w-full max-w-[600px] mx-auto lg:pt-12 pt-8 lg:p-0 p-[20px]">
        {activeStep === 0 && (
          <Box>
            <Box  gap={2} mb={2} className="lg:flex  lg:flex-row flex flex-col">
              <TextField
                name="firstName"
                label="First Name"
                value={firstName}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
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



              <TextField
                name="lastName"
                label="Last Name"
                value={lastName}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
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
            </Box>
            <Box className="lg:flex  lg:flex-row flex flex-col" gap={2} mb={2}>
              <TextField
                name="email"
                label="Email Address"
                value={email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
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
              <TextField
                name="phoneNumber"
                label="Phone Number"
                value={phoneNumber}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const inputValue = e.target.value;
                  // Allow only numbers and limit to 11 digits
                  if (/^\d{0,11}$/.test(inputValue)) {
                    handleChange(e);
                  }
                }}
                fullWidth
                margin="normal"
                required
                inputProps={{
                  inputMode: 'numeric', // Mobile keyboards will show number pad
                  pattern: '[0-9]*',    // Enforces numeric input
                }}
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
            </Box>
            <Box className="lg:flex  lg:flex-row flex flex-col" gap={2} mb={2}>
              <TextField
                name="referralCode"
                label="Referral Code (optional)"
                value={referralCode}
                onChange={handleChange}
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
              <FormControl fullWidth margin="normal" sx={{ 
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
                }}>
                <InputLabel>How Did You Hear About Us?</InputLabel>
                <Select
                  label="How Did You Hear About Us?"
                  value={howDidYouHear}
                  onChange={handleSelectChange}
                  required
                >
                  <MenuItem value="On Radio">On Radio</MenuItem>
                  <MenuItem value="On Radio">On LinkedIn</MenuItem>
                  <MenuItem value="On Youtube">On YouTube</MenuItem>
                  <MenuItem value="Advertisement">On TikTok</MenuItem>
                  <MenuItem value="Others">On Instagram</MenuItem>
                  <MenuItem value="Others">On Television</MenuItem>
                  <MenuItem value="Others">On X (formally Twitter)</MenuItem>
                  <MenuItem value="Others">Via Word of Mouth</MenuItem>
                  <MenuItem value="Others">On Others Platform</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box className="lg:flex  lg:flex-row flex flex-col" gap={2} mb={2}>
            <TextField
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'} // Show/hide based on state
              value={password}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
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
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}

              />
              <TextField
              name="confirmPassword"
              label="Confirm Password"
              type={showConfirmPassword ? 'text' : 'password'} // Show/hide based on state
              value={confirmPassword}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
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
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowConfirmPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            </Box>
            <PasswordStrengthBar password={password} />
          </Box>
        )}
        {activeStep === 1 && (
          <Box>
            <Box className="lg:flex  lg:flex-row flex flex-col" gap={2} mb={2}>
              <TextField
                name="receiverFirstName"
                label="Receiver's First Name"
                value={receiverFirstName}
                onChange={handleReceiverChange}
                fullWidth
                required
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
              <TextField
                name="receiverLastName"
                label="Receiver's Last Name"
                value={receiverLastName}
                onChange={handleReceiverChange}
                fullWidth
                required
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
            </Box>
            <Box className="lg:flex  lg:flex-row flex flex-col" gap={2} mb={2}>
              <TextField
                name="receiverEmail"
                label="Receiver's Email Address"
                value={receiverEmail}
                onChange={handleReceiverChange}
                fullWidth
                required
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
              <TextField
                name="receiverPhoneNumber"
                label="Receiver&apos;s Phone Number"
                value={receiverPhoneNumber}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const inputValue = e.target.value;
                  // Allow only numbers and limit to 11 digits
                  if (/^\d{0,11}$/.test(inputValue)) {
                    handleReceiverChange(e);
                  }
                }}
                fullWidth
                required
                margin="normal"
                inputProps={{
                  inputMode: 'numeric', // Mobile keyboards will show number pad
                  pattern: '[0-9]*',    // Enforces numeric input
                }}
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
            </Box>
            <Box className="lg:flex  lg:flex-row flex flex-col" gap={2} mb={2}>
              <FormControl fullWidth margin="normal" sx={{ 
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
                }}>
                <InputLabel>State of Residence</InputLabel>
                <Select
                   label="State of Residence"
                  value={receiverState}
                  onChange={handleStateChange}
                  required
                >
                  {loadingStates ? (
                    <MenuItem>Loading...</MenuItem>
                  ) : (
                    states.map((state) => (
                      <MenuItem key={state} value={state}>
                        {state}
                      </MenuItem>
                    ))
                  )}
                </Select>
              </FormControl>
              <FormControl fullWidth margin="normal" sx={{ 
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
                }}>
                <InputLabel>City of Residence</InputLabel>
                <Select
                 label="city of Residence"
                  value={receiverCity}
                  onChange={handleCityChange}
                  disabled={loadingCities || !receiverState}
                  required
                >
                  {loadingCities ? (
                    <MenuItem>Loading...</MenuItem>
                  ) : (
                    cities.map((city) => (
                      <MenuItem key={city} value={city}>
                        {city}
                      </MenuItem>
                    ))
                  )}
                </Select>
              </FormControl>
            </Box>
            <TextField
              name="receiverAddress"
              label="Detailed Address"
              value={receiverAddress}
              onChange={handleReceiverChange}
              fullWidth
              required
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
          </Box>
        )}
        {activeStep === 2 && (
            <Box>
              <Box className="lg:flex  lg:flex-row flex flex-col" gap={2} mb={2}>
                <TextField
                  name="monthlyMembershipFee"
                  label="Monthly Membership Fee (Paid Annually)"
                  value={monthlyMembershipFee}
                  onChange={handlePaymentChange}
                  InputProps={{
                    readOnly: true, 
                  }}
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
                <TextField
                  name="totalAmount"
                  label="Total Amount to be Paid"
                  value={totalAmount}
                  onChange={handlePaymentChange}
                  InputProps={{
                    readOnly: true, // Make the input field read-only
                  }}
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
              </Box>
              <Box className="lg:flex  lg:flex-row flex flex-col" gap={2} mb={2}>
                <FormControl fullWidth margin="normal" sx={{ 
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
                }}>
                  <InputLabel>Renewal Option</InputLabel>
                  <Select
                    label="Renewal Option"
                    value={renewalOption}
                    onChange={handleSelectChange}
                    inputProps={{
                      readOnly: true,
                    }}
                  >
                    <MenuItem value="autoRenew">Auto Renew On</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth margin="normal" sx={{ 
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
                }}>
                  <InputLabel>Payment Method</InputLabel>
                  <Select
                    label="Payment Method"
                    value={paymentMethod}
                    onChange={handleSelectChange}
                    inputProps={{
                      readOnly: true,
                    }}
                  >
                    <MenuItem value="debitCard">Pay with Debit Card</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box className="lg:flex  lg:flex-row flex flex-col" gap={2} mb={2}>
                <TextField
                  name="referralCode"
                  label="Enter Referral Code (optional)"
                  value={referralCode}
                  onChange={handlePaymentChange}
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
                <TextField
                  name="referralName"
                  label="Name of Referral"
                  value={referralName}
                  onChange={handlePaymentChange}
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
              </Box>
              <div>
                <Image className="mx-auto" width={181} height={52.75} src={SecuredByPaystack} alt="SecuredByPaystack" />
              </div>
            </Box>
         )}
          
        <Box mt={2} className="lg:flex lg:justify-between flex  justify-center items-center pt-[20px] lg:p-0">
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{
              mr: 1,
              backgroundColor: '#DBA73B',
              '&:hover': {
                backgroundColor: '#DBA73B',
                opacity: 0.8,
              },
              opacity: activeStep === 0 ? 0.5 : 1,
              pointerEvents: activeStep === 0 ? 'none' : 'auto',
              color: '#fff',
              width: '150px',
              minWidth: '150px',
              padding: '20px 10px', // Adjust padding to fit text inside the width
              fontSize: '0.75rem', // Adjust font size if needed
            }}
          >
            Back
          </Button>
          <Button
            disabled={!isStepValid()}
            onClick={handleNext}
            sx={{
              backgroundColor: isStepValid() ? '#DBA73B' : '#DBA73B',
              opacity: isStepValid() ? 1 : 0.5,
              '&:hover': {
                backgroundColor: isStepValid() ? '#DBA73B' : '#DBA73B',
                opacity: isStepValid() ? 0.9 : 0.5,
              },
              color: '#fff',
              width: '150px',
              minWidth: '150px',
              padding: '20px 10px', // Adjust padding to fit text inside the width
              fontSize: '0.75rem', // Adjust font size if needed
            }}
          >
            {activeStep === steps.length - 1 ? 'Subscribe' : 'Next'}
          </Button>

         
        </Box>




      </div>
    </>
  );
};

export default HealthyEldersForm;
