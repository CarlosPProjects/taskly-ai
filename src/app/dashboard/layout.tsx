import Container from '@/components/Container'
import Header from '@/components/panel/layout/header'
import React, { FC } from 'react'

interface Props{
  children: React.ReactNode
}

const DashboardLayout:FC<Props> = ({children}) => {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      <Container className='flex flex-1'>
        {children}
      </Container>
    </section>
  )
}

export default DashboardLayout