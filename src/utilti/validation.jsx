export const validateForm = (formData) => {
    const errors = {};
    console.log(errors)  
    // Validate name
    if (formData.name.trim() === '') {
      errors.name = 'Name is required *';
    } 
    // Validate email
    if(formData.email.trim() === ''){
      errors.email = "Email is required *"
    }else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email address *';
    }    
    // Validate phone
    if (formData.phone.trim() === '') {
      errors.phone = 'Phone number is required *';
    }
    else if (!validatePhoneNumber(formData.phone)) {
      errors.phone = 'Invalid phone number. Please enter digits only*';
    }else if (!validatePhoneNumbers(formData.phone)){
      errors.phone = "10-digit numeric phone number is required*"
    }   
    // Validate massage
    if(formData.massage.trim() === ''){
      errors.massage = "Please fill the box 🥰"
    }else if(formData.massage.length >=30){
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

 


  // Register form validation 

  export const validateFormRegister = (RegformData) => {
    const errors = {};
     // Validate name
     if (RegformData?.name?.trim() === '') {
      errors.name = 'Name is required *';
    }
     // Validate Last name
     if (RegformData?.lname?.trim() === '') {
      errors.lname = 'Last Name is required *';
    }
    // Validate  Company name
    if (RegformData?.Cname?.trim() === '') {
      errors.Cname = 'Company Name is required *';
    }
      // Validate email
      if(RegformData?.email?.trim() === ''){
        errors.email = "Email is required *"
      }else if (!isValidEmail(RegformData.email)) {
        errors.email = 'Invalid email address *';
      } 
       // Validate password
       if(!validatePassword(RegformData.password)){
        errors.password = " Minimum 8 characters & at least 1 letter & 1number *"
      }
        // Validate phone
    if (RegformData.phone.trim() === '') {
      errors.phone = 'Phone number is required *';
    }
    else if (!validatePhoneNumber(RegformData.phone)) {
      errors.phone = 'Invalid phone number. Please enter digits only*';
    }else if (!validatePhoneNumbers(RegformData.phone)){
      errors.phone = "10-digit numeric phone number is required*"
    } 
      return errors ;
  }

  export const validatePassword = (password) => {
    // Password validation logic
    // Example: Password must be at least 8 characters long and contain at least one letter and one number
    const hasCharacter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    return password.length >= 8 && hasCharacter && hasNumber;
  };
