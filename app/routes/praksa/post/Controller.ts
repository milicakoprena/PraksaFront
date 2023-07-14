import { Controller } from 'cx/ui';
import { GET } from '../../../api/util/methods';

export default class extends Controller {
   onInit(): void {
      this.loadData();
   }

   async loadData() {
      let postId = this.store.get('$route.id');
      let resp = await GET(`posts/${postId}`);
      this.store.set('$page.post', resp);
   }
}
