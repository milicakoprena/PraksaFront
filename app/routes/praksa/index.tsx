import { Button, Grid, Link, List, LookupField, NumberField, TextField, ValidationGroup } from 'cx/widgets';
import Controller from './Controller';
import { KeySelection, LabelsLeftLayout, LabelsTopLayout, expr } from 'cx/ui';

export default () => (
   <cx>
      <div controller={Controller} className="m-4 flex flex-col overflow-hidden">
         <div className="flex">
            <div className="flex-1 p-2">
               <ValidationGroup layout={LabelsLeftLayout} invalid-bind="$page.formInvalid">
                  <TextField value-bind="$page.user.firstName" label="First name" required />
                  <TextField value-bind="$page.user.lastName" label="Last name" required />
                  <NumberField value-bind="$page.user.age" label="Age" required />
                  <LookupField label="Sex" options={options} value-bind="$page.user.sex" required />
               </ValidationGroup>
               <Button
                  text="Add icon"
                  icon="plus"
                  mod="primary"
                  onClick="addUserToList"
                  disabled-bind="$page.formInvalid"
               />
            </div>
            <div className="flex-1 p-2">
               <List records-bind="$page.users">
                  <div
                     text-tpl="{$record.firstName} {$record.lastName}, {$record.age}"
                     class={{
                        'text-blue-600': expr('{$record.sex} == 1'),
                        'text-red-600': expr('{$record.sex} == 2'),
                     }}
                  />
               </List>
            </div>
         </div>
         <div className="flex-1 overflow-y-auto">
            <Grid records-bind="$page.posts" columns={gridColumns} scrollable className="h-full" />
         </div>
      </div>
   </cx>
);

const options = [
   { id: 1, text: 'Male' },
   { id: 2, text: 'Female' },
];

const gridColumns = [
   {
      header: 'Id',
      field: 'id',
   },
   {
      header: 'Title',
      field: 'title',
      items: (
         <cx>
            <Link
               href-tpl="~/praksa/{$record.id}"
               url-bind="url"
               text-bind="$record.title"
               className="text-blue-400 hover:text-blue-600"
            />
         </cx>
      ),
   },
   {
      header: 'UserId',
      field: 'userId',
   },
];
