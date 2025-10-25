import { Component } from '@angular/core';
import { Navbar } from "../../shared/navbar/navbar";
import { MainThemes } from '../main-themes/main-themes';

@Component({
  selector: 'app-home',
  imports: [Navbar,MainThemes],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
