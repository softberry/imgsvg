(function () {
    /**
     * 
     * @param {*} url 
     * @param {*} cb 
     */
    function loadSVGContent(url, img) {
        var req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            if (req.readyState === XMLHttpRequest.DONE) {
                if (req.status === 200) {
                    var xmlSvg = req.responseXML;
                    var svg = xmlSvg.querySelector('svg');

                    if (svg) {
                        var parent = img.parentNode;
                        var importedNode = document.importNode(svg, true);
                        var imgClasses = img.className;
                        console.log(imgClasses);
                        parent.replaceChild(importedNode, img);
                        importedNode.setAttribute('class', imgClasses);
                        return;
                    }
                }
                // error or content is not a valid svg
                // revert img src value
                img.src = url;
            }
        };
        req.open('GET', url);
        req.send();

    }

    function isSVG() {
        var regex = /([a-zA-Z0-9\s_\\.\-:])+(.svg)$/i;
        return !regex.test(this);
    }

    /**
     * initializer function
     */
    function init() {
        // do not continue if browser is not supported.
        if (!XMLHttpRequest) return false;
        var imgsvg = document.querySelectorAll('img');
        [].forEach.call(imgsvg, function (img) {
            var src = img.src;

            if (isSVG.call(src)) return;
            console.log(src);
            //
            img.removeAttribute('src');
            loadSVGContent(src, img)

        })
    }
    window.addEventListener('DOMContentLoaded', init);
}())


