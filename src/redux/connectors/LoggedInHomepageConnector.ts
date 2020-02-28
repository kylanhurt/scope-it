import { connect } from 'react-redux'
import LoggedInHomepage from '../../views/homepage/loggedInHomepage'

const mapStateToProps = (state: any) => {
  return {
    edgeAccount: state.auth.edgeAccount
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInHomepage)