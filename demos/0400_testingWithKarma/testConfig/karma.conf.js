module.exports = function (config) {
    "use strict";

    config.set({
        basePath: '../',
        frameworks: ['jasmine'],
        files: [
            '../../lib/angular/*.js',
            '../../lib/angularExtras/*.js',
            'testConfig/defaultMatchers.js',
            'testConfig/testStartup.js',
            'app/*.js',
            'tests/unit/*.js'
        ],

        reporters: ['dots'],
        autoWatch: true,
        browsers: ['Chrome'], // , 'Safari'];
        junitReporter: {
            // will be resolved to basePath (in the same way as files/exclude patterns)
            outputFile: 'test-results.xml'
        },
        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher'
        ]
    });
};


