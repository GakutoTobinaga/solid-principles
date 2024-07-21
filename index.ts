interface User {
    id: number;
    name: string;
}

class User implements User {
    users: User[] = [];
    constructor(){

    }
}
  class UserRemove extends User {
    removeUser(userId: number): void {
        const index = this.users.findIndex(u => u.id === userId);
        if (index !== -1) {
          this.users.splice(index, 1);
          console.log(`User with ID ${userId} removed.`);
          this.removeFromDatabase(userId);
        }
      }
    private removeFromDatabase(userId: number): void {
        // データベースからの削除ロジック
        console.log(`Removing user with ID ${userId} from database.`);
      }
}
class UserAdd extends User {
    addUser(user: User): void {
      this.users.push(user);
      console.log(`User ${user.name} added.`);
      this.saveToDatabase(user);
    }
  
    saveToDatabase(user: User): void {
        // データベースへの保存ロジック
        console.log(`Saving user ${user.name} to database.`);
      }
  }

class UserDisplay extends User {
    displayUsers(): void {
        console.log("Users:");
        this.users.forEach(user => console.log(`${user.id}: ${user.name}`));
      }
}