import { Component, OnInit } from '@angular/core';
import { faIceCream } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'blog-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  public icon = faIceCream;

  constructor() {}

  ngOnInit(): void {}
}
