import React from 'react'
import TeamCard from '../components/TeamCard'

const Team = () => {
  return (
    <div className='bg-black h-[100vh] md:h-[105vh] p-[2.3rem] w-[99vw] '>
        <div className='bg-[#E6E4D5] h-[95vh] rounded-[2rem] flex p-[3rem] '>
            <TeamCard/>
        </div>
    </div>
  )
}

export default Team