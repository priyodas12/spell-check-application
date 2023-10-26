import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = 'Randomly Generated Text Here...';
  typedText = '';
  spellChkStyle = 'color:green';

  generateRandomText() {
    this.randomText = lorem.sentence();
    console.log(this.randomText);
  }

  onTextInput(event: any) {
    this.typedText = event.target.value;
    console.log(this.typedText);
  }

  compareText(rLetter: string, eLetter: string) {
    if (!eLetter) {
      return 'pending';
    } else if (rLetter === eLetter) {
      return 'success';
    } else if (rLetter !== eLetter) {
      return 'error';
    } else {
      return 'pending';
    }
  }
}
