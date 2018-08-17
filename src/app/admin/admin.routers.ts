import { HomeComponent } from './admin-home/admin-home.component';



export const routes = [
    {
        path: '', children: [
            { path: '', component: HomeComponent },
            //{ path: 'post-detail/:id', component: postDetailComponent },
            //{ path: 'new', component: NewPostComponent },
            //{ path: 'edit/:id', component: EditPostComponent }

        ]
    },
];