import { Component } from '@angular/core';

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.css']
})
export class DomainsComponent {
  domains = [
    { name: 'Banking',                    icon: '🏦', desc: 'ISO-compliant banking features, API security, and automated testing at Emirates NBD.' },
    { name: 'SAAS Products (B2B)',         icon: '☁️', desc: 'Multi-role, multi-tenant platforms with secure, scalable architectures.' },
    { name: 'Tour & Travel',              icon: '✈️', desc: 'End-to-end travel websites with Lighthouse performance monitoring.' },
    { name: 'E-Commerce',                 icon: '🛒', desc: 'Parallax scroll sites, product catalogs, Django/Angular hybrid apps.' },
    { name: 'Virtual Metaverse Platform', icon: '🌐', desc: 'MEAN stack metaverse with 15k concurrent socket sessions, chat, and notifications.' },
    { name: 'Virtual Events Platform',    icon: '🎪', desc: 'Real-time event infrastructure supporting large-scale virtual gatherings.' },
    { name: 'Virtual Retail Hosting',     icon: '🏪', desc: 'MERN SAAS with integrated ScreenSharing tool and RBAC.' },
    { name: 'Hotel Booking',              icon: '🏨', desc: 'Microservice hotel booking with Kafka notifications and WebSocket chat.' },
  ];
}
