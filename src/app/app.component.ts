import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { LoginCombackComponent } from "./login-comback/login-comback.component";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, LoginComponent, LoginCombackComponent, MatSlideToggleModule]
})
export class AppComponent {
  title = 'project_test_login';
}
