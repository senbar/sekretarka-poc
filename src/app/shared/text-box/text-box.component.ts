import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit {

  @Input()
  $text: Observable<string> | undefined

  constructor() { 
    this.$text=undefined;
  }

  ngOnInit(): void {
    this.$text?.subscribe(res=>{
      var z=1;
    })
  }

}
