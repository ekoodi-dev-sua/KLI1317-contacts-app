import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../services/contact.service';
import {ToolbarService} from '../../ui/toolbar/toolbar.service';
import {ToolbarOptions} from '../../ui/toolbar/toolbar-options';
import {Contact} from '../contact';

@Component({
  selector: 'app-contact-map',
  templateUrl: './contact-map.component.html',
  styleUrls: ['./contact-map.component.css']
})
export class ContactMapComponent implements OnInit {

  streetAddress: string;
  city: string;
  mapUrl: string;

  constructor(private route: ActivatedRoute, private toolbar: ToolbarService) { }

  ngOnInit() {
    this.toolbar.setToolbarOptions(new ToolbarOptions('back', 'Map'));
    this.streetAddress = this.route.snapshot.paramMap.get('streetAddress');
    this.city = this.route.snapshot.paramMap.get('city');
    console.log('ContactMapComponent');
    console.log('Street address: ' + this.streetAddress);
    console.log('City: ' + this.city);
    this.createMapUrl();
  }

  createMapUrl() {
    const googleMapsUrlBase = 'https://www.google.com/maps?q=';
    const googleMapsUrlParams = '&output=embed';
    this.mapUrl = googleMapsUrlBase + this.streetAddress + this.city + googleMapsUrlParams;
  }

}
