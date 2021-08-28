import React, { useState, useEffect } from 'react'
import { Typography } from '@material-ui/core'
import moment from 'moment'
import Sign from './component/Sign'
import { ThemeProvider } from '@material-ui/styles'
import myTheme from './assets/styles/Theme'

import './App.css'

function App() {
  const [time, setTime] = React.useState(moment().format('HH:mm:ss'))
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().format('HH:mm:ss'))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <ThemeProvider theme={myTheme}>
      <Typography variant={'h1'}>Holy Daily</Typography>
      <Typography variant={'h2'}>
        {moment().format('dddd, MMMM Do YYYY')}
      </Typography>
      <Typography variant={'h3'}>{time}</Typography>
      <Sign />
    </ThemeProvider>
  )
}

export default App
