import React from 'react'
import './UserProfile.css';

export const UserProfiles = ({profile}) => {
  return (
    <div key={profile.id} className="card">
        <h1>{profile.name}</h1>
        <h3><strong>Company: </strong> {profile.company.name}</h3>
        <p>{profile.company.bs}</p>

       <div className="general-info">
        <h2>General Info</h2>
          <div className="dob">
            <h3>User Name:</h3>
            <p>{profile.username}</p>
          </div>
          <div className="email">
            <h3>E-Mail:</h3>
            <p>{profile.email}</p>
          </div>
          <div className="phone">
              <h3>Phone:</h3>
              <p>{profile.phone}</p>
          </div>
          <div className="address">
            <h3>Address:</h3>
            <p>{profile.address.city}, {profile.address.street}</p>
          </div>
          <div className="web">
              <h3>Web:</h3>
              <p>{profile.website}</p>
          </div>
          
       </div>
     </div>
  )
}
