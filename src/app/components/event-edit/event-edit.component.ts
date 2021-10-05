import { Event } from '../../model/Event';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from '../../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})

export class EventEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  eventData: Event[];
  EventProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin']

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateEvent();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getEvent(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      date: ['', [Validators.required]],
      location: ['', [Validators.required]],
      expectedWeather: ['', [Validators.required]]
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getEvent(id) {
    this.apiService.getOneEvent(id).subscribe(data => {
      this.editForm.setValue({
        name: data['name'],
        date: data['date'],
        location: data['location'],
        expectedWeather: data['expectedWeather'],
      });
    });
  }

  updateEvent() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      date: ['', [Validators.required]],
      location: ['', [Validators.required]],
      expectedWeather: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateEvent(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/event-list');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}