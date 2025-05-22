import React from 'react';
import { questions } from './Questionnaire'; // Make sure to export questions from Questionnaire.jsx


function buildAIPrompt(answers, questions) {
  let prompt = "The user has reported an IT issue with the following details:\n";
  answers.forEach(({ questionId, answer }) => {
    const q = questions.find(q => q.id === questionId);
    if (q) {
      prompt += `\n${q.text}\n- ${answer}\n`;
    }
  });
  prompt += "\nPlease provide a helpful solution or next steps.";
  return prompt;
}


export default function Solution({ answers }) {
  const prompt = buildAIPrompt(answers, questions);


  return (
    <div style={{ padding: 24 }}>
      <h2>Your AI Solution</h2>
      <h3>AI Prompt:</h3>
      <pre>{prompt}</pre>
      {/* You can now send `prompt` to your AI API */}
    </div>
  );
}
