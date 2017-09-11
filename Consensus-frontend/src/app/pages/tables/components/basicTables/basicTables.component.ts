import {Component} from '@angular/core';



@Component({
  selector: 'basic-tables',
  templateUrl: './basicTables.html',
  styleUrls: ['./basicTables.scss']

})
export class BasicTables {

  constructor() {


  }
  public ckeditorContent:string = '<p>Hello CKEditor</p>';
  public config = {
    uiColor: '#F0F3F4',
    height: '600',
  };
}
