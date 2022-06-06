import React from 'react'
import styled from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { Navbar } from 'common'

export const AppContent = (): JSX.Element => {
  return (
    <Container>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`
