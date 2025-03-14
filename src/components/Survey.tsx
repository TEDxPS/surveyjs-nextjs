'use client'

import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'
import 'survey-core/survey-core.css'
import { json } from '../../data/survey_json.js'
import { ThreeDimensionalLight,ThreeDimensionalDark } from "survey-core/themes";
import { appendToGoogleSheet, getSheetHeaders } from '@/libs/googleSheets'
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleSignIn from './GoogleSignIn';

export default function SurveyComponent() {
  const model = new Model(json);
  model.applyTheme(ThreeDimensionalDark);
  const handleGoogleSuccess = async (credential:string) => {
    // Use this credential for sheet access
    console.log('Google Sign-in successful:', credential);
    // Store the credential for later use
    sessionStorage.setItem('googleCredential', credential);
  };

  model.onComplete.add(async(survey, options) => {
    options.showSaveInProgress();
    console.log(survey.data);

    try {
      const SHEET_ID = '';
      const RANGE = 'Sheet1'; // or your specific sheet name
      const API_KEY = ''
      // First, get the headers
      const headers = await getSheetHeaders(SHEET_ID, `${RANGE}!1:1`, API_KEY);
      
      // Map survey data to match headers
      const rowData = headers.map((header: string) => {
        if (header === 'timestamp') {
          return new Date().toISOString();
        }
        // Remove spaces and convert to lowercase for reliable matching
        const normalizedHeader = header.toLowerCase().replace(/\s+/g, '');
        return survey.data[normalizedHeader] || '';
      });
      const credential = sessionStorage.getItem('googleCredential');
      await appendToGoogleSheet(SHEET_ID, RANGE, API_KEY, [rowData], credential || '');
      options.showSaveSuccess();
    } catch (error) {
      console.error('Failed to save survey results:', error);
      options.showSaveError();
    }
  });
  return (
    // <GoogleOAuthProvider clientId="">
      /* <GoogleSignIn onSuccess={handleGoogleSuccess} /> */
      <Survey model={model}/>
  // </GoogleOAuthProvider> 
 );
}
