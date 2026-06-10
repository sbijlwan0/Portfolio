import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  links = [
    { label: 'Email',    icon: '✉',  href: 'mailto:sbijlwan0@gmail.com',        value: 'sbijlwan0@gmail.com' },
    { label: 'Phone',    icon: '📱', href: 'tel:+971569519003',                 value: '+971 569 519 003' },
    { label: 'LinkedIn', icon: '🔗', href: 'https://linkedin.com/in/sunil-bijalwan', value: 'linkedin.com/in/sunil-bijalwan' },
    { label: 'GitHub',   icon: '⌥',  href: 'https://github.com/sunilbijalwan',  value: 'github.com/sunilbijalwan' },
  ];
}
