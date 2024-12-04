import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'upload',
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
  uploadForm!: FormGroup;

  constructor(private fb: FormBuilder){
    this.uploadForm = this.fb.group({
      file: [null, Validators.required]
    })
  }

  onFileChange(event: any){
    const file = event.target.files[0];
    if(file){
      this.uploadForm.patchValue({file})
    }
  }

  uploadFile(){
    if(this.uploadForm.valid){
      const formData = new FormData();
      formData.append('file', this.uploadForm.get('file')?.value);

      console.log('Uploading', formData);
    }
  }
}
