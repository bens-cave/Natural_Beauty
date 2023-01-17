import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Import User Token
import { getTokenFromLocalStorage } from './components/helpers/auth'

// Import Bootstrap elements
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import { useNavigate, Link } from 'react-router-dom'

const ProfilePage = () => {

  // Get logged in user object
  const [user, setUser] = useState(null)

  const [errors, setErrors] = useState(false)

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get('/api/profile', {
          headers: {
            Authorization: `Bearer ${getTokenFromLocalStorage()}`,
          },
        })
        console.log('response ->', data)
        setUser(data)
      } catch (error) {
        console.log(error)
        setErrors(true)
      }
    }
    getUser()
    console.log('useEffect running ->', user)
  },[])

  console.log('3 user ->', user)

  return (
    <Container className='mt-5 shadow-sm p-3 border rounded profile-container'>
      <Row>
        <Col lg="9" md="8" sm="6" className="p-2 border-end">
          <h3 className="p-2">Liked Places</h3>
          <hr />
          <Row lg="2" md="2" sm="2">
            {user ?
              <>
                {user.favourites.parkId !== '' ?
                <>
                  {user.favourites.map((item) => {
                    const { parkId, image, name } = item
                    return (
                      <Col key={parkId} lg="4" md="6" sm="12">
                        <Link to={`/parks/${parkId}`}>
                          <Card className="shadow-sm m-2">
                            <Card.Img src={image} />
                            <Card.Body>
                              <span className="h6">{name}</span>
                            </Card.Body>
                          </Card>
                        </Link>
                      </Col>
                    )
                  })}
                </>
                : <p>You don't have any favourites yet</p>}
              </>
              :
              <>
                {errors ? <p>Please register to get a profile page</p> : <p>Not available</p>}
              </>
            }
          </Row>
        </Col>
        <Col lg="3" md="4" sm="6" className="p-2">
          {user ?
            <>
              <Row lg="1" md="1" sm="1">
                <Col>
                  <Card className="shadow-sm">
                    {/* <Card.Img src={'/'} alt="Profile Pic" /> */}
                    <Card.Body>
                      <h3>User Info</h3>
                      <hr />
                      <p><strong>{user.username}</strong> / {user.email}</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              {/* <Row className="" lg="1" md="1" sm="1">
                <Col>
                  <Card className="shadow-sm mt-2">
                    
                    <Card.Body>
                      <h3>Your reviews:</h3>
                      <hr />
                      <p>Reviews go here:</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="" lg="1" md="1" sm="1">
                {user.createdReviews.map(review => {
                  return (
                    <Col key={review._id}>
                      <Card className="shadow-sm mt-2">
                        
                        <Card.Body>
                          <strong>{review.name}</strong>
                          <hr />
                          <p>{review.reviews.text}</p>
                        </Card.Body>
                      </Card>
                    </Col>
                  )
                })}
              </Row> */}
            </>
            :
            <>
              {errors ? <p>Not available</p> : <p>Loading...</p>}
            </>
          }

        </Col>
      </Row>
    </Container >
  )
}

export default ProfilePage