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
            <h6 class="text-dark font-weight-bold" align="center">
                    {{topic[unitCode]}}
            </h6>
        </d-col>
        <d-col class="">
        <div class="discuss bg-yellow-radial" v-if="showDiscussionArea">
            <a @click="closeDiscussionArea" href="#" class="close-icon m-2"></a>
            <span class="triangle-bottom-right"></span>
            <div class="chats">
                <div class="row msg" v-for="(index) in 10" :key="index">
                    <div class="col-3">
                        <p class="m-0">23/9/19 5.23 pm</p>
                        <p>User #312359</p>
                    </div>
                    <div class="col-8">
                        <p>
                            Hello all! My code is not compiling. I’m translating from Python
                         to Java.. Is anyone facing the same problem?
                         <pre>
                            class Node{
                                head;
                                data;
                                ..
                            }
                            </pre> 
                        </p>

                    </div>
                </div>
            </div>
            <div class="sender">
            <d-input-group class="px-2 mb-1">
              <d-form-input size="lg" type="text" placeholder="Enter message"></d-form-input>
              <d-form-input size="lg" type="text" placeholder="Enter Username(optional)"></d-form-input>
              <d-button outline squared theme="dark" size="lg" class="ml-2">Enter</d-button>
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
    <d-row class="mt-5">
        <d-col>
            <d-row>
                <d-col>
                    <h5>Question</h5>
                    <d-input-group class="mb-2">
                    <d-form-select v-model="translateFrom" :options="languages" />
                    </d-input-group>
                </d-col>
                <d-col>
                    <h5>Input</h5>
                    <d-input-group class="mb-2">
                    <d-form-select v-model="translateTo" :options="languages" />
                    </d-input-group>                    
                </d-col>
            </d-row>

            <d-row>
                <d-col class="pt-5">
                    <h4 class="font-weight-bold">Task:</h4>
                    <span style="color:black"> <strong>{{ tasks[currentTask] }}</strong> </span>
                </d-col>
            </d-row>

            <d-row class="mt-5 pt-5">
                <d-col>
                    <div class="hints p-2 rounded bg-yellow-linear" v-if="showHints">
                        <p><strong>To print in Python, we use</strong><p>
                        <span>print(“your string here”)</span>

                        <p><strong>To print in Java, we use</strong></p>
                        <span>System.out.println(“your string here”)</span>
                        <div class="triangle-bottom-left bg-yellow-linear"></div>
                    </div>
                    <d-button theme="info" @click="toggleHints" size="lg" class="font-weight-bold text-dark">
                            Hints
                    </d-button>
                </d-col>
                <d-col>
                    <d-button theme="warning"@click="check()" size="lg" class="font-weight-bold text-dark" >
                            Run
                    </d-button>
                </d-col>
            </d-row>
        </d-col>
        <d-col>
            <h4>Input Code</h4>
                <editor v-model="content[currentTask]" @init="editorInit" :lang="translateTo" theme="chrome" style="width:100%;"></editor>

        </d-col>
        <d-col>
            <h4>Output</h4>
            <span v-if="isComplete(currentTask)" class="font-weight-bold" style="color:green">
                Great Job!
                
            </span>
            <span v-else-if="!isComplete(currentTask)" class="font-weight-bold" style="color:red">
                Try Again!
            </span>
            <d-button theme="info" @click="reset" block-level size="lg" class="mt-2 font-weight-bold text-dark">
                    Reset
            </d-button>
        </d-col>
    </d-row>
    <br/>
    <br/>
    <hr />
    <h6 style="color:white">Enter your unique code below to save or restore your progress</h6>
      <input v-model="userkey" size="30" />
      <br/>
      <br/>
      <d-button theme="warning" @click="save_progress()" class="font-weight-bold">Save</d-button>
      <d-button theme="warning" @click="restore_progress()" class="font-weight-bold">Restore</d-button>
      <hr />

</d-container>
</v-container>
</template>
<script>
export default {
    data() {
        return {
            logs: {},
            userkey: "",
            topic: {
                11: "Print Statements and Commenting",
                12: "Declaring Variables",
                13: "If-Else Statements",
                14: "While Statements",
                15: "For Statements"
            },
            unitCode: '',
            questions: [1,2,3,4,5],
            translateFrom: 'python',
            translateTo: 'java',
            showDiscussionArea: false,
            showHints: false,
            originUrl: '',
            tasks: {
                1: 'Print “Hello World!”',
                2: 'Prevent printing “Coding is hard” by commenting it out.',
                3: 'Print the value of x.',
                4: 'Comment out all the error-causing code using multi-line commenting.',
                5: 'Print (“Hello World!”) using string concatenation.'
                },
            currentTask: 1,
            text: '',
            content: {
                1: 'public class Main {    \n    public static void main(String[] args) {\n        // Your code here\n    }\n}',
                2: 'public class Main {    \n    public static void main(String[] args) {\n        System.out.println("Coding is hard");\n        System.out.println("Coding is really fun!");\n    }\n}',
                3: 'public class Main {    \n    public static void main(String[] args) {\n        int x = 5;\n        // Your code here\n    }\n}',
                4: 'public class Main {    \n    public static void main(String[] args) {\n        harlo harlo\n        java is hard\n        System.out.println("Hello World!");\n    }\n}',
                5: 'public class Main {    \n    public static void main(String[] args) {\n        String x = "Hello ";\n        String y = "World!";\n        // Your code here\n    }\n}'
            },
            defaultContent: {
                1: 'public class Main {    \n    public static void main(String[] args) {\n        // Your code here\n    }\n}',
                2: 'public class Main {    \n    public static void main(String[] args) {\n        System.out.println("Coding is hard");\n        System.out.println("Coding is really fun!");\n    }\n}',
                3: 'public class Main {    \n    public static void main(String[] args) {\n        int x = 5;\n        // Your code here\n    }\n}',
                4: 'public class Main {    \n    public static void main(String[] args) {\n        harlo harlo\n        java is hard\n        System.out.println("Hello World!");\n    }\n}',
                5: 'public class Main {    \n    public static void main(String[] args) {\n        String x = "Hello ";\n        String y = "World!";\n        // Your code here\n    }\n}'
            },
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
               // { value: 'c_cpp', text: 'C++' },
               // { value: 'javascript', text: 'Javascript' }
            ],
            starterCode: {
                "java": "public class Main {    \n    public static void main(String[] args) {\n        // Your code here\n    }\n}",
                "python": "print(#Your code here)",
                //"c_cpp": "#include <iostream>\nusing namespace std;\nint main() \n{\n    cout << //Your code here\n    return 0;\n}",
                //"javascript": "alert( //Your code here );"
            },
            firebaseUrl: "https://codetranslate-2019.firebaseio.com/"
        }
    },
    components: {
       editor: require('vue2-ace-editor'),
    },
    methods: {
        getUnit(){
            this.unitCode = this.$route.params.code      
        },
        editorInit: function () {
            require('brace/ext/language_tools') //language extension prerequsite...            
            require('brace/mode/javascript')    //language
            require('brace/mode/java')
            require('brace/mode/python')
            require('brace/mode/c_cpp') 
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
        check: function() {
            if (
                this.content[this.currentTask] === this.solutions[this.currentTask]
            ) {
                this.correct[this.currentTask] = true;
                this.log_event({ event: "correct", question: this.currentTask });
            } else {
                this.correct[this.currentTask] = false;
                this.log_event({ event: "incorrect", question: this.currentTask });
            }
            this.fetch_logs();
        },
        fetch_logs: async function() {
            let response = await fetch(this.firebaseUrl + "/logs.json");
            let data = await response.json();
            this.logs = data;
        },
        reset(){
            this.correct[this.currentTask] = false
            this.content[this.currentTask] = this.defaultContent[this.currentTask]
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
    },
    created() {
        this.getUnit()
    },
}
</script>