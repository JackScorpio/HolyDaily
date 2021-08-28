import { createTheme, responsiveFontSizes } from '@material-ui/core'

const myTheme = createTheme({
  typography: {
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500
    }
  }
})

export default responsiveFontSizes(myTheme)
