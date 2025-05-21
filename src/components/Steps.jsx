import React from 'react';

const steps = [
  {
    number: 1,
    title: 'Answer Questions',
    desc: 'Quickly respond to a few targeted questions about your specific IT issue.',
  },
  {
    number: 2,
    title: 'Add Details',
    desc: "Provide any additional context or specific error messages you've encountered.",
  },
  {
    number: 3,
    title: 'Get Your Solution',
    desc: 'Receive a customized solution with step-by-step instructions to fix your issue.',
  },
];

export default function Steps() {
  return (
    <section className="steps">
      {steps.map(step => (
        <div key={step.number} className="step">
          <div className="step__number">{step.number}</div>
          <div className="step__title">{step.title}</div>
          <p className="step__desc">{step.desc}</p>
        </div>
      ))}
    </section>
  );
}