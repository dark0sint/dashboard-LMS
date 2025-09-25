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
      

export default CyberSecurityLMSDashboard;
