import { createStyles, withStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'
import { Paper } from '@material-ui/core'

export const StyledSignInPaperContainer = withStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      maxWidth: '50%'
    }
  })
)(Paper)
