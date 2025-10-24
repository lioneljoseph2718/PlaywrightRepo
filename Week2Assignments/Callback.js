let browser = "Chrome"
function checkBrowserVersion(callback){
    console.log("Verifying The Browser Version...")
setTimeout(() => {
    callback(browser);
}, 2000);
}
function logBrowserVersion(version) {
    console.log("Logging Browser Version: " +version)
    
}
checkBrowserVersion(logBrowserVersion)