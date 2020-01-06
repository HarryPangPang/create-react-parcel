var execSync = require('child_process').execSync ;
const path = require("path");
function createParcelReact({ packageName, projectType }) {
    const pkgPath = ('./'+packageName)
    const srcPath = path.join(__dirname,'../'+projectType)
  
    execSync(`mkdir -p ${pkgPath}`);
    execSync(`cp -r ${srcPath}/* ${pkgPath}`);
    execSync(`cd ${pkgPath}; yarn`, { stdio: 'inherit', shell: true });
  }
module.exports = createParcelReact