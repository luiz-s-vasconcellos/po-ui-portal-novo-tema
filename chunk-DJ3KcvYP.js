import{t as r}from"./chunk-zystk1pz.js";import{$r as RK,Ai as Zn,Br as MK,C as G4,Ca as o0,Ci as Xx,Et as Yoe,Ia as rg,Ii as ab,Jr as Ok,Ka as vx,Kr as O,L as KP,La as sb,Li as b,Mi as __,Mn as ure,Nr as I1,Oa as pe,Pa as r0,Qa as xF,Ra as uO,Sa as nu,Sn as ri,Tr as Fx,Ua as v_,Wn as yae,Xa as wg,Yn as zu,Z as P4,_r as Dx,_t as Vze,aa as ir,ca as jc,di as UE,ea as h,fr as DO,ha as lO,ii as SK,ir as Ax,ji as _O,ka as pf,ln as lre,ni as Rv,oi as Sn,pn as p4,ri as SF,rr as Ag,sr as Bx,tt as Qte,x as Ff,ya as mt,za as ue}from"./chunk-CtaZqRb_.js";import{n as P,t as M}from"./main-ZQ7GH27Y.js";var Ae=()=>({label:`How to install PO`,url:`/guides/how-install`});var _e=i=>[i];var be=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-dropdown-basic`]],standalone:!1,decls:1,vars:4,consts:[[`p-label`,`PO Dropdown`,3,`p-actions`]],template:function(a,o){a&1&&nu(0,`po-dropdown`,0),a&2&&UE(`p-actions`,DO(2,_e,_O(1,Ae)))},dependencies:[KP],encapsulation:2,changeDetection:1})}return i})();var Te=i=>({"docs-sample-code-tabs":i});var Se=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-dropdown-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Dropdown Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-dropdown-basic/sample-po-dropdown-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-dropdown p-label="PO Dropdown" [p-actions]="[{ label: 'How to install PO', url: '/guides/how-install' }]">
</po-dropdown>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-dropdown-basic/sample-po-dropdown-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dropdown-basic',
  templateUrl: './sample-po-dropdown-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDropdownBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-dropdown-basic`),wg(),nu(23,`hr`)),a&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Te,o.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,be],encapsulation:2,changeDetection:1})}return i})();var ge=(()=>{class i{poNotification=h(zu);action;actions;parentList;label;properties;size;actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Separator`,value:`separator`},{label:`Selected`,value:`selected`},{label:`Visible`,value:`visible`}];iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`an an-globe`,label:`an an-globe`},{value:`fa fa-podcast`,label:`fa fa-podcast`}];propertiesOptions=[{value:`disabled`,label:`Disabled`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];ngOnInit(){this.restore()}addAction(l){let a=r({},l);if(a.action=a.action?this.showAction.bind(this,a.action):void 0,!l.parent)this.actions=[...this.actions,a];else{let o=this.getActionNode(this.actions,l.parent);o?o.subItems=[...o.subItems||[],a]:this.actions=[...this.actions,a]}this.actions=[].concat(this.actions),this.parentList=this.updateParentList(this.actions),this.restoreActionForm()}getActionNode(l,a){if(!(!l||!Array.isArray(l)||!a))for(let o of l){if(o.label===a||o.value===a)return o;if(o.subItems&&Array.isArray(o.subItems)){let m=this.getActionNode(o.subItems,a);if(m)return m}}}updateParentList(l,a=0,o=[]){return!l||!Array.isArray(l)||l.forEach(m=>{let{label:b}=m;o.push({label:`${`-`.repeat(a)} ${b}`,value:b}),m.subItems&&Array.isArray(m.subItems)&&this.updateParentList(m.subItems,a+1,o)}),o}restore(){this.actions=[],this.parentList=[],this.label=`PO Dropdown`,this.size=`medium`,this.properties=[],this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null,parent:void 0}}showAction(l){this.poNotification.success(`Action clicked: ${l}`)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-dropdown-labs`]],standalone:!1,decls:23,vars:21,consts:[[`formAction`,`ngForm`],[`f`,`ngForm`],[1,`po-row`],[1,`po-offset-xl-5`,`po-offset-lg-5`,3,`p-actions`,`p-disabled`,`p-label`,`p-size`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`actionURL`,`p-label`,`URL`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`parent`,`p-label`,`Subitems`,`p-placeholder`,`Add subitems`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`action`,`p-columns`,`4`,`p-indeterminate`,``,`p-label`,`Action properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add Action`,1,`po-md-4`,`po-lg-2`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,o){if(a&1){let m=Ax();jc(0,`div`,2),nu(1,`po-dropdown`,3),wg(),nu(2,`po-divider`),jc(3,`form`,null,0)(5,`po-input`,4),r0(),ab(`ngModelChange`,function(d){return v_(m),uO(o.action.label,d)||(o.action.label=d),__(d)}),wg(),jc(6,`po-input`,5),r0(),ab(`ngModelChange`,function(d){return v_(m),uO(o.action.action,d)||(o.action.action=d),__(d)}),wg(),jc(7,`po-input`,6),r0(),ab(`ngModelChange`,function(d){return v_(m),uO(o.action.url,d)||(o.action.url=d),__(d)}),wg(),jc(8,`po-select`,7),r0(),ab(`ngModelChange`,function(d){return v_(m),uO(o.action.type,d)||(o.action.type=d),__(d)}),wg(),jc(9,`po-select`,8),r0(),ab(`ngModelChange`,function(d){return v_(m),uO(o.action.icon,d)||(o.action.icon=d),__(d)}),wg(),jc(10,`po-select`,9),r0(),ab(`ngModelChange`,function(d){return v_(m),uO(o.action.parent,d)||(o.action.parent=d),__(d)}),wg(),jc(11,`po-checkbox-group`,10),r0(),ab(`ngModelChange`,function(d){return v_(m),uO(o.action,d)||(o.action=d),__(d)}),wg(),jc(12,`div`,2)(13,`po-button`,11),mt(`p-click`,function(){return o.addAction(o.action)}),wg()()(),nu(14,`po-divider`),jc(15,`form`,null,1)(17,`div`,2)(18,`po-input`,12),r0(),ab(`ngModelChange`,function(d){return v_(m),uO(o.label,d)||(o.label=d),__(d)}),wg()(),jc(19,`po-checkbox-group`,13),r0(),ab(`ngModelChange`,function(d){return v_(m),uO(o.properties,d)||(o.properties=d),__(d)}),wg(),jc(20,`po-radio-group`,14),r0(),ab(`ngModelChange`,function(d){return v_(m),uO(o.size,d)||(o.size=d),__(d)}),wg(),jc(21,`div`,2)(22,`po-button`,15),mt(`p-click`,function(){return o.restore()}),wg()()()}if(a&2){let m=Bx(4);rg(),UE(`p-actions`,o.actions)(`p-disabled`,o.properties.includes(`disabled`))(`p-label`,o.label)(`p-size`,o.size),rg(4),sb(`ngModel`,o.action.label),o0(),rg(),sb(`ngModel`,o.action.action),o0(),rg(),sb(`ngModel`,o.action.url),o0(),rg(),sb(`ngModel`,o.action.type),UE(`p-options`,o.typeOptions),o0(),rg(),sb(`ngModel`,o.action.icon),UE(`p-options`,o.iconOptions),o0(),rg(),sb(`ngModel`,o.action.parent),UE(`p-options`,o.parentList),o0(),rg(),sb(`ngModel`,o.action),UE(`p-options`,o.actionOptions),o0(),rg(2),UE(`p-disabled`,m.form.invalid),rg(5),sb(`ngModel`,o.label),o0(),rg(),sb(`ngModel`,o.properties),UE(`p-options`,o.propertiesOptions),o0(),rg(),sb(`ngModel`,o.size),UE(`p-options`,o.sizeOptions),o0()}},dependencies:[RK,SK,MK,xF,SF,ri,Ff,KP,P4,G4,Qte,Yoe],encapsulation:2,changeDetection:1})}return i})();var Fe=i=>({"docs-sample-code-tabs":i});var Ee=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-dropdown-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Dropdown Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-dropdown-labs/sample-po-dropdown-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-dropdown-labs/sample-po-dropdown-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-dropdown-labs`),wg(),nu(23,`hr`)),a&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Fe,o.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,ge],encapsulation:2,changeDetection:1})}return i})();function ze(i,G){if(i&1&&(jc(0,`div`,0),nu(1,`po-avatar`,2),jc(2,`div`,3)(3,`span`,4),lO(4),wg(),jc(5,`span`,5),lO(6),wg(),jc(7,`span`,5),lO(8),wg()()(),jc(9,`div`,0),nu(10,`po-dropdown`,6),wg()),i&2){let l=Fx();rg(),UE(`p-src`,l.userAvatar),rg(3),Ag(` `,l.currentFriend.name,` `),rg(2),Ag(` `,l.currentFriend.mutualFriends,` mutual friends `),rg(2),Ag(` Resides in `,l.currentFriend.reside,` `),rg(2),UE(`p-actions`,l.answers)}}function Ne(i,G){i&1&&(jc(0,`div`,0)(1,`span`,7),lO(2,`Congratulations TOTVS, no more requests!`),wg()())}var he=(()=>{class i{poNotification=h(zu);currentFriend;userAvatar=`https://lorempixel.com/144/144/`;answers=[{label:`Confirm`,action:this.notification.bind(this,`added`,`success`)},{label:`Ignore`,action:this.notification.bind(this,`ignored`,`warning`)},{label:`Block`,action:this.notification.bind(this,`blocked`,`information`)}];newFriends=[{name:`Mr. Dev PO`,mutualFriends:`7`,reside:`Mountain View, CA`},{name:`Mr. AI PO`,mutualFriends:`99+`,reside:`New York City, NY`},{name:`Mr. UX PO`,mutualFriends:`14`,reside:`Los Angeles, CA`}];indexFriend=0;ngOnInit(){this.setCurrentFriend(0)}notification(l,a){this.poNotification[a](`User ${l} successfully!`),this.indexFriend++,this.setCurrentFriend(this.indexFriend)}setCurrentFriend(l){this.currentFriend=this.newFriends[l]}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-dropdown-social-network`]],standalone:!1,decls:4,vars:1,consts:[[1,`po-row`],[`p-title`,`Friend Request`,1,`po-lg-6`],[`p-size`,`lg`,1,`po-md-4`,3,`p-src`],[1,`po-md-8`],[1,`po-sm-12`,`po-font-subtitle`],[1,`po-sm-12`,`po-font-text`],[`p-label`,`Add as friend?`,1,`po-lg-8`,`po-offset-md-4`,`po-offset-lg-4`,`po-offset-xl-4`,3,`p-actions`],[1,`po-lg-8`,`po-font-subtitle`]],template:function(a,o){a&1&&(jc(0,`div`,0)(1,`po-widget`,1),vx(2,ze,11,5)(3,Ne,3,0,`div`,0),wg()()),a&2&&(rg(2),Dx(o.currentFriend?2:3))},dependencies:[p4,KP,yae],encapsulation:2,changeDetection:1})}return i})();var Be=i=>({"docs-sample-code-tabs":i});var fe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-dropdown-social-network-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Dropdown - Social Network`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-dropdown-social-network/sample-po-dropdown-social-network.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-dropdown-social-network/sample-po-dropdown-social-network.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-dropdown-social-network`),wg(),nu(23,`hr`)),a&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Be,o.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,he],encapsulation:2,changeDetection:1})}return i})();var we=(()=>{class i{actions=[{label:`New Sale`,action:()=>console.log(`New Sale`)},{label:`New Cancellation`,action:()=>console.log(`New Cancellation`),type:`danger`},{label:`Reports`,subItems:[{label:`Monthly Sales`,action:()=>console.log(`Monthly Sales`),icon:`an an-chart-line-up`},{label:`Annual Sales`,action:()=>console.log(`Annual Sales`),icon:`an an-chart-line-up`}]},{label:`Settings`,subItems:[{label:`Users`,action:()=>console.log(`Users`)},{label:`System`,subItems:[{label:`Backup`,action:()=>console.log(`Backup`)},{label:`Logs`,action:()=>console.log(`Logs`)}]}]}];static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-dropdown-subitems`]],standalone:!1,decls:1,vars:1,consts:[[`p-label`,`PO Dropdown`,3,`p-actions`]],template:function(a,o){a&1&&nu(0,`po-dropdown`,0),a&2&&UE(`p-actions`,o.actions)},dependencies:[KP],encapsulation:2,changeDetection:1})}return i})();var Re=i=>({"docs-sample-code-tabs":i});var Ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-dropdown-subitems-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Dropdown Subitems`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-dropdown-subitems/sample-po-dropdown-subitems.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-dropdown p-label="PO Dropdown" [p-actions]="actions"> </po-dropdown>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-dropdown-subitems/sample-po-dropdown-subitems.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-dropdown-subitems`),wg(),nu(23,`hr`)),a&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Re,o.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,we],encapsulation:2,changeDetection:1})}return i})();var xe=(()=>{class i{shouldFailReports=!0;actions=[{label:`New Sale`,action:()=>console.log(`New Sale`)},{label:`Reports (lazy)`,subItemsLazy:l=>this.loadReports(l)},{label:`Settings (lazy)`,subItemsLazy:()=>this.loadSettings()}];onSubItemsLoad(l){console.log(`Loading sub items for:`,l.label)}loadReports(l){return this.shouldFailReports?(this.shouldFailReports=!1,pf(()=>/* @__PURE__ */ new Error(`Falha ao carregar relatórios`)).pipe(Rv(1e3))):O([{label:`Monthly Sales`,action:()=>console.log(`Monthly Sales`)},{label:`Annual Sales`,action:()=>console.log(`Annual Sales`)}]).pipe(Rv(1e3))}loadSettings(){return O([{label:`Users`,action:()=>console.log(`Users`)},{label:`System`,action:()=>console.log(`System`)}]).pipe(Rv(1500))}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-dropdown-lazy-subitems`]],standalone:!1,decls:1,vars:1,consts:[[`p-label`,`PO Dropdown Lazy`,3,`p-sub-items-load`,`p-actions`]],template:function(a,o){a&1&&(jc(0,`po-dropdown`,0),mt(`p-sub-items-load`,function(b){return o.onSubItemsLoad(b)}),wg()),a&2&&UE(`p-actions`,o.actions)},dependencies:[KP],encapsulation:2})}return i})();var Ue=i=>({"docs-sample-code-tabs":i});var ve=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-dropdown-lazy-subitems-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Dropdown Lazy Subitems`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-dropdown-lazy-subitems/sample-po-dropdown-lazy-subitems.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-dropdown p-label="PO Dropdown Lazy" [p-actions]="actions" (p-sub-items-load)="onSubItemsLoad($event)">
</po-dropdown>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-dropdown-lazy-subitems/sample-po-dropdown-lazy-subitems.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component } from '@angular/core';
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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-dropdown-lazy-subitems`),wg(),nu(23,`hr`)),a&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Ue,o.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,xe],encapsulation:2,changeDetection:1})}return i})();var ye=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-dropdown-doc`]],standalone:!1,decls:743,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/guides/getting-started`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDropdownAction>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`pan`,``,1,`docs-api-property-type`,`(item:`,`PoPopupAction)`,`=>`,`Observable<Array<PoPopupAction>>`]],template:function(a,o){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoDropdownModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do componente po-dropdown.`),wg()(),jc(7,`h3`,3),lO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),lO(11,`PoDropdownComponent`),wg()(),jc(12,`div`,2)(13,`p`),lO(14,`O componente `),jc(15,`code`),lO(16,`po-dropdown`),wg(),lO(17,` pode ser utilizado como um agrupador de ações e / ou opções.`),wg(),jc(18,`blockquote`)(19,`p`),lO(20,`Caso não haja configuração de rotas em sua aplicação, se faz necessário importar o `),jc(21,`code`),lO(22,`RouterModule`),wg(),lO(23,`
no m\xF3dulo principal para o correto funcionamento deste componente:`),wg()(),jc(24,`pre`)(25,`code`),lO(26,`import { RouterModule } from '@angular/router';

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
`),wg()(),jc(27,`blockquote`)(28,`p`),lO(29,`Para maiores d\xFAvidas referente \xE0 configura\xE7\xE3o de rotas, acesse em nosso portal /Guias /Come\xE7ando
`),jc(30,`a`,6),lO(31,`/Configurando as rotas do po-menu`),wg(),lO(32,`.`),wg()(),jc(33,`h4`),lO(34,`Tokens customizáveis`),wg(),jc(35,`p`),lO(36,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(37,`blockquote`)(38,`p`),lO(39,`Para maiores informações, acesse o guia `),jc(40,`a`,7),lO(41,`Personalizando o Tema Padrão com Tokens CSS`),wg(),lO(42,`.`),wg()(),jc(43,`table`)(44,`thead`)(45,`tr`)(46,`th`),lO(47,`Propriedade`),wg(),jc(48,`th`),lO(49,`Descrição`),wg(),jc(50,`th`),lO(51,`Valor Padrão`),wg()()(),jc(52,`tbody`)(53,`tr`)(54,`td`)(55,`strong`),lO(56,`Default Values`),wg()(),nu(57,`td`)(58,`td`),wg(),jc(59,`tr`)(60,`td`)(61,`code`),lO(62,`--font-family`),wg()(),jc(63,`td`),lO(64,`Família tipográfica usada`),wg(),jc(65,`td`)(66,`code`),lO(67,`var(--font-family-theme)`),wg()()(),jc(68,`tr`)(69,`td`)(70,`code`),lO(71,`--font-size`),wg()(),jc(72,`td`),lO(73,`Tamanho da fonte`),wg(),jc(74,`td`)(75,`code`),lO(76,`var(--font-size-default)`),wg()()(),jc(77,`tr`)(78,`td`)(79,`code`),lO(80,`--font-weight`),wg()(),jc(81,`td`),lO(82,`Peso da fonte`),wg(),jc(83,`td`)(84,`code`),lO(85,`var(--font-weight-bold)`),wg()()(),jc(86,`tr`)(87,`td`)(88,`code`),lO(89,`--line-height`),wg()(),jc(90,`td`),lO(91,`Tamanho da label`),wg(),jc(92,`td`)(93,`code`),lO(94,`var(--line-height-none)`),wg()()(),jc(95,`tr`)(96,`td`)(97,`code`),lO(98,`--color`),wg()(),jc(99,`td`),lO(100,`Cor principal do dropdown`),wg(),jc(101,`td`)(102,`code`),lO(103,`var(--color-action-default)`),wg()()(),jc(104,`tr`)(105,`td`)(106,`code`),lO(107,`--border-radius`),wg()(),jc(108,`td`),lO(109,`Contém o valor do raio dos cantos do elemento\xA0`),wg(),jc(110,`td`)(111,`code`),lO(112,`var(--border-radius-md)`),wg()()(),jc(113,`tr`)(114,`td`)(115,`code`),lO(116,`--border-width`),wg()(),jc(117,`td`),lO(118,`Contém o valor da largura dos cantos do elemento\xA0`),wg(),jc(119,`td`)(120,`code`),lO(121,`var(--border-width-md)`),wg()()(),jc(122,`tr`)(123,`td`)(124,`code`),lO(125,`--padding`),wg()(),jc(126,`td`),lO(127,`Preenchimento`),wg(),jc(128,`td`)(129,`code`),lO(130,`0 1em`),wg()()(),jc(131,`tr`)(132,`td`)(133,`strong`),lO(134,`Hover`),wg()(),nu(135,`td`)(136,`td`),wg(),jc(137,`tr`)(138,`td`)(139,`code`),lO(140,`--color-hover`),wg()(),jc(141,`td`),lO(142,`Cor principal no estado hover`),wg(),jc(143,`td`)(144,`code`),lO(145,`var(--color-brand-01-darkest)`),wg()()(),jc(146,`tr`)(147,`td`)(148,`code`),lO(149,`--background-hover`),wg()(),jc(150,`td`),lO(151,`Cor de background no estado hover`),wg(),jc(152,`td`)(153,`code`),lO(154,`var(--color-brand-01-lighter)`),wg()()(),jc(155,`tr`)(156,`td`)(157,`strong`),lO(158,`Focused`),wg()(),nu(159,`td`)(160,`td`),wg(),jc(161,`tr`)(162,`td`)(163,`code`),lO(164,`--outline-color-focused`),wg(),lO(165,` \xA0`),wg(),jc(166,`td`),lO(167,`Cor do outline do estado de focus`),wg(),jc(168,`td`)(169,`code`),lO(170,`var(--color-action-focus)`),wg()()(),jc(171,`tr`)(172,`td`)(173,`strong`),lO(174,`Pressed`),wg()(),nu(175,`td`)(176,`td`),wg(),jc(177,`tr`)(178,`td`)(179,`code`),lO(180,`--background-pressed`),wg(),lO(181,` \xA0`),wg(),jc(182,`td`),lO(183,`Cor de background no estado de pressionado\xA0`),wg(),jc(184,`td`)(185,`code`),lO(186,`var(--color-brand-01-light)`),wg()()(),jc(187,`tr`)(188,`td`)(189,`strong`),lO(190,`Disabled`),wg()(),nu(191,`td`)(192,`td`),wg(),jc(193,`tr`)(194,`td`)(195,`code`),lO(196,`--color-disabled`),wg()(),jc(197,`td`),lO(198,`Cor principal no estado disabled`),wg(),jc(199,`td`)(200,`code`),lO(201,`var(--color-action-disabled)`),wg()()()()()(),jc(202,`div`,8)(203,`h4`,9),lO(204,`Seletor`),wg(),jc(205,`pre`,10),lO(206,`<po-dropdown
    p-actions="Array<PoDropdownAction>"
    (p-click-item)="EventEmitter"
    p-disabled="boolean"
    p-label="string"
    p-position="string"
    (p-root-items-load)="EventEmitter"
    p-size="string"
    (p-sub-items-load)="EventEmitter" >
</po-dropdown>
`),wg()(),jc(207,`h4`,11),lO(208,`Propriedades`),wg(),jc(209,`table`,12)(210,`tr`,13)(211,`th`,14),lO(212,`Nome`),wg(),jc(213,`th`,14),lO(214,`Tipo`),wg(),jc(215,`th`,14),lO(216,`Padrão`),wg(),jc(217,`th`,14),lO(218,`Descrição`),wg()(),jc(219,`tr`,15)(220,`td`,16)(221,`div`,17)(222,`span`,18),lO(223,` p-actions`),nu(224,`br`),wg()()(),jc(225,`td`,19)(226,`code`,20),lO(227,`Array<PoDropdownAction>`),wg()(),jc(228,`td`,21),lO(229,`-`),wg(),jc(230,`td`,22)(231,`p`),lO(232,`Lista de a\xE7\xF5es que ser\xE3o exibidas no componente.
Aceita um `),jc(233,`em`),lO(234,`array`),wg(),lO(235,` de `),jc(236,`code`),lO(237,`PoDropdownAction`),wg(),lO(238,`.`),wg()()(),jc(239,`tr`,15)(240,`td`,16)(241,`div`,23)(242,`span`,24),lO(243,` (p-click-item)`),nu(244,`br`),wg()()(),jc(245,`td`,19)(246,`code`,25),lO(247,`EventEmitter`),wg()(),jc(248,`td`,21),lO(249,`-`),wg(),jc(250,`td`,22)(251,`em`)(252,`strong`),lO(253,`(opcional)`),wg()(),jc(254,`p`),lO(255,`Evento disparado a cada clique em um item do menu.
Retorna o item clicado (`),jc(256,`code`),lO(257,`PoDropdownAction`),wg(),lO(258,`).`),wg(),jc(259,`blockquote`)(260,`p`),lO(261,`Não é disparado para a ação interna de voltar (`),jc(262,`code`),lO(263,`goBack`),wg(),lO(264,`).`),wg()()()(),jc(265,`tr`,15)(266,`td`,16)(267,`div`,17)(268,`span`,18),lO(269,` p-disabled`),nu(270,`br`),wg()()(),jc(271,`td`,19)(272,`code`,26),lO(273,`boolean`),wg()(),jc(274,`td`,21)(275,`p`)(276,`code`),lO(277,`false`),wg()()(),jc(278,`td`,22)(279,`em`)(280,`strong`),lO(281,`(opcional)`),wg()(),jc(282,`p`),lO(283,`Desabilita o campo.`),wg()()(),jc(284,`tr`,15)(285,`td`,16)(286,`div`,17)(287,`span`,18),lO(288,` p-label`),nu(289,`br`),wg()()(),jc(290,`td`,19)(291,`code`,27),lO(292,`string`),wg()(),jc(293,`td`,21),lO(294,`-`),wg(),jc(295,`td`,22)(296,`p`),lO(297,`Adiciona um rótulo ao `),jc(298,`code`),lO(299,`dropdown`),wg(),lO(300,`.`),wg()()(),jc(301,`tr`,15)(302,`td`,16)(303,`div`,17)(304,`span`,18),lO(305,` p-position`),nu(306,`br`),wg()()(),jc(307,`td`,19)(308,`code`,27),lO(309,`string`),wg()(),jc(310,`td`,21)(311,`p`)(312,`code`),lO(313,`bottom-left`),wg()()(),jc(314,`td`,22)(315,`em`)(316,`strong`),lO(317,`(opcional)`),wg()(),jc(318,`p`),lO(319,`Define a posição preferencial de abertura do popup do dropdown em relação ao botão.`),wg(),jc(320,`p`),lO(321,`Posições válidas:`),wg(),jc(322,`ul`)(323,`li`)(324,`code`),lO(325,`right`),wg(),lO(326,`: No lado direito.`),wg(),jc(327,`li`)(328,`code`),lO(329,`right-bottom`),wg(),lO(330,`: No lado direito inferior.`),wg(),jc(331,`li`)(332,`code`),lO(333,`right-top`),wg(),lO(334,`: No lado direito superior.`),wg(),jc(335,`li`)(336,`code`),lO(337,`bottom`),wg(),lO(338,`: Abaixo.`),wg(),jc(339,`li`)(340,`code`),lO(341,`bottom-left`),wg(),lO(342,`: Abaixo e à esquerda (padrão).`),wg(),jc(343,`li`)(344,`code`),lO(345,`bottom-right`),wg(),lO(346,`: Abaixo e à direita.`),wg(),jc(347,`li`)(348,`code`),lO(349,`left`),wg(),lO(350,`: No lado esquerdo.`),wg(),jc(351,`li`)(352,`code`),lO(353,`left-top`),wg(),lO(354,`: No lado esquerdo superior.`),wg(),jc(355,`li`)(356,`code`),lO(357,`left-bottom`),wg(),lO(358,`: No lado esquerdo inferior.`),wg(),jc(359,`li`)(360,`code`),lO(361,`top`),wg(),lO(362,`: Acima.`),wg(),jc(363,`li`)(364,`code`),lO(365,`top-right`),wg(),lO(366,`: Acima e à direita.`),wg(),jc(367,`li`)(368,`code`),lO(369,`top-left`),wg(),lO(370,`: Acima e à esquerda.`),wg()(),jc(371,`blockquote`)(372,`p`),lO(373,`O popup será rotacionado automaticamente caso não caiba na posição definida.`),wg()()()(),jc(374,`tr`,15)(375,`td`,16)(376,`div`,23)(377,`span`,24),lO(378,` (p-root-items-load)`),nu(379,`br`),wg()()(),jc(380,`td`,19)(381,`code`,25),lO(382,`EventEmitter`),wg()(),jc(383,`td`,21),lO(384,`-`),wg(),jc(385,`td`,22)(386,`em`)(387,`strong`),lO(388,`(opcional)`),wg()(),jc(389,`p`),lO(390,`Evento disparado no momento em que a requisição assíncrona do nível raiz é iniciada`),wg(),jc(391,`blockquote`)(392,`p`),lO(393,`Compatível com a propriedade PoPopupAction.subItemsLazy`),wg()()()(),jc(394,`tr`,15)(395,`td`,16)(396,`div`,17)(397,`span`,18),lO(398,` p-size`),nu(399,`br`),wg()()(),jc(400,`td`,19)(401,`code`,27),lO(402,`string`),wg()(),jc(403,`td`,21)(404,`p`)(405,`code`),lO(406,`medium`),wg()()(),jc(407,`td`,22)(408,`em`)(409,`strong`),lO(410,`(opcional)`),wg()(),jc(411,`p`),lO(412,`Define o tamanho do componente:`),wg(),jc(413,`ul`)(414,`li`)(415,`code`),lO(416,`small`),wg(),lO(417,`: altura do button como 32px (disponível apenas para acessibilidade AA).`),wg(),jc(418,`li`)(419,`code`),lO(420,`medium`),wg(),lO(421,`: altura do button como 44px.`),wg()(),jc(422,`blockquote`)(423,`p`),lO(424,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(425,`code`),lO(426,`medium`),wg(),lO(427,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(428,`a`,28),lO(429,`po-theme`),wg(),lO(430,`.`),wg()()()(),jc(431,`tr`,15)(432,`td`,16)(433,`div`,23)(434,`span`,24),lO(435,` (p-sub-items-load)`),nu(436,`br`),wg()()(),jc(437,`td`,19)(438,`code`,25),lO(439,`EventEmitter`),wg()(),jc(440,`td`,21),lO(441,`-`),wg(),jc(442,`td`,22)(443,`em`)(444,`strong`),lO(445,`(opcional)`),wg()(),jc(446,`p`),lO(447,`Evento disparado no momento em que a requisi\xE7\xE3o ass\xEDncrona de um subn\xEDvel \xE9 iniciada.
Retorna o item agrupador (`),jc(448,`code`),lO(449,`PoDropdownAction`),wg(),lO(450,`) que originou o carregamento.`),wg(),jc(451,`blockquote`)(452,`p`),lO(453,`Compatível com a propriedade PoPopupAction.subItemsLazy`),wg()()()()(),jc(454,`h3`),lO(455,`Interfaces`),wg(),jc(456,`h4`,29)(457,`code`,5),lO(458,`PoDropdownAction`),wg()(),jc(459,`div`,2)(460,`p`),lO(461,`Interface para as ações do componente `),jc(462,`code`),lO(463,`po-dropdown`),wg(),lO(464,`.`),wg()(),jc(465,`h4`,11),lO(466,`Propriedades`),wg(),jc(467,`table`,12)(468,`tr`,13)(469,`th`,14),lO(470,`Nome`),wg(),jc(471,`th`,14),lO(472,`Tipo`),wg(),jc(473,`th`,14),lO(474,`Descrição`),wg()(),jc(475,`tr`,15)(476,`td`,16)(477,`div`,17)(478,`span`,18),lO(479,` action`),nu(480,`br`),wg()()(),jc(481,`td`,19)(482,`code`,30),lO(483,`Function`),wg()(),jc(484,`td`,22)(485,`em`)(486,`strong`),lO(487,`(opcional)`),wg()(),jc(488,`p`),lO(489,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),wg(),jc(490,`p`),lO(491,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),jc(492,`code`),lO(493,`subItems`),wg(),lO(494,`.`),wg(),jc(495,`blockquote`)(496,`p`),lO(497,`Para que a função seja executada no contexto do componente, utilize `),jc(498,`em`),lO(499,`bind`),wg(),lO(500,`:
`),jc(501,`code`),lO(502,`action: this.myFunction.bind(this)`),wg()()()()(),jc(503,`tr`,15)(504,`td`,16)(505,`div`,17)(506,`span`,18),lO(507,` disabled`),nu(508,`br`),wg()()(),jc(509,`td`,19)(510,`code`,26),lO(511,`boolean `),wg(),jc(512,`code`,30),lO(513,` Function`),wg()(),jc(514,`td`,22)(515,`em`)(516,`strong`),lO(517,`(opcional)`),wg()(),jc(518,`p`),lO(519,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),wg()()(),jc(520,`tr`,15)(521,`td`,16)(522,`div`,17)(523,`span`,18),lO(524,` icon`),nu(525,`br`),wg()()(),jc(526,`td`,19)(527,`code`,27),lO(528,`string `),wg(),jc(529,`code`,31),lO(530,` TemplateRef<void>`),wg()(),jc(531,`td`,22)(532,`em`)(533,`strong`),lO(534,`(opcional)`),wg()(),jc(535,`p`),lO(536,`Ícone exibido ao lado esquerdo do rótulo.`),wg(),jc(537,`p`),lO(538,`Aceita ícones da `),jc(539,`a`,32),lO(540,`Biblioteca de ícones`),wg(),lO(541,`, fontes externas (ex: Font Awesome)
ou um `),jc(542,`code`),lO(543,`TemplateRef`),wg(),lO(544,` para ícones customizados.`),wg(),jc(545,`pre`)(546,`code`),lO(547,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),wg()()()(),jc(548,`tr`,15)(549,`td`,16)(550,`div`,17)(551,`span`,18),lO(552,` label`),nu(553,`br`),wg()()(),jc(554,`td`,19)(555,`code`,27),lO(556,`string`),wg()(),jc(557,`td`,22)(558,`p`),lO(559,`Rótulo da ação.`),wg(),jc(560,`p`),lO(561,`A label também pode representar o agrupador de subitens quando a ação possuir `),jc(562,`code`),lO(563,`subItems`),wg(),lO(564,`.`),wg()()(),jc(565,`tr`,15)(566,`td`,16)(567,`div`,17)(568,`span`,18),lO(569,` selected`),nu(570,`br`),wg()()(),jc(571,`td`,19)(572,`code`,26),lO(573,`boolean`),wg()(),jc(574,`td`,22)(575,`em`)(576,`strong`),lO(577,`(opcional)`),wg()(),jc(578,`p`),lO(579,`Define se a ação está selecionada.`),wg()()(),jc(580,`tr`,15)(581,`td`,16)(582,`div`,17)(583,`span`,18),lO(584,` separator`),nu(585,`br`),wg()()(),jc(586,`td`,19)(587,`code`,26),lO(588,`boolean`),wg()(),jc(589,`td`,22)(590,`em`)(591,`strong`),lO(592,`(opcional)`),wg()(),jc(593,`p`),lO(594,`Atribui uma linha separadora acima do item.`),wg()()(),jc(595,`tr`,15)(596,`td`,16)(597,`div`,17)(598,`span`,18),lO(599,` subItems`),nu(600,`br`),wg()()(),jc(601,`td`,19)(602,`code`,33),lO(603,`Array<PoPopupAction>`),wg()(),jc(604,`td`,22)(605,`em`)(606,`strong`),lO(607,`(opcional)`),wg()(),jc(608,`p`),lO(609,`Define uma lista de subitens para criação de menus aninhados.`),wg(),jc(610,`pre`)(611,`code`),lO(612,`{ label: 'Relat\xF3rios', subItems: [{ label: 'Mensal' }, { label: 'Anual' }] }
`),wg()(),jc(613,`p`),lO(614,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),wg(),jc(615,`blockquote`)(616,`p`),lO(617,`As propriedades `),jc(618,`code`),lO(619,`disabled`),wg(),lO(620,`, `),jc(621,`code`),lO(622,`type`),wg(),lO(623,` e `),jc(624,`code`),lO(625,`visible`),wg(),lO(626,` não são aplicadas visualmente ao item agrupador.`),wg()(),jc(627,`blockquote`)(628,`p`),lO(629,`Quando `),jc(630,`code`),lO(631,`url`),wg(),lO(632,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),wg()(),jc(633,`blockquote`)(634,`p`),lO(635,`Em subníveis aninhados, o `),jc(636,`code`),lO(637,`icon`),wg(),lO(638,` do agrupador é substituído pelo indicador de navegação (seta).`),wg()()()(),jc(639,`tr`,15)(640,`td`,16)(641,`div`,17)(642,`span`,18),lO(643,` subItemsLazy`),nu(644,`br`),wg()()(),jc(645,`td`,19)(646,`code`,34),lO(647,`(item: PoPopupAction) => Observable<Array<PoPopupAction>>`),wg()(),jc(648,`td`,22)(649,`em`)(650,`strong`),lO(651,`(opcional)`),wg()(),jc(652,`p`),lO(653,`Define o carregamento assíncrono (lazy loading) dos subitens de um agrupador.`),wg(),jc(654,`p`),lO(655,`Recebe o item agrupador e retorna um `),jc(656,`code`),lO(657,`Observable<Array<PoPopupAction>>`),wg(),lO(658,`. A requisi\xE7\xE3o \xE9 disparada
`),jc(659,`strong`),lO(660,`apenas`),wg(),lO(661,` no momento da expansão (clique ou atalho de teclado), exibindo placeholders com `),jc(662,`code`),lO(663,`po-skeleton`),wg(),lO(664,`
enquanto os dados s\xE3o carregados:`),wg(),jc(665,`pre`)(666,`code`),lO(667,`{
  label: 'Relat\xF3rios',
  subItemsLazy: (item) => this.reportService.getReports(item)
}
`),wg()(),jc(668,`blockquote`)(669,`p`),lO(670,`O resultado \xE9 armazenado em cache ap\xF3s o primeiro carregamento bem-sucedido.
Em caso de falha, \xE9 exibida uma mensagem com a op\xE7\xE3o de tentar novamente.`),wg()(),jc(671,`p`),lO(672,`Ao definir esta propriedade, o item exibirá um ícone indicador de subnível.`),wg()()(),jc(673,`tr`,15)(674,`td`,16)(675,`div`,17)(676,`span`,18),lO(677,` type`),nu(678,`br`),wg()()(),jc(679,`td`,19)(680,`code`,27),lO(681,`string`),wg()(),jc(682,`td`,22)(683,`em`)(684,`strong`),lO(685,`(opcional)`),wg()(),jc(686,`p`),lO(687,`Define a cor do item.`),wg(),jc(688,`p`),lO(689,`Valores válidos:`),wg(),jc(690,`ul`)(691,`li`)(692,`code`),lO(693,`default`),wg()(),jc(694,`li`)(695,`code`),lO(696,`danger`),wg()()()()(),jc(697,`tr`,15)(698,`td`,16)(699,`div`,17)(700,`span`,18),lO(701,` url`),nu(702,`br`),wg()()(),jc(703,`td`,19)(704,`code`,27),lO(705,`string`),wg()(),jc(706,`td`,22)(707,`em`)(708,`strong`),lO(709,`(opcional)`),wg()(),jc(710,`p`),lO(711,`URL para redirecionamento. Aceita rotas internas e links externos.`),wg(),jc(712,`p`),lO(713,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),jc(714,`code`),lO(715,`url`),wg(),lO(716,` é informada em um agrupador, o clique `),jc(717,`strong`),lO(718,`não abrirá os subitens`),wg(),lO(719,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),wg(),jc(720,`blockquote`)(721,`p`),lO(722,`Quando informada, tem prioridade sobre a propriedade `),jc(723,`code`),lO(724,`action`),wg(),lO(725,`.`),wg()()()(),jc(726,`tr`,15)(727,`td`,16)(728,`div`,17)(729,`span`,18),lO(730,` visible`),nu(731,`br`),wg()()(),jc(732,`td`,19)(733,`code`,26),lO(734,`boolean `),wg(),jc(735,`code`,30),lO(736,` Function`),wg()(),jc(737,`td`,22)(738,`em`)(739,`strong`),lO(740,`(opcional)`),wg()(),jc(741,`p`),lO(742,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function Ye(i,G){if(i&1){let l=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(l);let o=Fx();return __(o.changeTab(`web`))}),nu(1,`sample-po-dropdown-basic-view`)(2,`sample-po-dropdown-labs-view`)(3,`sample-po-dropdown-social-network-view`)(4,`sample-po-dropdown-subitems-view`)(5,`sample-po-dropdown-lazy-subitems-view`),wg()}if(i&2){let l=Fx();UE(`p-active`,l.activeTab===`web`)}}var Qe=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(b(ir),b(Sn))};static ɵcmp=Zn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Dropdown`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,o){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,Ye,6,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return o.changeTab(`doc`)}),nu(4,`sample-po-dropdown-doc`),wg()()()),a&2&&(UE(`p-actions`,o.actions),rg(2),Dx(o.hidePoWebSample?-1:2),rg(),UE(`p-active`,o.activeTab===`doc`))},dependencies:[Vze,lre,ure,Se,Ee,fe,Ce,ve,ye],encapsulation:2,changeDetection:1})}return i})()}];var Pe=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=pe({type:i});static ɵinj=ue({imports:[I1.forChild(Qe),I1]})}return i})();var Ot=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=pe({type:i});static ɵinj=ue({imports:[M,Pe]})}return i})();export{Ot as DocPoDropdownModule};