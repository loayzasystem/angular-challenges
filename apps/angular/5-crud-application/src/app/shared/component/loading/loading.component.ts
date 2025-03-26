import { Component, inject } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingService } from '../../services/Loading.service';

@Component({
  selector: 'app-loading',
  styleUrls: ['./loading.component.css'],
  templateUrl: './loading.component.html',
  imports: [MatProgressSpinnerModule],
})
export class LoadingComponent {
  loadingService = inject(LoadingService);
}
