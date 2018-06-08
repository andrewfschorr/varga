const path = require('path');
const fs = require('fs');

function LaravelDetectHawtness(opts) {
    this.options = opts;
}

// TODO figure out DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead
LaravelDetectHawtness.prototype.apply = function(compiler) {
    const filePath = path.resolve('public');
    if (this.options.isHot) {
        compiler.plugin('watchRun', function() {
            fs.writeFile(`${filePath}/hot`, '', (err) => {
                if(err) {
                    console.log(err);
                }
            });
            fs.writeFile(`${filePath}/css/app.css`, '', (err) => {
                if(err) {
                    console.log(err);
                }
            });
        });
    } else {
        compiler.plugin('watchRun', function() {
            if (fs.existsSync(`${filePath}/hot`)) {
                fs.unlink(`${filePath}/hot`, (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
            }
            if (fs.existsSync(`${filePath}/css/app.css`)) {
                fs.unlink(`${filePath}/css/app.css`, (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
            }
        });
    }
};

module.exports = LaravelDetectHawtness;