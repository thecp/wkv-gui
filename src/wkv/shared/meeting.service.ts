import { Injectable } from '@angular/core';

@Injectable()
export class MeetingService {
  private meetingId: number = 3;  // TODO

  getMeetingId() {
    return this.meetingId;
  }

  setMeetingId(meetingId: number) {
    this.meetingId = meetingId;
  }
}
