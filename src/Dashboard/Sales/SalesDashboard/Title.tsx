import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

interface TitleProps {
  children?: React.ReactNode
}

const Title: React.FC<TitleProps> = (props: TitleProps) => {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  )
}

Title.propTypes = {
  children: PropTypes.node,
}

export default Title
