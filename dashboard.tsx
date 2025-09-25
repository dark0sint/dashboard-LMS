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
      <header className="bg-primary text-primary-foreground p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">CyberSec Academy</h1>
          <nav className="flex space-x-4">
            <button 
              className={`px-3 py-2 rounded-md ${activeTab === 'dashboard' ? 'bg-primary-foreground text-primary' : 'hover:bg-primary-foreground/20'}`}
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </button>
            <button 
              className={`px-3 py-2 rounded-md ${activeTab === 'courses' ? 'bg-primary-foreground text-primary' : 'hover:bg-primary-foreground/20'}`}
              onClick={() => setActiveTab('courses')}
            >
              Courses
            </button>
            <button 
              className={`px-3 py-2 rounded-md ${activeTab === 'labs' ? 'bg-primary-foreground text-primary' : 'hover:bg-primary-foreground/20'}`}
              onClick={() => setActiveTab('labs')}
            >
              Labs
            </button>
            <button 
              className={`px-3 py-2 rounded-md ${activeTab === 'community' ? 'bg-primary-foreground text-primary' : 'hover:bg-primary-foreground/20'}`}
              onClick={() => setActiveTab('community')}
            >
              Community
            </button>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
            </div>
            <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center">
              <span className="text-sm font-medium">JS</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Welcome Card */}
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle>Welcome back, Security Analyst!</CardTitle>
                <CardDescription>
                  Continue your journey to becoming a cyber security expert
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold">{Math.round(overallProgress)}% Overall Progress</p>
                    <p className="text-muted-foreground">3 courses in progress</p>
                  </div>
                  <div className="bg-accent text-accent-foreground px-4 py-2 rounded-md">
                    <p className="font-semibold">Security Level: Intermediate</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enrolled Courses */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Your Enrolled Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {enrolledCourses.map(course => (
                  <Card key={course.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <CardDescription>
                        {course.modulesCompleted}/{course.totalModules} modules completed
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="w-full bg-secondary rounded-full h-2.5 mb-4">
                        <div 
                          className="bg-primary h-2.5 rounded-full" 
                          style={{width: `${course.progress}%`}}
                        ></div>
                      </div>
                      <p className="text-sm text-muted-foreground">Next: {course.nextLesson}</p>
                      {course.badge && (
                        <div className="mt-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent text-accent-foreground">
                          {course.badge}
                        </div>
                      )}
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Continue Learning</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>

            {/* Security Modules */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Recommended Modules</h2>
              <div className="space-y-3">
                {securityModules.map(module => (
                  <Card key={module.id} className={`${module.completed ? 'border-l-4 border-l-green-500' : ''}`}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{module.title}</h3>
                          <p className="text-sm text-muted-foreground">{module.description}</p>
                          <div className="flex space-x-2 mt-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                              {module.type}
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                              {module.level}
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                              {module.duration}
                            </span>
                          </div>
                        </div>
                        <Button variant={module.completed ? "outline" : "default"}>
                          {module.completed ? "Review" : "Start"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Live sessions and competitions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map(event => (
                  <div key={event.id} className="p-3 bg-muted rounded-lg">
                    <h3 className="font-semibold">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                    <p className="text-sm">Instructor: {event.instructor}</p>
                    <Button className="mt-2 w-full" size="sm">
                      Add to Calendar
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your learning journey</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentActivity.map(activity => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">
                        {activity.action}: <span className="text-primary">{activity.item}</span>
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Security Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Security Statistics</CardTitle>
                <CardDescription>Your learning progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Threat Detection</span>
                      <span className="text-sm">75%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Cryptography</span>
                      <span className="text-sm">90%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Network Defense</span>
                      <span className="text-sm">60%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="h-16">
                  <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-xs">Practice Labs</span>
                  </div>
                </Button>
                <Button variant="outline" className="h-16">
                  <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <span className="text-xs">CTF Challenges</span>
                  </div>
                </Button>
                <Button variant="outline" className="h-16">
                  <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-xs">Community</span>
                  </div>
                </Button>
                <Button variant="outline" className="h-16">
                  <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-xs">Certifications</span>
                  </div>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CyberSecurityLMSDashboard;
