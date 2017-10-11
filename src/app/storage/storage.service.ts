import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  saveToLocalStorage(name, data){
    localStorage.setItem(name, this.jsonContent(data));
  }


  jsonContent(content){
    return JSON.stringify(content);
  }

}
