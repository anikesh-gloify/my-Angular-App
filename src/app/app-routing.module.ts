import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'

/*importing home component*/
import { HomeComponent } from './component/home/home.component'

/*importing form-component component*/
import { FormComponentComponent } from './component/form-component/form-component.component'


/*importing Lazy loading*/
import { LazyScrollComponent } from './component/lazy-scroll/lazy-scroll.component'

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'user', component:FormComponentComponent},
  { path: 'Lazyscroll', component:LazyScrollComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
