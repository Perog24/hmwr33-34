interface NavigationLink {
   path: string;
   name: string;
 }

export const navigationLinks: NavigationLink[] = [
   {
path: '/',
name:'Home'
   },
   {
path: '/users',
name:'Users'
   },
   {
path: '/posts',
name:'Posts'
   },
   {
path: '/comments',
name:'Comments'
   }
];
