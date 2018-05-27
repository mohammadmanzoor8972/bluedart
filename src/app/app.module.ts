import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { VendorPerformanceComponent } from './vendor-performance/vendor-performance.component';
import { RoutesComponent } from './routes/routes.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { WhatifAnalysisComponent } from './whatif-analysis/whatif-analysis.component';
import { HelloDirective } from './hello.directive';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },  
  { path: 'home', component: HomeComponent },  
  { path: 'header', component: HeaderComponent },
  { path: 'vendor', component: VendorPerformanceComponent },
  { path: 'routes', component: RoutesComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'whatifAnalysis', component: WhatifAnalysisComponent },
  { path: '**', component: PageNotFoundComponentComponent },  
]

@NgModule({
  declarations: [    
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponentComponent,
    VendorPerformanceComponent,
    RoutesComponent,
    VehiclesComponent,
    WhatifAnalysisComponent,
    HelloDirective
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

