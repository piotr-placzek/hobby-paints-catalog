const path = require('path');

function eslintTask(rootDirectory) {
    return {
        options: {
            overrideConfigFile: path.join(rootDirectory, 'grunt/config', 'eslint.json'),
            ignorePath: path.join(rootDirectory, 'grunt/config', '.eslintignore')
        },
        src: [
            path.join(rootDirectory, 'src'),
            path.join(rootDirectory, 'grunt/tasks'),
            path.join(rootDirectory, '*.js')
        ]
    };
}

module.exports = eslintTask;
