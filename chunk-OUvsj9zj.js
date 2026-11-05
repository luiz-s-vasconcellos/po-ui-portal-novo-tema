import{$r as RK,Ai as Zn,Br as MK,C as G4,Ca as o0,Ci as Xx,Et as Yoe,Fa as rb,Ga as vo,Hi as bx,Ia as rg,Ii as ab,In as wP,Jr as Ok,Ka as vx,La as sb,Li as b,Mi as __,Mn as ure,N as Ize,Nr as I1,Oa as pe,Pa as r0,Qa as xF,Ra as uO,Sa as nu,Sn as ri,Tr as Fx,Ua as v_,Ut as ea,Wn as yae,Xa as wg,Yn as zu,Z as P4,Za as wx,_r as Dx,_t as Vze,a as $oe,aa as ir,br as Ex,ca as jc,di as UE,ea as h,eo as xO,et as Qoe,fr as DO,ha as lO,hi as VE,ii as SK,io as yo,ir as Ax,ji as _O,ln as lre,lr as CO,oa as iu,oi as Sn,ri as SF,rr as Ag,sr as Bx,ut as U4,wt as Xoe,x as Ff,ya as mt,za as ue}from"./chunk-CtaZqRb_.js";import{n as P,t as M}from"./main-ZQ7GH27Y.js";var we=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-widget-basic`]],standalone:!1,decls:1,vars:0,template:function(l,i){l&1&&nu(0,`po-widget`)},dependencies:[yae],encapsulation:2,changeDetection:1})}return o})();var ze=o=>({"docs-sample-code-tabs":o});var Pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-widget-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Widget Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-widget-basic/sample-po-widget-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-widget></po-widget>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-widget-basic/sample-po-widget-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-widget-basic',
  templateUrl: './sample-po-widget-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoWidgetBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-widget-basic`),wg(),nu(23,`hr`)),l&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,ze,i.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,we],encapsulation:2,changeDetection:1})}return o})();var Ve=(o,k)=>({src:o,size:k});var _e=(()=>{class o{poNotification=h(zu);action;background;content;height;help;primaryLabel;properties;secondaryLabel;tagIcon;tagLabel;title;actionPopup={action:null,label:``};myActions=[];tagPosition;avatarSrc;avatarSize;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`primaryWidget`,label:`Primary Widget`},{value:`small`,label:`small`}];iconList=[{label:`an an-bluetooth`,value:`an an-bluetooth`},{label:`an an-heart`,value:`an an-heart`},{label:`an an-lightbulb`,value:`an an-lightbulb`},{label:`an an-star`,value:`an an-star`},{label:`an an-gear`,value:`an an-gear`},{label:`an an-globe`,value:`an an-globe`},{label:`fa fa-address-card`,value:`fa fa-address-card`},{label:`fa fa-bell`,value:`fa fa-bell`}];listTagPosition=[{label:`right`,value:`right`},{label:`top`,value:`top`},{label:`bottom`,value:`bottom`}];listAvatarSize=[{label:`xs`,value:`xs`},{label:`sm`,value:`sm`},{label:`md`,value:`md`},{label:`lg`,value:`lg`},{label:`xl`,value:`xl`}];ngOnInit(){this.restore()}changeAction(p){this.action=p}addAction(p){this.myActions=[...this.myActions,{label:p.label,action:this.showAction.bind(this,p.action)}],this.actionPopup={action:null,label:``}}restore(){this.background=``,this.action=``,this.content=``,this.height=void 0,this.help=``,this.title=void 0,this.primaryLabel=void 0,this.properties=[],this.myActions=[],this.secondaryLabel=void 0,this.tagLabel=void 0,this.tagIcon=void 0,this.actionPopup={action:null,label:``},this.tagPosition=void 0,this.avatarSrc=void 0,this.avatarSize=void 0}showAction(p){this.poNotification.success(`Action clicked: ${p}`)}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-widget-labs`]],standalone:!1,decls:32,vars:39,consts:[[`f`,`ngForm`],[1,`po-row`],[1,`po-sm-12`,3,`p-on-disabled`,`p-primary-action`,`p-secondary-action`,`p-setting`,`p-title-action`,`p-background`,`p-disabled`,`p-size`,`p-height`,`p-help`,`p-primary`,`p-primary-label`,`p-secondary-label`,`p-tag`,`p-tag-icon`,`p-tag-position`,`p-title`,`p-actions`,`p-avatar`],[`p-label`,`Action`,1,`po-md-6`,3,`p-value`],[`name`,`title`,`p-label`,`Title`,`p-clean`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-label`,`Help`,`p-clean`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-label`,`Height`,`p-clean`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Action`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`background`,`p-clean`,``,`p-help`,`Ex.: 'http://image.com'; '../../image.png'`,`p-label`,`Background`,`p-clean`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`primaryLabel`,`p-label`,`Primary Label`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryLabel`,`p-label`,`Secondary Label`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[1,`po-row`,`sample-widget-align-end`],[`name`,`tagLabel`,`p-label`,`Label Tag`,`p-clean`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-4`,`po-mt-2`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`tagPosition`,`p-label`,`Tag Position`,1,`po-md-4`,`po-mt-2`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`avatarSrc`,`p-label`,`Avatar Src`,`p-help`,`https://picsum.photos/144/144`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`avatarSize`,`p-label`,`Avatar Size`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`3`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`content`,`p-label`,`Content`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(l,i){if(l&1){let m=Ax();jc(0,`div`,1)(1,`po-widget`,2),mt(`p-on-disabled`,function(){return i.changeAction(`p-on-disabled`)})(`p-primary-action`,function(){return i.changeAction(`p-primary-action`)})(`p-secondary-action`,function(){return i.changeAction(`p-secondary-action`)})(`p-setting`,function(){return i.changeAction(`p-setting`)})(`p-title-action`,function(){return i.changeAction(`p-title-action`)}),lO(2),wg()(),nu(3,`po-divider`),jc(4,`div`,1),nu(5,`po-info`,3),wg(),nu(6,`po-divider`),jc(7,`form`,null,0)(9,`po-input`,4),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.title,r)||(i.title=r),__(r)}),wg(),jc(10,`po-input`,5),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.help,r)||(i.help=r),__(r)}),wg(),jc(11,`po-number`,6),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.height,r)||(i.height=r),__(r)}),wg(),jc(12,`div`,1)(13,`po-input`,7),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.actionPopup.action,r)||(i.actionPopup.action=r),__(r)}),wg(),jc(14,`po-input`,8),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.actionPopup.label,r)||(i.actionPopup.label=r),__(r)}),wg()(),jc(15,`div`,1)(16,`po-button`,9),mt(`p-click`,function(){return i.addAction(i.actionPopup)}),wg()(),jc(17,`po-input`,10),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.background,r)||(i.background=r),__(r)}),wg(),jc(18,`po-input`,11),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.primaryLabel,r)||(i.primaryLabel=r),__(r)}),wg(),jc(19,`po-input`,12),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.secondaryLabel,r)||(i.secondaryLabel=r),__(r)}),wg(),jc(20,`div`,13)(21,`po-input`,14),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.tagLabel,r)||(i.tagLabel=r),__(r)}),wg(),jc(22,`po-select`,15),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.tagIcon,r)||(i.tagIcon=r),__(r)}),wg(),jc(23,`po-select`,16),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.tagPosition,r)||(i.tagPosition=r),__(r)}),wg()(),jc(24,`div`,1)(25,`po-input`,17),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.avatarSrc,r)||(i.avatarSrc=r),__(r)}),wg(),jc(26,`po-select`,18),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.avatarSize,r)||(i.avatarSize=r),__(r)}),wg()(),jc(27,`div`,1)(28,`po-checkbox-group`,19),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.properties,r)||(i.properties=r),__(r)}),wg()(),jc(29,`po-textarea`,20),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.content,r)||(i.content=r),__(r)}),wg(),jc(30,`div`,1)(31,`po-button`,21),mt(`p-click`,function(){return i.restore()}),wg()()()}l&2&&(rg(),UE(`p-background`,i.background)(`p-disabled`,i.properties.includes(`disabled`))(`p-size`,i.properties.includes(`small`)?`small`:`medium`)(`p-height`,i.height)(`p-help`,i.help)(`p-primary`,i.properties.includes(`primaryWidget`))(`p-primary-label`,i.primaryLabel)(`p-secondary-label`,i.secondaryLabel)(`p-tag`,i.tagLabel)(`p-tag-icon`,i.tagIcon)(`p-tag-position`,i.tagPosition)(`p-title`,i.title)(`p-actions`,i.myActions)(`p-avatar`,CO(36,Ve,i.avatarSrc,i.avatarSize)),rg(),Ag(` `,i.content,` `),rg(3),UE(`p-value`,i.action),rg(4),sb(`ngModel`,i.title),o0(),rg(),sb(`ngModel`,i.help),o0(),rg(),sb(`ngModel`,i.height),o0(),rg(2),sb(`ngModel`,i.actionPopup.action),o0(),rg(),sb(`ngModel`,i.actionPopup.label),o0(),rg(2),UE(`p-disabled`,!i.actionPopup.action||!i.actionPopup.label),rg(),sb(`ngModel`,i.background),o0(),rg(),sb(`ngModel`,i.primaryLabel),o0(),rg(),sb(`ngModel`,i.secondaryLabel),o0(),rg(2),sb(`ngModel`,i.tagLabel),o0(),rg(),sb(`ngModel`,i.tagIcon),UE(`p-options`,i.iconList),o0(),rg(),sb(`ngModel`,i.tagPosition),UE(`p-options`,i.listTagPosition),o0(),rg(2),sb(`ngModel`,i.avatarSrc),o0(),rg(),sb(`ngModel`,i.avatarSize),UE(`p-options`,i.listAvatarSize),o0(),rg(2),sb(`ngModel`,i.properties),UE(`p-options`,i.propertiesOptions),o0(),rg(),sb(`ngModel`,i.content),o0())},dependencies:[RK,SK,MK,xF,SF,ri,Ff,P4,G4,$oe,Yoe,Qoe,Xoe,yae],styles:[`.sample-widget-align-end[_ngcontent-%COMP%]{align-items:flex-end}`],changeDetection:1})}return o})();var Oe=o=>({"docs-sample-code-tabs":o});var De=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-widget-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Widget Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-widget-labs/sample-po-widget-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-row">
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
    { { content }}
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-widget-labs/sample-po-widget-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()(),jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),lO(24,`sample-po-widget-labs/sample-po-widget-labs.component.css`),wg(),jc(25,`pre`,11),lO(26,`.sample-widget-align-end {
  align-items: flex-end;
}
`),wg()()()()(),jc(27,`div`,12),nu(28,`sample-po-widget-labs`),wg(),nu(29,`hr`)),l&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Oe,i.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,_e],encapsulation:2,changeDetection:1})}return o})();var Ue=[`detailsModal`];var Te=(()=>{class o{poNotification=h(zu);detailsModalElement;paymentLink=`https://www.google.com.br/search?q=days+to+payment`;itemsDetails;titleDetailsModal;typeChart=`line`;myActions=[{label:`Detail`,icon:`an an-align-top`,action:this.showAction.bind(this)},{label:`Remove`,icon:`an an-trash`,type:`danger`,action:this.showAction.bind(this)}];options=[{value:`poMultiselect1`,label:`Admin`},{value:`poMultiselect2`,label:`User`}];columnsDetails=[{property:`dateUpdate`,label:`Date update`,type:`date`},{property:`statement`,label:`Statement`,type:`currency`}];itemsAccountDetails=[{dateUpdate:`03-05-2018`,statement:`-56.45`},{dateUpdate:`02-05-2018`,statement:`-14.99`},{dateUpdate:`02-05-2018`,statement:`-657.56`},{dateUpdate:`12-05-2017`,statement:`3547.29`}];itemsSavingsDetails=[{dateUpdate:`03-05-2018`,statement:`-300`},{dateUpdate:`03-05-2018`,statement:`2000`},{dateUpdate:`02-05-2018`,statement:`1500`},{dateUpdate:`02-05-2018`,statement:`-200`},{dateUpdate:`12-05-2017`,statement:`2000`}];openModal(p){switch(p){case`savings`:this.titleDetailsModal=`Revenue - Details`,this.itemsDetails=this.itemsSavingsDetails,this.detailsModalElement.open();break;case`account`:this.titleDetailsModal=`Total savings - Details`,this.itemsDetails=this.itemsAccountDetails,this.detailsModalElement.open()}}openExternalLink(p){window.open(p,`_blank`)}showAction(){this.poNotification.success(`Action clicked`)}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-widget-finance-dashboard`]],viewQuery:function(l,i){if(l&1&&iu(Ue,7),l&2){let m;yo(m=vo())&&(i.detailsModalElement=m.first)}},standalone:!1,decls:43,vars:13,consts:[[`detailsModal`,``],[1,`po-row`,`sample-finance-row-gap`],[`p-help`,`https://github.com/po-ui/po-angular/stargazers`,`p-title`,`Days to Payment`,`p-tag`,`Sales`,`p-tag-icon`,`an an-arrow-circle-up`,1,`po-lg-6`,3,`p-height`],[1,`sample-finance-actions`],[`p-label`,`Cancel`,`p-danger`,``],[`p-label`,`Confirm`,3,`p-click`],[`p-title`,`Total savings`,1,`po-lg-3`,3,`p-click`,`p-height`],[1,`po-font-subtitle`,`po-text-center`],[1,`po-text-center`],[`p-disabled`,``,`p-primary-label`,`Details`,`p-secondary-label`,`Edit`,`p-title`,`Total checking account`,1,`po-lg-3`,3,`p-primary-action`,`p-height`],[1,`po-text-center`,`sample-finance-total-value`],[`p-background`,`../../../assets/graphics/sales-statistics.png`,1,`po-lg-4`,3,`p-height`],[1,`po-text-center`,`sample-finance-padding-inline`],[1,`sample-finance-overlay-badge`],[1,`sample-finance-overlay-text`],[1,`sample-finance-padding-inline`],[`name`,`multiselect`,3,`p-options`],[`p-title`,`Most used payment type`,1,`po-lg-4`,3,`p-actions`,`p-height`],[`p-primary-label`,`Details`,`p-tag`,`Revenue`,`p-tag-icon`,`an an-money`,`p-title`,`Highest revenue in the month considering Marketing and Sales`,1,`po-lg-4`,3,`p-primary-action`,`p-height`,`p-primary`],[3,`p-title`],[3,`p-columns`,`p-items`,`p-hide-table-search`]],template:function(l,i){l&1&&(jc(0,`div`,1)(1,`div`,1)(2,`po-widget`,2)(3,`div`),lO(4,`Sales order`),wg(),jc(5,`div`),lO(6,`Scheduled to: `),jc(7,`strong`),lO(8,`05/04/2018`),wg()(),jc(9,`div`,3),nu(10,`po-button`,4),jc(11,`po-button`,5),mt(`p-click`,function(){return i.openExternalLink(`https://github.com/po-ui/po-angular/stargazers`)}),wg()()(),jc(12,`po-widget`,6),mt(`p-click`,function(){return i.openModal(`account`)}),jc(13,`div`,7),lO(14,`$2.818,29`),wg(),jc(15,`div`,8),lO(16,`Last updated at 18:34`),wg()(),jc(17,`po-widget`,9),mt(`p-primary-action`,function(){return i.openModal(`account`)}),jc(18,`div`,10),lO(19,`$5.000,00`),wg(),jc(20,`div`,8),lO(21,`Last updated at 08:20`),wg()()(),jc(22,`div`,1)(23,`po-widget`,11)(24,`div`,12)(25,`div`,13)(26,`strong`,14),lO(27,`Enter the user routine`),wg()()(),jc(28,`div`,15),nu(29,`po-multiselect`,16),wg()(),jc(30,`po-widget`,17)(31,`div`,7),lO(32,`Credit card`),wg(),jc(33,`div`,8),lO(34,`MasterCard - 5500 0000 0000 0004`),wg()(),jc(35,`po-widget`,18),mt(`p-primary-action`,function(){return i.openModal(`savings`)}),jc(36,`div`,7),lO(37,`$2.000,00`),wg(),jc(38,`div`,8),lO(39,`05/03/2018`),wg()()()(),jc(40,`po-modal`,19,0),nu(42,`po-table`,20),wg()),l&2&&(rg(2),UE(`p-height`,190),rg(10),UE(`p-height`,190),rg(5),UE(`p-height`,190),rg(6),UE(`p-height`,180),rg(6),UE(`p-options`,i.options),rg(),UE(`p-actions`,i.myActions)(`p-height`,180),rg(5),UE(`p-height`,180)(`p-primary`,!0),rg(5),UE(`p-title`,i.titleDetailsModal),rg(2),UE(`p-columns`,i.columnsDetails)(`p-items`,i.itemsDetails)(`p-hide-table-search`,!1))},dependencies:[ri,wP,ea,U4,yae],styles:[`.sample-finance-row-gap[_ngcontent-%COMP%]{row-gap:1rem}.sample-finance-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:.5rem}.sample-finance-total-value[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:.5rem}.sample-finance-padding-inline[_ngcontent-%COMP%]{padding-inline:.5rem}.sample-finance-overlay-badge[_ngcontent-%COMP%]{margin-bottom:.5rem;display:inline-block;background-color:#000;padding:.5rem;border-radius:3px;opacity:.85}.sample-finance-overlay-text[_ngcontent-%COMP%]{color:#fff}`],changeDetection:1})}return o})();var He=o=>({"docs-sample-code-tabs":o});var Ae=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-widget-finance-dashboard-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Widget - Finance dashboard`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-row sample-finance-row-gap">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()(),jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),lO(24,`sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.css`),wg(),jc(25,`pre`,11),lO(26,`.sample-finance-row-gap {
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
`),wg()()()()(),jc(27,`div`,12),nu(28,`sample-po-widget-finance-dashboard`),wg(),nu(29,`hr`)),l&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,He,i.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,Te],encapsulation:2,changeDetection:1})}return o})();var Je=o=>({customTemplate:o,widthCustomTemplate:`40%`});var Ge=()=>({hideExpand:!0,hideExportCsv:!0,hideExportImage:!0,hideTableDetails:!0});var Qe=o=>({header:o});var Ke=()=>({label:`Angular`,data:100});var Xe=()=>({label:`React`,data:10});var Ye=(o,k)=>[o,k];function Ze(o,k){o&1&&nu(0,`po-chart`,8),o&2&&UE(`p-options`,DO(3,Qe,_O(2,Ge)))(`p-series`,CO(7,Ye,_O(5,Ke),_O(6,Xe)))}function $e(o,k){if(o&1&&(jc(0,`li`),lO(1),wg()),o&2){let p=k.$implicit;rg(),rb(p)}}var Me=(()=>{class o{poModal;help;label;technologies=[`Angular`,`Typescript`,`React`,`Babel`,`Jasmine`,`Vue`];value;ngOnInit(){this.showAngular()}showAngular(){this.label=`Angular`,this.value=`Angular is a javascript framework mantained by Google and successor of the Angular.js.
    In this latest version, we can use all the features of the framework, for example: data bindings, components,
    modules, typescript and much more.`,this.help=`https://angular.io/`}showJavascriptTechnologies(){this.poModal.open()}showTypescript(){this.label=`Typescript`,this.value=`Typescript allows to write JavaScript in an easier way.
    Typescript is a super set of JavaScript that compiles for simple JavaScript. Any browser.
    Any host. Any operating system. Open code.`,this.help=`https://www.typescriptlang.org/`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-widget-card`]],viewQuery:function(l,i){if(l&1&&iu(ea,7),l&2){let m;yo(m=vo())&&(i.poModal=m.first)}},standalone:!1,decls:24,vars:6,consts:[[`avatar`,``],[1,`po-row`],[`p-height`,`300`,`p-primary-label`,`Angular`,`p-secondary-label`,`Typescript`,`p-title`,`Javascript technologies`,1,`po-lg-6`,3,`p-primary-action`,`p-secondary-action`,`p-title-action`,`p-help`],[3,`p-label`,`p-value`],[`p-title`,`Apps Enterprise`,`p-tag`,`Angular v17+`,`p-tag-position`,`top`,`p-height`,`300`,`p-help`,`https://angular.dev/`,1,`po-lg-6`,3,`p-avatar`],[1,`po-pl-3`,`po-pt-1`],[`p-title`,`Javascript Technologies`],[1,`po-ml-3`],[`p-height`,`260`,3,`p-options`,`p-series`]],template:function(l,i){if(l&1&&(jc(0,`div`,1)(1,`po-widget`,2),mt(`p-primary-action`,function(){return i.showAngular()})(`p-secondary-action`,function(){return i.showTypescript()})(`p-title-action`,function(){return i.showJavascriptTechnologies()}),nu(2,`po-info`,3),wg(),jc(3,`po-widget`,4)(4,`div`),lO(5,` Angular: The default choice for large-scale applications, such as banking and government systems, due to its structured architecture and native TypeScript support. `),jc(6,`div`,5)(7,`ul`)(8,`li`),lO(9,`Out-of-the-Box`),wg(),jc(10,`li`),lO(11,`Standardized and Opinion-Based Architecture`),wg(),jc(12,`li`),lO(13,`Next Generation Reactivity (Signals)`),wg(),jc(14,`li`),lO(15,`Focus on Enterprise and Security`),wg()()()(),VE(16,Ze,1,10,`ng-template`,null,0,xO),wg()(),jc(18,`po-modal`,6),lO(19,` There are several Javascript technologies that help us in the construction of fast and dynamic screens, among them we can mention: `),jc(20,`div`,7)(21,`ul`),bx(22,$e,2,1,`li`,null,Ex),wg()()()),l&2){let m=Bx(17);rg(),UE(`p-help`,i.help),rg(),UE(`p-label`,i.label)(`p-value`,i.value),rg(),UE(`p-avatar`,DO(4,Je,m)),rg(19),wx(i.technologies)}},dependencies:[Ize,Xoe,ea,yae],encapsulation:2,changeDetection:1})}return o})();var tt=o=>({"docs-sample-code-tabs":o});var We=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-widget-card-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Widget - Card`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-widget-card/sample-po-widget-card.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-row">
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
        <li>{ { technology }}</li>
      }
    </ul>
  </div>
</po-modal>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-widget-card/sample-po-widget-card.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-widget-card`),wg(),nu(23,`hr`)),l&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,tt,i.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,Me],encapsulation:2,changeDetection:1})}return o})();var ke=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-widget-doc`]],standalone:!1,decls:1441,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/guides/grid-system`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/name-role-value`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/keyboard`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<any>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`pan`,``,1,`docs-api-property-type`,`PoWidgetAvatar`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`false`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoWidgetSelection`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`PoTagType`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`(item:`,`PoPopupAction)`,`=>`,`Observable<Array<PoPopupAction>>`]],template:function(l,i){l&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoWidgetModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do componente po-widget`),wg()(),jc(7,`h3`,3),lO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),lO(11,`PoWidgetComponent`),wg()(),jc(12,`div`,2)(13,`p`),lO(14,`O componente `),jc(15,`code`),lO(16,`po-widget`),wg(),lO(17,` é recomendado para exibição de `),jc(18,`em`),lO(19,`dashboards`),wg(),lO(20,`, podendo ser utilizado
para incluir v\xE1rios tipos de conte\xFAdo como: gr\xE1ficos, tabelas, grids e imagens.`),wg(),jc(21,`p`),lO(22,`Al\xE9m da exibi\xE7\xE3o de conte\xFAdos, este componente possibilita adicionar a\xE7\xF5es e um link
para ajuda, como tamb\xE9m possibilita ser utilizado com ou sem sombra.`),wg(),jc(23,`p`),lO(24,`Para controlar sua largura, é possível utilizar o `),jc(25,`a`,6),lO(26,`Grid System`),wg(),lO(27,` para um maior
controle de seu redimensionamento, assim possibilitando o tratamento para diferentes resolu\xE7\xF5es.`),wg(),jc(28,`h4`),lO(29,`Boas práticas`),wg(),jc(30,`p`),lO(31,`Utilize um tamanho mínimo de largura de aproximadamente `),jc(32,`code`),lO(33,`18.75rem`),wg(),lO(34,` no componente.`),wg(),jc(35,`h4`),lO(36,`Acessibilidade tratada no componente`),wg(),jc(37,`p`),lO(38,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas. São elas:`),wg(),jc(39,`ul`)(40,`li`),lO(41,`Utiliza medidas relativas, para se adequar às preferências e necessidades de quem for utilizar o sistema.`),wg(),jc(42,`li`),lO(43,`Desenvolvido com uso de controles padrões HTML, o que permite a identificação na interface por tecnologias assistivas. (WCAG `),jc(44,`a`,7),lO(45,`4.1.2: Name, Role, Value`),wg(),lO(46,`)`),wg(),jc(47,`li`),lO(48,`O foco é visível e possui uma espessura superior a 2 pixels CSS, não ficando escondido por outros elementos da tela. (WCAG `),jc(49,`a`,8),lO(50,`2.4.12: Focus Appearance`),wg(),lO(51,`)`),wg(),jc(52,`li`),lO(53,`Quando selecionável, prevê interação por teclado, podendo ser selecionado através da tecla space (WCAG `),jc(54,`a`,9),lO(55,`2.4.1 - Keyboard`),wg(),lO(56,`)`),wg()(),jc(57,`h4`),lO(58,`Tokens customizáveis`),wg(),jc(59,`p`),lO(60,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(61,`blockquote`)(62,`p`),lO(63,`Para maiores informações, acesse o guia `),jc(64,`a`,10),lO(65,`Personalizando o Tema Padrão com Tokens CSS`),wg(),lO(66,`.`),wg()(),jc(67,`table`)(68,`thead`)(69,`tr`)(70,`th`),lO(71,`Propriedade`),wg(),jc(72,`th`),lO(73,`Descrição`),wg(),jc(74,`th`),lO(75,`Valor Padrão`),wg()()(),jc(76,`tbody`)(77,`tr`)(78,`td`)(79,`strong`),lO(80,`Default Values`),wg()(),nu(81,`td`)(82,`td`),wg(),jc(83,`tr`)(84,`td`)(85,`code`),lO(86,`--font-family`),wg()(),jc(87,`td`),lO(88,`Família tipográfica usada`),wg(),jc(89,`td`)(90,`code`),lO(91,`var(--font-family-theme) `),wg()()(),jc(92,`tr`)(93,`td`)(94,`code`),lO(95,`--font-size`),wg()(),jc(96,`td`),lO(97,`Tamanho da fonte`),wg(),jc(98,`td`)(99,`code`),lO(100,`var(--font-size-sm)`),wg()()(),jc(101,`tr`)(102,`td`)(103,`code`),lO(104,`--font-weight`),wg()(),jc(105,`td`),lO(106,`Peso da fonte`),wg(),jc(107,`td`)(108,`code`),lO(109,`var(--font-weight-bold)`),wg()()(),jc(110,`tr`)(111,`td`)(112,`code`),lO(113,`--font-color`),wg()(),jc(114,`td`),lO(115,`Cor da fonte`),wg(),jc(116,`td`)(117,`code`),lO(118,`var(--color-neutral-dark-95)`),wg()()(),jc(119,`tr`)(120,`td`)(121,`code`),lO(122,`--padding-header`),wg()(),jc(123,`td`),lO(124,`Preenchimento do header`),wg(),jc(125,`td`)(126,`code`),lO(127,`var(--spacing-sm) var(--spacing-sm) var(--spacing-xs) var(--spacing-sm)`),wg()()(),jc(128,`tr`)(129,`td`)(130,`code`),lO(131,`--padding-body`),wg()(),jc(132,`td`),lO(133,`Preenchimento do body`),wg(),jc(134,`td`)(135,`code`),lO(136,`var(--spacing-xs) var(--spacing-sm) var(--spacing-xs) var(--spacing-sm)`),wg()()(),jc(137,`tr`)(138,`td`)(139,`code`),lO(140,`--padding-avatar`),wg()(),jc(141,`td`),lO(142,`Preenchimento do avatar`),wg(),jc(143,`td`)(144,`code`),lO(145,`var(--spacing-sm) 0 var(--spacing-xs) var(--spacing-sm)`),wg()()(),jc(146,`tr`)(147,`td`)(148,`code`),lO(149,`--padding-footer`),wg()(),jc(150,`td`),lO(151,`Preenchimento do footer`),wg(),jc(152,`td`)(153,`code`),lO(154,`var(--spacing-xs) var(--spacing-sm) var(--spacing-sm) var(--spacing-sm)`),wg()()(),jc(155,`tr`)(156,`td`)(157,`code`),lO(158,`--border-radius`),wg()(),jc(159,`td`),lO(160,`Contém o valor do raio dos cantos do elemento\xA0`),wg(),jc(161,`td`)(162,`code`),lO(163,`var(--border-radius-md)`),wg()()(),jc(164,`tr`)(165,`td`)(166,`code`),lO(167,`--border-width`),wg()(),jc(168,`td`),lO(169,`Contém o valor da largura dos cantos do elemento\xA0`),wg(),jc(170,`td`)(171,`code`),lO(172,`var(--border-width-sm)`),wg()()(),jc(173,`tr`)(174,`td`)(175,`code`),lO(176,`--border-color`),wg()(),jc(177,`td`),lO(178,`Cor da borda`),wg(),jc(179,`td`)(180,`code`),lO(181,`var(--color-neutral-light-20)`),wg()()(),jc(182,`tr`)(183,`td`)(184,`code`),lO(185,`--background`),wg()(),jc(186,`td`),lO(187,`Cor de background`),wg(),jc(188,`td`)(189,`code`),lO(190,`var(--color-neutral-light-00)`),wg()()(),jc(191,`tr`)(192,`td`)(193,`code`),lO(194,`--shadow`),wg()(),jc(195,`td`),lO(196,`Contém o valor da sombra do elemento`),wg(),jc(197,`td`)(198,`code`),lO(199,`var(--shadow-md)`),wg()()(),jc(200,`tr`)(201,`td`)(202,`strong`),lO(203,`Hover`),wg()(),nu(204,`td`)(205,`td`),wg(),jc(206,`tr`)(207,`td`)(208,`code`),lO(209,`--border-color-hover`),wg()(),jc(210,`td`),lO(211,`Cor da borda no estado hover`),wg(),jc(212,`td`)(213,`code`),lO(214,`var(--color-action-hover)`),wg()()(),jc(215,`tr`)(216,`td`)(217,`strong`),lO(218,`Focused`),wg()(),nu(219,`td`)(220,`td`),wg(),jc(221,`tr`)(222,`td`)(223,`code`),lO(224,`--color-focused`),wg()(),jc(225,`td`),lO(226,`Cor principal no estado de focus`),wg(),jc(227,`td`)(228,`code`),lO(229,`var(--color-action-default)`),wg()()(),jc(230,`tr`)(231,`td`)(232,`code`),lO(233,`--outline-color-focused`),wg(),lO(234,` \xA0`),wg(),jc(235,`td`),lO(236,`Cor do outline do estado de focus`),wg(),jc(237,`td`)(238,`code`),lO(239,`var(--color-action-focus)`),wg()()()()()(),jc(240,`div`,11)(241,`h4`,12),lO(242,`Seletor`),wg(),jc(243,`pre`,13),lO(244,`<po-widget
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
`),wg()(),jc(245,`h4`,14),lO(246,`Propriedades`),wg(),jc(247,`table`,15)(248,`tr`,16)(249,`th`,17),lO(250,`Nome`),wg(),jc(251,`th`,17),lO(252,`Tipo`),wg(),jc(253,`th`,17),lO(254,`Padrão`),wg(),jc(255,`th`,17),lO(256,`Descrição`),wg()(),jc(257,`tr`,18)(258,`td`,19)(259,`div`,20)(260,`span`,21),lO(261,` p-action-template`),nu(262,`br`),wg()()(),jc(263,`td`,22)(264,`code`,23),lO(265,`TemplateRef<any>`),wg()(),jc(266,`td`,24),lO(267,`-`),wg(),jc(268,`td`,25)(269,`p`),lO(270,`Uso `),jc(271,`strong`),lO(272,`interno`),wg(),lO(273,` do `),jc(274,`code`),lO(275,`po-list-view`),wg(),lO(276,`. Template renderizado como coluna de a\xE7\xE3o \xE0
direita do conte\xFAdo, centralizado verticalmente (em vez do header).`),wg()()(),jc(277,`tr`,18)(278,`td`,19)(279,`div`,20)(280,`span`,21),lO(281,` p-actions`),nu(282,`br`),wg()()(),jc(283,`td`,22)(284,`code`,26),lO(285,`Array<PoPopupAction>`),wg()(),jc(286,`td`,24),lO(287,`-`),wg(),jc(288,`td`,25)(289,`em`)(290,`strong`),lO(291,`(opcional)`),wg()(),jc(292,`p`),lO(293,`Lista de a\xE7\xF5es exibidas no header do componente.
As propriedades das a\xE7\xF5es seguem a interface `),jc(294,`code`),lO(295,`PoPopupAction`),wg(),lO(296,`.`),wg()()(),jc(297,`tr`,18)(298,`td`,19)(299,`div`,20)(300,`span`,21),lO(301,` p-avatar`),nu(302,`br`),wg()()(),jc(303,`td`,22)(304,`code`,27),lO(305,`PoWidgetAvatar`),wg()(),jc(306,`td`,24),lO(307,`-`),wg(),jc(308,`td`,25)(309,`em`)(310,`strong`),lO(311,`(opcional)`),wg()(),jc(312,`p`),lO(313,`Define o avatar a ser exibido à esquerda no Widget.`),wg()()(),jc(314,`tr`,18)(315,`td`,19)(316,`div`,20)(317,`span`,21),lO(318,` p-background`),nu(319,`br`),wg()()(),jc(320,`td`,22)(321,`code`,28),lO(322,`string`),wg()(),jc(323,`td`,24),lO(324,`-`),wg(),jc(325,`td`,25)(326,`em`)(327,`strong`),lO(328,`(opcional)`),wg()(),jc(329,`p`),lO(330,`Define uma imagem de fundo.`),wg(),jc(331,`blockquote`)(332,`p`),lO(333,`Se a imagem escolhida intervir na legibilidade do texto contido no `),jc(334,`code`),lO(335,`p-widget`),wg(),lO(336,`,
pode-se utilizar a propriedade `),jc(337,`code`),lO(338,`p-primary`),wg(),lO(339,` em conjunto para que os textos fiquem na cor branca.`),wg()()()(),jc(340,`tr`,18)(341,`td`,19)(342,`div`,29)(343,`span`,30),lO(344,` (p-click)`),nu(345,`br`),wg()()(),jc(346,`td`,22)(347,`code`,31),lO(348,`EventEmitter`),wg()(),jc(349,`td`,24),lO(350,`-`),wg(),jc(351,`td`,25)(352,`em`)(353,`strong`),lO(354,`(opcional)`),wg()(),jc(355,`p`),lO(356,`Evento disparado quando o usuário clicar no componente.`),wg(),jc(357,`blockquote`)(358,`p`),lO(359,`Quando este evento está em uso, uma sombra (shadow) é aplicada automaticamente ao componente.`),wg()()()(),jc(360,`tr`,18)(361,`td`,19)(362,`div`,20)(363,`span`,21),lO(364,` p-danger-primary-action`),nu(365,`br`),wg()()(),jc(366,`td`,22)(367,`code`,32),lO(368,`false`),wg()(),jc(369,`td`,24)(370,`p`)(371,`code`),lO(372,`false`),wg()()(),jc(373,`td`,25)(374,`em`)(375,`strong`),lO(376,`(opcional)`),wg()(),jc(377,`p`),lO(378,`Caso verdadeiro o botão da ação `),jc(379,`code`),lO(380,`p-primary-label`),wg(),lO(381,` ativará o modo `),jc(382,`code`),lO(383,`danger`),wg(),lO(384,`.`),wg(),jc(385,`blockquote`)(386,`p`),lO(387,`Incompatível com o tipo `),jc(388,`strong`),lO(389,`tertiary`),wg(),lO(390,` da propriedade `),jc(391,`code`),lO(392,`p-kind-primary-action`),wg(),lO(393,`.`),wg()()()(),jc(394,`tr`,18)(395,`td`,19)(396,`div`,20)(397,`span`,21),lO(398,` p-danger-secondary-action`),nu(399,`br`),wg()()(),jc(400,`td`,22)(401,`code`,32),lO(402,`false`),wg()(),jc(403,`td`,24)(404,`p`)(405,`code`),lO(406,`false`),wg()()(),jc(407,`td`,25)(408,`em`)(409,`strong`),lO(410,`(opcional)`),wg()(),jc(411,`p`),lO(412,`Caso verdadeiro o botão da ação `),jc(413,`code`),lO(414,`p-secondary-label`),wg(),lO(415,` ativará o modo `),jc(416,`code`),lO(417,`danger`),wg(),lO(418,`.`),wg(),jc(419,`blockquote`)(420,`p`),lO(421,`Incompatível com o tipo `),jc(422,`strong`),lO(423,`tertiary`),wg(),lO(424,` da propriedade `),jc(425,`code`),lO(426,`p-kind-primary-action`),wg(),lO(427,`.`),wg()()()(),jc(428,`tr`,18)(429,`td`,19)(430,`div`,20)(431,`span`,21),lO(432,` p-disabled`),nu(433,`br`),wg()()(),jc(434,`td`,22)(435,`code`,33),lO(436,`boolean`),wg()(),jc(437,`td`,24)(438,`p`)(439,`code`),lO(440,`false`),wg()()(),jc(441,`td`,25)(442,`em`)(443,`strong`),lO(444,`(opcional)`),wg()(),jc(445,`p`),lO(446,`Desabilita o componente.`),wg()()(),jc(447,`tr`,18)(448,`td`,19)(449,`div`,20)(450,`span`,21),lO(451,` p-height`),nu(452,`br`),wg()()(),jc(453,`td`,22)(454,`code`,34),lO(455,`number`),wg()(),jc(456,`td`,24),lO(457,`-`),wg(),jc(458,`td`,25)(459,`em`)(460,`strong`),lO(461,`(opcional)`),wg()(),jc(462,`p`),lO(463,`Define a altura do componente.`),wg(),jc(464,`blockquote`)(465,`p`),lO(466,`Caso não seja informado valor, a propriedade irá assumir o tamanho do conteúdo.`),wg()()()(),jc(467,`tr`,18)(468,`td`,19)(469,`div`,20)(470,`span`,21),lO(471,` p-help`),nu(472,`br`),wg()()(),jc(473,`td`,22)(474,`code`,28),lO(475,`string`),wg()(),jc(476,`td`,24),lO(477,`-`),wg(),jc(478,`td`,25)(479,`em`)(480,`strong`),lO(481,`(opcional)`),wg()(),jc(482,`p`),lO(483,`Link de ajuda incluído no menu de ações do header.`),wg()()(),jc(484,`tr`,18)(485,`td`,19)(486,`div`,20)(487,`span`,21),lO(488,` p-kind-primary-action`),nu(489,`br`),wg()()(),jc(490,`td`,22)(491,`code`,28),lO(492,`string`),wg()(),jc(493,`td`,24)(494,`p`)(495,`code`),lO(496,`tertiary`),wg()()(),jc(497,`td`,25)(498,`em`)(499,`strong`),lO(500,`(opcional)`),wg()(),jc(501,`p`),lO(502,`Define o estilo do botão da ação `),jc(503,`code`),lO(504,`p-primary-label`),wg(),lO(505,`, conforme o enum `),jc(506,`code`),lO(507,`PoButtonKind`),wg(),lO(508,`.`),wg()()(),jc(509,`tr`,18)(510,`td`,19)(511,`div`,20)(512,`span`,21),lO(513,` p-kind-secondary-action`),nu(514,`br`),wg()()(),jc(515,`td`,22)(516,`code`,28),lO(517,`string`),wg()(),jc(518,`td`,24)(519,`p`)(520,`code`),lO(521,`tertiary`),wg()()(),jc(522,`td`,25)(523,`em`)(524,`strong`),lO(525,`(opcional)`),wg()(),jc(526,`p`),lO(527,`Define o estilo do botão da ação `),jc(528,`code`),lO(529,`p-secondary-label`),wg(),lO(530,`, conforme o enum `),jc(531,`code`),lO(532,`PoButtonKind`),wg(),lO(533,`.`),wg()()(),jc(534,`tr`,18)(535,`td`,19)(536,`div`,20)(537,`span`,21),lO(538,` p-no-shadow`),nu(539,`br`),wg()()(),jc(540,`td`,22)(541,`code`,33),lO(542,`boolean`),wg()(),jc(543,`td`,24)(544,`p`)(545,`code`),lO(546,`true`),wg()()(),jc(547,`td`,25)(548,`em`)(549,`strong`),lO(550,`(opcional)`),wg()(),jc(551,`p`),lO(552,`Desabilita a sombra do componente quando o mesmo for clicável.`),wg(),jc(553,`blockquote`)(554,`p`),lO(555,`A sombra é exibida por padrão apenas quando o evento `),jc(556,`code`),lO(557,`p-click`),wg(),lO(558,` está definido.`),wg()()()(),jc(559,`tr`,18)(560,`td`,19)(561,`div`,29)(562,`span`,30),lO(563,` (p-on-disabled)`),nu(564,`br`),wg()()(),jc(565,`td`,22)(566,`code`,31),lO(567,`EventEmitter`),wg()(),jc(568,`td`,24),lO(569,`-`),wg(),jc(570,`td`,25)(571,`em`)(572,`strong`),lO(573,`(opcional)`),wg()(),jc(574,`p`),lO(575,`Evento disparado quando a propriedade `),jc(576,`code`),lO(577,`p-disabled`),wg(),lO(578,` for alterada.`),wg()()(),jc(579,`tr`,18)(580,`td`,19)(581,`div`,20)(582,`span`,21),lO(583,` p-primary`),nu(584,`br`),wg()()(),jc(585,`td`,22)(586,`code`,33),lO(587,`boolean`),wg()(),jc(588,`td`,24)(589,`p`)(590,`code`),lO(591,`false`),wg()()(),jc(592,`td`,25)(593,`em`)(594,`strong`),lO(595,`(opcional)`),wg()(),jc(596,`p`),lO(597,`Opção para que o `),jc(598,`code`),lO(599,`po-widget`),wg(),lO(600,` fique em destaque.`),wg()()(),jc(601,`tr`,18)(602,`td`,19)(603,`div`,29)(604,`span`,30),lO(605,` (p-primary-action)`),nu(606,`br`),wg()()(),jc(607,`td`,22)(608,`code`,31),lO(609,`EventEmitter`),wg()(),jc(610,`td`,24),lO(611,`-`),wg(),jc(612,`td`,25)(613,`em`)(614,`strong`),lO(615,`(opcional)`),wg()(),jc(616,`p`),lO(617,`Evento disparado ao clicar na ação `),jc(618,`code`),lO(619,`p-primary-label`),wg(),lO(620,`.`),wg()()(),jc(621,`tr`,18)(622,`td`,19)(623,`div`,20)(624,`span`,21),lO(625,` p-primary-label`),nu(626,`br`),wg()()(),jc(627,`td`,22)(628,`code`,28),lO(629,`string`),wg()(),jc(630,`td`,24),lO(631,`-`),wg(),jc(632,`td`,25)(633,`em`)(634,`strong`),lO(635,`(opcional)`),wg()(),jc(636,`p`),lO(637,`Define o label e exibe a ação primária no footer do componente.`),wg()()(),jc(638,`tr`,18)(639,`td`,19)(640,`div`,29)(641,`span`,30),lO(642,` (p-secondary-action)`),nu(643,`br`),wg()()(),jc(644,`td`,22)(645,`code`,31),lO(646,`EventEmitter`),wg()(),jc(647,`td`,24),lO(648,`-`),wg(),jc(649,`td`,25)(650,`em`)(651,`strong`),lO(652,`(opcional)`),wg()(),jc(653,`p`),lO(654,`Evento disparado ao clicar na ação `),jc(655,`code`),lO(656,`p-secondary-label`),wg(),lO(657,`.`),wg()()(),jc(658,`tr`,18)(659,`td`,19)(660,`div`,20)(661,`span`,21),lO(662,` p-secondary-label`),nu(663,`br`),wg()()(),jc(664,`td`,22)(665,`code`,28),lO(666,`string`),wg()(),jc(667,`td`,24),lO(668,`-`),wg(),jc(669,`td`,25)(670,`em`)(671,`strong`),lO(672,`(opcional)`),wg()(),jc(673,`p`),lO(674,`Define o label e exibe a ação secundária no footer do componente.`),wg(),jc(675,`blockquote`)(676,`p`),lO(677,`Exibida apenas quando `),jc(678,`code`),lO(679,`p-primary-label`),wg(),lO(680,` estiver definida.`),wg()()()(),jc(681,`tr`,18)(682,`td`,19)(683,`div`,20)(684,`span`,21),lO(685,` p-selection`),nu(686,`br`),wg()()(),jc(687,`td`,22)(688,`code`,35),lO(689,`PoWidgetSelection`),wg()(),jc(690,`td`,24),lO(691,`-`),wg(),jc(692,`td`,25)(693,`p`),lO(694,`Uso `),jc(695,`strong`),lO(696,`interno`),wg(),lO(697,` do `),jc(698,`code`),lO(699,`po-list-view`),wg(),lO(700,`. Habilita e configura a coluna de sele\xE7\xE3o
(checkbox/radio) \xE0 esquerda do conte\xFAdo.`),wg()()(),jc(701,`tr`,18)(702,`td`,19)(703,`div`,29)(704,`span`,30),lO(705,` (p-setting)`),nu(706,`br`),wg()()(),jc(707,`td`,22)(708,`code`,31),lO(709,`EventEmitter`),wg()(),jc(710,`td`,24),lO(711,`-`),wg(),jc(712,`td`,25)(713,`em`)(714,`strong`),lO(715,`(opcional)`),wg()(),jc(716,`p`),lO(717,`Evento disparado ao clicar em `),jc(718,`strong`),lO(719,`Configurações`),wg(),lO(720,` incluído no menu de ações do header.`),wg()()(),jc(721,`tr`,18)(722,`td`,19)(723,`div`,20)(724,`span`,21),lO(725,` p-size`),nu(726,`br`),wg()()(),jc(727,`td`,22)(728,`code`,28),lO(729,`string`),wg()(),jc(730,`td`,24)(731,`p`)(732,`code`),lO(733,`medium`),wg()()(),jc(734,`td`,25)(735,`em`)(736,`strong`),lO(737,`(opcional)`),wg()(),jc(738,`p`),lO(739,`Define o tamanho dos botões do componente:`),wg(),jc(740,`ul`)(741,`li`)(742,`code`),lO(743,`small`),wg(),lO(744,`: altura de 32px (disponível apenas para acessibilidade AA).`),wg(),jc(745,`li`)(746,`code`),lO(747,`medium`),wg(),lO(748,`: altura de 44px.`),wg()(),jc(749,`blockquote`)(750,`p`),lO(751,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(752,`code`),lO(753,`medium`),wg(),lO(754,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(755,`a`,36),lO(756,`po-theme`),wg(),lO(757,`.`),wg()()()(),jc(758,`tr`,18)(759,`td`,19)(760,`div`,20)(761,`span`,21),lO(762,` p-subtitle`),nu(763,`br`),wg()()(),jc(764,`td`,22)(765,`code`,28),lO(766,`string`),wg()(),jc(767,`td`,24),lO(768,`-`),wg(),jc(769,`td`,25)(770,`p`),lO(771,`Uso `),jc(772,`strong`),lO(773,`interno`),wg(),lO(774,` do `),jc(775,`code`),lO(776,`po-list-view`),wg(),lO(777,`. Define um subt\xEDtulo exibido no header,
abaixo do t\xEDtulo.`),wg()()(),jc(778,`tr`,18)(779,`td`,19)(780,`div`,20)(781,`span`,21),lO(782,` p-tag-icon`),nu(783,`br`),wg()()(),jc(784,`td`,22)(785,`code`,28),lO(786,`string `),wg(),jc(787,`code`,37),lO(788,` TemplateRef<void>`),wg()(),jc(789,`td`,24),lO(790,`-`),wg(),jc(791,`td`,25)(792,`em`)(793,`strong`),lO(794,`(opcional)`),wg()(),jc(795,`p`),lO(796,`Define o ícone exibido ao lado do label da `),jc(797,`code`),lO(798,`p-tag`),wg(),lO(799,`.`),wg(),jc(800,`p`),lO(801,`É possível usar qualquer um dos ícones da `),jc(802,`a`,38),lO(803,`Biblioteca de ícones PO UI`),wg(),lO(804,`, conforme exemplo:`),wg(),jc(805,`pre`)(806,`code`),lO(807,`<po-widget p-tag-icon="an an-user"></po-widget>
`),wg()(),jc(808,`p`),lO(809,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),jc(810,`em`),lO(811,`Font Awesome`),wg(),lO(812,`, desde que a biblioteca
esteja carregada no projeto:`),wg(),jc(813,`pre`)(814,`code`),lO(815,`<po-widget p-tag-icon="fa fa-podcast"></po-widget>
`),wg()(),jc(816,`p`),lO(817,`Outra opção seria a customização do ícone através do `),jc(818,`code`),lO(819,`TemplateRef`),wg(),lO(820,`, conforme exemplo abaixo:`),wg(),jc(821,`pre`)(822,`code`),lO(823,`<po-widget [p-tag-icon]="template"></po-widget>

<ng-template #template>
  <i class="fa fa-podcast" style="font-size: inherit;"></i>
</ng-template>
`),wg()(),jc(824,`blockquote`)(825,`p`),lO(826,`Para o ícone enquadrar corretamente, deve-se utilizar `),jc(827,`code`),lO(828,`font-size: inherit`),wg(),lO(829,` caso o ícone utilizado não aplique-o.`),wg()()()(),jc(830,`tr`,18)(831,`td`,19)(832,`div`,20)(833,`span`,21),lO(834,` p-tag`),nu(835,`br`),wg()()(),jc(836,`td`,22)(837,`code`,28),lO(838,`string`),wg()(),jc(839,`td`,24),lO(840,`-`),wg(),jc(841,`td`,25)(842,`em`)(843,`strong`),lO(844,`(opcional)`),wg()(),jc(845,`p`),lO(846,`Label da tag exibida no header.`),wg(),jc(847,`blockquote`)(848,`p`),lO(849,`Quando a tag atingir uma largura m\xE1xima de 15rem (240px), ser\xE1 truncado com retic\xEAncias.
O conte\xFAdo completo poder\xE1 ser visualizado ao passar o mouse sobre a tag, por meio do tooltip.`),wg()()()(),jc(850,`tr`,18)(851,`td`,19)(852,`div`,20)(853,`span`,21),lO(854,` p-tag-position`),nu(855,`br`),wg()()(),jc(856,`td`,22)(857,`code`,28),lO(858,`string`),wg()(),jc(859,`td`,24)(860,`p`)(861,`code`),lO(862,`right`),wg()()(),jc(863,`td`,25)(864,`em`)(865,`strong`),lO(866,`(opcional)`),wg()(),jc(867,`p`),lO(868,`Define o posicionamento da `),jc(869,`code`),lO(870,`po-tag`),wg(),lO(871,` no cabeçalho do Widget:`),wg(),jc(872,`ul`)(873,`li`)(874,`code`),lO(875,`right`),wg(),lO(876,`: posicionada no canto superior direito do cabeçalho.`),wg(),jc(877,`li`)(878,`code`),lO(879,`top`),wg(),lO(880,`: posicionada à esquerda, acima do título (quando houver).`),wg(),jc(881,`li`)(882,`code`),lO(883,`bottom`),wg(),lO(884,`: posicionada à esquerda, abaixo do título (quando houver).`),wg()()()(),jc(885,`tr`,18)(886,`td`,19)(887,`div`,20)(888,`span`,21),lO(889,` p-tag-type`),nu(890,`br`),wg()()(),jc(891,`td`,22)(892,`code`,39),lO(893,`PoTagType `),wg(),jc(894,`code`,28),lO(895,` string`),wg()(),jc(896,`td`,24)(897,`p`)(898,`code`),lO(899,`success`),wg()()(),jc(900,`td`,25)(901,`em`)(902,`strong`),lO(903,`(opcional)`),wg()(),jc(904,`p`),lO(905,`Define o tipo da `),jc(906,`code`),lO(907,`p-tag`),wg(),lO(908,`, conforme o enum `),jc(909,`strong`),lO(910,`PoTagType`),wg(),lO(911,`.`),wg(),jc(912,`p`),lO(913,`Valores válidos:`),wg(),jc(914,`ul`)(915,`li`)(916,`code`),lO(917,`success`),wg(),lO(918,`: cor verde utilizada para simbolizar sucesso ou êxito.`),wg(),jc(919,`li`)(920,`code`),lO(921,`warning`),wg(),lO(922,`: cor amarela que representa aviso ou advertência.`),wg(),jc(923,`li`)(924,`code`),lO(925,`danger`),wg(),lO(926,`: cor vermelha para erro ou aviso crítico.`),wg(),jc(927,`li`)(928,`code`),lO(929,`info`),wg(),lO(930,`: cor azul claro que caracteriza conteúdo informativo.`),wg(),jc(931,`li`)(932,`code`),lO(933,`neutral`),wg(),lO(934,`: cor cinza claro para uso geral.`),wg()()()(),jc(935,`tr`,18)(936,`td`,19)(937,`div`,20)(938,`span`,21),lO(939,` p-title`),nu(940,`br`),wg()()(),jc(941,`td`,22)(942,`code`,28),lO(943,`string`),wg()(),jc(944,`td`,24),lO(945,`-`),wg(),jc(946,`td`,25)(947,`em`)(948,`strong`),lO(949,`(opcional)`),wg()(),jc(950,`p`),lO(951,`Título do componente.`),wg(),jc(952,`blockquote`)(953,`p`),lO(954,`Quando o conte\xFAdo exceder o espa\xE7o dispon\xEDvel, o texto ser\xE1 truncado com retic\xEAncias. O conte\xFAdo completo poder\xE1
ser visualizado ao passar o mouse sobre a tag, por meio do tooltip.`),wg()()()(),jc(955,`tr`,18)(956,`td`,19)(957,`div`,29)(958,`span`,30),lO(959,` (p-title-action)`),nu(960,`br`),wg()()(),jc(961,`td`,22)(962,`code`,31),lO(963,`EventEmitter`),wg()(),jc(964,`td`,24),lO(965,`-`),wg(),jc(966,`td`,25)(967,`em`)(968,`strong`),lO(969,`(opcional)`),wg()(),jc(970,`p`),lO(971,`Evento disparado ao clicar no título definido em `),jc(972,`code`),lO(973,`p-title`),wg(),lO(974,`.`),wg()()()(),jc(975,`h3`),lO(976,`Interfaces`),wg(),jc(977,`h4`,40)(978,`code`,5),lO(979,`PoPopupAction`),wg()(),jc(980,`div`,2)(981,`p`),lO(982,`Interface para lista de ações do componente.`),wg()(),jc(983,`h4`,14),lO(984,`Propriedades`),wg(),jc(985,`table`,15)(986,`tr`,16)(987,`th`,17),lO(988,`Nome`),wg(),jc(989,`th`,17),lO(990,`Tipo`),wg(),jc(991,`th`,17),lO(992,`Descrição`),wg()(),jc(993,`tr`,18)(994,`td`,19)(995,`div`,20)(996,`span`,21),lO(997,` action`),nu(998,`br`),wg()()(),jc(999,`td`,22)(1e3,`code`,41),lO(1001,`Function`),wg()(),jc(1002,`td`,25)(1003,`em`)(1004,`strong`),lO(1005,`(opcional)`),wg()(),jc(1006,`p`),lO(1007,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),wg(),jc(1008,`p`),lO(1009,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),jc(1010,`code`),lO(1011,`subItems`),wg(),lO(1012,`.`),wg(),jc(1013,`blockquote`)(1014,`p`),lO(1015,`Para que a função seja executada no contexto do componente, utilize `),jc(1016,`em`),lO(1017,`bind`),wg(),lO(1018,`:
`),jc(1019,`code`),lO(1020,`action: this.myFunction.bind(this)`),wg()()()()(),jc(1021,`tr`,18)(1022,`td`,19)(1023,`div`,20)(1024,`span`,21),lO(1025,` disabled`),nu(1026,`br`),wg()()(),jc(1027,`td`,22)(1028,`code`,33),lO(1029,`boolean `),wg(),jc(1030,`code`,41),lO(1031,` Function`),wg()(),jc(1032,`td`,25)(1033,`em`)(1034,`strong`),lO(1035,`(opcional)`),wg()(),jc(1036,`p`),lO(1037,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),wg()()(),jc(1038,`tr`,18)(1039,`td`,19)(1040,`div`,20)(1041,`span`,21),lO(1042,` icon`),nu(1043,`br`),wg()()(),jc(1044,`td`,22)(1045,`code`,28),lO(1046,`string `),wg(),jc(1047,`code`,37),lO(1048,` TemplateRef<void>`),wg()(),jc(1049,`td`,25)(1050,`em`)(1051,`strong`),lO(1052,`(opcional)`),wg()(),jc(1053,`p`),lO(1054,`Ícone exibido ao lado esquerdo do rótulo.`),wg(),jc(1055,`p`),lO(1056,`Aceita ícones da `),jc(1057,`a`,38),lO(1058,`Biblioteca de ícones`),wg(),lO(1059,`, fontes externas (ex: Font Awesome)
ou um `),jc(1060,`code`),lO(1061,`TemplateRef`),wg(),lO(1062,` para ícones customizados.`),wg(),jc(1063,`pre`)(1064,`code`),lO(1065,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),wg()()()(),jc(1066,`tr`,18)(1067,`td`,19)(1068,`div`,20)(1069,`span`,21),lO(1070,` label`),nu(1071,`br`),wg()()(),jc(1072,`td`,22)(1073,`code`,28),lO(1074,`string`),wg()(),jc(1075,`td`,25)(1076,`p`),lO(1077,`Rótulo da ação.`),wg(),jc(1078,`p`),lO(1079,`A label também pode representar o agrupador de subitens quando a ação possuir `),jc(1080,`code`),lO(1081,`subItems`),wg(),lO(1082,`.`),wg()()(),jc(1083,`tr`,18)(1084,`td`,19)(1085,`div`,20)(1086,`span`,21),lO(1087,` selected`),nu(1088,`br`),wg()()(),jc(1089,`td`,22)(1090,`code`,33),lO(1091,`boolean`),wg()(),jc(1092,`td`,25)(1093,`em`)(1094,`strong`),lO(1095,`(opcional)`),wg()(),jc(1096,`p`),lO(1097,`Define se a ação está selecionada.`),wg()()(),jc(1098,`tr`,18)(1099,`td`,19)(1100,`div`,20)(1101,`span`,21),lO(1102,` separator`),nu(1103,`br`),wg()()(),jc(1104,`td`,22)(1105,`code`,33),lO(1106,`boolean`),wg()(),jc(1107,`td`,25)(1108,`em`)(1109,`strong`),lO(1110,`(opcional)`),wg()(),jc(1111,`p`),lO(1112,`Atribui uma linha separadora acima do item.`),wg()()(),jc(1113,`tr`,18)(1114,`td`,19)(1115,`div`,20)(1116,`span`,21),lO(1117,` subItems`),nu(1118,`br`),wg()()(),jc(1119,`td`,22)(1120,`code`,26),lO(1121,`Array<PoPopupAction>`),wg()(),jc(1122,`td`,25)(1123,`em`)(1124,`strong`),lO(1125,`(opcional)`),wg()(),jc(1126,`p`),lO(1127,`Define uma lista de subitens para criação de menus aninhados.`),wg(),jc(1128,`pre`)(1129,`code`),lO(1130,`{ label: 'Relat\xF3rios', subItems: [{ label: 'Mensal' }, { label: 'Anual' }] }
`),wg()(),jc(1131,`p`),lO(1132,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),wg(),jc(1133,`blockquote`)(1134,`p`),lO(1135,`As propriedades `),jc(1136,`code`),lO(1137,`disabled`),wg(),lO(1138,`, `),jc(1139,`code`),lO(1140,`type`),wg(),lO(1141,` e `),jc(1142,`code`),lO(1143,`visible`),wg(),lO(1144,` não são aplicadas visualmente ao item agrupador.`),wg()(),jc(1145,`blockquote`)(1146,`p`),lO(1147,`Quando `),jc(1148,`code`),lO(1149,`url`),wg(),lO(1150,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),wg()(),jc(1151,`blockquote`)(1152,`p`),lO(1153,`Em subníveis aninhados, o `),jc(1154,`code`),lO(1155,`icon`),wg(),lO(1156,` do agrupador é substituído pelo indicador de navegação (seta).`),wg()()()(),jc(1157,`tr`,18)(1158,`td`,19)(1159,`div`,20)(1160,`span`,21),lO(1161,` subItemsLazy`),nu(1162,`br`),wg()()(),jc(1163,`td`,22)(1164,`code`,42),lO(1165,`(item: PoPopupAction) => Observable<Array<PoPopupAction>>`),wg()(),jc(1166,`td`,25)(1167,`em`)(1168,`strong`),lO(1169,`(opcional)`),wg()(),jc(1170,`p`),lO(1171,`Define o carregamento assíncrono (lazy loading) dos subitens de um agrupador.`),wg(),jc(1172,`p`),lO(1173,`Recebe o item agrupador e retorna um `),jc(1174,`code`),lO(1175,`Observable<Array<PoPopupAction>>`),wg(),lO(1176,`. A requisi\xE7\xE3o \xE9 disparada
`),jc(1177,`strong`),lO(1178,`apenas`),wg(),lO(1179,` no momento da expansão (clique ou atalho de teclado), exibindo placeholders com `),jc(1180,`code`),lO(1181,`po-skeleton`),wg(),lO(1182,`
enquanto os dados s\xE3o carregados:`),wg(),jc(1183,`pre`)(1184,`code`),lO(1185,`{
  label: 'Relat\xF3rios',
  subItemsLazy: (item) => this.reportService.getReports(item)
}
`),wg()(),jc(1186,`blockquote`)(1187,`p`),lO(1188,`O resultado \xE9 armazenado em cache ap\xF3s o primeiro carregamento bem-sucedido.
Em caso de falha, \xE9 exibida uma mensagem com a op\xE7\xE3o de tentar novamente.`),wg()(),jc(1189,`p`),lO(1190,`Ao definir esta propriedade, o item exibirá um ícone indicador de subnível.`),wg()()(),jc(1191,`tr`,18)(1192,`td`,19)(1193,`div`,20)(1194,`span`,21),lO(1195,` type`),nu(1196,`br`),wg()()(),jc(1197,`td`,22)(1198,`code`,28),lO(1199,`string`),wg()(),jc(1200,`td`,25)(1201,`em`)(1202,`strong`),lO(1203,`(opcional)`),wg()(),jc(1204,`p`),lO(1205,`Define a cor do item.`),wg(),jc(1206,`p`),lO(1207,`Valores válidos:`),wg(),jc(1208,`ul`)(1209,`li`)(1210,`code`),lO(1211,`default`),wg()(),jc(1212,`li`)(1213,`code`),lO(1214,`danger`),wg()()()()(),jc(1215,`tr`,18)(1216,`td`,19)(1217,`div`,20)(1218,`span`,21),lO(1219,` url`),nu(1220,`br`),wg()()(),jc(1221,`td`,22)(1222,`code`,28),lO(1223,`string`),wg()(),jc(1224,`td`,25)(1225,`em`)(1226,`strong`),lO(1227,`(opcional)`),wg()(),jc(1228,`p`),lO(1229,`URL para redirecionamento. Aceita rotas internas e links externos.`),wg(),jc(1230,`p`),lO(1231,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),jc(1232,`code`),lO(1233,`url`),wg(),lO(1234,` é informada em um agrupador, o clique `),jc(1235,`strong`),lO(1236,`não abrirá os subitens`),wg(),lO(1237,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),wg(),jc(1238,`blockquote`)(1239,`p`),lO(1240,`Quando informada, tem prioridade sobre a propriedade `),jc(1241,`code`),lO(1242,`action`),wg(),lO(1243,`.`),wg()()()(),jc(1244,`tr`,18)(1245,`td`,19)(1246,`div`,20)(1247,`span`,21),lO(1248,` visible`),nu(1249,`br`),wg()()(),jc(1250,`td`,22)(1251,`code`,33),lO(1252,`boolean `),wg(),jc(1253,`code`,41),lO(1254,` Function`),wg()(),jc(1255,`td`,25)(1256,`em`)(1257,`strong`),lO(1258,`(opcional)`),wg()(),jc(1259,`p`),lO(1260,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),wg()()()(),jc(1261,`h4`,40)(1262,`code`,5),lO(1263,`PoWidgetAvatar`),wg()(),jc(1264,`div`,2)(1265,`p`),lO(1266,`Interface para definição do avatar no `),jc(1267,`code`),lO(1268,`po-widget`),wg(),lO(1269,`.`),wg()(),jc(1270,`h4`,14),lO(1271,`Propriedades`),wg(),jc(1272,`table`,15)(1273,`tr`,16)(1274,`th`,17),lO(1275,`Nome`),wg(),jc(1276,`th`,17),lO(1277,`Tipo`),wg(),jc(1278,`th`,17),lO(1279,`Descrição`),wg()(),jc(1280,`tr`,18)(1281,`td`,19)(1282,`div`,20)(1283,`span`,21),lO(1284,` customTemplate`),nu(1285,`br`),wg()()(),jc(1286,`td`,22)(1287,`code`,23),lO(1288,`TemplateRef<any>`),wg()(),jc(1289,`td`,25)(1290,`em`)(1291,`strong`),lO(1292,`(opcional)`),wg()(),jc(1293,`p`),lO(1294,`Permite a criação de template customizado para o avatar`),wg(),jc(1295,`pre`)(1296,`code`),lO(1297,`<po-widget
 [p-avatar]="{ customTemplate: customAvatar }"
/>

<ng-template #customAvatar>
  ...
</ng-template>
`),wg()()()(),jc(1298,`tr`,18)(1299,`td`,19)(1300,`div`,20)(1301,`span`,21),lO(1302,` size`),nu(1303,`br`),wg()()(),jc(1304,`td`,22)(1305,`code`,28),lO(1306,`string`),wg()(),jc(1307,`td`,25)(1308,`em`)(1309,`strong`),lO(1310,`(opcional)`),wg()(),jc(1311,`p`),lO(1312,`Tamanho de exibição do componente `),jc(1313,`code`),lO(1314,`po-avatar`),wg(),lO(1315,`.`),wg(),jc(1316,`p`),lO(1317,`Valores válidos:`),wg(),jc(1318,`ul`)(1319,`li`)(1320,`code`),lO(1321,`xs`),wg(),lO(1322,` (24x24)`),wg(),jc(1323,`li`)(1324,`code`),lO(1325,`sm`),wg(),lO(1326,` (32x32)`),wg(),jc(1327,`li`)(1328,`code`),lO(1329,`md`),wg(),lO(1330,` (64x64)`),wg(),jc(1331,`li`)(1332,`code`),lO(1333,`lg`),wg(),lO(1334,` (96x96)`),wg(),jc(1335,`li`)(1336,`code`),lO(1337,`xl`),wg(),lO(1338,` (144x144)`),wg()()()(),jc(1339,`tr`,18)(1340,`td`,19)(1341,`div`,20)(1342,`span`,21),lO(1343,` src`),nu(1344,`br`),wg()()(),jc(1345,`td`,22)(1346,`code`,28),lO(1347,`string`),wg()(),jc(1348,`td`,25)(1349,`em`)(1350,`strong`),lO(1351,`(opcional)`),wg()(),jc(1352,`p`),lO(1353,`Fonte da imagem que pode ser um caminho local (`),jc(1354,`code`),lO(1355,`./assets/images/logo-black-small.png`),wg(),lO(1356,`)
ou um servidor externo (`),jc(1357,`code`),lO(1358,`https://po-ui.io/assets/images/logo-black-small.png`),wg(),lO(1359,`).`),wg()()(),jc(1360,`tr`,18)(1361,`td`,19)(1362,`div`,20)(1363,`span`,21),lO(1364,` widthCustomTemplate`),nu(1365,`br`),wg()()(),jc(1366,`td`,22)(1367,`code`,28),lO(1368,`string`),wg()(),jc(1369,`td`,25)(1370,`em`)(1371,`strong`),lO(1372,`(opcional)`),wg()(),jc(1373,`p`),lO(1374,`Define a largura em porcentagem do `),jc(1375,`code`),lO(1376,`customTemplate`),wg(),lO(1377,`.`),wg(),jc(1378,`p`),lO(1379,`O valor máximo aceito é `),jc(1380,`code`),lO(1381,`50%`),wg(),lO(1382,`.`),wg()()()(),jc(1383,`h3`),lO(1384,`Enums`),wg(),jc(1385,`h4`,4)(1386,`code`,5),lO(1387,`PoButtonKind`),wg()(),jc(1388,`div`,2)(1389,`p`),lO(1390,`Estilos disponíveis do button.`),wg()(),jc(1391,`h4`,14),lO(1392,`Propriedades`),wg(),jc(1393,`table`,15)(1394,`tr`,16)(1395,`th`,17),lO(1396,`Nome`),wg(),jc(1397,`th`,17),lO(1398,`Descrição`),wg()(),jc(1399,`tr`,18)(1400,`td`,19)(1401,`div`,20)(1402,`span`,21),lO(1403,` primary`),nu(1404,`br`),wg()()(),jc(1405,`td`,25)(1406,`p`),lO(1407,`Estilo primário, usado para ações principais que requerem maior destaque.`),wg()()(),jc(1408,`tr`,18)(1409,`td`,19)(1410,`div`,20)(1411,`span`,21),lO(1412,` secondary`),nu(1413,`br`),wg()()(),jc(1414,`td`,25)(1415,`p`),lO(1416,`Estilo secundário, usado como padrão, para ações comuns.`),wg()()(),jc(1417,`tr`,18)(1418,`td`,19)(1419,`div`,20)(1420,`span`,21),lO(1421,` tertiary`),nu(1422,`br`),wg()()(),jc(1423,`td`,25)(1424,`p`),lO(1425,`Estilo terciário, ideal para ações menos importantes, sem fundo preenchido.`),wg()()(),jc(1426,`tr`,18)(1427,`td`,19)(1428,`div`,20)(1429,`span`,21),lO(1430,` glow`),nu(1431,`br`),wg()()(),jc(1432,`td`,25)(1433,`p`),lO(1434,`Estilo com brilho animado que percorre a borda do botão, usado para destacar uma chamada para ação.`),wg(),jc(1435,`blockquote`)(1436,`p`),lO(1437,`Incompatível com a propriedade `),jc(1438,`code`),lO(1439,`p-danger`),wg(),lO(1440,`.`),wg()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function at(o,k){if(o&1){let p=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(p);let i=Fx();return __(i.changeTab(`web`))}),nu(1,`sample-po-widget-basic-view`)(2,`sample-po-widget-labs-view`)(3,`sample-po-widget-finance-dashboard-view`)(4,`sample-po-widget-card-view`),wg()}if(o&2){let p=Fx();UE(`p-active`,p.activeTab===`web`)}}var ot=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(b(ir),b(Sn))};static ɵcmp=Zn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Widget`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,i){l&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,at,5,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(4,`sample-po-widget-doc`),wg()()()),l&2&&(UE(`p-actions`,i.actions),rg(2),Dx(i.hidePoWebSample?-1:2),rg(),UE(`p-active`,i.activeTab===`doc`))},dependencies:[Vze,lre,ure,Pe,De,Ae,We,ke],encapsulation:2,changeDetection:1})}return o})()}];var Fe=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=pe({type:o});static ɵinj=ue({imports:[I1.forChild(ot),I1]})}return o})();var Ht=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=pe({type:o});static ɵinj=ue({imports:[M,Fe]})}return o})();export{Ht as DocPoWidgetModule};