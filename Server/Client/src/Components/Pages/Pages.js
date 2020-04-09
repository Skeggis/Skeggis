import React from 'react'
import Content from '../../content'
import Hero from '../Hero/Hero'
import Project from '../Project/Project'
import Employees from '../Employees/Employees'
import Page from '../Page/Page'
import Contact from '../Contact/Contact'

export default function Pages(props){
  const {
    fullpageApi,
    state,
    index
  } = props

  console.log(state)

  let pages = []
  Content.forEach((data, i)=> {
    console.log(data.type)
    if(data.type==='hero'){
      pages.push((
        <Page key={data.id}>
          <Hero data={data} currentIndex={index} myIndex={i}/>
        </Page>
      ))
    } else if (data.type === 'project'){
      console.log('her')
      pages.push((
        <Page key={data.id}>
          <Project data={data} fullpageApi={fullpageApi} currentIndex={index} myIndex={i}/>
        </Page>
      ))
    } else if (data.type === 'employees'){
      pages.push((
        <Page key={data.id}>
          <Employees key={data.id} data={data}/>
        </Page>
      ))
    } else if (data.type === 'contact'){
      pages.push((
        <Page key={data.id}>
          <Contact data={data} currentIndex={index} myIndex={i}/>
        </Page>
      ))
    }
  })

  return (
      pages
  )
}