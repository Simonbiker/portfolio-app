import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    const userMenu = document.querySelector('#user-menu');
    const userMenuList = document.querySelector('#user-menu-list');

    userMenu.addEventListener('click', () => {
      if (userMenuList.classList.contains('hidden')) {
        userMenuList.classList.remove('hidden');
      } else {
        userMenuList.classList.add('hidden');
      }
    });

    const burger = document.querySelector('#burger');
    const burgerList = document.querySelector('#burger-List');
    burger.addEventListener('click', () => {
      if (burgerList.classList.contains('hidden')) {
        burgerList.classList.remove('hidden');
      } else {
          burgerList.classList.add('hidden');
        }
    });
  }
}
