import React from 'react'
import {Link} from 'react-router'
import {Cmp} from '../common'

export class UserBox extends Cmp {
    get cmpClassName() {return 'user-box'}
    get children() {
        return [
            <i className='material-icons' onClick={this.props.onClick}>person</i>,
            <div className='alias' onClick={this.props.onClick}>{this.utils.user.alias}</div>
        ]
    }
}