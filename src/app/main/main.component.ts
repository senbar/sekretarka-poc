import { Component, OnInit } from '@angular/core';
import { flatMap } from 'lodash';
import { map, Observable, Subject, switchMap, switchMapTo, withLatestFrom } from 'rxjs';
import { SpeechRecognitionService } from '../shared/speech-recognition-service/speech-recognition.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private speechRecog: SpeechRecognitionService) { }
  listening=false;
  $text= new Subject<string>();

  ngOnInit(): void {
  }

  onClick($event:MouseEvent){
    if(!this.listening)
    {
      this.speechRecog.record().subscribe(res=> this.$text.next(res));
      this.listening=true;
    }
    else
    {
      this.speechRecog.DestroySpeechObject();
      this.listening=false;
    }
  }
}
