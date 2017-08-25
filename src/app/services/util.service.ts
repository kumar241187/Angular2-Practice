import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  constructor() { }

  public capitalize(word): String {
    return word.charAt(0) + word.substring(1);
  }

}
