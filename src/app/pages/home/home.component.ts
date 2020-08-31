import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  i: number = 0;
  slideImgs: string[] = [
                          '',
                          'assets/pexels-cottonbro-5089108.jpg',
                          'assets/pexels-cottonbro-5089138.jpg',
                          'assets/pexels-cottonbro-5089186.jpg'];

  show: boolean = true;
  urlImg: string = 'assets/pexels-cottonbro-5089186.jpg';

  constructor() {
   }

  ngOnInit(): void {
  }

  public cambiarImg(){

    if(this.i >= this.slideImgs.length-1){
      this.i = 0;
    }
    this.urlImg = this.slideImgs[this.i += 1];
    this.show = !this.show
   
  }


}
