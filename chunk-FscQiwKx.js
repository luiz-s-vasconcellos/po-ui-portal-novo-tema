import{m as P,p as M}from"./main-FL7X32TP.js";import{Ar as I,At as Zte,Dt as ZP,Ea as k,G as Nf,Hr as Lk,Ii as WL,Ir as Kb,It as bae,L as Koe,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Ti as U_,Ui as YO,Va as p,Vt as c4,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,gi as Rb,go as z0,io as vu,ir as Af,j as I4,ji as Vk,li as Qc,na as de,oa as e_,oo as wg,ro as vt,rr as AZ,rt as Ru,sa as ek,si as QL,sn as j4,ua as ge$1,va as ik,vi as Sk,wr as GV,xi as Tk,xr as FO}from"./chunk-DtUf9FxZ.js";import{t as r}from"./chunk-zystk1pz.js";var Ae=()=>({label:`How to install PO`,url:`/guides/how-install`});var _e=i=>[i];var be=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-dropdown-basic`]],standalone:!1,decls:1,vars:4,consts:[[`p-label`,`PO Dropdown`,3,`p-actions`]],template:function(a,o){a&1&&vu(0,`po-dropdown`,0),a&2&&Rb(`p-actions`,Vk(2,_e,Lk(1,Ae)))},dependencies:[ZP],encapsulation:2,changeDetection:1})}return i})();var Te=i=>({"docs-sample-code-tabs":i});var Se=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-dropdown-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-dropdown-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Dropdown Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-dropdown-basic/sample-po-dropdown-basic.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-dropdown p-label="PO Dropdown" [p-actions]="[{ label: 'How to install PO', url: '/guides/how-install' }]">
</po-dropdown>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-dropdown-basic/sample-po-dropdown-basic.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dropdown-basic',
  templateUrl: './sample-po-dropdown-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDropdownBasicComponent {}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-dropdown-basic`),Kg(),vu(23,`hr`)),a&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Te,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,be],encapsulation:2,changeDetection:1})}return i})();var ge=(()=>{class i{poNotification=p(Ru);action;actions;parentList;label;properties;size;actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Separator`,value:`separator`},{label:`Selected`,value:`selected`},{label:`Visible`,value:`visible`}];iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`an an-globe`,label:`an an-globe`},{value:`fa fa-podcast`,label:`fa fa-podcast`}];propertiesOptions=[{value:`disabled`,label:`Disabled`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];ngOnInit(){this.restore()}addAction(l){let a=r({},l);if(a.action=a.action?this.showAction.bind(this,a.action):void 0,!l.parent)this.actions=[...this.actions,a];else{let o=this.getActionNode(this.actions,l.parent);o?o.subItems=[...o.subItems||[],a]:this.actions=[...this.actions,a]}this.actions=[].concat(this.actions),this.parentList=this.updateParentList(this.actions),this.restoreActionForm()}getActionNode(l,a){if(!(!l||!Array.isArray(l)||!a))for(let o of l){if(o.label===a||o.value===a)return o;if(o.subItems&&Array.isArray(o.subItems)){let m=this.getActionNode(o.subItems,a);if(m)return m}}}updateParentList(l,a=0,o=[]){return!l||!Array.isArray(l)||l.forEach(m=>{let{label:b}=m;o.push({label:`${`-`.repeat(a)} ${b}`,value:b}),m.subItems&&Array.isArray(m.subItems)&&this.updateParentList(m.subItems,a+1,o)}),o}restore(){this.actions=[],this.parentList=[],this.label=`PO Dropdown`,this.size=`medium`,this.properties=[],this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null,parent:void 0}}showAction(l){this.poNotification.success(`Action clicked: ${l}`)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-dropdown-labs`]],standalone:!1,decls:23,vars:21,consts:[[`formAction`,`ngForm`],[`f`,`ngForm`],[1,`po-row`],[1,`po-offset-xl-5`,`po-offset-lg-5`,3,`p-actions`,`p-disabled`,`p-label`,`p-size`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`actionURL`,`p-label`,`URL`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`parent`,`p-label`,`Subitems`,`p-placeholder`,`Add subitems`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`action`,`p-columns`,`4`,`p-indeterminate`,``,`p-label`,`Action properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add Action`,1,`po-md-4`,`po-lg-2`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,o){if(a&1){let m=YO();Qc(0,`div`,2),vu(1,`po-dropdown`,3),Kg(),vu(2,`po-divider`),Qc(3,`form`,null,0)(5,`po-input`,4),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(o.action.label,d)||(o.action.label=d),U_(d)}),Kg(),Qc(6,`po-input`,5),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(o.action.action,d)||(o.action.action=d),U_(d)}),Kg(),Qc(7,`po-input`,6),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(o.action.url,d)||(o.action.url=d),U_(d)}),Kg(),Qc(8,`po-select`,7),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(o.action.type,d)||(o.action.type=d),U_(d)}),Kg(),Qc(9,`po-select`,8),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(o.action.icon,d)||(o.action.icon=d),U_(d)}),Kg(),Qc(10,`po-select`,9),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(o.action.parent,d)||(o.action.parent=d),U_(d)}),Kg(),Qc(11,`po-checkbox-group`,10),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(o.action,d)||(o.action=d),U_(d)}),Kg(),Qc(12,`div`,2)(13,`po-button`,11),vt(`p-click`,function(){return o.addAction(o.action)}),Kg()()(),vu(14,`po-divider`),Qc(15,`form`,null,1)(17,`div`,2)(18,`po-input`,12),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(o.label,d)||(o.label=d),U_(d)}),Kg()(),Qc(19,`po-checkbox-group`,13),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(o.properties,d)||(o.properties=d),U_(d)}),Kg(),Qc(20,`po-radio-group`,14),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(o.size,d)||(o.size=d),U_(d)}),Kg(),Qc(21,`div`,2)(22,`po-button`,15),vt(`p-click`,function(){return o.restore()}),Kg()()()}if(a&2){let m=ik(4);wg(),Rb(`p-actions`,o.actions)(`p-disabled`,o.properties.includes(`disabled`))(`p-label`,o.label)(`p-size`,o.size),wg(4),Yb(`ngModel`,o.action.label),W0(),wg(),Yb(`ngModel`,o.action.action),W0(),wg(),Yb(`ngModel`,o.action.url),W0(),wg(),Yb(`ngModel`,o.action.type),Rb(`p-options`,o.typeOptions),W0(),wg(),Yb(`ngModel`,o.action.icon),Rb(`p-options`,o.iconOptions),W0(),wg(),Yb(`ngModel`,o.action.parent),Rb(`p-options`,o.parentList),W0(),wg(),Yb(`ngModel`,o.action),Rb(`p-options`,o.actionOptions),W0(),wg(2),Rb(`p-disabled`,m.form.invalid),wg(5),Yb(`ngModel`,o.label),W0(),wg(),Yb(`ngModel`,o.properties),Rb(`p-options`,o.propertiesOptions),W0(),wg(),Yb(`ngModel`,o.size),Rb(`p-options`,o.sizeOptions),W0()}},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,ZP,I4,j4,Zte,Koe],encapsulation:2,changeDetection:1})}return i})();var Fe=i=>({"docs-sample-code-tabs":i});var Ee=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-dropdown-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-dropdown-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Dropdown Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-dropdown-labs/sample-po-dropdown-labs.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-dropdown-labs/sample-po-dropdown-labs.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-dropdown-labs`),Kg(),vu(23,`hr`)),a&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Fe,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ge],encapsulation:2,changeDetection:1})}return i})();function Ie(i,Y){if(i&1&&(Qc(0,`div`,0),vu(1,`po-avatar`,2),Qc(2,`div`,3)(3,`span`,4),Sk(4),Kg(),Qc(5,`span`,5),Sk(6),Kg(),Qc(7,`span`,5),Sk(8),Kg()()(),Qc(9,`div`,0),vu(10,`po-dropdown`,6),Kg()),i&2){let l=ek();wg(),Rb(`p-src`,l.userAvatar),wg(3),tm(` `,l.currentFriend.name,` `),wg(2),tm(` `,l.currentFriend.mutualFriends,` mutual friends `),wg(2),tm(` Resides in `,l.currentFriend.reside,` `),wg(2),Rb(`p-actions`,l.answers)}}function Ne(i,Y){i&1&&(Qc(0,`div`,0)(1,`span`,7),Sk(2,`Congratulations TOTVS, no more requests!`),Kg()())}var he=(()=>{class i{poNotification=p(Ru);currentFriend;userAvatar=`https://lorempixel.com/144/144/`;answers=[{label:`Confirm`,action:this.notification.bind(this,`added`,`success`)},{label:`Ignore`,action:this.notification.bind(this,`ignored`,`warning`)},{label:`Block`,action:this.notification.bind(this,`blocked`,`information`)}];newFriends=[{name:`Mr. Dev PO`,mutualFriends:`7`,reside:`Mountain View, CA`},{name:`Mr. AI PO`,mutualFriends:`99+`,reside:`New York City, NY`},{name:`Mr. UX PO`,mutualFriends:`14`,reside:`Los Angeles, CA`}];indexFriend=0;ngOnInit(){this.setCurrentFriend(0)}notification(l,a){this.poNotification[a](`User ${l} successfully!`),this.indexFriend++,this.setCurrentFriend(this.indexFriend)}setCurrentFriend(l){this.currentFriend=this.newFriends[l]}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-dropdown-social-network`]],standalone:!1,decls:4,vars:1,consts:[[1,`po-row`],[`p-title`,`Friend Request`,1,`po-lg-6`],[`p-size`,`lg`,1,`po-md-4`,3,`p-src`],[1,`po-md-8`],[1,`po-sm-12`,`po-font-subtitle`],[1,`po-sm-12`,`po-font-text`],[`p-label`,`Add as friend?`,1,`po-lg-8`,`po-offset-md-4`,`po-offset-lg-4`,`po-offset-xl-4`,3,`p-actions`],[1,`po-lg-8`,`po-font-subtitle`]],template:function(a,o){a&1&&(Qc(0,`div`,0)(1,`po-widget`,1),FO(2,Ie,11,5)(3,Ne,3,0,`div`,0),Kg()()),a&2&&(wg(2),VO(o.currentFriend?2:3))},dependencies:[c4,ZP,bae],encapsulation:2,changeDetection:1})}return i})();var Be=i=>({"docs-sample-code-tabs":i});var fe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-dropdown-social-network-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-dropdown-social-network`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Dropdown - Social Network`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-dropdown-social-network/sample-po-dropdown-social-network.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
  <po-widget class="po-lg-6" p-title="Friend Request">
    @if (currentFriend) {
      <div class="po-row">
        <po-avatar class="po-md-4" p-size="lg" [p-src]="userAvatar"> </po-avatar>
        <div class="po-md-8">
          <span class="po-sm-12 po-font-subtitle">
            { { currentFriend.name }}
          </span>
          <span class="po-sm-12 po-font-text"> { { currentFriend.mutualFriends }} mutual friends </span>
          <span class="po-sm-12 po-font-text"> Resides in { { currentFriend.reside }} </span>
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-dropdown-social-network/sample-po-dropdown-social-network.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-dropdown-social-network`),Kg(),vu(23,`hr`)),a&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Be,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,he],encapsulation:2,changeDetection:1})}return i})();var we=(()=>{class i{actions=[{label:`New Sale`,action:()=>console.log(`New Sale`)},{label:`New Cancellation`,action:()=>console.log(`New Cancellation`),type:`danger`},{label:`Reports`,subItems:[{label:`Monthly Sales`,action:()=>console.log(`Monthly Sales`),icon:`an an-chart-line-up`},{label:`Annual Sales`,action:()=>console.log(`Annual Sales`),icon:`an an-chart-line-up`}]},{label:`Settings`,subItems:[{label:`Users`,action:()=>console.log(`Users`)},{label:`System`,subItems:[{label:`Backup`,action:()=>console.log(`Backup`)},{label:`Logs`,action:()=>console.log(`Logs`)}]}]}];static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-dropdown-subitems`]],standalone:!1,decls:1,vars:1,consts:[[`p-label`,`PO Dropdown`,3,`p-actions`]],template:function(a,o){a&1&&vu(0,`po-dropdown`,0),a&2&&Rb(`p-actions`,o.actions)},dependencies:[ZP],encapsulation:2,changeDetection:1})}return i})();var Re=i=>({"docs-sample-code-tabs":i});var Ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-dropdown-subitems-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-dropdown-subitems`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Dropdown Subitems`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-dropdown-subitems/sample-po-dropdown-subitems.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-dropdown p-label="PO Dropdown" [p-actions]="actions"> </po-dropdown>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-dropdown-subitems/sample-po-dropdown-subitems.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-dropdown-subitems`),Kg(),vu(23,`hr`)),a&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Re,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,we],encapsulation:2,changeDetection:1})}return i})();var xe=(()=>{class i{shouldFailReports=!0;actions=[{label:`New Sale`,action:()=>console.log(`New Sale`)},{label:`Reports (lazy)`,subItemsLazy:l=>this.loadReports(l)},{label:`Settings (lazy)`,subItemsLazy:()=>this.loadSettings()}];onSubItemsLoad(l){console.log(`Loading sub items for:`,l.label)}loadReports(l){return this.shouldFailReports?(this.shouldFailReports=!1,Af(()=>/* @__PURE__ */ new Error(`Falha ao carregar relatórios`)).pipe(e_(1e3))):k([{label:`Monthly Sales`,action:()=>console.log(`Monthly Sales`)},{label:`Annual Sales`,action:()=>console.log(`Annual Sales`)}]).pipe(e_(1e3))}loadSettings(){return k([{label:`Users`,action:()=>console.log(`Users`)},{label:`System`,action:()=>console.log(`System`)}]).pipe(e_(1500))}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-dropdown-lazy-subitems`]],standalone:!1,decls:1,vars:1,consts:[[`p-label`,`PO Dropdown Lazy`,3,`p-sub-items-load`,`p-actions`]],template:function(a,o){a&1&&(Qc(0,`po-dropdown`,0),vt(`p-sub-items-load`,function(b){return o.onSubItemsLoad(b)}),Kg()),a&2&&Rb(`p-actions`,o.actions)},dependencies:[ZP],encapsulation:2})}return i})();var je=i=>({"docs-sample-code-tabs":i});var ve=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-dropdown-lazy-subitems-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-dropdown-lazy-subitems`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Dropdown Lazy Subitems`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-dropdown-lazy-subitems/sample-po-dropdown-lazy-subitems.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-dropdown p-label="PO Dropdown Lazy" [p-actions]="actions" (p-sub-items-load)="onSubItemsLoad($event)">
</po-dropdown>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-dropdown-lazy-subitems/sample-po-dropdown-lazy-subitems.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component } from '@angular/core';
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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-dropdown-lazy-subitems`),Kg(),vu(23,`hr`)),a&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,je,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,xe],encapsulation:2,changeDetection:1})}return i})();var ye=(()=>{class i{router=p(An);openDoc(l){this.router.navigate([`/documentation`,l],{queryParams:{view:`doc`}})}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-dropdown-doc`]],standalone:!1,decls:743,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-dropdown-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/guides/getting-started`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-actions`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDropdownAction>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`event-p-click-item`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-position`,1,`docs-api-properties-row`],[`id`,`event-p-root-items-load`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`event-p-sub-items-load`,1,`docs-api-properties-row`],[`id`,`interface-po-dropdown-action`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-toolbar-action-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-toolbar-action-disabled`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`interface-po-toolbar-action-label`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-selected`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-separator`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-sub-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`id`,`interface-po-toolbar-action-sub-items-lazy`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`(item:`,`PoPopupAction)`,`=>`,`Observable<Array<PoPopupAction>>`],[`id`,`interface-po-toolbar-action-type`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-url`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-visible`,1,`docs-api-properties-row`]],template:function(a,o){a&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoDropdownModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-dropdown.`),Kg()(),Qc(7,`h3`,3),Sk(8,`Componente`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoDropdownComponent`),Kg()(),Qc(12,`div`,2)(13,`p`),Sk(14,`O componente `),Qc(15,`code`),Sk(16,`po-dropdown`),Kg(),Sk(17,` pode ser utilizado como um agrupador de ações e / ou opções.`),Kg(),Qc(18,`blockquote`)(19,`p`),Sk(20,`Caso não haja configuração de rotas em sua aplicação, se faz necessário importar o `),Qc(21,`code`),Sk(22,`RouterModule`),Kg(),Sk(23,`
no m\xF3dulo principal para o correto funcionamento deste componente:`),Kg()(),Qc(24,`pre`)(25,`code`),Sk(26,`import { RouterModule } from '@angular/router';

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
`),Kg()(),Qc(27,`blockquote`)(28,`p`),Sk(29,`Para maiores d\xFAvidas referente \xE0 configura\xE7\xE3o de rotas, acesse em nosso portal /Guias /Come\xE7ando
`),Qc(30,`a`,6),Sk(31,`/Configurando as rotas do po-menu`),Kg(),Sk(32,`.`),Kg()(),Qc(33,`h4`),Sk(34,`Tokens customizáveis`),Kg(),Qc(35,`p`),Sk(36,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(37,`blockquote`)(38,`p`),Sk(39,`Para maiores informações, acesse o guia `),Qc(40,`a`,7),Sk(41,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(42,`.`),Kg()(),Qc(43,`table`)(44,`thead`)(45,`tr`)(46,`th`),Sk(47,`Propriedade`),Kg(),Qc(48,`th`),Sk(49,`Descrição`),Kg(),Qc(50,`th`),Sk(51,`Valor Padrão`),Kg()()(),Qc(52,`tbody`)(53,`tr`)(54,`td`)(55,`strong`),Sk(56,`Default Values`),Kg()(),vu(57,`td`)(58,`td`),Kg(),Qc(59,`tr`)(60,`td`)(61,`code`),Sk(62,`--font-family`),Kg()(),Qc(63,`td`),Sk(64,`Família tipográfica usada`),Kg(),Qc(65,`td`)(66,`code`),Sk(67,`var(--font-family-theme)`),Kg()()(),Qc(68,`tr`)(69,`td`)(70,`code`),Sk(71,`--font-size`),Kg()(),Qc(72,`td`),Sk(73,`Tamanho da fonte`),Kg(),Qc(74,`td`)(75,`code`),Sk(76,`var(--font-size-default)`),Kg()()(),Qc(77,`tr`)(78,`td`)(79,`code`),Sk(80,`--font-weight`),Kg()(),Qc(81,`td`),Sk(82,`Peso da fonte`),Kg(),Qc(83,`td`)(84,`code`),Sk(85,`var(--font-weight-bold)`),Kg()()(),Qc(86,`tr`)(87,`td`)(88,`code`),Sk(89,`--line-height`),Kg()(),Qc(90,`td`),Sk(91,`Tamanho da label`),Kg(),Qc(92,`td`)(93,`code`),Sk(94,`var(--line-height-none)`),Kg()()(),Qc(95,`tr`)(96,`td`)(97,`code`),Sk(98,`--color`),Kg()(),Qc(99,`td`),Sk(100,`Cor principal do dropdown`),Kg(),Qc(101,`td`)(102,`code`),Sk(103,`var(--color-action-default)`),Kg()()(),Qc(104,`tr`)(105,`td`)(106,`code`),Sk(107,`--border-radius`),Kg()(),Qc(108,`td`),Sk(109,`Contém o valor do raio dos cantos do elemento\xA0`),Kg(),Qc(110,`td`)(111,`code`),Sk(112,`var(--border-radius-md)`),Kg()()(),Qc(113,`tr`)(114,`td`)(115,`code`),Sk(116,`--border-width`),Kg()(),Qc(117,`td`),Sk(118,`Contém o valor da largura dos cantos do elemento\xA0`),Kg(),Qc(119,`td`)(120,`code`),Sk(121,`var(--border-width-md)`),Kg()()(),Qc(122,`tr`)(123,`td`)(124,`code`),Sk(125,`--padding`),Kg()(),Qc(126,`td`),Sk(127,`Preenchimento`),Kg(),Qc(128,`td`)(129,`code`),Sk(130,`0 1em`),Kg()()(),Qc(131,`tr`)(132,`td`)(133,`strong`),Sk(134,`Hover`),Kg()(),vu(135,`td`)(136,`td`),Kg(),Qc(137,`tr`)(138,`td`)(139,`code`),Sk(140,`--color-hover`),Kg()(),Qc(141,`td`),Sk(142,`Cor principal no estado hover`),Kg(),Qc(143,`td`)(144,`code`),Sk(145,`var(--color-brand-01-darkest)`),Kg()()(),Qc(146,`tr`)(147,`td`)(148,`code`),Sk(149,`--background-hover`),Kg()(),Qc(150,`td`),Sk(151,`Cor de background no estado hover`),Kg(),Qc(152,`td`)(153,`code`),Sk(154,`var(--color-brand-01-lighter)`),Kg()()(),Qc(155,`tr`)(156,`td`)(157,`strong`),Sk(158,`Focused`),Kg()(),vu(159,`td`)(160,`td`),Kg(),Qc(161,`tr`)(162,`td`)(163,`code`),Sk(164,`--outline-color-focused`),Kg(),Sk(165,` \xA0`),Kg(),Qc(166,`td`),Sk(167,`Cor do outline do estado de focus`),Kg(),Qc(168,`td`)(169,`code`),Sk(170,`var(--color-action-focus)`),Kg()()(),Qc(171,`tr`)(172,`td`)(173,`strong`),Sk(174,`Pressed`),Kg()(),vu(175,`td`)(176,`td`),Kg(),Qc(177,`tr`)(178,`td`)(179,`code`),Sk(180,`--background-pressed`),Kg(),Sk(181,` \xA0`),Kg(),Qc(182,`td`),Sk(183,`Cor de background no estado de pressionado\xA0`),Kg(),Qc(184,`td`)(185,`code`),Sk(186,`var(--color-brand-01-light)`),Kg()()(),Qc(187,`tr`)(188,`td`)(189,`strong`),Sk(190,`Disabled`),Kg()(),vu(191,`td`)(192,`td`),Kg(),Qc(193,`tr`)(194,`td`)(195,`code`),Sk(196,`--color-disabled`),Kg()(),Qc(197,`td`),Sk(198,`Cor principal no estado disabled`),Kg(),Qc(199,`td`)(200,`code`),Sk(201,`var(--color-action-disabled)`),Kg()()()()()(),Qc(202,`div`,8)(203,`h4`,9),Sk(204,`Seletor`),Kg(),Qc(205,`pre`,10),Sk(206,`<po-dropdown
    p-actions="Array<PoDropdownAction>"
    (p-click-item)="EventEmitter"
    p-disabled="boolean"
    p-label="string"
    p-position="string"
    (p-root-items-load)="EventEmitter"
    p-size="string"
    (p-sub-items-load)="EventEmitter" >
</po-dropdown>
`),Kg()(),Qc(207,`h4`,11),Sk(208,`Propriedades`),Kg(),Qc(209,`table`,12)(210,`tr`,13)(211,`th`,14),Sk(212,`Nome`),Kg(),Qc(213,`th`,14),Sk(214,`Tipo`),Kg(),Qc(215,`th`,14),Sk(216,`Padrão`),Kg(),Qc(217,`th`,14),Sk(218,`Descrição`),Kg()(),Qc(219,`tr`,15)(220,`td`,16)(221,`div`,17)(222,`span`,18),Sk(223,` p-actions`),vu(224,`br`),Kg()()(),Qc(225,`td`,19)(226,`code`,20),Sk(227,`Array<PoDropdownAction>`),Kg()(),Qc(228,`td`,21),Sk(229,`-`),Kg(),Qc(230,`td`,22)(231,`p`),Sk(232,`Lista de a\xE7\xF5es que ser\xE3o exibidas no componente.
Aceita um `),Qc(233,`em`),Sk(234,`array`),Kg(),Sk(235,` de `),Qc(236,`code`),Sk(237,`PoDropdownAction`),Kg(),Sk(238,`.`),Kg()()(),Qc(239,`tr`,23)(240,`td`,16)(241,`div`,24)(242,`span`,25),Sk(243,` (p-click-item)`),vu(244,`br`),Kg()()(),Qc(245,`td`,19)(246,`code`,26),Sk(247,`EventEmitter`),Kg()(),Qc(248,`td`,21),Sk(249,`-`),Kg(),Qc(250,`td`,22)(251,`em`)(252,`strong`),Sk(253,`(opcional)`),Kg()(),Qc(254,`p`),Sk(255,`Evento disparado a cada clique em um item do menu.
Retorna o item clicado (`),Qc(256,`code`),Sk(257,`PoDropdownAction`),Kg(),Sk(258,`).`),Kg(),Qc(259,`blockquote`)(260,`p`),Sk(261,`Não é disparado para a ação interna de voltar (`),Qc(262,`code`),Sk(263,`goBack`),Kg(),Sk(264,`).`),Kg()()()(),Qc(265,`tr`,27)(266,`td`,16)(267,`div`,17)(268,`span`,18),Sk(269,` p-disabled`),vu(270,`br`),Kg()()(),Qc(271,`td`,19)(272,`code`,28),Sk(273,`boolean`),Kg()(),Qc(274,`td`,21)(275,`p`)(276,`code`),Sk(277,`false`),Kg()()(),Qc(278,`td`,22)(279,`em`)(280,`strong`),Sk(281,`(opcional)`),Kg()(),Qc(282,`p`),Sk(283,`Desabilita o campo.`),Kg()()(),Qc(284,`tr`,29)(285,`td`,16)(286,`div`,17)(287,`span`,18),Sk(288,` p-label`),vu(289,`br`),Kg()()(),Qc(290,`td`,19)(291,`code`,30),Sk(292,`string`),Kg()(),Qc(293,`td`,21),Sk(294,`-`),Kg(),Qc(295,`td`,22)(296,`p`),Sk(297,`Adiciona um rótulo ao `),Qc(298,`code`),Sk(299,`dropdown`),Kg(),Sk(300,`.`),Kg()()(),Qc(301,`tr`,31)(302,`td`,16)(303,`div`,17)(304,`span`,18),Sk(305,` p-position`),vu(306,`br`),Kg()()(),Qc(307,`td`,19)(308,`code`,30),Sk(309,`string`),Kg()(),Qc(310,`td`,21)(311,`p`)(312,`code`),Sk(313,`bottom-left`),Kg()()(),Qc(314,`td`,22)(315,`em`)(316,`strong`),Sk(317,`(opcional)`),Kg()(),Qc(318,`p`),Sk(319,`Define a posição preferencial de abertura do popup do dropdown em relação ao botão.`),Kg(),Qc(320,`p`),Sk(321,`Posições válidas:`),Kg(),Qc(322,`ul`)(323,`li`)(324,`code`),Sk(325,`right`),Kg(),Sk(326,`: No lado direito.`),Kg(),Qc(327,`li`)(328,`code`),Sk(329,`right-bottom`),Kg(),Sk(330,`: No lado direito inferior.`),Kg(),Qc(331,`li`)(332,`code`),Sk(333,`right-top`),Kg(),Sk(334,`: No lado direito superior.`),Kg(),Qc(335,`li`)(336,`code`),Sk(337,`bottom`),Kg(),Sk(338,`: Abaixo.`),Kg(),Qc(339,`li`)(340,`code`),Sk(341,`bottom-left`),Kg(),Sk(342,`: Abaixo e à esquerda (padrão).`),Kg(),Qc(343,`li`)(344,`code`),Sk(345,`bottom-right`),Kg(),Sk(346,`: Abaixo e à direita.`),Kg(),Qc(347,`li`)(348,`code`),Sk(349,`left`),Kg(),Sk(350,`: No lado esquerdo.`),Kg(),Qc(351,`li`)(352,`code`),Sk(353,`left-top`),Kg(),Sk(354,`: No lado esquerdo superior.`),Kg(),Qc(355,`li`)(356,`code`),Sk(357,`left-bottom`),Kg(),Sk(358,`: No lado esquerdo inferior.`),Kg(),Qc(359,`li`)(360,`code`),Sk(361,`top`),Kg(),Sk(362,`: Acima.`),Kg(),Qc(363,`li`)(364,`code`),Sk(365,`top-right`),Kg(),Sk(366,`: Acima e à direita.`),Kg(),Qc(367,`li`)(368,`code`),Sk(369,`top-left`),Kg(),Sk(370,`: Acima e à esquerda.`),Kg()(),Qc(371,`blockquote`)(372,`p`),Sk(373,`O popup será rotacionado automaticamente caso não caiba na posição definida.`),Kg()()()(),Qc(374,`tr`,32)(375,`td`,16)(376,`div`,24)(377,`span`,25),Sk(378,` (p-root-items-load)`),vu(379,`br`),Kg()()(),Qc(380,`td`,19)(381,`code`,26),Sk(382,`EventEmitter`),Kg()(),Qc(383,`td`,21),Sk(384,`-`),Kg(),Qc(385,`td`,22)(386,`em`)(387,`strong`),Sk(388,`(opcional)`),Kg()(),Qc(389,`p`),Sk(390,`Evento disparado no momento em que a requisição assíncrona do nível raiz é iniciada`),Kg(),Qc(391,`blockquote`)(392,`p`),Sk(393,`Compatível com a propriedade PoPopupAction.subItemsLazy`),Kg()()()(),Qc(394,`tr`,33)(395,`td`,16)(396,`div`,17)(397,`span`,18),Sk(398,` p-size`),vu(399,`br`),Kg()()(),Qc(400,`td`,19)(401,`code`,30),Sk(402,`string`),Kg()(),Qc(403,`td`,21)(404,`p`)(405,`code`),Sk(406,`medium`),Kg()()(),Qc(407,`td`,22)(408,`em`)(409,`strong`),Sk(410,`(opcional)`),Kg()(),Qc(411,`p`),Sk(412,`Define o tamanho do componente:`),Kg(),Qc(413,`ul`)(414,`li`)(415,`code`),Sk(416,`small`),Kg(),Sk(417,`: altura do button como 32px (disponível apenas para acessibilidade AA).`),Kg(),Qc(418,`li`)(419,`code`),Sk(420,`medium`),Kg(),Sk(421,`: altura do button como 44px.`),Kg()(),Qc(422,`blockquote`)(423,`p`),Sk(424,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(425,`code`),Sk(426,`medium`),Kg(),Sk(427,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(428,`a`,34),Sk(429,`po-theme`),Kg(),Sk(430,`.`),Kg()()()(),Qc(431,`tr`,35)(432,`td`,16)(433,`div`,24)(434,`span`,25),Sk(435,` (p-sub-items-load)`),vu(436,`br`),Kg()()(),Qc(437,`td`,19)(438,`code`,26),Sk(439,`EventEmitter`),Kg()(),Qc(440,`td`,21),Sk(441,`-`),Kg(),Qc(442,`td`,22)(443,`em`)(444,`strong`),Sk(445,`(opcional)`),Kg()(),Qc(446,`p`),Sk(447,`Evento disparado no momento em que a requisi\xE7\xE3o ass\xEDncrona de um subn\xEDvel \xE9 iniciada.
Retorna o item agrupador (`),Qc(448,`code`),Sk(449,`PoDropdownAction`),Kg(),Sk(450,`) que originou o carregamento.`),Kg(),Qc(451,`blockquote`)(452,`p`),Sk(453,`Compatível com a propriedade PoPopupAction.subItemsLazy`),Kg()()()()(),Qc(454,`h3`),Sk(455,`Interfaces`),Kg(),Qc(456,`h4`,36)(457,`code`,5),Sk(458,`PoDropdownAction`),Kg()(),Qc(459,`div`,2)(460,`p`),Sk(461,`Interface para as ações do componente `),Qc(462,`code`),Sk(463,`po-dropdown`),Kg(),Sk(464,`.`),Kg()(),Qc(465,`h4`,11),Sk(466,`Propriedades`),Kg(),Qc(467,`table`,12)(468,`tr`,13)(469,`th`,14),Sk(470,`Nome`),Kg(),Qc(471,`th`,14),Sk(472,`Tipo`),Kg(),Qc(473,`th`,14),Sk(474,`Descrição`),Kg()(),Qc(475,`tr`,37)(476,`td`,16)(477,`div`,17)(478,`span`,18),Sk(479,` action`),vu(480,`br`),Kg()()(),Qc(481,`td`,19)(482,`code`,38),Sk(483,`Function`),Kg()(),Qc(484,`td`,22)(485,`em`)(486,`strong`),Sk(487,`(opcional)`),Kg()(),Qc(488,`p`),Sk(489,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),Kg(),Qc(490,`p`),Sk(491,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Qc(492,`code`),Sk(493,`subItems`),Kg(),Sk(494,`.`),Kg(),Qc(495,`blockquote`)(496,`p`),Sk(497,`Para que a função seja executada no contexto do componente, utilize `),Qc(498,`em`),Sk(499,`bind`),Kg(),Sk(500,`:
`),Qc(501,`code`),Sk(502,`action: this.myFunction.bind(this)`),Kg()()()()(),Qc(503,`tr`,39)(504,`td`,16)(505,`div`,17)(506,`span`,18),Sk(507,` disabled`),vu(508,`br`),Kg()()(),Qc(509,`td`,19)(510,`code`,28),Sk(511,`boolean `),Kg(),Qc(512,`code`,38),Sk(513,` Function`),Kg()(),Qc(514,`td`,22)(515,`em`)(516,`strong`),Sk(517,`(opcional)`),Kg()(),Qc(518,`p`),Sk(519,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),Kg()()(),Qc(520,`tr`,40)(521,`td`,16)(522,`div`,17)(523,`span`,18),Sk(524,` icon`),vu(525,`br`),Kg()()(),Qc(526,`td`,19)(527,`code`,30),Sk(528,`string `),Kg(),Qc(529,`code`,41),Sk(530,` TemplateRef<void>`),Kg()(),Qc(531,`td`,22)(532,`em`)(533,`strong`),Sk(534,`(opcional)`),Kg()(),Qc(535,`p`),Sk(536,`Ícone exibido ao lado esquerdo do rótulo.`),Kg(),Qc(537,`p`),Sk(538,`Aceita ícones da `),Qc(539,`a`,42),Sk(540,`Biblioteca de ícones`),Kg(),Sk(541,`, fontes externas (ex: Font Awesome)
ou um `),Qc(542,`code`),Sk(543,`TemplateRef`),Kg(),Sk(544,` para ícones customizados.`),Kg(),Qc(545,`pre`)(546,`code`),Sk(547,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),Kg()()()(),Qc(548,`tr`,43)(549,`td`,16)(550,`div`,17)(551,`span`,18),Sk(552,` label`),vu(553,`br`),Kg()()(),Qc(554,`td`,19)(555,`code`,30),Sk(556,`string`),Kg()(),Qc(557,`td`,22)(558,`p`),Sk(559,`Rótulo da ação.`),Kg(),Qc(560,`p`),Sk(561,`A label também pode representar o agrupador de subitens quando a ação possuir `),Qc(562,`code`),Sk(563,`subItems`),Kg(),Sk(564,`.`),Kg()()(),Qc(565,`tr`,44)(566,`td`,16)(567,`div`,17)(568,`span`,18),Sk(569,` selected`),vu(570,`br`),Kg()()(),Qc(571,`td`,19)(572,`code`,28),Sk(573,`boolean`),Kg()(),Qc(574,`td`,22)(575,`em`)(576,`strong`),Sk(577,`(opcional)`),Kg()(),Qc(578,`p`),Sk(579,`Define se a ação está selecionada.`),Kg()()(),Qc(580,`tr`,45)(581,`td`,16)(582,`div`,17)(583,`span`,18),Sk(584,` separator`),vu(585,`br`),Kg()()(),Qc(586,`td`,19)(587,`code`,28),Sk(588,`boolean`),Kg()(),Qc(589,`td`,22)(590,`em`)(591,`strong`),Sk(592,`(opcional)`),Kg()(),Qc(593,`p`),Sk(594,`Atribui uma linha separadora acima do item.`),Kg()()(),Qc(595,`tr`,46)(596,`td`,16)(597,`div`,17)(598,`span`,18),Sk(599,` subItems`),vu(600,`br`),Kg()()(),Qc(601,`td`,19)(602,`code`,47),Sk(603,`Array<PoPopupAction>`),Kg()(),Qc(604,`td`,22)(605,`em`)(606,`strong`),Sk(607,`(opcional)`),Kg()(),Qc(608,`p`),Sk(609,`Define uma lista de subitens para criação de menus aninhados.`),Kg(),Qc(610,`pre`)(611,`code`),Sk(612,`{ label: 'Relat\xF3rios', subItems: [{ label: 'Mensal' }, { label: 'Anual' }] }
`),Kg()(),Qc(613,`p`),Sk(614,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),Kg(),Qc(615,`blockquote`)(616,`p`),Sk(617,`As propriedades `),Qc(618,`code`),Sk(619,`disabled`),Kg(),Sk(620,`, `),Qc(621,`code`),Sk(622,`type`),Kg(),Sk(623,` e `),Qc(624,`code`),Sk(625,`visible`),Kg(),Sk(626,` não são aplicadas visualmente ao item agrupador.`),Kg()(),Qc(627,`blockquote`)(628,`p`),Sk(629,`Quando `),Qc(630,`code`),Sk(631,`url`),Kg(),Sk(632,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),Kg()(),Qc(633,`blockquote`)(634,`p`),Sk(635,`Em subníveis aninhados, o `),Qc(636,`code`),Sk(637,`icon`),Kg(),Sk(638,` do agrupador é substituído pelo indicador de navegação (seta).`),Kg()()()(),Qc(639,`tr`,48)(640,`td`,16)(641,`div`,17)(642,`span`,18),Sk(643,` subItemsLazy`),vu(644,`br`),Kg()()(),Qc(645,`td`,19)(646,`code`,49),Sk(647,`(item: PoPopupAction) => Observable<Array<PoPopupAction>>`),Kg()(),Qc(648,`td`,22)(649,`em`)(650,`strong`),Sk(651,`(opcional)`),Kg()(),Qc(652,`p`),Sk(653,`Define o carregamento assíncrono (lazy loading) dos subitens de um agrupador.`),Kg(),Qc(654,`p`),Sk(655,`Recebe o item agrupador e retorna um `),Qc(656,`code`),Sk(657,`Observable<Array<PoPopupAction>>`),Kg(),Sk(658,`. A requisi\xE7\xE3o \xE9 disparada
`),Qc(659,`strong`),Sk(660,`apenas`),Kg(),Sk(661,` no momento da expansão (clique ou atalho de teclado), exibindo placeholders com `),Qc(662,`code`),Sk(663,`po-skeleton`),Kg(),Sk(664,`
enquanto os dados s\xE3o carregados:`),Kg(),Qc(665,`pre`)(666,`code`),Sk(667,`{
  label: 'Relat\xF3rios',
  subItemsLazy: (item) => this.reportService.getReports(item)
}
`),Kg()(),Qc(668,`blockquote`)(669,`p`),Sk(670,`O resultado \xE9 armazenado em cache ap\xF3s o primeiro carregamento bem-sucedido.
Em caso de falha, \xE9 exibida uma mensagem com a op\xE7\xE3o de tentar novamente.`),Kg()(),Qc(671,`p`),Sk(672,`Ao definir esta propriedade, o item exibirá um ícone indicador de subnível.`),Kg()()(),Qc(673,`tr`,50)(674,`td`,16)(675,`div`,17)(676,`span`,18),Sk(677,` type`),vu(678,`br`),Kg()()(),Qc(679,`td`,19)(680,`code`,30),Sk(681,`string`),Kg()(),Qc(682,`td`,22)(683,`em`)(684,`strong`),Sk(685,`(opcional)`),Kg()(),Qc(686,`p`),Sk(687,`Define a cor do item.`),Kg(),Qc(688,`p`),Sk(689,`Valores válidos:`),Kg(),Qc(690,`ul`)(691,`li`)(692,`code`),Sk(693,`default`),Kg()(),Qc(694,`li`)(695,`code`),Sk(696,`danger`),Kg()()()()(),Qc(697,`tr`,51)(698,`td`,16)(699,`div`,17)(700,`span`,18),Sk(701,` url`),vu(702,`br`),Kg()()(),Qc(703,`td`,19)(704,`code`,30),Sk(705,`string`),Kg()(),Qc(706,`td`,22)(707,`em`)(708,`strong`),Sk(709,`(opcional)`),Kg()(),Qc(710,`p`),Sk(711,`URL para redirecionamento. Aceita rotas internas e links externos.`),Kg(),Qc(712,`p`),Sk(713,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Qc(714,`code`),Sk(715,`url`),Kg(),Sk(716,` é informada em um agrupador, o clique `),Qc(717,`strong`),Sk(718,`não abrirá os subitens`),Kg(),Sk(719,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),Kg(),Qc(720,`blockquote`)(721,`p`),Sk(722,`Quando informada, tem prioridade sobre a propriedade `),Qc(723,`code`),Sk(724,`action`),Kg(),Sk(725,`.`),Kg()()()(),Qc(726,`tr`,52)(727,`td`,16)(728,`div`,17)(729,`span`,18),Sk(730,` visible`),vu(731,`br`),Kg()()(),Qc(732,`td`,19)(733,`code`,28),Sk(734,`boolean `),Kg(),Qc(735,`code`,38),Sk(736,` Function`),Kg()(),Qc(737,`td`,22)(738,`em`)(739,`strong`),Sk(740,`(opcional)`),Kg()(),Qc(741,`p`),Sk(742,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function Ye(i,Y){if(i&1){let l=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(l);let o=ek();return U_(o.changeTab(`web`))}),vu(1,`sample-po-dropdown-basic-view`)(2,`sample-po-dropdown-labs-view`)(3,`sample-po-dropdown-social-network-view`)(4,`sample-po-dropdown-subitems-view`)(5,`sample-po-dropdown-lazy-subitems-view`),Kg()}if(i&2){let l=ek();Rb(`p-active`,l.activeTab===`web`)}}var Qe=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(I(ar),I(An))};static ɵcmp=Jn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Dropdown`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,o){a&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,Ye,6,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return o.changeTab(`doc`)}),vu(4,`sample-po-dropdown-doc`),Kg()()()),a&2&&(Rb(`p-actions`,o.actions),wg(2),VO(o.hidePoWebSample?-1:2),wg(),Rb(`p-active`,o.activeTab===`doc`))},dependencies:[Mze,tre,are,Se,Ee,fe,Ce,ve,ye],encapsulation:2,changeDetection:1})}return i})()}];var Pe=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=ge$1({type:i});static ɵinj=de({imports:[GV.forChild(Qe),GV]})}return i})();var Rt=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=ge$1({type:i});static ɵinj=de({imports:[M,Pe]})}return i})();export{Rt as DocPoDropdownModule};