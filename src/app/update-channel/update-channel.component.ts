import {Component, OnInit} from '@angular/core';
import {Channel} from "../Channel";
import {ChannelHandlerService} from "../services/channel-handler.service";

@Component({
    selector: 'update-channel',
    providers: [ChannelHandlerService],
    templateUrl: './update-channel.component.html',
    styleUrls: ['./update-channel.component.scss']
})
export class UpdateChannelComponent implements OnInit {

    isShown: boolean = false;
    channel:Channel|null;

    constructor(private channelHandler: ChannelHandlerService) {  }

    dismissForm() {
        this.setChannel(null);
    }

    updateChannel(){
        this.channelHandler.update(this.channel).subscribe(
            data => this.setChannel(null)
        );
    }

    setChannel(channel:Channel|null){
        this.channel = channel;
        this.isShown = this.channel != null;
    }

    ngOnInit() {
    }

}
