import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() { }

  toPromise<T>(observable: Observable<T>): Promise<T> {
    const promise = new Promise<T>((resolve, reject) => {
      return observable.subscribe(
        (value: T) => {
          resolve(value);
        },
        error => {
          reject(error);
        }
      );
    });
    return promise;
  }

}
