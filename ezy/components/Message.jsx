import React from 'react'
import {Cmp, Publisher} from 'ezy/common'

export class Message extends Cmp {
    get cmpClassName() {return `message`}
    cmpDidMount() {
        jQuery(this.dom).fadeOut(7000, e => {
            new Publisher('remove_message', this.cmpData, this)
        })
    }
    render() {
        let text, type
        if (typeof this.cmpData == 'object') {
            text = this.cmpData.text
            type = this.cmpData.type
        }
        else text = this.cmpData
        return <div className={`${this.className} ${type || ''}`}>{text}</div>
    }
}