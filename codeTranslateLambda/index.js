// This function uses the Node.js 10.x runtime
// Remember to ENABLE CORS IN API GATEWAY
function extractAllText(str){
    const re = /"(.*?)"/g;
    const result = [];
    let current;
    while (current = re.exec(str)) {
        result.push(current.pop());
        
    }
    return result.length > 0 ? result: [];
}

exports.handler = async (event) => {
    
    if (event.httpMethod === 'POST'){
        const parsedBodyContent = JSON.parse(event.body)
        const expectedSolution = parsedBodyContent["shown"]["0"]
        const userSolutionNow = parsedBodyContent["editable"]["0"]
        const hiddenCode = parsedBodyContent["hidden"]["0"]
        let dialogTrue = hiddenCode.dialogCode.length >0
        var userSolution = userSolutionNow
        let results = ""
        let complete = false
        let printArray = []
        let areEqual = false
        
        if (hiddenCode.type == 'java') {
            //extract printed statements
            if (dialogTrue) {
                printArray = extractAllText(userSolution)
                
                //check print statements
                areEqual = printArray.length === hiddenCode.dialogCode.length && printArray.every((item,index) => hiddenCode.dialogCode[index] ===item)
                
            }
            
            //remove dialog from java code
            userSolution = userSolution.replace(/".*?"/g,"")
            //remove single line comment from java code
            userSolution = userSolution.replace(/\/\/(.*)$/gm, "")
            //remove spaces tabs and new lines
            userSolution = userSolution.replace(/[ ]|\r\n|\n|\t|\r/gm, "")
            //remove multi-line comments
            userSolution = userSolution.replace(/\/\*.*\*\//g, "")
            
            //if there is printed statements
            if (dialogTrue){
                if (userSolution == expectedSolution && dialogTrue == areEqual){
                    results = "You got the answer!"
                    complete = true
                }
                //if the result is not correct but printed out right stuff
                else if (userSolution.length != expectedSolution.length && dialogTrue == areEqual){
                    results = "You are printing the right things but syntax is wrong."
                }
                else if (dialogTrue == true && areEqual == false){
                    results = "You are not printing the right output."
                }
                else{
                    results = "Please try again."
                }
            }
            //if there are no printed statements
            else if (userSolution == expectedSolution) {
                results = "You got the answer!"
                complete = true
            }
            //else if there is extra code written
            else if (userSolution.length > expectedSolution.length) {
                results = "You typed extra code."
            }
            //if there is too little code
            else {
                results = "You either did not make full user of the variables or am missing out some code."
            }
        
        }
        //if type is python
        else {
        userSolution ===  expectedSolution ? (results = "You got the answer!") : results = "You have missed the answer."
        userSolution ===  expectedSolution ? (complete = true) : complete = false
        }
        return {
            "statusCode": 200,
            "headers": {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'text/html',
            },
            "body": JSON.stringify({
                "textFeedback": results,
                "isComplete": complete,
                "jsonFeedback": {'results':results},
                "htmlFeedback": results
                
            })
        }
    }
    
    if (event.httpMethod === 'GET'){
        return {
            "statusCode": 301,
            "headers": {
                Location: "http://dev-codetranslate797530.s3-website-eu-west-1.amazonaws.com/",
            },
        }
    }

};