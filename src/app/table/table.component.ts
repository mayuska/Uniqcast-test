import {Component, OnInit} from '@angular/core';
import {ChannelHandlerService} from "../services/channel-handler.service";
import {Channel} from "../Channel";

@Component({
    selector: 'channels-table',
    providers: [ChannelHandlerService],
    templateUrl: './table.component.html',
    styleUrls: ['table.component.scss']

})

export class TableComponent implements OnInit {

    channels?: Channel[];
    isShown: boolean = false;
    currentlyEditing:Channel|null = null;

    constructor(private channelHandler: ChannelHandlerService) {
        this.channelHandler.getList().subscribe(
            data => {
                this.isShown = true;
                this.channels = data;
            }
        );
    }

    editChannel(channel: Channel){
        this.currentlyEditing = channel;
    }

    deleteChannel(channel: Channel, index:number){
        this.channelHandler.remove(channel).subscribe(
            data => {
                if(this.channels.length == 1){
                    this.isShown = false;
                }
                this.channels.splice(index, 1);
            }
        );
    }

    ngOnInit() {
    }

}
