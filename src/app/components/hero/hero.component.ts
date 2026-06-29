import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  displayedText = '';
  cursorVisible = true;

  private roles = [
    'Full Stack Developer',
    'Angular Specialist',
    'Node.js Engineer',
    'AI/LLM Integration',
    'WebSocket Architect',
    'API Performance Expert',
  ];
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typeTimer: any;
  private cursorTimer: any;

  ngOnInit() {
    this.type();
    this.cursorTimer = setInterval(() => {
      this.cursorVisible = !this.cursorVisible;
    }, 530);
  }

  ngOnDestroy() {
    clearTimeout(this.typeTimer);
    clearInterval(this.cursorTimer);
  }

  private type() {
    const current = this.roles[this.roleIndex];
    if (this.isDeleting) {
      this.displayedText = current.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.displayedText = current.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let delay = this.isDeleting ? 50 : 90;

    if (!this.isDeleting && this.charIndex === current.length) {
      delay = 1800;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      delay = 300;
    }

    this.typeTimer = setTimeout(() => this.type(), delay);
  }
}
