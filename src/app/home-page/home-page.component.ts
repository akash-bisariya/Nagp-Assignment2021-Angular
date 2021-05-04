import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    // $("#myCarousel").carousel();
    
    // // Enable carousel control
    // $(".carousel-control-prev").click(function(){
    //     $("#myCarousel").carousel('prev');
    // });
    // $(".carousel-control-next").click(function(){
    //     $("#myCarousel").carousel('next');
    // });
    
    // // Enable carousel indicators
    // $(".slide-one").click(function(){
    //     $("#myCarousel").carousel(0);
    // });
    // $(".slide-two").click(function(){
    //     $("#myCarousel").carousel(1);
    // });
    // $(".slide-three").click(function(){
    //     $("#myCarousel").carousel(2);
    // });
  }

}
