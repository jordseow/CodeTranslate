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
          <h5 class="text-dark font-weight-bold" align="center">While and For Loops</h5>
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
                    v-else-if="this.tryCount[currentTask-1] != 0"
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
      text: "",
      output: "",
      solutions: {
        1: 'public class Main {    \n    public static void main(String[] args) {\n        System.out.println("Hello World!");\n    }\n}',
        2: 'public class Main {    \n    public static void main(String[] args) {\n        //System.out.println("Coding is hard");\n        System.out.println("Coding is really fun!");\n    }\n}',
        3: "public class Main {    \n    public static void main(String[] args) {\n        int x = 5;\n        System.out.println(x);\n    }\n}",
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
        { value: "java", text: "Java" },
        { value: "python", text: "Python" }
      ],
      defaultLayoutItems: [
        {
          task:
            'After letting the first little pig go, he ran to find his brother, the second little pig. Feeling hungry, you decided to go find the second little pig. The second little pig had built a house of straw. "Little pigs, little pigs, let me in". The house of straw will take you 10 huffs and puffs to blow it down. Use a while loop to blow the house down, after each blow you will shout "Huff and Puff!".',
          contentjava:
            "public class Main {    \n    public static void main(String[] args) {\n        int numberOfHuffsPuffs = ;\n        while (numberOfHuffsPuffs < ) {\n            System.out.println();\n            numberOfHuffsPuffs;\n        }\n    }\n}",
          contentpython:
            "number_of_huffs_puffs = \nwhile (number_of_huffs_puffs < ):\n    print()\n    number_of_huffs_puffs",
          hintsjava:
            'Use "while (somecondition { }" and you can use the shorthand variable++ which is the same as variable += 1',
          hintspython: '"Use while (somecondition):"'
        },
        {
          task:
            'Surprisingly, the second little pig managed to reinforce the house of straw with mud! It was still upright after 10 huffs and puffs. Angry and hungry, you decided to throw rocks at the door. You do not know how many rocks it takes to break the door. You will run out of energy after throwing 20 rocks. When you are out of energy, you will say "I\'m tired...".',
          contentjava:
            "public class Main {    \n    public static void main(String[] args) {\n        int numberOfRocksThrown = ;\n        while (numberOfRocksThrown < ) {\n            numberOfRocksThrown;\n        }\n        System.out.println();\n    }\n}",
          contentpython:
            "number_of_rocks_thrown = \nwhile (number_of_rocks_thrown < ):\n    number_of_rocks_thrown\nprint()",
          hintsjava:
            'Use "while (somecondition { }" and you can use the shorthand variable++ which is the same as variable += 1',
          hintspython: '"Use while (somecondition):"'
        },
        {
          task:
            'While you were resting outside the straw house, the 2 little pigs escaped to find their older brother, the third little pig. The next morning, you made your way to the third little pig\'s house, which is made of bricks. You decided to knock on the door 10 times, producing a "Bang!" with each knock.',
          contentjava:
            "public class Main {    \n    public static void main(String[] args) {\n        int i;\n        for (i = ; i < ; i) {\n            System.out.println();\n        }\n    }\n}",
          contentpython: "for i in range( , ):\n    print()",
          hintsjava: "for (initialisation; condition; iteration)",
          hintspython: "for i in range(start, stop, step):"
        },
        {
          task:
            "There was no reply. Are the pigs in the brick house? You decided to count the number of pairs of shoes outside the house to see if all the pigs are in. Mr Wolf is bad with counting, he has to count it out loud. Complete the code to count out the numbers from 1 to 3.",
          contentjava:
            "public class Main {    \n    public static void main(String[] args) {\n        int numberOfShoes = 1;\n        int i;\n        for (i = ; i < ; i) {\n            System.out.println();\n            numberOfShoes;\n        }\n    }\n}",
          contentpython:
            "number_of_shoes = 1\nfor i in range( , ):\n    print()\n    number_of_shoes",
          hintsjava:
            "for (initialisation; condition; iteration), also in Java you can use the shorthand variable++ which is the same as variable += 1",
          hintspython: "for i in range(start, stop, step):"
        },
        {
          task:
            'Bingo! All of them are in the house and they are probably still sound asleep. Though you are bad with counting, you are good with locks! You broke the lock of the door. You can\'t wait to start your feast! You will take 3 big bites to completely devour a pig, saying "Yummy!" with each bite. After finishing up each pig, you will celebrate with your paws up in the air and exclaiming "One down!". Complete the code to see what Mr Wolf said when he finished eating 3 pigs.',
          contentjava:
            "public class Main {    \n    public static void main(String[] args) {\n        int numberOfPigs = 3;\n        int numberOfBites = 3;\n        for (int i = ; i < ; i) {\n            for (int j = ; j < ; j) {\n                System.out.println();\n            }\n            System.out.println();\n        }\n    }\n}",
          contentpython:
            "number_of_pigs = 3\nnumber_of_bites = 3\nfor i in range( , ):\n    for j in range( , ):\n        print()\n    print()",
          hintsjava: "for (initialisation; condition; iteration)",
          hintspython: "for i in range(start, stop, step):"
        }
      ],
      layoutItems: [
        {
          task:
            'After letting the first little pig go, he ran to find his brother, the second little pig. Feeling hungry, you decided to go find the second little pig. The second little pig had built a house of straw. "Little pigs, little pigs, let me in". The house of straw will take you 10 huffs and puffs to blow it down. Use a while loop to blow the house down, after each blow you will shout "Huff and Puff!".',
          contentjava:
            "public class Main {    \n    public static void main(String[] args) {\n        int numberOfHuffsPuffs = ;\n        while (numberOfHuffsPuffs < ) {\n            System.out.println();\n            numberOfHuffsPuffs;\n        }\n    }\n}",
          contentpython:
            "number_of_huffs_puffs = \nwhile (number_of_huffs_puffs < ):\n    print()\n    number_of_huffs_puffs",
          hintsjava:
            'Use "while (somecondition { }" and you can use the shorthand variable++ which is the same as variable += 1',
          hintspython: '"Use while (somecondition):"',
          solutionjava:
            'publicclassMain{publicstaticvoidmain(String[]args){intnumberOfHuffsPuffs=0;while(numberOfHuffsPuffs<10){System.out.println();numberOfHuffsPuffs++;}}}',
          solutionpython: 'number_of_huffs_puffs = 0 \nwhile (number_of_huffs_puffs < 10):\n    print("Huff and Puff")\n    number_of_huffs_puffs += 1',
          hiddenCode: ["Huff and Puff!"]
        },
        {
          task:
            'Surprisingly, the second little pig managed to reinforce the house of straw with mud! It was still upright after 10 huffs and puffs. Angry and hungry, you decided to throw rocks at the door. You do not know how many rocks it takes to break the door. You will run out of energy after throwing 20 rocks. When you are out of energy, you will say "I\'m tired...".',
          contentjava:
            "public class Main {    \n    public static void main(String[] args) {\n        int numberOfRocksThrown = ;\n        while (numberOfRocksThrown < ) {\n            numberOfRocksThrown;\n        }\n        System.out.println();\n    }\n}",
          contentpython:
            "number_of_rocks_thrown = \nwhile (number_of_rocks_thrown < ):\n    number_of_rocks_thrown\nprint()",
          hintsjava:
            'Use "while (somecondition { }" and you can use the shorthand variable++ which is the same as variable += 1',
          hintspython: '"Use while (somecondition):"',
          solutionjava:
            'publicclassMain{publicstaticvoidmain(String[]args){intnumberOfRocksThrown=0;while(numberOfRocksThrown<20){numberOfRocksThrown++;}System.out.println();}}',
          solutionpython: 'number_of_rocks_thrown = 0\nwhile (number_of_rocks_thrown < 20):\n    number_of_rocks_thrown\nprint("I\'m tired...")',
          hiddenCode: []
        },
        {
          task:
            'While you were resting outside the straw house, the 2 little pigs escaped to find their older brother, the third little pig. The next morning, you made your way to the third little pig\'s house, which is made of bricks. You decided to knock on the door 10 times, producing a "Bang!" with each knock.',
          contentjava:
            "public class Main {    \n    public static void main(String[] args) {\n        int i;\n        for (i = ; i < ; i) {\n            System.out.println();\n        }\n    }\n}",
          contentpython: "for i in range( , ):\n    print()",
          hintsjava: "for (initialisation; condition; iteration)",
          hintspython: "for i in range(start, stop, step):",
          solutionjava:
             'publicclassMain{publicstaticvoidmain(String[]args){inti;for(i=0;i<10;i++){System.out.println();}}}',
          solutionpython: 'for i in range(0, 10):\n    print("Bang!")',
          hiddenCode: []
        },
        {
          task:
            "There was no reply. Are the pigs in the brick house? You decided to count the number of pairs of shoes outside the house to see if all the pigs are in. Mr Wolf is bad with counting, he has to count it out loud. Complete the code to count out the numbers from 1 to 3.",
          contentjava:
            "public class Main {    \n    public static void main(String[] args) {\n        int numberOfShoes = 1;\n        int i;\n        for (i = ; i < ; i) {\n            System.out.println();\n            numberOfShoes;\n        }\n    }\n}",
          contentpython:
            "number_of_shoes = 1\nfor i in range( , ):\n    print()\n    number_of_shoes",
          hintsjava:
            "for (initialisation; condition; iteration), also in Java you can use the shorthand variable++ which is the same as variable += 1",
          hintspython: "for i in range(start, stop, step):",
          solutionjava:
            'publicclassMain{publicstaticvoidmain(String[]args){intnumberOfShoes=1;inti;for(i=0;i<3;i++){System.out.println(numberOfShoes);numberOfShoes++;}}}',
          solutionpython: "number_of_shoes = 1\nfor i in range(0, 3):\n    print(number_of_shoes)\n    number_of_shoes += 1",
          hiddenCode: []
        },
        {
          task:
            'Bingo! All of them are in the house and they are probably still sound asleep. Though you are bad with counting, you are good with locks! You broke the lock of the door. You can\'t wait to start your feast! You will take 3 big bites to completely devour a pig, saying "Yummy!" with each bite. After finishing up each pig, you will celebrate with your paws up in the air and exclaiming "One down!". Complete the code to see what Mr Wolf said when he finished eating 3 pigs.',
          contentjava:
            "public class Main {    \n    public static void main(String[] args) {\n        int numberOfPigs = 3;\n        int numberOfBites = 3;\n        for (int i = ; i < ; i) {\n            for (int j = ; j < ; j) {\n                System.out.println();\n            }\n            System.out.println();\n        }\n    }\n}",
          contentpython:
            "number_of_pigs = 3\nnumber_of_bites = 3\nfor i in range( , ):\n    for j in range( , ):\n        print()\n    print()",
          hintsjava: "for (initialisation; condition; iteration)",
          hintspython: "for i in range(start, stop, step):",
          solutionjava:
            'publicclassMain{publicstaticvoidmain(String[]args){intnumberOfPigs=3;intnumberOfBites=3;for(inti=0;i<numberOfPigs;i++){for(intj=0;j<numberOfBites;j++){System.out.println();}System.out.println();}}}',
          solutionpython: 'number_of_pigs = 3\nnumber_of_bites = 3\nfor i in range(0, 3):\n    for j in range(0, 3):\n        print("Yummy!")\n    print("One down!")',
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
        body: JSON.stringify({ shown: { 0: answer }, editable: { 0: content } , hidden: { 0: {dialogCode:this.layoutItems[this.currentTask - 1].hiddenCode, type:'java'} } })
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
