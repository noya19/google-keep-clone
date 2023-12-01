import React from 'react'
import classes from './LeftNavigation.module.css'

const LeftNavigation = () => {
    return (
        <div className={classes.container}>
            <div className={classes.burger} tabIndex={1}>
                <svg fill='#5f6368' focusable="false" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg></div>
            <a>
                <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" srcSet="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x " alt="" aria-hidden="true" role="presentation" />
                <span>Keep</span>
            </a>
        </div>
    )
}

export default LeftNavigation