import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SliderModule } from '@syncfusion/ej2-angular-inputs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SliderModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public limits: Object = {
    enabled: true,
    minStart: 10,
    minEnd: 30,
    maxStart: 40,
    maxEnd: 60
  };
  public ticks: Object = {
    smallStep: 10,
    largeStep: 20,
    placement: 'After',
    showSmallTicks: true
  };
  public tooltip: Object = {
    isVisible: true,
    showOn: 'Always',
    placement: 'After'
  };
  public value: number[] = [30, 70];
  title = 'myangularapp';
}
