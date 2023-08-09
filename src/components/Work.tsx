import React from 'react'
import { CardDetail, SectionTitle } from '../subcomponents'
import { work } from '../constants/data'

const Work = () => {
  return (
    <div id='experience' className=' pt-10'>
        <SectionTitle title={"工作經歷"} />
        {
          work?.map((item, i) => (
            <CardDetail key={i} data={item} />
          ))
        }
    </div>
  )
}

export default Work