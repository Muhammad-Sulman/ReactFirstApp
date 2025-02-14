import * as Yup from 'yup';

export const FormSchema = Yup.object({
    // name: Yup.string().min(3).max(25).required('Name is Required'),
    // email: Yup.string().email().required('Emial is Required')

    // // custom error messages
    // name: Yup.string().min(3, 'Too Short').max(25, 'Too Long').required('Name is Required'),
    // email: Yup.string().email('invalid Email').required('Emial is Required'),
    // age: Yup.number().min(15).max(35).required('Age is required'),
   
    name: Yup.string()
        .min(3, 'Too Short')
        .max(25, 'Too Long')
        .required('Name is Required'),

    email: Yup.string()
        .email('Invalid Email')
        .required('Email is Required'),

    age: Yup.number()
        .min(15, 'Age must be at least 15')
        .max(35, 'Age must be at most 35')
        .required('Age is required'),

    password: Yup.string()
        .required('Password is required')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            'Password must be at least 8 characters, include one uppercase, one lowercase, one number, and one special character'
        ),

        cpassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password')], 'Passwords must match')
})