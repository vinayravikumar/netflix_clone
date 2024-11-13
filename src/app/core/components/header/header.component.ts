import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navList=["Home","TV Shows","News & Popular","My List","Browse by Language"]
  @Input({required:true}) userImg:string='';
  auth = inject(AuthService);
  username = JSON.parse(sessionStorage.getItem('loggedInUser')!).name;




}
