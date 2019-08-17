import { Component, OnInit } from '@angular/core';
import { FeatureFlagService } from '../../services/feature-flag/feature-flag.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(private featureFlagService: FeatureFlagService) { }

  public ngOnInit(): void {

  }

}
