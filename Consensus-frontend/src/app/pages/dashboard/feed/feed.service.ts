import {Injectable} from '@angular/core';

@Injectable()
export class FeedService {

  private _data = [
    {
      type: 'text-message',
      author: 'Kostya',
      surname: 'Danovsky',
      header: 'Posted new message',
      text: 'Paid $500 for rent',
      time: 'Today 11:55 pm',
      ago: '25 minutes ago',
      expanded: false,
    }, /*{
      type: 'video-message',
      author: 'Andrey',
      surname: 'Hrabouski',
      header: 'Added new video',
      text: '"Vader and Me"',
      preview: 'app/feed/vader-and-me-preview.png',
      link: 'https://www.youtube.com/watch?v=IfcpzBbbamk',
      time: 'Today 9:30 pm',
      ago: '3 hrs ago',
      expanded: false,
    }, {
      type: 'image-message',
      author: 'Vlad',
      surname: 'Lugovsky',
      header: 'Added new image',
      text: '"My little kitten"',
      preview: 'app/feed/my-little-kitten.png',
      link: 'http://api.ning.com/files/DtcI2O2Ry7A7VhVxeiWfGU9WkHcMy4WSTWZ79oxJq*h0iXvVGndfD7CIYy-Ax-UAFCBCdqXI4GCBw3FOLKTTjQc*2cmpdOXJ/1082127884.jpeg',
      time: 'Today 2:20 pm',
      ago: '10 hrs ago',
      expanded: false,
    }, */{
      type: 'text-message',
      author: 'Nasta',
      surname: 'Linnie',
      header: 'Posted new message',
      text: 'Paid $200 for rent',
      time: '11.11.2015',
      ago: '2 days ago',
      expanded: false,
    },/* {
      type: 'geo-message',
      author: 'Nick',
      surname: 'Cat',
      header: 'Posted location',
      text: '"New York, USA"',
      preview: 'app/feed/new-york-location.png',
      link: 'https://www.google.by/maps/place/New+York,+NY,+USA/@40.7201111,-73.9893872,14z',
      time: '11.11.2015',
      ago: '2 days ago',
      expanded: false,
    }, */{
      type: 'text-message',
      author: 'Vlad',
      surname: 'Lugovsky',
      header: 'Posted new message',
      text: "Paid $100 for Homeowners Association Fee(HOA)",
      time: '12.11.2015',
      ago: '3 days ago',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Andrey',
      surname: 'Hrabouski',
      header: 'Posted new message',
      text: 'Paid $100 for Homeowners Association Fee(HOA)".',
      time: '14.11.2015',
      ago: '5 days ago',
      expanded: false,
    },
    {
      type: 'text-message',
      author: 'Vlad',
      surname: 'Lugovsky',
      header: 'Posted new message',
      text: "Paid $100 for Homeowners Association Fee(HOA)",
      time: '12.11.2015',
      ago: '3 days ago',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Andrey',
      surname: 'Hrabouski',
      header: 'Posted new message',
      text: 'Paid $100 for Homeowners Association Fee(HOA)".',
      time: '14.11.2015',
      ago: '5 days ago',
      expanded: false,
    },
    {
      type: 'text-message',
      author: 'Vlad',
      surname: 'Lugovsky',
      header: 'Posted new message',
      text: "Paid $100 for Homeowners Association Fee(HOA)",
      time: '12.11.2015',
      ago: '3 days ago',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Andrey',
      surname: 'Hrabouski',
      header: 'Posted new message',
      text: 'Paid $100 for Homeowners Association Fee(HOA)".',
      time: '14.11.2015',
      ago: '5 days ago',
      expanded: false,
    }
  ];

  getData() {
    return this._data;
  }
}
