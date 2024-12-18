import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent implements OnInit, OnDestroy {
  genderToggle: boolean = true; // True para "o", False para "a"
  private intervalId!: any;

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.intervalId = setInterval(() => {
        this.genderToggle = !this.genderToggle;
      }, 2500);
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
