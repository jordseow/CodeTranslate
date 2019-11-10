<template>
<v-container>
  <img class="pr-5 pt-3 float-left pl-4" src="@/assets/codetranslatelogo.png" height="90" />
<d-container class="dr-example-container h-100">
    <d-row class="pt-5">
        <d-col>
            <router-link to="/home">
            <d-button size="lg" class="font-weight-bold" theme="warning">
                    Back
            </d-button>
            </router-link>
        </d-col>
        <d-col>
            <h1 >CodeTranslate</h1>
            <h5 class="text-dark font-weight-bold" align="center">
                    Printing, Commenting, Declaring Variables and If-Else
            </h5>
        </d-col>
        <d-col class="">
        <div class="discuss bg-yellow-radial" v-if="showDiscussionArea">
            <a @click="closeDiscussionArea" href="#" class="close-icon m-2"></a>
            <span class="triangle-bottom-right"></span>
            <div class="chats">
                <div class="row msg" v-for="chatLog in chatLogs">
                    <div class="col-3">
                        <p class="m-0">{{chatLog.time}}</p>
                        <p>{{chatLog.name}}</p>
                    </div>
                    <div class="col-8">
                        <p>
                           {{chatLog.comment}}
                        </p>
                    </div>
                </div>
            </div>
            <div class="sender">
            <d-input-group class="px-2 mb-1">
              <d-form-input size="lg" type="text" v-model="chatComment"></d-form-input>
              <d-form-input size="lg" type="text" v-model="chatName"></d-form-input>
              <d-button @click="insert_chat" outline squared theme="dark" size="lg" class="ml-2">Enter</d-button>
            </d-input-group>                
              
              
            </div>
            </div>    
            <d-button @click="openDiscussionArea" size="lg" theme="info" class="font-weight-bold float-right">
                <span style="color:black">
                    Discuss</span>
            </d-button>
        </d-col>
    </d-row>
    <d-row class="mt-5">
        <d-col class="text-center" v-for="question in questions" :key="index">
            <span v-if="isComplete(question)">
            <d-button pill theme="success" @click="currentTask=question" block-level size="lg" >
                <span class="text-dark font-weight-bold">
                    Question {{ question }}
                </span>
            </d-button>
            </span>
            <span v-else-if="question===currentTask">
                <d-button block-level size="lg" pill theme="light"><span class="text-dark font-weight-bold">Question {{ question }}</span></d-button>
            </span>
            <span v-else>
                <d-button pill theme="primary" @click="currentTask=question" block-level size="lg">
                <span class=" font-weight-bold">
                    Question {{ question }}
                    </span>
                </d-button>
                </span>
        </d-col>
    </d-row>
    <d-row class="mt-5 pb-5">
        <d-col class="col-5">
            <d-row>
                <!-- <d-col>
                    <h5><strong>Question</strong></h5>
                    <d-input-group class="mb-2">
                    <d-form-select v-model="translateFrom" :options="languages" />
                    </d-input-group>
                </d-col> -->
                <d-col class="col-5">
                    <h5><strong>Input Language</strong></h5>
                    <d-input-group class="mb-2">
                    <d-form-select v-model="translateTo" :options="languages" />
                    </d-input-group>                    
                </d-col>
            </d-row>

            <d-row>
                <d-col class="pt-5">
                    <h4 class="font-weight-bold">Task:</h4>
                    <span style="color:black"> <strong>{{ layoutItems[currentTask-1].task }}</strong> </span>
                </d-col>
            </d-row>

            <d-row class="mt-5 pt-5">
                <d-col>
                    <div class="hints p-2 rounded bg-yellow-linear" v-if="showHints">
                        <p style="color:black"><strong>In Python:</strong><p>
                        <span style="color:black">{{ layoutItems[currentTask-1].hintspython }}</span>

                        <p style="color:black"><strong>In Java:</strong></p>
                        <span style="color:black">{{ layoutItems[currentTask-1].hintsjava }}</span>
                        <div class="triangle-bottom-left bg-yellow-linear"></div>
                    </div>
                    <d-button theme="info" @click="toggleHints" class="font-weight-bold text-dark">
                            Hints
                    </d-button>
                </d-col>
            </d-row>
        </d-col>
        <d-col>
            <h4><strong>Input Code</strong></h4>
                <span v-if='translateTo=="java"'><editor v-model="layoutItems[currentTask-1].contentjava" @init="editorInit" :lang="translateTo" theme="chrome" style="width:100%;"></editor></span>
                <span v-else><editor v-model="layoutItems[currentTask-1].contentpython" @init="editorInit" :lang="translateTo" theme="chrome" style="width:100%;"></editor></span>
                    <br/>
                    <d-button theme="warning" @click="postContents()" block-level size="lg" class="font-weight-bold text-dark" >
                            Run
                    </d-button>
        </d-col>
        </d-row>
        <br/>
        <div align="center" class="margin:auto">
        <d-row class = "mt-5 pt-5">
            <d-col>
            <h4><strong>Output</strong></h4>
            <div class="px-5 overflow-auto" style="width: 60%">
                <b-card class="text-center">
                    <div class="bg-light pt-3 pb-3">
                         <span v-if="isComplete(currentTask)" class="font-weight-bold" style="color:green">
                            Great Job!
                        </span>
                        <span v-else-if="!isComplete(currentTask) && tryCount != 0" class="font-weight-bold" style="color:red">
                            Try Again!
                        </span>
                    </div>
                </b-card>
            </div>
           
            <br/>
            <d-button theme="info" @click="reset" size="lg" class="mt-3 font-weight-bold text-dark">
                    Reset
            </d-button>
            
            </d-col>
        </d-row>
        </div>
    
    <br/>
    <br/>
    <hr />
    <h6 style="color:white">Enter your unique code below to save or restore your progress</h6>
      <input v-model="userkey" size="30" />
      <br/>
      <br/>
      <d-button theme="warning" @click="save_progress()" class="px-4 mr-2 font-weight-bold">Save</d-button>
      <d-button theme="warning" @click="restore_progress()" class="font-weight-bold">Restore</d-button>
      <hr />

</d-container>
</v-container>
</template>
<script>
export default {
    data: function() {
        return {
            logs: {},
            chatLogs: {},
            chatName: "Insert Username",
            chatComment: "Insert Comment",
            userkey: "",
            timeStamp: "",
            topic: {
                11: "Print Statements and Commenting",
                12: "Declaring Variables",
                13: "If-Else Statements",
                14: "While Statements",
                15: "For Statements"
            },
            tryCount: 0,
            unitCode: '',
            questions: [1,2,3,4,5],
            translateFrom: 'python',
            translateTo: 'java',
            showDiscussionArea: false,
            showHints: false,
            originUrl: '',
            // tasks: {
            //     1: 'Print “Hello World!”',
            //     2: 'Prevent printing “Coding is hard” by commenting it out.',
            //     3: 'Print the value of x.',
            //     4: 'Comment out all the error-causing code using multi-line commenting.',
            //     5: 'Print (“Hello World!”) using string concatenation.'
            //     },
            currentTask: 1,
            text: '',
            // content: {
            //     1: 'public class Main {    \n    public static void main(String[] args) {\n        // Your code here\n    }\n}',
            //     2: 'public class Main {    \n    public static void main(String[] args) {\n        System.out.println("Coding is hard");\n        System.out.println("Coding is really fun!");\n    }\n}',
            //     3: 'public class Main {    \n    public static void main(String[] args) {\n        int x = 5;\n        // Your code here\n    }\n}',
            //     4: 'public class Main {    \n    public static void main(String[] args) {\n        harlo harlo\n        java is hard\n        System.out.println("Hello World!");\n    }\n}',
            //     5: 'public class Main {    \n    public static void main(String[] args) {\n        String x = "Hello ";\n        String y = "World!";\n        // Your code here\n    }\n}'
            // },
            // defaultContent: {
            //     1: 'public class Main {    \n    public static void main(String[] args) {\n        // Your code here\n    }\n}',
            //     2: 'public class Main {    \n    public static void main(String[] args) {\n        System.out.println("Coding is hard");\n        System.out.println("Coding is really fun!");\n    }\n}',
            //     3: 'public class Main {    \n    public static void main(String[] args) {\n        int x = 5;\n        // Your code here\n    }\n}',
            //     4: 'public class Main {    \n    public static void main(String[] args) {\n        harlo harlo\n        java is hard\n        System.out.println("Hello World!");\n    }\n}',
            //     5: 'public class Main {    \n    public static void main(String[] args) {\n        String x = "Hello ";\n        String y = "World!";\n        // Your code here\n    }\n}'
            // },
            solutions: {
                1: 'public class Main {    \n    public static void main(String[] args) {\n        System.out.println("Hello World!");\n    }\n}',
                2: 'public class Main {    \n    public static void main(String[] args) {\n        //System.out.println("Coding is hard");\n        System.out.println("Coding is really fun!");\n    }\n}',
                3: 'public class Main {    \n    public static void main(String[] args) {\n        int x = 5;\n        System.out.println(x);\n    }\n}',
                4: 'public class Main {    \n    public static void main(String[] args) {\n        /*harlo harlo\n        java is hard*/\n        System.out.println("Hello World!");\n    }\n}',
                5: 'public class Main {    \n    public static void main(String[] args) {\n        String x = "Hello ";\n        String y = "World!";\n        System.out.println(x+y);\n    }\n}'
            },
            correct: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false
            },
            languages: [
                { value: 'java', text: 'Java' },
                { value: 'python', text: 'Python' },
            ],
            // starterCode: {
            //     "java": "public class Main {    \n    public static void main(String[] args) {\n        // Your code here\n    }\n}",
            //     "python": "print(#Your code here)",
            // },
            layoutItems: [
                {task: 'Mama Pig told her 3 little pigs: "go seek out your fortune". The 3 little pigs ventured out together to build their own houses. You are Mr Wolf. You spotted the first little pig building a house of straw. You decided to pay him a visit. At the doorstep, you wanted the first little pig to let you in. In the editable code block, add in a line to print out "Little pig, little pig, let me come in".' 
                        , contentjava: 'public class Main {    \n    public static void main(String[] args) {\n        // Your code here\n    }\n}'
                        , contentpython: ''
                        , hintsjava:'System.out.println("") is used to print'
                        , hintspython:'print("") is used to print'},
                {task: 'Because you are Mr Wolf, the first little pig refused to open the door. Comment out the wrong reply.'
                        , contentjava: 'public class Main {    \n    public static void main(String[] args) {\n        System.out.println("No, no, by the hair on my chinny chin chin");\n        System.out.println("Welcome in, Mr Wolf!");\n    }\n}'
                        , contentpython: 'print("No, no, by the hair on my chinny chin chin")\nprint("Welcome in, Mr Wolf!")'
                        , hintsjava:'You use // for line comment in Java'
                        , hintspython:'You use # to comment in Python' },
                {task: 'You know that you can easily blow the straw house down in 3 huffs and puffs. You gave the first little pig a warning... Change the editable code block so that it prints out the correct number of huffs and puffs.'
                        , contentjava: 'public class Main {    \n    public static void main(String[] args) {\n        int numberOfHuffsPuffs;\n        System.out.println("Open the door now or I will huff and puff " \n                + numberOfHuffsPuffs \n                + " times and blow your house in!");\n    }\n}'
                        , contentpython: '# Uncomment the line below and assign an appropriate value to the variable\n# number_of_huffs_puffs = \nprint("Open the door now or I will huff and puff " + number_of_huffs_puffs + " times and blow your house in!")'
                        , hintsjava:'You have to indicate the data type before the variable name (e.g. int, boolean, String, double)'
                        , hintspython:'You can declare the variable without having to indicate the data type'},
                {task: 'You decided to wait 5 minutes before making your next move. Edit the java code below so that: If the door is closed after 5 mins, print "I am blowing your house in!" Else eat the first little pig by printing "I will eat you now!"'
                        , contentjava: 'public class Main {    \n    public static void main(String[] args) {\n        // Do not edit code here\n        boolean doorClosed = true;\n\n        // After 5 minutes\n        // Edit code below\n        if () {\n            //\n        } else {\n            //\n        }\n    }\n}'
                        , contentpython: 'door_closed = True\n\n# After 5 minutes\n# Edit code below\nif :\n    #\nelse:\n    #'
                        , hintsjava:'Use "if (somecondition) { }" and "else { }"'
                        , hintspython:'Use "if somecondition:" and "else:"'},
                {task: 'After blowing the house down, you see the first little pig curled up in the corner, helpless. Being the softhearted Mr Wolf you are, you decided that you would only: If he is more than 50kg, eat him. Else you will let him go. The pig is 30kg. Fill up the code and: Return true if you eat the pig. Return false if you let him go.'
                        , contentjava: 'public class Main {    \n    public static void main(String[] args) {\n        int weight;\n        boolean letGo;\n        if (weight > ) {\n            letGo = ;\n        } else {\n            letGo = ;\n        }\n        System.out.println(letGo);\n    }\n}'
                        , contentpython: 'weight =\nletGo = False\nif weight < :\n    letGo = \nprint(letGo)'
                        , hintsjava:'Use "if (somecondition) { }" and "else { }"'
                        , hintspython:'Use "if somecondition:" and "else:"'}
            ],
            firebaseUrl: "https://codetranslate-2019.firebaseio.com/"
        }
    },
    components: {
       editor: require('vue2-ace-editor'),
    },
    methods: {
        postContents: function () {
            // comment: leaving the gatewayUrl empty - API will post back to itself
            const gatewayUrl = 'https://z1xebr7htc.execute-api.us-east-1.amazonaws.com/default/codeTranslateLambda';
            fetch(gatewayUrl, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ shown: { 0: this.solutions[this.currentTask] }, editable: { 0: this.layoutItems[this.currentTask-1].content } })
            }).then(response => {
                return response.json()
            }).then(data => {
                this.answer = JSON.parse(JSON.stringify(data))
                return this.toggleQuestionStatus(data)
            })
        },
        toggleQuestionStatus(data) {
            tryCount++;
            if (data.textFeedback) {
                const searchText = data.textFeedback
                if (searchText.includes("You got the answer")) {
                    this.correct[this.currentTask] = true;
                    this.log_event({ event: "correct", question: this.currentTask });   
                }
                else if (searchText.includes("You have missed")){
                    this.correct[this.currentTask] = false;
                    this.log_event({ event: "incorrect", question: this.currentTask });
                }
            }
        },
        getUnit(){
            this.unitCode = this.$route.params.code      
        },
        editorInit: function () {
            require('brace/ext/language_tools') //language extension prerequsite...            
            require('brace/mode/java')
            require('brace/mode/python')
            require('brace/theme/chrome')
            require('brace/snippets/javascript') //snippet
        },
        openDiscussionArea(){
            this.showDiscussionArea = true
        },
        closeDiscussionArea(){
            this.showDiscussionArea = false
        },
        toggleHints(){
            this.showHints = !this.showHints
        },
        isComplete: function(task) {
            return this.correct[task];
        },
        fetch_logs: async function() {
            let response = await fetch(this.firebaseUrl + "/logs.json");
            let data = await response.json();
            this.logs = data;
        },
        fetch_chat_logs: async function() {
            let response = await fetch("https://week9testboon.firebaseio.com/chat.json");
            let data = await response.json();
            this.chatLogs = data;
        },
        reset(){
            this.correct[this.currentTask] = false
            this.content[this.currentTask] = this.defaultContent[this.currentTask]
            tryCount = 0
        },
        insert_chat: function(){
            if (
                //do not insert rubbish comment
                !this.chatComment.includes("Comment")
            ) {
                this.insert_chat_event({name: this.chatName, comment: this.chatComment, time: this.timeStamp});
                this.chatName = "Insert Username";
                this.chatComment = "Insert Comment";
            }
        },
        insert_chat_event: function(event) {
            console.log("Logging event.");
            fetch ("https://week9testboon.firebaseio.com/chat.json", {
                method: "post",
                body: JSON.stringify(event)
            })
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    console.log("Logged event", data);
                });
        },
        log_event: function(event) {
            console.log("Logging event.");
            fetch (this.firebaseUrl + "/logs.json", {
                method: "post",
                body: JSON.stringify(event)
            })
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    console.log("Logged event", data);
                });
        },
        save_progress: async function() {
            console.log("Saving progress.");
            let progressUrl =
              this.firebaseUrl + "/progress/" + this.userkey + ".json";
            let response = await fetch(progressUrl, {
              method: "put",
              body: JSON.stringify({
                content: this.content,
                correct: this.correct
              })
            });
            let result = await response.json();
            console.log(result);
        },
        restore_progress: async function() {
            let progressUrl =
              this.firebaseUrl + "/progress/" + this.userkey + ".json";
            let response = await fetch(progressUrl);
            let data = await response.json();

            this.content = data.content;
            this.correct = data.correct;
        },
        getNow: function() {
            let today = new Date();
            let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            let dateTime = date +' '+ time;
            this.timeStamp = dateTime;
        },
    },
    created() {
        this.getUnit();
        setInterval(this.getNow, 1000);
    },
    mounted: function () {
        this.$nextTick(function () {
            window.setInterval(() => {
                this.fetch_chat_logs();
            },1000);
        })
    },
}
</script>