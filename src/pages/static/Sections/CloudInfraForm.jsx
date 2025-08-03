import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useGlobalContext } from '../../../global/context';
import toast from 'react-hot-toast';

const CloudInfraForm = ({ ref }) => {
    const {api} = useGlobalContext();
    const formik = useFormik({
        initialValues: {
            fullName: '',
            companyName: '',
            email: '',
            phone: '',
            // turnover: '',
            message: ''
        },
        validationSchema: Yup.object().shape({
            fullName: Yup.string()
                .required('Full name is required')
                .matches(/^[a-zA-Z0-9\s]+$/, 'Invalid characters in name'),
            companyName: Yup.string()
                .required('Business name is required')
                .matches(/^[a-zA-Z0-9\s]+$/, 'Invalid characters in business name'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            phone: Yup.string()
                .required('Phone number is required')
                .matches(/^\d{10}$/, 'Invalid phone number format'),
            // turnover: Yup.number()
            //     .typeError('Annual turnover must be a number')
            //     .required('Annual turnover is required')
            //     .positive('Annual turnover must be positive'),
            message: Yup.string()
                .required('Test box details are required')
                .matches(/^[\w\.\-\s]+$/, 'Invalid characters in test box details'),
        }),
        onSubmit: async values => {
            // console.log(JSON.stringify(values, null, 2));
            values = {...values, service: "Cloud & Infra Security"};
            try {
              const res = await api.post('/api/enquiry', values);
                if (res?.status === 201) {
                    console.log(res?.message);
                    toast.success(res?.message || 'Your request has been successfully submitted!');
                    formik.resetForm();
                }
            } catch (error) {
                console.log('Error: ', error);
                if (error.code === "ERR_NETWORK") {
                    toast.error("Too many requests, try again later");
                } else {
                    toast.error(error?.message);
                }
            }
        }
    });

    return (
        <section id='form' className="contact-section" style={{ overflowX: "hidden" }} ref={ref}>
            <div className="container">
                <div className="row">
                    {/* Form Column */}
                    <div className="form-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            {/* Contact Form */}
                            <div className="contact-form fadeInLeft">
                                <div className="sec-title">
                                    <span className="sub-title">Register</span>
                                    <h2>Get Free Cloud & Infra Security Consultation</h2>
                                </div>

                                {/* Contact Form */}
                                <form id="contact-form" onSubmit={formik.handleSubmit}>
                                    <div className="row">
                                        <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                            <input type="text" id="fullName" name="fullName" placeholder="Full Name" {...formik.getFieldProps('fullName')} />
                                            {formik.touched.fullName && formik.errors.fullName ? <div className="text-danger">{formik.errors.fullName}</div> : null}
                                        </div>
                                        <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                            <input type="text" id="companyName" name="companyName" placeholder="Business Name" {...formik.getFieldProps('companyName')} />
                                            {formik.touched.companyName && formik.errors.companyName ? <div className="text-danger">{formik.errors.companyName}</div> : null}
                                        </div>

                                        <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                            <input type="email" id="email" name="email" placeholder="Email Address" {...formik.getFieldProps('email')} />
                                            {formik.touched.email && formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}
                                        </div>

                                        <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                            <input type="text" name="phone" placeholder="Phone" {...formik.getFieldProps('phone')} />
                                            {formik.touched.phone && formik.errors.phone ? <div className="text-danger">{formik.errors.phone}</div> : null}
                                        </div>

                                        {/* <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                            <input type="text" name="turnover" placeholder="Annual Turnover" {...formik.getFieldProps('turnover')} />
                                            {formik.touched.turnover && formik.errors.turnover ? <div className="text-danger">{formik.errors.turnover}</div> : null}
                                        </div> */}

                                     

                                        <div className="form-group col-lg-12">
                                            <textarea id="message" name="message" placeholder="Details of security needs" {...formik.getFieldProps('message')} />
                                            {formik.touched.message && formik.errors.message ? <div className="text-danger">{formik.errors.message}</div> : null}
                                        </div>

                                        <div className="form-group col-lg-12">
                                            <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">Submit Message</span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* End Contact Form */}
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="image-column col-lg-6 col-md-12" >
                        <div className="inner-column">
                            <figure className="image"><img src="images/resource/contact.jpg" alt="" /></figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CloudInfraForm;
