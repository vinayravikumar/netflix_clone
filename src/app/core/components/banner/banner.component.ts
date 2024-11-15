import { Component, inject, Input, input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { OverviewPipe } from '../../../shared/pipes/overview.pipe';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [OverviewPipe],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnChanges {

  @Input({required:true}) bannerTitle='';
  @Input() bannerOverview='';
  @Input() key='';
  private sanitizer = inject (DomSanitizer)
  videoUrl=this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.key}?autoplay=1&mute=1&loop=1&controls=0`);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['key']){
        this.videoUrl= this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.key}?autoplay=1&mute=1&loop=1&controls=0`);



    }

  }

}
