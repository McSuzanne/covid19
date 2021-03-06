export default function (incomingUrl, incomingPrompt) {
  let surveyUrl = 'https://www.surveymonkey.com/r/T2V3FMJ?source=covid';
  if(incomingUrl) {
    surveyUrl = incomingUrl;
  }
  let surveyPrompt = 'Please take 2 minutes to complete our COVID-19 survey';
  if(incomingPrompt) {
    surveyPrompt = incomingPrompt;
  }
  return `<div role="alert">
    <div class="survey">
      <div class="survey-content">
        <p class="survey-content-prompt">${surveyPrompt}</p>
        <button class="action-link pt-2 pb-2 px-4 survey-content-dismiss js-dismiss-survey" type="button" aria-label="Close" data-dismiss="alert"><span aria-hidden="true">Dismiss</span></button>
        <a href="${surveyUrl}" target="_new" class="action-link pt-2 pb-2 px-4 survey-content-go js-goto-survey"><button type="button" aria-label="Open survey" data-dismiss="alert"><span aria-hidden="true">OK</span></button></a>
      </div>
    </div>
  </div>`;
}