import React, { useState } from 'react'
import { skills } from '../constants/data'
import { Collapse, SectionTitle, ToggleSwitchBtn } from '../subcomponents'

const Skills = () => {
  const [isAllOpen, setIsAllOpen] = useState(true)

  return (
    <div className='pt-10'>
        <SectionTitle title={"專業技能"}/>
        <ToggleSwitchBtn isAllOpen={isAllOpen} setIsAllOpen={() => setIsAllOpen(!isAllOpen)} />
        <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {
            skills?.map((item) => (
              <Collapse key={item.title} title={item.title} value={item.value} isAllOpen={isAllOpen} />
            ))
          }
        </div>
    </div>
  )
}

export default Skills