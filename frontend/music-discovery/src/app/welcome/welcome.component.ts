import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  //Inject depenency
  //ActivatedRoute
  message = 'Some Welcome Message'
  name = ''
  welcomeMessageFromService:string

  constructor(private route: ActivatedRoute,
    private service:WelcomeDataService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']
    console.log(this.route.snapshot.params['name'])
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    console.log('last line of get welcome message')
    // console.log("get welcome message")
  }

  getWelcomeMessageWithParameter() {
    //console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    console.log('last line of get welcome message')
    // console.log("get welcome message")
  }

  handleSuccessfulResponse(response: any) {
    this.welcomeMessageFromService = response
    console.log(response);
  }

  handleErrorResponse(error: any) {
    // console.log(error);
    console.log(error.error)
    this.welcomeMessageFromService = error.error

  }

}
