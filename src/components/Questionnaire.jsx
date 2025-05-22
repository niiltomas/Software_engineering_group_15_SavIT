import React, { useState } from 'react';
import Solution from './Solution';
import './Questionnaire.css';

const questions = [
  // Root
  {
    id: 1,
    text: "What type of IT issue are you experiencing?",
    options: [
      { text: "Hardware problem", next: 2 },
      { text: "Software problem", next: 3 },
      { text: "Network/Internet issue", next: 4 },
      { text: "Security concern", next: 5 }
    ]
  },
  {
    id: 2,
    text: "Which hardware component is having issues?",
    options: [
      { text: "Computer/Laptop", next: 6 },
      { text: "Printer/Scanner", next: 7 },
      { text: "Mobile Device", next: 8 },
      { text: "Other Peripheral", next: 9 }
    ]
  },
  {
    id: 3,
    text: "What software issue are you experiencing?",
    options: [
      { text: "Operating System", next: 10 },
      { text: "Application/Program", next: 11 },
      { text: "Updates/Installation", next: 12 },
      { text: "Licensing/Activation", next: 13 }
    ]
  },
  {
    id: 4,
    text: "What network issue are you experiencing?",
    options: [
      { text: "Can't connect to network", next: 14 },
      { text: "Slow connection", next: 15 },
      { text: "Intermittent connection", next: 16 },
      { text: "Can't access specific service", next: 17 }
    ]
  },
  {
    id: 5,
    text: "What security concern do you have?",
    options: [
      { text: "Potential data breach", next: 18 },
      { text: "Virus/Malware", next: 19 },
      { text: "Phishing/Suspicious email", next: 20 },
      { text: "Access control issue", next: 21 }
    ]
  },
  {
    id: 6,
    text: "What computer/laptop issue are you experiencing?",
    options: [
      { text: "Won't start up", next: 22 },
      { text: "Slow performance", next: 23 },
      { text: "Blue screen/crashes", next: 24 },
      { text: "Strange noise/overheating", next: 25 }
    ]
  },
  {
    id: 7,
    text: "What printer issue are you experiencing?",
    options: [
      { text: "Not printing", next: 26 },
      { text: "Poor print quality", next: 27 },
      { text: "Connectivity issues", next: 28 },
      { text: "Error messages", next: 29 }
    ]
  },
  {
    id: 8,
    text: "What mobile device issue are you experiencing?",
    options: [
      { text: "Battery problems", next: 30 },
      { text: "Slow performance", next: 31 },
      { text: "App crashes", next: 32 },
      { text: "Connection issues", next: 33 }
    ]
  },
  {
    id: 9,
    text: "What peripheral issue are you experiencing?",
    options: [
      { text: "Device not detected", next: 34 },
      { text: "Intermittent connection", next: 35 },
      { text: "Driver issues", next: 36 },
      { text: "Not functioning properly", next: 37 }
    ]
  },
  {
    id: 10,
    text: "What operating system issue are you experiencing?",
    options: [
      { text: "Slow performance", next: 38 },
      { text: "System crashes", next: 39 },
      { text: "Boot problems", next: 40 },
      { text: "Update issues", next: 41 }
    ]
  },
  {
    id: 11,
    text: "What application issue are you experiencing?",
    options: [
      { text: "Application crashes", next: 42 },
      { text: "Slow performance", next: 43 },
      { text: "Error messages", next: 44 },
      { text: "Compatibility issues", next: 45 }
    ]
  },
  {
    id: 12,
    text: "What update or installation issue are you experiencing?",
    options: [
      { text: "Installation fails", next: 46 },
      { text: "Update stuck", next: 47 },
      { text: "Error messages", next: 48 },
      { text: "Need to revert update", next: 49 }
    ]
  },
  {
    id: 13,
    text: "What licensing issue are you experiencing?",
    options: [
      { text: "License expired", next: 50 },
      { text: "Can't activate", next: 51 },
      { text: "License transfer", next: 52 },
      { text: "Genuine software concerns", next: 53 }
    ]
  },
  {
    id: 14,
    text: "What network connection issue are you experiencing?",
    options: [
      { text: "WiFi won't connect", next: 54 },
      { text: "Ethernet connection issues", next: 55 },
      { text: "Limited connectivity", next: 56 },
      { text: "Router problems", next: 57 }
    ]
  },
  {
    id: 15,
    text: "When does the slow connection occur?",
    options: [
      { text: "Always slow", next: 58 },
      { text: "During peak hours", next: 59 },
      { text: "Only for specific websites", next: 60 },
      { text: "After being on for a while", next: 61 }
    ]
  },
  {
    id: 16,
    text: "When does the intermittent connection occur?",
    options: [
      { text: "Randomly throughout the day", next: 62 },
      { text: "At specific times", next: 63 },
      { text: "Under heavy load", next: 64 },
      { text: "In certain locations", next: 65 }
    ]
  },
  {
    id: 17,
    text: "What service are you having trouble accessing?",
    options: [
      { text: "Email", next: 66 },
      { text: "Websites", next: 67 },
      { text: "Streaming services", next: 68 },
      { text: "Cloud storage", next: 69 }
    ]
  },
  {
    id: 18,
    text: "What makes you suspect a data breach?",
    options: [
      { text: "Received notification", next: 70 },
      { text: "Suspicious activity", next: 71 },
      { text: "Unauthorized changes", next: 72 },
      { text: "Found data exposed", next: 73 }
    ]
  },
  {
    id: 19,
    text: "What malware symptoms are you experiencing?",
    options: [
      { text: "Slow computer", next: 74 },
      { text: "Pop-ups and ads", next: 75 },
      { text: "Browser hijacking", next: 76 },
      { text: "Ransomware message", next: 77 }
    ]
  },
  {
    id: 20,
    text: "What suspicious email issue are you experiencing?",
    options: [
      { text: "Clicked suspicious link", next: 78 },
      { text: "Opened suspicious attachment", next: 79 },
      { text: "Provided information", next: 80 },
      { text: "Need to verify if email is legitimate", next: 81 }
    ]
  },
  {
    id: 21,
    text: "What access control issue are you experiencing?",
    options: [
      { text: "Password problems", next: 82 },
      { text: "Account locked", next: 83 },
      { text: "Permission issues", next: 84 },
      { text: "Multi-factor authentication", next: 85 }
    ]
  },
  {
    id: 22,
    text: "What startup issue are you experiencing?",
    options: [
      { text: "No power/lights", next: 86 },
      { text: "Boot loop", next: 86 },
      { text: "Black screen", next: 86 },
      { text: "Error message", next: 86 }
    ]
  },
  {
    id: 23,
    text: "When does the slow performance occur?",
    options: [
      { text: "Always slow", next: 86 },
      { text: "During startup", next: 86 },
      { text: "When running applications", next: 86 },
      { text: "Gets slower over time", next: 86 }
    ]
  },
  {
    id: 24,
    text: "When does the blue screen occur?",
    options: [
      { text: "Randomly", next: 86 },
      { text: "During startup", next: 86 },
      { text: "When using specific applications", next: 86 },
      { text: "After hardware changes", next: 86 }
    ]
  },
  {
    id: 25,
    text: "What noise or heating issue are you experiencing?",
    options: [
      { text: "Fan noise", next: 86 },
      { text: "Clicking or grinding", next: 86 },
      { text: "Beeping sounds", next: 86 },
      { text: "Device gets very hot", next: 86 }
    ]
  },{
  id: 26,
  text: "What happens when you try to print?",
  options: [
    { text: "Nothing happens", next: 86 },
    { text: "Stuck in print queue", next: 86 },
    { text: "Printer shows offline", next: 86 },
    { text: "Error light on printer", next: 86 }
  ]
},
{
  id: 27,
  text: "What print quality issues are you facing?",
  options: [
    { text: "Faded output", next: 86 },
    { text: "Lines or streaks", next: 86 },
    { text: "Smudged prints", next: 86 },
    { text: "Missing sections", next: 86 }
  ]
},
{
  id: 28,
  text: "What type of connectivity issue?",
  options: [
    { text: "Wired connection not detected", next: 86 },
    { text: "Can't connect wirelessly", next: 86 },
    { text: "Intermittent connection", next: 86 },
    { text: "Driver not installed", next: 86 }
  ]
},
{
  id: 29,
  text: "What error message do you see?",
  options: [
    { text: "Paper jam", next: 86 },
    { text: "Low ink/toner", next: 86 },
    { text: "Printer offline", next: 86 },
    { text: "Unknown error code", next: 86 }
  ]
},
{
  id: 30,
  text: "What battery issue are you facing?",
  options: [
    { text: "Battery drains quickly", next: 86 },
    { text: "Won't charge", next: 86 },
    { text: "Battery overheating", next: 86 },
    { text: "Battery swelling", next: 86 }
  ]
},
{
  id: 31,
  text: "When does the phone slow down?",
  options: [
    { text: "Always", next: 86 },
    { text: "When using apps", next: 86 },
    { text: "On startup", next: 86 },
    { text: "Gradually over time", next: 86 }
  ]
},
{
  id: 32,
  text: "What kind of app crashes are you facing?",
  options: [
    { text: "Only certain apps", next: 86 },
    { text: "Randomly crashes", next: 86 },
    { text: "Apps freeze", next: 86 },
    { text: "Apps close unexpectedly", next: 86 }
  ]
},
{
  id: 33,
  text: "What connection issues are on your device?",
  options: [
    { text: "WiFi disconnects", next: 86 },
    { text: "Mobile data doesn't work", next: 86 },
    { text: "Bluetooth not working", next: 86 },
    { text: "Airplane mode stuck", next: 86 }
  ]
},
{
  id: 34,
  text: "Which device isn't detected?",
  options: [
    { text: "USB drive", next: 86 },
    { text: "Mouse/Keyboard", next: 86 },
    { text: "Monitor", next: 86 },
    { text: "Other", next: 86 }
  ]
},
{
  id: 35,
  text: "How does the connection drop?",
  options: [
    { text: "Randomly", next: 86 },
    { text: "When moved", next: 86 },
    { text: "After reboot", next: 86 },
    { text: "After sleep mode", next: 86 }
  ]
},
{
  id: 36,
  text: "What driver issue are you facing?",
  options: [
    { text: "Missing driver", next: 86 },
    { text: "Outdated driver", next: 86 },
    { text: "Driver conflict", next: 86 },
    { text: "Driver failed to install", next: 86 }
  ]
},
{
  id: 37,
  text: "What functionality issue are you facing?",
  options: [
    { text: "Inputs not registering", next: 86 },
    { text: "Display not working", next: 86 },
    { text: "Slow response", next: 86 },
    { text: "Random malfunction", next: 86 }
  ]
},
{
  id: 38,
  text: "What happens when the OS is slow?",
  options: [
    { text: "Slow during startup", next: 86 },
    { text: "Slow in general", next: 86 },
    { text: "Slow when opening apps", next: 86 },
    { text: "Laggy UI", next: 86 }
  ]
},
{
  id: 39,
  text: "What type of crashes are you experiencing?",
  options: [
    { text: "Random crashes", next: 86 },
    { text: "Crashes with specific tasks", next: 86 },
    { text: "Freezes then reboots", next: 86 },
    { text: "Blue screen", next: 86 }
  ]
},
{
  id: 40,
  text: "What kind of boot problems are you facing?",
  options: [
    { text: "Hangs during boot", next: 86 },
    { text: "Restarts during boot", next: 86 },
    { text: "OS not found", next: 86 },
    { text: "Takes too long", next: 86 }
  ]
},
{
  id: 41,
  text: "What kind of update issue are you having?",
  options: [
    { text: "Update won't start", next: 86 },
    { text: "Fails midway", next: 86 },
    { text: "Stuck in reboot loop", next: 86 },
    { text: "Keeps rolling back", next: 86 }
  ]
},
{
  id: 42,
  text: "What kind of sound issue are you facing?",
  options: [
    { text: "No sound at all", next: 86 },
    { text: "Distorted sound", next: 86 },
    { text: "Sound too low", next: 86 },
    { text: "Audio device not recognized", next: 86 }
  ]
},
{
  id: 43,
  text: "What kind of network issue are you experiencing?",
  options: [
    { text: "No connection", next: 86 },
    { text: "Intermittent connection", next: 86 },
    { text: "Very slow connection", next: 86 },
    { text: "Wi-Fi not detected", next: 86 }
  ]
},
{
  id: 44,
  text: "What kind of screen issue do you have?",
  options: [
    { text: "Black screen", next: 86 },
    { text: "Screen flickering", next: 86 },
    { text: "Wrong resolution", next: 86 },
    { text: "Color problems", next: 86 }
  ]
},
{
  id: 45,
  text: "What type of login issue are you encountering?",
  options: [
    { text: "Password not accepted", next: 86 },
    { text: "Freezes at login screen", next: 86 },
    { text: "User profile not found", next: 86 },
    { text: "Keeps returning to login", next: 86 }
  ]
},
{
  id: 46,
  text: "What kind of power issue are you having?",
  options: [
    { text: "Computer won't turn on", next: 86 },
    { text: "Shuts down randomly", next: 86 },
    { text: "Battery not charging", next: 86 },
    { text: "Overheating and shutting down", next: 86 }
  ]
},
{
  id: 47,
  text: "Are you having keyboard issues?",
  options: [
    { text: "Keyboard not working", next: 86 },
    { text: "Wrong characters showing", next: 86 },
    { text: "Input delay", next: 86 },
    { text: "Some keys not responsive", next: 86 }
  ]
},
{
  id: 48,
  text: "Are you having mouse or touchpad issues?",
  options: [
    { text: "Mouse not responding", next: 86 },
    { text: "Cursor lag", next: 86 },
    { text: "Erratic cursor movement", next: 86 },
    { text: "Click not working", next: 86 }
  ]
},
{
  id: 49,
  text: "Do you have issues with external devices?",
  options: [
    { text: "USB devices not recognized", next: 86 },
    { text: "External monitor not detected", next: 86 },
    { text: "Printer not working", next: 86 },
    { text: "Other peripheral issue", next: 86 }
  ]
},
{
  id: 50,
  text: "Are there storage-related problems?",
  options: [
    { text: "Drive not detected", next: 86 },
    { text: "Low disk space", next: 86 },
    { text: "Read/write errors", next: 86 },
    { text: "Slow access to files", next: 86 }
  ]
},
{
  id: 51,
  text: "What kind of app-related issue is it?",
  options: [
    { text: "App won't open", next: 86 },
    { text: "App crashes", next: 86 },
    { text: "App not updating", next: 86 },
    { text: "App is slow", next: 86 }
  ]
},
{
  id: 52,
  text: "Are you having software compatibility issues?",
  options: [
    { text: "Software won't install", next: 86 },
    { text: "Compatibility errors", next: 86 },
    { text: "Legacy software problems", next: 86 },
    { text: "Missing dependencies", next: 86 }
  ]
},
{
  id: 53,
  text: "Are you facing performance drops during gaming?",
  options: [
    { text: "Low FPS", next: 86 },
    { text: "Stuttering gameplay", next: 86 },
    { text: "Game crashes", next: 86 },
    { text: "Graphics glitches", next: 86 }
  ]
},
{
  id: 54,
  text: "Do you have virtualization-related issues?",
  options: [
    { text: "VM not starting", next: 86 },
    { text: "VM performance issues", next: 86 },
    { text: "Host crashes when VM runs", next: 86 },
    { text: "VM network issues", next: 86 }
  ]
},
{
  id: 55,
  text: "What kind of printer issue are you facing?",
  options: [
    { text: "Printer won't print", next: 86 },
    { text: "Paper jam", next: 86 },
    { text: "Low print quality", next: 86 },
    { text: "Printer not detected", next: 86 }
  ]
},
{
  id: 56,
  text: "What kind of software installation issue do you have?",
  options: [
    { text: "Installation fails", next: 86 },
    { text: "Missing files error", next: 86 },
    { text: "Compatibility issues", next: 86 },
    { text: "License key problems", next: 86 }
  ]
},
{
  id: 57,
  text: "What type of malware problem do you suspect?",
  options: [
    { text: "Slow performance", next: 86 },
    { text: "Popups or ads", next: 86 },
    { text: "Unauthorized access", next: 86 },
    { text: "File corruption", next: 86 }
  ]
},
{
  id: 58,
  text: "What type of browser problem are you experiencing?",
  options: [
    { text: "Slow loading pages", next: 86 },
    { text: "Browser crashes", next: 86 },
    { text: "Extension problems", next: 86 },
    { text: "Security warnings", next: 86 }
  ]
},
{
  id: 59,
  text: "What type of external device issue do you have?",
  options: [
    { text: "Device not detected", next: 86 },
    { text: "Driver errors", next: 86 },
    { text: "Connection problems", next: 86 },
    { text: "Device won't power on", next: 86 }
  ]
},
{
  id: 60,
  text: "What kind of file access issue are you facing?",
  options: [
    { text: "Permission denied", next: 86 },
    { text: "File not found", next: 86 },
    { text: "File is corrupt", next: 86 },
    { text: "Slow access to files", next: 86 }
  ]
},
{
  id: 61,
  text: "What kind of backup issue are you encountering?",
  options: [
    { text: "Backup fails", next: 86 },
    { text: "Restore fails", next: 86 },
    { text: "Backup is slow", next: 86 },
    { text: "No backups available", next: 86 }
  ]
},
{
  id: 62,
  text: "What kind of security alert are you receiving?",
  options: [
    { text: "Virus detected", next: 86 },
    { text: "Unauthorized login attempt", next: 86 },
    { text: "Firewall blocking access", next: 86 },
    { text: "Phishing warning", next: 86 }
  ]
},
{
  id: 63,
  text: "What type of email issue are you experiencing?",
  options: [
    { text: "Cannot send emails", next: 86 },
    { text: "Cannot receive emails", next: 86 },
    { text: "Spam emails", next: 86 },
    { text: "Email login error", next: 86 }
  ]
},
{
  id: 64,
  text: "What kind of software update issue do you have?",
  options: [
    { text: "Update fails", next: 86 },
    { text: "Partial update installed", next: 86 },
    { text: "Update rolls back", next: 86 },
    { text: "Update not available", next: 86 }
  ]
},
{
  id: 65,
  text: "What type of hardware failure are you noticing?",
  options: [
    { text: "Disk failure", next: 86 },
    { text: "Memory failure", next: 86 },
    { text: "CPU overheating", next: 86 },
    { text: "GPU failure", next: 86 }
  ]
},
{
  id: 66,
  text: "What kind of Bluetooth issue are you facing?",
  options: [
    { text: "Cannot pair devices", next: 86 },
    { text: "Connection lost frequently", next: 86 },
    { text: "Device not found", next: 86 },
    { text: "Slow file transfer", next: 86 }
  ]
},
{
  id: 67,
  text: "What kind of USB problem are you experiencing?",
  options: [
    { text: "USB device not recognized", next: 86 },
    { text: "USB power issues", next: 86 },
    { text: "Slow transfer speeds", next: 86 },
    { text: "Frequent disconnects", next: 86 }
  ]
},
{
  id: 68,
  text: "What type of app crash are you experiencing?",
  options: [
    { text: "Crashes on start", next: 86 },
    { text: "Crashes during use", next: 86 },
    { text: "App freezes", next: 86 },
    { text: "Slow response", next: 86 }
  ]
},
{
  id: 69,
  text: "What type of touchscreen problem are you facing?",
  options: [
    { text: "Touchscreen not responding", next: 86 },
    { text: "Ghost touches", next: 86 },
    { text: "Calibration issues", next: 86 },
    { text: "Partial touchscreen response", next: 86 }
  ]
},
{
  id: 70,
  text: "What kind of software licensing issue do you have?",
  options: [
    { text: "Activation failed", next: 86 },
    { text: "License expired", next: 86 },
    { text: "Invalid license key", next: 86 },
    { text: "Cannot verify license", next: 86 }
  ]
},
{
  id: 71,
  text: "What type of file synchronization issue are you encountering?",
  options: [
    { text: "Sync fails", next: 86 },
    { text: "Partial sync", next: 86 },
    { text: "File conflicts", next: 86 },
    { text: "Slow sync", next: 86 }
  ]
},
{
  id: 72,
  text: "What kind of virtual machine issue are you facing?",
  options: [
    { text: "VM won't start", next: 86 },
    { text: "VM crashes", next: 86 },
    { text: "Slow VM performance", next: 86 },
    { text: "Network issues in VM", next: 86 }
  ]
},
{
  id: 73,
  text: "What kind of cloud storage issue do you have?",
  options: [
    { text: "Cannot upload files", next: 86 },
    { text: "Cannot download files", next: 86 },
    { text: "Sync errors", next: 86 },
    { text: "Access denied", next: 86 }
  ]
},
{
  id: 74,
  text: "What kind of DNS issue are you experiencing?",
  options: [
    { text: "Cannot resolve domain names", next: 86 },
    { text: "Slow DNS resolution", next: 86 },
    { text: "DNS errors", next: 86 },
    { text: "Wrong IP address returned", next: 86 }
  ]
},
{
  id: 75,
  text: "What type of VPN issue are you facing?",
  options: [
    { text: "Cannot connect to VPN", next: 86 },
    { text: "VPN disconnects frequently", next: 86 },
    { text: "Slow VPN speed", next: 86 },
    { text: "Authentication errors", next: 86 }
  ]
},
{
  id: 76,
  text: "What type of firewall issue are you experiencing?",
  options: [
    { text: "Firewall blocking apps", next: 86 },
    { text: "Cannot disable firewall", next: 86 },
    { text: "False positive blocks", next: 86 },
    { text: "Configuration errors", next: 86 }
  ]
},
{
  id: 77,
  text: "What type of data corruption are you seeing?",
  options: [
    { text: "File corruption", next: 86 },
    { text: "Database errors", next: 86 },
    { text: "System files corrupted", next: 86 },
    { text: "Random crashes", next: 86 }
  ]
},
{
  id: 78,
  text: "What type of BIOS issue are you facing?",
  options: [
    { text: "Cannot access BIOS", next: 86 },
    { text: "Wrong BIOS settings", next: 86 },
    { text: "BIOS update fails", next: 86 },
    { text: "Boot issues related to BIOS", next: 86 }
  ]
},
{
  id: 79,
  text: "What kind of software compatibility issue do you have?",
  options: [
    { text: "Software won't install", next: 86 },
    { text: "Software won't run", next: 86 },
    { text: "Missing features", next: 86 },
    { text: "Software crashes", next: 86 }
  ]
},
{
  id: 80,
  text: "What kind of password issue are you encountering?",
  options: [
    { text: "Forgot password", next: 86 },
    { text: "Password expired", next: 86 },
    { text: "Password not accepted", next: 86 },
    { text: "Error resetting password", next: 86 }
  ]
},
{
  id: 81,
  text: "What type of disk space issue do you have?",
  options: [
    { text: "Low disk space", next: 86 },
    { text: "Disk full", next: 86 },
    { text: "Cannot write to disk", next: 86 },
    { text: "Disk errors", next: 86 }
  ]
},
{
  id: 82,
  text: "What type of display resolution issue do you have?",
  options: [
    { text: "Wrong resolution set", next: 86 },
    { text: "Cannot change resolution", next: 86 },
    { text: "Blurry display", next: 86 },
    { text: "Scaling issues", next: 86 }
  ]
},
{
  id: 83,
  text: "What type of keyboard issue are you experiencing?",
  options: [
    { text: "Keys not working", next: 86 },
    { text: "Wrong characters typed", next: 86 },
    { text: "Connection issues", next: 86 },
    { text: "Slow key response", next: 86 }
  ]
},
{
  id: 84,
  text: "What kind of mouse issue are you facing?",
  options: [
    { text: "Mouse not responding", next: 86 },
    { text: "Cursor jumping", next: 86 },
    { text: "Slow movement", next: 86 },
    { text: "Connection lost", next: 86 }
  ]
},
{
  id: 85,
  text: "What type of system crash are you experiencing?",
  options: [
    { text: "Blue screen of death", next: 86 },
    { text: "System freezes", next: 86 },
    { text: "Random reboots", next: 86 },
    { text: "Boot loop", next: 86 }
  ]
  },
  {
    id: 86,
    text: "Please provide any additional details about your issue:",
    options: []
  }
];



function Questionnaire() {
  const [current, setCurrent] = useState(1); // Start at root
  const [selected, setSelected] = useState(null);
  const [text, setText] = useState('');
  const [showSolution, setShowSolution] = useState(false);
  const [history, setHistory] = useState([]); // <-- Add this

  // Calculate progress
  const totalSteps = 5; // Adjust to match your flow, including text step
  let step = history.length + 1;
  if (current === 86) step = totalSteps;
  const progress = Math.round((step / totalSteps) * 100);

  const q = questions.find(q => q.id === current);

  if (showSolution) {
    return <Solution />;
  }

  if (!q) return <div>Thank you! We'll process your answers.</div>;

  // Special handling for question 86 (text)
  if (q.id === 86) {
    return (
      <div className="questionnaire-container">
        <div className="questionnaire-card">
          <div className="progress-bar-label">
            <span className="progress-step">Step {step} of {totalSteps}</span>
            <span className="progress-percent">{progress}%</span>
          </div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fg" style={{ width: `${progress}%` }} />
          </div>
          <h2>{q.text}</h2>
          <textarea
            className="question-textarea"
            value={text}
            onChange={e => setText(e.target.value)}
            rows={6}
            placeholder="Type your answer..."
          />
          <div className="questionnaire-actions">
            <button
              className="startover-btn"
              type="button"
              onClick={() => {
                setCurrent(1);
                setSelected(null);
                setText('');
                setShowSolution(false);
                setHistory([]);
              }}
            >
              Start Over
            </button>
            <button
              type="button"
              className="startover-btn"
              onClick={() => {
                if (history.length > 0) {
                  const prev = history[history.length - 1];
                  setCurrent(prev);
                  setHistory(history.slice(0, -1));
                  setSelected(null);
                }
              }}
              style={{ marginLeft: 8 }}
            >
              Go Back
            </button>
            <button
              onClick={() => setShowSolution(true)}
              className="submit-btn"
              style={{ float: 'right' }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="questionnaire-container">
      <div className="questionnaire-card">
        <div className="progress-bar-label">
          <span className="progress-step">Step {step} of {totalSteps}</span>
          <span className="progress-percent">{progress}%</span>
        </div>
        <div className="progress-bar-bg">
          <div className="progress-bar-fg" style={{ width: `${progress}%` }} />
        </div>
        <h2>{q.text}</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (selected !== null) {
              setHistory([...history, current]);
              setCurrent(q.options[selected].next);
              setSelected(null);
            }
          }}
        >
          {q.options.map((opt, idx) => (
            <label
              key={idx}
              className={`question-option${selected === idx ? ' selected' : ''}`}
              onClick={() => setSelected(idx)}
            >
              <input
                type="radio"
                name="question"
                checked={selected === idx}
                onChange={() => setSelected(idx)}
              />
              <span className="custom-radio">
                <span className="custom-radio-dot" />
              </span>
              <span className="question-label">{opt.text}</span>
            </label>
          ))}
          <div className="questionnaire-actions">
            <button
              type="button"
              className="startover-btn"
              onClick={() => {
                setCurrent(1);
                setSelected(null);
                setText('');
                setShowSolution(false);
                setHistory([]);
              }}
            >
              Start Over
            </button>
            <button
              type="button"
              className="startover-btn"
              onClick={() => {
                if (history.length > 0) {
                  const prev = history[history.length - 1];
                  setCurrent(prev);
                  setHistory(history.slice(0, -1));
                  setSelected(null);
                }
              }}
              style={{ marginLeft: 8 }}
            >
              Go Back
            </button>
            <button
              type="submit"
              className="submit-btn"
              disabled={selected === null}
              style={{ float: 'right' }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Questionnaire;