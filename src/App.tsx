import React, { useState, useEffect } from 'react'
import { Typography } from '@material-ui/core'
import moment from 'moment'
import Sign from './component/Sign'
import { ThemeProvider } from '@material-ui/styles'
import myTheme from './assets/styles/Theme'
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'

import './App.css'

Amplify.configure(awsconfig)

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
      <AmplifySignOut />
      <Typography variant={'h1'}>Holy Daily</Typography>
      <Typography variant={'h2'}>
        {moment().format('dddd, MMMM Do YYYY')}
      </Typography>
      <Typography variant={'h3'}>{time}</Typography>
      <Sign />
    </ThemeProvider>
  )
}

export default withAuthenticator(App) 
