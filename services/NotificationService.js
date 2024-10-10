class NotificationService {
    constructor() {
      if (this.constructor === NotificationService) {
        throw new Error("Abstract classes can't be instantiated.");
      }
    }
  
    async send(userId, message) {
      throw new Error("Method 'send()' must be implemented.");
    }
}