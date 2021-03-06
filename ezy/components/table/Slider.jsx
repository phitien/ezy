import React from 'react'
import {Grid} from './Grid'
import {JsLoader} from 'ezy/common'

export class Slider extends Grid {
    static autoProps() {return super.autoProps().concat([
        {section: 'cmp', name: 'dots', title: 'Dots', type: 'Select', value: true, options: [true, false]},
        {section: 'cmp', name: 'infinite', title: 'Infinite', type: 'Select', value: true, options: [true, false]},
        {section: 'cmp', name: 'autoplay', title: 'Autoplay', type: 'Select', value: true, options: [true, false]},
        {section: 'cmp', name: 'fade', title: 'Fade', type: 'Select', value: false, options: [true, false]},
        {section: 'cmp', name: 'cssEase', title: 'cssEase', type: 'Select', value: 'linear', options: ['linear']},
        {section: 'cmp', name: 'rtl', title: 'Right to left', type: 'Select', value: false, options: [true, false]},
        {section: 'cmp', name: 'adaptiveHeight', title: 'Adaptive Height', type: 'Select', value: false, options: [true, false]},
        {section: 'cmp', name: 'centerMode', title: 'Center Mode', type: 'Select', value: false, options: [true, false]},
        {section: 'cmp', name: 'centerPadding', title: 'Center Padding', type: 'Text', value: '10px'},
        {section: 'cmp', name: 'lazyLoad', title: 'lazyLoad', type: 'Select', value: 'ondemand', options: ['ondemand']},
        {section: 'cmp', name: 'speed', title: 'Speed', type: 'Number', value: 500},
        {section: 'cmp', name: 'responsive', title: 'Responsive', type: 'Textarea', value: []},
        {section: 'cmp', name: 'slidesToShow', title: 'Slides To Show', type: 'Number', value: 2},
        {section: 'cmp', name: 'slidesToScroll', title: 'Slides To Scroll', type: 'Number', value: 2},
        {section: 'cmp', name: 'buttonsPosition', title: 'Buttons Position', type: 'Select', value: 'outside', options: ['outside', 'inside']},
    ])}
    showControl = false
    showPagination = false
    showHeader = false
    showFooter = false
    get cmpClassName() {return `ezy-slider`}
    get className() {return `${super.className} ${this.cmpClassName}-buttons-${this.buttonsPosition}`}
    layoutRefine() {
        this.utils.trigger('slick_init')
    }
    slick_js_loaded = e => {
        let jDom = this.jDom, body = jQuery(jDom.find(`.${this.bodyClassName}`).get(0))
        if (this.rtl) body.parent().attr('dir', 'rtl')
        else body.parent().removeAttr('dir')
        body.css('width', jDom.outerWidth())
        body.css('height', jDom.outerHeight())
        if (jQuery().slick) {
            try {body.slick('unslick')}catch(e) {}
            body.slick({
                dots: this.dots,
                speed: this.speed,
                infinite: this.infinite,
                slidesToShow: this.slidesToShow,
                slidesToScroll: this.slidesToScroll,
                adaptiveHeight: this.adaptiveHeight,
                fade: this.fade,
                cssEase: this.cssEase,
                autoplay: this.autoplay,
                centerMode: this.centerMode,
                centerPadding: this.centerPadding,
                lazyLoad: this.lazyLoad,
                rtl: this.rtl,
                responsive: this.responsive
            })
        }
    }
    get pubsub() {
        return this.utils.assign(super.pubsub, {
            slick_js_loaded: this.slick_js_loaded,
        })
    }
}
