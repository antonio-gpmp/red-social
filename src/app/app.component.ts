import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {



  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {

  }

  ngOnInit(): void {
    console.log('Runing app componente');
    
    
  }

  ngOnDestroy(): void {
  }

}
