import { Field, Form , Formik} from "formik"
import { useState } from "react";


function FormikForm2() {
    const [formData, setFormData] =  useState({});
    return (
        <div>
            <Formik 
            initialValues={{name:"", age:"", password:"", gender:"", hobbies:"", country:"", comment:""}} 
            onSubmit={(values) => {
                console.log(values);
                setFormData(values);
            }}
            >
                <Form>
                    <label htmlFor="">Enter Name: &nbsp;</label>
                    <Field  type="text" name="name" />
                    <br /><br />
                    <label htmlFor="">Enter Age: &nbsp;</label>
                    <Field  type="number" name="age" />
                    <br /><br />
                    <label htmlFor="">Enter Password: &nbsp;</label>
                    <Field  type="password" name="password" />
                    <br /><br />
                    <label htmlFor="">Gender: &nbsp;</label>
                    <label htmlFor="">Male &nbsp;</label>
                    <Field  type="radio" name="gender" value='Male' />&nbsp;&nbsp;
                    <label htmlFor="">Female &nbsp;</label>
                    <Field  type="radio" name="gender" value='Female' />
                    <br /><br />
                    <label htmlFor="">Hobbies: &nbsp;</label>
                    <label htmlFor="">Writing &nbsp;</label>
                    <Field  type="checkbox" name="hobbies" value="Writing" />&nbsp;&nbsp;
                    <label htmlFor="">Movies &nbsp;</label>
                    <Field  type="checkbox" name="hobbies" value="Movies" />&nbsp;&nbsp;
                    <label htmlFor="">Sleeping &nbsp;</label>
                    <Field  type="checkbox" name="hobbies" value="Sleeping" />
                    <br /><br />
                    <label htmlFor="">Select Country: &nbsp;</label>
                    <Field name="country" as="select" >
                        <option value="Canada">Canada</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                    </Field>
                    <br /><br />
                    <label htmlFor="">Comment: &nbsp;</label>
                    <Field  as="textarea" name="comment" />
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