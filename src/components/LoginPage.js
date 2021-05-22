import React from 'react';
import { Header } from 'semantic-ui-react';
import {ErrorMessage, Form, Formik, Field} from "formik";

import Layout from './Layout.js';
import * as Yup from "yup";

const LoginPage = () => {
    return (
        <Layout>
            <Header as="h2">Login page</Header>
            <Formik
                initialValues={{login: '', password: ''}}
                validationSchema={Yup.object({
                    login: Yup.string()
                        .min(1, "Must be at least 1 character")
                        .max(40, "Must be 40 characters or less")
                        .required("Required"),
                    password: Yup.string()
                        .min(1, "Must be at least 1 character")
                        .max(40, "Must be 40 characters or less")
                        .required("Required"),
                })}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400) ;
                }}
                >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="login"/>
                        <ErrorMessage name="login" component="div"/>
                        <Field type="password" name="password"/>
                        <ErrorMessage name="password" component="div"/>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </Layout>
    );
};

export default LoginPage;
