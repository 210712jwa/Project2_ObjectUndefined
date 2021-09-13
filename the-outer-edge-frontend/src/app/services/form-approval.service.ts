import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Form } from '../Form';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class FormApprovalService {
  private apiUrl = 'http://localhost:5000/forms'

  constructor(private http: HttpClient) { }

  getForms(): Observable<Form[]> {
    return this.http.get<Form[]>(this.apiUrl);
  }

  deleteForm(form: Form): Observable<Form> {
    const url = `${this.apiUrl}/${form.id}`;
    return this.http.delete<Form>(url);
  }

  updateFormApproved(form: Form): Observable<Form> {
    const url = `${this.apiUrl}/${form.id}`;
    return this.http.put<Form>(url, form, httpOptions);
  }
}
