import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";
import {Channel} from "../Channel";


@Injectable()
export class ChannelHandlerService {
    private channelUrl: string = 'http://176.31.182.158:3001/channels';
    private loginUrl: string = 'http://176.31.182.158:3001/auth/local';

    private token: string|null = null;

    constructor(private http: Http) {
        this.login().subscribe(
            token => {
                this.token = token;
            }
        );
    }

    login(): Observable<string>{
        return this.post(this.loginUrl, {"identifier": "uniqcaster","password": "cast457"}, false)
            .map(function(res: Response): Object {
                return res.json().jwt;
            })
    }


    getList(): Observable<Channel[]> {
        return this.get(this.channelUrl)
            .map(this.makeListFromRequest)
            .catch(this.handleError);
    }

    create(channel: Channel): Observable<Channel> {
        return this.post(this.channelUrl, channel)
            .map(this.makeChannelFromRequest);
    }

    update(channel: Channel): Observable<Channel> {
        return this.put(this.channelUrl, channel)
            .map(this.makeChannelFromRequest);
    }

    remove(channel: Channel): Observable<Channel> {
        return this.deleteRequest(this.channelUrl + '/' + channel.id)
            .map(this.makeChannelFromRequest);
    }

    private post(url:string, data:Object, withToken:boolean = true): Observable<any> {
        let headers = new Headers({'Content-Type': 'application/json'});
        if(withToken){
            headers.append('Authorization', 'Bearer ' + this.token);
        }
        let options = new RequestOptions({headers: headers});

        return this.http.post(url, data, options)
            .catch(this.handleError);
    }

    private put(url:string, data:any): Observable<any> {
        let headers = new Headers({'Content-Type': 'application/json'});
        headers.append('Authorization', 'Bearer ' + this.token);
        let options = new RequestOptions({headers: headers});

        return this.http.put(url + '/' + data.id, data, options)
            .catch(this.handleError);
    }

    private get(url:string): Observable<any> {
        let headers = new Headers({'Content-Type': 'application/json'});
        headers.append('Authorization', 'Bearer ' + this.token);
        let options = new RequestOptions({headers: headers});

        return this.http.get(url, options)
            .catch(this.handleError);
    }

    private deleteRequest(url:string): Observable<any> {
        let headers = new Headers({'Content-Type': 'application/json'});
        headers.append('Authorization', 'Bearer ' + this.token);
        let options = new RequestOptions({headers: headers});

        return this.http.delete(url, options)
            .catch(this.handleError);
    }

    private makeListFromRequest(res: Response): Channel[] {
        let body = res.json();
        var data = [];
        body.forEach(
            object => data.push({name: object.name, id: object.id, url: object.url})
        );

        return data;
    }

    private makeChannelFromRequest(res: Response): Channel {
        let body = res.json();

        return new Channel(body.name, body.url, body.id);
    }

    private handleError(error: Response) {
        return Observable.throw(error);
    }

}
