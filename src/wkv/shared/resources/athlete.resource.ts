import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Athlete } from '../../athlete/athlete.interface';
import { Resource } from './resource.service';
import { MeetingService } from '../meeting.service';

@Injectable()
export class AthleteResource extends Resource {

  constructor (private meetingService: MeetingService, http: Http) {
    super('athlete', http);
  }

  query(): Observable<any> {
    return super.query('meeting/' + this.meetingService.getMeetingId() + '/athlete');
  }
}
