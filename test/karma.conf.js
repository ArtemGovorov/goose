module.exports = function (config) {
    config.set({
        angularCli: {
            environment: 'dev'
        },
        autoWatch: true,
        basePath: '',
        browsers: ['Chrome'],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        colors: true,
        coverageIstanbulReporter: {
            reports: ['html', 'text-summary'],
            dir: 'coverage/',
            fixWebpackSourcePaths: true
        },
        frameworks: ['jasmine', '@angular/cli'],
        logLevel: config.LOG_INFO,
        mime: {
            'text/x-typescript': ['ts', 'tsx']
        },
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular/cli/plugins/karma')
        ],
        port: 9876,
        reporters: ['kjhtml', 'coverage-istanbul'],
        reportSlowerThan: 600,
        singleRun: false
    });
};