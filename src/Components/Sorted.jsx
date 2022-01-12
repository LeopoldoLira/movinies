import '../styles/movieContainers.css'
import { Formik, Form} from 'formik'
import Radio from './Radio'



const Sorted = () =>{
    return(
        <div className='sortedDiv'>
            <p>Sort by: </p>
            <Formik initialValues = {{ radio: '' }} onSubmit={values => console.log(values)} >
                <Form>
                    <Radio name='radio' value='sortByDate' label='Date'/>
                    <Radio name='radio' value='sortbyRating' label='Rating'/>
                    <button type='submit'>Sort</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Sorted