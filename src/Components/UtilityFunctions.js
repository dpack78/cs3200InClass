/*
* Misc functions
*/

let UtilityFunctions = class UtilityFunctions {

    //Return nicely formatted Month + day string
    getCurrentDate() {
        let currentDate = new Date()
        let monthNames = ["January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December"]
        let currentDateString = monthNames[currentDate.getMonth()] + " " + currentDate.getDate()

        return currentDateString
    }
};

// Make this component a singleton
const utilityFunctions = new UtilityFunctions();
export default utilityFunctions;