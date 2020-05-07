// ==UserScript==
// @name         Anchor headings
// @version      0.1
// @description  Add anchors to all headings with ids
// @author       Sean McPherson
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]')
    .forEach(node => {
        if (!node.querySelector('a')) {
            let anchor = document.createElement('a')
            anchor.textContent = "#"
            anchor.href = window.location.origin + window.location.pathname + "#" + node.id
            anchor.style.marginLeft = "0.5rem"
            anchor.dataset.userScriptAnchor = "true"
            node.appendChild(anchor)
        }
    })
})();
