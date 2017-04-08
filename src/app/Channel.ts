

export class Channel {
    id: number|null;
    name: string;
    url: string;

    constructor(name?:string, url?:string, id?:number){
        this.id = id || null;
        this.name = name || '';
        this.url = url || '';
    }
}