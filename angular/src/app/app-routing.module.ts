import { NgModule } from '@angular/core';
import { ExtraOptions, Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'table', pathMatch: 'full' },
  {path: 'table', loadChildren: './table/table.module#TableModule' },
  { path: 'form', loadChildren: './form/form.module#FormModule' }
];

const config: ExtraOptions = {
  useHash: true,
  enableTracing: false,
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
