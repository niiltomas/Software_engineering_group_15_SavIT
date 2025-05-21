import React, { useState } from 'react';



const questions = [
  // Root
  {
    id: 1,
    text: "What type of IT issue are you experiencing?",
    options: [
      { text: "Hardware", next: 2 },
      { text: "Software", next: 3 },
      { text: "Network", next: 4 },
      { text: "Security", next: 5 }
    ]
  },
  // Hardware branch
  {
    id: 2,
    text: "Which hardware component is having issues?",
    options: [
      { text: "Computer/Laptop", next: 6 },
      { text: "Printer", next: 7 },
      { text: "Mobile Device", next: 8 },
      { text: "Peripheral", next: 9 }
    ]
  },
  {
    id: 6,
    text: "What computer/laptop issue are you experiencing?",
    options: [
      { text: "Startup", next: 22 },
      { text: "Performance", next: 23 },
      { text: "Blue Screen", next: 24 },
      { text: "Noise/Heating", next: 25 }
    ]
  },
  {
    id: 22,
    text: "What startup issue are you experiencing?",
    options: [
      { text: "No Power", next: 27 },
      { text: "Boot Loop", next: 27 },
      { text: "Black Screen", next: 27 },
      { text: "Error Message", next: 27 }
    ]
  },
  {
    id: 23,
    text: "When does the slow performance occur?",
    options: [
      { text: "Always", next: 27 },
      { text: "At Startup", next: 27 },
      { text: "With Applications", next: 27 },
      { text: "Over Time", next: 27 }
    ]
  },
  {
    id: 24,
    text: "When does the blue screen occur?",
    options: [
      { text: "Randomly", next: 27 },
      { text: "At Startup", next: 27 },
      { text: "With Applications", next: 27 },
      { text: "After Hardware Change", next: 27 }
    ]
  },
  {
    id: 25,
    text: "What noise or heating issue are you experiencing?",
    options: [
      { text: "Fan Noise", next: 27 },
      { text: "Clicking Sound", next: 27 },
      { text: "Beeping", next: 27 },
      { text: "Overheating", next: 27 }
    ]
  },
  {
    id: 7,
    text: "What printer issue are you experiencing?",
    options: [
      { text: "Not Printing", next: 27 },
      { text: "Poor Quality", next: 27 },
      { text: "Connectivity", next: 27 },
      { text: "Error Messages", next: 27 }
    ]
  },
  {
    id: 8,
    text: "What mobile device issue are you experiencing?",
    options: [
      { text: "Battery", next: 27 },
      { text: "Slow Performance", next: 27 },
      { text: "App Crashes", next: 27 },
      { text: "Connection", next: 27 }
    ]
  },
  {
    id: 9,
    text: "What peripheral issue are you experiencing?",
    options: [
      { text: "Not Detected", next: 27 },
      { text: "Intermittent", next: 27 },
      { text: "Driver Issue", next: 27 },
      { text: "Functionality", next: 27 }
    ]
  },
  // Software branch
  {
    id: 3,
    text: "What software issue are you experiencing?",
    options: [
      { text: "Operating System", next: 10 },
      { text: "Application", next: 11 },
      { text: "Update/Installation", next: 12 },
      { text: "Licensing", next: 13 }
    ]
  },
  {
    id: 10,
    text: "What operating system issue are you experiencing?",
    options: [
      { text: "Slow", next: 27 },
      { text: "Crashes", next: 27 },
      { text: "Boot Problems", next: 27 },
      { text: "Updates", next: 27 }
    ]
  },
  {
    id: 11,
    text: "What application issue are you experiencing?",
    options: [
      { text: "Crash", next: 27 },
      { text: "Slow", next: 27 },
      { text: "Error", next: 27 },
      { text: "Compatibility", next: 27 }
    ]
  },
  {
    id: 12,
    text: "What update or installation issue are you experiencing?",
    options: [
      { text: "Fails", next: 27 },
      { text: "Stuck", next: 27 },
      { text: "Errors", next: 27 },
      { text: "Want to Revert", next: 27 }
    ]
  },
  {
    id: 13,
    text: "What licensing issue are you experiencing?",
    options: [
      { text: "Expired", next: 27 },
      { text: "Activation", next: 27 },
      { text: "Transfer", next: 27 },
      { text: "Not Genuine", next: 27 }
    ]
  },
  // Network branch
  {
    id: 4,
    text: "What network issue are you experiencing?",
    options: [
      { text: "Connection", next: 14 },
      { text: "Slow", next: 15 },
      { text: "Intermittent", next: 16 },
      { text: "Specific Service", next: 17 }
    ]
  },
  {
    id: 14,
    text: "What network connection issue are you experiencing?",
    options: [
      { text: "WiFi", next: 27 },
      { text: "Ethernet", next: 27 },
      { text: "Limited", next: 27 },
      { text: "Router", next: 27 }
    ]
  },
  {
    id: 15,
    text: "When does the slow connection occur?",
    options: [
      { text: "Always", next: 27 },
      { text: "Peak Times", next: 27 },
      { text: "Specific Sites", next: 27 },
      { text: "After Some Time", next: 27 }
    ]
  },
  {
    id: 16,
    text: "When does the intermittent connection occur?",
    options: [
      { text: "Random", next: 27 },
      { text: "Specific Times", next: 27 },
      { text: "Heavy Load", next: 27 },
      { text: "Location", next: 27 }
    ]
  },
  {
    id: 17,
    text: "What service are you having trouble accessing?",
    options: [
      { text: "Email", next: 27 },
      { text: "Web", next: 27 },
      { text: "Streaming", next: 27 },
      { text: "Cloud", next: 27 }
    ]
  },
  // Security branch
  {
    id: 5,
    text: "What security concern do you have?",
    options: [
      { text: "Breach", next: 18 },
      { text: "Malware", next: 19 },
      { text: "Phishing", next: 20 },
      { text: "Access Control", next: 21 }
    ]
  },
  {
    id: 18,
    text: "What makes you suspect a data breach?",
    options: [
      { text: "Notification", next: 27 },
      { text: "Suspicious Activity", next: 27 },
      { text: "Unauthorized Changes", next: 27 },
      { text: "Data Exposed", next: 27 }
    ]
  },
  {
    id: 19,
    text: "What malware symptoms are you experiencing?",
    options: [
      { text: "Slow", next: 27 },
      { text: "Popups", next: 27 },
      { text: "Browser Issues", next: 27 },
      { text: "Ransomware", next: 27 }
    ]
  },
  {
    id: 20,
    text: "What suspicious email issue are you experiencing?",
    options: [
      { text: "Clicked Link", next: 27 },
      { text: "Opened Attachment", next: 27 },
      { text: "Provided Info", next: 27 },
      { text: "Want to Verify", next: 27 }
    ]
  },
  {
    id: 21,
    text: "What access control issue are you experiencing?",
    options: [
      { text: "Password", next: 27 },
      { text: "Locked Account", next: 27 },
      { text: "Permissions", next: 27 },
      { text: "Multi-factor", next: 27 }
    ]
  },
  // Final question
  {
    id: 27,
    text: "Thank you! Your answers have been recorded. Our team will assist you soon.",
    options: []
  }
];

function Questionnaire() {
  const [current, setCurrent] = useState(1); // Start at root

  const q = questions.find(q => q.id === current);

  if (!q) return <div>Thank you! We'll process your answers.</div>;

  return (
    <div style={{ padding: 24 }}>
      <h2>{q.text}</h2>
      <div>
        {q.options.map((opt, idx) => (
          <button
            key={idx}
            style={{ display: 'block', margin: '12px 0' }}
            onClick={() => setCurrent(opt.next)}
          >
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Questionnaire;
