import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  scrolled = false;
  menuOpen = false;

  navLinks = [
    { label: 'About',      href: '#about' },
    { label: 'Skills',     href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Domains',    href: '#domains' },
    { label: 'Contact',    href: '#contact' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 40;
  }

  toggle() { this.menuOpen = !this.menuOpen; }
  close()  { this.menuOpen = false; }
}
