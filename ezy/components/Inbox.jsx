import React from 'react'
import {ToggleCmp} from 'ezy/common'
import {Button} from './input'

export class Inbox extends ToggleCmp {

    apiUrl = this.config.api.inbox
    afterShow = e => this.apiLoad()
    added = true
    renderNagativeCmp = () => {return null}

    get people() {return [].concat(this.cmpData).filter(c => c)}
    get cmpClassName() {return 'inbox'}
    get shouldCmpRender() {return this.isLogged}
    get onPersonClick() {
        return p => this.lastInbox = {from: this.utils.user.data, to: p, message: null}
    }
    get animation() {return {direction: 'up'}}
    get children() {
        return [
            <Button icon='message' onClick={this.onToggle}/>,
            <div className='inbox-list'>
            </div>
        ]
    }
    get selector() {return `#${this.cmpId} .inbox-list`}
}
