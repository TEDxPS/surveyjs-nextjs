'use client'

import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'
import 'survey-core/survey-core.css'
import { json } from '../../data/survey_json.js'
import { ThreeDimensionalLight,ThreeDimensionalDark } from "survey-core/themes";

export default function SurveyComponent() {
  const model = new Model(json);
  model.applyTheme(ThreeDimensionalDark);
  model.onComplete.add((survey, options) => {
    options.showSaveInProgress();
    console.log(survey.data);

    // const dataObj = { postId: surveyPostId, surveyResult: resultAsStr };
    // const dataStr = JSON.stringify(dataObj);
    // const headers = new Headers({ "Content-Type": "application/json; charset=utf-8" });
    // fetch(surveyServiceUrl + "/post/", {
    //   method: "POST",
    //   body: dataStr,
    //   headers: headers
    // }).then(response => {
    //   if (!response.ok) {
    //     throw new Error("Could not post the survey results");
    //   }
    //   // Display the "Success" message (pass a string value to display a custom message)
    //   options.showSaveSuccess();
    //   // Alternatively, you can clear all messages:
    //   // options.clearSaveMessages();
    // }).catch(error => {
    //   // Display the "Error" message (pass a string value to display a custom message)
    //   options.showSaveError();
    //   console.log(error);
    // });
  });
  return (
    <Survey model={model}/>
  );
}
