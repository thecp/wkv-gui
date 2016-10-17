import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Club } from '../../club/club.interface';
import { Resource } from './resource.service';
import { MeetingService } from '../meeting.service';

@Injectable()
export class ClubResource extends Resource {

  constructor (private meetingService: MeetingService, http: Http) {
    super('club', http);
  }

  query(): Observable<any> {
    return super.query('meeting/' + this.meetingService.getMeetingId() + '/club');
  }
}
