import { Component,OnInit} from '@angular/core';
import{ApiserviceService} from '../../service/apiservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(private api:ApiserviceService,private formBuilder: FormBuilder, private router: Router){

  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    // Handle form submission here
    if (this.loginForm!.valid) {
      const email = this.loginForm!.get('email')!.value;
      const password = this.loginForm!.get('password')!.value;
      // Perform login or any other action
      this.api.login(email, password).subscribe((data) => {
            // Handle the API response here
            console.log(data);
            if(data == 'Success Login'){
              this.router.navigate(['home']);
            }
            else{
              console.log("Incorrect Username or password");
            }
          });
    }
  }
//   ngOnInit(){
 
//   
// }
}
