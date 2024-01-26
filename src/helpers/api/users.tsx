// userData.ts

export interface User {
    id: number; 
        username: string;
    password: string;
  }
  
  const users: User[] = [
    { id: 1, username: 'voter', password: 'voter123' },
    { id: 2, username: 'jude', password: 'voter123' },
    { id: 3, username: 'Ben', password: 'voter123' },
    { id: 4, username: 'Mark', password: 'voter123' },
    { id: 5, username: 'Jed', password: 'voter123' },
    { id: 6, username: 'admin', password: 'admin123' },
    { id: 7, username: 'Itachi', password: 'admin123' },
    { id: 8, username: 'Naruto', password: 'admin123' },
    { id: 9, username: 'Itadori', password: 'admin123' },
    { id: 10, username: 'Sasseke', password: 'admin123' },
  ];
  
  export default users;
  