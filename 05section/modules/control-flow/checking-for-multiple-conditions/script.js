// Checking multiple conditions with && or ||

//And && (Needs to have both side equal to true in order to run)
const age = 20;
const hasDrivingLicense = true;

if(age > 18 && hasDrivingLicense) {
    console.log("you can drive");
} else {
    console.log("You can't drive");
}


// Or || (Needs to have at least one side as true to run)
const age2 = 20;
const hasDrivingLicense2 = true;

if(age2 > 18 && hasDrivingLicense2) {
    console.log("you can drive");
} else {
    console.log("You can't drive");
}