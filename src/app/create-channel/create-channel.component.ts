import {Component, OnInit} from '@angular/core';
import {Channel} from "../Channel";

import {ChannelHandlerService} from "../services/channel-handler.service";

@Component({
    selector: 'create-channel',
    providers: [ChannelHandlerService],
    templateUrl: 'create-channel.component.html',
    styleUrls: ['create-channel.component.scss']
})
export class ChannelsComponent implements OnInit {

    channel: Channel;
    isShown: boolean;

    constructor(private channelHandlerService: ChannelHandlerService) {
        this.isShown = false;
        this.channel = new Channel();
    }

    OpenChannelForm() {
        this.isShown = true;
    }

    CloseChannelForm() {
        this.isShown = false;
    }

    submitForm() {
        this.channelHandlerService.create(this.channel).subscribe(
            data => this.channel = new Channel()
        );
    }

    ngOnInit() {
    }

}
