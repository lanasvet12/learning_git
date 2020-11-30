import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Список пользователей';
  typesOfShoes: string[] = ['Boots22', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
