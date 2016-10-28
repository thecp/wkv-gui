import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Resource } from './resource.service';
import { MeetingService } from '../meeting.service';

@Injectable()
export class CompetitionListResource extends Resource {

  constructor (private meetingService: MeetingService, http: Http) {
    super('list', http);
  }

  find(competitionId: number, competitionType: string): Observable<any> {
    return this.http.get('list/' + competitionId + '/' + competitionType)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
}
