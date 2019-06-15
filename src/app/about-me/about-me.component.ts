import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  //   animations: [trigger('routeAnimations', [
  //     transition(':enter', [
  //       query('*', [
  //         style({ transform: 'translateY(-100px)', opacity: 0 }),
  //         stagger('50ms', [
  //           animate('300ms ease-out', style({ transform: 'none', opacity: '*' }))
  //         ])
  //       ])
  //     ])
  //   ])
  //  ]
})
export class AboutMeComponent implements OnInit {
  // @ViewChild('f') signupForm: NgForm; - panel method form?
  public signupForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'firstname': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
      'lastname': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'comment': new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    const fname = this.signupForm.get('firstname').value;
    const lname = this.signupForm.get('lastname').value;
    const email = this.signupForm.get('email').value;
    const comment = this.signupForm.get('comment').value;

    console.log(fname, lname, email, comment);
    this.signupForm.reset();
    alert('thank you for submitting your feedback');
  }


}
