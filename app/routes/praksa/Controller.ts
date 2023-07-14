import { Controller } from 'cx/ui';
import { GET } from '../../api/util/methods';

export default class extends Controller {
   onInit() {
      this.store.init('$page.users', []);
      this.loadData();
   }

   async loadData() {
      let resp = await GET('posts');

      this.store.set('$page.posts', resp.posts);
   }

   addUserToList() {
      let user = this.store.get('$page.user');

      this.store.update('$page.users', (users) => [...users, user]);
      this.store.delete('$page.user');
   }
}
