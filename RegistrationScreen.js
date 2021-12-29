import React from "react";
import { useFormik } from "formik";
function RegistrationScreen() {
    const initialValues = { //value
        fname: "",
        lname: "",
        email: ""
    }
    const onSubmit = value => {
        console.log(value);

    }
    const validate = Values => {
        const errors = {};
        if (!Values.fname) {
            errors.fname = "First Name Required";
        }
        if (!Values.lname) {
            errors.lname = "Last Name Required";
        }
        if (!Values.email) {
            errors.email = "Email is Required";
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Values.email)) {
            errors.email = "Invalid Email Format";
        }
        return errors;
    }
    const formik = useFormik({
        initialValues,  //key
        onSubmit,
        validate
    })
    console.log(formik.touched);

    return (
        <React.Fragment>

            <div className="mainform">
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-control">
                        <label>First Name</label>
                        <input type="text"
                            name="fname"
                            id="fname"
                            onChange={formik.handleChange}
                            value={formik.values.fname}
                            onBlur={formik.handleBlur} />
                        {formik.touched.fname && formik.errors.fname ? <div className="error">{formik.errors.fname}</div> : null}
                    </div>
                    <div className="form-control">
                        <label>Last Name</label>
                        <input type="text"
                            name="lname"
                            id="lname"
                            onChange={formik.handleChange}
                            value={formik.values.lname}
                            onBlur={formik.handleBlur} />
                        {formik.touched.lname && formik.errors.lname ? <div className="error">{formik.errors.lname}</div> : null}
                    </div>
                    <div className="form-control">
                        <label>Email</label>
                        <input type="text"
                            name="email"
                            id="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            onBlur={formik.handleBlur} />
                        {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                    </div>
                    <br />
                    <div>
                        <input type="submit"></input>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}
export default RegistrationScreen;