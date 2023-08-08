import React from 'react'
import { CardDetail, SectionTitle } from '../subcomponents'
import { school } from '../constants/data'

const School = () => {
  return (
    <div className=' pt-10'>
        <SectionTitle title={"學習經歷"} />
        {
          school?.map((item, i) => (
            <CardDetail key={i} data={item} />
          ))
        }
    </div>
  )
}

export default School