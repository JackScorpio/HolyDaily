import React from 'react'
import Grid from '@material-ui/core/Grid'
import { TextField, Typography } from '@material-ui/core'
import { StyledSignInPaperContainer } from '../assets/styles/StyledPaperContainer'

function Sign() {
  return (
    <StyledSignInPaperContainer>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6">Sign</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField id="standard-basic" label="Standard" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField id="filled-basic" label="Filled" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField id="outlined-basic" label="Outlined" fullWidth />
        </Grid>
      </Grid>
    </StyledSignInPaperContainer>
  )
}

export default Sign
