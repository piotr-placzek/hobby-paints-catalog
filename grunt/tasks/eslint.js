const path = require('path');

function eslintTask(rootDirectory) {
    return {
        options: {
            overrideConfigFile: path.join(rootDirectory, 'grunt/config', 'eslint.json')
        },
        src: [
            path.join(rootDirectory, 'src'),
            path.join(rootDirectory, 'grunt/tasks'),
            path.join(rootDirectory, '*.js')
        ]
    };
}

module.exports = eslintTask;
