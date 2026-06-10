import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  activeIndex = 0;

  jobs = [
    {
      company: 'Emirates NBD',
      role: 'Software Engineer (Contract)',
      period: 'July 2025 – Present',
      location: 'Dubai, UAE',
      tech: ['Node.js', 'Angular', 'Playwright', 'MySQL', 'Redis'],
      points: [
        'Developed features enhancing app usability and user convenience for banking customers.',
        'Optimized legacy features and APIs for efficiency gains across critical banking workflows.',
        'Implemented ISO standards into banking features for compliance and security.',
        'Wrote automated test suites using Playwright to accelerate release cycles.',
        'Conducted API performance testing with JMeter and Playwright.'
      ]
    },
    {
      company: 'ZOHO Corp.',
      role: 'Senior Software Engineer',
      period: 'Sep 2022 – July 2025',
      location: 'Remote',
      tech: ['Java', 'EmberJs', 'Node.js', 'MySQL', 'Redis'],
      points: [
        'Led development of dynamic threat reputation for threat alerts and automatic device configuration.',
        'Updated threat library by integrating intelligence from AlienVault and BrightCloud platforms.',
        'Optimized IP data retrieval by implementing Redis, enabling fast and efficient searches.',
        'Drove API performance tuning, database query efficiency, and strategic indexing for data modeling.',
        'Trained on cross-platform automated testing using in-house QEngine (built on Selenium).'
      ]
    },
    {
      company: 'Doon Technology Experts',
      role: 'Senior Software Developer',
      period: 'Apr 2018 – Aug 2022',
      location: 'India',
      tech: ['Angular', 'ReactJs', 'Node.js', 'MongoDB', 'Socket.io', 'Java', 'Kafka'],
      points: [
        'Led end-to-end delivery of a travel company website using ReactJs, MongoDB, and Node.js; used Chrome Lighthouse for monitoring.',
        'Built a Virtual Metaverse platform (MEAN stack) with constraint-checking for 15,000 concurrent socket connections, plus chat and notifications via Socket.io.',
        'Delivered a Virtual Retail Hosting SAAS platform (MERN) with multi-role permissions and an integrated ScreenSharing tool.',
        'Created a Parallax scroll e-commerce website for bottle products using Angular.',
        'Architected a hotel booking system using Java, AngularJS, and MongoDB with Kafka-powered notifications and WebSocket chat.'
      ]
    }
  ];

  select(i: number) { this.activeIndex = i; }
}
