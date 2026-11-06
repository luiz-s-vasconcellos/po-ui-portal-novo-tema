import{t as r}from"./chunk-zystk1pz.js";import{$n as Ak,Ar as Ig,Cn as oi,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Lf,Hi as ar,Ia as sk,Ja as vt,Li as ZO,Ln as w4,Mr as Jc,Ni as Y0,Pt as a4,Ri as Zg,Rr as Kb,S as GP,T as Gte,Ti as W0,Va as t_,Vi as _u,Xt as ere,Yi as eF,Yr as Nf,Zt as fae,b as Fu,ca as jk,di as RZ,ea as ge$1,er as An,fi as Rb,gi as Tk,hi as TZ,ht as U4,jr as JL,ka as qL,kr as I,mt as Tze,no as yk,nr as BO,or as Bk,qi as de,qr as NZ,rt as Qae,ua as k,va as nk,wa as p,xi as VO,xt as Woe,ya as nm,yi as U_}from"./chunk-BQaN6dko.js";import{n as P,t as M}from"./main-SRPMFWZC.js";var Ae=()=>({label:`How to install PO`,url:`/guides/how-install`});var _e=i=>[i];var be=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-dropdown-basic`]],standalone:!1,decls:1,vars:4,consts:[[`p-label`,`PO Dropdown`,3,`p-actions`]],template:function(a,o){a&1&&_u(0,`po-dropdown`,0),a&2&&Rb(`p-actions`,Bk(2,_e,jk(1,Ae)))},dependencies:[GP],encapsulation:2,changeDetection:1})}return i})();var Te=i=>({"docs-sample-code-tabs":i});var Se=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-dropdown-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Dropdown Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-dropdown-basic/sample-po-dropdown-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-dropdown p-label="PO Dropdown" [p-actions]="[{ label: 'How to install PO', url: '/guides/how-install' }]">
</po-dropdown>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-dropdown-basic/sample-po-dropdown-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dropdown-basic',
  templateUrl: './sample-po-dropdown-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDropdownBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-dropdown-basic`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Te,o.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,be],encapsulation:2,changeDetection:1})}return i})();var ge=(()=>{class i{poNotification=p(Fu);action;actions;parentList;label;properties;size;actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Separator`,value:`separator`},{label:`Selected`,value:`selected`},{label:`Visible`,value:`visible`}];iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`an an-globe`,label:`an an-globe`},{value:`fa fa-podcast`,label:`fa fa-podcast`}];propertiesOptions=[{value:`disabled`,label:`Disabled`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];ngOnInit(){this.restore()}addAction(l){let a=r({},l);if(a.action=a.action?this.showAction.bind(this,a.action):void 0,!l.parent)this.actions=[...this.actions,a];else{let o=this.getActionNode(this.actions,l.parent);o?o.subItems=[...o.subItems||[],a]:this.actions=[...this.actions,a]}this.actions=[].concat(this.actions),this.parentList=this.updateParentList(this.actions),this.restoreActionForm()}getActionNode(l,a){if(!(!l||!Array.isArray(l)||!a))for(let o of l){if(o.label===a||o.value===a)return o;if(o.subItems&&Array.isArray(o.subItems)){let m=this.getActionNode(o.subItems,a);if(m)return m}}}updateParentList(l,a=0,o=[]){return!l||!Array.isArray(l)||l.forEach(m=>{let{label:b}=m;o.push({label:`${`-`.repeat(a)} ${b}`,value:b}),m.subItems&&Array.isArray(m.subItems)&&this.updateParentList(m.subItems,a+1,o)}),o}restore(){this.actions=[],this.parentList=[],this.label=`PO Dropdown`,this.size=`medium`,this.properties=[],this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null,parent:void 0}}showAction(l){this.poNotification.success(`Action clicked: ${l}`)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-dropdown-labs`]],standalone:!1,decls:23,vars:21,consts:[[`formAction`,`ngForm`],[`f`,`ngForm`],[1,`po-row`],[1,`po-offset-xl-5`,`po-offset-lg-5`,3,`p-actions`,`p-disabled`,`p-label`,`p-size`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`actionURL`,`p-label`,`URL`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`parent`,`p-label`,`Subitems`,`p-placeholder`,`Add subitems`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`action`,`p-columns`,`4`,`p-indeterminate`,``,`p-label`,`Action properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add Action`,1,`po-md-4`,`po-lg-2`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,o){if(a&1){let m=ZO();Jc(0,`div`,2),_u(1,`po-dropdown`,3),Zg(),_u(2,`po-divider`),Jc(3,`form`,null,0)(5,`po-input`,4),W0(),Kb(`ngModelChange`,function(d){return U_(m),Ak(o.action.label,d)||(o.action.label=d),H_(d)}),Zg(),Jc(6,`po-input`,5),W0(),Kb(`ngModelChange`,function(d){return U_(m),Ak(o.action.action,d)||(o.action.action=d),H_(d)}),Zg(),Jc(7,`po-input`,6),W0(),Kb(`ngModelChange`,function(d){return U_(m),Ak(o.action.url,d)||(o.action.url=d),H_(d)}),Zg(),Jc(8,`po-select`,7),W0(),Kb(`ngModelChange`,function(d){return U_(m),Ak(o.action.type,d)||(o.action.type=d),H_(d)}),Zg(),Jc(9,`po-select`,8),W0(),Kb(`ngModelChange`,function(d){return U_(m),Ak(o.action.icon,d)||(o.action.icon=d),H_(d)}),Zg(),Jc(10,`po-select`,9),W0(),Kb(`ngModelChange`,function(d){return U_(m),Ak(o.action.parent,d)||(o.action.parent=d),H_(d)}),Zg(),Jc(11,`po-checkbox-group`,10),W0(),Kb(`ngModelChange`,function(d){return U_(m),Ak(o.action,d)||(o.action=d),H_(d)}),Zg(),Jc(12,`div`,2)(13,`po-button`,11),vt(`p-click`,function(){return o.addAction(o.action)}),Zg()()(),_u(14,`po-divider`),Jc(15,`form`,null,1)(17,`div`,2)(18,`po-input`,12),W0(),Kb(`ngModelChange`,function(d){return U_(m),Ak(o.label,d)||(o.label=d),H_(d)}),Zg()(),Jc(19,`po-checkbox-group`,13),W0(),Kb(`ngModelChange`,function(d){return U_(m),Ak(o.properties,d)||(o.properties=d),H_(d)}),Zg(),Jc(20,`po-radio-group`,14),W0(),Kb(`ngModelChange`,function(d){return U_(m),Ak(o.size,d)||(o.size=d),H_(d)}),Zg(),Jc(21,`div`,2)(22,`po-button`,15),vt(`p-click`,function(){return o.restore()}),Zg()()()}if(a&2){let m=sk(4);Ig(),Rb(`p-actions`,o.actions)(`p-disabled`,o.properties.includes(`disabled`))(`p-label`,o.label)(`p-size`,o.size),Ig(4),Yb(`ngModel`,o.action.label),Y0(),Ig(),Yb(`ngModel`,o.action.action),Y0(),Ig(),Yb(`ngModel`,o.action.url),Y0(),Ig(),Yb(`ngModel`,o.action.type),Rb(`p-options`,o.typeOptions),Y0(),Ig(),Yb(`ngModel`,o.action.icon),Rb(`p-options`,o.iconOptions),Y0(),Ig(),Yb(`ngModel`,o.action.parent),Rb(`p-options`,o.parentList),Y0(),Ig(),Yb(`ngModel`,o.action),Rb(`p-options`,o.actionOptions),Y0(),Ig(2),Rb(`p-disabled`,m.form.invalid),Ig(5),Yb(`ngModel`,o.label),Y0(),Ig(),Yb(`ngModel`,o.properties),Rb(`p-options`,o.propertiesOptions),Y0(),Ig(),Yb(`ngModel`,o.size),Rb(`p-options`,o.sizeOptions),Y0()}},dependencies:[NZ,TZ,RZ,JL,qL,oi,Lf,GP,w4,U4,Gte,Woe],encapsulation:2,changeDetection:1})}return i})();var Fe=i=>({"docs-sample-code-tabs":i});var Ee=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-dropdown-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Dropdown Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-dropdown-labs/sample-po-dropdown-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-dropdown-labs/sample-po-dropdown-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-dropdown-labs`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Fe,o.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,ge],encapsulation:2,changeDetection:1})}return i})();function ze(i,G){if(i&1&&(Jc(0,`div`,0),_u(1,`po-avatar`,2),Jc(2,`div`,3)(3,`span`,4),Tk(4),Zg(),Jc(5,`span`,5),Tk(6),Zg(),Jc(7,`span`,5),Tk(8),Zg()()(),Jc(9,`div`,0),_u(10,`po-dropdown`,6),Zg()),i&2){let l=nk();Ig(),Rb(`p-src`,l.userAvatar),Ig(3),nm(` `,l.currentFriend.name,` `),Ig(2),nm(` `,l.currentFriend.mutualFriends,` mutual friends `),Ig(2),nm(` Resides in `,l.currentFriend.reside,` `),Ig(2),Rb(`p-actions`,l.answers)}}function Ne(i,G){i&1&&(Jc(0,`div`,0)(1,`span`,7),Tk(2,`Congratulations TOTVS, no more requests!`),Zg()())}var he=(()=>{class i{poNotification=p(Fu);currentFriend;userAvatar=`https://lorempixel.com/144/144/`;answers=[{label:`Confirm`,action:this.notification.bind(this,`added`,`success`)},{label:`Ignore`,action:this.notification.bind(this,`ignored`,`warning`)},{label:`Block`,action:this.notification.bind(this,`blocked`,`information`)}];newFriends=[{name:`Mr. Dev PO`,mutualFriends:`7`,reside:`Mountain View, CA`},{name:`Mr. AI PO`,mutualFriends:`99+`,reside:`New York City, NY`},{name:`Mr. UX PO`,mutualFriends:`14`,reside:`Los Angeles, CA`}];indexFriend=0;ngOnInit(){this.setCurrentFriend(0)}notification(l,a){this.poNotification[a](`User ${l} successfully!`),this.indexFriend++,this.setCurrentFriend(this.indexFriend)}setCurrentFriend(l){this.currentFriend=this.newFriends[l]}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-dropdown-social-network`]],standalone:!1,decls:4,vars:1,consts:[[1,`po-row`],[`p-title`,`Friend Request`,1,`po-lg-6`],[`p-size`,`lg`,1,`po-md-4`,3,`p-src`],[1,`po-md-8`],[1,`po-sm-12`,`po-font-subtitle`],[1,`po-sm-12`,`po-font-text`],[`p-label`,`Add as friend?`,1,`po-lg-8`,`po-offset-md-4`,`po-offset-lg-4`,`po-offset-xl-4`,3,`p-actions`],[1,`po-lg-8`,`po-font-subtitle`]],template:function(a,o){a&1&&(Jc(0,`div`,0)(1,`po-widget`,1),VO(2,ze,11,5)(3,Ne,3,0,`div`,0),Zg()()),a&2&&(Ig(2),BO(o.currentFriend?2:3))},dependencies:[a4,GP,fae],encapsulation:2,changeDetection:1})}return i})();var Be=i=>({"docs-sample-code-tabs":i});var fe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-dropdown-social-network-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Dropdown - Social Network`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-dropdown-social-network/sample-po-dropdown-social-network.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-dropdown-social-network/sample-po-dropdown-social-network.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-dropdown-social-network`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Be,o.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,he],encapsulation:2,changeDetection:1})}return i})();var we=(()=>{class i{actions=[{label:`New Sale`,action:()=>console.log(`New Sale`)},{label:`New Cancellation`,action:()=>console.log(`New Cancellation`),type:`danger`},{label:`Reports`,subItems:[{label:`Monthly Sales`,action:()=>console.log(`Monthly Sales`),icon:`an an-chart-line-up`},{label:`Annual Sales`,action:()=>console.log(`Annual Sales`),icon:`an an-chart-line-up`}]},{label:`Settings`,subItems:[{label:`Users`,action:()=>console.log(`Users`)},{label:`System`,subItems:[{label:`Backup`,action:()=>console.log(`Backup`)},{label:`Logs`,action:()=>console.log(`Logs`)}]}]}];static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-dropdown-subitems`]],standalone:!1,decls:1,vars:1,consts:[[`p-label`,`PO Dropdown`,3,`p-actions`]],template:function(a,o){a&1&&_u(0,`po-dropdown`,0),a&2&&Rb(`p-actions`,o.actions)},dependencies:[GP],encapsulation:2,changeDetection:1})}return i})();var Re=i=>({"docs-sample-code-tabs":i});var Ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-dropdown-subitems-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Dropdown Subitems`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-dropdown-subitems/sample-po-dropdown-subitems.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-dropdown p-label="PO Dropdown" [p-actions]="actions"> </po-dropdown>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-dropdown-subitems/sample-po-dropdown-subitems.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-dropdown-subitems`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Re,o.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,we],encapsulation:2,changeDetection:1})}return i})();var xe=(()=>{class i{shouldFailReports=!0;actions=[{label:`New Sale`,action:()=>console.log(`New Sale`)},{label:`Reports (lazy)`,subItemsLazy:l=>this.loadReports(l)},{label:`Settings (lazy)`,subItemsLazy:()=>this.loadSettings()}];onSubItemsLoad(l){console.log(`Loading sub items for:`,l.label)}loadReports(l){return this.shouldFailReports?(this.shouldFailReports=!1,Nf(()=>/* @__PURE__ */ new Error(`Falha ao carregar relatórios`)).pipe(t_(1e3))):k([{label:`Monthly Sales`,action:()=>console.log(`Monthly Sales`)},{label:`Annual Sales`,action:()=>console.log(`Annual Sales`)}]).pipe(t_(1e3))}loadSettings(){return k([{label:`Users`,action:()=>console.log(`Users`)},{label:`System`,action:()=>console.log(`System`)}]).pipe(t_(1500))}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-dropdown-lazy-subitems`]],standalone:!1,decls:1,vars:1,consts:[[`p-label`,`PO Dropdown Lazy`,3,`p-sub-items-load`,`p-actions`]],template:function(a,o){a&1&&(Jc(0,`po-dropdown`,0),vt(`p-sub-items-load`,function(b){return o.onSubItemsLoad(b)}),Zg()),a&2&&Rb(`p-actions`,o.actions)},dependencies:[GP],encapsulation:2})}return i})();var Ue=i=>({"docs-sample-code-tabs":i});var ve=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-dropdown-lazy-subitems-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Dropdown Lazy Subitems`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-dropdown-lazy-subitems/sample-po-dropdown-lazy-subitems.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-dropdown p-label="PO Dropdown Lazy" [p-actions]="actions" (p-sub-items-load)="onSubItemsLoad($event)">
</po-dropdown>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-dropdown-lazy-subitems/sample-po-dropdown-lazy-subitems.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component } from '@angular/core';
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-dropdown-lazy-subitems`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ue,o.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,xe],encapsulation:2,changeDetection:1})}return i})();var ye=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-dropdown-doc`]],standalone:!1,decls:743,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/guides/getting-started`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDropdownAction>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`pan`,``,1,`docs-api-property-type`,`(item:`,`PoPopupAction)`,`=>`,`Observable<Array<PoPopupAction>>`]],template:function(a,o){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoDropdownModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente po-dropdown.`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoDropdownComponent`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`O componente `),Jc(15,`code`),Tk(16,`po-dropdown`),Zg(),Tk(17,` pode ser utilizado como um agrupador de ações e / ou opções.`),Zg(),Jc(18,`blockquote`)(19,`p`),Tk(20,`Caso não haja configuração de rotas em sua aplicação, se faz necessário importar o `),Jc(21,`code`),Tk(22,`RouterModule`),Zg(),Tk(23,`
no m\xF3dulo principal para o correto funcionamento deste componente:`),Zg()(),Jc(24,`pre`)(25,`code`),Tk(26,`import { RouterModule } from '@angular/router';

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
`),Zg()(),Jc(27,`blockquote`)(28,`p`),Tk(29,`Para maiores d\xFAvidas referente \xE0 configura\xE7\xE3o de rotas, acesse em nosso portal /Guias /Come\xE7ando
`),Jc(30,`a`,6),Tk(31,`/Configurando as rotas do po-menu`),Zg(),Tk(32,`.`),Zg()(),Jc(33,`h4`),Tk(34,`Tokens customizáveis`),Zg(),Jc(35,`p`),Tk(36,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(37,`blockquote`)(38,`p`),Tk(39,`Para maiores informações, acesse o guia `),Jc(40,`a`,7),Tk(41,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(42,`.`),Zg()(),Jc(43,`table`)(44,`thead`)(45,`tr`)(46,`th`),Tk(47,`Propriedade`),Zg(),Jc(48,`th`),Tk(49,`Descrição`),Zg(),Jc(50,`th`),Tk(51,`Valor Padrão`),Zg()()(),Jc(52,`tbody`)(53,`tr`)(54,`td`)(55,`strong`),Tk(56,`Default Values`),Zg()(),_u(57,`td`)(58,`td`),Zg(),Jc(59,`tr`)(60,`td`)(61,`code`),Tk(62,`--font-family`),Zg()(),Jc(63,`td`),Tk(64,`Família tipográfica usada`),Zg(),Jc(65,`td`)(66,`code`),Tk(67,`var(--font-family-theme)`),Zg()()(),Jc(68,`tr`)(69,`td`)(70,`code`),Tk(71,`--font-size`),Zg()(),Jc(72,`td`),Tk(73,`Tamanho da fonte`),Zg(),Jc(74,`td`)(75,`code`),Tk(76,`var(--font-size-default)`),Zg()()(),Jc(77,`tr`)(78,`td`)(79,`code`),Tk(80,`--font-weight`),Zg()(),Jc(81,`td`),Tk(82,`Peso da fonte`),Zg(),Jc(83,`td`)(84,`code`),Tk(85,`var(--font-weight-bold)`),Zg()()(),Jc(86,`tr`)(87,`td`)(88,`code`),Tk(89,`--line-height`),Zg()(),Jc(90,`td`),Tk(91,`Tamanho da label`),Zg(),Jc(92,`td`)(93,`code`),Tk(94,`var(--line-height-none)`),Zg()()(),Jc(95,`tr`)(96,`td`)(97,`code`),Tk(98,`--color`),Zg()(),Jc(99,`td`),Tk(100,`Cor principal do dropdown`),Zg(),Jc(101,`td`)(102,`code`),Tk(103,`var(--color-action-default)`),Zg()()(),Jc(104,`tr`)(105,`td`)(106,`code`),Tk(107,`--border-radius`),Zg()(),Jc(108,`td`),Tk(109,`Contém o valor do raio dos cantos do elemento\xA0`),Zg(),Jc(110,`td`)(111,`code`),Tk(112,`var(--border-radius-md)`),Zg()()(),Jc(113,`tr`)(114,`td`)(115,`code`),Tk(116,`--border-width`),Zg()(),Jc(117,`td`),Tk(118,`Contém o valor da largura dos cantos do elemento\xA0`),Zg(),Jc(119,`td`)(120,`code`),Tk(121,`var(--border-width-md)`),Zg()()(),Jc(122,`tr`)(123,`td`)(124,`code`),Tk(125,`--padding`),Zg()(),Jc(126,`td`),Tk(127,`Preenchimento`),Zg(),Jc(128,`td`)(129,`code`),Tk(130,`0 1em`),Zg()()(),Jc(131,`tr`)(132,`td`)(133,`strong`),Tk(134,`Hover`),Zg()(),_u(135,`td`)(136,`td`),Zg(),Jc(137,`tr`)(138,`td`)(139,`code`),Tk(140,`--color-hover`),Zg()(),Jc(141,`td`),Tk(142,`Cor principal no estado hover`),Zg(),Jc(143,`td`)(144,`code`),Tk(145,`var(--color-brand-01-darkest)`),Zg()()(),Jc(146,`tr`)(147,`td`)(148,`code`),Tk(149,`--background-hover`),Zg()(),Jc(150,`td`),Tk(151,`Cor de background no estado hover`),Zg(),Jc(152,`td`)(153,`code`),Tk(154,`var(--color-brand-01-lighter)`),Zg()()(),Jc(155,`tr`)(156,`td`)(157,`strong`),Tk(158,`Focused`),Zg()(),_u(159,`td`)(160,`td`),Zg(),Jc(161,`tr`)(162,`td`)(163,`code`),Tk(164,`--outline-color-focused`),Zg(),Tk(165,` \xA0`),Zg(),Jc(166,`td`),Tk(167,`Cor do outline do estado de focus`),Zg(),Jc(168,`td`)(169,`code`),Tk(170,`var(--color-action-focus)`),Zg()()(),Jc(171,`tr`)(172,`td`)(173,`strong`),Tk(174,`Pressed`),Zg()(),_u(175,`td`)(176,`td`),Zg(),Jc(177,`tr`)(178,`td`)(179,`code`),Tk(180,`--background-pressed`),Zg(),Tk(181,` \xA0`),Zg(),Jc(182,`td`),Tk(183,`Cor de background no estado de pressionado\xA0`),Zg(),Jc(184,`td`)(185,`code`),Tk(186,`var(--color-brand-01-light)`),Zg()()(),Jc(187,`tr`)(188,`td`)(189,`strong`),Tk(190,`Disabled`),Zg()(),_u(191,`td`)(192,`td`),Zg(),Jc(193,`tr`)(194,`td`)(195,`code`),Tk(196,`--color-disabled`),Zg()(),Jc(197,`td`),Tk(198,`Cor principal no estado disabled`),Zg(),Jc(199,`td`)(200,`code`),Tk(201,`var(--color-action-disabled)`),Zg()()()()()(),Jc(202,`div`,8)(203,`h4`,9),Tk(204,`Seletor`),Zg(),Jc(205,`pre`,10),Tk(206,`<po-dropdown
    p-actions="Array<PoDropdownAction>"
    (p-click-item)="EventEmitter"
    p-disabled="boolean"
    p-label="string"
    p-position="string"
    (p-root-items-load)="EventEmitter"
    p-size="string"
    (p-sub-items-load)="EventEmitter" >
</po-dropdown>
`),Zg()(),Jc(207,`h4`,11),Tk(208,`Propriedades`),Zg(),Jc(209,`table`,12)(210,`tr`,13)(211,`th`,14),Tk(212,`Nome`),Zg(),Jc(213,`th`,14),Tk(214,`Tipo`),Zg(),Jc(215,`th`,14),Tk(216,`Padrão`),Zg(),Jc(217,`th`,14),Tk(218,`Descrição`),Zg()(),Jc(219,`tr`,15)(220,`td`,16)(221,`div`,17)(222,`span`,18),Tk(223,` p-actions`),_u(224,`br`),Zg()()(),Jc(225,`td`,19)(226,`code`,20),Tk(227,`Array<PoDropdownAction>`),Zg()(),Jc(228,`td`,21),Tk(229,`-`),Zg(),Jc(230,`td`,22)(231,`p`),Tk(232,`Lista de a\xE7\xF5es que ser\xE3o exibidas no componente.
Aceita um `),Jc(233,`em`),Tk(234,`array`),Zg(),Tk(235,` de `),Jc(236,`code`),Tk(237,`PoDropdownAction`),Zg(),Tk(238,`.`),Zg()()(),Jc(239,`tr`,15)(240,`td`,16)(241,`div`,23)(242,`span`,24),Tk(243,` (p-click-item)`),_u(244,`br`),Zg()()(),Jc(245,`td`,19)(246,`code`,25),Tk(247,`EventEmitter`),Zg()(),Jc(248,`td`,21),Tk(249,`-`),Zg(),Jc(250,`td`,22)(251,`em`)(252,`strong`),Tk(253,`(opcional)`),Zg()(),Jc(254,`p`),Tk(255,`Evento disparado a cada clique em um item do menu.
Retorna o item clicado (`),Jc(256,`code`),Tk(257,`PoDropdownAction`),Zg(),Tk(258,`).`),Zg(),Jc(259,`blockquote`)(260,`p`),Tk(261,`Não é disparado para a ação interna de voltar (`),Jc(262,`code`),Tk(263,`goBack`),Zg(),Tk(264,`).`),Zg()()()(),Jc(265,`tr`,15)(266,`td`,16)(267,`div`,17)(268,`span`,18),Tk(269,` p-disabled`),_u(270,`br`),Zg()()(),Jc(271,`td`,19)(272,`code`,26),Tk(273,`boolean`),Zg()(),Jc(274,`td`,21)(275,`p`)(276,`code`),Tk(277,`false`),Zg()()(),Jc(278,`td`,22)(279,`em`)(280,`strong`),Tk(281,`(opcional)`),Zg()(),Jc(282,`p`),Tk(283,`Desabilita o campo.`),Zg()()(),Jc(284,`tr`,15)(285,`td`,16)(286,`div`,17)(287,`span`,18),Tk(288,` p-label`),_u(289,`br`),Zg()()(),Jc(290,`td`,19)(291,`code`,27),Tk(292,`string`),Zg()(),Jc(293,`td`,21),Tk(294,`-`),Zg(),Jc(295,`td`,22)(296,`p`),Tk(297,`Adiciona um rótulo ao `),Jc(298,`code`),Tk(299,`dropdown`),Zg(),Tk(300,`.`),Zg()()(),Jc(301,`tr`,15)(302,`td`,16)(303,`div`,17)(304,`span`,18),Tk(305,` p-position`),_u(306,`br`),Zg()()(),Jc(307,`td`,19)(308,`code`,27),Tk(309,`string`),Zg()(),Jc(310,`td`,21)(311,`p`)(312,`code`),Tk(313,`bottom-left`),Zg()()(),Jc(314,`td`,22)(315,`em`)(316,`strong`),Tk(317,`(opcional)`),Zg()(),Jc(318,`p`),Tk(319,`Define a posição preferencial de abertura do popup do dropdown em relação ao botão.`),Zg(),Jc(320,`p`),Tk(321,`Posições válidas:`),Zg(),Jc(322,`ul`)(323,`li`)(324,`code`),Tk(325,`right`),Zg(),Tk(326,`: No lado direito.`),Zg(),Jc(327,`li`)(328,`code`),Tk(329,`right-bottom`),Zg(),Tk(330,`: No lado direito inferior.`),Zg(),Jc(331,`li`)(332,`code`),Tk(333,`right-top`),Zg(),Tk(334,`: No lado direito superior.`),Zg(),Jc(335,`li`)(336,`code`),Tk(337,`bottom`),Zg(),Tk(338,`: Abaixo.`),Zg(),Jc(339,`li`)(340,`code`),Tk(341,`bottom-left`),Zg(),Tk(342,`: Abaixo e à esquerda (padrão).`),Zg(),Jc(343,`li`)(344,`code`),Tk(345,`bottom-right`),Zg(),Tk(346,`: Abaixo e à direita.`),Zg(),Jc(347,`li`)(348,`code`),Tk(349,`left`),Zg(),Tk(350,`: No lado esquerdo.`),Zg(),Jc(351,`li`)(352,`code`),Tk(353,`left-top`),Zg(),Tk(354,`: No lado esquerdo superior.`),Zg(),Jc(355,`li`)(356,`code`),Tk(357,`left-bottom`),Zg(),Tk(358,`: No lado esquerdo inferior.`),Zg(),Jc(359,`li`)(360,`code`),Tk(361,`top`),Zg(),Tk(362,`: Acima.`),Zg(),Jc(363,`li`)(364,`code`),Tk(365,`top-right`),Zg(),Tk(366,`: Acima e à direita.`),Zg(),Jc(367,`li`)(368,`code`),Tk(369,`top-left`),Zg(),Tk(370,`: Acima e à esquerda.`),Zg()(),Jc(371,`blockquote`)(372,`p`),Tk(373,`O popup será rotacionado automaticamente caso não caiba na posição definida.`),Zg()()()(),Jc(374,`tr`,15)(375,`td`,16)(376,`div`,23)(377,`span`,24),Tk(378,` (p-root-items-load)`),_u(379,`br`),Zg()()(),Jc(380,`td`,19)(381,`code`,25),Tk(382,`EventEmitter`),Zg()(),Jc(383,`td`,21),Tk(384,`-`),Zg(),Jc(385,`td`,22)(386,`em`)(387,`strong`),Tk(388,`(opcional)`),Zg()(),Jc(389,`p`),Tk(390,`Evento disparado no momento em que a requisição assíncrona do nível raiz é iniciada`),Zg(),Jc(391,`blockquote`)(392,`p`),Tk(393,`Compatível com a propriedade PoPopupAction.subItemsLazy`),Zg()()()(),Jc(394,`tr`,15)(395,`td`,16)(396,`div`,17)(397,`span`,18),Tk(398,` p-size`),_u(399,`br`),Zg()()(),Jc(400,`td`,19)(401,`code`,27),Tk(402,`string`),Zg()(),Jc(403,`td`,21)(404,`p`)(405,`code`),Tk(406,`medium`),Zg()()(),Jc(407,`td`,22)(408,`em`)(409,`strong`),Tk(410,`(opcional)`),Zg()(),Jc(411,`p`),Tk(412,`Define o tamanho do componente:`),Zg(),Jc(413,`ul`)(414,`li`)(415,`code`),Tk(416,`small`),Zg(),Tk(417,`: altura do button como 32px (disponível apenas para acessibilidade AA).`),Zg(),Jc(418,`li`)(419,`code`),Tk(420,`medium`),Zg(),Tk(421,`: altura do button como 44px.`),Zg()(),Jc(422,`blockquote`)(423,`p`),Tk(424,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(425,`code`),Tk(426,`medium`),Zg(),Tk(427,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(428,`a`,28),Tk(429,`po-theme`),Zg(),Tk(430,`.`),Zg()()()(),Jc(431,`tr`,15)(432,`td`,16)(433,`div`,23)(434,`span`,24),Tk(435,` (p-sub-items-load)`),_u(436,`br`),Zg()()(),Jc(437,`td`,19)(438,`code`,25),Tk(439,`EventEmitter`),Zg()(),Jc(440,`td`,21),Tk(441,`-`),Zg(),Jc(442,`td`,22)(443,`em`)(444,`strong`),Tk(445,`(opcional)`),Zg()(),Jc(446,`p`),Tk(447,`Evento disparado no momento em que a requisi\xE7\xE3o ass\xEDncrona de um subn\xEDvel \xE9 iniciada.
Retorna o item agrupador (`),Jc(448,`code`),Tk(449,`PoDropdownAction`),Zg(),Tk(450,`) que originou o carregamento.`),Zg(),Jc(451,`blockquote`)(452,`p`),Tk(453,`Compatível com a propriedade PoPopupAction.subItemsLazy`),Zg()()()()(),Jc(454,`h3`),Tk(455,`Interfaces`),Zg(),Jc(456,`h4`,29)(457,`code`,5),Tk(458,`PoDropdownAction`),Zg()(),Jc(459,`div`,2)(460,`p`),Tk(461,`Interface para as ações do componente `),Jc(462,`code`),Tk(463,`po-dropdown`),Zg(),Tk(464,`.`),Zg()(),Jc(465,`h4`,11),Tk(466,`Propriedades`),Zg(),Jc(467,`table`,12)(468,`tr`,13)(469,`th`,14),Tk(470,`Nome`),Zg(),Jc(471,`th`,14),Tk(472,`Tipo`),Zg(),Jc(473,`th`,14),Tk(474,`Descrição`),Zg()(),Jc(475,`tr`,15)(476,`td`,16)(477,`div`,17)(478,`span`,18),Tk(479,` action`),_u(480,`br`),Zg()()(),Jc(481,`td`,19)(482,`code`,30),Tk(483,`Function`),Zg()(),Jc(484,`td`,22)(485,`em`)(486,`strong`),Tk(487,`(opcional)`),Zg()(),Jc(488,`p`),Tk(489,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),Zg(),Jc(490,`p`),Tk(491,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Jc(492,`code`),Tk(493,`subItems`),Zg(),Tk(494,`.`),Zg(),Jc(495,`blockquote`)(496,`p`),Tk(497,`Para que a função seja executada no contexto do componente, utilize `),Jc(498,`em`),Tk(499,`bind`),Zg(),Tk(500,`:
`),Jc(501,`code`),Tk(502,`action: this.myFunction.bind(this)`),Zg()()()()(),Jc(503,`tr`,15)(504,`td`,16)(505,`div`,17)(506,`span`,18),Tk(507,` disabled`),_u(508,`br`),Zg()()(),Jc(509,`td`,19)(510,`code`,26),Tk(511,`boolean `),Zg(),Jc(512,`code`,30),Tk(513,` Function`),Zg()(),Jc(514,`td`,22)(515,`em`)(516,`strong`),Tk(517,`(opcional)`),Zg()(),Jc(518,`p`),Tk(519,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),Zg()()(),Jc(520,`tr`,15)(521,`td`,16)(522,`div`,17)(523,`span`,18),Tk(524,` icon`),_u(525,`br`),Zg()()(),Jc(526,`td`,19)(527,`code`,27),Tk(528,`string `),Zg(),Jc(529,`code`,31),Tk(530,` TemplateRef<void>`),Zg()(),Jc(531,`td`,22)(532,`em`)(533,`strong`),Tk(534,`(opcional)`),Zg()(),Jc(535,`p`),Tk(536,`Ícone exibido ao lado esquerdo do rótulo.`),Zg(),Jc(537,`p`),Tk(538,`Aceita ícones da `),Jc(539,`a`,32),Tk(540,`Biblioteca de ícones`),Zg(),Tk(541,`, fontes externas (ex: Font Awesome)
ou um `),Jc(542,`code`),Tk(543,`TemplateRef`),Zg(),Tk(544,` para ícones customizados.`),Zg(),Jc(545,`pre`)(546,`code`),Tk(547,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),Zg()()()(),Jc(548,`tr`,15)(549,`td`,16)(550,`div`,17)(551,`span`,18),Tk(552,` label`),_u(553,`br`),Zg()()(),Jc(554,`td`,19)(555,`code`,27),Tk(556,`string`),Zg()(),Jc(557,`td`,22)(558,`p`),Tk(559,`Rótulo da ação.`),Zg(),Jc(560,`p`),Tk(561,`A label também pode representar o agrupador de subitens quando a ação possuir `),Jc(562,`code`),Tk(563,`subItems`),Zg(),Tk(564,`.`),Zg()()(),Jc(565,`tr`,15)(566,`td`,16)(567,`div`,17)(568,`span`,18),Tk(569,` selected`),_u(570,`br`),Zg()()(),Jc(571,`td`,19)(572,`code`,26),Tk(573,`boolean`),Zg()(),Jc(574,`td`,22)(575,`em`)(576,`strong`),Tk(577,`(opcional)`),Zg()(),Jc(578,`p`),Tk(579,`Define se a ação está selecionada.`),Zg()()(),Jc(580,`tr`,15)(581,`td`,16)(582,`div`,17)(583,`span`,18),Tk(584,` separator`),_u(585,`br`),Zg()()(),Jc(586,`td`,19)(587,`code`,26),Tk(588,`boolean`),Zg()(),Jc(589,`td`,22)(590,`em`)(591,`strong`),Tk(592,`(opcional)`),Zg()(),Jc(593,`p`),Tk(594,`Atribui uma linha separadora acima do item.`),Zg()()(),Jc(595,`tr`,15)(596,`td`,16)(597,`div`,17)(598,`span`,18),Tk(599,` subItems`),_u(600,`br`),Zg()()(),Jc(601,`td`,19)(602,`code`,33),Tk(603,`Array<PoPopupAction>`),Zg()(),Jc(604,`td`,22)(605,`em`)(606,`strong`),Tk(607,`(opcional)`),Zg()(),Jc(608,`p`),Tk(609,`Define uma lista de subitens para criação de menus aninhados.`),Zg(),Jc(610,`pre`)(611,`code`),Tk(612,`{ label: 'Relat\xF3rios', subItems: [{ label: 'Mensal' }, { label: 'Anual' }] }
`),Zg()(),Jc(613,`p`),Tk(614,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),Zg(),Jc(615,`blockquote`)(616,`p`),Tk(617,`As propriedades `),Jc(618,`code`),Tk(619,`disabled`),Zg(),Tk(620,`, `),Jc(621,`code`),Tk(622,`type`),Zg(),Tk(623,` e `),Jc(624,`code`),Tk(625,`visible`),Zg(),Tk(626,` não são aplicadas visualmente ao item agrupador.`),Zg()(),Jc(627,`blockquote`)(628,`p`),Tk(629,`Quando `),Jc(630,`code`),Tk(631,`url`),Zg(),Tk(632,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),Zg()(),Jc(633,`blockquote`)(634,`p`),Tk(635,`Em subníveis aninhados, o `),Jc(636,`code`),Tk(637,`icon`),Zg(),Tk(638,` do agrupador é substituído pelo indicador de navegação (seta).`),Zg()()()(),Jc(639,`tr`,15)(640,`td`,16)(641,`div`,17)(642,`span`,18),Tk(643,` subItemsLazy`),_u(644,`br`),Zg()()(),Jc(645,`td`,19)(646,`code`,34),Tk(647,`(item: PoPopupAction) => Observable<Array<PoPopupAction>>`),Zg()(),Jc(648,`td`,22)(649,`em`)(650,`strong`),Tk(651,`(opcional)`),Zg()(),Jc(652,`p`),Tk(653,`Define o carregamento assíncrono (lazy loading) dos subitens de um agrupador.`),Zg(),Jc(654,`p`),Tk(655,`Recebe o item agrupador e retorna um `),Jc(656,`code`),Tk(657,`Observable<Array<PoPopupAction>>`),Zg(),Tk(658,`. A requisi\xE7\xE3o \xE9 disparada
`),Jc(659,`strong`),Tk(660,`apenas`),Zg(),Tk(661,` no momento da expansão (clique ou atalho de teclado), exibindo placeholders com `),Jc(662,`code`),Tk(663,`po-skeleton`),Zg(),Tk(664,`
enquanto os dados s\xE3o carregados:`),Zg(),Jc(665,`pre`)(666,`code`),Tk(667,`{
  label: 'Relat\xF3rios',
  subItemsLazy: (item) => this.reportService.getReports(item)
}
`),Zg()(),Jc(668,`blockquote`)(669,`p`),Tk(670,`O resultado \xE9 armazenado em cache ap\xF3s o primeiro carregamento bem-sucedido.
Em caso de falha, \xE9 exibida uma mensagem com a op\xE7\xE3o de tentar novamente.`),Zg()(),Jc(671,`p`),Tk(672,`Ao definir esta propriedade, o item exibirá um ícone indicador de subnível.`),Zg()()(),Jc(673,`tr`,15)(674,`td`,16)(675,`div`,17)(676,`span`,18),Tk(677,` type`),_u(678,`br`),Zg()()(),Jc(679,`td`,19)(680,`code`,27),Tk(681,`string`),Zg()(),Jc(682,`td`,22)(683,`em`)(684,`strong`),Tk(685,`(opcional)`),Zg()(),Jc(686,`p`),Tk(687,`Define a cor do item.`),Zg(),Jc(688,`p`),Tk(689,`Valores válidos:`),Zg(),Jc(690,`ul`)(691,`li`)(692,`code`),Tk(693,`default`),Zg()(),Jc(694,`li`)(695,`code`),Tk(696,`danger`),Zg()()()()(),Jc(697,`tr`,15)(698,`td`,16)(699,`div`,17)(700,`span`,18),Tk(701,` url`),_u(702,`br`),Zg()()(),Jc(703,`td`,19)(704,`code`,27),Tk(705,`string`),Zg()(),Jc(706,`td`,22)(707,`em`)(708,`strong`),Tk(709,`(opcional)`),Zg()(),Jc(710,`p`),Tk(711,`URL para redirecionamento. Aceita rotas internas e links externos.`),Zg(),Jc(712,`p`),Tk(713,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Jc(714,`code`),Tk(715,`url`),Zg(),Tk(716,` é informada em um agrupador, o clique `),Jc(717,`strong`),Tk(718,`não abrirá os subitens`),Zg(),Tk(719,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),Zg(),Jc(720,`blockquote`)(721,`p`),Tk(722,`Quando informada, tem prioridade sobre a propriedade `),Jc(723,`code`),Tk(724,`action`),Zg(),Tk(725,`.`),Zg()()()(),Jc(726,`tr`,15)(727,`td`,16)(728,`div`,17)(729,`span`,18),Tk(730,` visible`),_u(731,`br`),Zg()()(),Jc(732,`td`,19)(733,`code`,26),Tk(734,`boolean `),Zg(),Jc(735,`code`,30),Tk(736,` Function`),Zg()(),Jc(737,`td`,22)(738,`em`)(739,`strong`),Tk(740,`(opcional)`),Zg()(),Jc(741,`p`),Tk(742,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function Ye(i,G){if(i&1){let l=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(l);let o=nk();return H_(o.changeTab(`web`))}),_u(1,`sample-po-dropdown-basic-view`)(2,`sample-po-dropdown-labs-view`)(3,`sample-po-dropdown-social-network-view`)(4,`sample-po-dropdown-subitems-view`)(5,`sample-po-dropdown-lazy-subitems-view`),Zg()}if(i&2){let l=nk();Rb(`p-active`,l.activeTab===`web`)}}var Qe=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(I(ar),I(An))};static ɵcmp=Jn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Dropdown`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,o){a&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Ye,6,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return o.changeTab(`doc`)}),_u(4,`sample-po-dropdown-doc`),Zg()()()),a&2&&(Rb(`p-actions`,o.actions),Ig(2),BO(o.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,o.activeTab===`doc`))},dependencies:[Tze,Qae,ere,Se,Ee,fe,Ce,ve,ye],encapsulation:2,changeDetection:1})}return i})()}];var Pe=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=ge$1({type:i});static ɵinj=de({imports:[WV.forChild(Qe),WV]})}return i})();var Ot=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=ge$1({type:i});static ɵinj=de({imports:[M,Pe]})}return i})();export{Ot as DocPoDropdownModule};