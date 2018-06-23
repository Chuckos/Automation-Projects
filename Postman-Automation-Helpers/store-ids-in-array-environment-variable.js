try {

    // Store environment parameter as a variable
    var getVariableArray = pm.environment.get("thng_array_final");
    console.log("Print out content of array", getVariableArray);

    /* if statement (ternary operator) to check if array is empty
    if true create new array if false turn turn existing string json array to javascript Object array*/
    getVariableArray === null ? getVariableArray = [] : getVariableArray = JSON.parse(getVariableArray);

    console.log("verify variable is an array", getVariableArray.constructor === Array);
    console.log("Print out content of array", getVariableArray);

    // store as javascript object variable JSON string response body
    var jsonData = JSON.parse(responseBody);
    console.log("Print thng id with jsonData.id", jsonData.id);

    // push created thng id onto array on thng ID's
    getVariableArray.push(jsonData.id);
    console.log("Print new thng ID array list", getVariableArray);

    //Set environment variable with new thng id array list, turn javascript object into a string
    pm.environment.set("thng_array_final", JSON.stringify(getVariableArray, null, 2));

    // Regex to remove escaped and double double quotes when stringify is used to push thng id onto array list.
    //pm.environment.set("thng_array_final", JSON.stringify(getVariableArray, null, 2).replace(/(\\)["]/g, ''));
}

catch (err) {
    console.log(getVariableArray);
    console.log(jsonData);
}

// assert to test if request was successful
tests["Successful POST request"] = responseCode.code === 201;