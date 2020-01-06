import React, { Component } from 'react'
import {  inject, observer } from 'mobx-react';

@inject(all => {
    return ({
        userStore: all.user // 连接到aStore
    })
}) // 将store注入

@observer   // 将类转化为观察者，只要被观察者跟新，组件将会刷新
export default class User extends Component {
    handleInputChange = (event)=>{
        const userStore = this.props.userStore
        userStore.setInfo(event.target.value)
    }
    render() {
        const userStore = this.props.userStore
        return (
            <div>
                <input placeholder='change it' onChange={this.handleInputChange} value={userStore.info.name}/>
                <h1>{userStore.info.name}</h1>
            </div>
        )
    }
}
