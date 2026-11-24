import{m as P,p as M}from"./main-QQSPUZS3.js";import{$a as t_,Ar as G0,At as Zte,Ba as p,Br as Jn,Dt as ZP,Fa as nm,Fr as H_,G as Nf,Hr as KO,It as bae,Ki as Zb,L as Koe,La as ok,Li as WL,Lr as I,Ni as Vk,Pn as tre,Pt as are,Si as Rk,Ta as k,Ti as TZ,Ur as Kb,Vt as c4,W as Mze,Wa as q0,Wr as Kg,Xr as Mk,Yi as _u,Zi as ar,ar as Ab,bn as oi,co as wg,da as ge$1,eo as tk,j as I4,jr as GV,ki as U_,lr as B_,ni as Nf$1,oo as vt,or as An,pi as QL,qr as LO,ra as de,rt as Ru,sn as j4,ti as NZ,wa as jk,xa as j_,xi as RZ,ya as jO,zr as Jc}from"./chunk-t_lpM8Oc.js";import{t as r}from"./chunk-zystk1pz.js";var Pe=()=>({label:`How to install PO`,url:`/guides/how-install`});var Ae=o=>[o];var ue=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-dropdown-basic`]],standalone:!1,decls:1,vars:4,consts:[[`p-label`,`PO Dropdown`,3,`p-actions`]],template:function(i,a){i&1&&_u(0,`po-dropdown`,0),i&2&&Ab(`p-actions`,jk(2,Ae,Vk(1,Pe)))},dependencies:[ZP],encapsulation:2,changeDetection:1})}return o})();var be=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-dropdown-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-dropdown-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-dropdown-basic/sample-po-dropdown-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-dropdown-basic/sample-po-dropdown-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,a){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Dropdown Basic`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-dropdown-basic`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-dropdown-basic/sample-po-dropdown-basic.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<po-dropdown p-label="PO Dropdown" [p-actions]="[{ label: 'How to install PO', url: '/guides/how-install' }]">
</po-dropdown>
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-dropdown-basic/sample-po-dropdown-basic.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dropdown-basic',
  templateUrl: './sample-po-dropdown-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDropdownBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,ue],encapsulation:2,changeDetection:1})}return o})();var ge=(()=>{class o{poNotification=p(Ru);action;actions;parentList;label;properties;size;actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Separator`,value:`separator`},{label:`Selected`,value:`selected`},{label:`Visible`,value:`visible`}];iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`an an-globe`,label:`an an-globe`},{value:`fa fa-podcast`,label:`fa fa-podcast`}];propertiesOptions=[{value:`disabled`,label:`Disabled`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];ngOnInit(){this.restore()}addAction(l){let i=r({},l);if(i.action=i.action?this.showAction.bind(this,i.action):void 0,!l.parent)this.actions=[...this.actions,i];else{let a=this.getActionNode(this.actions,l.parent);a?a.subItems=[...a.subItems||[],i]:this.actions=[...this.actions,i]}this.actions=[].concat(this.actions),this.parentList=this.updateParentList(this.actions),this.restoreActionForm()}getActionNode(l,i){if(!(!l||!Array.isArray(l)||!i))for(let a of l){if(a.label===i||a.value===i)return a;if(a.subItems&&Array.isArray(a.subItems)){let c=this.getActionNode(a.subItems,i);if(c)return c}}}updateParentList(l,i=0,a=[]){return!l||!Array.isArray(l)||l.forEach(c=>{let{label:u}=c;a.push({label:`${`-`.repeat(i)} ${u}`,value:u}),c.subItems&&Array.isArray(c.subItems)&&this.updateParentList(c.subItems,i+1,a)}),a}restore(){this.actions=[],this.parentList=[],this.label=`PO Dropdown`,this.size=`medium`,this.properties=[],this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null,parent:void 0}}showAction(l){this.poNotification.success(`Action clicked: ${l}`)}static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-dropdown-labs`]],standalone:!1,decls:23,vars:21,consts:[[`formAction`,`ngForm`],[`f`,`ngForm`],[1,`po-row`],[1,`po-offset-xl-5`,`po-offset-lg-5`,3,`p-actions`,`p-disabled`,`p-label`,`p-size`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`actionURL`,`p-label`,`URL`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`parent`,`p-label`,`Subitems`,`p-placeholder`,`Add subitems`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`action`,`p-columns`,`4`,`p-indeterminate`,``,`p-label`,`Action properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add Action`,1,`po-md-4`,`po-lg-2`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(i,a){if(i&1){let c=KO();Jc(0,`div`,2),_u(1,`po-dropdown`,3),Kg(),_u(2,`po-divider`),Jc(3,`form`,null,0)(5,`po-input`,4),G0(),Zb(`ngModelChange`,function(p){return U_(c),Rk(a.action.label,p)||(a.action.label=p),H_(p)}),Kg(),Jc(6,`po-input`,5),G0(),Zb(`ngModelChange`,function(p){return U_(c),Rk(a.action.action,p)||(a.action.action=p),H_(p)}),Kg(),Jc(7,`po-input`,6),G0(),Zb(`ngModelChange`,function(p){return U_(c),Rk(a.action.url,p)||(a.action.url=p),H_(p)}),Kg(),Jc(8,`po-select`,7),G0(),Zb(`ngModelChange`,function(p){return U_(c),Rk(a.action.type,p)||(a.action.type=p),H_(p)}),Kg(),Jc(9,`po-select`,8),G0(),Zb(`ngModelChange`,function(p){return U_(c),Rk(a.action.icon,p)||(a.action.icon=p),H_(p)}),Kg(),Jc(10,`po-select`,9),G0(),Zb(`ngModelChange`,function(p){return U_(c),Rk(a.action.parent,p)||(a.action.parent=p),H_(p)}),Kg(),Jc(11,`po-checkbox-group`,10),G0(),Zb(`ngModelChange`,function(p){return U_(c),Rk(a.action,p)||(a.action=p),H_(p)}),Kg(),Jc(12,`div`,2)(13,`po-button`,11),vt(`p-click`,function(){return a.addAction(a.action)}),Kg()()(),_u(14,`po-divider`),Jc(15,`form`,null,1)(17,`div`,2)(18,`po-input`,12),G0(),Zb(`ngModelChange`,function(p){return U_(c),Rk(a.label,p)||(a.label=p),H_(p)}),Kg()(),Jc(19,`po-checkbox-group`,13),G0(),Zb(`ngModelChange`,function(p){return U_(c),Rk(a.properties,p)||(a.properties=p),H_(p)}),Kg(),Jc(20,`po-radio-group`,14),G0(),Zb(`ngModelChange`,function(p){return U_(c),Rk(a.size,p)||(a.size=p),H_(p)}),Kg(),Jc(21,`div`,2)(22,`po-button`,15),vt(`p-click`,function(){return a.restore()}),Kg()()()}if(i&2){let c=ok(4);wg(),Ab(`p-actions`,a.actions)(`p-disabled`,a.properties.includes(`disabled`))(`p-label`,a.label)(`p-size`,a.size),wg(4),Kb(`ngModel`,a.action.label),q0(),wg(),Kb(`ngModel`,a.action.action),q0(),wg(),Kb(`ngModel`,a.action.url),q0(),wg(),Kb(`ngModel`,a.action.type),Ab(`p-options`,a.typeOptions),q0(),wg(),Kb(`ngModel`,a.action.icon),Ab(`p-options`,a.iconOptions),q0(),wg(),Kb(`ngModel`,a.action.parent),Ab(`p-options`,a.parentList),q0(),wg(),Kb(`ngModel`,a.action),Ab(`p-options`,a.actionOptions),q0(),wg(2),Ab(`p-disabled`,c.form.invalid),wg(5),Kb(`ngModel`,a.label),q0(),wg(),Kb(`ngModel`,a.properties),Ab(`p-options`,a.propertiesOptions),q0(),wg(),Kb(`ngModel`,a.size),Ab(`p-options`,a.sizeOptions),q0()}},dependencies:[NZ,TZ,RZ,QL,WL,oi,Nf,ZP,I4,j4,Zte,Koe],encapsulation:2,changeDetection:1})}return o})();var Se=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-dropdown-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-dropdown-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-dropdown-labs/sample-po-dropdown-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-dropdown-labs/sample-po-dropdown-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,a){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Dropdown Labs`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-dropdown-labs`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-dropdown-labs/sample-po-dropdown-labs.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<div class="po-row">
  <po-dropdown
    class="po-offset-xl-5 po-offset-lg-5"
    [p-actions]="actions"
    [p-disabled]="properties.includes('disabled')"
    [p-label]="label"
    [p-size]="size"
  >
  </po-dropdown>
</div>

<po-divider />

<form #formAction="ngForm">
  <po-input class="po-md-6 po-lg-4" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required>
  </po-input>

  <po-input class="po-md-6 po-lg-4" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action">
  </po-input>

  <po-input class="po-md-6 po-lg-4" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>

  <po-select class="po-md-6 po-lg-4" name="type" [(ngModel)]="action.type" p-label="Type" [p-options]="typeOptions">
  </po-select>

  <po-select class="po-md-6 po-lg-4" name="icon" [(ngModel)]="action.icon" p-label="Icon" [p-options]="iconOptions">
  </po-select>

  <po-select
    class="po-md-6 po-lg-4"
    name="parent"
    [(ngModel)]="action.parent"
    p-label="Subitems"
    p-placeholder="Add subitems"
    [p-options]="parentList"
  >
  </po-select>

  <po-checkbox-group
    class="po-md-12"
    name="action"
    [(ngModel)]="action"
    p-columns="4"
    p-indeterminate
    p-label="Action properties"
    [p-options]="actionOptions"
  >
  </po-checkbox-group>

  <div class="po-row">
    <po-button
      class="po-md-4 po-lg-2"
      p-label="Add Action"
      [p-disabled]="formAction.form.invalid"
      (p-click)="addAction(action)"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label" p-required> </po-input>
  </div>
  <po-checkbox-group
    class="po-md-6"
    name="properties"
    [(ngModel)]="properties"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-md-12 po-lg-6"
    name="size"
    [(ngModel)]="size"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-dropdown-labs/sample-po-dropdown-labs.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoSelectOption,
  PoDropdownAction,
  PoRadioGroupOption,
  PoNotificationService
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dropdown-labs',
  templateUrl: './sample-po-dropdown-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDropdownLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action: PoDropdownAction & { parent?: string };
  actions: Array<PoDropdownAction>;
  parentList: Array<PoSelectOption>;
  label: string;
  properties: Array<string>;
  size: string;

  public readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Separator', value: 'separator' },
    { label: 'Selected', value: 'selected' },
    { label: 'Visible', value: 'visible' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'disabled', label: 'Disabled' }];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  ngOnInit() {
    this.restore();
  }

  addAction(action: PoDropdownAction & { parent?: string }) {
    const newAction: PoDropdownAction = { ...action };
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;

    if (!action.parent) {
      this.actions = [...this.actions, newAction];
    } else {
      const parentNode = this.getActionNode(this.actions, action.parent);
      if (parentNode) {
        parentNode.subItems = [...(parentNode.subItems || []), newAction];
      } else {
        this.actions = [...this.actions, newAction];
      }
    }

    this.actions = [].concat(this.actions);
    this.parentList = this.updateParentList(this.actions);

    this.restoreActionForm();
  }

  private getActionNode(items: Array<PoDropdownAction>, value: string): PoDropdownAction | undefined {
    if (!items || !Array.isArray(items) || !value) {
      return undefined;
    }

    for (const item of items) {
      if (item.label === value || (item as any).value === value) {
        return item;
      }

      if (item.subItems && Array.isArray(item.subItems)) {
        const found = this.getActionNode(item.subItems, value);
        if (found) {
          return found;
        }
      }
    }

    return undefined;
  }

  private updateParentList(
    items: Array<PoDropdownAction>,
    level = 0,
    parentList: Array<PoSelectOption> = []
  ): Array<PoSelectOption> {
    if (!items || !Array.isArray(items)) {
      return parentList;
    }

    items.forEach(item => {
      const { label } = item;
      parentList.push({ label: \`\${'-'.repeat(level)} \${label}\`, value: label });

      if (item.subItems && Array.isArray(item.subItems)) {
        this.updateParentList(item.subItems, level + 1, parentList);
      }
    });

    return parentList;
  }

  restore() {
    this.actions = [];
    this.parentList = [];
    this.label = 'PO Dropdown';
    this.size = 'medium';
    this.properties = [];
    this.restoreActionForm();
  }

  restoreActionForm() {
    this.action = {
      label: undefined,
      visible: null,
      parent: undefined
    };
  }

  showAction(label: string): void {
    this.poNotification.success(\`Action clicked: \${label}\`);
  }
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,ge],encapsulation:2,changeDetection:1})}return o})();function Fe(o,j){if(o&1&&(Jc(0,`div`,0),_u(1,`po-avatar`,2),Jc(2,`div`,3)(3,`span`,4),Mk(4),Kg(),Jc(5,`span`,5),Mk(6),Kg(),Jc(7,`span`,5),Mk(8),Kg()()(),Jc(9,`div`,0),_u(10,`po-dropdown`,6),Kg()),o&2){let l=tk();wg(),Ab(`p-src`,l.userAvatar),wg(3),nm(` `,l.currentFriend.name,` `),wg(2),nm(` `,l.currentFriend.mutualFriends,` mutual friends `),wg(2),nm(` Resides in `,l.currentFriend.reside,` `),wg(2),Ab(`p-actions`,l.answers)}}function ze(o,j){o&1&&(Jc(0,`div`,0)(1,`span`,7),Mk(2,`Congratulations TOTVS, no more requests!`),Kg()())}var Ee=(()=>{class o{poNotification=p(Ru);currentFriend;userAvatar=`https://lorempixel.com/144/144/`;answers=[{label:`Confirm`,action:this.notification.bind(this,`added`,`success`)},{label:`Ignore`,action:this.notification.bind(this,`ignored`,`warning`)},{label:`Block`,action:this.notification.bind(this,`blocked`,`information`)}];newFriends=[{name:`Mr. Dev PO`,mutualFriends:`7`,reside:`Mountain View, CA`},{name:`Mr. AI PO`,mutualFriends:`99+`,reside:`New York City, NY`},{name:`Mr. UX PO`,mutualFriends:`14`,reside:`Los Angeles, CA`}];indexFriend=0;ngOnInit(){this.setCurrentFriend(0)}notification(l,i){this.poNotification[i](`User ${l} successfully!`),this.indexFriend++,this.setCurrentFriend(this.indexFriend)}setCurrentFriend(l){this.currentFriend=this.newFriends[l]}static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-dropdown-social-network`]],standalone:!1,decls:4,vars:1,consts:[[1,`po-row`],[`p-title`,`Friend Request`,1,`po-lg-6`],[`p-size`,`lg`,1,`po-md-4`,3,`p-src`],[1,`po-md-8`],[1,`po-sm-12`,`po-font-subtitle`],[1,`po-sm-12`,`po-font-text`],[`p-label`,`Add as friend?`,1,`po-lg-8`,`po-offset-md-4`,`po-offset-lg-4`,`po-offset-xl-4`,3,`p-actions`],[1,`po-lg-8`,`po-font-subtitle`]],template:function(i,a){i&1&&(Jc(0,`div`,0)(1,`po-widget`,1),LO(2,Fe,11,5)(3,ze,3,0,`div`,0),Kg()()),i&2&&(wg(2),jO(a.currentFriend?2:3))},dependencies:[c4,ZP,bae],encapsulation:2,changeDetection:1})}return o})();var fe=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-dropdown-social-network-view`]],standalone:!1,decls:42,vars:0,consts:[[`id`,`sample-po-dropdown-social-network`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-dropdown-social-network/sample-po-dropdown-social-network.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-dropdown-social-network/sample-po-dropdown-social-network.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,a){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Dropdown - Social Network`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-dropdown-social-network`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-dropdown-social-network/sample-po-dropdown-social-network.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<div class="po-row">
  <po-widget class="po-lg-6" p-title="Friend Request">
    @if (currentFriend) {
      <div class="po-row">
        <po-avatar class="po-md-4" p-size="lg" [p-src]="userAvatar"> </po-avatar>
        <div class="po-md-8">
          <span class="po-sm-12 po-font-subtitle">
            `),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` currentFriend.name `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,`
          </span>
          <span class="po-sm-12 po-font-text"> `),Jc(22,`span`),B_(),Mk(23,`{{`),j_(),Kg(),Mk(24,` currentFriend.mutualFriends `),Jc(25,`span`),B_(),Mk(26,`}}`),j_(),Kg(),Mk(27,` mutual friends </span>
          <span class="po-sm-12 po-font-text"> Resides in `),Jc(28,`span`),B_(),Mk(29,`{{`),j_(),Kg(),Mk(30,` currentFriend.reside `),Jc(31,`span`),B_(),Mk(32,`}}`),j_(),Kg(),Mk(33,` </span>
        </div>
      </div>
      <div class="po-row">
        <po-dropdown
          class="po-lg-8 po-offset-md-4 po-offset-lg-4 po-offset-xl-4"
          p-label="Add as friend?"
          [p-actions]="answers"
        >
        </po-dropdown>
      </div>
    } @else {
      <div class="po-row">
        <span class="po-lg-8 po-font-subtitle">Congratulations TOTVS, no more requests!</span>
      </div>
    }
  </po-widget>
</div>
`),Kg()()()(),Jc(34,`po-tab`,9)(35,`div`)(36,`label`,6),Mk(37,`sample-po-dropdown-social-network/sample-po-dropdown-social-network.component.ts`),Kg(),Jc(38,`div`,10)(39,`pre`,11),Mk(40,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dropdown-social-network',
  templateUrl: './sample-po-dropdown-social-network.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDropdownSocialNetworkComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  currentFriend: object;
  userAvatar: string = 'https://lorempixel.com/144/144/';

  public readonly answers: Array<object> = [
    { label: 'Confirm', action: this.notification.bind(this, 'added', 'success') },
    { label: 'Ignore', action: this.notification.bind(this, 'ignored', 'warning') },
    { label: 'Block', action: this.notification.bind(this, 'blocked', 'information') }
  ];

  public readonly newFriends: Array<object> = [
    { name: 'Mr. Dev PO', mutualFriends: '7', reside: 'Mountain View, CA' },
    { name: 'Mr. AI PO', mutualFriends: '99+', reside: 'New York City, NY' },
    { name: 'Mr. UX PO', mutualFriends: '14', reside: 'Los Angeles, CA' }
  ];

  private indexFriend: number = 0;

  ngOnInit() {
    this.setCurrentFriend(0);
  }

  private notification(action: string, notificationType: string) {
    this.poNotification[notificationType](\`User \${action} successfully!\`);

    this.indexFriend++;
    this.setCurrentFriend(this.indexFriend);
  }

  private setCurrentFriend(index: number) {
    this.currentFriend = this.newFriends[index];
  }
}
`),Kg()()()()()(),_u(41,`hr`))},dependencies:[P,tre,are,Ee],encapsulation:2,changeDetection:1})}return o})();var we=(()=>{class o{actions=[{label:`New Sale`,action:()=>console.log(`New Sale`)},{label:`New Cancellation`,action:()=>console.log(`New Cancellation`),type:`danger`},{label:`Reports`,subItems:[{label:`Monthly Sales`,action:()=>console.log(`Monthly Sales`),icon:`an an-chart-line-up`},{label:`Annual Sales`,action:()=>console.log(`Annual Sales`),icon:`an an-chart-line-up`}]},{label:`Settings`,subItems:[{label:`Users`,action:()=>console.log(`Users`)},{label:`System`,subItems:[{label:`Backup`,action:()=>console.log(`Backup`)},{label:`Logs`,action:()=>console.log(`Logs`)}]}]}];static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-dropdown-subitems`]],standalone:!1,decls:1,vars:1,consts:[[`p-label`,`PO Dropdown`,3,`p-actions`]],template:function(i,a){i&1&&_u(0,`po-dropdown`,0),i&2&&Ab(`p-actions`,a.actions)},dependencies:[ZP],encapsulation:2,changeDetection:1})}return o})();var he=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-dropdown-subitems-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-dropdown-subitems`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-dropdown-subitems/sample-po-dropdown-subitems.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-dropdown-subitems/sample-po-dropdown-subitems.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,a){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Dropdown Subitems`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-dropdown-subitems`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-dropdown-subitems/sample-po-dropdown-subitems.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<po-dropdown p-label="PO Dropdown" [p-actions]="actions"> </po-dropdown>
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-dropdown-subitems/sample-po-dropdown-subitems.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoDropdownAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dropdown-subitems',
  templateUrl: './sample-po-dropdown-subitems.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDropdownSubitemsComponent {
  actions: Array<PoDropdownAction> = [
    { label: 'New Sale', action: () => console.log('New Sale') },
    { label: 'New Cancellation', action: () => console.log('New Cancellation'), type: 'danger' },
    {
      label: 'Reports',
      subItems: [
        { label: 'Monthly Sales', action: () => console.log('Monthly Sales'), icon: 'an an-chart-line-up' },
        { label: 'Annual Sales', action: () => console.log('Annual Sales'), icon: 'an an-chart-line-up' }
      ]
    },
    {
      label: 'Settings',
      subItems: [
        { label: 'Users', action: () => console.log('Users') },
        {
          label: 'System',
          subItems: [
            { label: 'Backup', action: () => console.log('Backup') },
            { label: 'Logs', action: () => console.log('Logs') }
          ]
        }
      ]
    }
  ];
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,we],encapsulation:2,changeDetection:1})}return o})();var xe=(()=>{class o{shouldFailReports=!0;actions=[{label:`New Sale`,action:()=>console.log(`New Sale`)},{label:`Reports (lazy)`,subItemsLazy:l=>this.loadReports(l)},{label:`Settings (lazy)`,subItemsLazy:()=>this.loadSettings()}];onSubItemsLoad(l){console.log(`Loading sub items for:`,l.label)}loadReports(l){return this.shouldFailReports?(this.shouldFailReports=!1,Nf$1(()=>/* @__PURE__ */ new Error(`Falha ao carregar relatórios`)).pipe(t_(1e3))):k([{label:`Monthly Sales`,action:()=>console.log(`Monthly Sales`)},{label:`Annual Sales`,action:()=>console.log(`Annual Sales`)}]).pipe(t_(1e3))}loadSettings(){return k([{label:`Users`,action:()=>console.log(`Users`)},{label:`System`,action:()=>console.log(`System`)}]).pipe(t_(1500))}static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-dropdown-lazy-subitems`]],standalone:!1,decls:1,vars:1,consts:[[`p-label`,`PO Dropdown Lazy`,3,`p-sub-items-load`,`p-actions`]],template:function(i,a){i&1&&(Jc(0,`po-dropdown`,0),vt(`p-sub-items-load`,function(u){return a.onSubItemsLoad(u)}),Kg()),i&2&&Ab(`p-actions`,a.actions)},dependencies:[ZP],encapsulation:2})}return o})();var ve=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-dropdown-lazy-subitems-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-dropdown-lazy-subitems`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-dropdown-lazy-subitems/sample-po-dropdown-lazy-subitems.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-dropdown-lazy-subitems/sample-po-dropdown-lazy-subitems.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,a){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Dropdown Lazy Subitems`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-dropdown-lazy-subitems`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-dropdown-lazy-subitems/sample-po-dropdown-lazy-subitems.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<po-dropdown p-label="PO Dropdown Lazy" [p-actions]="actions" (p-sub-items-load)="onSubItemsLoad($event)">
</po-dropdown>
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-dropdown-lazy-subitems/sample-po-dropdown-lazy-subitems.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`import { Component } from '@angular/core';
import { Observable, delay, of, throwError } from 'rxjs';

import { PoDropdownAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dropdown-lazy-subitems',
  templateUrl: './sample-po-dropdown-lazy-subitems.component.html',
  standalone: false
})
export class SamplePoDropdownLazySubitemsComponent {
  private shouldFailReports = true;

  actions: Array<PoDropdownAction> = [
    { label: 'New Sale', action: () => console.log('New Sale') },
    {
      label: 'Reports (lazy)',
      subItemsLazy: (item: PoDropdownAction) => this.loadReports(item)
    },
    {
      label: 'Settings (lazy)',
      subItemsLazy: () => this.loadSettings()
    }
  ];

  onSubItemsLoad(item: PoDropdownAction): void {
    console.log('Loading sub items for:', item.label);
  }

  private loadReports(_item: PoDropdownAction): Observable<Array<PoDropdownAction>> {
    if (this.shouldFailReports) {
      this.shouldFailReports = false;
      return throwError(() => new Error('Falha ao carregar relat\xF3rios')).pipe(delay(1000));
    }

    return of([
      { label: 'Monthly Sales', action: () => console.log('Monthly Sales') },
      { label: 'Annual Sales', action: () => console.log('Annual Sales') }
    ]).pipe(delay(1000));
  }

  private loadSettings(): Observable<Array<PoDropdownAction>> {
    return of([
      { label: 'Users', action: () => console.log('Users') },
      { label: 'System', action: () => console.log('System') }
    ]).pipe(delay(1500));
  }
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,xe],encapsulation:2,changeDetection:1})}return o})();var ye=(()=>{class o{router=p(An);openDoc(l){this.router.navigate([`/documentation`,l],{queryParams:{view:`doc`}})}static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-dropdown-doc`]],standalone:!1,decls:743,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-dropdown-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/guides/getting-started`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-actions`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDropdownAction>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`event-p-click-item`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-position`,1,`docs-api-properties-row`],[`id`,`event-p-root-items-load`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`event-p-sub-items-load`,1,`docs-api-properties-row`],[`id`,`interface-po-dropdown-action`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-toolbar-action-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-toolbar-action-disabled`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`interface-po-toolbar-action-label`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-selected`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-separator`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-sub-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`id`,`interface-po-toolbar-action-sub-items-lazy`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`(item:`,`PoPopupAction)`,`=>`,`Observable<Array<PoPopupAction>>`],[`id`,`interface-po-toolbar-action-type`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-url`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-visible`,1,`docs-api-properties-row`]],template:function(i,a){i&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoDropdownModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do componente po-dropdown.`),Kg()(),Jc(7,`h3`,3),Mk(8,`Componente`),Kg(),Jc(9,`h4`,4)(10,`code`,5),Mk(11,`PoDropdownComponent`),Kg()(),Jc(12,`div`,2)(13,`p`),Mk(14,`O componente `),Jc(15,`code`),Mk(16,`po-dropdown`),Kg(),Mk(17,` pode ser utilizado como um agrupador de ações e / ou opções.`),Kg(),Jc(18,`blockquote`)(19,`p`),Mk(20,`Caso não haja configuração de rotas em sua aplicação, se faz necessário importar o `),Jc(21,`code`),Mk(22,`RouterModule`),Kg(),Mk(23,`
no m\xF3dulo principal para o correto funcionamento deste componente:`),Kg()(),Jc(24,`pre`)(25,`code`),Mk(26,`import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    ...
    RouterModule.forRoot([]),
    PoModule
  ],
  declarations: [
    AppComponent
  ],
  exports: [],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
`),Kg()(),Jc(27,`blockquote`)(28,`p`),Mk(29,`Para maiores d\xFAvidas referente \xE0 configura\xE7\xE3o de rotas, acesse em nosso portal /Guias /Come\xE7ando
`),Jc(30,`a`,6),Mk(31,`/Configurando as rotas do po-menu`),Kg(),Mk(32,`.`),Kg()(),Jc(33,`h4`),Mk(34,`Tokens customizáveis`),Kg(),Jc(35,`p`),Mk(36,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Jc(37,`blockquote`)(38,`p`),Mk(39,`Para maiores informações, acesse o guia `),Jc(40,`a`,7),Mk(41,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(42,`.`),Kg()(),Jc(43,`table`)(44,`thead`)(45,`tr`)(46,`th`),Mk(47,`Propriedade`),Kg(),Jc(48,`th`),Mk(49,`Descrição`),Kg(),Jc(50,`th`),Mk(51,`Valor Padrão`),Kg()()(),Jc(52,`tbody`)(53,`tr`)(54,`td`)(55,`strong`),Mk(56,`Default Values`),Kg()(),_u(57,`td`)(58,`td`),Kg(),Jc(59,`tr`)(60,`td`)(61,`code`),Mk(62,`--font-family`),Kg()(),Jc(63,`td`),Mk(64,`Família tipográfica usada`),Kg(),Jc(65,`td`)(66,`code`),Mk(67,`var(--font-family-theme)`),Kg()()(),Jc(68,`tr`)(69,`td`)(70,`code`),Mk(71,`--font-size`),Kg()(),Jc(72,`td`),Mk(73,`Tamanho da fonte`),Kg(),Jc(74,`td`)(75,`code`),Mk(76,`var(--font-size-default)`),Kg()()(),Jc(77,`tr`)(78,`td`)(79,`code`),Mk(80,`--font-weight`),Kg()(),Jc(81,`td`),Mk(82,`Peso da fonte`),Kg(),Jc(83,`td`)(84,`code`),Mk(85,`var(--font-weight-bold)`),Kg()()(),Jc(86,`tr`)(87,`td`)(88,`code`),Mk(89,`--line-height`),Kg()(),Jc(90,`td`),Mk(91,`Tamanho da label`),Kg(),Jc(92,`td`)(93,`code`),Mk(94,`var(--line-height-none)`),Kg()()(),Jc(95,`tr`)(96,`td`)(97,`code`),Mk(98,`--color`),Kg()(),Jc(99,`td`),Mk(100,`Cor principal do dropdown`),Kg(),Jc(101,`td`)(102,`code`),Mk(103,`var(--color-action-default)`),Kg()()(),Jc(104,`tr`)(105,`td`)(106,`code`),Mk(107,`--border-radius`),Kg()(),Jc(108,`td`),Mk(109,`Contém o valor do raio dos cantos do elemento\xA0`),Kg(),Jc(110,`td`)(111,`code`),Mk(112,`var(--border-radius-md)`),Kg()()(),Jc(113,`tr`)(114,`td`)(115,`code`),Mk(116,`--border-width`),Kg()(),Jc(117,`td`),Mk(118,`Contém o valor da largura dos cantos do elemento\xA0`),Kg(),Jc(119,`td`)(120,`code`),Mk(121,`var(--border-width-md)`),Kg()()(),Jc(122,`tr`)(123,`td`)(124,`code`),Mk(125,`--padding`),Kg()(),Jc(126,`td`),Mk(127,`Preenchimento`),Kg(),Jc(128,`td`)(129,`code`),Mk(130,`0 1em`),Kg()()(),Jc(131,`tr`)(132,`td`)(133,`strong`),Mk(134,`Hover`),Kg()(),_u(135,`td`)(136,`td`),Kg(),Jc(137,`tr`)(138,`td`)(139,`code`),Mk(140,`--color-hover`),Kg()(),Jc(141,`td`),Mk(142,`Cor principal no estado hover`),Kg(),Jc(143,`td`)(144,`code`),Mk(145,`var(--color-brand-01-darkest)`),Kg()()(),Jc(146,`tr`)(147,`td`)(148,`code`),Mk(149,`--background-hover`),Kg()(),Jc(150,`td`),Mk(151,`Cor de background no estado hover`),Kg(),Jc(152,`td`)(153,`code`),Mk(154,`var(--color-brand-01-lighter)`),Kg()()(),Jc(155,`tr`)(156,`td`)(157,`strong`),Mk(158,`Focused`),Kg()(),_u(159,`td`)(160,`td`),Kg(),Jc(161,`tr`)(162,`td`)(163,`code`),Mk(164,`--outline-color-focused`),Kg(),Mk(165,` \xA0`),Kg(),Jc(166,`td`),Mk(167,`Cor do outline do estado de focus`),Kg(),Jc(168,`td`)(169,`code`),Mk(170,`var(--color-action-focus)`),Kg()()(),Jc(171,`tr`)(172,`td`)(173,`strong`),Mk(174,`Pressed`),Kg()(),_u(175,`td`)(176,`td`),Kg(),Jc(177,`tr`)(178,`td`)(179,`code`),Mk(180,`--background-pressed`),Kg(),Mk(181,` \xA0`),Kg(),Jc(182,`td`),Mk(183,`Cor de background no estado de pressionado\xA0`),Kg(),Jc(184,`td`)(185,`code`),Mk(186,`var(--color-brand-01-light)`),Kg()()(),Jc(187,`tr`)(188,`td`)(189,`strong`),Mk(190,`Disabled`),Kg()(),_u(191,`td`)(192,`td`),Kg(),Jc(193,`tr`)(194,`td`)(195,`code`),Mk(196,`--color-disabled`),Kg()(),Jc(197,`td`),Mk(198,`Cor principal no estado disabled`),Kg(),Jc(199,`td`)(200,`code`),Mk(201,`var(--color-action-disabled)`),Kg()()()()()(),Jc(202,`div`,8)(203,`h4`,9),Mk(204,`Seletor`),Kg(),Jc(205,`pre`,10),Mk(206,`<po-dropdown
    p-actions="Array<PoDropdownAction>"
    (p-click-item)="EventEmitter"
    p-disabled="boolean"
    p-label="string"
    p-position="string"
    (p-root-items-load)="EventEmitter"
    p-size="string"
    (p-sub-items-load)="EventEmitter" >
</po-dropdown>
`),Kg()(),Jc(207,`h4`,11),Mk(208,`Propriedades`),Kg(),Jc(209,`table`,12)(210,`tr`,13)(211,`th`,14),Mk(212,`Nome`),Kg(),Jc(213,`th`,14),Mk(214,`Tipo`),Kg(),Jc(215,`th`,14),Mk(216,`Padrão`),Kg(),Jc(217,`th`,14),Mk(218,`Descrição`),Kg()(),Jc(219,`tr`,15)(220,`td`,16)(221,`div`,17)(222,`span`,18),Mk(223,` p-actions`),_u(224,`br`),Kg()()(),Jc(225,`td`,19)(226,`code`,20),Mk(227,`Array<PoDropdownAction>`),Kg()(),Jc(228,`td`,21),Mk(229,`-`),Kg(),Jc(230,`td`,22)(231,`p`),Mk(232,`Lista de a\xE7\xF5es que ser\xE3o exibidas no componente.
Aceita um `),Jc(233,`em`),Mk(234,`array`),Kg(),Mk(235,` de `),Jc(236,`code`),Mk(237,`PoDropdownAction`),Kg(),Mk(238,`.`),Kg()()(),Jc(239,`tr`,23)(240,`td`,16)(241,`div`,24)(242,`span`,25),Mk(243,` (p-click-item)`),_u(244,`br`),Kg()()(),Jc(245,`td`,19)(246,`code`,26),Mk(247,`EventEmitter`),Kg()(),Jc(248,`td`,21),Mk(249,`-`),Kg(),Jc(250,`td`,22)(251,`em`)(252,`strong`),Mk(253,`(opcional)`),Kg()(),Jc(254,`p`),Mk(255,`Evento disparado a cada clique em um item do menu.
Retorna o item clicado (`),Jc(256,`code`),Mk(257,`PoDropdownAction`),Kg(),Mk(258,`).`),Kg(),Jc(259,`blockquote`)(260,`p`),Mk(261,`Não é disparado para a ação interna de voltar (`),Jc(262,`code`),Mk(263,`goBack`),Kg(),Mk(264,`).`),Kg()()()(),Jc(265,`tr`,27)(266,`td`,16)(267,`div`,17)(268,`span`,18),Mk(269,` p-disabled`),_u(270,`br`),Kg()()(),Jc(271,`td`,19)(272,`code`,28),Mk(273,`boolean`),Kg()(),Jc(274,`td`,21)(275,`p`)(276,`code`),Mk(277,`false`),Kg()()(),Jc(278,`td`,22)(279,`em`)(280,`strong`),Mk(281,`(opcional)`),Kg()(),Jc(282,`p`),Mk(283,`Desabilita o campo.`),Kg()()(),Jc(284,`tr`,29)(285,`td`,16)(286,`div`,17)(287,`span`,18),Mk(288,` p-label`),_u(289,`br`),Kg()()(),Jc(290,`td`,19)(291,`code`,30),Mk(292,`string`),Kg()(),Jc(293,`td`,21),Mk(294,`-`),Kg(),Jc(295,`td`,22)(296,`p`),Mk(297,`Adiciona um rótulo ao `),Jc(298,`code`),Mk(299,`dropdown`),Kg(),Mk(300,`.`),Kg()()(),Jc(301,`tr`,31)(302,`td`,16)(303,`div`,17)(304,`span`,18),Mk(305,` p-position`),_u(306,`br`),Kg()()(),Jc(307,`td`,19)(308,`code`,30),Mk(309,`string`),Kg()(),Jc(310,`td`,21)(311,`p`)(312,`code`),Mk(313,`bottom-left`),Kg()()(),Jc(314,`td`,22)(315,`em`)(316,`strong`),Mk(317,`(opcional)`),Kg()(),Jc(318,`p`),Mk(319,`Define a posição preferencial de abertura do popup do dropdown em relação ao botão.`),Kg(),Jc(320,`p`),Mk(321,`Posições válidas:`),Kg(),Jc(322,`ul`)(323,`li`)(324,`code`),Mk(325,`right`),Kg(),Mk(326,`: No lado direito.`),Kg(),Jc(327,`li`)(328,`code`),Mk(329,`right-bottom`),Kg(),Mk(330,`: No lado direito inferior.`),Kg(),Jc(331,`li`)(332,`code`),Mk(333,`right-top`),Kg(),Mk(334,`: No lado direito superior.`),Kg(),Jc(335,`li`)(336,`code`),Mk(337,`bottom`),Kg(),Mk(338,`: Abaixo.`),Kg(),Jc(339,`li`)(340,`code`),Mk(341,`bottom-left`),Kg(),Mk(342,`: Abaixo e à esquerda (padrão).`),Kg(),Jc(343,`li`)(344,`code`),Mk(345,`bottom-right`),Kg(),Mk(346,`: Abaixo e à direita.`),Kg(),Jc(347,`li`)(348,`code`),Mk(349,`left`),Kg(),Mk(350,`: No lado esquerdo.`),Kg(),Jc(351,`li`)(352,`code`),Mk(353,`left-top`),Kg(),Mk(354,`: No lado esquerdo superior.`),Kg(),Jc(355,`li`)(356,`code`),Mk(357,`left-bottom`),Kg(),Mk(358,`: No lado esquerdo inferior.`),Kg(),Jc(359,`li`)(360,`code`),Mk(361,`top`),Kg(),Mk(362,`: Acima.`),Kg(),Jc(363,`li`)(364,`code`),Mk(365,`top-right`),Kg(),Mk(366,`: Acima e à direita.`),Kg(),Jc(367,`li`)(368,`code`),Mk(369,`top-left`),Kg(),Mk(370,`: Acima e à esquerda.`),Kg()(),Jc(371,`blockquote`)(372,`p`),Mk(373,`O popup será rotacionado automaticamente caso não caiba na posição definida.`),Kg()()()(),Jc(374,`tr`,32)(375,`td`,16)(376,`div`,24)(377,`span`,25),Mk(378,` (p-root-items-load)`),_u(379,`br`),Kg()()(),Jc(380,`td`,19)(381,`code`,26),Mk(382,`EventEmitter`),Kg()(),Jc(383,`td`,21),Mk(384,`-`),Kg(),Jc(385,`td`,22)(386,`em`)(387,`strong`),Mk(388,`(opcional)`),Kg()(),Jc(389,`p`),Mk(390,`Evento disparado no momento em que a requisição assíncrona do nível raiz é iniciada`),Kg(),Jc(391,`blockquote`)(392,`p`),Mk(393,`Compatível com a propriedade PoPopupAction.subItemsLazy`),Kg()()()(),Jc(394,`tr`,33)(395,`td`,16)(396,`div`,17)(397,`span`,18),Mk(398,` p-size`),_u(399,`br`),Kg()()(),Jc(400,`td`,19)(401,`code`,30),Mk(402,`string`),Kg()(),Jc(403,`td`,21)(404,`p`)(405,`code`),Mk(406,`medium`),Kg()()(),Jc(407,`td`,22)(408,`em`)(409,`strong`),Mk(410,`(opcional)`),Kg()(),Jc(411,`p`),Mk(412,`Define o tamanho do componente:`),Kg(),Jc(413,`ul`)(414,`li`)(415,`code`),Mk(416,`small`),Kg(),Mk(417,`: altura do button como 32px (disponível apenas para acessibilidade AA).`),Kg(),Jc(418,`li`)(419,`code`),Mk(420,`medium`),Kg(),Mk(421,`: altura do button como 44px.`),Kg()(),Jc(422,`blockquote`)(423,`p`),Mk(424,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(425,`code`),Mk(426,`medium`),Kg(),Mk(427,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(428,`a`,34),Mk(429,`po-theme`),Kg(),Mk(430,`.`),Kg()()()(),Jc(431,`tr`,35)(432,`td`,16)(433,`div`,24)(434,`span`,25),Mk(435,` (p-sub-items-load)`),_u(436,`br`),Kg()()(),Jc(437,`td`,19)(438,`code`,26),Mk(439,`EventEmitter`),Kg()(),Jc(440,`td`,21),Mk(441,`-`),Kg(),Jc(442,`td`,22)(443,`em`)(444,`strong`),Mk(445,`(opcional)`),Kg()(),Jc(446,`p`),Mk(447,`Evento disparado no momento em que a requisi\xE7\xE3o ass\xEDncrona de um subn\xEDvel \xE9 iniciada.
Retorna o item agrupador (`),Jc(448,`code`),Mk(449,`PoDropdownAction`),Kg(),Mk(450,`) que originou o carregamento.`),Kg(),Jc(451,`blockquote`)(452,`p`),Mk(453,`Compatível com a propriedade PoPopupAction.subItemsLazy`),Kg()()()()(),Jc(454,`h3`),Mk(455,`Interfaces`),Kg(),Jc(456,`h4`,36)(457,`code`,5),Mk(458,`PoDropdownAction`),Kg()(),Jc(459,`div`,2)(460,`p`),Mk(461,`Interface para as ações do componente `),Jc(462,`code`),Mk(463,`po-dropdown`),Kg(),Mk(464,`.`),Kg()(),Jc(465,`h4`,11),Mk(466,`Propriedades`),Kg(),Jc(467,`table`,12)(468,`tr`,13)(469,`th`,14),Mk(470,`Nome`),Kg(),Jc(471,`th`,14),Mk(472,`Tipo`),Kg(),Jc(473,`th`,14),Mk(474,`Descrição`),Kg()(),Jc(475,`tr`,37)(476,`td`,16)(477,`div`,17)(478,`span`,18),Mk(479,` action`),_u(480,`br`),Kg()()(),Jc(481,`td`,19)(482,`code`,38),Mk(483,`Function`),Kg()(),Jc(484,`td`,22)(485,`em`)(486,`strong`),Mk(487,`(opcional)`),Kg()(),Jc(488,`p`),Mk(489,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),Kg(),Jc(490,`p`),Mk(491,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Jc(492,`code`),Mk(493,`subItems`),Kg(),Mk(494,`.`),Kg(),Jc(495,`blockquote`)(496,`p`),Mk(497,`Para que a função seja executada no contexto do componente, utilize `),Jc(498,`em`),Mk(499,`bind`),Kg(),Mk(500,`:
`),Jc(501,`code`),Mk(502,`action: this.myFunction.bind(this)`),Kg()()()()(),Jc(503,`tr`,39)(504,`td`,16)(505,`div`,17)(506,`span`,18),Mk(507,` disabled`),_u(508,`br`),Kg()()(),Jc(509,`td`,19)(510,`code`,28),Mk(511,`boolean `),Kg(),Jc(512,`code`,38),Mk(513,` Function`),Kg()(),Jc(514,`td`,22)(515,`em`)(516,`strong`),Mk(517,`(opcional)`),Kg()(),Jc(518,`p`),Mk(519,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),Kg()()(),Jc(520,`tr`,40)(521,`td`,16)(522,`div`,17)(523,`span`,18),Mk(524,` icon`),_u(525,`br`),Kg()()(),Jc(526,`td`,19)(527,`code`,30),Mk(528,`string `),Kg(),Jc(529,`code`,41),Mk(530,` TemplateRef<void>`),Kg()(),Jc(531,`td`,22)(532,`em`)(533,`strong`),Mk(534,`(opcional)`),Kg()(),Jc(535,`p`),Mk(536,`Ícone exibido ao lado esquerdo do rótulo.`),Kg(),Jc(537,`p`),Mk(538,`Aceita ícones da `),Jc(539,`a`,42),Mk(540,`Biblioteca de ícones`),Kg(),Mk(541,`, fontes externas (ex: Font Awesome)
ou um `),Jc(542,`code`),Mk(543,`TemplateRef`),Kg(),Mk(544,` para ícones customizados.`),Kg(),Jc(545,`pre`)(546,`code`),Mk(547,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),Kg()()()(),Jc(548,`tr`,43)(549,`td`,16)(550,`div`,17)(551,`span`,18),Mk(552,` label`),_u(553,`br`),Kg()()(),Jc(554,`td`,19)(555,`code`,30),Mk(556,`string`),Kg()(),Jc(557,`td`,22)(558,`p`),Mk(559,`Rótulo da ação.`),Kg(),Jc(560,`p`),Mk(561,`A label também pode representar o agrupador de subitens quando a ação possuir `),Jc(562,`code`),Mk(563,`subItems`),Kg(),Mk(564,`.`),Kg()()(),Jc(565,`tr`,44)(566,`td`,16)(567,`div`,17)(568,`span`,18),Mk(569,` selected`),_u(570,`br`),Kg()()(),Jc(571,`td`,19)(572,`code`,28),Mk(573,`boolean`),Kg()(),Jc(574,`td`,22)(575,`em`)(576,`strong`),Mk(577,`(opcional)`),Kg()(),Jc(578,`p`),Mk(579,`Define se a ação está selecionada.`),Kg()()(),Jc(580,`tr`,45)(581,`td`,16)(582,`div`,17)(583,`span`,18),Mk(584,` separator`),_u(585,`br`),Kg()()(),Jc(586,`td`,19)(587,`code`,28),Mk(588,`boolean`),Kg()(),Jc(589,`td`,22)(590,`em`)(591,`strong`),Mk(592,`(opcional)`),Kg()(),Jc(593,`p`),Mk(594,`Atribui uma linha separadora acima do item.`),Kg()()(),Jc(595,`tr`,46)(596,`td`,16)(597,`div`,17)(598,`span`,18),Mk(599,` subItems`),_u(600,`br`),Kg()()(),Jc(601,`td`,19)(602,`code`,47),Mk(603,`Array<PoPopupAction>`),Kg()(),Jc(604,`td`,22)(605,`em`)(606,`strong`),Mk(607,`(opcional)`),Kg()(),Jc(608,`p`),Mk(609,`Define uma lista de subitens para criação de menus aninhados.`),Kg(),Jc(610,`pre`)(611,`code`),Mk(612,`{ label: 'Relat\xF3rios', subItems: [{ label: 'Mensal' }, { label: 'Anual' }] }
`),Kg()(),Jc(613,`p`),Mk(614,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),Kg(),Jc(615,`blockquote`)(616,`p`),Mk(617,`As propriedades `),Jc(618,`code`),Mk(619,`disabled`),Kg(),Mk(620,`, `),Jc(621,`code`),Mk(622,`type`),Kg(),Mk(623,` e `),Jc(624,`code`),Mk(625,`visible`),Kg(),Mk(626,` não são aplicadas visualmente ao item agrupador.`),Kg()(),Jc(627,`blockquote`)(628,`p`),Mk(629,`Quando `),Jc(630,`code`),Mk(631,`url`),Kg(),Mk(632,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),Kg()(),Jc(633,`blockquote`)(634,`p`),Mk(635,`Em subníveis aninhados, o `),Jc(636,`code`),Mk(637,`icon`),Kg(),Mk(638,` do agrupador é substituído pelo indicador de navegação (seta).`),Kg()()()(),Jc(639,`tr`,48)(640,`td`,16)(641,`div`,17)(642,`span`,18),Mk(643,` subItemsLazy`),_u(644,`br`),Kg()()(),Jc(645,`td`,19)(646,`code`,49),Mk(647,`(item: PoPopupAction) => Observable<Array<PoPopupAction>>`),Kg()(),Jc(648,`td`,22)(649,`em`)(650,`strong`),Mk(651,`(opcional)`),Kg()(),Jc(652,`p`),Mk(653,`Define o carregamento assíncrono (lazy loading) dos subitens de um agrupador.`),Kg(),Jc(654,`p`),Mk(655,`Recebe o item agrupador e retorna um `),Jc(656,`code`),Mk(657,`Observable<Array<PoPopupAction>>`),Kg(),Mk(658,`. A requisi\xE7\xE3o \xE9 disparada
`),Jc(659,`strong`),Mk(660,`apenas`),Kg(),Mk(661,` no momento da expansão (clique ou atalho de teclado), exibindo placeholders com `),Jc(662,`code`),Mk(663,`po-skeleton`),Kg(),Mk(664,`
enquanto os dados s\xE3o carregados:`),Kg(),Jc(665,`pre`)(666,`code`),Mk(667,`{
  label: 'Relat\xF3rios',
  subItemsLazy: (item) => this.reportService.getReports(item)
}
`),Kg()(),Jc(668,`blockquote`)(669,`p`),Mk(670,`O resultado \xE9 armazenado em cache ap\xF3s o primeiro carregamento bem-sucedido.
Em caso de falha, \xE9 exibida uma mensagem com a op\xE7\xE3o de tentar novamente.`),Kg()(),Jc(671,`p`),Mk(672,`Ao definir esta propriedade, o item exibirá um ícone indicador de subnível.`),Kg()()(),Jc(673,`tr`,50)(674,`td`,16)(675,`div`,17)(676,`span`,18),Mk(677,` type`),_u(678,`br`),Kg()()(),Jc(679,`td`,19)(680,`code`,30),Mk(681,`string`),Kg()(),Jc(682,`td`,22)(683,`em`)(684,`strong`),Mk(685,`(opcional)`),Kg()(),Jc(686,`p`),Mk(687,`Define a cor do item.`),Kg(),Jc(688,`p`),Mk(689,`Valores válidos:`),Kg(),Jc(690,`ul`)(691,`li`)(692,`code`),Mk(693,`default`),Kg()(),Jc(694,`li`)(695,`code`),Mk(696,`danger`),Kg()()()()(),Jc(697,`tr`,51)(698,`td`,16)(699,`div`,17)(700,`span`,18),Mk(701,` url`),_u(702,`br`),Kg()()(),Jc(703,`td`,19)(704,`code`,30),Mk(705,`string`),Kg()(),Jc(706,`td`,22)(707,`em`)(708,`strong`),Mk(709,`(opcional)`),Kg()(),Jc(710,`p`),Mk(711,`URL para redirecionamento. Aceita rotas internas e links externos.`),Kg(),Jc(712,`p`),Mk(713,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Jc(714,`code`),Mk(715,`url`),Kg(),Mk(716,` é informada em um agrupador, o clique `),Jc(717,`strong`),Mk(718,`não abrirá os subitens`),Kg(),Mk(719,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),Kg(),Jc(720,`blockquote`)(721,`p`),Mk(722,`Quando informada, tem prioridade sobre a propriedade `),Jc(723,`code`),Mk(724,`action`),Kg(),Mk(725,`.`),Kg()()()(),Jc(726,`tr`,52)(727,`td`,16)(728,`div`,17)(729,`span`,18),Mk(730,` visible`),_u(731,`br`),Kg()()(),Jc(732,`td`,19)(733,`code`,28),Mk(734,`boolean `),Kg(),Jc(735,`code`,38),Mk(736,` Function`),Kg()(),Jc(737,`td`,22)(738,`em`)(739,`strong`),Mk(740,`(opcional)`),Kg()(),Jc(741,`p`),Mk(742,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Be(o,j){if(o&1&&(Jc(0,`div`,1),_u(1,`sample-po-dropdown-basic-view`)(2,`sample-po-dropdown-labs-view`)(3,`sample-po-dropdown-social-network-view`)(4,`sample-po-dropdown-subitems-view`)(5,`sample-po-dropdown-lazy-subitems-view`),Kg()),o&2){let l=tk();Ab(`hidden`,l.activeTab!==`web`)}}var We=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;title=`Dropdown`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(l,i){this.route=l,this.router=i}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let i=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:i||`web`,this.title=`Dropdown · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(i,a){i&1&&(Jc(0,`po-page-default`,0),LO(1,Be,6,1,`div`,1),Jc(2,`div`,1),_u(3,`sample-po-dropdown-doc`),Kg()()),i&2&&(Ab(`p-title`,a.title)(`p-actions`,a.actions),wg(),jO(a.hidePoWebSample?-1:1),wg(),Ab(`hidden`,a.activeTab!==`doc`))},dependencies:[Mze,be,Se,fe,he,ve,ye],encapsulation:2,changeDetection:1})}return o})()}];var De=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵmod=ge$1({type:o});static ɵinj=de({imports:[GV.forChild(We),GV]})}return o})();var Nt=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵmod=ge$1({type:o});static ɵinj=de({imports:[M,De]})}return o})();export{Nt as DocPoDropdownModule};