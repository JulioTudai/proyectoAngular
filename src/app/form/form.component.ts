import { Component } from '@angular/core';
import { AbstractControl, ValidationErrors, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class FormComponent {

  formSIngUp = new FormGroup({
    cliente: new FormControl('', [Validators.required, Validators.minLength(3)]),
    resena: new FormControl('', [ Validators.required, Validators.minLength(3),Validators.maxLength(150)]),
    valoracion: new FormControl('', Validators.required)
  });
  

  enviarFormulario() {
    if (this.formSIngUp.valid) {
      console.log(this.formSIngUp.value);
    } else {
      this.formSIngUp.markAllAsTouched();
    }
  }
}
