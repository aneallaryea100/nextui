export const login_validate = (values) =>{
    const errors = {};

    if (!values.userName) {
        errors.userName = 'Required';
    }

      //validate password
      if (!values.password) {
        errors.password = 'Required';
      }else if(values.password.length < 6 || values.password.length > 20) {
        errors.password = "Must be greater than 6 and less than 20 characters"
      }else if (values.password.includes(" ")) {
        errors.password = "Invalid Password";
      }

      return errors;
};

export function registerValidate(values){
    const errors = {};

    if(!values.userName){
        errors.userName = "Required";
    }else if(values.userName.includes(" ")) {
        errors.userName = "Invalid Username"
    }

    if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.password) {
        errors.password = 'Required';
      }else if(values.password.length < 6 || values.password.length > 20) {
        errors.password = "Must be greater than 6 and less than 20 characters"
      }else if (values.password.includes(" ")) {
        errors.password = "Invalid Password";
      }

      if(!values.cpassword){
        errors.cpassword="Required"
      }else if(values.password !== values.cpassword){
        errors.cpassword = "Password Not Match!!!!"
      } else if (values.cpassword.includes(" ")){
        errors.cpassword="Invalid Confirm Password"
      }

      return errors;
};