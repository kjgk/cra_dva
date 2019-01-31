import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'dva'

const Home = ({
                home,
              }) => {

  const {} = home

  return (
    <div>404 </div>
  )
}

Home.propTypes = {
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default connect(({home, loading}) => ({
  loading,
  home,
}))(Home)
