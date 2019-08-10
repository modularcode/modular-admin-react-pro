import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Disqus from 'disqus-react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

import { Theme } from '_theme'
import PageContainer from '../../_common/BasePageContainer'

const Discuss = () => {
  const classes = useStyles()

  const disqusShortname = 'modularcode-material-admin-react'
  const disqusConfig = {
    url: 'https://material-admin-react.modularcode.io',
    identifier: 'discussion',
    title: 'Material Admin React: Discussion',
  }

  return (
    <PageContainer>
      <h1>Let&apos;s discuss this!</h1>
      <Paper className={classes.content}>
        {/* <Typography variant="h4" component="h1">
          Discuss
        </Typography> */}
        <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </Paper>
    </PageContainer>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      padding: theme.spacing(3, 2),
    },
  }),
)

export default Discuss
