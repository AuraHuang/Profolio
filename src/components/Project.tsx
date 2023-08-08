import React from 'react'
import { CardDetail, SectionTitle } from '../subcomponents'
import { projects } from '../constants/data'

const Project = () => {
  return (
    <div className=' pt-10'>
        <SectionTitle title={"相關作品"}/>
        {
          projects?.map((item,i) => (
            <CardDetail key={i} data={item} />
          ))
        }
    </div>
  )
}

export default Project