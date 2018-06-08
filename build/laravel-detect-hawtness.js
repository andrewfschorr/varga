const path = require('path');
const fs = require('fs');

function LaravelDetectHawtness(opts) {
    this.options = opts;
}

// TODO figure out DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead
// This just writes a file (flag) to the FS so we can check in hawtHelper what to load
LaravelDetectHawtness.prototype.apply = function(compiler) {
    const filePath = path.resolve('public');
    if (this.options.isHot) {
        if (!fs.existsSync(`${filePath}/hot`)) {
            compiler.plugin('watchRun', function() {
                fs.writeFile(`${filePath}/hot`, '', (err) => {
                    if(err) {
                        console.log(err);
                    }
                });
            });
        }
    } else {
        compiler.plugin('watchRun', function() {
            if (fs.existsSync(`${filePath}/hot`)) {
                fs.unlink(`${filePath}/hot`, (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
            }
        });
    }
};

module.exports = LaravelDetectHawtness;
