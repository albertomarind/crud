import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cards = [
    {
      pathImage: '',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, similique explicabo debitis beatae veniam eaque illo placeat a veritatis necessitatibus voluptatum sequi tempore labore, animi eum praesentium non. Magnam, iure!'
    },
    {
      pathImage: 'https://cdn.aarp.net/content/dam/aarp/auto/2017/07/1140-hyundai-ioniq-great-cars-road-trips-esp.imgcache.revfd63981c76a67e8a4ed28622bb76883e.web.900.513.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, similique explicabo debitis beatae veniam eaque illo placeat a veritatis necessitatibus voluptatum sequi tempore labore, animi eum praesentium non. Magnam, iure!'
    },
    {
      pathImage: 'https://cdn.aarp.net/content/dam/aarp/auto/2017/07/1140-hyundai-ioniq-great-cars-road-trips-esp.imgcache.revfd63981c76a67e8a4ed28622bb76883e.web.900.513.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, similique explicabo debitis beatae veniam eaque illo placeat a veritatis necessitatibus voluptatum sequi tempore labore, animi eum praesentium non. Magnam, iure!'
    },
    {
      pathImage: 'https://cdn.aarp.net/content/dam/aarp/auto/2017/07/1140-hyundai-ioniq-great-cars-road-trips-esp.imgcache.revfd63981c76a67e8a4ed28622bb76883e.web.900.513.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, similique explicabo debitis beatae veniam eaque illo placeat a veritatis necessitatibus voluptatum sequi tempore labore, animi eum praesentium non. Magnam, iure!'
    },
    {
      pathImage: 'https://cdn.aarp.net/content/dam/aarp/auto/2017/07/1140-hyundai-ioniq-great-cars-road-trips-esp.imgcache.revfd63981c76a67e8a4ed28622bb76883e.web.900.513.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, similique explicabo debitis beatae veniam eaque illo placeat a veritatis necessitatibus voluptatum sequi tempore labore, animi eum praesentium non. Magnam, iure!'
    },
    {
      pathImage: 'https://cdn.aarp.net/content/dam/aarp/auto/2017/07/1140-hyundai-ioniq-great-cars-road-trips-esp.imgcache.revfd63981c76a67e8a4ed28622bb76883e.web.900.513.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, similique explicabo debitis beatae veniam eaque illo placeat a veritatis necessitatibus voluptatum sequi tempore labore, animi eum praesentium non. Magnam, iure!'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
