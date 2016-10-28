import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Competition } from '../../competition/competition.interface';
import { Resource } from './resource.service';
import { MeetingService } from '../meeting.service';

@Injectable()
export class CompetitionResource extends Resource {

  constructor (private meetingService: MeetingService, http: Http) {
    super('competition', http);
  }

  query(): Observable<any> {
    return super.query('meeting/' + this.meetingService.getMeetingId() + '/competition');
  }
}
