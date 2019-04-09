exports.config = {
    output: '../../reports/cuke',
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
                stdout: './reports/cuke/junit-console.log',
                options: {
                    mochaFile: './reports/cuke/result.xml'
                }
            },
            'mochawesome': {
                stdout: './reports/cuke/console.log',
                options: {
                    reportDir: './reports/cuke',
                    reportFilename: 'mochawesome'
                }
            }
        }
    },
    require: [
        'ts-node/register'
    ],
    gherkin: {
        features: './features/*.feature',
        steps: [
            './step_definitions/personal-home-loan-calc.steps.ts'
        ]
    },
    bootstrap: false,
    hooks: [],
    name: 'anz-technical-assessment'
};
