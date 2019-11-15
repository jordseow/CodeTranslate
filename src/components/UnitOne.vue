<template>
  <v-container>
    <img class="pr-5 pt-3 float-left pl-4" src="@/assets/codetranslatelogo.png" height="90" />
    <d-container class="dr-example-container h-100">
      <d-row class="pt-5">
        <d-col>
          <router-link to="/home">
            <d-button size="lg" class="font-weight-bold" theme="warning">Back</d-button>
          </router-link>
        </d-col>
        <d-col>
          <h1>CodeTranslate</h1>
          <h5
            class="text-dark font-weight-bold"
            align="center"
          >Printing, Commenting, Declaring Variables and If-Else</h5>
        </d-col>
        <d-col class>
          <div class="discuss bg-yellow-radial" v-if="showDiscussionArea">
            <a @click="closeDiscussionArea" href="#" class="close-icon m-2"></a>
            <span class="triangle-bottom-right"></span>
            <div class="chats">
              <div class="row msg" v-for="chatLog in chatLogs">
                <div class="col-3">
                  <p style="color:black" class="m-0">{{chatLog.time}}</p>
                  <p style="color:black">{{chatLog.name}}</p>
                </div>
                <div class="col-8">
                  <p style="color:black">
                    <strong>{{chatLog.comment}}</strong>
                  </p>
                </div>
              </div>
            </div>
            <div class="sender">
              <d-input-group class="px-2 mb-1">
                <d-form-input size="lg" type="text" v-model="chatComment"></d-form-input>
                <d-form-input size="lg" type="text" v-model="chatName"></d-form-input>
                <d-button @click="insert_chat" theme="primary" size="lg" class="ml-2">Enter</d-button>
              </d-input-group>
            </div>
          </div>
          <d-button
            @click="openDiscussionArea"
            size="lg"
            theme="info"
            class="font-weight-bold float-right"
          >
            <span style="color:black">Discuss</span>
          </d-button>
        </d-col>
      </d-row>
      <d-row class="mt-5">
        <d-col class="text-center" v-for="question in questions" :key="index">
          <span v-if="isComplete(question)">
            <d-button pill theme="success" @click="currentTask=question" block-level size="lg">
              <span class="text-dark font-weight-bold">Question {{ question }}</span>
            </d-button>
          </span>
          <span v-else-if="question===currentTask">
            <d-button block-level size="lg" pill theme="light">
              <span class="text-dark font-weight-bold">Question {{ question }}</span>
            </d-button>
          </span>
          <span v-else>
            <d-button pill theme="primary" @click="currentTask=question" block-level size="lg">
              <span class="font-weight-bold">Question {{ question }}</span>
            </d-button>
          </span>
        </d-col>
      </d-row>
      <d-row class="mt-5 pb-5">
        <d-col class="col-5">
          <d-row>
            <d-col class="col-5">
              <h5>
                <strong>Input Language</strong>
              </h5>
              <d-input-group class="mb-2">
                <d-form-select v-model="translateTo" :options="languages" />
              </d-input-group>
            </d-col>
          </d-row>

          <d-row>
            <d-col class="pt-5">
              <h4 class="font-weight-bold">Task:</h4>
              <span style="color:black">
                <strong>{{ layoutItems[currentTask-1].task }}</strong>
              </span>
            </d-col>
          </d-row>

          <d-row class="mt-5 pt-5">
            <d-col>
              <div class="hints p-2 rounded bg-yellow-linear" v-if="showHints">
                <p style="color:black">
                  <strong>In Python:</strong>
                </p>
                <p>
                  <span style="color:black">{{ layoutItems[currentTask-1].hintspython }}</span>
                </p>
                <p style="color:black">
                  <strong>In Java:</strong>
                </p>
                <span style="color:black">{{ layoutItems[currentTask-1].hintsjava }}</span>
                <div class="triangle-bottom-left bg-yellow-linear"></div>
              </div>
              <d-button theme="info" @click="toggleHints" class="font-weight-bold text-dark">Hints</d-button>
            </d-col>
          </d-row>
        </d-col>
        <d-col>
          <h4>
            <strong>Input Code</strong>
          </h4>
          <span v-if="translateTo=='java'">
            <editor
              v-model="layoutItems[currentTask-1].contentjava"
              @init="editorInit"
              :lang="translateTo"
              theme="chrome"
              style="width:100%;"
            ></editor>
          </span>
          <span v-else>
            <editor
              v-model="layoutItems[currentTask-1].contentpython"
              @init="editorInit"
              :lang="translateTo"
              theme="chrome"
              style="width:100%;"
            ></editor>
          </span>
          <br />
          <d-button
            theme="warning"
            @click="postContents()"
            block-level
            size="lg"
            class="font-weight-bold text-dark"
          >Run</d-button>
        </d-col>
      </d-row>
      <br />
      <div align="center" class="margin:auto">
        <d-row class="mt-5 pt-5">
          <d-col>
            <h4>
              <strong>Output</strong>
            </h4>
            <div class="px-5 overflow-auto" style="width: 60%">
              <b-card class="text-center">
                <div class="bg-light pt-3 pb-3">
                  <span
                    v-if="isComplete(currentTask)"
                    class="font-weight-bold"
                    style="color:green"
                  >{{this.output}}</span>
                  <span
                    v-else-if="this.output != ''"
                    class="font-weight-bold"
                    style="color:red"
                  >{{this.output}}</span>
                  <span v-else-if="this.tryCount[currentTask-1] === 0"></span>
                </div>
              </b-card>
            </div>

            <br />
            <d-button
              theme="info"
              @click="reset"
              size="lg"
              class="mt-3 font-weight-bold text-dark"
            >Reset</d-button>
          </d-col>
        </d-row>
      </div>

      <br />
      <br />
      <hr />
      <h6 style="color:white">Enter your unique code below to save or restore your progress</h6>
      <input v-model="userkey" size="30" />
      <br />
      <br />
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
      tryCount: [0, 0, 0, 0, 0],
      unitCode: "",
      questions: [1, 2, 3, 4, 5],
      translateFrom: "python",
      translateTo: "java",
      showDiscussionArea: false,
      showHints: false,
      originUrl: "",
      currentTask: 1,
      output: "",
      text: "",
      correct: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false
      },
      languages: [
        { value: "java", text: "Java" },
        { value: "python", text: "Python" }
      ],
      defaultLayoutItems: [
        {
          task:
            'Mama Pig told her 3 little pigs: "go seek out your fortune". The 3 little pigs ventured out together to build their own houses. You are Mr Wolf. You spotted the first little pig building a house of straw. You decided to pay him a visit. At the doorstep, you wanted the first little pig to let you in. In the editable code block, add in a line to print out "Little pig, little pig, let me come in".',
          contentjava:
            "public class Main {    \n    public static void main(String[] args) {\n        // Your code here\n    }\n}",
          contentpython: "",
          hintsjava: 'System.out.println("") is used to print',
          hintspython: 'print("") is used to print'
        },
        {
          task:
            "Because you are Mr Wolf, the first little pig refused to open the door. Comment out the wrong reply.",
          contentjava:
            'public class Main {    \n    public static void main(String[] args) {\n        System.out.println("No, no, by the hair on my chinny chin chin");\n        System.out.println("Welcome in, Mr Wolf!");\n    }\n}',
          contentpython:
            'print("No, no, by the hair on my chinny chin chin")\nprint("Welcome in, Mr Wolf!")',
          hintsjava: "You use // for line comment in Java",
          hintspython: "You use # to comment in Python"
        },
        {
          task:
            "You know that you can easily blow the straw house down in 3 huffs and puffs. You gave the first little pig a warning... Change the editable code block so that it prints out the correct number of huffs and puffs.",
          contentjava:
            'public class Main {    \n    public static void main(String[] args) {\n        int numberOfHuffsPuffs;\n        System.out.println("Open the door now or I will huff and puff " \n                + numberOfHuffsPuffs \n                + " times and blow your house in!");\n    }\n}',
          contentpython:
            '# Uncomment the line below and assign an appropriate value to the variable\n# number_of_huffs_puffs = \nprint("Open the door now or I will huff and puff " + number_of_huffs_puffs + " times and blow your house in!")',
          hintsjava:
            "You have to indicate the data type before the variable name (e.g. int, boolean, String, double)",
          hintspython:
            "You can declare the variable without having to indicate the data type"
        },
        {
          task:
            'You decided to wait 5 minutes before making your next move. Edit the java code below so that: If the door is closed after 5 mins, print "I am blowing your house in!" Else eat the first little pig by printing "I will eat you now!"',
          contentjava:
            'public class Main {    \n    public static void main(String[] args) {\n        // Do not edit code here\n        boolean doorClosed = true;\n\n        // After 5 minutes\n        // Edit code below\n        if () {\n            //\n        } else {\n            //\n        }\n    }\n}',
          contentpython:
            'door_closed = True\n\n# After 5 minutes\n# Edit code below\nif :\n    #\nelse:\n    #',
          hintsjava: 'Use "if (somecondition) { }" and "else { }"',
          hintspython: 'Use "if somecondition:" and "else:"'
        },
        {
          task:
            "After blowing the house down, you see the first little pig curled up in the corner, helpless. Being the softhearted Mr Wolf you are, you decided that you would only: If he is more than 50kg, eat him. Else you will let him go. The pig is 30kg. Fill up the code and: Return true if you eat the pig. Return false if you let him go.",
          contentjava:
            'public class Main {    \n    public static void main(String[] args) {\n        int weight;\n        boolean letGo;\n        if (weight > ) {\n            letGo = ;\n        } else {\n            letGo = ;\n        }\n        System.out.println(letGo);\n    }\n}',
          contentpython:
            'weight =\nletGo = False\nif weight < :\n    letGo = \nprint(letGo)',
          hintsjava: 'Use "if (somecondition) { }" and "else { }"',
          hintspython: 'Use "if somecondition:" and "else:"\n    You can set boolean values as "True" or "False"'
        }
      ],
      layoutItems: [
        {
          task:
            'Mama Pig told her 3 little pigs: "go seek out your fortune". The 3 little pigs ventured out together to build their own houses. You are Mr Wolf. You spotted the first little pig building a house of straw. You decided to pay him a visit. At the doorstep, you wanted the first little pig to let you in. In the editable code block, add in a line to print out "Little pig, little pig, let me come in".',
          contentjava:
            "public class Main {    \n    public static void main(String[] args) {\n        // Your code here\n    }\n}",
          contentpython: "",
          hintsjava: 'System.out.println("") is used to print',
          hintspython: 'print("") is used to print',
          solutionjava: 'publicclassMain{publicstaticvoidmain(String[]args){System.out.println()}}',
          solutionpython: 'print("Little pig, little pig, let me come in")',
          hiddenCode: ["Little pig, little pig, let me come in"]
        },
        {
          task:
            "Because you are Mr Wolf, the first little pig refused to open the door. Comment out the wrong reply.",
          contentjava:
            'public class Main {    \n    public static void main(String[] args) {\n        System.out.println("No, no, by the hair on my chinny chin chin");\n        System.out.println("Welcome in, Mr Wolf!");\n    }\n}',
          contentpython:
            'print("No, no, by the hair on my chinny chin chin")\nprint("Welcome in, Mr Wolf!")',
          hintsjava: "You use // for line comment in Java",
          hintspython: "You use # to comment in Python",
          solutionjava: 'publicclassMain{publicstaticvoidmain(String[]args){System.out.println();}}',
          solutionpython: 'print("No, no, by the hair on my chinny chin chin")\n#print("Welcome in, Mr Wolf!")',
          hiddenCode: ["No, no, by the hair on my chinny chin chin"]
        },
        {
          task:
            "You know that you can easily blow the straw house down in 3 huffs and puffs. You gave the first little pig a warning... Change the editable code block so that it prints out the correct number of huffs and puffs.",
          contentjava:
            'public class Main {    \n    public static void main(String[] args) {\n        int numberOfHuffsPuffs;\n        System.out.println("Open the door now or I will huff and puff " \n                + numberOfHuffsPuffs \n                + " times and blow your house in!");\n    }\n}',
          contentpython:
            '# Uncomment the line below and assign an appropriate value to the variable\n# number_of_huffs_puffs = \nprint("Open the door now or I will huff and puff " + number_of_huffs_puffs + " times and blow your house in!")',
          hintsjava:
            "You have to indicate the data type before the variable name (e.g. int, boolean, String, double)",
          hintspython:
            "You can declare the variable without having to indicate the data type",
          solutionjava: 'publicclassMain{publicstaticvoidmain(String[]args){intnumberOfHuffsPuffs=3;System.out.println(+numberOfHuffsPuffs+);}}',
          solutionpython: '# Uncomment the line below and assign an appropriate value to the variable\n# number_of_huffs_puffs = 3\nprint("Open the door now or I will huff and puff " + number_of_huffs_puffs + " times and blow your house in!")',
          hiddenCode: ["Open the door now or I will huff and puff ", " times and blow your house in!"]
        },
        {
          task:
            'You decided to wait 5 minutes before making your next move. Edit the java code below so that: If the door is closed after 5 mins, print "I am blowing your house in!" Else eat the first little pig by printing "I will eat you now!"',
          contentjava:
            'public class Main {    \n    public static void main(String[] args) {\n        // Do not edit code here\n        boolean doorClosed = true;\n\n        // After 5 minutes\n        // Edit code below\n        if () {\n            //\n        } else {\n            //\n        }\n    }\n}',
          contentpython:
            'door_closed = True\n\n# After 5 minutes\n# Edit code below\nif :\n    #\nelse:\n    #',
          hintsjava: 'Use "if (somecondition) { }" and "else { }"',
          hintspython: 'Use "if somecondition:" and "else:"',
          solutionjava: 'publicclassMain{publicstaticvoidmain(String[]args){booleandoorClosed=true;if(doorClosed){System.out.println();}else{System.out.println();}}}',
          solutionpython: 'door_closed = True\n\n# After 5 minutes\n# Edit code below\nif door_closed:\n    print("I am blowing your house in!")\nelse:\n    print("I will eat you now!")',
          hiddenCode: ["I am blowing your house in!", "I will eat you now!"]
        },
        {
          task:
            "After blowing the house down, you see the first little pig curled up in the corner, helpless. Being the softhearted Mr Wolf you are, you decided that you would only: If he is more than 50kg, eat him. Else you will let him go. The pig is 30kg. Fill up the code and: Return true if you eat the pig. Return false if you let him go.",
          contentjava:
            'public class Main {    \n    public static void main(String[] args) {\n        int weight;\n        boolean letGo;\n        if (weight > ) {\n            letGo = ;\n        } else {\n            letGo = ;\n        }\n        System.out.println(letGo);\n    }\n}',
          contentpython:
            'weight =\nletGo = False\nif weight < :\n    letGo = \nprint(letGo)',
          hintsjava: 'Use "if (somecondition) { }" and "else { }"',
          hintspython: 'Use "if somecondition:" and "else:"\n    You can set boolean values as "True" or "False"',
          solutionjava: 'publicclassMain{publicstaticvoidmain(String[]args){intweight=30;booleanletGo;if(weight>50){letGo=false;}else{letGo=true;}System.out.println(letGo);}}',
          solutionpython: 'weight = 30\nletGo = False\nif weight < 50:\n    letGo = True\nprint(letGo)',
          hiddenCode: []
        }
      ],
      firebaseUrl: "https://codetranslate-2019.firebaseio.com/"
    };
  },
  components: {
    editor: require("vue2-ace-editor")
  },
  methods: {
    postContents: async function() {
      // comment: leaving the gatewayUrl empty - API will post back to itself
      const gatewayUrl =
        "https://0nlvhj3sia.execute-api.us-east-1.amazonaws.com/default/findCompile";
      let content = "";
      let answer = "";
      if (this.translateTo === "java") {
        content = this.layoutItems[this.currentTask - 1].contentjava;
        answer = this.layoutItems[this.currentTask - 1].solutionjava;
      } else {
        content = this.layoutItems[this.currentTask - 1].contentpython;
        answer = this.layoutItems[this.currentTask - 1].solutionpython;
      }
      await fetch(gatewayUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ shown: { 0: answer }, editable: { 0: content } , hidden: { 0: {dialogCode:this.layoutItems[this.currentTask - 1].hiddenCode, type:this.translateTo} } })
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.answer = JSON.parse(JSON.stringify(data));
          console.log(data);
          this.output = data.textFeedback;
          return this.toggleQuestionStatus(data);
        });
    },
    toggleQuestionStatus(data) {
      this.tryCount[this.currentTask - 1]++;
      if (data.textFeedback) {
        const searchText = data.textFeedback;
        if (searchText.includes("You got the answer")) {
          this.correct[this.currentTask] = true;
          this.log_event({ event: "correct", question: this.currentTask });
        } else {
          this.correct[this.currentTask] = false;
          this.log_event({ event: "incorrect", question: this.currentTask });
        }
      }
    },
    getUnit() {
      this.unitCode = this.$route.params.code;
    },
    editorInit: function() {
      require("brace/ext/language_tools"); //language extension prerequsite...
      require("brace/mode/java");
      require("brace/mode/python");
      require("brace/theme/chrome");
      require("brace/snippets/javascript"); //snippet
    },
    openDiscussionArea() {
      this.showDiscussionArea = true;
    },
    closeDiscussionArea() {
      this.showDiscussionArea = false;
    },
    toggleHints() {
      this.showHints = !this.showHints;
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
      let response = await fetch(
        this.firebaseUrl + "/chat.json"
      );
      let data = await response.json();
      this.chatLogs = data;
    },
    reset() {
      this.correct[this.currentTask] = false;
      if (this.translateTo === "java") {
        this.layoutItems[
          this.currentTask - 1
        ].contentjava = this.defaultLayoutItems[
          this.currentTask - 1
        ].contentjava;
      } else {
        this.layoutItems[
          this.currentTask - 1
        ].contentpython = this.defaultLayoutItems[
          this.currentTask - 1
        ].contentpython;
      }
      this.tryCount[this.currentTask - 1] = 0;
    },
    insert_chat: function() {
      if (
        //do not insert rubbish comment
        !this.chatComment.includes("Comment")
      ) {
        this.insert_chat_event({
          name: this.chatName,
          comment: this.chatComment,
          time: this.timeStamp
        });
        this.chatName = "Insert Username";
        this.chatComment = "Insert Comment";
      }
    },
    insert_chat_event: function(event) {
      console.log("Logging event.");
      fetch(this.firebaseUrl + "/chat.json", {
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
      fetch(this.firebaseUrl + "/logs.json", {
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
      if (this.translateTo === "java") {
        console.log("Saving progress.");
        let progressUrl =
          this.firebaseUrl + "/progress/" + this.userkey + ".json";
        let response = await fetch(progressUrl, {
          method: "put",
          body: JSON.stringify({
            contentjava: this.layoutItems[this.currentTask - 1].contentjava,
            correct: this.correct
          })
        });
        let result = await response.json();
        console.log(result);
      } else {
        console.log("Saving progress.");
        let progressUrl =
          this.firebaseUrl + "/progress/" + this.userkey + ".json";
        let response = await fetch(progressUrl, {
          method: "put",
          body: JSON.stringify({
            contentpython: this.layoutItems[this.currentTask - 1].contentpython,
            correct: this.correct
          })
        });
        let result = await response.json();
        console.log(result);
      }
    },
    restore_progress: async function() {
      let progressUrl =
        this.firebaseUrl + "/progress/" + this.userkey + ".json";
      let response = await fetch(progressUrl);
      let data = await response.json();
      this.layoutItems[this.currentTask - 1].contentjava = data.contentjava;
      this.layoutItems[this.currentTask - 1].contentpython = data.contentpython;
      this.correct = data.correct;
    },
    getNow: function() {
      let today = new Date();
      let date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      let time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      let dateTime = date + " " + time;
      this.timeStamp = dateTime;
    }
  },
  created() {
    this.getUnit();
    setInterval(this.getNow, 1000);
  },
  mounted: function() {
    this.$nextTick(function() {
      window.setInterval(() => {
        this.fetch_chat_logs();
      }, 1000);
    });
  }
};
</script>