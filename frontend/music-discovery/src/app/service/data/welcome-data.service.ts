import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  executeHelloWorldBeanService() {
    return this.http.get('http://localhost:8080/hello-world',
    {
      responseType: 'text'
    })
    //console.log("Execute Hello World Bean Service")
  }

  executeHelloWorldServiceWithPathVariable(name: any) {
    return this.http.get(`http://localhost:8080/hello-world/path-variable/${name}`,
    {
      responseType: 'text'
    })
    //console.log("Execute Hello World Bean Service")
  }
}
