import React, { useEffect, useState } from 'react'
import axios from "axios"

const Profile = (props) => {
  const [countries, setCountries] = useState([])
  const [status, setStatus] = useState(false)
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all")
      .then(res => {
        setCountries(res.data)
        setStatus(true)
      })
      .catch(error => {
          setStatus(true)
        })
  },[])

  if (status) {
    return (
      <ul>
        {countries.map((country, index) =>
          <li key={index}> {country.name} </li>
        )}
      </ul>
    )
  } else {
    return (
      <h1>残りのサービス値を読み込んでいます ...</h1>
    )
  }
}

export default Profile
