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
      type: "lab",
      completed: false
    },
    {
      id: 4,
      title: "Incident Response Simulation",
      description: "Practice responding to a simulated security breach",
      duration: "5 hours",
      level: "Advanced",
      type: "simulation",
      completed: false
    },
    {
      id: 5,
      title: "Security Policy Development",
      description: "Create comprehensive organizational security policies",
      duration: "3 hours",
      level: "Intermediate",
      type: "document",
      completed: true
    }
  ]);

  const [upcomingEvents] = useState([
    {
      id: 1,
      title: "Live Webinar: Zero Day Vulnerabilities",
      date: "Tomorrow, 2:00 PM EST",
      instructor: "Dr. Sarah Chen"
    },
    {
      id: 2,
      title: "CTF Competition: Network Defense",
      date: "Next Friday, 10:00 AM EST",
      instructor: "Cyber Defense Team"
    }
  ]);

  const [recentActivity] = useState([
    {
      id: 1,
      action: "Completed",
      item: "Cryptography Fundamentals",
      time: "2 hours ago"
    },
    {
      id: 2,
      action: "Earned badge",
      item: "Network Defender",
      time: "1 day ago"
    },
    {
      id: 3,
      action: "Started",
      item: "Firewall Configuration Lab",
      time: "3 days ago"
    }
  ]);

  const overallProgress = enrolledCourses.reduce((acc, course) => acc + course.progress, 0) / enrolledCourses.length;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <h

export default CyberSecurityLMSDashboard;
