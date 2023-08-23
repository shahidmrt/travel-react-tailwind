import React from 'react'
import borabora from '../assets/borabora.jpg'
import borabora2 from '../assets/borabora.jpg'
import maldives from '../assets/maldives.jpg'
import maldives2 from '../assets/maldives2.jpg'
import maldives3 from '../assets/maldives2.jpg'
import keywest from '../assets/keywest.jpg'
import SelectCard from './SelectCard'

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        
       <SelectCard pic={borabora} text={'Bora Bora'}/>
       <SelectCard pic={borabora2} text={'Malora'}/>
       <SelectCard pic={maldives} text={'Maldives'}/>
       <SelectCard pic={maldives2} text={'Australia'}/>
       <SelectCard pic={maldives3} text={'Saif-ul-malook'}/>
       <SelectCard pic={keywest} text={'maldives'}/>
    </div>
  )
}

export default Selects
