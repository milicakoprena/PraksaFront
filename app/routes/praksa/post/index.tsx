import { Repeater, bind } from 'cx/ui';
import Controller from './Controller';

export default () => (
   <cx>
      <div controller={Controller} className="m-4 flex flex-col">
         <div className="flex flex-1 flex-col">
            <h2 text-bind="$page.post.title" className="text-3xl font-semibold" />
            <p text-bind="$page.post.body" className="text-lg" />
         </div>
         <div>
            <Repeater records={bind('$page.post.tags')}>
               <p className="text-gray-400" text-bind="$record" />
            </Repeater>
         </div>
      </div>
   </cx>
);
