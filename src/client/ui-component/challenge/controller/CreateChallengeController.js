import CreateChallengeView from "../view/CreateChallengeView"
// import CreateChallengeService from '../service/CreateChallengeService';

export default class CreateChallengeController {
  static displaySideBar() {
    CreateChallengeView.createSidebar()
  }

  static saveChallengeDetails(evnt) {
    evnt.preventDefault()
    const topicName = document.getElementById("topic").value
    const challengeName = document.getElementById("challengeName").value

    const ques1 = document.getElementById("ques1").value
    const ques1opt1 = document.getElementById("ques1opt1").value
    const ques1opt2 = document.getElementById("ques1opt2").value
    const ques1opt3 = document.getElementById("ques1opt3").value
    const ques1opt4 = document.getElementById("ques1opt4").value
    const ques1ans = document.getElementById("ques1ans").value

    const ques2 = document.getElementById("ques2").value
    const ques2opt1 = document.getElementById("ques2opt1").value
    const ques2opt2 = document.getElementById("ques2opt2").value
    const ques2opt3 = document.getElementById("ques2opt3").value
    const ques2opt4 = document.getElementById("ques2opt4").value
    const ques2ans = document.getElementById("ques2ans").value

    const ques3 = document.getElementById("ques3").value
    const ques3opt1 = document.getElementById("ques3opt1").value
    const ques3opt2 = document.getElementById("ques3opt2").value
    const ques3opt3 = document.getElementById("ques3opt3").value
    const ques3opt4 = document.getElementById("ques3opt4").value
    const ques3ans = document.getElementById("ques3ans").value

    const ques4 = document.getElementById("ques4").value
    const ques4opt1 = document.getElementById("ques4opt1").value
    const ques4opt2 = document.getElementById("ques4opt2").value
    const ques4opt3 = document.getElementById("ques4opt3").value
    const ques4opt4 = document.getElementById("ques4opt4").value
    const ques4ans = document.getElementById("ques4ans").value

    const ques5 = document.getElementById("ques5").value
    const ques5opt1 = document.getElementById("ques5opt1").value
    const ques5opt2 = document.getElementById("ques5opt2").value
    const ques5opt3 = document.getElementById("ques5opt3").value
    const ques5opt4 = document.getElementById("ques5opt4").value
    const ques5ans = document.getElementById("ques5ans").value

    const ques6 = document.getElementById("ques6").value
    const ques6opt1 = document.getElementById("ques6opt1").value
    const ques6opt2 = document.getElementById("ques6opt2").value
    const ques6opt3 = document.getElementById("ques6opt3").value
    const ques6opt4 = document.getElementById("ques6opt4").value
    const ques6ans = document.getElementById("ques6ans").value

    const ques7 = document.getElementById("ques7").value
    const ques7opt1 = document.getElementById("ques7opt1").value
    const ques7opt2 = document.getElementById("ques7opt2").value
    const ques7opt3 = document.getElementById("ques7opt3").value
    const ques7opt4 = document.getElementById("ques7opt4").value
    const ques7ans = document.getElementById("ques7ans").value

    const challengeJsonObj = `{
"challengeId":"",
"topicName": ${topicName},
"challengeName": ${challengeName},
"questions":[{
              "question": ${ques1},
              "options":[
                          "optionA": ${ques1opt1},
                          "optionB": ${ques1opt2},
                          "optionC" ${ques1opt3},
                          "optionD": ${ques1opt4}
                        ],
                "answer": ${ques1ans}
              },
              {
                "question": ${ques2},
                "options":[
                            "optionA": ${ques2opt1},
                            "optionB": ${ques2opt2},
                            "optionC": ${ques2opt3},
                            "optionD": ${ques2opt4}
                          ],
                  "answer": ${ques2ans}
                },
                {
                  "question": ${ques3},
                  "options":[
                              "optionA": ${ques3opt1},
                              "optionB": ${ques3opt2},
                              "optionC": ${ques3opt3},
                              "optionD": ${ques3opt4}
                            ],
                    "answer": ${ques3ans}
                  },
                  {
                    "question": ${ques4},
                    "options":[
                                "optionA": ${ques4opt1},
                                "optionB": ${ques4opt2},
                                "optionC": ${ques4opt3},
                                "optionD": ${ques4opt4}
                              ],
                      "answer": ${ques4ans}
                    },
                    {
                      "question": ${ques5},
                      "options":[
                                  "optionA": ${ques5opt1},
                                  "optionB": ${ques5opt2},
                                  "optionC": ${ques5opt3},
                                  "optionD": ${ques5opt4}
                                ],
                        "answer": ${ques5ans}
                      },
                      {
                        "question": ${ques6},
                        "options":[
                                    "optionA": ${ques6opt1},
                                    "optionB": ${ques6opt2},
                                    "optionC": ${ques6opt3},
                                    "optionD": ${ques6opt4}
                                  ],
                          "answer": ${ques6ans}
                        },
                        {
                          "question": ${ques7},
                          "options":[
                                      "optionA": ${ques7opt1},
                                      "optionB": ${ques7opt2},
                                      "optionC": ${ques7opt3},
                                      "optionD": ${ques7opt4}
                                    ],
                            "answer": ${ques7ans}
                          }
            ]
    }`
    console.log(`challengeJsonObj is:${challengeJsonObj}`)
    // CreateChallengeService.storeChallenge(challengeJsonObj);
  }
}
