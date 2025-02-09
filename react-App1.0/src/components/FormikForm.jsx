import {useFormik} from 'formik';

function FormikForm() {
    
    const formInitailValues = {
        name: "",
        email: ""
    }

    // const formik = useFormik({
    //     initialValues: formInitailValues ,

    //     onSubmit: (values) => {
    //         console.log(values);
    //         console.log(values.name);
    //         console.log(values.email);
    //     }
    // });


    const {handleChange, handleSubmit, values} = useFormik({
        initialValues: formInitailValues ,

        onSubmit: (values) => {
            console.log(values);
            console.log(values.name);
            console.log(values.email);
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
            <input type="text" name="name"  onChange={handleChange}   value={values.name} />
            <br /><br />
            <label htmlFor="">Enter Email: </label>
            <input type="text" name="email" onChange={handleChange}   value={values.email} />
            <br /><br />
            <input type="submit" value="submit" />
            <br /><br />
        </form>
    </div>
    )
}

export default FormikForm