// Import the IP2Location module
/**
 * IP2Location module for geolocation.
 * @module IP2Location
 * @requires ip2location-nodejs
 * @see {@link https://www.npmjs.com/package/ip2location-nodejs|ip2location-nodejs}
 */
const { IP2Location } = require("ip2location-nodejs");

// Create a new IP2Location object
const ip2location = new IP2Location();
ip2location.open("./geolocation/IP2LOCATION-LITE-DB3.BIN");

// Export a function for IP geolocation
module.exports.ipLoc = function (IP) {
    // Define function-specific variables
    const _func = "ipLoc";
    const debug = true;
    let result, returnObj;

    // Log debug information
    if (debug) {
        console.log(`${_func}: entry`);
    }

    try {        
        {
            //START:TODO - GeoLocation Logic to Implement

           //Find the geolocation using the IP input from the local file, and return ip, country and city
              result = ip2location.getAll(IP);
                returnObj = {
                    ip: result.ip,
                    country: result.country_long,
                    city: result.city
                };
            // Log debug information
            if (debug) {
                console.log(`${_func}: returnObj -> ${JSON.stringify(returnObj)}`);
            }
             // Return the object
            return returnObj;
            //END:TODO
        }        

    } catch (err) {
        // Log any errors that occur
        console.log(`${_func}: error -> ${err}`);
    }
};
