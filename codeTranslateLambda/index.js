// This function uses the Node.js 10.x runtime
// Remember to ENABLE CORS IN API GATEWAY

exports.handler = async (event) => {
    
    if (event.httpMethod === 'POST'){
        const parsedBodyContent = JSON.parse(event.body)
        const expectedSolution = parsedBodyContent["shown"]["0"]
        const userSolution = parsedBodyContent["editable"]["0"]
        let results = ""
        
        userSolution ===  expectedSolution ? (results = "You got the answer!") : results = "You have missed the answer."
        
        return {
            "statusCode": 200,
            "headers": {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'text/html',
            },
            "body": JSON.stringify({
                "textFeedback": results
            })
        }
    }
    
    if (event.httpMethod === 'GET'){
        return {
            "statusCode": 301,
            "headers": {
                Location: 'http://dev-codetranslate797530.s3-website-eu-west-1.amazonaws.com/',
            },
        }
    }

};

