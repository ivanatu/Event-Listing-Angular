import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})

export class EventCreateComponent implements OnInit {  
  submitted = false;
  eventForm: FormGroup;
  EventProfile:any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin']
  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) { 
    this.mainForm();
  }

  ngOnInit() {

   }

  mainForm() {
    this.eventForm = this.fb.group({
      name: ['', [Validators.required]],
      date: ['', [Validators.required,]],
      location: ['', [Validators.required]],
      expectedWeather: ['', [Validators.required]]
    })
  }

  // Choose designation with select dropdown
  updateProfile(e){
    this.eventForm.get('designation').setValue(e, {
      onlySelf: true
    })
  }
  public AddressChange(address: any) {
    //setting address from API to local variable
     this.eventForm.get('location').setValue(address.formatted_address);
  }

  // Getter to access form control
  get myForm(){
    return this.eventForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.eventForm.valid) {
      return false;
    } else {
      this.apiService.createEvent(this.eventForm.value).subscribe(
        (res) => {
          console.log('Event successfully created!');
          this.ngZone.run(() => this.router.navigateByUrl('/event-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
