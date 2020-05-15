// ==UserScript==
// @name         Basic TickTick
// @namespace    https://seanmcp.com
// @version      0.1
// @description  CSS to remove all premium features/prompts from TickTick
// @author       Sean McPherson
// @match        https://ticktick.com/webapp/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    const style = document.createElement('style')
    style.id = "__basic-ticktick"

    style.textContent = `
#left-bottom-view,
.sub-task a.reminder-hint,
.tkcalendar,
[projectid="summary"],
a[href$="tasks/activity"],
a.l-tab-csl {
    display: none !important;
}
`

    document.head.appendChild(style)
})();
