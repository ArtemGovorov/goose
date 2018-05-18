module.exports = function (config) {
    config.set({
        angularCli: {
            environment: 'dev'
        },
        autoWatch: false,
        basePath: '../',
        browsers: ['ChromeHeadless'],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        colors: true,
        coverageIstanbulReporter: {
            reports: ['html', 'text-summary', 'teamcity'],
            dir: '../coverage/',
            fixWebpackSourcePaths: true
        },
        frameworks: ['jasmine', '@angular/cli'],
        logLevel: config.LOG_INFO,
        mime: {
            'text/x-typescript': ['ts', 'tsx']
        },
        plugins: [
            require('karma-teamcity-reporter'),
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular/cli/plugins/karma')
        ],
        port: 9876,
        reporters: ['progress', 'coverage-istanbul', 'teamcity'],
        reportSlowerThan: 600,
        singleRun: true
    });
};