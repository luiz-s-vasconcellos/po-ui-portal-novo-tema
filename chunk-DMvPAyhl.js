import{n as P,t as M}from"./main-G4GMLTOQ.js";import{Di as Wb,Dt as Zoe,Ei as WV,Er as HO,Fr as Jc,H as Mze,Hi as ar,I as Koe,Ia as sk,Ii as ZO,Ir as Jk,Ji as eF,Li as Zb,Mi as Y0,Mn as tre,Mt as are,Nr as Ig,Oa as qL,Or as H_,P as Joe,Pr as JL,Pt as bae,Ri as Zg,Rr as Jn,Sn as q4,Ti as W0,U as Nf,Vi as _u,Vr as Kb,Xn as $O,Yr as NZ,Zn as $_,Zr as No,an as j4,bi as Uk,cr as Bk,ea as ge,eo as xo,er as Ab,f as Cze,fi as RZ,gi as Tk,hi as TZ,ir as BO,j as I4,jr as I,k as Goe,no as yk,nr as An,oo as zO,p as DP,pr as Cu,qa as vt,qi as de,rn as ia,sa as jk,tr as Ak,tt as Ru,ur as Cb,va as nk,vn as oi,wa as p,xi as VO,ya as nm}from"./chunk-BJubg121.js";var we=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-widget-basic`]],standalone:!1,decls:1,vars:0,template:function(l,i){l&1&&_u(0,`po-widget`)},dependencies:[bae],encapsulation:2,changeDetection:1})}return o})();var ze=o=>({"docs-sample-code-tabs":o});var Pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-widget-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Widget Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-widget-basic/sample-po-widget-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-widget></po-widget>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-widget-basic/sample-po-widget-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-widget-basic',
  templateUrl: './sample-po-widget-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoWidgetBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-widget-basic`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,ze,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,we],encapsulation:2,changeDetection:1})}return o})();var Ve=(o,k)=>({src:o,size:k});var _e=(()=>{class o{poNotification=p(Ru);action;background;content;height;help;primaryLabel;properties;secondaryLabel;tagIcon;tagLabel;title;actionPopup={action:null,label:``};myActions=[];tagPosition;avatarSrc;avatarSize;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`primaryWidget`,label:`Primary Widget`},{value:`small`,label:`small`}];iconList=[{label:`an an-bluetooth`,value:`an an-bluetooth`},{label:`an an-heart`,value:`an an-heart`},{label:`an an-lightbulb`,value:`an an-lightbulb`},{label:`an an-star`,value:`an an-star`},{label:`an an-gear`,value:`an an-gear`},{label:`an an-globe`,value:`an an-globe`},{label:`fa fa-address-card`,value:`fa fa-address-card`},{label:`fa fa-bell`,value:`fa fa-bell`}];listTagPosition=[{label:`right`,value:`right`},{label:`top`,value:`top`},{label:`bottom`,value:`bottom`}];listAvatarSize=[{label:`xs`,value:`xs`},{label:`sm`,value:`sm`},{label:`md`,value:`md`},{label:`lg`,value:`lg`},{label:`xl`,value:`xl`}];ngOnInit(){this.restore()}changeAction(p){this.action=p}addAction(p){this.myActions=[...this.myActions,{label:p.label,action:this.showAction.bind(this,p.action)}],this.actionPopup={action:null,label:``}}restore(){this.background=``,this.action=``,this.content=``,this.height=void 0,this.help=``,this.title=void 0,this.primaryLabel=void 0,this.properties=[],this.myActions=[],this.secondaryLabel=void 0,this.tagLabel=void 0,this.tagIcon=void 0,this.actionPopup={action:null,label:``},this.tagPosition=void 0,this.avatarSrc=void 0,this.avatarSize=void 0}showAction(p){this.poNotification.success(`Action clicked: ${p}`)}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-widget-labs`]],standalone:!1,decls:32,vars:39,consts:[[`f`,`ngForm`],[1,`po-row`],[1,`po-sm-12`,3,`p-on-disabled`,`p-primary-action`,`p-secondary-action`,`p-setting`,`p-title-action`,`p-background`,`p-disabled`,`p-size`,`p-height`,`p-help`,`p-primary`,`p-primary-label`,`p-secondary-label`,`p-tag`,`p-tag-icon`,`p-tag-position`,`p-title`,`p-actions`,`p-avatar`],[`p-label`,`Action`,1,`po-md-6`,3,`p-value`],[`name`,`title`,`p-label`,`Title`,`p-clean`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-label`,`Help`,`p-clean`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-label`,`Height`,`p-clean`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Action`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`background`,`p-clean`,``,`p-help`,`Ex.: 'http://image.com'; '../../image.png'`,`p-label`,`Background`,`p-clean`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`primaryLabel`,`p-label`,`Primary Label`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryLabel`,`p-label`,`Secondary Label`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[1,`po-row`,`sample-widget-align-end`],[`name`,`tagLabel`,`p-label`,`Label Tag`,`p-clean`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-4`,`po-mt-2`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`tagPosition`,`p-label`,`Tag Position`,1,`po-md-4`,`po-mt-2`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`avatarSrc`,`p-label`,`Avatar Src`,`p-help`,`https://picsum.photos/144/144`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`avatarSize`,`p-label`,`Avatar Size`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`3`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`content`,`p-label`,`Content`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(l,i){if(l&1){let m=ZO();Jc(0,`div`,1)(1,`po-widget`,2),vt(`p-on-disabled`,function(){return i.changeAction(`p-on-disabled`)})(`p-primary-action`,function(){return i.changeAction(`p-primary-action`)})(`p-secondary-action`,function(){return i.changeAction(`p-secondary-action`)})(`p-setting`,function(){return i.changeAction(`p-setting`)})(`p-title-action`,function(){return i.changeAction(`p-title-action`)}),Tk(2),Zg()(),_u(3,`po-divider`),Jc(4,`div`,1),_u(5,`po-info`,3),Zg(),_u(6,`po-divider`),Jc(7,`form`,null,0)(9,`po-input`,4),W0(),Zb(`ngModelChange`,function(r){return H_(m),Ak(i.title,r)||(i.title=r),$_(r)}),Zg(),Jc(10,`po-input`,5),W0(),Zb(`ngModelChange`,function(r){return H_(m),Ak(i.help,r)||(i.help=r),$_(r)}),Zg(),Jc(11,`po-number`,6),W0(),Zb(`ngModelChange`,function(r){return H_(m),Ak(i.height,r)||(i.height=r),$_(r)}),Zg(),Jc(12,`div`,1)(13,`po-input`,7),W0(),Zb(`ngModelChange`,function(r){return H_(m),Ak(i.actionPopup.action,r)||(i.actionPopup.action=r),$_(r)}),Zg(),Jc(14,`po-input`,8),W0(),Zb(`ngModelChange`,function(r){return H_(m),Ak(i.actionPopup.label,r)||(i.actionPopup.label=r),$_(r)}),Zg()(),Jc(15,`div`,1)(16,`po-button`,9),vt(`p-click`,function(){return i.addAction(i.actionPopup)}),Zg()(),Jc(17,`po-input`,10),W0(),Zb(`ngModelChange`,function(r){return H_(m),Ak(i.background,r)||(i.background=r),$_(r)}),Zg(),Jc(18,`po-input`,11),W0(),Zb(`ngModelChange`,function(r){return H_(m),Ak(i.primaryLabel,r)||(i.primaryLabel=r),$_(r)}),Zg(),Jc(19,`po-input`,12),W0(),Zb(`ngModelChange`,function(r){return H_(m),Ak(i.secondaryLabel,r)||(i.secondaryLabel=r),$_(r)}),Zg(),Jc(20,`div`,13)(21,`po-input`,14),W0(),Zb(`ngModelChange`,function(r){return H_(m),Ak(i.tagLabel,r)||(i.tagLabel=r),$_(r)}),Zg(),Jc(22,`po-select`,15),W0(),Zb(`ngModelChange`,function(r){return H_(m),Ak(i.tagIcon,r)||(i.tagIcon=r),$_(r)}),Zg(),Jc(23,`po-select`,16),W0(),Zb(`ngModelChange`,function(r){return H_(m),Ak(i.tagPosition,r)||(i.tagPosition=r),$_(r)}),Zg()(),Jc(24,`div`,1)(25,`po-input`,17),W0(),Zb(`ngModelChange`,function(r){return H_(m),Ak(i.avatarSrc,r)||(i.avatarSrc=r),$_(r)}),Zg(),Jc(26,`po-select`,18),W0(),Zb(`ngModelChange`,function(r){return H_(m),Ak(i.avatarSize,r)||(i.avatarSize=r),$_(r)}),Zg()(),Jc(27,`div`,1)(28,`po-checkbox-group`,19),W0(),Zb(`ngModelChange`,function(r){return H_(m),Ak(i.properties,r)||(i.properties=r),$_(r)}),Zg()(),Jc(29,`po-textarea`,20),W0(),Zb(`ngModelChange`,function(r){return H_(m),Ak(i.content,r)||(i.content=r),$_(r)}),Zg(),Jc(30,`div`,1)(31,`po-button`,21),vt(`p-click`,function(){return i.restore()}),Zg()()()}l&2&&(Ig(),Ab(`p-background`,i.background)(`p-disabled`,i.properties.includes(`disabled`))(`p-size`,i.properties.includes(`small`)?`small`:`medium`)(`p-height`,i.height)(`p-help`,i.help)(`p-primary`,i.properties.includes(`primaryWidget`))(`p-primary-label`,i.primaryLabel)(`p-secondary-label`,i.secondaryLabel)(`p-tag`,i.tagLabel)(`p-tag-icon`,i.tagIcon)(`p-tag-position`,i.tagPosition)(`p-title`,i.title)(`p-actions`,i.myActions)(`p-avatar`,Uk(36,Ve,i.avatarSrc,i.avatarSize)),Ig(),nm(` `,i.content,` `),Ig(3),Ab(`p-value`,i.action),Ig(4),Kb(`ngModel`,i.title),Y0(),Ig(),Kb(`ngModel`,i.help),Y0(),Ig(),Kb(`ngModel`,i.height),Y0(),Ig(2),Kb(`ngModel`,i.actionPopup.action),Y0(),Ig(),Kb(`ngModel`,i.actionPopup.label),Y0(),Ig(2),Ab(`p-disabled`,!i.actionPopup.action||!i.actionPopup.label),Ig(),Kb(`ngModel`,i.background),Y0(),Ig(),Kb(`ngModel`,i.primaryLabel),Y0(),Ig(),Kb(`ngModel`,i.secondaryLabel),Y0(),Ig(2),Kb(`ngModel`,i.tagLabel),Y0(),Ig(),Kb(`ngModel`,i.tagIcon),Ab(`p-options`,i.iconList),Y0(),Ig(),Kb(`ngModel`,i.tagPosition),Ab(`p-options`,i.listTagPosition),Y0(),Ig(2),Kb(`ngModel`,i.avatarSrc),Y0(),Ig(),Kb(`ngModel`,i.avatarSize),Ab(`p-options`,i.listAvatarSize),Y0(),Ig(2),Kb(`ngModel`,i.properties),Ab(`p-options`,i.propertiesOptions),Y0(),Ig(),Kb(`ngModel`,i.content),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,oi,Nf,I4,j4,Goe,Koe,Zoe,Joe,bae],styles:[`.sample-widget-align-end[_ngcontent-%COMP%]{align-items:flex-end}`],changeDetection:1})}return o})();var Oe=o=>({"docs-sample-code-tabs":o});var De=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-widget-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Widget Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-widget-labs/sample-po-widget-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-widget-labs/sample-po-widget-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()(),Jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Tk(24,`sample-po-widget-labs/sample-po-widget-labs.component.css`),Zg(),Jc(25,`pre`,11),Tk(26,`.sample-widget-align-end {
  align-items: flex-end;
}
`),Zg()()()()(),Jc(27,`div`,12),_u(28,`sample-po-widget-labs`),Zg(),_u(29,`hr`)),l&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,Oe,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,_e],encapsulation:2,changeDetection:1})}return o})();var Ue=[`detailsModal`];var Te=(()=>{class o{poNotification=p(Ru);detailsModalElement;paymentLink=`https://www.google.com.br/search?q=days+to+payment`;itemsDetails;titleDetailsModal;typeChart=`line`;myActions=[{label:`Detail`,icon:`an an-align-top`,action:this.showAction.bind(this)},{label:`Remove`,icon:`an an-trash`,type:`danger`,action:this.showAction.bind(this)}];options=[{value:`poMultiselect1`,label:`Admin`},{value:`poMultiselect2`,label:`User`}];columnsDetails=[{property:`dateUpdate`,label:`Date update`,type:`date`},{property:`statement`,label:`Statement`,type:`currency`}];itemsAccountDetails=[{dateUpdate:`03-05-2018`,statement:`-56.45`},{dateUpdate:`02-05-2018`,statement:`-14.99`},{dateUpdate:`02-05-2018`,statement:`-657.56`},{dateUpdate:`12-05-2017`,statement:`3547.29`}];itemsSavingsDetails=[{dateUpdate:`03-05-2018`,statement:`-300`},{dateUpdate:`03-05-2018`,statement:`2000`},{dateUpdate:`02-05-2018`,statement:`1500`},{dateUpdate:`02-05-2018`,statement:`-200`},{dateUpdate:`12-05-2017`,statement:`2000`}];openModal(p){switch(p){case`savings`:this.titleDetailsModal=`Revenue - Details`,this.itemsDetails=this.itemsSavingsDetails,this.detailsModalElement.open();break;case`account`:this.titleDetailsModal=`Total savings - Details`,this.itemsDetails=this.itemsAccountDetails,this.detailsModalElement.open()}}openExternalLink(p){window.open(p,`_blank`)}showAction(){this.poNotification.success(`Action clicked`)}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-widget-finance-dashboard`]],viewQuery:function(l,i){if(l&1&&Cu(Ue,7),l&2){let m;No(m=xo())&&(i.detailsModalElement=m.first)}},standalone:!1,decls:43,vars:13,consts:[[`detailsModal`,``],[1,`po-row`,`sample-finance-row-gap`],[`p-help`,`https://github.com/po-ui/po-angular/stargazers`,`p-title`,`Days to Payment`,`p-tag`,`Sales`,`p-tag-icon`,`an an-arrow-circle-up`,1,`po-lg-6`,3,`p-height`],[1,`sample-finance-actions`],[`p-label`,`Cancel`,`p-danger`,``],[`p-label`,`Confirm`,3,`p-click`],[`p-title`,`Total savings`,1,`po-lg-3`,3,`p-click`,`p-height`],[1,`po-font-subtitle`,`po-text-center`],[1,`po-text-center`],[`p-disabled`,``,`p-primary-label`,`Details`,`p-secondary-label`,`Edit`,`p-title`,`Total checking account`,1,`po-lg-3`,3,`p-primary-action`,`p-height`],[1,`po-text-center`,`sample-finance-total-value`],[`p-background`,`../../../assets/graphics/sales-statistics.png`,1,`po-lg-4`,3,`p-height`],[1,`po-text-center`,`sample-finance-padding-inline`],[1,`sample-finance-overlay-badge`],[1,`sample-finance-overlay-text`],[1,`sample-finance-padding-inline`],[`name`,`multiselect`,3,`p-options`],[`p-title`,`Most used payment type`,1,`po-lg-4`,3,`p-actions`,`p-height`],[`p-primary-label`,`Details`,`p-tag`,`Revenue`,`p-tag-icon`,`an an-money`,`p-title`,`Highest revenue in the month considering Marketing and Sales`,1,`po-lg-4`,3,`p-primary-action`,`p-height`,`p-primary`],[3,`p-title`],[3,`p-columns`,`p-items`,`p-hide-table-search`]],template:function(l,i){l&1&&(Jc(0,`div`,1)(1,`div`,1)(2,`po-widget`,2)(3,`div`),Tk(4,`Sales order`),Zg(),Jc(5,`div`),Tk(6,`Scheduled to: `),Jc(7,`strong`),Tk(8,`05/04/2018`),Zg()(),Jc(9,`div`,3),_u(10,`po-button`,4),Jc(11,`po-button`,5),vt(`p-click`,function(){return i.openExternalLink(`https://github.com/po-ui/po-angular/stargazers`)}),Zg()()(),Jc(12,`po-widget`,6),vt(`p-click`,function(){return i.openModal(`account`)}),Jc(13,`div`,7),Tk(14,`$2.818,29`),Zg(),Jc(15,`div`,8),Tk(16,`Last updated at 18:34`),Zg()(),Jc(17,`po-widget`,9),vt(`p-primary-action`,function(){return i.openModal(`account`)}),Jc(18,`div`,10),Tk(19,`$5.000,00`),Zg(),Jc(20,`div`,8),Tk(21,`Last updated at 08:20`),Zg()()(),Jc(22,`div`,1)(23,`po-widget`,11)(24,`div`,12)(25,`div`,13)(26,`strong`,14),Tk(27,`Enter the user routine`),Zg()()(),Jc(28,`div`,15),_u(29,`po-multiselect`,16),Zg()(),Jc(30,`po-widget`,17)(31,`div`,7),Tk(32,`Credit card`),Zg(),Jc(33,`div`,8),Tk(34,`MasterCard - 5500 0000 0000 0004`),Zg()(),Jc(35,`po-widget`,18),vt(`p-primary-action`,function(){return i.openModal(`savings`)}),Jc(36,`div`,7),Tk(37,`$2.000,00`),Zg(),Jc(38,`div`,8),Tk(39,`05/03/2018`),Zg()()()(),Jc(40,`po-modal`,19,0),_u(42,`po-table`,20),Zg()),l&2&&(Ig(2),Ab(`p-height`,190),Ig(10),Ab(`p-height`,190),Ig(5),Ab(`p-height`,190),Ig(6),Ab(`p-height`,180),Ig(6),Ab(`p-options`,i.options),Ig(),Ab(`p-actions`,i.myActions)(`p-height`,180),Ig(5),Ab(`p-height`,180)(`p-primary`,!0),Ig(5),Ab(`p-title`,i.titleDetailsModal),Ig(2),Ab(`p-columns`,i.columnsDetails)(`p-items`,i.itemsDetails)(`p-hide-table-search`,!1))},dependencies:[oi,DP,ia,q4,bae],styles:[`.sample-finance-row-gap[_ngcontent-%COMP%]{row-gap:1rem}.sample-finance-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:.5rem}.sample-finance-total-value[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:.5rem}.sample-finance-padding-inline[_ngcontent-%COMP%]{padding-inline:.5rem}.sample-finance-overlay-badge[_ngcontent-%COMP%]{margin-bottom:.5rem;display:inline-block;background-color:#000;padding:.5rem;border-radius:3px;opacity:.85}.sample-finance-overlay-text[_ngcontent-%COMP%]{color:#fff}`],changeDetection:1})}return o})();var He=o=>({"docs-sample-code-tabs":o});var Ae=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-widget-finance-dashboard-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Widget - Finance dashboard`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row sample-finance-row-gap">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()(),Jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Tk(24,`sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.css`),Zg(),Jc(25,`pre`,11),Tk(26,`.sample-finance-row-gap {
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
`),Zg()()()()(),Jc(27,`div`,12),_u(28,`sample-po-widget-finance-dashboard`),Zg(),_u(29,`hr`)),l&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,He,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Te],encapsulation:2,changeDetection:1})}return o})();var Je=o=>({customTemplate:o,widthCustomTemplate:`40%`});var Ge=()=>({hideExpand:!0,hideExportCsv:!0,hideExportImage:!0,hideTableDetails:!0});var Qe=o=>({header:o});var Ke=()=>({label:`Angular`,data:100});var Xe=()=>({label:`React`,data:10});var Ye=(o,k)=>[o,k];function Ze(o,k){o&1&&_u(0,`po-chart`,8),o&2&&Ab(`p-options`,Bk(3,Qe,jk(2,Ge)))(`p-series`,Uk(7,Ye,jk(5,Ke),jk(6,Xe)))}function $e(o,k){if(o&1&&(Jc(0,`li`),Tk(1),Zg()),o&2){let p=k.$implicit;Ig(),Wb(p)}}var Me=(()=>{class o{poModal;help;label;technologies=[`Angular`,`Typescript`,`React`,`Babel`,`Jasmine`,`Vue`];value;ngOnInit(){this.showAngular()}showAngular(){this.label=`Angular`,this.value=`Angular is a javascript framework mantained by Google and successor of the Angular.js.
    In this latest version, we can use all the features of the framework, for example: data bindings, components,
    modules, typescript and much more.`,this.help=`https://angular.io/`}showJavascriptTechnologies(){this.poModal.open()}showTypescript(){this.label=`Typescript`,this.value=`Typescript allows to write JavaScript in an easier way.
    Typescript is a super set of JavaScript that compiles for simple JavaScript. Any browser.
    Any host. Any operating system. Open code.`,this.help=`https://www.typescriptlang.org/`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-widget-card`]],viewQuery:function(l,i){if(l&1&&Cu(ia,7),l&2){let m;No(m=xo())&&(i.poModal=m.first)}},standalone:!1,decls:24,vars:6,consts:[[`avatar`,``],[1,`po-row`],[`p-height`,`300`,`p-primary-label`,`Angular`,`p-secondary-label`,`Typescript`,`p-title`,`Javascript technologies`,1,`po-lg-6`,3,`p-primary-action`,`p-secondary-action`,`p-title-action`,`p-help`],[3,`p-label`,`p-value`],[`p-title`,`Apps Enterprise`,`p-tag`,`Angular v17+`,`p-tag-position`,`top`,`p-height`,`300`,`p-help`,`https://angular.dev/`,1,`po-lg-6`,3,`p-avatar`],[1,`po-pl-3`,`po-pt-1`],[`p-title`,`Javascript Technologies`],[1,`po-ml-3`],[`p-height`,`260`,3,`p-options`,`p-series`]],template:function(l,i){if(l&1&&(Jc(0,`div`,1)(1,`po-widget`,2),vt(`p-primary-action`,function(){return i.showAngular()})(`p-secondary-action`,function(){return i.showTypescript()})(`p-title-action`,function(){return i.showJavascriptTechnologies()}),_u(2,`po-info`,3),Zg(),Jc(3,`po-widget`,4)(4,`div`),Tk(5,` Angular: The default choice for large-scale applications, such as banking and government systems, due to its structured architecture and native TypeScript support. `),Jc(6,`div`,5)(7,`ul`)(8,`li`),Tk(9,`Out-of-the-Box`),Zg(),Jc(10,`li`),Tk(11,`Standardized and Opinion-Based Architecture`),Zg(),Jc(12,`li`),Tk(13,`Next Generation Reactivity (Signals)`),Zg(),Jc(14,`li`),Tk(15,`Focus on Enterprise and Security`),Zg()()()(),Cb(16,Ze,1,10,`ng-template`,null,0,Jk),Zg()(),Jc(18,`po-modal`,6),Tk(19,` There are several Javascript technologies that help us in the construction of fast and dynamic screens, among them we can mention: `),Jc(20,`div`,7)(21,`ul`),$O(22,$e,2,1,`li`,null,HO),Zg()()()),l&2){let m=sk(17);Ig(),Ab(`p-help`,i.help),Ig(),Ab(`p-label`,i.label)(`p-value`,i.value),Ig(),Ab(`p-avatar`,Bk(4,Je,m)),Ig(19),zO(i.technologies)}},dependencies:[Cze,Joe,ia,bae],encapsulation:2,changeDetection:1})}return o})();var tt=o=>({"docs-sample-code-tabs":o});var We=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-widget-card-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Widget - Card`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-widget-card/sample-po-widget-card.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-widget-card/sample-po-widget-card.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-widget-card`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,tt,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Me],encapsulation:2,changeDetection:1})}return o})();var ke=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-widget-doc`]],standalone:!1,decls:1441,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/guides/grid-system`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/name-role-value`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/keyboard`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<any>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`pan`,``,1,`docs-api-property-type`,`PoWidgetAvatar`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`false`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoWidgetSelection`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`PoTagType`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`(item:`,`PoPopupAction)`,`=>`,`Observable<Array<PoPopupAction>>`]],template:function(l,i){l&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoWidgetModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente po-widget`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoWidgetComponent`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`O componente `),Jc(15,`code`),Tk(16,`po-widget`),Zg(),Tk(17,` é recomendado para exibição de `),Jc(18,`em`),Tk(19,`dashboards`),Zg(),Tk(20,`, podendo ser utilizado
para incluir v\xE1rios tipos de conte\xFAdo como: gr\xE1ficos, tabelas, grids e imagens.`),Zg(),Jc(21,`p`),Tk(22,`Al\xE9m da exibi\xE7\xE3o de conte\xFAdos, este componente possibilita adicionar a\xE7\xF5es e um link
para ajuda, como tamb\xE9m possibilita ser utilizado com ou sem sombra.`),Zg(),Jc(23,`p`),Tk(24,`Para controlar sua largura, é possível utilizar o `),Jc(25,`a`,6),Tk(26,`Grid System`),Zg(),Tk(27,` para um maior
controle de seu redimensionamento, assim possibilitando o tratamento para diferentes resolu\xE7\xF5es.`),Zg(),Jc(28,`h4`),Tk(29,`Boas práticas`),Zg(),Jc(30,`p`),Tk(31,`Utilize um tamanho mínimo de largura de aproximadamente `),Jc(32,`code`),Tk(33,`18.75rem`),Zg(),Tk(34,` no componente.`),Zg(),Jc(35,`h4`),Tk(36,`Acessibilidade tratada no componente`),Zg(),Jc(37,`p`),Tk(38,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas. São elas:`),Zg(),Jc(39,`ul`)(40,`li`),Tk(41,`Utiliza medidas relativas, para se adequar às preferências e necessidades de quem for utilizar o sistema.`),Zg(),Jc(42,`li`),Tk(43,`Desenvolvido com uso de controles padrões HTML, o que permite a identificação na interface por tecnologias assistivas. (WCAG `),Jc(44,`a`,7),Tk(45,`4.1.2: Name, Role, Value`),Zg(),Tk(46,`)`),Zg(),Jc(47,`li`),Tk(48,`O foco é visível e possui uma espessura superior a 2 pixels CSS, não ficando escondido por outros elementos da tela. (WCAG `),Jc(49,`a`,8),Tk(50,`2.4.12: Focus Appearance`),Zg(),Tk(51,`)`),Zg(),Jc(52,`li`),Tk(53,`Quando selecionável, prevê interação por teclado, podendo ser selecionado através da tecla space (WCAG `),Jc(54,`a`,9),Tk(55,`2.4.1 - Keyboard`),Zg(),Tk(56,`)`),Zg()(),Jc(57,`h4`),Tk(58,`Tokens customizáveis`),Zg(),Jc(59,`p`),Tk(60,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(61,`blockquote`)(62,`p`),Tk(63,`Para maiores informações, acesse o guia `),Jc(64,`a`,10),Tk(65,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(66,`.`),Zg()(),Jc(67,`table`)(68,`thead`)(69,`tr`)(70,`th`),Tk(71,`Propriedade`),Zg(),Jc(72,`th`),Tk(73,`Descrição`),Zg(),Jc(74,`th`),Tk(75,`Valor Padrão`),Zg()()(),Jc(76,`tbody`)(77,`tr`)(78,`td`)(79,`strong`),Tk(80,`Default Values`),Zg()(),_u(81,`td`)(82,`td`),Zg(),Jc(83,`tr`)(84,`td`)(85,`code`),Tk(86,`--font-family`),Zg()(),Jc(87,`td`),Tk(88,`Família tipográfica usada`),Zg(),Jc(89,`td`)(90,`code`),Tk(91,`var(--font-family-theme) `),Zg()()(),Jc(92,`tr`)(93,`td`)(94,`code`),Tk(95,`--font-size`),Zg()(),Jc(96,`td`),Tk(97,`Tamanho da fonte`),Zg(),Jc(98,`td`)(99,`code`),Tk(100,`var(--font-size-sm)`),Zg()()(),Jc(101,`tr`)(102,`td`)(103,`code`),Tk(104,`--font-weight`),Zg()(),Jc(105,`td`),Tk(106,`Peso da fonte`),Zg(),Jc(107,`td`)(108,`code`),Tk(109,`var(--font-weight-bold)`),Zg()()(),Jc(110,`tr`)(111,`td`)(112,`code`),Tk(113,`--font-color`),Zg()(),Jc(114,`td`),Tk(115,`Cor da fonte`),Zg(),Jc(116,`td`)(117,`code`),Tk(118,`var(--color-neutral-dark-95)`),Zg()()(),Jc(119,`tr`)(120,`td`)(121,`code`),Tk(122,`--padding-header`),Zg()(),Jc(123,`td`),Tk(124,`Preenchimento do header`),Zg(),Jc(125,`td`)(126,`code`),Tk(127,`var(--spacing-sm) var(--spacing-sm) var(--spacing-xs) var(--spacing-sm)`),Zg()()(),Jc(128,`tr`)(129,`td`)(130,`code`),Tk(131,`--padding-body`),Zg()(),Jc(132,`td`),Tk(133,`Preenchimento do body`),Zg(),Jc(134,`td`)(135,`code`),Tk(136,`var(--spacing-xs) var(--spacing-sm) var(--spacing-xs) var(--spacing-sm)`),Zg()()(),Jc(137,`tr`)(138,`td`)(139,`code`),Tk(140,`--padding-avatar`),Zg()(),Jc(141,`td`),Tk(142,`Preenchimento do avatar`),Zg(),Jc(143,`td`)(144,`code`),Tk(145,`var(--spacing-sm) 0 var(--spacing-xs) var(--spacing-sm)`),Zg()()(),Jc(146,`tr`)(147,`td`)(148,`code`),Tk(149,`--padding-footer`),Zg()(),Jc(150,`td`),Tk(151,`Preenchimento do footer`),Zg(),Jc(152,`td`)(153,`code`),Tk(154,`var(--spacing-xs) var(--spacing-sm) var(--spacing-sm) var(--spacing-sm)`),Zg()()(),Jc(155,`tr`)(156,`td`)(157,`code`),Tk(158,`--border-radius`),Zg()(),Jc(159,`td`),Tk(160,`Contém o valor do raio dos cantos do elemento\xA0`),Zg(),Jc(161,`td`)(162,`code`),Tk(163,`var(--border-radius-md)`),Zg()()(),Jc(164,`tr`)(165,`td`)(166,`code`),Tk(167,`--border-width`),Zg()(),Jc(168,`td`),Tk(169,`Contém o valor da largura dos cantos do elemento\xA0`),Zg(),Jc(170,`td`)(171,`code`),Tk(172,`var(--border-width-sm)`),Zg()()(),Jc(173,`tr`)(174,`td`)(175,`code`),Tk(176,`--border-color`),Zg()(),Jc(177,`td`),Tk(178,`Cor da borda`),Zg(),Jc(179,`td`)(180,`code`),Tk(181,`var(--color-neutral-light-20)`),Zg()()(),Jc(182,`tr`)(183,`td`)(184,`code`),Tk(185,`--background`),Zg()(),Jc(186,`td`),Tk(187,`Cor de background`),Zg(),Jc(188,`td`)(189,`code`),Tk(190,`var(--color-neutral-light-00)`),Zg()()(),Jc(191,`tr`)(192,`td`)(193,`code`),Tk(194,`--shadow`),Zg()(),Jc(195,`td`),Tk(196,`Contém o valor da sombra do elemento`),Zg(),Jc(197,`td`)(198,`code`),Tk(199,`var(--shadow-md)`),Zg()()(),Jc(200,`tr`)(201,`td`)(202,`strong`),Tk(203,`Hover`),Zg()(),_u(204,`td`)(205,`td`),Zg(),Jc(206,`tr`)(207,`td`)(208,`code`),Tk(209,`--border-color-hover`),Zg()(),Jc(210,`td`),Tk(211,`Cor da borda no estado hover`),Zg(),Jc(212,`td`)(213,`code`),Tk(214,`var(--color-action-hover)`),Zg()()(),Jc(215,`tr`)(216,`td`)(217,`strong`),Tk(218,`Focused`),Zg()(),_u(219,`td`)(220,`td`),Zg(),Jc(221,`tr`)(222,`td`)(223,`code`),Tk(224,`--color-focused`),Zg()(),Jc(225,`td`),Tk(226,`Cor principal no estado de focus`),Zg(),Jc(227,`td`)(228,`code`),Tk(229,`var(--color-action-default)`),Zg()()(),Jc(230,`tr`)(231,`td`)(232,`code`),Tk(233,`--outline-color-focused`),Zg(),Tk(234,` \xA0`),Zg(),Jc(235,`td`),Tk(236,`Cor do outline do estado de focus`),Zg(),Jc(237,`td`)(238,`code`),Tk(239,`var(--color-action-focus)`),Zg()()()()()(),Jc(240,`div`,11)(241,`h4`,12),Tk(242,`Seletor`),Zg(),Jc(243,`pre`,13),Tk(244,`<po-widget
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
`),Zg()(),Jc(245,`h4`,14),Tk(246,`Propriedades`),Zg(),Jc(247,`table`,15)(248,`tr`,16)(249,`th`,17),Tk(250,`Nome`),Zg(),Jc(251,`th`,17),Tk(252,`Tipo`),Zg(),Jc(253,`th`,17),Tk(254,`Padrão`),Zg(),Jc(255,`th`,17),Tk(256,`Descrição`),Zg()(),Jc(257,`tr`,18)(258,`td`,19)(259,`div`,20)(260,`span`,21),Tk(261,` p-action-template`),_u(262,`br`),Zg()()(),Jc(263,`td`,22)(264,`code`,23),Tk(265,`TemplateRef<any>`),Zg()(),Jc(266,`td`,24),Tk(267,`-`),Zg(),Jc(268,`td`,25)(269,`p`),Tk(270,`Uso `),Jc(271,`strong`),Tk(272,`interno`),Zg(),Tk(273,` do `),Jc(274,`code`),Tk(275,`po-list-view`),Zg(),Tk(276,`. Template renderizado como coluna de a\xE7\xE3o \xE0
direita do conte\xFAdo, centralizado verticalmente (em vez do header).`),Zg()()(),Jc(277,`tr`,18)(278,`td`,19)(279,`div`,20)(280,`span`,21),Tk(281,` p-actions`),_u(282,`br`),Zg()()(),Jc(283,`td`,22)(284,`code`,26),Tk(285,`Array<PoPopupAction>`),Zg()(),Jc(286,`td`,24),Tk(287,`-`),Zg(),Jc(288,`td`,25)(289,`em`)(290,`strong`),Tk(291,`(opcional)`),Zg()(),Jc(292,`p`),Tk(293,`Lista de a\xE7\xF5es exibidas no header do componente.
As propriedades das a\xE7\xF5es seguem a interface `),Jc(294,`code`),Tk(295,`PoPopupAction`),Zg(),Tk(296,`.`),Zg()()(),Jc(297,`tr`,18)(298,`td`,19)(299,`div`,20)(300,`span`,21),Tk(301,` p-avatar`),_u(302,`br`),Zg()()(),Jc(303,`td`,22)(304,`code`,27),Tk(305,`PoWidgetAvatar`),Zg()(),Jc(306,`td`,24),Tk(307,`-`),Zg(),Jc(308,`td`,25)(309,`em`)(310,`strong`),Tk(311,`(opcional)`),Zg()(),Jc(312,`p`),Tk(313,`Define o avatar a ser exibido à esquerda no Widget.`),Zg()()(),Jc(314,`tr`,18)(315,`td`,19)(316,`div`,20)(317,`span`,21),Tk(318,` p-background`),_u(319,`br`),Zg()()(),Jc(320,`td`,22)(321,`code`,28),Tk(322,`string`),Zg()(),Jc(323,`td`,24),Tk(324,`-`),Zg(),Jc(325,`td`,25)(326,`em`)(327,`strong`),Tk(328,`(opcional)`),Zg()(),Jc(329,`p`),Tk(330,`Define uma imagem de fundo.`),Zg(),Jc(331,`blockquote`)(332,`p`),Tk(333,`Se a imagem escolhida intervir na legibilidade do texto contido no `),Jc(334,`code`),Tk(335,`p-widget`),Zg(),Tk(336,`,
pode-se utilizar a propriedade `),Jc(337,`code`),Tk(338,`p-primary`),Zg(),Tk(339,` em conjunto para que os textos fiquem na cor branca.`),Zg()()()(),Jc(340,`tr`,18)(341,`td`,19)(342,`div`,29)(343,`span`,30),Tk(344,` (p-click)`),_u(345,`br`),Zg()()(),Jc(346,`td`,22)(347,`code`,31),Tk(348,`EventEmitter`),Zg()(),Jc(349,`td`,24),Tk(350,`-`),Zg(),Jc(351,`td`,25)(352,`em`)(353,`strong`),Tk(354,`(opcional)`),Zg()(),Jc(355,`p`),Tk(356,`Evento disparado quando o usuário clicar no componente.`),Zg(),Jc(357,`blockquote`)(358,`p`),Tk(359,`Quando este evento está em uso, uma sombra (shadow) é aplicada automaticamente ao componente.`),Zg()()()(),Jc(360,`tr`,18)(361,`td`,19)(362,`div`,20)(363,`span`,21),Tk(364,` p-danger-primary-action`),_u(365,`br`),Zg()()(),Jc(366,`td`,22)(367,`code`,32),Tk(368,`false`),Zg()(),Jc(369,`td`,24)(370,`p`)(371,`code`),Tk(372,`false`),Zg()()(),Jc(373,`td`,25)(374,`em`)(375,`strong`),Tk(376,`(opcional)`),Zg()(),Jc(377,`p`),Tk(378,`Caso verdadeiro o botão da ação `),Jc(379,`code`),Tk(380,`p-primary-label`),Zg(),Tk(381,` ativará o modo `),Jc(382,`code`),Tk(383,`danger`),Zg(),Tk(384,`.`),Zg(),Jc(385,`blockquote`)(386,`p`),Tk(387,`Incompatível com o tipo `),Jc(388,`strong`),Tk(389,`tertiary`),Zg(),Tk(390,` da propriedade `),Jc(391,`code`),Tk(392,`p-kind-primary-action`),Zg(),Tk(393,`.`),Zg()()()(),Jc(394,`tr`,18)(395,`td`,19)(396,`div`,20)(397,`span`,21),Tk(398,` p-danger-secondary-action`),_u(399,`br`),Zg()()(),Jc(400,`td`,22)(401,`code`,32),Tk(402,`false`),Zg()(),Jc(403,`td`,24)(404,`p`)(405,`code`),Tk(406,`false`),Zg()()(),Jc(407,`td`,25)(408,`em`)(409,`strong`),Tk(410,`(opcional)`),Zg()(),Jc(411,`p`),Tk(412,`Caso verdadeiro o botão da ação `),Jc(413,`code`),Tk(414,`p-secondary-label`),Zg(),Tk(415,` ativará o modo `),Jc(416,`code`),Tk(417,`danger`),Zg(),Tk(418,`.`),Zg(),Jc(419,`blockquote`)(420,`p`),Tk(421,`Incompatível com o tipo `),Jc(422,`strong`),Tk(423,`tertiary`),Zg(),Tk(424,` da propriedade `),Jc(425,`code`),Tk(426,`p-kind-primary-action`),Zg(),Tk(427,`.`),Zg()()()(),Jc(428,`tr`,18)(429,`td`,19)(430,`div`,20)(431,`span`,21),Tk(432,` p-disabled`),_u(433,`br`),Zg()()(),Jc(434,`td`,22)(435,`code`,33),Tk(436,`boolean`),Zg()(),Jc(437,`td`,24)(438,`p`)(439,`code`),Tk(440,`false`),Zg()()(),Jc(441,`td`,25)(442,`em`)(443,`strong`),Tk(444,`(opcional)`),Zg()(),Jc(445,`p`),Tk(446,`Desabilita o componente.`),Zg()()(),Jc(447,`tr`,18)(448,`td`,19)(449,`div`,20)(450,`span`,21),Tk(451,` p-height`),_u(452,`br`),Zg()()(),Jc(453,`td`,22)(454,`code`,34),Tk(455,`number`),Zg()(),Jc(456,`td`,24),Tk(457,`-`),Zg(),Jc(458,`td`,25)(459,`em`)(460,`strong`),Tk(461,`(opcional)`),Zg()(),Jc(462,`p`),Tk(463,`Define a altura do componente.`),Zg(),Jc(464,`blockquote`)(465,`p`),Tk(466,`Caso não seja informado valor, a propriedade irá assumir o tamanho do conteúdo.`),Zg()()()(),Jc(467,`tr`,18)(468,`td`,19)(469,`div`,20)(470,`span`,21),Tk(471,` p-help`),_u(472,`br`),Zg()()(),Jc(473,`td`,22)(474,`code`,28),Tk(475,`string`),Zg()(),Jc(476,`td`,24),Tk(477,`-`),Zg(),Jc(478,`td`,25)(479,`em`)(480,`strong`),Tk(481,`(opcional)`),Zg()(),Jc(482,`p`),Tk(483,`Link de ajuda incluído no menu de ações do header.`),Zg()()(),Jc(484,`tr`,18)(485,`td`,19)(486,`div`,20)(487,`span`,21),Tk(488,` p-kind-primary-action`),_u(489,`br`),Zg()()(),Jc(490,`td`,22)(491,`code`,28),Tk(492,`string`),Zg()(),Jc(493,`td`,24)(494,`p`)(495,`code`),Tk(496,`tertiary`),Zg()()(),Jc(497,`td`,25)(498,`em`)(499,`strong`),Tk(500,`(opcional)`),Zg()(),Jc(501,`p`),Tk(502,`Define o estilo do botão da ação `),Jc(503,`code`),Tk(504,`p-primary-label`),Zg(),Tk(505,`, conforme o enum `),Jc(506,`code`),Tk(507,`PoButtonKind`),Zg(),Tk(508,`.`),Zg()()(),Jc(509,`tr`,18)(510,`td`,19)(511,`div`,20)(512,`span`,21),Tk(513,` p-kind-secondary-action`),_u(514,`br`),Zg()()(),Jc(515,`td`,22)(516,`code`,28),Tk(517,`string`),Zg()(),Jc(518,`td`,24)(519,`p`)(520,`code`),Tk(521,`tertiary`),Zg()()(),Jc(522,`td`,25)(523,`em`)(524,`strong`),Tk(525,`(opcional)`),Zg()(),Jc(526,`p`),Tk(527,`Define o estilo do botão da ação `),Jc(528,`code`),Tk(529,`p-secondary-label`),Zg(),Tk(530,`, conforme o enum `),Jc(531,`code`),Tk(532,`PoButtonKind`),Zg(),Tk(533,`.`),Zg()()(),Jc(534,`tr`,18)(535,`td`,19)(536,`div`,20)(537,`span`,21),Tk(538,` p-no-shadow`),_u(539,`br`),Zg()()(),Jc(540,`td`,22)(541,`code`,33),Tk(542,`boolean`),Zg()(),Jc(543,`td`,24)(544,`p`)(545,`code`),Tk(546,`true`),Zg()()(),Jc(547,`td`,25)(548,`em`)(549,`strong`),Tk(550,`(opcional)`),Zg()(),Jc(551,`p`),Tk(552,`Desabilita a sombra do componente quando o mesmo for clicável.`),Zg(),Jc(553,`blockquote`)(554,`p`),Tk(555,`A sombra é exibida por padrão apenas quando o evento `),Jc(556,`code`),Tk(557,`p-click`),Zg(),Tk(558,` está definido.`),Zg()()()(),Jc(559,`tr`,18)(560,`td`,19)(561,`div`,29)(562,`span`,30),Tk(563,` (p-on-disabled)`),_u(564,`br`),Zg()()(),Jc(565,`td`,22)(566,`code`,31),Tk(567,`EventEmitter`),Zg()(),Jc(568,`td`,24),Tk(569,`-`),Zg(),Jc(570,`td`,25)(571,`em`)(572,`strong`),Tk(573,`(opcional)`),Zg()(),Jc(574,`p`),Tk(575,`Evento disparado quando a propriedade `),Jc(576,`code`),Tk(577,`p-disabled`),Zg(),Tk(578,` for alterada.`),Zg()()(),Jc(579,`tr`,18)(580,`td`,19)(581,`div`,20)(582,`span`,21),Tk(583,` p-primary`),_u(584,`br`),Zg()()(),Jc(585,`td`,22)(586,`code`,33),Tk(587,`boolean`),Zg()(),Jc(588,`td`,24)(589,`p`)(590,`code`),Tk(591,`false`),Zg()()(),Jc(592,`td`,25)(593,`em`)(594,`strong`),Tk(595,`(opcional)`),Zg()(),Jc(596,`p`),Tk(597,`Opção para que o `),Jc(598,`code`),Tk(599,`po-widget`),Zg(),Tk(600,` fique em destaque.`),Zg()()(),Jc(601,`tr`,18)(602,`td`,19)(603,`div`,29)(604,`span`,30),Tk(605,` (p-primary-action)`),_u(606,`br`),Zg()()(),Jc(607,`td`,22)(608,`code`,31),Tk(609,`EventEmitter`),Zg()(),Jc(610,`td`,24),Tk(611,`-`),Zg(),Jc(612,`td`,25)(613,`em`)(614,`strong`),Tk(615,`(opcional)`),Zg()(),Jc(616,`p`),Tk(617,`Evento disparado ao clicar na ação `),Jc(618,`code`),Tk(619,`p-primary-label`),Zg(),Tk(620,`.`),Zg()()(),Jc(621,`tr`,18)(622,`td`,19)(623,`div`,20)(624,`span`,21),Tk(625,` p-primary-label`),_u(626,`br`),Zg()()(),Jc(627,`td`,22)(628,`code`,28),Tk(629,`string`),Zg()(),Jc(630,`td`,24),Tk(631,`-`),Zg(),Jc(632,`td`,25)(633,`em`)(634,`strong`),Tk(635,`(opcional)`),Zg()(),Jc(636,`p`),Tk(637,`Define o label e exibe a ação primária no footer do componente.`),Zg()()(),Jc(638,`tr`,18)(639,`td`,19)(640,`div`,29)(641,`span`,30),Tk(642,` (p-secondary-action)`),_u(643,`br`),Zg()()(),Jc(644,`td`,22)(645,`code`,31),Tk(646,`EventEmitter`),Zg()(),Jc(647,`td`,24),Tk(648,`-`),Zg(),Jc(649,`td`,25)(650,`em`)(651,`strong`),Tk(652,`(opcional)`),Zg()(),Jc(653,`p`),Tk(654,`Evento disparado ao clicar na ação `),Jc(655,`code`),Tk(656,`p-secondary-label`),Zg(),Tk(657,`.`),Zg()()(),Jc(658,`tr`,18)(659,`td`,19)(660,`div`,20)(661,`span`,21),Tk(662,` p-secondary-label`),_u(663,`br`),Zg()()(),Jc(664,`td`,22)(665,`code`,28),Tk(666,`string`),Zg()(),Jc(667,`td`,24),Tk(668,`-`),Zg(),Jc(669,`td`,25)(670,`em`)(671,`strong`),Tk(672,`(opcional)`),Zg()(),Jc(673,`p`),Tk(674,`Define o label e exibe a ação secundária no footer do componente.`),Zg(),Jc(675,`blockquote`)(676,`p`),Tk(677,`Exibida apenas quando `),Jc(678,`code`),Tk(679,`p-primary-label`),Zg(),Tk(680,` estiver definida.`),Zg()()()(),Jc(681,`tr`,18)(682,`td`,19)(683,`div`,20)(684,`span`,21),Tk(685,` p-selection`),_u(686,`br`),Zg()()(),Jc(687,`td`,22)(688,`code`,35),Tk(689,`PoWidgetSelection`),Zg()(),Jc(690,`td`,24),Tk(691,`-`),Zg(),Jc(692,`td`,25)(693,`p`),Tk(694,`Uso `),Jc(695,`strong`),Tk(696,`interno`),Zg(),Tk(697,` do `),Jc(698,`code`),Tk(699,`po-list-view`),Zg(),Tk(700,`. Habilita e configura a coluna de sele\xE7\xE3o
(checkbox/radio) \xE0 esquerda do conte\xFAdo.`),Zg()()(),Jc(701,`tr`,18)(702,`td`,19)(703,`div`,29)(704,`span`,30),Tk(705,` (p-setting)`),_u(706,`br`),Zg()()(),Jc(707,`td`,22)(708,`code`,31),Tk(709,`EventEmitter`),Zg()(),Jc(710,`td`,24),Tk(711,`-`),Zg(),Jc(712,`td`,25)(713,`em`)(714,`strong`),Tk(715,`(opcional)`),Zg()(),Jc(716,`p`),Tk(717,`Evento disparado ao clicar em `),Jc(718,`strong`),Tk(719,`Configurações`),Zg(),Tk(720,` incluído no menu de ações do header.`),Zg()()(),Jc(721,`tr`,18)(722,`td`,19)(723,`div`,20)(724,`span`,21),Tk(725,` p-size`),_u(726,`br`),Zg()()(),Jc(727,`td`,22)(728,`code`,28),Tk(729,`string`),Zg()(),Jc(730,`td`,24)(731,`p`)(732,`code`),Tk(733,`medium`),Zg()()(),Jc(734,`td`,25)(735,`em`)(736,`strong`),Tk(737,`(opcional)`),Zg()(),Jc(738,`p`),Tk(739,`Define o tamanho dos botões do componente:`),Zg(),Jc(740,`ul`)(741,`li`)(742,`code`),Tk(743,`small`),Zg(),Tk(744,`: altura de 32px (disponível apenas para acessibilidade AA).`),Zg(),Jc(745,`li`)(746,`code`),Tk(747,`medium`),Zg(),Tk(748,`: altura de 44px.`),Zg()(),Jc(749,`blockquote`)(750,`p`),Tk(751,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(752,`code`),Tk(753,`medium`),Zg(),Tk(754,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(755,`a`,36),Tk(756,`po-theme`),Zg(),Tk(757,`.`),Zg()()()(),Jc(758,`tr`,18)(759,`td`,19)(760,`div`,20)(761,`span`,21),Tk(762,` p-subtitle`),_u(763,`br`),Zg()()(),Jc(764,`td`,22)(765,`code`,28),Tk(766,`string`),Zg()(),Jc(767,`td`,24),Tk(768,`-`),Zg(),Jc(769,`td`,25)(770,`p`),Tk(771,`Uso `),Jc(772,`strong`),Tk(773,`interno`),Zg(),Tk(774,` do `),Jc(775,`code`),Tk(776,`po-list-view`),Zg(),Tk(777,`. Define um subt\xEDtulo exibido no header,
abaixo do t\xEDtulo.`),Zg()()(),Jc(778,`tr`,18)(779,`td`,19)(780,`div`,20)(781,`span`,21),Tk(782,` p-tag-icon`),_u(783,`br`),Zg()()(),Jc(784,`td`,22)(785,`code`,28),Tk(786,`string `),Zg(),Jc(787,`code`,37),Tk(788,` TemplateRef<void>`),Zg()(),Jc(789,`td`,24),Tk(790,`-`),Zg(),Jc(791,`td`,25)(792,`em`)(793,`strong`),Tk(794,`(opcional)`),Zg()(),Jc(795,`p`),Tk(796,`Define o ícone exibido ao lado do label da `),Jc(797,`code`),Tk(798,`p-tag`),Zg(),Tk(799,`.`),Zg(),Jc(800,`p`),Tk(801,`É possível usar qualquer um dos ícones da `),Jc(802,`a`,38),Tk(803,`Biblioteca de ícones PO UI`),Zg(),Tk(804,`, conforme exemplo:`),Zg(),Jc(805,`pre`)(806,`code`),Tk(807,`<po-widget p-tag-icon="an an-user"></po-widget>
`),Zg()(),Jc(808,`p`),Tk(809,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Jc(810,`em`),Tk(811,`Font Awesome`),Zg(),Tk(812,`, desde que a biblioteca
esteja carregada no projeto:`),Zg(),Jc(813,`pre`)(814,`code`),Tk(815,`<po-widget p-tag-icon="fa fa-podcast"></po-widget>
`),Zg()(),Jc(816,`p`),Tk(817,`Outra opção seria a customização do ícone através do `),Jc(818,`code`),Tk(819,`TemplateRef`),Zg(),Tk(820,`, conforme exemplo abaixo:`),Zg(),Jc(821,`pre`)(822,`code`),Tk(823,`<po-widget [p-tag-icon]="template"></po-widget>

<ng-template #template>
  <i class="fa fa-podcast" style="font-size: inherit;"></i>
</ng-template>
`),Zg()(),Jc(824,`blockquote`)(825,`p`),Tk(826,`Para o ícone enquadrar corretamente, deve-se utilizar `),Jc(827,`code`),Tk(828,`font-size: inherit`),Zg(),Tk(829,` caso o ícone utilizado não aplique-o.`),Zg()()()(),Jc(830,`tr`,18)(831,`td`,19)(832,`div`,20)(833,`span`,21),Tk(834,` p-tag`),_u(835,`br`),Zg()()(),Jc(836,`td`,22)(837,`code`,28),Tk(838,`string`),Zg()(),Jc(839,`td`,24),Tk(840,`-`),Zg(),Jc(841,`td`,25)(842,`em`)(843,`strong`),Tk(844,`(opcional)`),Zg()(),Jc(845,`p`),Tk(846,`Label da tag exibida no header.`),Zg(),Jc(847,`blockquote`)(848,`p`),Tk(849,`Quando a tag atingir uma largura m\xE1xima de 15rem (240px), ser\xE1 truncado com retic\xEAncias.
O conte\xFAdo completo poder\xE1 ser visualizado ao passar o mouse sobre a tag, por meio do tooltip.`),Zg()()()(),Jc(850,`tr`,18)(851,`td`,19)(852,`div`,20)(853,`span`,21),Tk(854,` p-tag-position`),_u(855,`br`),Zg()()(),Jc(856,`td`,22)(857,`code`,28),Tk(858,`string`),Zg()(),Jc(859,`td`,24)(860,`p`)(861,`code`),Tk(862,`right`),Zg()()(),Jc(863,`td`,25)(864,`em`)(865,`strong`),Tk(866,`(opcional)`),Zg()(),Jc(867,`p`),Tk(868,`Define o posicionamento da `),Jc(869,`code`),Tk(870,`po-tag`),Zg(),Tk(871,` no cabeçalho do Widget:`),Zg(),Jc(872,`ul`)(873,`li`)(874,`code`),Tk(875,`right`),Zg(),Tk(876,`: posicionada no canto superior direito do cabeçalho.`),Zg(),Jc(877,`li`)(878,`code`),Tk(879,`top`),Zg(),Tk(880,`: posicionada à esquerda, acima do título (quando houver).`),Zg(),Jc(881,`li`)(882,`code`),Tk(883,`bottom`),Zg(),Tk(884,`: posicionada à esquerda, abaixo do título (quando houver).`),Zg()()()(),Jc(885,`tr`,18)(886,`td`,19)(887,`div`,20)(888,`span`,21),Tk(889,` p-tag-type`),_u(890,`br`),Zg()()(),Jc(891,`td`,22)(892,`code`,39),Tk(893,`PoTagType `),Zg(),Jc(894,`code`,28),Tk(895,` string`),Zg()(),Jc(896,`td`,24)(897,`p`)(898,`code`),Tk(899,`success`),Zg()()(),Jc(900,`td`,25)(901,`em`)(902,`strong`),Tk(903,`(opcional)`),Zg()(),Jc(904,`p`),Tk(905,`Define o tipo da `),Jc(906,`code`),Tk(907,`p-tag`),Zg(),Tk(908,`, conforme o enum `),Jc(909,`strong`),Tk(910,`PoTagType`),Zg(),Tk(911,`.`),Zg(),Jc(912,`p`),Tk(913,`Valores válidos:`),Zg(),Jc(914,`ul`)(915,`li`)(916,`code`),Tk(917,`success`),Zg(),Tk(918,`: cor verde utilizada para simbolizar sucesso ou êxito.`),Zg(),Jc(919,`li`)(920,`code`),Tk(921,`warning`),Zg(),Tk(922,`: cor amarela que representa aviso ou advertência.`),Zg(),Jc(923,`li`)(924,`code`),Tk(925,`danger`),Zg(),Tk(926,`: cor vermelha para erro ou aviso crítico.`),Zg(),Jc(927,`li`)(928,`code`),Tk(929,`info`),Zg(),Tk(930,`: cor azul claro que caracteriza conteúdo informativo.`),Zg(),Jc(931,`li`)(932,`code`),Tk(933,`neutral`),Zg(),Tk(934,`: cor cinza claro para uso geral.`),Zg()()()(),Jc(935,`tr`,18)(936,`td`,19)(937,`div`,20)(938,`span`,21),Tk(939,` p-title`),_u(940,`br`),Zg()()(),Jc(941,`td`,22)(942,`code`,28),Tk(943,`string`),Zg()(),Jc(944,`td`,24),Tk(945,`-`),Zg(),Jc(946,`td`,25)(947,`em`)(948,`strong`),Tk(949,`(opcional)`),Zg()(),Jc(950,`p`),Tk(951,`Título do componente.`),Zg(),Jc(952,`blockquote`)(953,`p`),Tk(954,`Quando o conte\xFAdo exceder o espa\xE7o dispon\xEDvel, o texto ser\xE1 truncado com retic\xEAncias. O conte\xFAdo completo poder\xE1
ser visualizado ao passar o mouse sobre a tag, por meio do tooltip.`),Zg()()()(),Jc(955,`tr`,18)(956,`td`,19)(957,`div`,29)(958,`span`,30),Tk(959,` (p-title-action)`),_u(960,`br`),Zg()()(),Jc(961,`td`,22)(962,`code`,31),Tk(963,`EventEmitter`),Zg()(),Jc(964,`td`,24),Tk(965,`-`),Zg(),Jc(966,`td`,25)(967,`em`)(968,`strong`),Tk(969,`(opcional)`),Zg()(),Jc(970,`p`),Tk(971,`Evento disparado ao clicar no título definido em `),Jc(972,`code`),Tk(973,`p-title`),Zg(),Tk(974,`.`),Zg()()()(),Jc(975,`h3`),Tk(976,`Interfaces`),Zg(),Jc(977,`h4`,40)(978,`code`,5),Tk(979,`PoPopupAction`),Zg()(),Jc(980,`div`,2)(981,`p`),Tk(982,`Interface para lista de ações do componente.`),Zg()(),Jc(983,`h4`,14),Tk(984,`Propriedades`),Zg(),Jc(985,`table`,15)(986,`tr`,16)(987,`th`,17),Tk(988,`Nome`),Zg(),Jc(989,`th`,17),Tk(990,`Tipo`),Zg(),Jc(991,`th`,17),Tk(992,`Descrição`),Zg()(),Jc(993,`tr`,18)(994,`td`,19)(995,`div`,20)(996,`span`,21),Tk(997,` action`),_u(998,`br`),Zg()()(),Jc(999,`td`,22)(1e3,`code`,41),Tk(1001,`Function`),Zg()(),Jc(1002,`td`,25)(1003,`em`)(1004,`strong`),Tk(1005,`(opcional)`),Zg()(),Jc(1006,`p`),Tk(1007,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),Zg(),Jc(1008,`p`),Tk(1009,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Jc(1010,`code`),Tk(1011,`subItems`),Zg(),Tk(1012,`.`),Zg(),Jc(1013,`blockquote`)(1014,`p`),Tk(1015,`Para que a função seja executada no contexto do componente, utilize `),Jc(1016,`em`),Tk(1017,`bind`),Zg(),Tk(1018,`:
`),Jc(1019,`code`),Tk(1020,`action: this.myFunction.bind(this)`),Zg()()()()(),Jc(1021,`tr`,18)(1022,`td`,19)(1023,`div`,20)(1024,`span`,21),Tk(1025,` disabled`),_u(1026,`br`),Zg()()(),Jc(1027,`td`,22)(1028,`code`,33),Tk(1029,`boolean `),Zg(),Jc(1030,`code`,41),Tk(1031,` Function`),Zg()(),Jc(1032,`td`,25)(1033,`em`)(1034,`strong`),Tk(1035,`(opcional)`),Zg()(),Jc(1036,`p`),Tk(1037,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),Zg()()(),Jc(1038,`tr`,18)(1039,`td`,19)(1040,`div`,20)(1041,`span`,21),Tk(1042,` icon`),_u(1043,`br`),Zg()()(),Jc(1044,`td`,22)(1045,`code`,28),Tk(1046,`string `),Zg(),Jc(1047,`code`,37),Tk(1048,` TemplateRef<void>`),Zg()(),Jc(1049,`td`,25)(1050,`em`)(1051,`strong`),Tk(1052,`(opcional)`),Zg()(),Jc(1053,`p`),Tk(1054,`Ícone exibido ao lado esquerdo do rótulo.`),Zg(),Jc(1055,`p`),Tk(1056,`Aceita ícones da `),Jc(1057,`a`,38),Tk(1058,`Biblioteca de ícones`),Zg(),Tk(1059,`, fontes externas (ex: Font Awesome)
ou um `),Jc(1060,`code`),Tk(1061,`TemplateRef`),Zg(),Tk(1062,` para ícones customizados.`),Zg(),Jc(1063,`pre`)(1064,`code`),Tk(1065,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),Zg()()()(),Jc(1066,`tr`,18)(1067,`td`,19)(1068,`div`,20)(1069,`span`,21),Tk(1070,` label`),_u(1071,`br`),Zg()()(),Jc(1072,`td`,22)(1073,`code`,28),Tk(1074,`string`),Zg()(),Jc(1075,`td`,25)(1076,`p`),Tk(1077,`Rótulo da ação.`),Zg(),Jc(1078,`p`),Tk(1079,`A label também pode representar o agrupador de subitens quando a ação possuir `),Jc(1080,`code`),Tk(1081,`subItems`),Zg(),Tk(1082,`.`),Zg()()(),Jc(1083,`tr`,18)(1084,`td`,19)(1085,`div`,20)(1086,`span`,21),Tk(1087,` selected`),_u(1088,`br`),Zg()()(),Jc(1089,`td`,22)(1090,`code`,33),Tk(1091,`boolean`),Zg()(),Jc(1092,`td`,25)(1093,`em`)(1094,`strong`),Tk(1095,`(opcional)`),Zg()(),Jc(1096,`p`),Tk(1097,`Define se a ação está selecionada.`),Zg()()(),Jc(1098,`tr`,18)(1099,`td`,19)(1100,`div`,20)(1101,`span`,21),Tk(1102,` separator`),_u(1103,`br`),Zg()()(),Jc(1104,`td`,22)(1105,`code`,33),Tk(1106,`boolean`),Zg()(),Jc(1107,`td`,25)(1108,`em`)(1109,`strong`),Tk(1110,`(opcional)`),Zg()(),Jc(1111,`p`),Tk(1112,`Atribui uma linha separadora acima do item.`),Zg()()(),Jc(1113,`tr`,18)(1114,`td`,19)(1115,`div`,20)(1116,`span`,21),Tk(1117,` subItems`),_u(1118,`br`),Zg()()(),Jc(1119,`td`,22)(1120,`code`,26),Tk(1121,`Array<PoPopupAction>`),Zg()(),Jc(1122,`td`,25)(1123,`em`)(1124,`strong`),Tk(1125,`(opcional)`),Zg()(),Jc(1126,`p`),Tk(1127,`Define uma lista de subitens para criação de menus aninhados.`),Zg(),Jc(1128,`pre`)(1129,`code`),Tk(1130,`{ label: 'Relat\xF3rios', subItems: [{ label: 'Mensal' }, { label: 'Anual' }] }
`),Zg()(),Jc(1131,`p`),Tk(1132,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),Zg(),Jc(1133,`blockquote`)(1134,`p`),Tk(1135,`As propriedades `),Jc(1136,`code`),Tk(1137,`disabled`),Zg(),Tk(1138,`, `),Jc(1139,`code`),Tk(1140,`type`),Zg(),Tk(1141,` e `),Jc(1142,`code`),Tk(1143,`visible`),Zg(),Tk(1144,` não são aplicadas visualmente ao item agrupador.`),Zg()(),Jc(1145,`blockquote`)(1146,`p`),Tk(1147,`Quando `),Jc(1148,`code`),Tk(1149,`url`),Zg(),Tk(1150,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),Zg()(),Jc(1151,`blockquote`)(1152,`p`),Tk(1153,`Em subníveis aninhados, o `),Jc(1154,`code`),Tk(1155,`icon`),Zg(),Tk(1156,` do agrupador é substituído pelo indicador de navegação (seta).`),Zg()()()(),Jc(1157,`tr`,18)(1158,`td`,19)(1159,`div`,20)(1160,`span`,21),Tk(1161,` subItemsLazy`),_u(1162,`br`),Zg()()(),Jc(1163,`td`,22)(1164,`code`,42),Tk(1165,`(item: PoPopupAction) => Observable<Array<PoPopupAction>>`),Zg()(),Jc(1166,`td`,25)(1167,`em`)(1168,`strong`),Tk(1169,`(opcional)`),Zg()(),Jc(1170,`p`),Tk(1171,`Define o carregamento assíncrono (lazy loading) dos subitens de um agrupador.`),Zg(),Jc(1172,`p`),Tk(1173,`Recebe o item agrupador e retorna um `),Jc(1174,`code`),Tk(1175,`Observable<Array<PoPopupAction>>`),Zg(),Tk(1176,`. A requisi\xE7\xE3o \xE9 disparada
`),Jc(1177,`strong`),Tk(1178,`apenas`),Zg(),Tk(1179,` no momento da expansão (clique ou atalho de teclado), exibindo placeholders com `),Jc(1180,`code`),Tk(1181,`po-skeleton`),Zg(),Tk(1182,`
enquanto os dados s\xE3o carregados:`),Zg(),Jc(1183,`pre`)(1184,`code`),Tk(1185,`{
  label: 'Relat\xF3rios',
  subItemsLazy: (item) => this.reportService.getReports(item)
}
`),Zg()(),Jc(1186,`blockquote`)(1187,`p`),Tk(1188,`O resultado \xE9 armazenado em cache ap\xF3s o primeiro carregamento bem-sucedido.
Em caso de falha, \xE9 exibida uma mensagem com a op\xE7\xE3o de tentar novamente.`),Zg()(),Jc(1189,`p`),Tk(1190,`Ao definir esta propriedade, o item exibirá um ícone indicador de subnível.`),Zg()()(),Jc(1191,`tr`,18)(1192,`td`,19)(1193,`div`,20)(1194,`span`,21),Tk(1195,` type`),_u(1196,`br`),Zg()()(),Jc(1197,`td`,22)(1198,`code`,28),Tk(1199,`string`),Zg()(),Jc(1200,`td`,25)(1201,`em`)(1202,`strong`),Tk(1203,`(opcional)`),Zg()(),Jc(1204,`p`),Tk(1205,`Define a cor do item.`),Zg(),Jc(1206,`p`),Tk(1207,`Valores válidos:`),Zg(),Jc(1208,`ul`)(1209,`li`)(1210,`code`),Tk(1211,`default`),Zg()(),Jc(1212,`li`)(1213,`code`),Tk(1214,`danger`),Zg()()()()(),Jc(1215,`tr`,18)(1216,`td`,19)(1217,`div`,20)(1218,`span`,21),Tk(1219,` url`),_u(1220,`br`),Zg()()(),Jc(1221,`td`,22)(1222,`code`,28),Tk(1223,`string`),Zg()(),Jc(1224,`td`,25)(1225,`em`)(1226,`strong`),Tk(1227,`(opcional)`),Zg()(),Jc(1228,`p`),Tk(1229,`URL para redirecionamento. Aceita rotas internas e links externos.`),Zg(),Jc(1230,`p`),Tk(1231,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Jc(1232,`code`),Tk(1233,`url`),Zg(),Tk(1234,` é informada em um agrupador, o clique `),Jc(1235,`strong`),Tk(1236,`não abrirá os subitens`),Zg(),Tk(1237,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),Zg(),Jc(1238,`blockquote`)(1239,`p`),Tk(1240,`Quando informada, tem prioridade sobre a propriedade `),Jc(1241,`code`),Tk(1242,`action`),Zg(),Tk(1243,`.`),Zg()()()(),Jc(1244,`tr`,18)(1245,`td`,19)(1246,`div`,20)(1247,`span`,21),Tk(1248,` visible`),_u(1249,`br`),Zg()()(),Jc(1250,`td`,22)(1251,`code`,33),Tk(1252,`boolean `),Zg(),Jc(1253,`code`,41),Tk(1254,` Function`),Zg()(),Jc(1255,`td`,25)(1256,`em`)(1257,`strong`),Tk(1258,`(opcional)`),Zg()(),Jc(1259,`p`),Tk(1260,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),Zg()()()(),Jc(1261,`h4`,40)(1262,`code`,5),Tk(1263,`PoWidgetAvatar`),Zg()(),Jc(1264,`div`,2)(1265,`p`),Tk(1266,`Interface para definição do avatar no `),Jc(1267,`code`),Tk(1268,`po-widget`),Zg(),Tk(1269,`.`),Zg()(),Jc(1270,`h4`,14),Tk(1271,`Propriedades`),Zg(),Jc(1272,`table`,15)(1273,`tr`,16)(1274,`th`,17),Tk(1275,`Nome`),Zg(),Jc(1276,`th`,17),Tk(1277,`Tipo`),Zg(),Jc(1278,`th`,17),Tk(1279,`Descrição`),Zg()(),Jc(1280,`tr`,18)(1281,`td`,19)(1282,`div`,20)(1283,`span`,21),Tk(1284,` customTemplate`),_u(1285,`br`),Zg()()(),Jc(1286,`td`,22)(1287,`code`,23),Tk(1288,`TemplateRef<any>`),Zg()(),Jc(1289,`td`,25)(1290,`em`)(1291,`strong`),Tk(1292,`(opcional)`),Zg()(),Jc(1293,`p`),Tk(1294,`Permite a criação de template customizado para o avatar`),Zg(),Jc(1295,`pre`)(1296,`code`),Tk(1297,`<po-widget
 [p-avatar]="{ customTemplate: customAvatar }"
/>

<ng-template #customAvatar>
  ...
</ng-template>
`),Zg()()()(),Jc(1298,`tr`,18)(1299,`td`,19)(1300,`div`,20)(1301,`span`,21),Tk(1302,` size`),_u(1303,`br`),Zg()()(),Jc(1304,`td`,22)(1305,`code`,28),Tk(1306,`string`),Zg()(),Jc(1307,`td`,25)(1308,`em`)(1309,`strong`),Tk(1310,`(opcional)`),Zg()(),Jc(1311,`p`),Tk(1312,`Tamanho de exibição do componente `),Jc(1313,`code`),Tk(1314,`po-avatar`),Zg(),Tk(1315,`.`),Zg(),Jc(1316,`p`),Tk(1317,`Valores válidos:`),Zg(),Jc(1318,`ul`)(1319,`li`)(1320,`code`),Tk(1321,`xs`),Zg(),Tk(1322,` (24x24)`),Zg(),Jc(1323,`li`)(1324,`code`),Tk(1325,`sm`),Zg(),Tk(1326,` (32x32)`),Zg(),Jc(1327,`li`)(1328,`code`),Tk(1329,`md`),Zg(),Tk(1330,` (64x64)`),Zg(),Jc(1331,`li`)(1332,`code`),Tk(1333,`lg`),Zg(),Tk(1334,` (96x96)`),Zg(),Jc(1335,`li`)(1336,`code`),Tk(1337,`xl`),Zg(),Tk(1338,` (144x144)`),Zg()()()(),Jc(1339,`tr`,18)(1340,`td`,19)(1341,`div`,20)(1342,`span`,21),Tk(1343,` src`),_u(1344,`br`),Zg()()(),Jc(1345,`td`,22)(1346,`code`,28),Tk(1347,`string`),Zg()(),Jc(1348,`td`,25)(1349,`em`)(1350,`strong`),Tk(1351,`(opcional)`),Zg()(),Jc(1352,`p`),Tk(1353,`Fonte da imagem que pode ser um caminho local (`),Jc(1354,`code`),Tk(1355,`./assets/images/logo-black-small.png`),Zg(),Tk(1356,`)
ou um servidor externo (`),Jc(1357,`code`),Tk(1358,`https://po-ui.io/assets/images/logo-black-small.png`),Zg(),Tk(1359,`).`),Zg()()(),Jc(1360,`tr`,18)(1361,`td`,19)(1362,`div`,20)(1363,`span`,21),Tk(1364,` widthCustomTemplate`),_u(1365,`br`),Zg()()(),Jc(1366,`td`,22)(1367,`code`,28),Tk(1368,`string`),Zg()(),Jc(1369,`td`,25)(1370,`em`)(1371,`strong`),Tk(1372,`(opcional)`),Zg()(),Jc(1373,`p`),Tk(1374,`Define a largura em porcentagem do `),Jc(1375,`code`),Tk(1376,`customTemplate`),Zg(),Tk(1377,`.`),Zg(),Jc(1378,`p`),Tk(1379,`O valor máximo aceito é `),Jc(1380,`code`),Tk(1381,`50%`),Zg(),Tk(1382,`.`),Zg()()()(),Jc(1383,`h3`),Tk(1384,`Enums`),Zg(),Jc(1385,`h4`,4)(1386,`code`,5),Tk(1387,`PoButtonKind`),Zg()(),Jc(1388,`div`,2)(1389,`p`),Tk(1390,`Estilos disponíveis do button.`),Zg()(),Jc(1391,`h4`,14),Tk(1392,`Propriedades`),Zg(),Jc(1393,`table`,15)(1394,`tr`,16)(1395,`th`,17),Tk(1396,`Nome`),Zg(),Jc(1397,`th`,17),Tk(1398,`Descrição`),Zg()(),Jc(1399,`tr`,18)(1400,`td`,19)(1401,`div`,20)(1402,`span`,21),Tk(1403,` primary`),_u(1404,`br`),Zg()()(),Jc(1405,`td`,25)(1406,`p`),Tk(1407,`Estilo primário, usado para ações principais que requerem maior destaque.`),Zg()()(),Jc(1408,`tr`,18)(1409,`td`,19)(1410,`div`,20)(1411,`span`,21),Tk(1412,` secondary`),_u(1413,`br`),Zg()()(),Jc(1414,`td`,25)(1415,`p`),Tk(1416,`Estilo secundário, usado como padrão, para ações comuns.`),Zg()()(),Jc(1417,`tr`,18)(1418,`td`,19)(1419,`div`,20)(1420,`span`,21),Tk(1421,` tertiary`),_u(1422,`br`),Zg()()(),Jc(1423,`td`,25)(1424,`p`),Tk(1425,`Estilo terciário, ideal para ações menos importantes, sem fundo preenchido.`),Zg()()(),Jc(1426,`tr`,18)(1427,`td`,19)(1428,`div`,20)(1429,`span`,21),Tk(1430,` glow`),_u(1431,`br`),Zg()()(),Jc(1432,`td`,25)(1433,`p`),Tk(1434,`Estilo com brilho animado que percorre a borda do botão, usado para destacar uma chamada para ação.`),Zg(),Jc(1435,`blockquote`)(1436,`p`),Tk(1437,`Incompatível com a propriedade `),Jc(1438,`code`),Tk(1439,`p-danger`),Zg(),Tk(1440,`.`),Zg()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function at(o,k){if(o&1){let p=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){H_(p);let i=nk();return $_(i.changeTab(`web`))}),_u(1,`sample-po-widget-basic-view`)(2,`sample-po-widget-labs-view`)(3,`sample-po-widget-finance-dashboard-view`)(4,`sample-po-widget-card-view`),Zg()}if(o&2){let p=nk();Ab(`p-active`,p.activeTab===`web`)}}var ot=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Widget`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,i){l&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,at,5,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-widget-doc`),Zg()()()),l&2&&(Ab(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Ab(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,Pe,De,Ae,We,ke],encapsulation:2,changeDetection:1})}return o})()}];var Fe=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[WV.forChild(ot),WV]})}return o})();var Ht=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[M,Fe]})}return o})();export{Ht as DocPoWidgetModule};