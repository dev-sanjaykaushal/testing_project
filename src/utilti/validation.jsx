export const validateForm = (formData) => {
    const errors = {};
  
    // Validate name
    if (formData?.name?.trim() === '') {
      errors.name = 'Name is required *';
    }
    // Validate Last name
    if (formData?.lname?.trim() === '') {
      errors.lname = 'Last Name is required *';
    }
    // Validate  Company name
    if (formData?.Cname?.trim() === '') {
      errors.Cname = 'Company Name is required *';
    }
  
    // Validate email
    if(formData?.email?.trim() === ''){
      errors.email = "Email is required *"
    }else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email address *';
    }
    if(!isPasswordValid(formData.password)){
      errors.password = " Minimum 8 characters and first letter is capital *"
    }
    
    // Validate phone
    if (formData?.phone?.trim() === '') {
      errors.phone = 'Phone number is required *';
    }else if (!validatePhoneNumber(formData.phone)) {
      errors.phone = 'Invalid phone number. Please enter digits only. *';
    }else if (!validatePhoneNumbers(formData.phone)){
      errors.phone = "10-digit numeric phone number is required*"
    }  
    
   
    // Validate massage
    if(formData?.massage?.trim() === ''){
      errors.massage = "Please fill the box 🥰"
    }else if(formData?.massage?.length >=30){
      errors.massage = "You can not write greater than 30 words *"
    }  
    return errors;
  };
  

  
  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  export const validatePhoneNumbers = (phone) => {
    const phonePattern = /^\d{10}$/; // Simple example: 10-digit numeric phone number
    return phonePattern.test(phone);
  };
  
  export const validatePhoneNumber = (phone) => {
    const phonePattern = /^[0-9]+$/; // Regular expression to allow only numbers  
    return phonePattern.test(phone);
  };

  export function isPasswordValid(password) {    
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;  
    return passwordRegex.test(password);
  }