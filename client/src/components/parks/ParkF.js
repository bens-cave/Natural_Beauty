import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const NationalPark = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const [park, setPark] = useState()
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    console.log('HELLO??')
    const getPark = async () => {
      try {
        const { data } = await axios.get(`/api/parks/${id}`)
        console.log(data.name)
        console.log('Park data from get -> ', data)
        setPark(data)
        // console.log('park data->', park)
      } catch (error) {
        console.log('🧭 There was a problem finding your park ->', error)
        setErrors(true)
      }
    }
    getPark()


  }, [id])


  // console.log('ON FIRST RENDER ->', park.name)

  return (
    <>
      <h1>Where is my lovely national park??</h1>
      {park ?
        <Container className='np-container'>
          <h1>{park.name}</h1>
          <img src={park.parkImg[0]} alt={park.name} className='np-img' />
        </Container> 
        :
        <p>I hate this</p>
      }
    </>
  )

}

export default NationalPark