const browserName = "Chrome";

//Shadowing The Global Variable With var Keyword

function getBrowserName() {
    if (browserName === "Chrome") {
        var browserName = "Default Browser";
        }
        console.log(browserName); 
}

getBrowserName();

const browserName1 = "Chrome";

//Shadowing The Global Variable With let Keyword

function getBrowserName1() {
    if (browserName1 === "Chrome") {
        let browserName1 = "Default Browser";
        }
        console.log(browserName1); 
}

getBrowserName1();


