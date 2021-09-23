import { LandingComponent } from "./landing/landing.component";


export const routarr=[
    {path:'home',component:LandingComponent},
    {path:'',redirectTo:'home', pathMatch: 'full' },
    {path:'users',loadChildren:()=>import('./user/user.module').then(mod=>mod.UserModule) }
]