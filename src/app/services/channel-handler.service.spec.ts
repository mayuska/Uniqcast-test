import { TestBed, inject } from '@angular/core/testing';

import { ChannelHandlerService } from './channel-handler.service';

describe('ChannelHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChannelHandlerService]
    });
  });

  it('should ...', inject([ChannelHandlerService], (service: ChannelHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
