import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BaseHttp {
    constructor(public http: HttpClient) { }

    get(url: string, response?: (result: any) => void): any {
        if (!response) {
            return this.http.get(url);
        } else {
            this.http.get(url).subscribe(
                (resp) => {
                    response(resp);
                },
                (err) => {
                    response(err);
                }
            );
        }
    }

    post<T>(url: string, item: T, response: (result: any) => void): any {
        this.http.post(url, item).subscribe(
            (resp) => {
                response(resp);
            },
            (err) => {
                response(err);
            }
        );
    }

    patch<T>(url: string, item: T, response: (result: any) => void): any {
        this.http.patch(url, item).subscribe(
            (resp) => {
                response(resp);
            },
            (err) => {
                response(err);
            }
        );
    }

    put<T>(url: string, item: T, response: (result: any) => void): any {
        this.http.put(url, item).subscribe(
            (resp) => {
                response(resp);
            },
            (err) => {
                response(err);
            }
        );
    }

    delete(url: string, response: (result: any) => void): any {
        this.http.delete(url).subscribe(
            (resp) => {
                response(resp);
            },
            (err) => {
                response(err);
            }
        );
    }
}
