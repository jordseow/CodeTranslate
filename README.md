# codetranslate

> an app to help you learn how to translate from one language to another

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

```

## AWS Cloud9

``` bash
#cloning repo to Cloud9 IDE
git clone https://github.com/jordseow/CodeTranslate

#changing file to CodeTranslate
cd CodeTranslate

#setting up files
chmod +x c9-setup.sh  
./c9-setup.sh

#change terminal to a new terminal
(Change the terminal) 

#check sam version
sam --version

#changing file to CodeTranslate
cd CodeTranslate

#building sam
sam build --region us-east-1

#set up aws s3 bucket
aws s3 mb s3://<bucket name here> --region <your region here>

#invoking method
echo '{"httpMethod": "GET" }' | sam local invoke ‘CodeTranslate’

#accessing the s3 bucket
aws s3 mb s3://<bucket name here> region <your region here>

#creating packaged.yaml file
sam package --output-template packaged.yaml --s3-bucket <bucket name here>

#deploying app
sam deploy --template-file packaged.yaml --region us-east-1 --capabilities CAPABILITY_IAM --stack-name <name here>

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
