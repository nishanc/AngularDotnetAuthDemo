import { Component, HostListener } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ClientApp';
  constructor(
    private localStorageService: LocalStorageService) {}

  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload({ event }: { event: Event; }): void {
    this.localStorageService.clear();
  }
}
