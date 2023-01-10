import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  fileName = '';
  file !:File;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onFileSelected(event:any) {
    this.file = event.target.files[0];

    if (this.file) {
      this.fileName = this.file.name;
      const formData = new FormData();
      formData.append("image", this.file);
      console.log(event);
      console.warn(this.file);
      
      const upload$ = this.http.post("http://localhost:3000/artwork/api/", formData, {
        reportProgress: true,
        observe: 'events'
      }).pipe().subscribe(res => console.log(res)
      );

    }
  }

}
