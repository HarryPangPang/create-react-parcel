import React, { Component } from 'react'
// REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeActions from '../../redux/actions/home';
import {set_username} from '../../redux/actions/home'
// 方法一
@connect(({ home }) => ({
  home
}), (dispatch) => ({
  _set_uername(event){
    dispatch(set_username(event.target.value))
  }
}))

 class Home extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {username} = this.props.home
    return (
      <div>
        <input type="text" value={username} onChange={(event)=>{this.props._set_uername(event)}} placeholder='change username' />
        {username}
      </div>
    )
  }
}
export default Home
// 方法二
// function mapStateToProps(state) {
//     return { home: state.home };
//   }
  
//   function mapDispatchToProps(dispatch) {
//     return {
//       actions_home: bindActionCreators(homeActions, dispatch)
//     };
//   }
  
// export default connect(mapStateToProps,mapDispatchToProps)(Home)