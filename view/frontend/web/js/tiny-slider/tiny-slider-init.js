define([
    'tinySlider'
], function () {
    'use strict';
    return function (options, el) { // for declarative notation
        options['container'] = el;
        return tns(options);
    };
});
