import { ErrorMessage, Field, Form , Formik} from "formik"
import { useState } from "react";
import * as yup from 'yup';

function FormikForm2() {
    const [formData, setFormData] =  useState({});
    const validations = yup.object({
        name: yup.string()
                .min(3, 'Too Short')
                .max(25, 'Too Long')
                .required('Name is Required'),
        age: yup.number()
                .min(15, 'Age must be at least 15')
                .max(35, 'Age must be at most 35')
                .required('Age is required'),
        password: yup.string()
                .required('Password is required')
                .matches(
                    // eslint-disable-next-line no-useless-escape
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                    'Password must be at least 8 characters, include one uppercase, one lowercase, one number, and one special character'
                ),
        gender: yup.string()
                .required(),
        hobbies: yup.array()
                .min(1),
        country: yup.string()
                .required(),
        comment: yup.string()
                .max(500)
                .required()
    })
    return (
        <div>
            <Formik 
            initialValues={{name:"", age:"", password:"", gender:"", hobbies:[], country:"", comment:""}} 
            validationSchema={validations}
            onSubmit={(values, action) => {
                console.log(values);
                setFormData(values);
                action.resetForm();
            }}
            >
                <Form>
                    <label htmlFor="">Enter Name: &nbsp;</label>
                    <Field  type="text" name="name" /><br />
                    <span style={{color:'red'}}><ErrorMessage name="name"  /></span>
                    <br /><br />
                    <label htmlFor="">Enter Age: &nbsp;</label>
                    <Field  type="number" name="age" /><br />
                    <span style={{color:'red'}}><ErrorMessage name="age"  /></span>
                    <br /><br />
                    <label htmlFor="">Enter Password: &nbsp;</label>
                    <Field  type="password" name="password" /><br />
                    <span style={{color:'red'}}><ErrorMessage name="password"  /></span>
                    <br /><br />
                    <label htmlFor="">Gender: &nbsp;</label>
                    <label htmlFor="">Male &nbsp;</label>
                    <Field  type="radio" name="gender" value='Male' />&nbsp;&nbsp;
                    <label htmlFor="">Female &nbsp;</label>
                    <Field  type="radio" name="gender" value='Female' /><br />
                    <span style={{color:'red'}}><ErrorMessage name="gender"  /></span>
                    <br /><br />
                    <label htmlFor="">Hobbies: &nbsp;</label>
                    <label htmlFor="">Writing &nbsp;</label>
                    <Field  type="checkbox" name="hobbies" value="Writing" />&nbsp;&nbsp;
                    <label htmlFor="">Movies &nbsp;</label>
                    <Field  type="checkbox" name="hobbies" value="Movies" />&nbsp;&nbsp;
                    <label htmlFor="">Sleeping &nbsp;</label>
                    <Field  type="checkbox" name="hobbies" value="Sleeping" /><br />
                    <span style={{color:'red'}}><ErrorMessage name="hobbies"  /></span>
                    <br /><br />
                    <label htmlFor="">Select Country: &nbsp;</label>
                    <Field name="country" as="select" >
                        <option value="">Select</option>
                        <option value="Canada">Canada</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                    </Field><br />
                    <span style={{color:'red'}}><ErrorMessage name="country"  /></span>
                    <br /><br />
                    <label htmlFor="">Comment: &nbsp;</label>
                    <Field  as="textarea" name="comment" /><br />
                    <span style={{color:'red'}}><ErrorMessage name="comment"  /></span>
                    <br /><br />
                    <button type="submit"  >Submit</button>
                </Form>
            </Formik>
            <br />
            <h3>{JSON.stringify(formData)}</h3>
            <h5>{formData.name} : {formData.age}</h5>
        </div>
    )
}

export default FormikForm2