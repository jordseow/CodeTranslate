<template>
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
            <d-button @click="openDiscussionArea" size="lg" class="font-weight-bold bg-blue-hr text-dark float-right">
                    Discuss
            </d-button>
        </d-col>
    </d-row>
    <d-row class="mt-5">
        <d-col class="text-center" v-for="index in 5" :key="index">
            <d-button block-level size="lg" class='bg-blue-v' >
                <span class="text-dark font-weight-bold">
                    Question {{ index }}
                </span>
            </d-button>
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
                <d-col class="mt-5 pt-5">
                    <h4>Task</h4>
                    <h5>Print “Hello, world!”</h5>
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
                    <d-button @click="toggleHints" size="lg" class="font-weight-bold bg-blue-hr text-dark">
                            Hints
                    </d-button>
                    </popper>
                </d-col>
                <d-col>
                    <d-button size="lg" class="font-weight-bold bg-blue-hr text-dark" @click="runCode">
                            Run
                    </d-button>
                </d-col>
            </d-row>
        </d-col>
        <d-col>
            <h4>Input Code</h4>
                <editor v-model="content" @init="editorInit" :lang="translateFrom" theme="chrome" style="width:100%;"></editor>
        </d-col>
        <d-col>
            <h4>Output</h4>
            <d-form-textarea v-model="text" style="min-height:400px"
                :rows="3"
                :max-rows="6">
            </d-form-textarea>
            <d-button block-level size="lg" class="mt-2 font-weight-bold bg-blue-hr text-dark">
                    Reset
            </d-button>
        </d-col>
    </d-row>

</d-container>
</template>
<script>
  import Popper from 'vue-popperjs';
  import 'vue-popperjs/dist/vue-popper.css';
export default {
    data() {
        return {
            unitCode: '',
            translateFrom: 'java',
            translateTo: 'java',
            showDiscussionArea: false,
            showHints: false,
            originUrl: '',

            questions: [],
            currentTask: '',
            text: '',
            content: "public class Main {    \n    public static void main(String[] args) {\n        // Your code here\n    }\n}",

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
            }
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
        }
    },
    created() {
        this.getUnit()
    },
}
</script>