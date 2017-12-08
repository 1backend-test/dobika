import { Injectable } from '@angular/core';
import { NgClient } from '@1backend/ng-client';



export interface Test {
	name:	string;
	foods:	string[];
}


@Injectable()
export class Service {
  constructor(private ngClient: NgClient) {}

  getHi(): Promise<string> {
    return this.ngClient.call<string>("dobika", "myservice", "GET", "/hi", {  });
  }

  getImportedHi(): Promise<string> {
    return this.ngClient.call<string>("dobika", "myservice", "GET", "/imported-hi", {  });
  }

  getSqlExample(): Promise<string> {
    return this.ngClient.call<string>("dobika", "myservice", "GET", "/sql-example", {  });
  }

}
