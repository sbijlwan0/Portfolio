import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillGroups = [
    {
      category: 'Frontend',
      icon: '⬡',
      skills: ['Angular', 'ReactJs', 'VueJs', 'EmberJs', 'TypeScript', 'JavaScript', 'HTML/CSS']
    },
    {
      category: 'Backend',
      icon: '⬡',
      skills: ['Node.js', 'ExpressJs', 'Java', 'Django', 'Socket.io', 'REST APIs', 'Microservices']
    },
    {
      category: 'Databases',
      icon: '⬡',
      skills: ['MongoDB', 'MySQL', 'Redis', 'Schema Design', 'Query Optimization', 'Indexing']
    },
    {
      category: 'Testing & DevOps',
      icon: '⬡',
      skills: ['Playwright', 'Selenium', 'JMeter', 'Automated Testing', 'API Testing', 'ISO Standards']
    },
    {
      category: 'Real-time & Infra',
      icon: '⬡',
      skills: ['WebSocket', 'Kafka', 'ElectronJs', 'Performance Tuning', 'Security', 'WebRTC']
    },
    {
      category: 'Tools & Platforms',
      icon: '⬡',
      skills: ['Git', 'GitHub Actions', 'Chrome Lighthouse', 'Postman', 'AlienVault', 'BrightCloud']
    }
  ];
}
