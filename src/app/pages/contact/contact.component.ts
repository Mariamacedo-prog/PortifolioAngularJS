import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  emailSend: string = 'https://formspree.io/f/myyvjpkv';

  formData = new FormGroup(
    {
      name: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required,Validators.email ]),
      telefone: new FormControl(""),
      message: new FormControl("", Validators.required)
    }
  )

  constructor(private router: Router, private http: HttpClient) { 
    
  }

  async ngOnInit() {
    document.documentElement.scrollTop = -2000;
  }

  onSubmit() {
      const email = this.formData.getRawValue();
      email.messages = ` 
      Telefone: ${email.telefone} 
      Mensagem: ${ email.message }
      `;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post(this.emailSend,
        { name: email.name, replyto: email.email, message: email.message },
        { 'headers': headers }).subscribe(
          response => {
            this.formData.patchValue({
              telefone: '',
              name: '',
              email:  '',
              message: ''
            })
          }
        );
  }

  maskTelefone(){
    let telefone1 = this.formData.getRawValue().telefone.replace(/[^0-9]/g,"").substring(0, 11);
    telefone1=telefone1.replace(/^(\d{2})(\d)/g,"($1) $2"); 
    telefone1=telefone1.replace(/(\d)(\d{4})$/,"$1-$2"); 
    this.formData.patchValue({
      telefone: telefone1
    })
  }

  isFormValid(): boolean {
    return this.formData.valid;
  }

}
