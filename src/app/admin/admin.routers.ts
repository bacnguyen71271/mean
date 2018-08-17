import { AdminHomeComponent } from './admin-home/admin-home.component';



export const routes = [
    {
        path: '', children: [
            { path: '', component: AdminHomeComponent },
            //{ path: 'post-detail/:id', component: postDetailComponent },
            //{ path: 'new', component: NewPostComponent },
            //{ path: 'edit/:id', component: EditPostComponent }
        ]
    },
];