import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {navigate,Link} from '@reach/router'


const Home = props => {
    const[allAuthors,setAllAuthors]=useState([])
    const[toggle,setToggle]=useState(true)

    const clickEdit = (e,id) => {
        e.preventDefault()
        navigate(`/edit/${id}`)
    }

    const handleDelete = (e,id) => {
        e.preventDefault()
        axios.delete(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                setToggle(!toggle)
            })
    }

    useEffect( () => {
        axios.get("http://localhost:8000/api/author")
            .then(res => {
                console.log(res.data)
                setAllAuthors(res.data.allAuthors)
                console.log(allAuthors)
            })
            .catch(err => {
                console.log(err)
            })
    },[toggle])

    return(
        <div>
            <Link to="/new">Add an author</Link>
            <h3 style={{color:"rebeccapurple"}}>We have quotes by:</h3>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",width:"300px",outline:"2px solid black"}}>
                <table style={{border:"1px solid black"}}>
                    <thead>
                        <tr>
                            <th style={{border:"1px solid black"}}>Author</th>
                            <th colspan="2" style={{border:"1px solid black"}}>Actions Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allAuthors.map( (auth, idx) => {
                            return(
                                <tr key={idx}>
                                    <td style={{border:"1px solid black"}}>{auth.name}</td>
                                    <td style={{display:"flex",justifyContent:"space-evenly",border:"1px solid black"}}><button onClick={(e,id) => clickEdit(e,auth._id)}>Edit</button><button onClick={(e,id) => handleDelete(e,auth._id)}>Delete</button></td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home