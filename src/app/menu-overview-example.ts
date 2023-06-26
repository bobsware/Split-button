import {Component} from '@angular/core';

/**
 * @title Basic menu
 */
@Component({
  selector: 'menu-overview-example',
  templateUrl: 'menu-overview-example.html',
  styleUrls:['menu-overview.css']
})
export class MenuOverviewExample {

  alert(message: string) {
    alert(message);
  }

}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */