import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName = 'Hilton Hotels';

  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {

    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList: RoomList[] = [{
    roomNumber: 1,
    roomType: 'Deluxe Room',
    amenities: 'AirConditioner, Free Wi-Fi, TV, Bathroom, Kitche',
    price: 500,
    photos: '',
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Nov-2021')
  },
  {
    roomNumber: 2,
    roomType: 'Deluxe Room',
    amenities: 'AirConditioner, Free Wi-Fi, TV, Bathroom, Kitche',
    price: 1000,
    photos: '',
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Nov-2021')
  },
  {
    roomNumber: 3,
    roomType: 'Private Suite',
    amenities: 'AirConditioner, Free Wi-Fi, TV, Bathroom, Kitche',
    price: 15000,
    photos: '',
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Nov-2021')
  }

  ]


  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

}
