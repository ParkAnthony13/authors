import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {navigate,Link} from '@reach/router'


const EditAuthor = props => {
    // storing input name value
    const[formState,setFormState]=useState({
        name:""
    })
    // storing validation errors from post/create
    const[valErrors,setValErrors]=useState("")

    // tracking input changes and setting input to formState
    const handleChange = e => {
        setFormState({
            ...formState,
            [e.target.name]:e.target.value
        })
    }

    // Cancel button to go back to home route
    const handleClick = e => {
        e.preventDefault()
        navigate('/')
    }
    // submit button for sending formState to post/create request
    const handleSubmit = e => {
        e.preventDefault()
        console.log("submit axios")
        axios.put(`http://localhost:8000/api/author/${props.id}`,{...formState})
            .then(res=> {
                console.log(res)
                setValErrors("")
                navigate('/')
            })
            .catch(err => {
                console.log(err.response.data)
                const{errors} = err.response.data
                setValErrors(errors)
                console.log(valErrors)
            })
    }
    // getting data for single author
    useEffect( () => {
        console.log("SP-start")
        axios.get(`http://localhost:8000/api/author/${props.id}`)
            .then(res => {
                // console.log(res.data)
                setFormState(res.data.author)
            })
            .catch(err => console.log(`Encountered Error: ${err}`))
    },[])

    return(
        <div>
            <Link to="/">Home</Link>
            <h3 style={{color:"rebeccapurple"}}>Edit this author</h3>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"150px",width:"300px",outline:"2px solid black"}}>
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input name="name" type="text" onChange={handleChange} value={formState.name}/>
                    {valErrors.name ? <p style={{color:"red"}}>{valErrors.name.message}</p> : null}
                    <div>
                        <button onClick={handleClick}>Cancel</button>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditAuthor