import { Injectable } from '@angular/core';

@Injectable()
export class Greeting {

  greet(name: string): string {
    return `Hello, ${name}`;
  }
}
