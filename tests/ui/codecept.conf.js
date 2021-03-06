exports.config = {
    tests: './specs/*.spec.ts',
    output: '../../reports',
    timeout: 30000,
    helpers: {
        Puppeteer: {
            url: 'https://www.anz.com.au/personal/home-loans/calculators-tools/much-borrow/',
            show: false,
            waitForTimeout: 5000
        }
    },
    plugins: {},
    mocha: {
        reporterOptions: {
            'codeceptjs-cli-reporter': {
                stdout: '-',
                options: {
                    verbose: false,
                    steps: true
                }
            },
            'mocha-junit-reporter': {
                stdout: './reports/junit-console.log',
                options: {
                    mochaFile: './reports/result.xml'
                }
            },
            'mochawesome': {
                stdout: './reports/console.log',
                options: {
                    reportDir: './reports',
                    reportFilename: 'mochawesome'
                }
            }
        }
    },
    require: [
        'ts-node/register'
    ],
    multiple: {
        parallel: {
            chunks: 4,
            browsers: ['chrome']
        }
    },
    bootstrap: false,
    hooks: [],
    name: 'anz-technical-assessment'
};
