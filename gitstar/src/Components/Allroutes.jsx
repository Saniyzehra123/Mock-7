import React from 'react'
import All from './All'
import Css from './Css'
import Html from './Html'
import Javascript from './Javascript'

export default function Allroutes() {
  return (
    <div>
        <Routes>
            <Route path="/all" element={<All/>} />
            <Routes path="/css" element={<Css/>} />
            <Routes path="/html" element={<Html/>} />
            <Routes path="/javascript" element={<Javascript/>} />
     


        </Routes>
    </div>
  )
}
