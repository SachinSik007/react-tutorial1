// import React from 'react'

// const Card = (props) => {
//   return (
//     <div>
//       <div className='card'>
//         <img src={props.img} alt=''/>
//         <h1>{props.user} ({props.age})</h1>
//         <p>git remote add origin https://github.com/SachinSik007/react-tutorial1.git</p>
//         <button>Submit</button>
//       </div>
//     </div>
//   )
// }

// export default Card

import React from 'react'
import { Bookmark } from 'lucide-react'


const Card = (props) => {
  return (
    <div>
      <div className='card'>
        <div>
          <div className='top'>
            <img src={props.logo} alt='' />
            <button>Save <Bookmark size={12} /></button>
          </div>
          <div className='center'>
            <h3>{props.company} <span>{props.date}</span></h3>
            <h2>{props.post}</h2>
            <div className='tag'>
              <h4>{props.tagone}</h4>
              <h4>{props.tagtwo}</h4>
            </div>
          </div>
        </div>
        <div className='bottom'>
          <div>
            <h3>{props.paid}/hour</h3>
            <p>{props.locations}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card