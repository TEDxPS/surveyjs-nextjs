'use client'

import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'
import 'survey-core/survey-core.css'
import { json } from '../../data/survey_json.js'
import { ThreeDimensionalLight,ThreeDimensionalDarkPanelless } from "survey-core/themes";

export default function SurveyComponent() {
  const model = new Model(json);
  model.applyTheme(ThreeDimensionalLight);

  return (
    <Survey model={model}/>
  );
}
