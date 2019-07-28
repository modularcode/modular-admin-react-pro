import React from 'react'

import Disqus from 'disqus-react'

import PageContainer from '../../_common/BasePageContainer'
import Typography from '@material-ui/core/Typography'

const Discuss = () => {
  const disqusShortname = 'modularcode-material-admin-react'
  const disqusConfig = {
    url: 'https://material-admin-react.modularcode.io',
    identifier: 'discussion',
    title: 'Material Admin React: Discussion',
  }

  return (
    <PageContainer>
      <Typography variant="h3" component="h1">
        Discuss
      </Typography>

      <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </PageContainer>
  )
}

export default Discuss
