import { useRef, useEffect, useState } from 'react'

import mapboxgl from '!mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax
import axios from 'axios'

import { useNavigate, useParams } from 'react-router-dom'

const MainMap = () => {  
  
  const navigate = useNavigate()

  mapboxgl.accessToken = 'pk.eyJ1IjoibXJicmVhZCIsImEiOiJjbDM4bHV0Z3UwMTRmM2tueTY1Mm41NTZnIn0.92r4wGEn7bywx1dmpYCe-w'

  const [ parks, setParks ] = useState([])
  const [ errors, setErrors ] = useState(false)
  const mainMapContainer = useRef(null);
  const map = useRef(null);
  const [ mapObject, setMapObject ] = useState(null)
  // eslint-disable-next-line
  const [lng, setLng] = useState(-3.747145); //set these to coordinates of centre of park (will have to calculate)
  // eslint-disable-next-line
  const [lat, setLat] = useState(54.786114); //same
  // eslint-disable-next-line
  const [zoom, setZoom] = useState(5.4); // set to zoom level so that park fills map frame (will have to calculate)
  const { id } = useParams()
  const clickedPark = useRef(null)
  const clickedParkType = useRef(null)
  const targetPark = useRef([])
  const [ cp, setCP ] = useState(null)


  useEffect(() => {
    const getPark = async () => {
      try {
        const { data } = await axios.get(`https://nb-be.onrender.com/api/parks`)
        console.log('🏆 Got all Park data')
        setParks(data)
      } catch (error) {
        console.log('error getting Park data ->', error)
        setErrors(true)
      }
    }
    getPark()
  }, [])
  
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mainMapContainer.current,
      style: 'mapbox://styles/mrbread/cl3bpcmjx000a14muue539u5n',
      // center: [lng, lat],
      // zoom: zoom
    })
    setMapObject(map.current)
  },[])

// ! On load effects; load the national park boundaries
  useEffect(() => {
    if(!map.current) return
    map.current.on('load', () => {
      map.current.getCanvas().style.cursor = 'default'
      map.current.addSource('national-parks-geojson', {
        'type': 'geojson',
        'data': '../../assets/uk_national_parks_boundaries.json'
      })
  
      map.current.fitBounds([
        [5.155268, 59.138968],
        [-12.647684, 49.3]
      ])
      map.current.addLayer({
        'id': 'national-parks',
        'source': 'national-parks-geojson',
        'type': 'fill',
        'filter': ['all', ['==', 'type', 'national_park']],
        'layout': {},
        'paint': {
          'fill-color': '#70c32c', //#70c32c
          'fill-opacity': [
            'case',
            ['boolean', ['feature-state', 'hover'], false],
            0.5,
            1
          ]
        }
      })
      map.current.addLayer({
        'id': 'park-borders',
        'type': 'line',
        'source': 'national-parks-geojson',
        'filter': ['all', ['==', 'type', 'national_park']],
        'layout': {},
        'paint': {
            'line-color': '#70d32d', //#70d32d
            'line-width': 2
        }
      })
      map.current.addLayer({
        'id': 'area-beauty',
        'source': 'national-parks-geojson',
        'type': 'fill',
        'filter': ['all', ['==', 'type', 'area_of_outstanding_natural_beauty']],
        'layout': {},
        'paint': {
          'fill-color': '#3FBA4C', //#70c32c
          'fill-opacity': [
            'case',
            ['boolean', ['feature-state', 'hover'], false],
            0.5,
            1
          ]
        }
      })
      map.current.addLayer({
        'id': 'area-beauty-borders',
        'type': 'line',
        'source': 'national-parks-geojson',
        'filter': ['all', ['==', 'type', 'area_of_outstanding_natural_beauty']],
        'layout': {},
        'paint': {
            'line-color': '#246B2C', //#70d32d
            'line-width': 2
        }
      })
    })
  }, [parks])

  // ! On hover effects; change transparency of park fill colour
  useEffect(() => {
    if(!map.current) return
    let hoveredStateId = null
    map.current.on('mousemove', ['national-parks', 'area-beauty'], (e) => {
      map.current.style.cursor = 'pointer'
      if (e.features.length > 0) {
          if (hoveredStateId !== null) {
              map.current.setFeatureState(
                  { source: 'national-parks-geojson', id: hoveredStateId },
                  { hover: false }
              )
          }
          hoveredStateId = e.features[0].id;
          map.current.setFeatureState(
              { source: 'national-parks-geojson', id: hoveredStateId },
              { hover: true }
          )
      }
    })
    map.current.on('mouseleave', ['national-parks', 'area-beauty'], () => {
        if (hoveredStateId !== null) {
            map.current.setFeatureState(
                { source: 'national-parks-geojson', id: hoveredStateId },
                { hover: false }
            )
        }
        hoveredStateId = null
    })
  })

  // ! On click effects; zoom to park centered on screen and add attractions markers
  useEffect(() => {
    if(!map.current) return
    map.current.on('click', ['national-parks', 'area-beauty'], (e) => {
      clickedPark.current = e.features[0].properties.name
      clickedParkType.current = e.features[0].properties.type
      // console.log(clickedPark.current)
      targetPark.current = parks.filter((park) => park.name === clickedPark.current)// our park name must match the geojson park name
      console.log(targetPark)
      targetPark.current.map(park => {
        const { _id, name, location, attractions } = park
        map.current.flyTo({
          center: [park.location[1],park.location[0]],
          zoom: park.location[2] // add a zoom level to our data object i.e. park.location[2] or park.zoom
        })
        for (let i = 0; i < 3; i++){
        const marker = new mapboxgl.Marker({
            'color' : '#D6C423',
            'anchor' : 'bottom',
          })
          .setLngLat(
            [
              park.attractions[i].location[1],
              park.attractions[i].location[0]
            ]
            )
          const markerHeight = 50
          const markerRadius = 10
          const linearOffset = 25
          const popupOffsets = {
            'top':          [0, 0],
            'top-left':     [0, 0],
            'top-right':    [0, 0],
            'bottom':       [0, -markerHeight],
            'bottom-left':  [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
            'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
            'left':         [markerRadius, (markerHeight - markerRadius) * -1],
            'right':        [-markerRadius, (markerHeight - markerRadius) * -1]
          }
          marker.setPopup(new mapboxgl.Popup({
            'offset' : popupOffsets,
          })
          // <div><img id='marker-img' src=${park.attractions[i].localImg[Math.floor(Math.random() * (park.attractions[i].localImg.length))]}></div>
            // <div><img id='marker-img' src=${park.attractions[i].localImg[0]}></div>
            // <div><img id='marker-img' src=${park.attractions[i].localImg[1]}></div>
            // <div><img id='marker-img' src=${park.attractions[i].localImg[2]}></div>
          .setHTML(
            `<div className='popup'>
              <div id='popup-name'><strong>${park.attractions[i].name}</strong></div>
              <div>
                <img id='popup-img' src=${park.attractions[i].localImg[Math.floor(Math.random() * (park.attractions[i].localImg.length))]}>
              </div>
              <div id='popup-category'>🔎 <i> ${park.attractions[i].category}</i></div>
            </div>`
            ))
          .addTo(map.current)
        }
        return true
      })
      setCP(clickedPark.current)
    })
  },[clickedPark, parks, targetPark])

  const handleClick = () => {
    if(!map.current) return
    map.current.fitBounds([
      [5.155268, 59.138968],
      [-12.647684, 49.3]
    ])
  }

  const goToPark = () => {
    if(!map.current) return
    targetPark.current.map(park => {
      const { _id } = park
      return navigate(`/parks/${park._id}`)
    })
  }
  
  return (
    <>
      <div ref={mainMapContainer} className="main-map-container" />
      <div>
        <div className='clicked-park-name'>
          <>
          {clickedParkType.current === 'area_of_outstanding_natural_beauty' ?
            <div>{clickedPark.current}, Area of Outstanding Natural Beauty</div>
            :
            <div>{clickedPark.current}</div>
          }
          </>
        </div>
          <div className='main-map-btns-container'>
            { clickedPark.current ?
              <button onClick={handleClick}>Back to full view</button>
            : ''
            }
            {clickedParkType.current === 'national_park' ?
              <button onClick={goToPark}>Enter the park</button>
            : ''
            }
          </div>
      </div>
    </>
  )
}

export default MainMap