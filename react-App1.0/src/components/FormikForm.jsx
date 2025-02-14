import {useFormik} from 'formik';
import { FormSchema } from './FormSchema';

function FormikForm() {
    
    const formInitailValues = {
        name: "",
        email: "",
        age: "",
        password: "",
        cpassword: ""
    }

    // const formik = useFormik({
    //     initialValues: formInitailValues ,

    //     onSubmit: (values) => {
    //         console.log(values);
    //         console.log(values.name);
    //         console.log(values.email);
    //     }
    // });


    const {handleChange, handleSubmit, handleBlur , values, touched, errors} = useFormik({
        initialValues: formInitailValues ,
        validationSchema: FormSchema,
        onSubmit: (values, action) => {
            console.log(values);
            console.log(values.name);
            console.log(values.email);
            console.log(values.age);
            console.log(values.password);
            console.log(values.cpassword);
            action.resetForm();
        }
    });

    return (
    <div>FormikForm

        {/* <form onSubmit={formik.handleSubmit}>
            <label htmlFor="">Enter Name: </label>
            <input type="text" name="name"  onChange={formik.handleChange}   value={formik.values.name} />
            <br /><br />
            <label htmlFor="">Enter Email: </label>
            <input type="text" name="email" onChange={formik.handleChange}   value={formik.values.email} />
            <br /><br />
            <input type="submit" value="submit" />
            <br /><br />
        </form> */}


        <form onSubmit={handleSubmit}>
            <label htmlFor="">Enter Name: </label>
            <input type="text" name="name"  onChange={handleChange} onBlur={handleBlur}   value={values.name}  />
            <br />
            {/* <span style={{color:'red'}} >{errors.name}</span> */}
            {errors.name && touched.name ? <span style={{color:'red'}} >{errors.name}</span> : null}
            <br />
            <label htmlFor="">Enter Email: </label>
            <input type="text" name="email" onChange={handleChange} onBlur={handleBlur}  value={values.email} />
            <br />
            {/* <span style={{color:'red'}} >{errors.email}</span> */}
            {errors.email && touched.email ? <span style={{color:'red'}} >{errors.email}</span> : null}
            <br />
            <label htmlFor="">Enter Age: </label>
            <input type="text" name="age" onChange={handleChange} onBlur={handleBlur}  value={values.age} />
            <br />
            {errors.age && touched.age ? <span style={{color:'red'}} >{errors.age}</span> : null}
            <br />
            <label htmlFor="">Enter Password: </label>
            <input type="password" name="password" onChange={handleChange} onBlur={handleBlur}  value={values.password} />
            <br />
            {errors.password && touched.password ? <span style={{color:'red'}} >{errors.password}</span> : null}
            <br />
            <label htmlFor="">Enter Confirm Password: </label>
            <input type="password" name="cpassword" onChange={handleChange} onBlur={handleBlur}  value={values.cpassword} />
            <br />
            {errors.cpassword && touched.cpassword ? <span style={{color:'red'}} >{errors.cpassword}</span> : null}
            <br />
            <input type="submit" value="submit" />
            <br /><br />
        </form>
    </div>
    )
}

export default FormikForm