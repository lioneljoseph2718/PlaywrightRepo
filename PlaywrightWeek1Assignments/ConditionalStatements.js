function launchBrowser(browserName) {
    if (browserName === "Chrome") {
        console.log("Launching Chrome Browser");   
    } else {
        console.log("Launching Other Browser");
    }   
}

function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Executing Smoke Tests");
            break;
        case "sanity":
            console.log("Executing Sanity Tests");
            break;
        case "regression":
            console.log("Executing Regression Tests");
            break;  
        default:
            console.log("Executing Default Smoke Tests")
            break;
    }
}

launchBrowser();
runTests();
