import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/User';
import { UserService } from '../services/user.service'
import { format } from 'util';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // userForm = new FormGroup({
  //   firstName:new FormControl("Michael"),
  //   lastName: new FormControl("Jackson")
  // })
  // userForm = this.formBuilder.group({
  //   firstName:['',[Validators.required]],
  //   lastName:['Jackson', [Validators.required]]
  // });
  users: User[];
  userForm = this.formBuilder.group({
    name:['',[Validators.required]],
    username:['', [Validators.required]],
    email:['', [Validators.required,
                Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")         
    ]],
    address: this.formBuilder.group({
      street:'',
      suite:'',
      city:'',
      zipcode:'',
      geo: this.formBuilder.group({
        lat: '',
        lng: ''
      })
    }),
    phone:['', [Validators.required,
                // Validators.pattern("^\d{3}-\d{3}-\d{4}$")
    ]],
    website:['', [Validators.required]],
    company:this.formBuilder.group({
      name:['',[Validators.required]],
      catchPhrase:'',
      bs:''
    })
  })
 
  isDuplicated:boolean = false;
  nameList:any  = ["abc","bbc","casad","Jimmy","Hello World"]



  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // this.userForm.patchValue({
    //   firstName:"adams"
    // })
    // 
    this.userService.getUsers().subscribe((users:User[])=>
      this.users = users
    );
  }


  onSubmit():void{
    
    const newUser:User = this.userForm.value;
    
    this.userService.addUser(newUser).subscribe( 
      res => console.log("Success", res),
      error => console.log("Error", error)
      // this.users.push(res)
    )
    
    // console.log("Form:",this.userForm.value);
    // console.log("User: ",this.users)
  }

  checkIsDuplicate(array,name){
    if(array.some( x => x == name)){
      this.isDuplicated = true;
      window.alert("Duplicate Found" + name)
    }
  }

  get name(){
    return this.userForm.get('name')
  }
  get username(){
    return this.userForm.get('username')
  }
  get email(){
    return this.userForm.get('email')
  }
  get phone(){
    return this.userForm.get('phone')
  }
  get website(){
    return this.userForm.get('website')
  }
  get street(){
    return this.userForm.get('address.street')
  }
  get suite(){
    return this.userForm.get('address.suite')
  }
  get city(){
    return this.userForm.get('address.city')
  }
  get zipcode(){
    return this.userForm.get('address.zipcode')
  }

  get companyname(){
    return this.userForm.get('company.name')
  }
}
