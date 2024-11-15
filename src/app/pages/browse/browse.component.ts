import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../shared/services/auth.service';
import { HeaderComponent } from "../../core/components/header/header.component";
import { BannerComponent } from '../../core/components/banner/banner.component';
import { MovieService } from '../../shared/services/movie.service';
import { MovieCarousalComponent } from "../../shared/components/movie-carousal/movie-carousal.component";
import { IVideoContent } from '../../shared/models/video-content.interface';
import { forkJoin, map, Observable } from 'rxjs';


@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule, HeaderComponent, BannerComponent, MovieCarousalComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent implements OnInit {

  auth=inject(AuthService);
  movieService=inject(MovieService)
  name=JSON.parse(sessionStorage.getItem("loggedInUser")!).name;
  userProfileImg=JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;
  email=JSON.parse(sessionStorage.getItem("loggedInUser")!).email;
  bannerDetail$=new Observable<any>();
  bannerVideo$=new Observable<any>();

  movies: IVideoContent[] = [];
  tvShows: IVideoContent[] = [];
  ratedMovies: IVideoContent[] = [];
  nowPlayingMovies: IVideoContent[] = [];
  popularMovies: IVideoContent[] = [];
  topRatedMovies: IVideoContent[] = [];
  upcomingMovies: IVideoContent[] = [];


  sources=[
    this.movieService.getMovies(),
    this.movieService.getTvShows(),
    this.movieService.getRatedMovies(),
    this.movieService.getNowPlayingMovies(),
    this.movieService.getUpcomingMovies(),
    this.movieService.getPopularMovies(),
    this.movieService.getTopRated()
  ];

  ngOnInit(): void {
    console.log("my data",this.sources);
    forkJoin(this.sources)
      .pipe(
        map(([movies, tvShows, ratedMovies, nowPlaying, popular, upcomingMovies, topRated]) => {
          this.bannerDetail$=this.movieService.getBannerDetail(movies.results[0].id);
          this.bannerVideo$=this.movieService.getBannerVideo(movies.results[0].id);
          return { movies, tvShows, ratedMovies, nowPlaying, popular, upcomingMovies, topRated }

        })
      ).subscribe((res: any) => {
      this.movies=res.movies.results as IVideoContent[];
      this.tvShows=res.tvShows.results as IVideoContent[];
      this.ratedMovies = res.ratedMovies.results as IVideoContent[];
      this.nowPlayingMovies = res.nowPlaying.results as IVideoContent[];
      this.popularMovies = res.popular.results as IVideoContent[];
      this.upcomingMovies = res.upcomingMovies.results as IVideoContent[];
      this.topRatedMovies = res.topRated.results as IVideoContent[];
    })
      console.log("my data 2 ", this.tvShows);
    }

  signOut(){
    sessionStorage.removeItem("loggedInUser");
    this.auth.signOut();
  }

  }
