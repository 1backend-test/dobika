import { Injectable } from '@angular/core';
import { NgClient } from '@1backend/ng-client';



export interface Test {
	name:	string;
	foods:	string[];
}


@Injectable()
export class Service {
  constructor(private ngClient: NgClient) {}

  GetHi(): Promise<string> {
    return this.ngClient.call<string>("dobika", "myservice", "GET", "/hi", {  });
  }

  GetImportedHi(): Promise<string> {
    return this.ngClient.call<string>("dobika", "myservice", "GET", "/imported-hi", {  });
  }

  GetSqlExample(): Promise<string> {
    return this.ngClient.call<string>("dobika", "myservice", "GET", "/sql-example", {  });
  }

}
