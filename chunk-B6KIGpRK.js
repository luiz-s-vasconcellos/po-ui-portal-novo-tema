import{m as P,p as M}from"./main-DMA7KEAR.js";import{Ar as I,Bi as Xk,Ci as UO,F as Joe,G as Nf,Hr as Lk,Ii as WL,Ir as Kb,It as bae,L as Koe,Lr as Kg,Oi as VO,Or as HO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Sa as j_,Ta as jk,Ti as U_,Tr as Gb,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,Zr as No,an as ia,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,do as xo,f as Cze,gi as Rb,go as z0,hr as Db,io as vu,j as I4,ji as Vk,k as Goe,ki as V_,kt as Zoe,li as Qc,na as de,oo as wg,p as DP,ro as vt,rr as AZ,rt as Ru,sa as ek,si as QL,sn as j4,sr as BO,ua as ge,va as ik,vi as Sk,wn as q4,wr as GV,xi as Tk,xr as FO,yr as Du}from"./chunk-DtUf9FxZ.js";var _e=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-widget-basic`]],standalone:!1,decls:1,vars:0,template:function(l,i){l&1&&vu(0,`po-widget`)},dependencies:[bae],encapsulation:2,changeDetection:1})}return o})();var Ve=o=>({"docs-sample-code-tabs":o});var De=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-widget-basic-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-widget-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-widget-basic/sample-po-widget-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-widget-basic/sample-po-widget-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Widget Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-widget-basic/sample-po-widget-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-widget></po-widget>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-widget-basic/sample-po-widget-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-widget-basic',
  templateUrl: './sample-po-widget-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoWidgetBasicComponent {}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-widget-basic`),Kg(),vu(25,`hr`)),l&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ve,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,_e],encapsulation:2,changeDetection:1})}return o})();var Oe=(o,W)=>({src:o,size:W});var Te=(()=>{class o{poNotification=p(Ru);action;background;content;height;help;primaryLabel;properties;secondaryLabel;tagIcon;tagLabel;title;actionPopup={action:null,label:``};myActions=[];tagPosition;avatarSrc;avatarSize;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`primaryWidget`,label:`Primary Widget`},{value:`small`,label:`small`}];iconList=[{label:`an an-bluetooth`,value:`an an-bluetooth`},{label:`an an-heart`,value:`an an-heart`},{label:`an an-lightbulb`,value:`an an-lightbulb`},{label:`an an-star`,value:`an an-star`},{label:`an an-gear`,value:`an an-gear`},{label:`an an-globe`,value:`an an-globe`},{label:`fa fa-address-card`,value:`fa fa-address-card`},{label:`fa fa-bell`,value:`fa fa-bell`}];listTagPosition=[{label:`right`,value:`right`},{label:`top`,value:`top`},{label:`bottom`,value:`bottom`}];listAvatarSize=[{label:`xs`,value:`xs`},{label:`sm`,value:`sm`},{label:`md`,value:`md`},{label:`lg`,value:`lg`},{label:`xl`,value:`xl`}];ngOnInit(){this.restore()}changeAction(p){this.action=p}addAction(p){this.myActions=[...this.myActions,{label:p.label,action:this.showAction.bind(this,p.action)}],this.actionPopup={action:null,label:``}}restore(){this.background=``,this.action=``,this.content=``,this.height=void 0,this.help=``,this.title=void 0,this.primaryLabel=void 0,this.properties=[],this.myActions=[],this.secondaryLabel=void 0,this.tagLabel=void 0,this.tagIcon=void 0,this.actionPopup={action:null,label:``},this.tagPosition=void 0,this.avatarSrc=void 0,this.avatarSize=void 0}showAction(p){this.poNotification.success(`Action clicked: ${p}`)}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-widget-labs`]],standalone:!1,decls:32,vars:39,consts:[[`f`,`ngForm`],[1,`po-row`],[1,`po-sm-12`,3,`p-on-disabled`,`p-primary-action`,`p-secondary-action`,`p-setting`,`p-title-action`,`p-background`,`p-disabled`,`p-size`,`p-height`,`p-help`,`p-primary`,`p-primary-label`,`p-secondary-label`,`p-tag`,`p-tag-icon`,`p-tag-position`,`p-title`,`p-actions`,`p-avatar`],[`p-label`,`Action`,1,`po-md-6`,3,`p-value`],[`name`,`title`,`p-label`,`Title`,`p-clean`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-label`,`Help`,`p-clean`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-label`,`Height`,`p-clean`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Action`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`background`,`p-clean`,``,`p-help`,`Ex.: 'http://image.com'; '../../image.png'`,`p-label`,`Background`,`p-clean`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`primaryLabel`,`p-label`,`Primary Label`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryLabel`,`p-label`,`Secondary Label`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[1,`po-row`,`sample-widget-align-end`],[`name`,`tagLabel`,`p-label`,`Label Tag`,`p-clean`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-4`,`po-mt-2`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`tagPosition`,`p-label`,`Tag Position`,1,`po-md-4`,`po-mt-2`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`avatarSrc`,`p-label`,`Avatar Src`,`p-help`,`https://picsum.photos/144/144`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`avatarSize`,`p-label`,`Avatar Size`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`3`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`content`,`p-label`,`Content`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(l,i){if(l&1){let m=YO();Qc(0,`div`,1)(1,`po-widget`,2),vt(`p-on-disabled`,function(){return i.changeAction(`p-on-disabled`)})(`p-primary-action`,function(){return i.changeAction(`p-primary-action`)})(`p-secondary-action`,function(){return i.changeAction(`p-secondary-action`)})(`p-setting`,function(){return i.changeAction(`p-setting`)})(`p-title-action`,function(){return i.changeAction(`p-title-action`)}),Sk(2),Kg()(),vu(3,`po-divider`),Qc(4,`div`,1),vu(5,`po-info`,3),Kg(),vu(6,`po-divider`),Qc(7,`form`,null,0)(9,`po-input`,4),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(i.title,r)||(i.title=r),U_(r)}),Kg(),Qc(10,`po-input`,5),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(i.help,r)||(i.help=r),U_(r)}),Kg(),Qc(11,`po-number`,6),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(i.height,r)||(i.height=r),U_(r)}),Kg(),Qc(12,`div`,1)(13,`po-input`,7),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(i.actionPopup.action,r)||(i.actionPopup.action=r),U_(r)}),Kg(),Qc(14,`po-input`,8),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(i.actionPopup.label,r)||(i.actionPopup.label=r),U_(r)}),Kg()(),Qc(15,`div`,1)(16,`po-button`,9),vt(`p-click`,function(){return i.addAction(i.actionPopup)}),Kg()(),Qc(17,`po-input`,10),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(i.background,r)||(i.background=r),U_(r)}),Kg(),Qc(18,`po-input`,11),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(i.primaryLabel,r)||(i.primaryLabel=r),U_(r)}),Kg(),Qc(19,`po-input`,12),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(i.secondaryLabel,r)||(i.secondaryLabel=r),U_(r)}),Kg(),Qc(20,`div`,13)(21,`po-input`,14),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(i.tagLabel,r)||(i.tagLabel=r),U_(r)}),Kg(),Qc(22,`po-select`,15),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(i.tagIcon,r)||(i.tagIcon=r),U_(r)}),Kg(),Qc(23,`po-select`,16),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(i.tagPosition,r)||(i.tagPosition=r),U_(r)}),Kg()(),Qc(24,`div`,1)(25,`po-input`,17),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(i.avatarSrc,r)||(i.avatarSrc=r),U_(r)}),Kg(),Qc(26,`po-select`,18),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(i.avatarSize,r)||(i.avatarSize=r),U_(r)}),Kg()(),Qc(27,`div`,1)(28,`po-checkbox-group`,19),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(i.properties,r)||(i.properties=r),U_(r)}),Kg()(),Qc(29,`po-textarea`,20),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(i.content,r)||(i.content=r),U_(r)}),Kg(),Qc(30,`div`,1)(31,`po-button`,21),vt(`p-click`,function(){return i.restore()}),Kg()()()}l&2&&(wg(),Rb(`p-background`,i.background)(`p-disabled`,i.properties.includes(`disabled`))(`p-size`,i.properties.includes(`small`)?`small`:`medium`)(`p-height`,i.height)(`p-help`,i.help)(`p-primary`,i.properties.includes(`primaryWidget`))(`p-primary-label`,i.primaryLabel)(`p-secondary-label`,i.secondaryLabel)(`p-tag`,i.tagLabel)(`p-tag-icon`,i.tagIcon)(`p-tag-position`,i.tagPosition)(`p-title`,i.title)(`p-actions`,i.myActions)(`p-avatar`,jk(36,Oe,i.avatarSrc,i.avatarSize)),wg(),tm(` `,i.content,` `),wg(3),Rb(`p-value`,i.action),wg(4),Yb(`ngModel`,i.title),W0(),wg(),Yb(`ngModel`,i.help),W0(),wg(),Yb(`ngModel`,i.height),W0(),wg(2),Yb(`ngModel`,i.actionPopup.action),W0(),wg(),Yb(`ngModel`,i.actionPopup.label),W0(),wg(2),Rb(`p-disabled`,!i.actionPopup.action||!i.actionPopup.label),wg(),Yb(`ngModel`,i.background),W0(),wg(),Yb(`ngModel`,i.primaryLabel),W0(),wg(),Yb(`ngModel`,i.secondaryLabel),W0(),wg(2),Yb(`ngModel`,i.tagLabel),W0(),wg(),Yb(`ngModel`,i.tagIcon),Rb(`p-options`,i.iconList),W0(),wg(),Yb(`ngModel`,i.tagPosition),Rb(`p-options`,i.listTagPosition),W0(),wg(2),Yb(`ngModel`,i.avatarSrc),W0(),wg(),Yb(`ngModel`,i.avatarSize),Rb(`p-options`,i.listAvatarSize),W0(),wg(2),Yb(`ngModel`,i.properties),Rb(`p-options`,i.propertiesOptions),W0(),wg(),Yb(`ngModel`,i.content),W0())},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,j4,Goe,Koe,Zoe,Joe,bae],styles:[`.sample-widget-align-end[_ngcontent-%COMP%]{align-items:flex-end}`],changeDetection:1})}return o})();var Ue=o=>({"docs-sample-code-tabs":o});var Ae=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-widget-labs-view`]],standalone:!1,decls:39,vars:6,consts:[[`id`,`sample-po-widget-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-widget-labs/sample-po-widget-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-widget-labs/sample-po-widget-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`data-file`,`sample-po-widget-labs/sample-po-widget-labs.component.css`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Widget Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-widget-labs/sample-po-widget-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-row">
  <po-widget
    class="po-sm-12"
    [p-background]="background"
    [p-disabled]="properties.includes('disabled')"
    [p-size]="properties.includes('small') ? 'small' : 'medium'"
    [p-height]="height"
    [p-help]="help"
    [p-primary]="properties.includes('primaryWidget')"
    [p-primary-label]="primaryLabel"
    [p-secondary-label]="secondaryLabel"
    [p-tag]="tagLabel"
    [p-tag-icon]="tagIcon"
    [p-tag-position]="tagPosition"
    [p-title]="title"
    [p-actions]="myActions"
    (p-on-disabled)="changeAction('p-on-disabled')"
    (p-primary-action)="changeAction('p-primary-action')"
    (p-secondary-action)="changeAction('p-secondary-action')"
    (p-setting)="changeAction('p-setting')"
    (p-title-action)="changeAction('p-title-action')"
    [p-avatar]="{ src: avatarSrc, size: avatarSize }"
  >
    `),Qc(16,`span`),j_(),Sk(17,`{{`),V_(),Kg(),Sk(18,` content `),Qc(19,`span`),j_(),Sk(20,`}}`),V_(),Kg(),Sk(21,`
  </po-widget>
</div>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Action" [p-value]="action"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-4" name="title" [(ngModel)]="title" p-label="Title" p-clean />

  <po-input class="po-md-4" name="help" [(ngModel)]="help" p-label="Help" p-clean />

  <po-number class="po-md-4" name="height" [(ngModel)]="height" p-label="Height" p-clean />

  <div class="po-row">
    <po-input class="po-md-6" name="actionAction" [(ngModel)]="actionPopup.action" p-clean p-label="Action" />

    <po-input class="po-md-6" name="actionLabel" [(ngModel)]="actionPopup.label" p-label="Label" p-required />
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-2 po-md-4"
      p-label="Add Action"
      [p-disabled]="!actionPopup.action || !actionPopup.label"
      (p-click)="addAction(actionPopup)"
    >
    </po-button>
  </div>

  <po-input
    class="po-md-12"
    name="background"
    [(ngModel)]="background"
    p-clean
    p-help="Ex.: 'http://image.com'; '../../image.png'"
    p-label="Background"
    p-clean
  />

  <po-input class="po-md-6" name="primaryLabel" [(ngModel)]="primaryLabel" p-label="Primary Label" p-clean />

  <po-input class="po-md-6" name="secondaryLabel" [(ngModel)]="secondaryLabel" p-label="Secondary Label" p-clean />

  <div class="po-row sample-widget-align-end">
    <po-input class="po-md-4" name="tagLabel" [(ngModel)]="tagLabel" p-label="Label Tag" p-clean />

    <po-select class="po-md-4 po-mt-2" name="icon" [(ngModel)]="tagIcon" p-label="Icon" [p-options]="iconList" />

    <po-select
      class="po-md-4 po-mt-2"
      name="tagPosition"
      [(ngModel)]="tagPosition"
      p-label="Tag Position"
      [p-options]="listTagPosition"
    />
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="avatarSrc"
      [(ngModel)]="avatarSrc"
      p-label="Avatar Src"
      p-help="https://picsum.photos/144/144"
      p-clean
    />

    <po-select
      class="po-md-6"
      name="avatarSize"
      [(ngModel)]="avatarSize"
      p-label="Avatar Size"
      [p-options]="listAvatarSize"
    />
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-columns="3"
      p-label="Properties"
      [p-options]="propertiesOptions"
    />
  </div>

  <po-textarea class="po-md-12" [(ngModel)]="content" name="content" p-label="Content" />

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()" />
  </div>
</form>
`),Kg()()()(),Qc(22,`po-tab`,9)(23,`div`)(24,`label`,6),Sk(25,`sample-po-widget-labs/sample-po-widget-labs.component.ts`),Kg(),Qc(26,`div`,10)(27,`pre`,11),Sk(28,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoNotificationService, PoPopupAction, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-widget-labs',
  templateUrl: './sample-po-widget-labs.component.html',
  styleUrls: ['./sample-po-widget-labs.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoWidgetLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action: string;
  background: string;
  content: string;
  height: number;
  help: string;
  primaryLabel: string;
  properties: Array<string>;
  secondaryLabel: string;
  tagIcon: string;
  tagLabel: string;
  title: string;
  actionPopup: PoPopupAction = { action: null, label: '' };
  myActions: Array<PoPopupAction> = [];
  tagPosition: string;
  avatarSrc: string;
  avatarSize: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'primaryWidget', label: 'Primary Widget' },
    { value: 'small', label: 'small' }
  ];

  public readonly iconList: Array<PoSelectOption> = [
    { label: 'an an-bluetooth', value: 'an an-bluetooth' },
    { label: 'an an-heart', value: 'an an-heart' },
    { label: 'an an-lightbulb', value: 'an an-lightbulb' },
    { label: 'an an-star', value: 'an an-star' },
    { label: 'an an-gear', value: 'an an-gear' },
    { label: 'an an-globe', value: 'an an-globe' },
    { label: 'fa fa-address-card', value: 'fa fa-address-card' },
    { label: 'fa fa-bell', value: 'fa fa-bell' }
  ];

  public readonly listTagPosition: Array<PoSelectOption> = [
    { label: 'right', value: 'right' },
    { label: 'top', value: 'top' },
    { label: 'bottom', value: 'bottom' }
  ];

  public readonly listAvatarSize: Array<PoSelectOption> = [
    { label: 'xs', value: 'xs' },
    { label: 'sm', value: 'sm' },
    { label: 'md', value: 'md' },
    { label: 'lg', value: 'lg' },
    { label: 'xl', value: 'xl' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeAction(action) {
    this.action = action;
  }

  addAction(action: PoPopupAction) {
    this.myActions = [...this.myActions, { label: action.label, action: this.showAction.bind(this, action.action) }];
    this.actionPopup = { action: null, label: '' };
  }

  restore() {
    this.background = '';
    this.action = '';
    this.content = '';
    this.height = undefined;
    this.help = '';
    this.title = undefined;
    this.primaryLabel = undefined;
    this.properties = [];
    this.myActions = [];
    this.secondaryLabel = undefined;
    this.tagLabel = undefined;
    this.tagIcon = undefined;
    this.actionPopup = { action: null, label: '' };
    this.tagPosition = undefined;
    this.avatarSrc = undefined;
    this.avatarSize = undefined;
  }

  private showAction(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }
}
`),Kg()()()(),Qc(29,`po-tab`,12)(30,`div`)(31,`label`,6),Sk(32,`sample-po-widget-labs/sample-po-widget-labs.component.css`),Kg(),Qc(33,`div`,13)(34,`pre`,14),Sk(35,`.sample-widget-align-end {
  align-items: flex-end;
}
`),Kg()()()()()(),Qc(36,`div`,15),vu(37,`sample-po-widget-labs`),Kg(),vu(38,`hr`)),l&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ue,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Te],encapsulation:2,changeDetection:1})}return o})();var He=[`detailsModal`];var Me=(()=>{class o{poNotification=p(Ru);detailsModalElement;paymentLink=`https://www.google.com.br/search?q=days+to+payment`;itemsDetails;titleDetailsModal;typeChart=`line`;myActions=[{label:`Detail`,icon:`an an-align-top`,action:this.showAction.bind(this)},{label:`Remove`,icon:`an an-trash`,type:`danger`,action:this.showAction.bind(this)}];options=[{value:`poMultiselect1`,label:`Admin`},{value:`poMultiselect2`,label:`User`}];columnsDetails=[{property:`dateUpdate`,label:`Date update`,type:`date`},{property:`statement`,label:`Statement`,type:`currency`}];itemsAccountDetails=[{dateUpdate:`03-05-2018`,statement:`-56.45`},{dateUpdate:`02-05-2018`,statement:`-14.99`},{dateUpdate:`02-05-2018`,statement:`-657.56`},{dateUpdate:`12-05-2017`,statement:`3547.29`}];itemsSavingsDetails=[{dateUpdate:`03-05-2018`,statement:`-300`},{dateUpdate:`03-05-2018`,statement:`2000`},{dateUpdate:`02-05-2018`,statement:`1500`},{dateUpdate:`02-05-2018`,statement:`-200`},{dateUpdate:`12-05-2017`,statement:`2000`}];openModal(p){switch(p){case`savings`:this.titleDetailsModal=`Revenue - Details`,this.itemsDetails=this.itemsSavingsDetails,this.detailsModalElement.open();break;case`account`:this.titleDetailsModal=`Total savings - Details`,this.itemsDetails=this.itemsAccountDetails,this.detailsModalElement.open()}}openExternalLink(p){window.open(p,`_blank`)}showAction(){this.poNotification.success(`Action clicked`)}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-widget-finance-dashboard`]],viewQuery:function(l,i){if(l&1&&Du(He,7),l&2){let m;No(m=xo())&&(i.detailsModalElement=m.first)}},standalone:!1,decls:43,vars:13,consts:[[`detailsModal`,``],[1,`po-row`,`sample-finance-row-gap`],[`p-help`,`https://github.com/po-ui/po-angular/stargazers`,`p-title`,`Days to Payment`,`p-tag`,`Sales`,`p-tag-icon`,`an an-arrow-circle-up`,1,`po-lg-6`,3,`p-height`],[1,`sample-finance-actions`],[`p-label`,`Cancel`,`p-danger`,``],[`p-label`,`Confirm`,3,`p-click`],[`p-title`,`Total savings`,1,`po-lg-3`,3,`p-click`,`p-height`],[1,`po-font-subtitle`,`po-text-center`],[1,`po-text-center`],[`p-disabled`,``,`p-primary-label`,`Details`,`p-secondary-label`,`Edit`,`p-title`,`Total checking account`,1,`po-lg-3`,3,`p-primary-action`,`p-height`],[1,`po-text-center`,`sample-finance-total-value`],[`p-background`,`../../../assets/graphics/sales-statistics.png`,1,`po-lg-4`,3,`p-height`],[1,`po-text-center`,`sample-finance-padding-inline`],[1,`sample-finance-overlay-badge`],[1,`sample-finance-overlay-text`],[1,`sample-finance-padding-inline`],[`name`,`multiselect`,3,`p-options`],[`p-title`,`Most used payment type`,1,`po-lg-4`,3,`p-actions`,`p-height`],[`p-primary-label`,`Details`,`p-tag`,`Revenue`,`p-tag-icon`,`an an-money`,`p-title`,`Highest revenue in the month considering Marketing and Sales`,1,`po-lg-4`,3,`p-primary-action`,`p-height`,`p-primary`],[3,`p-title`],[3,`p-columns`,`p-items`,`p-hide-table-search`]],template:function(l,i){l&1&&(Qc(0,`div`,1)(1,`div`,1)(2,`po-widget`,2)(3,`div`),Sk(4,`Sales order`),Kg(),Qc(5,`div`),Sk(6,`Scheduled to: `),Qc(7,`strong`),Sk(8,`05/04/2018`),Kg()(),Qc(9,`div`,3),vu(10,`po-button`,4),Qc(11,`po-button`,5),vt(`p-click`,function(){return i.openExternalLink(`https://github.com/po-ui/po-angular/stargazers`)}),Kg()()(),Qc(12,`po-widget`,6),vt(`p-click`,function(){return i.openModal(`account`)}),Qc(13,`div`,7),Sk(14,`$2.818,29`),Kg(),Qc(15,`div`,8),Sk(16,`Last updated at 18:34`),Kg()(),Qc(17,`po-widget`,9),vt(`p-primary-action`,function(){return i.openModal(`account`)}),Qc(18,`div`,10),Sk(19,`$5.000,00`),Kg(),Qc(20,`div`,8),Sk(21,`Last updated at 08:20`),Kg()()(),Qc(22,`div`,1)(23,`po-widget`,11)(24,`div`,12)(25,`div`,13)(26,`strong`,14),Sk(27,`Enter the user routine`),Kg()()(),Qc(28,`div`,15),vu(29,`po-multiselect`,16),Kg()(),Qc(30,`po-widget`,17)(31,`div`,7),Sk(32,`Credit card`),Kg(),Qc(33,`div`,8),Sk(34,`MasterCard - 5500 0000 0000 0004`),Kg()(),Qc(35,`po-widget`,18),vt(`p-primary-action`,function(){return i.openModal(`savings`)}),Qc(36,`div`,7),Sk(37,`$2.000,00`),Kg(),Qc(38,`div`,8),Sk(39,`05/03/2018`),Kg()()()(),Qc(40,`po-modal`,19,0),vu(42,`po-table`,20),Kg()),l&2&&(wg(2),Rb(`p-height`,190),wg(10),Rb(`p-height`,190),wg(5),Rb(`p-height`,190),wg(6),Rb(`p-height`,180),wg(6),Rb(`p-options`,i.options),wg(),Rb(`p-actions`,i.myActions)(`p-height`,180),wg(5),Rb(`p-height`,180)(`p-primary`,!0),wg(5),Rb(`p-title`,i.titleDetailsModal),wg(2),Rb(`p-columns`,i.columnsDetails)(`p-items`,i.itemsDetails)(`p-hide-table-search`,!1))},dependencies:[oi,DP,ia,q4,bae],styles:[`.sample-finance-row-gap[_ngcontent-%COMP%]{row-gap:1rem}.sample-finance-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:.5rem}.sample-finance-total-value[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:.5rem}.sample-finance-padding-inline[_ngcontent-%COMP%]{padding-inline:.5rem}.sample-finance-overlay-badge[_ngcontent-%COMP%]{margin-bottom:.5rem;display:inline-block;background-color:#000;padding:.5rem;border-radius:3px;opacity:.85}.sample-finance-overlay-text[_ngcontent-%COMP%]{color:#fff}`],changeDetection:1})}return o})();var Je=o=>({"docs-sample-code-tabs":o});var ke=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-widget-finance-dashboard-view`]],standalone:!1,decls:33,vars:6,consts:[[`id`,`sample-po-widget-finance-dashboard`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`data-file`,`sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.css`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Widget - Finance dashboard`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-row sample-finance-row-gap">
  <div class="po-row sample-finance-row-gap">
    <po-widget
      class="po-lg-6"
      p-help="https://github.com/po-ui/po-angular/stargazers"
      p-title="Days to Payment"
      p-tag="Sales"
      p-tag-icon="an an-arrow-circle-up"
      [p-height]="190"
    >
      <div>Sales order</div>
      <div>Scheduled to: <strong>05/04/2018</strong></div>
      <div class="sample-finance-actions">
        <po-button p-label="Cancel" p-danger></po-button>
        <po-button
          p-label="Confirm"
          (p-click)="openExternalLink('https://github.com/po-ui/po-angular/stargazers')"
        ></po-button>
      </div>
    </po-widget>

    <po-widget class="po-lg-3" p-title="Total savings" [p-height]="190" (p-click)="openModal('account')">
      <div class="po-font-subtitle po-text-center">$2.818,29</div>
      <div class="po-text-center">Last updated at 18:34</div>
    </po-widget>

    <po-widget
      class="po-lg-3"
      p-disabled
      p-primary-label="Details"
      p-secondary-label="Edit"
      p-title="Total checking account"
      [p-height]="190"
      (p-primary-action)="openModal('account')"
    >
      <div class="po-text-center sample-finance-total-value">$5.000,00</div>
      <div class="po-text-center">Last updated at 08:20</div>
    </po-widget>
  </div>

  <div class="po-row sample-finance-row-gap">
    <po-widget class="po-lg-4" p-background="../../../assets/graphics/sales-statistics.png" [p-height]="180">
      <div class="po-text-center sample-finance-padding-inline">
        <div class="sample-finance-overlay-badge">
          <strong class="sample-finance-overlay-text">Enter the user routine</strong>
        </div>
      </div>
      <div class="sample-finance-padding-inline">
        <po-multiselect name="multiselect" [p-options]="options"> </po-multiselect>
      </div>
    </po-widget>

    <po-widget class="po-lg-4" p-title="Most used payment type" [p-actions]="myActions" [p-height]="180">
      <div class="po-font-subtitle po-text-center">Credit card</div>
      <div class="po-text-center">MasterCard - 5500 0000 0000 0004</div>
    </po-widget>

    <po-widget
      class="po-lg-4"
      p-primary-label="Details"
      p-tag="Revenue"
      p-tag-icon="an an-money"
      p-title="Highest revenue in the month considering Marketing and Sales"
      [p-height]="180"
      [p-primary]="true"
      (p-primary-action)="openModal('savings')"
    >
      <div class="po-font-subtitle po-text-center">$2.000,00</div>
      <div class="po-text-center">05/03/2018</div>
    </po-widget>
  </div>
</div>

<po-modal #detailsModal [p-title]="titleDetailsModal">
  <po-table [p-columns]="columnsDetails" [p-items]="itemsDetails" [p-hide-table-search]="false"> </po-table>
</po-modal>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoModalComponent, PoMultiselectOption, PoNotificationService, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-widget-finance-dashboard',
  templateUrl: './sample-po-widget-finance-dashboard.component.html',
  styleUrls: ['./sample-po-widget-finance-dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoWidgetFinanceDashboardComponent {
  private readonly poNotification = inject(PoNotificationService);

  @ViewChild('detailsModal', { static: true }) detailsModalElement: PoModalComponent;

  paymentLink: string = 'https://www.google.com.br/search?q=days+to+payment';
  itemsDetails: Array<any>;
  titleDetailsModal: string;
  typeChart: string = 'line';
  myActions = [
    { label: 'Detail', icon: 'an an-align-top', action: this.showAction.bind(this) },
    { label: 'Remove', icon: 'an an-trash', type: 'danger', action: this.showAction.bind(this) }
  ];

  options: Array<PoMultiselectOption> = [
    { value: 'poMultiselect1', label: 'Admin' },
    { value: 'poMultiselect2', label: 'User' }
  ];

  public readonly columnsDetails: Array<PoTableColumn> = [
    { property: 'dateUpdate', label: 'Date update', type: 'date' },
    { property: 'statement', label: 'Statement', type: 'currency' }
  ];

  public readonly itemsAccountDetails: Array<any> = [
    { dateUpdate: '03-05-2018', statement: '-56.45' },
    { dateUpdate: '02-05-2018', statement: '-14.99' },
    { dateUpdate: '02-05-2018', statement: '-657.56' },
    { dateUpdate: '12-05-2017', statement: '3547.29' }
  ];

  public readonly itemsSavingsDetails: Array<any> = [
    { dateUpdate: '03-05-2018', statement: '-300' },
    { dateUpdate: '03-05-2018', statement: '2000' },
    { dateUpdate: '02-05-2018', statement: '1500' },
    { dateUpdate: '02-05-2018', statement: '-200' },
    { dateUpdate: '12-05-2017', statement: '2000' }
  ];

  openModal(type) {
    switch (type) {
      case 'savings':
        this.titleDetailsModal = 'Revenue - Details';
        this.itemsDetails = this.itemsSavingsDetails;
        this.detailsModalElement.open();
        break;
      case 'account':
        this.titleDetailsModal = 'Total savings - Details';
        this.itemsDetails = this.itemsAccountDetails;
        this.detailsModalElement.open();
        break;
    }
  }

  openExternalLink(url) {
    window.open(url, '_blank');
  }

  private showAction(): any {
    this.poNotification.success(\`Action clicked\`);
  }
}
`),Kg()()()(),Qc(23,`po-tab`,12)(24,`div`)(25,`label`,6),Sk(26,`sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.css`),Kg(),Qc(27,`div`,13)(28,`pre`,14),Sk(29,`.sample-finance-row-gap {
  row-gap: 1rem;
}

.sample-finance-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

.sample-finance-total-value {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.sample-finance-padding-inline {
  padding-inline: 0.5rem;
}

.sample-finance-overlay-badge {
  margin-bottom: 0.5rem;
  display: inline-block;
  background-color: black;
  padding: 0.5rem;
  border-radius: 3px;
  opacity: 0.85;
}

.sample-finance-overlay-text {
  color: white;
}
`),Kg()()()()()(),Qc(30,`div`,15),vu(31,`sample-po-widget-finance-dashboard`),Kg(),vu(32,`hr`)),l&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Je,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Me],encapsulation:2,changeDetection:1})}return o})();var Qe=o=>({customTemplate:o,widthCustomTemplate:`40%`});var Ke=()=>({hideExpand:!0,hideExportCsv:!0,hideExportImage:!0,hideTableDetails:!0});var Xe=o=>({header:o});var Ye=()=>({label:`Angular`,data:100});var Ze=()=>({label:`React`,data:10});var $e=(o,W)=>[o,W];function et(o,W){o&1&&vu(0,`po-chart`,8),o&2&&Rb(`p-options`,Vk(3,Xe,Lk(2,Ke)))(`p-series`,jk(7,$e,Lk(5,Ye),Lk(6,Ze)))}function tt(o,W){if(o&1&&(Qc(0,`li`),Sk(1),Kg()),o&2){let p=W.$implicit;wg(),Gb(p)}}var We=(()=>{class o{poModal;help;label;technologies=[`Angular`,`Typescript`,`React`,`Babel`,`Jasmine`,`Vue`];value;ngOnInit(){this.showAngular()}showAngular(){this.label=`Angular`,this.value=`Angular is a javascript framework mantained by Google and successor of the Angular.js.
    In this latest version, we can use all the features of the framework, for example: data bindings, components,
    modules, typescript and much more.`,this.help=`https://angular.io/`}showJavascriptTechnologies(){this.poModal.open()}showTypescript(){this.label=`Typescript`,this.value=`Typescript allows to write JavaScript in an easier way.
    Typescript is a super set of JavaScript that compiles for simple JavaScript. Any browser.
    Any host. Any operating system. Open code.`,this.help=`https://www.typescriptlang.org/`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-widget-card`]],viewQuery:function(l,i){if(l&1&&Du(ia,7),l&2){let m;No(m=xo())&&(i.poModal=m.first)}},standalone:!1,decls:24,vars:6,consts:[[`avatar`,``],[1,`po-row`],[`p-height`,`300`,`p-primary-label`,`Angular`,`p-secondary-label`,`Typescript`,`p-title`,`Javascript technologies`,1,`po-lg-6`,3,`p-primary-action`,`p-secondary-action`,`p-title-action`,`p-help`],[3,`p-label`,`p-value`],[`p-title`,`Apps Enterprise`,`p-tag`,`Angular v17+`,`p-tag-position`,`top`,`p-height`,`300`,`p-help`,`https://angular.dev/`,1,`po-lg-6`,3,`p-avatar`],[1,`po-pl-3`,`po-pt-1`],[`p-title`,`Javascript Technologies`],[1,`po-ml-3`],[`p-height`,`260`,3,`p-options`,`p-series`]],template:function(l,i){if(l&1&&(Qc(0,`div`,1)(1,`po-widget`,2),vt(`p-primary-action`,function(){return i.showAngular()})(`p-secondary-action`,function(){return i.showTypescript()})(`p-title-action`,function(){return i.showJavascriptTechnologies()}),vu(2,`po-info`,3),Kg(),Qc(3,`po-widget`,4)(4,`div`),Sk(5,` Angular: The default choice for large-scale applications, such as banking and government systems, due to its structured architecture and native TypeScript support. `),Qc(6,`div`,5)(7,`ul`)(8,`li`),Sk(9,`Out-of-the-Box`),Kg(),Qc(10,`li`),Sk(11,`Standardized and Opinion-Based Architecture`),Kg(),Qc(12,`li`),Sk(13,`Next Generation Reactivity (Signals)`),Kg(),Qc(14,`li`),Sk(15,`Focus on Enterprise and Security`),Kg()()()(),Db(16,et,1,10,`ng-template`,null,0,Xk),Kg()(),Qc(18,`po-modal`,6),Sk(19,` There are several Javascript technologies that help us in the construction of fast and dynamic screens, among them we can mention: `),Qc(20,`div`,7)(21,`ul`),UO(22,tt,2,1,`li`,null,BO),Kg()()()),l&2){let m=ik(17);wg(),Rb(`p-help`,i.help),wg(),Rb(`p-label`,i.label)(`p-value`,i.value),wg(),Rb(`p-avatar`,Vk(4,Qe,m)),wg(19),HO(i.technologies)}},dependencies:[Cze,Joe,ia,bae],encapsulation:2,changeDetection:1})}return o})();var it=o=>({"docs-sample-code-tabs":o});var Le=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-widget-card-view`]],standalone:!1,decls:32,vars:6,consts:[[`id`,`sample-po-widget-card`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-widget-card/sample-po-widget-card.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-widget-card/sample-po-widget-card.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Widget - Card`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-widget-card/sample-po-widget-card.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-row">
  <po-widget
    class="po-lg-6"
    p-height="300"
    p-primary-label="Angular"
    p-secondary-label="Typescript"
    p-title="Javascript technologies"
    [p-help]="help"
    (p-primary-action)="showAngular()"
    (p-secondary-action)="showTypescript()"
    (p-title-action)="showJavascriptTechnologies()"
  >
    <po-info [p-label]="label" [p-value]="value"> </po-info>
  </po-widget>

  <po-widget
    p-title="Apps Enterprise"
    p-tag="Angular v17+"
    p-tag-position="top"
    class="po-lg-6"
    p-height="300"
    p-help="https://angular.dev/"
    [p-avatar]="{ customTemplate: avatar, widthCustomTemplate: '40%' }"
  >
    <div>
      Angular: The default choice for large-scale applications, such as banking and government systems, due to its
      structured architecture and native TypeScript support.
      <div class="po-pl-3 po-pt-1">
        <ul>
          <li>Out-of-the-Box</li>
          <li>Standardized and Opinion-Based Architecture</li>
          <li>Next Generation Reactivity (Signals)</li>
          <li>Focus on Enterprise and Security</li>
        </ul>
      </div>
    </div>

    <ng-template #avatar>
      <po-chart
        p-height="260"
        [p-options]="{
          header: { hideExpand: true, hideExportCsv: true, hideExportImage: true, hideTableDetails: true }
        }"
        [p-series]="[
          { label: 'Angular', data: 100 },
          { label: 'React', data: 10 }
        ]"
      >
      </po-chart>
    </ng-template>
  </po-widget>
</div>

<po-modal p-title="Javascript Technologies">
  There are several Javascript technologies that help us in the construction of fast and dynamic screens, among them we
  can mention:

  <div class="po-ml-3">
    <ul>
      @for (technology of technologies; track technology) {
        <li>`),Qc(16,`span`),j_(),Sk(17,`{{`),V_(),Kg(),Sk(18,` technology `),Qc(19,`span`),j_(),Sk(20,`}}`),V_(),Kg(),Sk(21,`</li>
      }
    </ul>
  </div>
</po-modal>
`),Kg()()()(),Qc(22,`po-tab`,9)(23,`div`)(24,`label`,6),Sk(25,`sample-po-widget-card/sample-po-widget-card.component.ts`),Kg(),Qc(26,`div`,10)(27,`pre`,11),Sk(28,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-widget-card',
  templateUrl: './sample-po-widget-card.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoWidgetCardComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  help: string;
  label: string;
  technologies: Array<string> = ['Angular', 'Typescript', 'React', 'Babel', 'Jasmine', 'Vue'];
  value: string;

  ngOnInit() {
    this.showAngular();
  }

  showAngular() {
    this.label = 'Angular';
    this.value = \`Angular is a javascript framework mantained by Google and successor of the Angular.js.
    In this latest version, we can use all the features of the framework, for example: data bindings, components,
    modules, typescript and much more.\`;
    this.help = 'https://angular.io/';
  }

  showJavascriptTechnologies() {
    this.poModal.open();
  }

  showTypescript() {
    this.label = 'Typescript';
    this.value = \`Typescript allows to write JavaScript in an easier way.
    Typescript is a super set of JavaScript that compiles for simple JavaScript. Any browser.
    Any host. Any operating system. Open code.\`;
    this.help = 'https://www.typescriptlang.org/';
  }
}
`),Kg()()()()()(),Qc(29,`div`,12),vu(30,`sample-po-widget-card`),Kg(),vu(31,`hr`)),l&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,it,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,We],encapsulation:2,changeDetection:1})}return o})();var Fe=(()=>{class o{router=p(An);openDoc(p){this.router.navigate([`/documentation`,p],{queryParams:{view:`doc`}})}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-widget-doc`]],standalone:!1,decls:1441,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-widget-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/guides/grid-system`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/name-role-value`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/keyboard`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-action-template`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<any>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-actions`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`id`,`prop-p-avatar`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoWidgetAvatar`],[`id`,`prop-p-background`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`event-p-click`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-danger-primary-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`false`],[`id`,`prop-p-danger-secondary-action`,1,`docs-api-properties-row`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-height`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-help`,1,`docs-api-properties-row`],[`id`,`prop-p-kind-primary-action`,1,`docs-api-properties-row`],[`id`,`prop-p-kind-secondary-action`,1,`docs-api-properties-row`],[`id`,`prop-p-no-shadow`,1,`docs-api-properties-row`],[`id`,`event-p-on-disabled`,1,`docs-api-properties-row`],[`id`,`prop-p-primary`,1,`docs-api-properties-row`],[`id`,`event-p-primary-action`,1,`docs-api-properties-row`],[`id`,`prop-p-primary-label`,1,`docs-api-properties-row`],[`id`,`event-p-secondary-action`,1,`docs-api-properties-row`],[`id`,`prop-p-secondary-label`,1,`docs-api-properties-row`],[`id`,`prop-p-selection`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoWidgetSelection`],[`id`,`event-p-setting`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-subtitle`,1,`docs-api-properties-row`],[`id`,`prop-p-tag-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`prop-p-tag`,1,`docs-api-properties-row`],[`id`,`prop-p-tag-position`,1,`docs-api-properties-row`],[`id`,`prop-p-tag-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoTagType`],[`id`,`prop-p-title`,1,`docs-api-properties-row`],[`id`,`event-p-title-action`,1,`docs-api-properties-row`],[`id`,`interface-po-popup-action`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-toolbar-action-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-toolbar-action-disabled`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-icon`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-label`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-selected`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-separator`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-sub-items`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-sub-items-lazy`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`(item:`,`PoPopupAction)`,`=>`,`Observable<Array<PoPopupAction>>`],[`id`,`interface-po-toolbar-action-type`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-url`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-visible`,1,`docs-api-properties-row`],[`id`,`interface-po-widget-avatar`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-widget-avatar-custom-template`,1,`docs-api-properties-row`],[`id`,`interface-po-widget-avatar-size`,1,`docs-api-properties-row`],[`id`,`interface-po-widget-avatar-src`,1,`docs-api-properties-row`],[`id`,`interface-po-widget-avatar-width-custom-template`,1,`docs-api-properties-row`],[`id`,`enum-po-button-kind`,1,`docs-api-class-name`],[`id`,`enum-po-button-kind-primary`,1,`docs-api-properties-row`],[`id`,`enum-po-button-kind-secondary`,1,`docs-api-properties-row`],[`id`,`enum-po-button-kind-tertiary`,1,`docs-api-properties-row`],[`id`,`enum-po-button-kind-glow`,1,`docs-api-properties-row`]],template:function(l,i){l&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoWidgetModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-widget`),Kg()(),Qc(7,`h3`,3),Sk(8,`Componente`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoWidgetComponent`),Kg()(),Qc(12,`div`,2)(13,`p`),Sk(14,`O componente `),Qc(15,`code`),Sk(16,`po-widget`),Kg(),Sk(17,` é recomendado para exibição de `),Qc(18,`em`),Sk(19,`dashboards`),Kg(),Sk(20,`, podendo ser utilizado
para incluir v\xE1rios tipos de conte\xFAdo como: gr\xE1ficos, tabelas, grids e imagens.`),Kg(),Qc(21,`p`),Sk(22,`Al\xE9m da exibi\xE7\xE3o de conte\xFAdos, este componente possibilita adicionar a\xE7\xF5es e um link
para ajuda, como tamb\xE9m possibilita ser utilizado com ou sem sombra.`),Kg(),Qc(23,`p`),Sk(24,`Para controlar sua largura, é possível utilizar o `),Qc(25,`a`,6),Sk(26,`Grid System`),Kg(),Sk(27,` para um maior
controle de seu redimensionamento, assim possibilitando o tratamento para diferentes resolu\xE7\xF5es.`),Kg(),Qc(28,`h4`),Sk(29,`Boas práticas`),Kg(),Qc(30,`p`),Sk(31,`Utilize um tamanho mínimo de largura de aproximadamente `),Qc(32,`code`),Sk(33,`18.75rem`),Kg(),Sk(34,` no componente.`),Kg(),Qc(35,`h4`),Sk(36,`Acessibilidade tratada no componente`),Kg(),Qc(37,`p`),Sk(38,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas. São elas:`),Kg(),Qc(39,`ul`)(40,`li`),Sk(41,`Utiliza medidas relativas, para se adequar às preferências e necessidades de quem for utilizar o sistema.`),Kg(),Qc(42,`li`),Sk(43,`Desenvolvido com uso de controles padrões HTML, o que permite a identificação na interface por tecnologias assistivas. (WCAG `),Qc(44,`a`,7),Sk(45,`4.1.2: Name, Role, Value`),Kg(),Sk(46,`)`),Kg(),Qc(47,`li`),Sk(48,`O foco é visível e possui uma espessura superior a 2 pixels CSS, não ficando escondido por outros elementos da tela. (WCAG `),Qc(49,`a`,8),Sk(50,`2.4.12: Focus Appearance`),Kg(),Sk(51,`)`),Kg(),Qc(52,`li`),Sk(53,`Quando selecionável, prevê interação por teclado, podendo ser selecionado através da tecla space (WCAG `),Qc(54,`a`,9),Sk(55,`2.4.1 - Keyboard`),Kg(),Sk(56,`)`),Kg()(),Qc(57,`h4`),Sk(58,`Tokens customizáveis`),Kg(),Qc(59,`p`),Sk(60,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(61,`blockquote`)(62,`p`),Sk(63,`Para maiores informações, acesse o guia `),Qc(64,`a`,10),Sk(65,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(66,`.`),Kg()(),Qc(67,`table`)(68,`thead`)(69,`tr`)(70,`th`),Sk(71,`Propriedade`),Kg(),Qc(72,`th`),Sk(73,`Descrição`),Kg(),Qc(74,`th`),Sk(75,`Valor Padrão`),Kg()()(),Qc(76,`tbody`)(77,`tr`)(78,`td`)(79,`strong`),Sk(80,`Default Values`),Kg()(),vu(81,`td`)(82,`td`),Kg(),Qc(83,`tr`)(84,`td`)(85,`code`),Sk(86,`--font-family`),Kg()(),Qc(87,`td`),Sk(88,`Família tipográfica usada`),Kg(),Qc(89,`td`)(90,`code`),Sk(91,`var(--font-family-theme) `),Kg()()(),Qc(92,`tr`)(93,`td`)(94,`code`),Sk(95,`--font-size`),Kg()(),Qc(96,`td`),Sk(97,`Tamanho da fonte`),Kg(),Qc(98,`td`)(99,`code`),Sk(100,`var(--font-size-sm)`),Kg()()(),Qc(101,`tr`)(102,`td`)(103,`code`),Sk(104,`--font-weight`),Kg()(),Qc(105,`td`),Sk(106,`Peso da fonte`),Kg(),Qc(107,`td`)(108,`code`),Sk(109,`var(--font-weight-bold)`),Kg()()(),Qc(110,`tr`)(111,`td`)(112,`code`),Sk(113,`--font-color`),Kg()(),Qc(114,`td`),Sk(115,`Cor da fonte`),Kg(),Qc(116,`td`)(117,`code`),Sk(118,`var(--color-neutral-dark-95)`),Kg()()(),Qc(119,`tr`)(120,`td`)(121,`code`),Sk(122,`--padding-header`),Kg()(),Qc(123,`td`),Sk(124,`Preenchimento do header`),Kg(),Qc(125,`td`)(126,`code`),Sk(127,`var(--spacing-sm) var(--spacing-sm) var(--spacing-xs) var(--spacing-sm)`),Kg()()(),Qc(128,`tr`)(129,`td`)(130,`code`),Sk(131,`--padding-body`),Kg()(),Qc(132,`td`),Sk(133,`Preenchimento do body`),Kg(),Qc(134,`td`)(135,`code`),Sk(136,`var(--spacing-xs) var(--spacing-sm) var(--spacing-xs) var(--spacing-sm)`),Kg()()(),Qc(137,`tr`)(138,`td`)(139,`code`),Sk(140,`--padding-avatar`),Kg()(),Qc(141,`td`),Sk(142,`Preenchimento do avatar`),Kg(),Qc(143,`td`)(144,`code`),Sk(145,`var(--spacing-sm) 0 var(--spacing-xs) var(--spacing-sm)`),Kg()()(),Qc(146,`tr`)(147,`td`)(148,`code`),Sk(149,`--padding-footer`),Kg()(),Qc(150,`td`),Sk(151,`Preenchimento do footer`),Kg(),Qc(152,`td`)(153,`code`),Sk(154,`var(--spacing-xs) var(--spacing-sm) var(--spacing-sm) var(--spacing-sm)`),Kg()()(),Qc(155,`tr`)(156,`td`)(157,`code`),Sk(158,`--border-radius`),Kg()(),Qc(159,`td`),Sk(160,`Contém o valor do raio dos cantos do elemento\xA0`),Kg(),Qc(161,`td`)(162,`code`),Sk(163,`var(--border-radius-md)`),Kg()()(),Qc(164,`tr`)(165,`td`)(166,`code`),Sk(167,`--border-width`),Kg()(),Qc(168,`td`),Sk(169,`Contém o valor da largura dos cantos do elemento\xA0`),Kg(),Qc(170,`td`)(171,`code`),Sk(172,`var(--border-width-sm)`),Kg()()(),Qc(173,`tr`)(174,`td`)(175,`code`),Sk(176,`--border-color`),Kg()(),Qc(177,`td`),Sk(178,`Cor da borda`),Kg(),Qc(179,`td`)(180,`code`),Sk(181,`var(--color-neutral-light-20)`),Kg()()(),Qc(182,`tr`)(183,`td`)(184,`code`),Sk(185,`--background`),Kg()(),Qc(186,`td`),Sk(187,`Cor de background`),Kg(),Qc(188,`td`)(189,`code`),Sk(190,`var(--color-neutral-light-00)`),Kg()()(),Qc(191,`tr`)(192,`td`)(193,`code`),Sk(194,`--shadow`),Kg()(),Qc(195,`td`),Sk(196,`Contém o valor da sombra do elemento`),Kg(),Qc(197,`td`)(198,`code`),Sk(199,`var(--shadow-md)`),Kg()()(),Qc(200,`tr`)(201,`td`)(202,`strong`),Sk(203,`Hover`),Kg()(),vu(204,`td`)(205,`td`),Kg(),Qc(206,`tr`)(207,`td`)(208,`code`),Sk(209,`--border-color-hover`),Kg()(),Qc(210,`td`),Sk(211,`Cor da borda no estado hover`),Kg(),Qc(212,`td`)(213,`code`),Sk(214,`var(--color-action-hover)`),Kg()()(),Qc(215,`tr`)(216,`td`)(217,`strong`),Sk(218,`Focused`),Kg()(),vu(219,`td`)(220,`td`),Kg(),Qc(221,`tr`)(222,`td`)(223,`code`),Sk(224,`--color-focused`),Kg()(),Qc(225,`td`),Sk(226,`Cor principal no estado de focus`),Kg(),Qc(227,`td`)(228,`code`),Sk(229,`var(--color-action-default)`),Kg()()(),Qc(230,`tr`)(231,`td`)(232,`code`),Sk(233,`--outline-color-focused`),Kg(),Sk(234,` \xA0`),Kg(),Qc(235,`td`),Sk(236,`Cor do outline do estado de focus`),Kg(),Qc(237,`td`)(238,`code`),Sk(239,`var(--color-action-focus)`),Kg()()()()()(),Qc(240,`div`,11)(241,`h4`,12),Sk(242,`Seletor`),Kg(),Qc(243,`pre`,13),Sk(244,`<po-widget
    p-action-template="TemplateRef<any>"
    p-actions="Array<PoPopupAction>"
    p-avatar="PoWidgetAvatar"
    p-background="string"
    (p-click)="EventEmitter"
    p-danger-primary-action="false"
    p-danger-secondary-action="false"
    p-disabled="boolean"
    p-height="number"
    p-help="string"
    p-kind-primary-action="string"
    p-kind-secondary-action="string"
    p-no-shadow="boolean"
    (p-on-disabled)="EventEmitter"
    p-primary="boolean"
    (p-primary-action)="EventEmitter"
    p-primary-label="string"
    (p-secondary-action)="EventEmitter"
    p-secondary-label="string"
    p-selection="PoWidgetSelection"
    (p-setting)="EventEmitter"
    p-size="string"
    p-subtitle="string"
    p-tag-icon="string | TemplateRef<void>"
    p-tag="string"
    p-tag-position="string"
    p-tag-type="PoTagType | string"
    p-title="string"
    (p-title-action)="EventEmitter" >
</po-widget>
`),Kg()(),Qc(245,`h4`,14),Sk(246,`Propriedades`),Kg(),Qc(247,`table`,15)(248,`tr`,16)(249,`th`,17),Sk(250,`Nome`),Kg(),Qc(251,`th`,17),Sk(252,`Tipo`),Kg(),Qc(253,`th`,17),Sk(254,`Padrão`),Kg(),Qc(255,`th`,17),Sk(256,`Descrição`),Kg()(),Qc(257,`tr`,18)(258,`td`,19)(259,`div`,20)(260,`span`,21),Sk(261,` p-action-template`),vu(262,`br`),Kg()()(),Qc(263,`td`,22)(264,`code`,23),Sk(265,`TemplateRef<any>`),Kg()(),Qc(266,`td`,24),Sk(267,`-`),Kg(),Qc(268,`td`,25)(269,`p`),Sk(270,`Uso `),Qc(271,`strong`),Sk(272,`interno`),Kg(),Sk(273,` do `),Qc(274,`code`),Sk(275,`po-list-view`),Kg(),Sk(276,`. Template renderizado como coluna de a\xE7\xE3o \xE0
direita do conte\xFAdo, centralizado verticalmente (em vez do header).`),Kg()()(),Qc(277,`tr`,26)(278,`td`,19)(279,`div`,20)(280,`span`,21),Sk(281,` p-actions`),vu(282,`br`),Kg()()(),Qc(283,`td`,22)(284,`code`,27),Sk(285,`Array<PoPopupAction>`),Kg()(),Qc(286,`td`,24),Sk(287,`-`),Kg(),Qc(288,`td`,25)(289,`em`)(290,`strong`),Sk(291,`(opcional)`),Kg()(),Qc(292,`p`),Sk(293,`Lista de a\xE7\xF5es exibidas no header do componente.
As propriedades das a\xE7\xF5es seguem a interface `),Qc(294,`code`),Sk(295,`PoPopupAction`),Kg(),Sk(296,`.`),Kg()()(),Qc(297,`tr`,28)(298,`td`,19)(299,`div`,20)(300,`span`,21),Sk(301,` p-avatar`),vu(302,`br`),Kg()()(),Qc(303,`td`,22)(304,`code`,29),Sk(305,`PoWidgetAvatar`),Kg()(),Qc(306,`td`,24),Sk(307,`-`),Kg(),Qc(308,`td`,25)(309,`em`)(310,`strong`),Sk(311,`(opcional)`),Kg()(),Qc(312,`p`),Sk(313,`Define o avatar a ser exibido à esquerda no Widget.`),Kg()()(),Qc(314,`tr`,30)(315,`td`,19)(316,`div`,20)(317,`span`,21),Sk(318,` p-background`),vu(319,`br`),Kg()()(),Qc(320,`td`,22)(321,`code`,31),Sk(322,`string`),Kg()(),Qc(323,`td`,24),Sk(324,`-`),Kg(),Qc(325,`td`,25)(326,`em`)(327,`strong`),Sk(328,`(opcional)`),Kg()(),Qc(329,`p`),Sk(330,`Define uma imagem de fundo.`),Kg(),Qc(331,`blockquote`)(332,`p`),Sk(333,`Se a imagem escolhida intervir na legibilidade do texto contido no `),Qc(334,`code`),Sk(335,`p-widget`),Kg(),Sk(336,`,
pode-se utilizar a propriedade `),Qc(337,`code`),Sk(338,`p-primary`),Kg(),Sk(339,` em conjunto para que os textos fiquem na cor branca.`),Kg()()()(),Qc(340,`tr`,32)(341,`td`,19)(342,`div`,33)(343,`span`,34),Sk(344,` (p-click)`),vu(345,`br`),Kg()()(),Qc(346,`td`,22)(347,`code`,35),Sk(348,`EventEmitter`),Kg()(),Qc(349,`td`,24),Sk(350,`-`),Kg(),Qc(351,`td`,25)(352,`em`)(353,`strong`),Sk(354,`(opcional)`),Kg()(),Qc(355,`p`),Sk(356,`Evento disparado quando o usuário clicar no componente.`),Kg(),Qc(357,`blockquote`)(358,`p`),Sk(359,`Quando este evento está em uso, uma sombra (shadow) é aplicada automaticamente ao componente.`),Kg()()()(),Qc(360,`tr`,36)(361,`td`,19)(362,`div`,20)(363,`span`,21),Sk(364,` p-danger-primary-action`),vu(365,`br`),Kg()()(),Qc(366,`td`,22)(367,`code`,37),Sk(368,`false`),Kg()(),Qc(369,`td`,24)(370,`p`)(371,`code`),Sk(372,`false`),Kg()()(),Qc(373,`td`,25)(374,`em`)(375,`strong`),Sk(376,`(opcional)`),Kg()(),Qc(377,`p`),Sk(378,`Caso verdadeiro o botão da ação `),Qc(379,`code`),Sk(380,`p-primary-label`),Kg(),Sk(381,` ativará o modo `),Qc(382,`code`),Sk(383,`danger`),Kg(),Sk(384,`.`),Kg(),Qc(385,`blockquote`)(386,`p`),Sk(387,`Incompatível com o tipo `),Qc(388,`strong`),Sk(389,`tertiary`),Kg(),Sk(390,` da propriedade `),Qc(391,`code`),Sk(392,`p-kind-primary-action`),Kg(),Sk(393,`.`),Kg()()()(),Qc(394,`tr`,38)(395,`td`,19)(396,`div`,20)(397,`span`,21),Sk(398,` p-danger-secondary-action`),vu(399,`br`),Kg()()(),Qc(400,`td`,22)(401,`code`,37),Sk(402,`false`),Kg()(),Qc(403,`td`,24)(404,`p`)(405,`code`),Sk(406,`false`),Kg()()(),Qc(407,`td`,25)(408,`em`)(409,`strong`),Sk(410,`(opcional)`),Kg()(),Qc(411,`p`),Sk(412,`Caso verdadeiro o botão da ação `),Qc(413,`code`),Sk(414,`p-secondary-label`),Kg(),Sk(415,` ativará o modo `),Qc(416,`code`),Sk(417,`danger`),Kg(),Sk(418,`.`),Kg(),Qc(419,`blockquote`)(420,`p`),Sk(421,`Incompatível com o tipo `),Qc(422,`strong`),Sk(423,`tertiary`),Kg(),Sk(424,` da propriedade `),Qc(425,`code`),Sk(426,`p-kind-primary-action`),Kg(),Sk(427,`.`),Kg()()()(),Qc(428,`tr`,39)(429,`td`,19)(430,`div`,20)(431,`span`,21),Sk(432,` p-disabled`),vu(433,`br`),Kg()()(),Qc(434,`td`,22)(435,`code`,40),Sk(436,`boolean`),Kg()(),Qc(437,`td`,24)(438,`p`)(439,`code`),Sk(440,`false`),Kg()()(),Qc(441,`td`,25)(442,`em`)(443,`strong`),Sk(444,`(opcional)`),Kg()(),Qc(445,`p`),Sk(446,`Desabilita o componente.`),Kg()()(),Qc(447,`tr`,41)(448,`td`,19)(449,`div`,20)(450,`span`,21),Sk(451,` p-height`),vu(452,`br`),Kg()()(),Qc(453,`td`,22)(454,`code`,42),Sk(455,`number`),Kg()(),Qc(456,`td`,24),Sk(457,`-`),Kg(),Qc(458,`td`,25)(459,`em`)(460,`strong`),Sk(461,`(opcional)`),Kg()(),Qc(462,`p`),Sk(463,`Define a altura do componente.`),Kg(),Qc(464,`blockquote`)(465,`p`),Sk(466,`Caso não seja informado valor, a propriedade irá assumir o tamanho do conteúdo.`),Kg()()()(),Qc(467,`tr`,43)(468,`td`,19)(469,`div`,20)(470,`span`,21),Sk(471,` p-help`),vu(472,`br`),Kg()()(),Qc(473,`td`,22)(474,`code`,31),Sk(475,`string`),Kg()(),Qc(476,`td`,24),Sk(477,`-`),Kg(),Qc(478,`td`,25)(479,`em`)(480,`strong`),Sk(481,`(opcional)`),Kg()(),Qc(482,`p`),Sk(483,`Link de ajuda incluído no menu de ações do header.`),Kg()()(),Qc(484,`tr`,44)(485,`td`,19)(486,`div`,20)(487,`span`,21),Sk(488,` p-kind-primary-action`),vu(489,`br`),Kg()()(),Qc(490,`td`,22)(491,`code`,31),Sk(492,`string`),Kg()(),Qc(493,`td`,24)(494,`p`)(495,`code`),Sk(496,`tertiary`),Kg()()(),Qc(497,`td`,25)(498,`em`)(499,`strong`),Sk(500,`(opcional)`),Kg()(),Qc(501,`p`),Sk(502,`Define o estilo do botão da ação `),Qc(503,`code`),Sk(504,`p-primary-label`),Kg(),Sk(505,`, conforme o enum `),Qc(506,`code`),Sk(507,`PoButtonKind`),Kg(),Sk(508,`.`),Kg()()(),Qc(509,`tr`,45)(510,`td`,19)(511,`div`,20)(512,`span`,21),Sk(513,` p-kind-secondary-action`),vu(514,`br`),Kg()()(),Qc(515,`td`,22)(516,`code`,31),Sk(517,`string`),Kg()(),Qc(518,`td`,24)(519,`p`)(520,`code`),Sk(521,`tertiary`),Kg()()(),Qc(522,`td`,25)(523,`em`)(524,`strong`),Sk(525,`(opcional)`),Kg()(),Qc(526,`p`),Sk(527,`Define o estilo do botão da ação `),Qc(528,`code`),Sk(529,`p-secondary-label`),Kg(),Sk(530,`, conforme o enum `),Qc(531,`code`),Sk(532,`PoButtonKind`),Kg(),Sk(533,`.`),Kg()()(),Qc(534,`tr`,46)(535,`td`,19)(536,`div`,20)(537,`span`,21),Sk(538,` p-no-shadow`),vu(539,`br`),Kg()()(),Qc(540,`td`,22)(541,`code`,40),Sk(542,`boolean`),Kg()(),Qc(543,`td`,24)(544,`p`)(545,`code`),Sk(546,`true`),Kg()()(),Qc(547,`td`,25)(548,`em`)(549,`strong`),Sk(550,`(opcional)`),Kg()(),Qc(551,`p`),Sk(552,`Desabilita a sombra do componente quando o mesmo for clicável.`),Kg(),Qc(553,`blockquote`)(554,`p`),Sk(555,`A sombra é exibida por padrão apenas quando o evento `),Qc(556,`code`),Sk(557,`p-click`),Kg(),Sk(558,` está definido.`),Kg()()()(),Qc(559,`tr`,47)(560,`td`,19)(561,`div`,33)(562,`span`,34),Sk(563,` (p-on-disabled)`),vu(564,`br`),Kg()()(),Qc(565,`td`,22)(566,`code`,35),Sk(567,`EventEmitter`),Kg()(),Qc(568,`td`,24),Sk(569,`-`),Kg(),Qc(570,`td`,25)(571,`em`)(572,`strong`),Sk(573,`(opcional)`),Kg()(),Qc(574,`p`),Sk(575,`Evento disparado quando a propriedade `),Qc(576,`code`),Sk(577,`p-disabled`),Kg(),Sk(578,` for alterada.`),Kg()()(),Qc(579,`tr`,48)(580,`td`,19)(581,`div`,20)(582,`span`,21),Sk(583,` p-primary`),vu(584,`br`),Kg()()(),Qc(585,`td`,22)(586,`code`,40),Sk(587,`boolean`),Kg()(),Qc(588,`td`,24)(589,`p`)(590,`code`),Sk(591,`false`),Kg()()(),Qc(592,`td`,25)(593,`em`)(594,`strong`),Sk(595,`(opcional)`),Kg()(),Qc(596,`p`),Sk(597,`Opção para que o `),Qc(598,`code`),Sk(599,`po-widget`),Kg(),Sk(600,` fique em destaque.`),Kg()()(),Qc(601,`tr`,49)(602,`td`,19)(603,`div`,33)(604,`span`,34),Sk(605,` (p-primary-action)`),vu(606,`br`),Kg()()(),Qc(607,`td`,22)(608,`code`,35),Sk(609,`EventEmitter`),Kg()(),Qc(610,`td`,24),Sk(611,`-`),Kg(),Qc(612,`td`,25)(613,`em`)(614,`strong`),Sk(615,`(opcional)`),Kg()(),Qc(616,`p`),Sk(617,`Evento disparado ao clicar na ação `),Qc(618,`code`),Sk(619,`p-primary-label`),Kg(),Sk(620,`.`),Kg()()(),Qc(621,`tr`,50)(622,`td`,19)(623,`div`,20)(624,`span`,21),Sk(625,` p-primary-label`),vu(626,`br`),Kg()()(),Qc(627,`td`,22)(628,`code`,31),Sk(629,`string`),Kg()(),Qc(630,`td`,24),Sk(631,`-`),Kg(),Qc(632,`td`,25)(633,`em`)(634,`strong`),Sk(635,`(opcional)`),Kg()(),Qc(636,`p`),Sk(637,`Define o label e exibe a ação primária no footer do componente.`),Kg()()(),Qc(638,`tr`,51)(639,`td`,19)(640,`div`,33)(641,`span`,34),Sk(642,` (p-secondary-action)`),vu(643,`br`),Kg()()(),Qc(644,`td`,22)(645,`code`,35),Sk(646,`EventEmitter`),Kg()(),Qc(647,`td`,24),Sk(648,`-`),Kg(),Qc(649,`td`,25)(650,`em`)(651,`strong`),Sk(652,`(opcional)`),Kg()(),Qc(653,`p`),Sk(654,`Evento disparado ao clicar na ação `),Qc(655,`code`),Sk(656,`p-secondary-label`),Kg(),Sk(657,`.`),Kg()()(),Qc(658,`tr`,52)(659,`td`,19)(660,`div`,20)(661,`span`,21),Sk(662,` p-secondary-label`),vu(663,`br`),Kg()()(),Qc(664,`td`,22)(665,`code`,31),Sk(666,`string`),Kg()(),Qc(667,`td`,24),Sk(668,`-`),Kg(),Qc(669,`td`,25)(670,`em`)(671,`strong`),Sk(672,`(opcional)`),Kg()(),Qc(673,`p`),Sk(674,`Define o label e exibe a ação secundária no footer do componente.`),Kg(),Qc(675,`blockquote`)(676,`p`),Sk(677,`Exibida apenas quando `),Qc(678,`code`),Sk(679,`p-primary-label`),Kg(),Sk(680,` estiver definida.`),Kg()()()(),Qc(681,`tr`,53)(682,`td`,19)(683,`div`,20)(684,`span`,21),Sk(685,` p-selection`),vu(686,`br`),Kg()()(),Qc(687,`td`,22)(688,`code`,54),Sk(689,`PoWidgetSelection`),Kg()(),Qc(690,`td`,24),Sk(691,`-`),Kg(),Qc(692,`td`,25)(693,`p`),Sk(694,`Uso `),Qc(695,`strong`),Sk(696,`interno`),Kg(),Sk(697,` do `),Qc(698,`code`),Sk(699,`po-list-view`),Kg(),Sk(700,`. Habilita e configura a coluna de sele\xE7\xE3o
(checkbox/radio) \xE0 esquerda do conte\xFAdo.`),Kg()()(),Qc(701,`tr`,55)(702,`td`,19)(703,`div`,33)(704,`span`,34),Sk(705,` (p-setting)`),vu(706,`br`),Kg()()(),Qc(707,`td`,22)(708,`code`,35),Sk(709,`EventEmitter`),Kg()(),Qc(710,`td`,24),Sk(711,`-`),Kg(),Qc(712,`td`,25)(713,`em`)(714,`strong`),Sk(715,`(opcional)`),Kg()(),Qc(716,`p`),Sk(717,`Evento disparado ao clicar em `),Qc(718,`strong`),Sk(719,`Configurações`),Kg(),Sk(720,` incluído no menu de ações do header.`),Kg()()(),Qc(721,`tr`,56)(722,`td`,19)(723,`div`,20)(724,`span`,21),Sk(725,` p-size`),vu(726,`br`),Kg()()(),Qc(727,`td`,22)(728,`code`,31),Sk(729,`string`),Kg()(),Qc(730,`td`,24)(731,`p`)(732,`code`),Sk(733,`medium`),Kg()()(),Qc(734,`td`,25)(735,`em`)(736,`strong`),Sk(737,`(opcional)`),Kg()(),Qc(738,`p`),Sk(739,`Define o tamanho dos botões do componente:`),Kg(),Qc(740,`ul`)(741,`li`)(742,`code`),Sk(743,`small`),Kg(),Sk(744,`: altura de 32px (disponível apenas para acessibilidade AA).`),Kg(),Qc(745,`li`)(746,`code`),Sk(747,`medium`),Kg(),Sk(748,`: altura de 44px.`),Kg()(),Qc(749,`blockquote`)(750,`p`),Sk(751,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(752,`code`),Sk(753,`medium`),Kg(),Sk(754,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(755,`a`,57),Sk(756,`po-theme`),Kg(),Sk(757,`.`),Kg()()()(),Qc(758,`tr`,58)(759,`td`,19)(760,`div`,20)(761,`span`,21),Sk(762,` p-subtitle`),vu(763,`br`),Kg()()(),Qc(764,`td`,22)(765,`code`,31),Sk(766,`string`),Kg()(),Qc(767,`td`,24),Sk(768,`-`),Kg(),Qc(769,`td`,25)(770,`p`),Sk(771,`Uso `),Qc(772,`strong`),Sk(773,`interno`),Kg(),Sk(774,` do `),Qc(775,`code`),Sk(776,`po-list-view`),Kg(),Sk(777,`. Define um subt\xEDtulo exibido no header,
abaixo do t\xEDtulo.`),Kg()()(),Qc(778,`tr`,59)(779,`td`,19)(780,`div`,20)(781,`span`,21),Sk(782,` p-tag-icon`),vu(783,`br`),Kg()()(),Qc(784,`td`,22)(785,`code`,31),Sk(786,`string `),Kg(),Qc(787,`code`,60),Sk(788,` TemplateRef<void>`),Kg()(),Qc(789,`td`,24),Sk(790,`-`),Kg(),Qc(791,`td`,25)(792,`em`)(793,`strong`),Sk(794,`(opcional)`),Kg()(),Qc(795,`p`),Sk(796,`Define o ícone exibido ao lado do label da `),Qc(797,`code`),Sk(798,`p-tag`),Kg(),Sk(799,`.`),Kg(),Qc(800,`p`),Sk(801,`É possível usar qualquer um dos ícones da `),Qc(802,`a`,61),Sk(803,`Biblioteca de ícones PO UI`),Kg(),Sk(804,`, conforme exemplo:`),Kg(),Qc(805,`pre`)(806,`code`),Sk(807,`<po-widget p-tag-icon="an an-user"></po-widget>
`),Kg()(),Qc(808,`p`),Sk(809,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Qc(810,`em`),Sk(811,`Font Awesome`),Kg(),Sk(812,`, desde que a biblioteca
esteja carregada no projeto:`),Kg(),Qc(813,`pre`)(814,`code`),Sk(815,`<po-widget p-tag-icon="fa fa-podcast"></po-widget>
`),Kg()(),Qc(816,`p`),Sk(817,`Outra opção seria a customização do ícone através do `),Qc(818,`code`),Sk(819,`TemplateRef`),Kg(),Sk(820,`, conforme exemplo abaixo:`),Kg(),Qc(821,`pre`)(822,`code`),Sk(823,`<po-widget [p-tag-icon]="template"></po-widget>

<ng-template #template>
  <i class="fa fa-podcast" style="font-size: inherit;"></i>
</ng-template>
`),Kg()(),Qc(824,`blockquote`)(825,`p`),Sk(826,`Para o ícone enquadrar corretamente, deve-se utilizar `),Qc(827,`code`),Sk(828,`font-size: inherit`),Kg(),Sk(829,` caso o ícone utilizado não aplique-o.`),Kg()()()(),Qc(830,`tr`,62)(831,`td`,19)(832,`div`,20)(833,`span`,21),Sk(834,` p-tag`),vu(835,`br`),Kg()()(),Qc(836,`td`,22)(837,`code`,31),Sk(838,`string`),Kg()(),Qc(839,`td`,24),Sk(840,`-`),Kg(),Qc(841,`td`,25)(842,`em`)(843,`strong`),Sk(844,`(opcional)`),Kg()(),Qc(845,`p`),Sk(846,`Label da tag exibida no header.`),Kg(),Qc(847,`blockquote`)(848,`p`),Sk(849,`Quando a tag atingir uma largura m\xE1xima de 15rem (240px), ser\xE1 truncado com retic\xEAncias.
O conte\xFAdo completo poder\xE1 ser visualizado ao passar o mouse sobre a tag, por meio do tooltip.`),Kg()()()(),Qc(850,`tr`,63)(851,`td`,19)(852,`div`,20)(853,`span`,21),Sk(854,` p-tag-position`),vu(855,`br`),Kg()()(),Qc(856,`td`,22)(857,`code`,31),Sk(858,`string`),Kg()(),Qc(859,`td`,24)(860,`p`)(861,`code`),Sk(862,`right`),Kg()()(),Qc(863,`td`,25)(864,`em`)(865,`strong`),Sk(866,`(opcional)`),Kg()(),Qc(867,`p`),Sk(868,`Define o posicionamento da `),Qc(869,`code`),Sk(870,`po-tag`),Kg(),Sk(871,` no cabeçalho do Widget:`),Kg(),Qc(872,`ul`)(873,`li`)(874,`code`),Sk(875,`right`),Kg(),Sk(876,`: posicionada no canto superior direito do cabeçalho.`),Kg(),Qc(877,`li`)(878,`code`),Sk(879,`top`),Kg(),Sk(880,`: posicionada à esquerda, acima do título (quando houver).`),Kg(),Qc(881,`li`)(882,`code`),Sk(883,`bottom`),Kg(),Sk(884,`: posicionada à esquerda, abaixo do título (quando houver).`),Kg()()()(),Qc(885,`tr`,64)(886,`td`,19)(887,`div`,20)(888,`span`,21),Sk(889,` p-tag-type`),vu(890,`br`),Kg()()(),Qc(891,`td`,22)(892,`code`,65),Sk(893,`PoTagType `),Kg(),Qc(894,`code`,31),Sk(895,` string`),Kg()(),Qc(896,`td`,24)(897,`p`)(898,`code`),Sk(899,`success`),Kg()()(),Qc(900,`td`,25)(901,`em`)(902,`strong`),Sk(903,`(opcional)`),Kg()(),Qc(904,`p`),Sk(905,`Define o tipo da `),Qc(906,`code`),Sk(907,`p-tag`),Kg(),Sk(908,`, conforme o enum `),Qc(909,`strong`),Sk(910,`PoTagType`),Kg(),Sk(911,`.`),Kg(),Qc(912,`p`),Sk(913,`Valores válidos:`),Kg(),Qc(914,`ul`)(915,`li`)(916,`code`),Sk(917,`success`),Kg(),Sk(918,`: cor verde utilizada para simbolizar sucesso ou êxito.`),Kg(),Qc(919,`li`)(920,`code`),Sk(921,`warning`),Kg(),Sk(922,`: cor amarela que representa aviso ou advertência.`),Kg(),Qc(923,`li`)(924,`code`),Sk(925,`danger`),Kg(),Sk(926,`: cor vermelha para erro ou aviso crítico.`),Kg(),Qc(927,`li`)(928,`code`),Sk(929,`info`),Kg(),Sk(930,`: cor azul claro que caracteriza conteúdo informativo.`),Kg(),Qc(931,`li`)(932,`code`),Sk(933,`neutral`),Kg(),Sk(934,`: cor cinza claro para uso geral.`),Kg()()()(),Qc(935,`tr`,66)(936,`td`,19)(937,`div`,20)(938,`span`,21),Sk(939,` p-title`),vu(940,`br`),Kg()()(),Qc(941,`td`,22)(942,`code`,31),Sk(943,`string`),Kg()(),Qc(944,`td`,24),Sk(945,`-`),Kg(),Qc(946,`td`,25)(947,`em`)(948,`strong`),Sk(949,`(opcional)`),Kg()(),Qc(950,`p`),Sk(951,`Título do componente.`),Kg(),Qc(952,`blockquote`)(953,`p`),Sk(954,`Quando o conte\xFAdo exceder o espa\xE7o dispon\xEDvel, o texto ser\xE1 truncado com retic\xEAncias. O conte\xFAdo completo poder\xE1
ser visualizado ao passar o mouse sobre a tag, por meio do tooltip.`),Kg()()()(),Qc(955,`tr`,67)(956,`td`,19)(957,`div`,33)(958,`span`,34),Sk(959,` (p-title-action)`),vu(960,`br`),Kg()()(),Qc(961,`td`,22)(962,`code`,35),Sk(963,`EventEmitter`),Kg()(),Qc(964,`td`,24),Sk(965,`-`),Kg(),Qc(966,`td`,25)(967,`em`)(968,`strong`),Sk(969,`(opcional)`),Kg()(),Qc(970,`p`),Sk(971,`Evento disparado ao clicar no título definido em `),Qc(972,`code`),Sk(973,`p-title`),Kg(),Sk(974,`.`),Kg()()()(),Qc(975,`h3`),Sk(976,`Interfaces`),Kg(),Qc(977,`h4`,68)(978,`code`,5),Sk(979,`PoPopupAction`),Kg()(),Qc(980,`div`,2)(981,`p`),Sk(982,`Interface para lista de ações do componente.`),Kg()(),Qc(983,`h4`,14),Sk(984,`Propriedades`),Kg(),Qc(985,`table`,15)(986,`tr`,16)(987,`th`,17),Sk(988,`Nome`),Kg(),Qc(989,`th`,17),Sk(990,`Tipo`),Kg(),Qc(991,`th`,17),Sk(992,`Descrição`),Kg()(),Qc(993,`tr`,69)(994,`td`,19)(995,`div`,20)(996,`span`,21),Sk(997,` action`),vu(998,`br`),Kg()()(),Qc(999,`td`,22)(1e3,`code`,70),Sk(1001,`Function`),Kg()(),Qc(1002,`td`,25)(1003,`em`)(1004,`strong`),Sk(1005,`(opcional)`),Kg()(),Qc(1006,`p`),Sk(1007,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),Kg(),Qc(1008,`p`),Sk(1009,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Qc(1010,`code`),Sk(1011,`subItems`),Kg(),Sk(1012,`.`),Kg(),Qc(1013,`blockquote`)(1014,`p`),Sk(1015,`Para que a função seja executada no contexto do componente, utilize `),Qc(1016,`em`),Sk(1017,`bind`),Kg(),Sk(1018,`:
`),Qc(1019,`code`),Sk(1020,`action: this.myFunction.bind(this)`),Kg()()()()(),Qc(1021,`tr`,71)(1022,`td`,19)(1023,`div`,20)(1024,`span`,21),Sk(1025,` disabled`),vu(1026,`br`),Kg()()(),Qc(1027,`td`,22)(1028,`code`,40),Sk(1029,`boolean `),Kg(),Qc(1030,`code`,70),Sk(1031,` Function`),Kg()(),Qc(1032,`td`,25)(1033,`em`)(1034,`strong`),Sk(1035,`(opcional)`),Kg()(),Qc(1036,`p`),Sk(1037,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),Kg()()(),Qc(1038,`tr`,72)(1039,`td`,19)(1040,`div`,20)(1041,`span`,21),Sk(1042,` icon`),vu(1043,`br`),Kg()()(),Qc(1044,`td`,22)(1045,`code`,31),Sk(1046,`string `),Kg(),Qc(1047,`code`,60),Sk(1048,` TemplateRef<void>`),Kg()(),Qc(1049,`td`,25)(1050,`em`)(1051,`strong`),Sk(1052,`(opcional)`),Kg()(),Qc(1053,`p`),Sk(1054,`Ícone exibido ao lado esquerdo do rótulo.`),Kg(),Qc(1055,`p`),Sk(1056,`Aceita ícones da `),Qc(1057,`a`,61),Sk(1058,`Biblioteca de ícones`),Kg(),Sk(1059,`, fontes externas (ex: Font Awesome)
ou um `),Qc(1060,`code`),Sk(1061,`TemplateRef`),Kg(),Sk(1062,` para ícones customizados.`),Kg(),Qc(1063,`pre`)(1064,`code`),Sk(1065,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),Kg()()()(),Qc(1066,`tr`,73)(1067,`td`,19)(1068,`div`,20)(1069,`span`,21),Sk(1070,` label`),vu(1071,`br`),Kg()()(),Qc(1072,`td`,22)(1073,`code`,31),Sk(1074,`string`),Kg()(),Qc(1075,`td`,25)(1076,`p`),Sk(1077,`Rótulo da ação.`),Kg(),Qc(1078,`p`),Sk(1079,`A label também pode representar o agrupador de subitens quando a ação possuir `),Qc(1080,`code`),Sk(1081,`subItems`),Kg(),Sk(1082,`.`),Kg()()(),Qc(1083,`tr`,74)(1084,`td`,19)(1085,`div`,20)(1086,`span`,21),Sk(1087,` selected`),vu(1088,`br`),Kg()()(),Qc(1089,`td`,22)(1090,`code`,40),Sk(1091,`boolean`),Kg()(),Qc(1092,`td`,25)(1093,`em`)(1094,`strong`),Sk(1095,`(opcional)`),Kg()(),Qc(1096,`p`),Sk(1097,`Define se a ação está selecionada.`),Kg()()(),Qc(1098,`tr`,75)(1099,`td`,19)(1100,`div`,20)(1101,`span`,21),Sk(1102,` separator`),vu(1103,`br`),Kg()()(),Qc(1104,`td`,22)(1105,`code`,40),Sk(1106,`boolean`),Kg()(),Qc(1107,`td`,25)(1108,`em`)(1109,`strong`),Sk(1110,`(opcional)`),Kg()(),Qc(1111,`p`),Sk(1112,`Atribui uma linha separadora acima do item.`),Kg()()(),Qc(1113,`tr`,76)(1114,`td`,19)(1115,`div`,20)(1116,`span`,21),Sk(1117,` subItems`),vu(1118,`br`),Kg()()(),Qc(1119,`td`,22)(1120,`code`,27),Sk(1121,`Array<PoPopupAction>`),Kg()(),Qc(1122,`td`,25)(1123,`em`)(1124,`strong`),Sk(1125,`(opcional)`),Kg()(),Qc(1126,`p`),Sk(1127,`Define uma lista de subitens para criação de menus aninhados.`),Kg(),Qc(1128,`pre`)(1129,`code`),Sk(1130,`{ label: 'Relat\xF3rios', subItems: [{ label: 'Mensal' }, { label: 'Anual' }] }
`),Kg()(),Qc(1131,`p`),Sk(1132,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),Kg(),Qc(1133,`blockquote`)(1134,`p`),Sk(1135,`As propriedades `),Qc(1136,`code`),Sk(1137,`disabled`),Kg(),Sk(1138,`, `),Qc(1139,`code`),Sk(1140,`type`),Kg(),Sk(1141,` e `),Qc(1142,`code`),Sk(1143,`visible`),Kg(),Sk(1144,` não são aplicadas visualmente ao item agrupador.`),Kg()(),Qc(1145,`blockquote`)(1146,`p`),Sk(1147,`Quando `),Qc(1148,`code`),Sk(1149,`url`),Kg(),Sk(1150,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),Kg()(),Qc(1151,`blockquote`)(1152,`p`),Sk(1153,`Em subníveis aninhados, o `),Qc(1154,`code`),Sk(1155,`icon`),Kg(),Sk(1156,` do agrupador é substituído pelo indicador de navegação (seta).`),Kg()()()(),Qc(1157,`tr`,77)(1158,`td`,19)(1159,`div`,20)(1160,`span`,21),Sk(1161,` subItemsLazy`),vu(1162,`br`),Kg()()(),Qc(1163,`td`,22)(1164,`code`,78),Sk(1165,`(item: PoPopupAction) => Observable<Array<PoPopupAction>>`),Kg()(),Qc(1166,`td`,25)(1167,`em`)(1168,`strong`),Sk(1169,`(opcional)`),Kg()(),Qc(1170,`p`),Sk(1171,`Define o carregamento assíncrono (lazy loading) dos subitens de um agrupador.`),Kg(),Qc(1172,`p`),Sk(1173,`Recebe o item agrupador e retorna um `),Qc(1174,`code`),Sk(1175,`Observable<Array<PoPopupAction>>`),Kg(),Sk(1176,`. A requisi\xE7\xE3o \xE9 disparada
`),Qc(1177,`strong`),Sk(1178,`apenas`),Kg(),Sk(1179,` no momento da expansão (clique ou atalho de teclado), exibindo placeholders com `),Qc(1180,`code`),Sk(1181,`po-skeleton`),Kg(),Sk(1182,`
enquanto os dados s\xE3o carregados:`),Kg(),Qc(1183,`pre`)(1184,`code`),Sk(1185,`{
  label: 'Relat\xF3rios',
  subItemsLazy: (item) => this.reportService.getReports(item)
}
`),Kg()(),Qc(1186,`blockquote`)(1187,`p`),Sk(1188,`O resultado \xE9 armazenado em cache ap\xF3s o primeiro carregamento bem-sucedido.
Em caso de falha, \xE9 exibida uma mensagem com a op\xE7\xE3o de tentar novamente.`),Kg()(),Qc(1189,`p`),Sk(1190,`Ao definir esta propriedade, o item exibirá um ícone indicador de subnível.`),Kg()()(),Qc(1191,`tr`,79)(1192,`td`,19)(1193,`div`,20)(1194,`span`,21),Sk(1195,` type`),vu(1196,`br`),Kg()()(),Qc(1197,`td`,22)(1198,`code`,31),Sk(1199,`string`),Kg()(),Qc(1200,`td`,25)(1201,`em`)(1202,`strong`),Sk(1203,`(opcional)`),Kg()(),Qc(1204,`p`),Sk(1205,`Define a cor do item.`),Kg(),Qc(1206,`p`),Sk(1207,`Valores válidos:`),Kg(),Qc(1208,`ul`)(1209,`li`)(1210,`code`),Sk(1211,`default`),Kg()(),Qc(1212,`li`)(1213,`code`),Sk(1214,`danger`),Kg()()()()(),Qc(1215,`tr`,80)(1216,`td`,19)(1217,`div`,20)(1218,`span`,21),Sk(1219,` url`),vu(1220,`br`),Kg()()(),Qc(1221,`td`,22)(1222,`code`,31),Sk(1223,`string`),Kg()(),Qc(1224,`td`,25)(1225,`em`)(1226,`strong`),Sk(1227,`(opcional)`),Kg()(),Qc(1228,`p`),Sk(1229,`URL para redirecionamento. Aceita rotas internas e links externos.`),Kg(),Qc(1230,`p`),Sk(1231,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Qc(1232,`code`),Sk(1233,`url`),Kg(),Sk(1234,` é informada em um agrupador, o clique `),Qc(1235,`strong`),Sk(1236,`não abrirá os subitens`),Kg(),Sk(1237,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),Kg(),Qc(1238,`blockquote`)(1239,`p`),Sk(1240,`Quando informada, tem prioridade sobre a propriedade `),Qc(1241,`code`),Sk(1242,`action`),Kg(),Sk(1243,`.`),Kg()()()(),Qc(1244,`tr`,81)(1245,`td`,19)(1246,`div`,20)(1247,`span`,21),Sk(1248,` visible`),vu(1249,`br`),Kg()()(),Qc(1250,`td`,22)(1251,`code`,40),Sk(1252,`boolean `),Kg(),Qc(1253,`code`,70),Sk(1254,` Function`),Kg()(),Qc(1255,`td`,25)(1256,`em`)(1257,`strong`),Sk(1258,`(opcional)`),Kg()(),Qc(1259,`p`),Sk(1260,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),Kg()()()(),Qc(1261,`h4`,82)(1262,`code`,5),Sk(1263,`PoWidgetAvatar`),Kg()(),Qc(1264,`div`,2)(1265,`p`),Sk(1266,`Interface para definição do avatar no `),Qc(1267,`code`),Sk(1268,`po-widget`),Kg(),Sk(1269,`.`),Kg()(),Qc(1270,`h4`,14),Sk(1271,`Propriedades`),Kg(),Qc(1272,`table`,15)(1273,`tr`,16)(1274,`th`,17),Sk(1275,`Nome`),Kg(),Qc(1276,`th`,17),Sk(1277,`Tipo`),Kg(),Qc(1278,`th`,17),Sk(1279,`Descrição`),Kg()(),Qc(1280,`tr`,83)(1281,`td`,19)(1282,`div`,20)(1283,`span`,21),Sk(1284,` customTemplate`),vu(1285,`br`),Kg()()(),Qc(1286,`td`,22)(1287,`code`,23),Sk(1288,`TemplateRef<any>`),Kg()(),Qc(1289,`td`,25)(1290,`em`)(1291,`strong`),Sk(1292,`(opcional)`),Kg()(),Qc(1293,`p`),Sk(1294,`Permite a criação de template customizado para o avatar`),Kg(),Qc(1295,`pre`)(1296,`code`),Sk(1297,`<po-widget
 [p-avatar]="{ customTemplate: customAvatar }"
/>

<ng-template #customAvatar>
  ...
</ng-template>
`),Kg()()()(),Qc(1298,`tr`,84)(1299,`td`,19)(1300,`div`,20)(1301,`span`,21),Sk(1302,` size`),vu(1303,`br`),Kg()()(),Qc(1304,`td`,22)(1305,`code`,31),Sk(1306,`string`),Kg()(),Qc(1307,`td`,25)(1308,`em`)(1309,`strong`),Sk(1310,`(opcional)`),Kg()(),Qc(1311,`p`),Sk(1312,`Tamanho de exibição do componente `),Qc(1313,`code`),Sk(1314,`po-avatar`),Kg(),Sk(1315,`.`),Kg(),Qc(1316,`p`),Sk(1317,`Valores válidos:`),Kg(),Qc(1318,`ul`)(1319,`li`)(1320,`code`),Sk(1321,`xs`),Kg(),Sk(1322,` (24x24)`),Kg(),Qc(1323,`li`)(1324,`code`),Sk(1325,`sm`),Kg(),Sk(1326,` (32x32)`),Kg(),Qc(1327,`li`)(1328,`code`),Sk(1329,`md`),Kg(),Sk(1330,` (64x64)`),Kg(),Qc(1331,`li`)(1332,`code`),Sk(1333,`lg`),Kg(),Sk(1334,` (96x96)`),Kg(),Qc(1335,`li`)(1336,`code`),Sk(1337,`xl`),Kg(),Sk(1338,` (144x144)`),Kg()()()(),Qc(1339,`tr`,85)(1340,`td`,19)(1341,`div`,20)(1342,`span`,21),Sk(1343,` src`),vu(1344,`br`),Kg()()(),Qc(1345,`td`,22)(1346,`code`,31),Sk(1347,`string`),Kg()(),Qc(1348,`td`,25)(1349,`em`)(1350,`strong`),Sk(1351,`(opcional)`),Kg()(),Qc(1352,`p`),Sk(1353,`Fonte da imagem que pode ser um caminho local (`),Qc(1354,`code`),Sk(1355,`./assets/images/logo-black-small.png`),Kg(),Sk(1356,`)
ou um servidor externo (`),Qc(1357,`code`),Sk(1358,`https://po-ui.io/assets/images/logo-black-small.png`),Kg(),Sk(1359,`).`),Kg()()(),Qc(1360,`tr`,86)(1361,`td`,19)(1362,`div`,20)(1363,`span`,21),Sk(1364,` widthCustomTemplate`),vu(1365,`br`),Kg()()(),Qc(1366,`td`,22)(1367,`code`,31),Sk(1368,`string`),Kg()(),Qc(1369,`td`,25)(1370,`em`)(1371,`strong`),Sk(1372,`(opcional)`),Kg()(),Qc(1373,`p`),Sk(1374,`Define a largura em porcentagem do `),Qc(1375,`code`),Sk(1376,`customTemplate`),Kg(),Sk(1377,`.`),Kg(),Qc(1378,`p`),Sk(1379,`O valor máximo aceito é `),Qc(1380,`code`),Sk(1381,`50%`),Kg(),Sk(1382,`.`),Kg()()()(),Qc(1383,`h3`),Sk(1384,`Enums`),Kg(),Qc(1385,`h4`,87)(1386,`code`,5),Sk(1387,`PoButtonKind`),Kg()(),Qc(1388,`div`,2)(1389,`p`),Sk(1390,`Estilos disponíveis do button.`),Kg()(),Qc(1391,`h4`,14),Sk(1392,`Propriedades`),Kg(),Qc(1393,`table`,15)(1394,`tr`,16)(1395,`th`,17),Sk(1396,`Nome`),Kg(),Qc(1397,`th`,17),Sk(1398,`Descrição`),Kg()(),Qc(1399,`tr`,88)(1400,`td`,19)(1401,`div`,20)(1402,`span`,21),Sk(1403,` primary`),vu(1404,`br`),Kg()()(),Qc(1405,`td`,25)(1406,`p`),Sk(1407,`Estilo primário, usado para ações principais que requerem maior destaque.`),Kg()()(),Qc(1408,`tr`,89)(1409,`td`,19)(1410,`div`,20)(1411,`span`,21),Sk(1412,` secondary`),vu(1413,`br`),Kg()()(),Qc(1414,`td`,25)(1415,`p`),Sk(1416,`Estilo secundário, usado como padrão, para ações comuns.`),Kg()()(),Qc(1417,`tr`,90)(1418,`td`,19)(1419,`div`,20)(1420,`span`,21),Sk(1421,` tertiary`),vu(1422,`br`),Kg()()(),Qc(1423,`td`,25)(1424,`p`),Sk(1425,`Estilo terciário, ideal para ações menos importantes, sem fundo preenchido.`),Kg()()(),Qc(1426,`tr`,91)(1427,`td`,19)(1428,`div`,20)(1429,`span`,21),Sk(1430,` glow`),vu(1431,`br`),Kg()()(),Qc(1432,`td`,25)(1433,`p`),Sk(1434,`Estilo com brilho animado que percorre a borda do botão, usado para destacar uma chamada para ação.`),Kg(),Qc(1435,`blockquote`)(1436,`p`),Sk(1437,`Incompatível com a propriedade `),Qc(1438,`code`),Sk(1439,`p-danger`),Kg(),Sk(1440,`.`),Kg()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function lt(o,W){if(o&1){let p=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(p);let i=ek();return U_(i.changeTab(`web`))}),vu(1,`sample-po-widget-basic-view`)(2,`sample-po-widget-labs-view`)(3,`sample-po-widget-finance-dashboard-view`)(4,`sample-po-widget-card-view`),Kg()}if(o&2){let p=ek();Rb(`p-active`,p.activeTab===`web`)}}var rt=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Widget`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,i){l&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,lt,5,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),vu(4,`sample-po-widget-doc`),Kg()()()),l&2&&(Rb(`p-actions`,i.actions),wg(2),VO(i.hidePoWebSample?-1:2),wg(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,De,Ae,ke,Le,Fe],encapsulation:2,changeDetection:1})}return o})()}];var ze=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[GV.forChild(rt),GV]})}return o})();var Xt=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[M,ze]})}return o})();export{Xt as DocPoWidgetModule};