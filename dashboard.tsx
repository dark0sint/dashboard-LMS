// File: CyberSecurityLMSDashboard.tsx
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "/components/ui/card";
import { Button } from "/components/ui/button";

const CyberSecurityLMSDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [enrolledCourses, setEnrolledCourses] = useState([
    {
      id: 1,
      title: "Introduction to Cyber Security",
      progress: 80,
      modulesCompleted: 4,
      totalModules: 5,
      nextLesson: "Final Assessment",
      badge: "Beginner Security Analyst"
    },
    {
      id: 2,
      title: "Network Security Fundamentals",
      progress: 40,
      modulesCompleted: 2,
      totalModules: 6,
      nextLesson: "Firewall Configuration",
      badge: "Network Defender"
    },
    {
      id: 3,
      title: "Ethical Hacking & Penetration Testing",
      progress: 0,
      modulesCompleted: 0,
      totalModules: 8,
      nextLesson: "Reconnaissance Techniques",
      badge: null
    }
  ]);

  const [securityModules] = useState([
    {
      id: 1,
      title: "Threat Landscape Analysis",
      description: "Understand current cyber threats and attack vectors",
      duration: "2 hours",
      level: "Intermediate",
      type: "video",
      completed: true
    },
    {
      id: 2,
      title: "Cryptography Fundamentals",
      description: "Learn encryption algorithms and cryptographic protocols",
      duration: "3 hours",
      level: "Intermediate",
      type: "interactive",
      completed: true
    },
    {
      id: 3,
      title: "Firewall Configuration Lab",
      description: "Hands-on practice with enterprise firewall systems",
      duration: "4 hours",
      level: "Advanced",
     
export default CyberSecurityLMSDashboard;
