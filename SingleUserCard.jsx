import { useRef } from 'react';
import './SingleUserCard.css'


const userCard = () => { 



  return (
    <div className='single-user-card'>
      <div className='top-container'>
        <div className='image-container'>
          <img src="" alt='' />
          <h3>Username</h3>
        </div>
        <div>
            <button onClick={updatePhoto}>Change Profile Picture</button>
        </div>
      </div>
        <div className='second-container'>
        <h2>location</h2>
        <h2>years old</h2>

        <button onClick={userCard}>Update User Info</button>
      </div>
      </div>
  )
}

export default SingleUserCard;