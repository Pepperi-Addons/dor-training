import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddonComponent } from './addon/addon.component';
import { TodoForm } from './addon/form/todo-form.component';

// Important for single spa
@Component({
    selector: 'app-empty-route',
    template: '<div></div>',
})
export class EmptyRouteComponent {}

const routes: Routes = [
    {
        path: `settings/:addon_uuid`,
        children: [
            {
                path: 'Todos',
                component: AddonComponent,
            },
            {
                path: 'Todos/:todo_uuid',
                component: TodoForm
            }
        ]
    },
    {
        path: '**',
        component: EmptyRouteComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }



