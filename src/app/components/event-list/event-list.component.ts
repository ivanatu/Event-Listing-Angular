import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})

export class EventListComponent implements OnInit {
  
  Event:any = [];

  constructor(private apiService: ApiService) { 
    this.readEvent();
  }

  ngOnInit() {
    this.readEvent();
  }

  readEvent(){
    this.apiService.getEvent().subscribe((data) => {
     this.Event = data;
    })    
  }

  removeEvent(event, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteEvent(event._id).subscribe((data) => {
          this.Event.splice(index, 1);
        }
      )    
    }
  }

}