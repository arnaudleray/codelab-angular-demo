import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UtilsService {

  public isBrowser: boolean = isPlatformBrowser(this.platform_id);

  constructor(
    @Inject(PLATFORM_ID) private platform_id,
  ) { }

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
