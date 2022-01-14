
import { Formik, Form } from "formik"
import * as Yup from 'yup'
import Container from '../Components/Container'
import Input from '../Components/Input'
import Button from '../Components/Button'
import Section from "./Section"
import '../styles/login.css'

const SignupSchema = Yup.object().shape({
    fName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    lName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('required')
  });

export default function Login(){
    
    return(
        <Container className="containerLogin">
            <Section>
            <Formik
            initialValues={{
                email: '',
                fName: '',
                lName: '',
                password: ''
            }}
            validationSchema={SignupSchema}
           >
                <Form>
                <Input name ='fName' label='First Name' />
                <Input name ='lName' label='Last Name' />
                <Input name ='email' label='Email' />
                <Input type='password' name ='password' label='Password' />
                <Button type='submit'>Sign in!</Button>
                </Form>
            </Formik>
            </Section>
        </Container>
    )
}


