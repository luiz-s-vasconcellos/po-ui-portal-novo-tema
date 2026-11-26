import{m as P,p as M}from"./main-KBK5JSBU.js";import{$r as No,$t as ia,A as Goe,Ba as q0,Bn as yae,Br as Kb,Ci as U_,Dn as tre,Er as GV,Ft as are,G as Nf,Gi as _t,Hi as Zb,I as Joe,Ia as p,Ir as Jc,Ji as ar,Ki as _u,Lr as Jn,M as I4,Mi as WL,Na as ok,Ni as Wb,Oi as Vk,Pr as I,Qn as AZ,R as Koe,Si as UO,Tr as G0,Vr as Kg,W as Mze,Wr as LO,Ya as tk,Yn as $O,_a as jO,_i as RZ,_n as q4,ar as B_,ca as ge,cr as Bk,do as xo,ea as de,er as Ab,f as Cze,fn as oi,fr as Cu,it as Ru,ja as nm,jr as H_,jt as Zoe,kr as HO,li as QL,p as DP,pi as Qk,qr as Mk,ro as wg,so as xZ,tn as j4,tr as An,ur as Cb,va as j_,vi as Rk,xa as jk,zr as KO}from"./chunk-CTJH0VS3.js";var we=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-widget-basic`]],standalone:!1,decls:1,vars:0,template:function(r,i){r&1&&_u(0,`po-widget`)},dependencies:[yae],encapsulation:2,changeDetection:1})}return o})();var Ce=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-widget-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-widget-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-widget-basic/sample-po-widget-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-widget-basic/sample-po-widget-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Widget Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-widget-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-widget-basic/sample-po-widget-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-widget></po-widget>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-widget-basic/sample-po-widget-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-widget-basic',
  templateUrl: './sample-po-widget-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoWidgetBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,we],encapsulation:2,changeDetection:1})}return o})();var ze=(o,A)=>({src:o,size:A});var Pe=(()=>{class o{poNotification=p(Ru);action;background;content;height;help;primaryLabel;properties;secondaryLabel;tagIcon;tagLabel;title;actionPopup={action:null,label:``};myActions=[];tagPosition;avatarSrc;avatarSize;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`primaryWidget`,label:`Primary Widget`},{value:`small`,label:`small`}];iconList=[{label:`an an-bluetooth`,value:`an an-bluetooth`},{label:`an an-heart`,value:`an an-heart`},{label:`an an-lightbulb`,value:`an an-lightbulb`},{label:`an an-star`,value:`an an-star`},{label:`an an-gear`,value:`an an-gear`},{label:`an an-globe`,value:`an an-globe`},{label:`fa fa-address-card`,value:`fa fa-address-card`},{label:`fa fa-bell`,value:`fa fa-bell`}];listTagPosition=[{label:`right`,value:`right`},{label:`top`,value:`top`},{label:`bottom`,value:`bottom`}];listAvatarSize=[{label:`xs`,value:`xs`},{label:`sm`,value:`sm`},{label:`md`,value:`md`},{label:`lg`,value:`lg`},{label:`xl`,value:`xl`}];ngOnInit(){this.restore()}changeAction(d){this.action=d}addAction(d){this.myActions=[...this.myActions,{label:d.label,action:this.showAction.bind(this,d.action)}],this.actionPopup={action:null,label:``}}restore(){this.background=``,this.action=``,this.content=``,this.height=void 0,this.help=``,this.title=void 0,this.primaryLabel=void 0,this.properties=[],this.myActions=[],this.secondaryLabel=void 0,this.tagLabel=void 0,this.tagIcon=void 0,this.actionPopup={action:null,label:``},this.tagPosition=void 0,this.avatarSrc=void 0,this.avatarSize=void 0}showAction(d){this.poNotification.success(`Action clicked: ${d}`)}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-widget-labs`]],standalone:!1,decls:32,vars:39,consts:[[`f`,`ngForm`],[1,`po-row`],[1,`po-sm-12`,3,`p-on-disabled`,`p-primary-action`,`p-secondary-action`,`p-setting`,`p-title-action`,`p-background`,`p-disabled`,`p-size`,`p-height`,`p-help`,`p-primary`,`p-primary-label`,`p-secondary-label`,`p-tag`,`p-tag-icon`,`p-tag-position`,`p-title`,`p-actions`,`p-avatar`],[`p-label`,`Action`,1,`po-md-6`,3,`p-value`],[`name`,`title`,`p-label`,`Title`,`p-clean`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-label`,`Help`,`p-clean`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-label`,`Height`,`p-clean`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Action`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`background`,`p-clean`,``,`p-help`,`Ex.: 'http://image.com'; '../../image.png'`,`p-label`,`Background`,`p-clean`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`primaryLabel`,`p-label`,`Primary Label`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryLabel`,`p-label`,`Secondary Label`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[1,`po-row`,`sample-widget-align-end`],[`name`,`tagLabel`,`p-label`,`Label Tag`,`p-clean`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-4`,`po-mt-2`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`tagPosition`,`p-label`,`Tag Position`,1,`po-md-4`,`po-mt-2`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`avatarSrc`,`p-label`,`Avatar Src`,`p-help`,`https://picsum.photos/144/144`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`avatarSize`,`p-label`,`Avatar Size`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`3`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`content`,`p-label`,`Content`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(r,i){if(r&1){let m=KO();Jc(0,`div`,1)(1,`po-widget`,2),_t(`p-on-disabled`,function(){return i.changeAction(`p-on-disabled`)})(`p-primary-action`,function(){return i.changeAction(`p-primary-action`)})(`p-secondary-action`,function(){return i.changeAction(`p-secondary-action`)})(`p-setting`,function(){return i.changeAction(`p-setting`)})(`p-title-action`,function(){return i.changeAction(`p-title-action`)}),Mk(2),Kg()(),_u(3,`po-divider`),Jc(4,`div`,1),_u(5,`po-info`,3),Kg(),_u(6,`po-divider`),Jc(7,`form`,null,0)(9,`po-input`,4),G0(),Zb(`ngModelChange`,function(l){return U_(m),Rk(i.title,l)||(i.title=l),H_(l)}),Kg(),Jc(10,`po-input`,5),G0(),Zb(`ngModelChange`,function(l){return U_(m),Rk(i.help,l)||(i.help=l),H_(l)}),Kg(),Jc(11,`po-number`,6),G0(),Zb(`ngModelChange`,function(l){return U_(m),Rk(i.height,l)||(i.height=l),H_(l)}),Kg(),Jc(12,`div`,1)(13,`po-input`,7),G0(),Zb(`ngModelChange`,function(l){return U_(m),Rk(i.actionPopup.action,l)||(i.actionPopup.action=l),H_(l)}),Kg(),Jc(14,`po-input`,8),G0(),Zb(`ngModelChange`,function(l){return U_(m),Rk(i.actionPopup.label,l)||(i.actionPopup.label=l),H_(l)}),Kg()(),Jc(15,`div`,1)(16,`po-button`,9),_t(`p-click`,function(){return i.addAction(i.actionPopup)}),Kg()(),Jc(17,`po-input`,10),G0(),Zb(`ngModelChange`,function(l){return U_(m),Rk(i.background,l)||(i.background=l),H_(l)}),Kg(),Jc(18,`po-input`,11),G0(),Zb(`ngModelChange`,function(l){return U_(m),Rk(i.primaryLabel,l)||(i.primaryLabel=l),H_(l)}),Kg(),Jc(19,`po-input`,12),G0(),Zb(`ngModelChange`,function(l){return U_(m),Rk(i.secondaryLabel,l)||(i.secondaryLabel=l),H_(l)}),Kg(),Jc(20,`div`,13)(21,`po-input`,14),G0(),Zb(`ngModelChange`,function(l){return U_(m),Rk(i.tagLabel,l)||(i.tagLabel=l),H_(l)}),Kg(),Jc(22,`po-select`,15),G0(),Zb(`ngModelChange`,function(l){return U_(m),Rk(i.tagIcon,l)||(i.tagIcon=l),H_(l)}),Kg(),Jc(23,`po-select`,16),G0(),Zb(`ngModelChange`,function(l){return U_(m),Rk(i.tagPosition,l)||(i.tagPosition=l),H_(l)}),Kg()(),Jc(24,`div`,1)(25,`po-input`,17),G0(),Zb(`ngModelChange`,function(l){return U_(m),Rk(i.avatarSrc,l)||(i.avatarSrc=l),H_(l)}),Kg(),Jc(26,`po-select`,18),G0(),Zb(`ngModelChange`,function(l){return U_(m),Rk(i.avatarSize,l)||(i.avatarSize=l),H_(l)}),Kg()(),Jc(27,`div`,1)(28,`po-checkbox-group`,19),G0(),Zb(`ngModelChange`,function(l){return U_(m),Rk(i.properties,l)||(i.properties=l),H_(l)}),Kg()(),Jc(29,`po-textarea`,20),G0(),Zb(`ngModelChange`,function(l){return U_(m),Rk(i.content,l)||(i.content=l),H_(l)}),Kg(),Jc(30,`div`,1)(31,`po-button`,21),_t(`p-click`,function(){return i.restore()}),Kg()()()}r&2&&(wg(),Ab(`p-background`,i.background)(`p-disabled`,i.properties.includes(`disabled`))(`p-size`,i.properties.includes(`small`)?`small`:`medium`)(`p-height`,i.height)(`p-help`,i.help)(`p-primary`,i.properties.includes(`primaryWidget`))(`p-primary-label`,i.primaryLabel)(`p-secondary-label`,i.secondaryLabel)(`p-tag`,i.tagLabel)(`p-tag-icon`,i.tagIcon)(`p-tag-position`,i.tagPosition)(`p-title`,i.title)(`p-actions`,i.myActions)(`p-avatar`,Bk(36,ze,i.avatarSrc,i.avatarSize)),wg(),nm(` `,i.content,` `),wg(3),Ab(`p-value`,i.action),wg(4),Kb(`ngModel`,i.title),q0(),wg(),Kb(`ngModel`,i.help),q0(),wg(),Kb(`ngModel`,i.height),q0(),wg(2),Kb(`ngModel`,i.actionPopup.action),q0(),wg(),Kb(`ngModel`,i.actionPopup.label),q0(),wg(2),Ab(`p-disabled`,!i.actionPopup.action||!i.actionPopup.label),wg(),Kb(`ngModel`,i.background),q0(),wg(),Kb(`ngModel`,i.primaryLabel),q0(),wg(),Kb(`ngModel`,i.secondaryLabel),q0(),wg(2),Kb(`ngModel`,i.tagLabel),q0(),wg(),Kb(`ngModel`,i.tagIcon),Ab(`p-options`,i.iconList),q0(),wg(),Kb(`ngModel`,i.tagPosition),Ab(`p-options`,i.listTagPosition),q0(),wg(2),Kb(`ngModel`,i.avatarSrc),q0(),wg(),Kb(`ngModel`,i.avatarSize),Ab(`p-options`,i.listAvatarSize),q0(),wg(2),Kb(`ngModel`,i.properties),Ab(`p-options`,i.propertiesOptions),q0(),wg(),Kb(`ngModel`,i.content),q0())},dependencies:[xZ,RZ,AZ,QL,WL,oi,Nf,I4,j4,Goe,Koe,Zoe,Joe,yae],styles:[`.sample-widget-align-end[_ngcontent-%COMP%]{align-items:flex-end}`],changeDetection:1})}return o})();var _e=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-widget-labs-view`]],standalone:!1,decls:37,vars:0,consts:[[`id`,`sample-po-widget-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-widget-labs/sample-po-widget-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-widget-labs/sample-po-widget-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`data-file`,`sample-po-widget-labs/sample-po-widget-labs.component.css`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`css`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Widget Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-widget-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-widget-labs/sample-po-widget-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
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
    `),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` content `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,`
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
`),Kg()()()(),Jc(22,`po-tab`,10)(23,`div`)(24,`label`,7),Mk(25,`sample-po-widget-labs/sample-po-widget-labs.component.ts`),Kg(),Jc(26,`div`,11)(27,`pre`,12),Mk(28,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()(),Jc(29,`po-tab`,13)(30,`div`)(31,`label`,7),Mk(32,`sample-po-widget-labs/sample-po-widget-labs.component.css`),Kg(),Jc(33,`div`,14)(34,`pre`,15),Mk(35,`.sample-widget-align-end {
  align-items: flex-end;
}
`),Kg()()()()()(),_u(36,`hr`))},dependencies:[P,tre,are,Pe],encapsulation:2,changeDetection:1})}return o})();var Ie=[`detailsModal`];var De=(()=>{class o{poNotification=p(Ru);detailsModalElement;paymentLink=`https://www.google.com.br/search?q=days+to+payment`;itemsDetails;titleDetailsModal;typeChart=`line`;myActions=[{label:`Detail`,icon:`an an-align-top`,action:this.showAction.bind(this)},{label:`Remove`,icon:`an an-trash`,type:`danger`,action:this.showAction.bind(this)}];options=[{value:`poMultiselect1`,label:`Admin`},{value:`poMultiselect2`,label:`User`}];columnsDetails=[{property:`dateUpdate`,label:`Date update`,type:`date`},{property:`statement`,label:`Statement`,type:`currency`}];itemsAccountDetails=[{dateUpdate:`03-05-2018`,statement:`-56.45`},{dateUpdate:`02-05-2018`,statement:`-14.99`},{dateUpdate:`02-05-2018`,statement:`-657.56`},{dateUpdate:`12-05-2017`,statement:`3547.29`}];itemsSavingsDetails=[{dateUpdate:`03-05-2018`,statement:`-300`},{dateUpdate:`03-05-2018`,statement:`2000`},{dateUpdate:`02-05-2018`,statement:`1500`},{dateUpdate:`02-05-2018`,statement:`-200`},{dateUpdate:`12-05-2017`,statement:`2000`}];openModal(d){switch(d){case`savings`:this.titleDetailsModal=`Revenue - Details`,this.itemsDetails=this.itemsSavingsDetails,this.detailsModalElement.open();break;case`account`:this.titleDetailsModal=`Total savings - Details`,this.itemsDetails=this.itemsAccountDetails,this.detailsModalElement.open()}}openExternalLink(d){window.open(d,`_blank`)}showAction(){this.poNotification.success(`Action clicked`)}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-widget-finance-dashboard`]],viewQuery:function(r,i){if(r&1&&Cu(Ie,7),r&2){let m;No(m=xo())&&(i.detailsModalElement=m.first)}},standalone:!1,decls:43,vars:13,consts:[[`detailsModal`,``],[1,`po-row`,`sample-finance-row-gap`],[`p-help`,`https://github.com/po-ui/po-angular/stargazers`,`p-title`,`Days to Payment`,`p-tag`,`Sales`,`p-tag-icon`,`an an-arrow-circle-up`,1,`po-lg-6`,3,`p-height`],[1,`sample-finance-actions`],[`p-label`,`Cancel`,`p-danger`,``],[`p-label`,`Confirm`,3,`p-click`],[`p-title`,`Total savings`,1,`po-lg-3`,3,`p-click`,`p-height`],[1,`po-font-subtitle`,`po-text-center`],[1,`po-text-center`],[`p-disabled`,``,`p-primary-label`,`Details`,`p-secondary-label`,`Edit`,`p-title`,`Total checking account`,1,`po-lg-3`,3,`p-primary-action`,`p-height`],[1,`po-text-center`,`sample-finance-total-value`],[`p-background`,`../../../assets/graphics/sales-statistics.png`,1,`po-lg-4`,3,`p-height`],[1,`po-text-center`,`sample-finance-padding-inline`],[1,`sample-finance-overlay-badge`],[1,`sample-finance-overlay-text`],[1,`sample-finance-padding-inline`],[`name`,`multiselect`,3,`p-options`],[`p-title`,`Most used payment type`,1,`po-lg-4`,3,`p-actions`,`p-height`],[`p-primary-label`,`Details`,`p-tag`,`Revenue`,`p-tag-icon`,`an an-money`,`p-title`,`Highest revenue in the month considering Marketing and Sales`,1,`po-lg-4`,3,`p-primary-action`,`p-height`,`p-primary`],[3,`p-title`],[3,`p-columns`,`p-items`,`p-hide-table-search`]],template:function(r,i){r&1&&(Jc(0,`div`,1)(1,`div`,1)(2,`po-widget`,2)(3,`div`),Mk(4,`Sales order`),Kg(),Jc(5,`div`),Mk(6,`Scheduled to: `),Jc(7,`strong`),Mk(8,`05/04/2018`),Kg()(),Jc(9,`div`,3),_u(10,`po-button`,4),Jc(11,`po-button`,5),_t(`p-click`,function(){return i.openExternalLink(`https://github.com/po-ui/po-angular/stargazers`)}),Kg()()(),Jc(12,`po-widget`,6),_t(`p-click`,function(){return i.openModal(`account`)}),Jc(13,`div`,7),Mk(14,`$2.818,29`),Kg(),Jc(15,`div`,8),Mk(16,`Last updated at 18:34`),Kg()(),Jc(17,`po-widget`,9),_t(`p-primary-action`,function(){return i.openModal(`account`)}),Jc(18,`div`,10),Mk(19,`$5.000,00`),Kg(),Jc(20,`div`,8),Mk(21,`Last updated at 08:20`),Kg()()(),Jc(22,`div`,1)(23,`po-widget`,11)(24,`div`,12)(25,`div`,13)(26,`strong`,14),Mk(27,`Enter the user routine`),Kg()()(),Jc(28,`div`,15),_u(29,`po-multiselect`,16),Kg()(),Jc(30,`po-widget`,17)(31,`div`,7),Mk(32,`Credit card`),Kg(),Jc(33,`div`,8),Mk(34,`MasterCard - 5500 0000 0000 0004`),Kg()(),Jc(35,`po-widget`,18),_t(`p-primary-action`,function(){return i.openModal(`savings`)}),Jc(36,`div`,7),Mk(37,`$2.000,00`),Kg(),Jc(38,`div`,8),Mk(39,`05/03/2018`),Kg()()()(),Jc(40,`po-modal`,19,0),_u(42,`po-table`,20),Kg()),r&2&&(wg(2),Ab(`p-height`,190),wg(10),Ab(`p-height`,190),wg(5),Ab(`p-height`,190),wg(6),Ab(`p-height`,180),wg(6),Ab(`p-options`,i.options),wg(),Ab(`p-actions`,i.myActions)(`p-height`,180),wg(5),Ab(`p-height`,180)(`p-primary`,!0),wg(5),Ab(`p-title`,i.titleDetailsModal),wg(2),Ab(`p-columns`,i.columnsDetails)(`p-items`,i.itemsDetails)(`p-hide-table-search`,!1))},dependencies:[oi,DP,ia,q4,yae],styles:[`.sample-finance-row-gap[_ngcontent-%COMP%]{row-gap:1rem}.sample-finance-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:.5rem}.sample-finance-total-value[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:.5rem}.sample-finance-padding-inline[_ngcontent-%COMP%]{padding-inline:.5rem}.sample-finance-overlay-badge[_ngcontent-%COMP%]{margin-bottom:.5rem;display:inline-block;background-color:#000;padding:.5rem;border-radius:3px;opacity:.85}.sample-finance-overlay-text[_ngcontent-%COMP%]{color:#fff}`],changeDetection:1})}return o})();var Ae=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-widget-finance-dashboard-view`]],standalone:!1,decls:31,vars:0,consts:[[`id`,`sample-po-widget-finance-dashboard`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`data-file`,`sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.css`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`css`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Widget - Finance dashboard`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-widget-finance-dashboard`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row sample-finance-row-gap">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()(),Jc(23,`po-tab`,13)(24,`div`)(25,`label`,7),Mk(26,`sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.css`),Kg(),Jc(27,`div`,14)(28,`pre`,15),Mk(29,`.sample-finance-row-gap {
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
`),Kg()()()()()(),_u(30,`hr`))},dependencies:[P,tre,are,De],encapsulation:2,changeDetection:1})}return o})();var Ue=o=>({customTemplate:o,widthCustomTemplate:`40%`});var Ne=()=>({hideExpand:!0,hideExportCsv:!0,hideExportImage:!0,hideTableDetails:!0});var He=o=>({header:o});var je=()=>({label:`Angular`,data:100});var Je=()=>({label:`React`,data:10});var Ge=(o,A)=>[o,A];function Qe(o,A){o&1&&_u(0,`po-chart`,8),o&2&&Ab(`p-options`,jk(3,He,Vk(2,Ne)))(`p-series`,Bk(7,Ge,Vk(5,je),Vk(6,Je)))}function Ke(o,A){if(o&1&&(Jc(0,`li`),Mk(1),Kg()),o&2){let d=A.$implicit;wg(),Wb(d)}}var Me=(()=>{class o{poModal;help;label;technologies=[`Angular`,`Typescript`,`React`,`Babel`,`Jasmine`,`Vue`];value;ngOnInit(){this.showAngular()}showAngular(){this.label=`Angular`,this.value=`Angular is a javascript framework mantained by Google and successor of the Angular.js.
    In this latest version, we can use all the features of the framework, for example: data bindings, components,
    modules, typescript and much more.`,this.help=`https://angular.io/`}showJavascriptTechnologies(){this.poModal.open()}showTypescript(){this.label=`Typescript`,this.value=`Typescript allows to write JavaScript in an easier way.
    Typescript is a super set of JavaScript that compiles for simple JavaScript. Any browser.
    Any host. Any operating system. Open code.`,this.help=`https://www.typescriptlang.org/`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-widget-card`]],viewQuery:function(r,i){if(r&1&&Cu(ia,7),r&2){let m;No(m=xo())&&(i.poModal=m.first)}},standalone:!1,decls:24,vars:6,consts:[[`avatar`,``],[1,`po-row`],[`p-height`,`300`,`p-primary-label`,`Angular`,`p-secondary-label`,`Typescript`,`p-title`,`Javascript technologies`,1,`po-lg-6`,3,`p-primary-action`,`p-secondary-action`,`p-title-action`,`p-help`],[3,`p-label`,`p-value`],[`p-title`,`Apps Enterprise`,`p-tag`,`Angular v17+`,`p-tag-position`,`top`,`p-height`,`300`,`p-help`,`https://angular.dev/`,1,`po-lg-6`,3,`p-avatar`],[1,`po-pl-3`,`po-pt-1`],[`p-title`,`Javascript Technologies`],[1,`po-ml-3`],[`p-height`,`260`,3,`p-options`,`p-series`]],template:function(r,i){if(r&1&&(Jc(0,`div`,1)(1,`po-widget`,2),_t(`p-primary-action`,function(){return i.showAngular()})(`p-secondary-action`,function(){return i.showTypescript()})(`p-title-action`,function(){return i.showJavascriptTechnologies()}),_u(2,`po-info`,3),Kg(),Jc(3,`po-widget`,4)(4,`div`),Mk(5,` Angular: The default choice for large-scale applications, such as banking and government systems, due to its structured architecture and native TypeScript support. `),Jc(6,`div`,5)(7,`ul`)(8,`li`),Mk(9,`Out-of-the-Box`),Kg(),Jc(10,`li`),Mk(11,`Standardized and Opinion-Based Architecture`),Kg(),Jc(12,`li`),Mk(13,`Next Generation Reactivity (Signals)`),Kg(),Jc(14,`li`),Mk(15,`Focus on Enterprise and Security`),Kg()()()(),Cb(16,Qe,1,10,`ng-template`,null,0,Qk),Kg()(),Jc(18,`po-modal`,6),Mk(19,` There are several Javascript technologies that help us in the construction of fast and dynamic screens, among them we can mention: `),Jc(20,`div`,7)(21,`ul`),HO(22,Ke,2,1,`li`,null,UO),Kg()()()),r&2){let m=ok(17);wg(),Ab(`p-help`,i.help),wg(),Ab(`p-label`,i.label)(`p-value`,i.value),wg(),Ab(`p-avatar`,jk(4,Ue,m)),wg(19),$O(i.technologies)}},dependencies:[Cze,Joe,ia,yae],encapsulation:2,changeDetection:1})}return o})();var We=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-widget-card-view`]],standalone:!1,decls:30,vars:0,consts:[[`id`,`sample-po-widget-card`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-widget-card/sample-po-widget-card.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-widget-card/sample-po-widget-card.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Widget - Card`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-widget-card`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-widget-card/sample-po-widget-card.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
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
        <li>`),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` technology `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,`</li>
      }
    </ul>
  </div>
</po-modal>
`),Kg()()()(),Jc(22,`po-tab`,10)(23,`div`)(24,`label`,7),Mk(25,`sample-po-widget-card/sample-po-widget-card.component.ts`),Kg(),Jc(26,`div`,11)(27,`pre`,12),Mk(28,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(29,`hr`))},dependencies:[P,tre,are,Me],encapsulation:2,changeDetection:1})}return o})();var Te=(()=>{class o{router=p(An);openDoc(d){this.router.navigate([`/documentation`,d],{queryParams:{view:`doc`}})}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-widget-doc`]],standalone:!1,decls:1441,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-widget-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/guides/grid-system`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/name-role-value`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/keyboard`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-action-template`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<any>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-actions`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`id`,`prop-p-avatar`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoWidgetAvatar`],[`id`,`prop-p-background`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`event-p-click`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-danger-primary-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`false`],[`id`,`prop-p-danger-secondary-action`,1,`docs-api-properties-row`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-height`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-help`,1,`docs-api-properties-row`],[`id`,`prop-p-kind-primary-action`,1,`docs-api-properties-row`],[`id`,`prop-p-kind-secondary-action`,1,`docs-api-properties-row`],[`id`,`prop-p-no-shadow`,1,`docs-api-properties-row`],[`id`,`event-p-on-disabled`,1,`docs-api-properties-row`],[`id`,`prop-p-primary`,1,`docs-api-properties-row`],[`id`,`event-p-primary-action`,1,`docs-api-properties-row`],[`id`,`prop-p-primary-label`,1,`docs-api-properties-row`],[`id`,`event-p-secondary-action`,1,`docs-api-properties-row`],[`id`,`prop-p-secondary-label`,1,`docs-api-properties-row`],[`id`,`prop-p-selection`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoWidgetSelection`],[`id`,`event-p-setting`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-subtitle`,1,`docs-api-properties-row`],[`id`,`prop-p-tag-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`prop-p-tag`,1,`docs-api-properties-row`],[`id`,`prop-p-tag-position`,1,`docs-api-properties-row`],[`id`,`prop-p-tag-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoTagType`],[`id`,`prop-p-title`,1,`docs-api-properties-row`],[`id`,`event-p-title-action`,1,`docs-api-properties-row`],[`id`,`interface-po-popup-action`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-toolbar-action-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-toolbar-action-disabled`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-icon`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-label`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-selected`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-separator`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-sub-items`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-sub-items-lazy`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`(item:`,`PoPopupAction)`,`=>`,`Observable<Array<PoPopupAction>>`],[`id`,`interface-po-toolbar-action-type`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-url`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-visible`,1,`docs-api-properties-row`],[`id`,`interface-po-widget-avatar`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-widget-avatar-custom-template`,1,`docs-api-properties-row`],[`id`,`interface-po-widget-avatar-size`,1,`docs-api-properties-row`],[`id`,`interface-po-widget-avatar-src`,1,`docs-api-properties-row`],[`id`,`interface-po-widget-avatar-width-custom-template`,1,`docs-api-properties-row`],[`id`,`enum-po-button-kind`,1,`docs-api-class-name`],[`id`,`enum-po-button-kind-primary`,1,`docs-api-properties-row`],[`id`,`enum-po-button-kind-secondary`,1,`docs-api-properties-row`],[`id`,`enum-po-button-kind-tertiary`,1,`docs-api-properties-row`],[`id`,`enum-po-button-kind-glow`,1,`docs-api-properties-row`]],template:function(r,i){r&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoWidgetModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do componente po-widget`),Kg()(),Jc(7,`h3`,3),Mk(8,`Componente`),Kg(),Jc(9,`h4`,4)(10,`code`,5),Mk(11,`PoWidgetComponent`),Kg()(),Jc(12,`div`,2)(13,`p`),Mk(14,`O componente `),Jc(15,`code`),Mk(16,`po-widget`),Kg(),Mk(17,` é recomendado para exibição de `),Jc(18,`em`),Mk(19,`dashboards`),Kg(),Mk(20,`, podendo ser utilizado
para incluir v\xE1rios tipos de conte\xFAdo como: gr\xE1ficos, tabelas, grids e imagens.`),Kg(),Jc(21,`p`),Mk(22,`Al\xE9m da exibi\xE7\xE3o de conte\xFAdos, este componente possibilita adicionar a\xE7\xF5es e um link
para ajuda, como tamb\xE9m possibilita ser utilizado com ou sem sombra.`),Kg(),Jc(23,`p`),Mk(24,`Para controlar sua largura, é possível utilizar o `),Jc(25,`a`,6),Mk(26,`Grid System`),Kg(),Mk(27,` para um maior
controle de seu redimensionamento, assim possibilitando o tratamento para diferentes resolu\xE7\xF5es.`),Kg(),Jc(28,`h4`),Mk(29,`Boas práticas`),Kg(),Jc(30,`p`),Mk(31,`Utilize um tamanho mínimo de largura de aproximadamente `),Jc(32,`code`),Mk(33,`18.75rem`),Kg(),Mk(34,` no componente.`),Kg(),Jc(35,`h4`),Mk(36,`Acessibilidade tratada no componente`),Kg(),Jc(37,`p`),Mk(38,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas. São elas:`),Kg(),Jc(39,`ul`)(40,`li`),Mk(41,`Utiliza medidas relativas, para se adequar às preferências e necessidades de quem for utilizar o sistema.`),Kg(),Jc(42,`li`),Mk(43,`Desenvolvido com uso de controles padrões HTML, o que permite a identificação na interface por tecnologias assistivas. (WCAG `),Jc(44,`a`,7),Mk(45,`4.1.2: Name, Role, Value`),Kg(),Mk(46,`)`),Kg(),Jc(47,`li`),Mk(48,`O foco é visível e possui uma espessura superior a 2 pixels CSS, não ficando escondido por outros elementos da tela. (WCAG `),Jc(49,`a`,8),Mk(50,`2.4.12: Focus Appearance`),Kg(),Mk(51,`)`),Kg(),Jc(52,`li`),Mk(53,`Quando selecionável, prevê interação por teclado, podendo ser selecionado através da tecla space (WCAG `),Jc(54,`a`,9),Mk(55,`2.4.1 - Keyboard`),Kg(),Mk(56,`)`),Kg()(),Jc(57,`h4`),Mk(58,`Tokens customizáveis`),Kg(),Jc(59,`p`),Mk(60,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Jc(61,`blockquote`)(62,`p`),Mk(63,`Para maiores informações, acesse o guia `),Jc(64,`a`,10),Mk(65,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(66,`.`),Kg()(),Jc(67,`table`)(68,`thead`)(69,`tr`)(70,`th`),Mk(71,`Propriedade`),Kg(),Jc(72,`th`),Mk(73,`Descrição`),Kg(),Jc(74,`th`),Mk(75,`Valor Padrão`),Kg()()(),Jc(76,`tbody`)(77,`tr`)(78,`td`)(79,`strong`),Mk(80,`Default Values`),Kg()(),_u(81,`td`)(82,`td`),Kg(),Jc(83,`tr`)(84,`td`)(85,`code`),Mk(86,`--font-family`),Kg()(),Jc(87,`td`),Mk(88,`Família tipográfica usada`),Kg(),Jc(89,`td`)(90,`code`),Mk(91,`var(--font-family-theme) `),Kg()()(),Jc(92,`tr`)(93,`td`)(94,`code`),Mk(95,`--font-size`),Kg()(),Jc(96,`td`),Mk(97,`Tamanho da fonte`),Kg(),Jc(98,`td`)(99,`code`),Mk(100,`var(--font-size-sm)`),Kg()()(),Jc(101,`tr`)(102,`td`)(103,`code`),Mk(104,`--font-weight`),Kg()(),Jc(105,`td`),Mk(106,`Peso da fonte`),Kg(),Jc(107,`td`)(108,`code`),Mk(109,`var(--font-weight-bold)`),Kg()()(),Jc(110,`tr`)(111,`td`)(112,`code`),Mk(113,`--font-color`),Kg()(),Jc(114,`td`),Mk(115,`Cor da fonte`),Kg(),Jc(116,`td`)(117,`code`),Mk(118,`var(--color-neutral-dark-95)`),Kg()()(),Jc(119,`tr`)(120,`td`)(121,`code`),Mk(122,`--padding-header`),Kg()(),Jc(123,`td`),Mk(124,`Preenchimento do header`),Kg(),Jc(125,`td`)(126,`code`),Mk(127,`var(--spacing-sm) var(--spacing-sm) var(--spacing-xs) var(--spacing-sm)`),Kg()()(),Jc(128,`tr`)(129,`td`)(130,`code`),Mk(131,`--padding-body`),Kg()(),Jc(132,`td`),Mk(133,`Preenchimento do body`),Kg(),Jc(134,`td`)(135,`code`),Mk(136,`var(--spacing-xs) var(--spacing-sm) var(--spacing-xs) var(--spacing-sm)`),Kg()()(),Jc(137,`tr`)(138,`td`)(139,`code`),Mk(140,`--padding-avatar`),Kg()(),Jc(141,`td`),Mk(142,`Preenchimento do avatar`),Kg(),Jc(143,`td`)(144,`code`),Mk(145,`var(--spacing-sm) 0 var(--spacing-xs) var(--spacing-sm)`),Kg()()(),Jc(146,`tr`)(147,`td`)(148,`code`),Mk(149,`--padding-footer`),Kg()(),Jc(150,`td`),Mk(151,`Preenchimento do footer`),Kg(),Jc(152,`td`)(153,`code`),Mk(154,`var(--spacing-xs) var(--spacing-sm) var(--spacing-sm) var(--spacing-sm)`),Kg()()(),Jc(155,`tr`)(156,`td`)(157,`code`),Mk(158,`--border-radius`),Kg()(),Jc(159,`td`),Mk(160,`Contém o valor do raio dos cantos do elemento\xA0`),Kg(),Jc(161,`td`)(162,`code`),Mk(163,`var(--border-radius-md)`),Kg()()(),Jc(164,`tr`)(165,`td`)(166,`code`),Mk(167,`--border-width`),Kg()(),Jc(168,`td`),Mk(169,`Contém o valor da largura dos cantos do elemento\xA0`),Kg(),Jc(170,`td`)(171,`code`),Mk(172,`var(--border-width-sm)`),Kg()()(),Jc(173,`tr`)(174,`td`)(175,`code`),Mk(176,`--border-color`),Kg()(),Jc(177,`td`),Mk(178,`Cor da borda`),Kg(),Jc(179,`td`)(180,`code`),Mk(181,`var(--color-neutral-light-20)`),Kg()()(),Jc(182,`tr`)(183,`td`)(184,`code`),Mk(185,`--background`),Kg()(),Jc(186,`td`),Mk(187,`Cor de background`),Kg(),Jc(188,`td`)(189,`code`),Mk(190,`var(--color-neutral-light-00)`),Kg()()(),Jc(191,`tr`)(192,`td`)(193,`code`),Mk(194,`--shadow`),Kg()(),Jc(195,`td`),Mk(196,`Contém o valor da sombra do elemento`),Kg(),Jc(197,`td`)(198,`code`),Mk(199,`var(--shadow-md)`),Kg()()(),Jc(200,`tr`)(201,`td`)(202,`strong`),Mk(203,`Hover`),Kg()(),_u(204,`td`)(205,`td`),Kg(),Jc(206,`tr`)(207,`td`)(208,`code`),Mk(209,`--border-color-hover`),Kg()(),Jc(210,`td`),Mk(211,`Cor da borda no estado hover`),Kg(),Jc(212,`td`)(213,`code`),Mk(214,`var(--color-action-hover)`),Kg()()(),Jc(215,`tr`)(216,`td`)(217,`strong`),Mk(218,`Focused`),Kg()(),_u(219,`td`)(220,`td`),Kg(),Jc(221,`tr`)(222,`td`)(223,`code`),Mk(224,`--color-focused`),Kg()(),Jc(225,`td`),Mk(226,`Cor principal no estado de focus`),Kg(),Jc(227,`td`)(228,`code`),Mk(229,`var(--color-action-default)`),Kg()()(),Jc(230,`tr`)(231,`td`)(232,`code`),Mk(233,`--outline-color-focused`),Kg(),Mk(234,` \xA0`),Kg(),Jc(235,`td`),Mk(236,`Cor do outline do estado de focus`),Kg(),Jc(237,`td`)(238,`code`),Mk(239,`var(--color-action-focus)`),Kg()()()()()(),Jc(240,`div`,11)(241,`h4`,12),Mk(242,`Seletor`),Kg(),Jc(243,`pre`,13),Mk(244,`<po-widget
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
`),Kg()(),Jc(245,`h4`,14),Mk(246,`Propriedades`),Kg(),Jc(247,`table`,15)(248,`tr`,16)(249,`th`,17),Mk(250,`Nome`),Kg(),Jc(251,`th`,17),Mk(252,`Tipo`),Kg(),Jc(253,`th`,17),Mk(254,`Padrão`),Kg(),Jc(255,`th`,17),Mk(256,`Descrição`),Kg()(),Jc(257,`tr`,18)(258,`td`,19)(259,`div`,20)(260,`span`,21),Mk(261,` p-action-template`),_u(262,`br`),Kg()()(),Jc(263,`td`,22)(264,`code`,23),Mk(265,`TemplateRef<any>`),Kg()(),Jc(266,`td`,24),Mk(267,`-`),Kg(),Jc(268,`td`,25)(269,`p`),Mk(270,`Uso `),Jc(271,`strong`),Mk(272,`interno`),Kg(),Mk(273,` do `),Jc(274,`code`),Mk(275,`po-list-view`),Kg(),Mk(276,`. Template renderizado como coluna de a\xE7\xE3o \xE0
direita do conte\xFAdo, centralizado verticalmente (em vez do header).`),Kg()()(),Jc(277,`tr`,26)(278,`td`,19)(279,`div`,20)(280,`span`,21),Mk(281,` p-actions`),_u(282,`br`),Kg()()(),Jc(283,`td`,22)(284,`code`,27),Mk(285,`Array<PoPopupAction>`),Kg()(),Jc(286,`td`,24),Mk(287,`-`),Kg(),Jc(288,`td`,25)(289,`em`)(290,`strong`),Mk(291,`(opcional)`),Kg()(),Jc(292,`p`),Mk(293,`Lista de a\xE7\xF5es exibidas no header do componente.
As propriedades das a\xE7\xF5es seguem a interface `),Jc(294,`code`),Mk(295,`PoPopupAction`),Kg(),Mk(296,`.`),Kg()()(),Jc(297,`tr`,28)(298,`td`,19)(299,`div`,20)(300,`span`,21),Mk(301,` p-avatar`),_u(302,`br`),Kg()()(),Jc(303,`td`,22)(304,`code`,29),Mk(305,`PoWidgetAvatar`),Kg()(),Jc(306,`td`,24),Mk(307,`-`),Kg(),Jc(308,`td`,25)(309,`em`)(310,`strong`),Mk(311,`(opcional)`),Kg()(),Jc(312,`p`),Mk(313,`Define o avatar a ser exibido à esquerda no Widget.`),Kg()()(),Jc(314,`tr`,30)(315,`td`,19)(316,`div`,20)(317,`span`,21),Mk(318,` p-background`),_u(319,`br`),Kg()()(),Jc(320,`td`,22)(321,`code`,31),Mk(322,`string`),Kg()(),Jc(323,`td`,24),Mk(324,`-`),Kg(),Jc(325,`td`,25)(326,`em`)(327,`strong`),Mk(328,`(opcional)`),Kg()(),Jc(329,`p`),Mk(330,`Define uma imagem de fundo.`),Kg(),Jc(331,`blockquote`)(332,`p`),Mk(333,`Se a imagem escolhida intervir na legibilidade do texto contido no `),Jc(334,`code`),Mk(335,`p-widget`),Kg(),Mk(336,`,
pode-se utilizar a propriedade `),Jc(337,`code`),Mk(338,`p-primary`),Kg(),Mk(339,` em conjunto para que os textos fiquem na cor branca.`),Kg()()()(),Jc(340,`tr`,32)(341,`td`,19)(342,`div`,33)(343,`span`,34),Mk(344,` (p-click)`),_u(345,`br`),Kg()()(),Jc(346,`td`,22)(347,`code`,35),Mk(348,`EventEmitter`),Kg()(),Jc(349,`td`,24),Mk(350,`-`),Kg(),Jc(351,`td`,25)(352,`em`)(353,`strong`),Mk(354,`(opcional)`),Kg()(),Jc(355,`p`),Mk(356,`Evento disparado quando o usuário clicar no componente.`),Kg(),Jc(357,`blockquote`)(358,`p`),Mk(359,`Quando este evento está em uso, uma sombra (shadow) é aplicada automaticamente ao componente.`),Kg()()()(),Jc(360,`tr`,36)(361,`td`,19)(362,`div`,20)(363,`span`,21),Mk(364,` p-danger-primary-action`),_u(365,`br`),Kg()()(),Jc(366,`td`,22)(367,`code`,37),Mk(368,`false`),Kg()(),Jc(369,`td`,24)(370,`p`)(371,`code`),Mk(372,`false`),Kg()()(),Jc(373,`td`,25)(374,`em`)(375,`strong`),Mk(376,`(opcional)`),Kg()(),Jc(377,`p`),Mk(378,`Caso verdadeiro o botão da ação `),Jc(379,`code`),Mk(380,`p-primary-label`),Kg(),Mk(381,` ativará o modo `),Jc(382,`code`),Mk(383,`danger`),Kg(),Mk(384,`.`),Kg(),Jc(385,`blockquote`)(386,`p`),Mk(387,`Incompatível com o tipo `),Jc(388,`strong`),Mk(389,`tertiary`),Kg(),Mk(390,` da propriedade `),Jc(391,`code`),Mk(392,`p-kind-primary-action`),Kg(),Mk(393,`.`),Kg()()()(),Jc(394,`tr`,38)(395,`td`,19)(396,`div`,20)(397,`span`,21),Mk(398,` p-danger-secondary-action`),_u(399,`br`),Kg()()(),Jc(400,`td`,22)(401,`code`,37),Mk(402,`false`),Kg()(),Jc(403,`td`,24)(404,`p`)(405,`code`),Mk(406,`false`),Kg()()(),Jc(407,`td`,25)(408,`em`)(409,`strong`),Mk(410,`(opcional)`),Kg()(),Jc(411,`p`),Mk(412,`Caso verdadeiro o botão da ação `),Jc(413,`code`),Mk(414,`p-secondary-label`),Kg(),Mk(415,` ativará o modo `),Jc(416,`code`),Mk(417,`danger`),Kg(),Mk(418,`.`),Kg(),Jc(419,`blockquote`)(420,`p`),Mk(421,`Incompatível com o tipo `),Jc(422,`strong`),Mk(423,`tertiary`),Kg(),Mk(424,` da propriedade `),Jc(425,`code`),Mk(426,`p-kind-primary-action`),Kg(),Mk(427,`.`),Kg()()()(),Jc(428,`tr`,39)(429,`td`,19)(430,`div`,20)(431,`span`,21),Mk(432,` p-disabled`),_u(433,`br`),Kg()()(),Jc(434,`td`,22)(435,`code`,40),Mk(436,`boolean`),Kg()(),Jc(437,`td`,24)(438,`p`)(439,`code`),Mk(440,`false`),Kg()()(),Jc(441,`td`,25)(442,`em`)(443,`strong`),Mk(444,`(opcional)`),Kg()(),Jc(445,`p`),Mk(446,`Desabilita o componente.`),Kg()()(),Jc(447,`tr`,41)(448,`td`,19)(449,`div`,20)(450,`span`,21),Mk(451,` p-height`),_u(452,`br`),Kg()()(),Jc(453,`td`,22)(454,`code`,42),Mk(455,`number`),Kg()(),Jc(456,`td`,24),Mk(457,`-`),Kg(),Jc(458,`td`,25)(459,`em`)(460,`strong`),Mk(461,`(opcional)`),Kg()(),Jc(462,`p`),Mk(463,`Define a altura do componente.`),Kg(),Jc(464,`blockquote`)(465,`p`),Mk(466,`Caso não seja informado valor, a propriedade irá assumir o tamanho do conteúdo.`),Kg()()()(),Jc(467,`tr`,43)(468,`td`,19)(469,`div`,20)(470,`span`,21),Mk(471,` p-help`),_u(472,`br`),Kg()()(),Jc(473,`td`,22)(474,`code`,31),Mk(475,`string`),Kg()(),Jc(476,`td`,24),Mk(477,`-`),Kg(),Jc(478,`td`,25)(479,`em`)(480,`strong`),Mk(481,`(opcional)`),Kg()(),Jc(482,`p`),Mk(483,`Link de ajuda incluído no menu de ações do header.`),Kg()()(),Jc(484,`tr`,44)(485,`td`,19)(486,`div`,20)(487,`span`,21),Mk(488,` p-kind-primary-action`),_u(489,`br`),Kg()()(),Jc(490,`td`,22)(491,`code`,31),Mk(492,`string`),Kg()(),Jc(493,`td`,24)(494,`p`)(495,`code`),Mk(496,`tertiary`),Kg()()(),Jc(497,`td`,25)(498,`em`)(499,`strong`),Mk(500,`(opcional)`),Kg()(),Jc(501,`p`),Mk(502,`Define o estilo do botão da ação `),Jc(503,`code`),Mk(504,`p-primary-label`),Kg(),Mk(505,`, conforme o enum `),Jc(506,`code`),Mk(507,`PoButtonKind`),Kg(),Mk(508,`.`),Kg()()(),Jc(509,`tr`,45)(510,`td`,19)(511,`div`,20)(512,`span`,21),Mk(513,` p-kind-secondary-action`),_u(514,`br`),Kg()()(),Jc(515,`td`,22)(516,`code`,31),Mk(517,`string`),Kg()(),Jc(518,`td`,24)(519,`p`)(520,`code`),Mk(521,`tertiary`),Kg()()(),Jc(522,`td`,25)(523,`em`)(524,`strong`),Mk(525,`(opcional)`),Kg()(),Jc(526,`p`),Mk(527,`Define o estilo do botão da ação `),Jc(528,`code`),Mk(529,`p-secondary-label`),Kg(),Mk(530,`, conforme o enum `),Jc(531,`code`),Mk(532,`PoButtonKind`),Kg(),Mk(533,`.`),Kg()()(),Jc(534,`tr`,46)(535,`td`,19)(536,`div`,20)(537,`span`,21),Mk(538,` p-no-shadow`),_u(539,`br`),Kg()()(),Jc(540,`td`,22)(541,`code`,40),Mk(542,`boolean`),Kg()(),Jc(543,`td`,24)(544,`p`)(545,`code`),Mk(546,`true`),Kg()()(),Jc(547,`td`,25)(548,`em`)(549,`strong`),Mk(550,`(opcional)`),Kg()(),Jc(551,`p`),Mk(552,`Desabilita a sombra do componente quando o mesmo for clicável.`),Kg(),Jc(553,`blockquote`)(554,`p`),Mk(555,`A sombra é exibida por padrão apenas quando o evento `),Jc(556,`code`),Mk(557,`p-click`),Kg(),Mk(558,` está definido.`),Kg()()()(),Jc(559,`tr`,47)(560,`td`,19)(561,`div`,33)(562,`span`,34),Mk(563,` (p-on-disabled)`),_u(564,`br`),Kg()()(),Jc(565,`td`,22)(566,`code`,35),Mk(567,`EventEmitter`),Kg()(),Jc(568,`td`,24),Mk(569,`-`),Kg(),Jc(570,`td`,25)(571,`em`)(572,`strong`),Mk(573,`(opcional)`),Kg()(),Jc(574,`p`),Mk(575,`Evento disparado quando a propriedade `),Jc(576,`code`),Mk(577,`p-disabled`),Kg(),Mk(578,` for alterada.`),Kg()()(),Jc(579,`tr`,48)(580,`td`,19)(581,`div`,20)(582,`span`,21),Mk(583,` p-primary`),_u(584,`br`),Kg()()(),Jc(585,`td`,22)(586,`code`,40),Mk(587,`boolean`),Kg()(),Jc(588,`td`,24)(589,`p`)(590,`code`),Mk(591,`false`),Kg()()(),Jc(592,`td`,25)(593,`em`)(594,`strong`),Mk(595,`(opcional)`),Kg()(),Jc(596,`p`),Mk(597,`Opção para que o `),Jc(598,`code`),Mk(599,`po-widget`),Kg(),Mk(600,` fique em destaque.`),Kg()()(),Jc(601,`tr`,49)(602,`td`,19)(603,`div`,33)(604,`span`,34),Mk(605,` (p-primary-action)`),_u(606,`br`),Kg()()(),Jc(607,`td`,22)(608,`code`,35),Mk(609,`EventEmitter`),Kg()(),Jc(610,`td`,24),Mk(611,`-`),Kg(),Jc(612,`td`,25)(613,`em`)(614,`strong`),Mk(615,`(opcional)`),Kg()(),Jc(616,`p`),Mk(617,`Evento disparado ao clicar na ação `),Jc(618,`code`),Mk(619,`p-primary-label`),Kg(),Mk(620,`.`),Kg()()(),Jc(621,`tr`,50)(622,`td`,19)(623,`div`,20)(624,`span`,21),Mk(625,` p-primary-label`),_u(626,`br`),Kg()()(),Jc(627,`td`,22)(628,`code`,31),Mk(629,`string`),Kg()(),Jc(630,`td`,24),Mk(631,`-`),Kg(),Jc(632,`td`,25)(633,`em`)(634,`strong`),Mk(635,`(opcional)`),Kg()(),Jc(636,`p`),Mk(637,`Define o label e exibe a ação primária no footer do componente.`),Kg()()(),Jc(638,`tr`,51)(639,`td`,19)(640,`div`,33)(641,`span`,34),Mk(642,` (p-secondary-action)`),_u(643,`br`),Kg()()(),Jc(644,`td`,22)(645,`code`,35),Mk(646,`EventEmitter`),Kg()(),Jc(647,`td`,24),Mk(648,`-`),Kg(),Jc(649,`td`,25)(650,`em`)(651,`strong`),Mk(652,`(opcional)`),Kg()(),Jc(653,`p`),Mk(654,`Evento disparado ao clicar na ação `),Jc(655,`code`),Mk(656,`p-secondary-label`),Kg(),Mk(657,`.`),Kg()()(),Jc(658,`tr`,52)(659,`td`,19)(660,`div`,20)(661,`span`,21),Mk(662,` p-secondary-label`),_u(663,`br`),Kg()()(),Jc(664,`td`,22)(665,`code`,31),Mk(666,`string`),Kg()(),Jc(667,`td`,24),Mk(668,`-`),Kg(),Jc(669,`td`,25)(670,`em`)(671,`strong`),Mk(672,`(opcional)`),Kg()(),Jc(673,`p`),Mk(674,`Define o label e exibe a ação secundária no footer do componente.`),Kg(),Jc(675,`blockquote`)(676,`p`),Mk(677,`Exibida apenas quando `),Jc(678,`code`),Mk(679,`p-primary-label`),Kg(),Mk(680,` estiver definida.`),Kg()()()(),Jc(681,`tr`,53)(682,`td`,19)(683,`div`,20)(684,`span`,21),Mk(685,` p-selection`),_u(686,`br`),Kg()()(),Jc(687,`td`,22)(688,`code`,54),Mk(689,`PoWidgetSelection`),Kg()(),Jc(690,`td`,24),Mk(691,`-`),Kg(),Jc(692,`td`,25)(693,`p`),Mk(694,`Uso `),Jc(695,`strong`),Mk(696,`interno`),Kg(),Mk(697,` do `),Jc(698,`code`),Mk(699,`po-list-view`),Kg(),Mk(700,`. Habilita e configura a coluna de sele\xE7\xE3o
(checkbox/radio) \xE0 esquerda do conte\xFAdo.`),Kg()()(),Jc(701,`tr`,55)(702,`td`,19)(703,`div`,33)(704,`span`,34),Mk(705,` (p-setting)`),_u(706,`br`),Kg()()(),Jc(707,`td`,22)(708,`code`,35),Mk(709,`EventEmitter`),Kg()(),Jc(710,`td`,24),Mk(711,`-`),Kg(),Jc(712,`td`,25)(713,`em`)(714,`strong`),Mk(715,`(opcional)`),Kg()(),Jc(716,`p`),Mk(717,`Evento disparado ao clicar em `),Jc(718,`strong`),Mk(719,`Configurações`),Kg(),Mk(720,` incluído no menu de ações do header.`),Kg()()(),Jc(721,`tr`,56)(722,`td`,19)(723,`div`,20)(724,`span`,21),Mk(725,` p-size`),_u(726,`br`),Kg()()(),Jc(727,`td`,22)(728,`code`,31),Mk(729,`string`),Kg()(),Jc(730,`td`,24)(731,`p`)(732,`code`),Mk(733,`medium`),Kg()()(),Jc(734,`td`,25)(735,`em`)(736,`strong`),Mk(737,`(opcional)`),Kg()(),Jc(738,`p`),Mk(739,`Define o tamanho dos botões do componente:`),Kg(),Jc(740,`ul`)(741,`li`)(742,`code`),Mk(743,`small`),Kg(),Mk(744,`: altura de 32px (disponível apenas para acessibilidade AA).`),Kg(),Jc(745,`li`)(746,`code`),Mk(747,`medium`),Kg(),Mk(748,`: altura de 44px.`),Kg()(),Jc(749,`blockquote`)(750,`p`),Mk(751,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(752,`code`),Mk(753,`medium`),Kg(),Mk(754,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(755,`a`,57),Mk(756,`po-theme`),Kg(),Mk(757,`.`),Kg()()()(),Jc(758,`tr`,58)(759,`td`,19)(760,`div`,20)(761,`span`,21),Mk(762,` p-subtitle`),_u(763,`br`),Kg()()(),Jc(764,`td`,22)(765,`code`,31),Mk(766,`string`),Kg()(),Jc(767,`td`,24),Mk(768,`-`),Kg(),Jc(769,`td`,25)(770,`p`),Mk(771,`Uso `),Jc(772,`strong`),Mk(773,`interno`),Kg(),Mk(774,` do `),Jc(775,`code`),Mk(776,`po-list-view`),Kg(),Mk(777,`. Define um subt\xEDtulo exibido no header,
abaixo do t\xEDtulo.`),Kg()()(),Jc(778,`tr`,59)(779,`td`,19)(780,`div`,20)(781,`span`,21),Mk(782,` p-tag-icon`),_u(783,`br`),Kg()()(),Jc(784,`td`,22)(785,`code`,31),Mk(786,`string `),Kg(),Jc(787,`code`,60),Mk(788,` TemplateRef<void>`),Kg()(),Jc(789,`td`,24),Mk(790,`-`),Kg(),Jc(791,`td`,25)(792,`em`)(793,`strong`),Mk(794,`(opcional)`),Kg()(),Jc(795,`p`),Mk(796,`Define o ícone exibido ao lado do label da `),Jc(797,`code`),Mk(798,`p-tag`),Kg(),Mk(799,`.`),Kg(),Jc(800,`p`),Mk(801,`É possível usar qualquer um dos ícones da `),Jc(802,`a`,61),Mk(803,`Biblioteca de ícones PO UI`),Kg(),Mk(804,`, conforme exemplo:`),Kg(),Jc(805,`pre`)(806,`code`),Mk(807,`<po-widget p-tag-icon="an an-user"></po-widget>
`),Kg()(),Jc(808,`p`),Mk(809,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Jc(810,`em`),Mk(811,`Font Awesome`),Kg(),Mk(812,`, desde que a biblioteca
esteja carregada no projeto:`),Kg(),Jc(813,`pre`)(814,`code`),Mk(815,`<po-widget p-tag-icon="fa fa-podcast"></po-widget>
`),Kg()(),Jc(816,`p`),Mk(817,`Outra opção seria a customização do ícone através do `),Jc(818,`code`),Mk(819,`TemplateRef`),Kg(),Mk(820,`, conforme exemplo abaixo:`),Kg(),Jc(821,`pre`)(822,`code`),Mk(823,`<po-widget [p-tag-icon]="template"></po-widget>

<ng-template #template>
  <i class="fa fa-podcast" style="font-size: inherit;"></i>
</ng-template>
`),Kg()(),Jc(824,`blockquote`)(825,`p`),Mk(826,`Para o ícone enquadrar corretamente, deve-se utilizar `),Jc(827,`code`),Mk(828,`font-size: inherit`),Kg(),Mk(829,` caso o ícone utilizado não aplique-o.`),Kg()()()(),Jc(830,`tr`,62)(831,`td`,19)(832,`div`,20)(833,`span`,21),Mk(834,` p-tag`),_u(835,`br`),Kg()()(),Jc(836,`td`,22)(837,`code`,31),Mk(838,`string`),Kg()(),Jc(839,`td`,24),Mk(840,`-`),Kg(),Jc(841,`td`,25)(842,`em`)(843,`strong`),Mk(844,`(opcional)`),Kg()(),Jc(845,`p`),Mk(846,`Label da tag exibida no header.`),Kg(),Jc(847,`blockquote`)(848,`p`),Mk(849,`Quando a tag atingir uma largura m\xE1xima de 15rem (240px), ser\xE1 truncado com retic\xEAncias.
O conte\xFAdo completo poder\xE1 ser visualizado ao passar o mouse sobre a tag, por meio do tooltip.`),Kg()()()(),Jc(850,`tr`,63)(851,`td`,19)(852,`div`,20)(853,`span`,21),Mk(854,` p-tag-position`),_u(855,`br`),Kg()()(),Jc(856,`td`,22)(857,`code`,31),Mk(858,`string`),Kg()(),Jc(859,`td`,24)(860,`p`)(861,`code`),Mk(862,`right`),Kg()()(),Jc(863,`td`,25)(864,`em`)(865,`strong`),Mk(866,`(opcional)`),Kg()(),Jc(867,`p`),Mk(868,`Define o posicionamento da `),Jc(869,`code`),Mk(870,`po-tag`),Kg(),Mk(871,` no cabeçalho do Widget:`),Kg(),Jc(872,`ul`)(873,`li`)(874,`code`),Mk(875,`right`),Kg(),Mk(876,`: posicionada no canto superior direito do cabeçalho.`),Kg(),Jc(877,`li`)(878,`code`),Mk(879,`top`),Kg(),Mk(880,`: posicionada à esquerda, acima do título (quando houver).`),Kg(),Jc(881,`li`)(882,`code`),Mk(883,`bottom`),Kg(),Mk(884,`: posicionada à esquerda, abaixo do título (quando houver).`),Kg()()()(),Jc(885,`tr`,64)(886,`td`,19)(887,`div`,20)(888,`span`,21),Mk(889,` p-tag-type`),_u(890,`br`),Kg()()(),Jc(891,`td`,22)(892,`code`,65),Mk(893,`PoTagType `),Kg(),Jc(894,`code`,31),Mk(895,` string`),Kg()(),Jc(896,`td`,24)(897,`p`)(898,`code`),Mk(899,`success`),Kg()()(),Jc(900,`td`,25)(901,`em`)(902,`strong`),Mk(903,`(opcional)`),Kg()(),Jc(904,`p`),Mk(905,`Define o tipo da `),Jc(906,`code`),Mk(907,`p-tag`),Kg(),Mk(908,`, conforme o enum `),Jc(909,`strong`),Mk(910,`PoTagType`),Kg(),Mk(911,`.`),Kg(),Jc(912,`p`),Mk(913,`Valores válidos:`),Kg(),Jc(914,`ul`)(915,`li`)(916,`code`),Mk(917,`success`),Kg(),Mk(918,`: cor verde utilizada para simbolizar sucesso ou êxito.`),Kg(),Jc(919,`li`)(920,`code`),Mk(921,`warning`),Kg(),Mk(922,`: cor amarela que representa aviso ou advertência.`),Kg(),Jc(923,`li`)(924,`code`),Mk(925,`danger`),Kg(),Mk(926,`: cor vermelha para erro ou aviso crítico.`),Kg(),Jc(927,`li`)(928,`code`),Mk(929,`info`),Kg(),Mk(930,`: cor azul claro que caracteriza conteúdo informativo.`),Kg(),Jc(931,`li`)(932,`code`),Mk(933,`neutral`),Kg(),Mk(934,`: cor cinza claro para uso geral.`),Kg()()()(),Jc(935,`tr`,66)(936,`td`,19)(937,`div`,20)(938,`span`,21),Mk(939,` p-title`),_u(940,`br`),Kg()()(),Jc(941,`td`,22)(942,`code`,31),Mk(943,`string`),Kg()(),Jc(944,`td`,24),Mk(945,`-`),Kg(),Jc(946,`td`,25)(947,`em`)(948,`strong`),Mk(949,`(opcional)`),Kg()(),Jc(950,`p`),Mk(951,`Título do componente.`),Kg(),Jc(952,`blockquote`)(953,`p`),Mk(954,`Quando o conte\xFAdo exceder o espa\xE7o dispon\xEDvel, o texto ser\xE1 truncado com retic\xEAncias. O conte\xFAdo completo poder\xE1
ser visualizado ao passar o mouse sobre a tag, por meio do tooltip.`),Kg()()()(),Jc(955,`tr`,67)(956,`td`,19)(957,`div`,33)(958,`span`,34),Mk(959,` (p-title-action)`),_u(960,`br`),Kg()()(),Jc(961,`td`,22)(962,`code`,35),Mk(963,`EventEmitter`),Kg()(),Jc(964,`td`,24),Mk(965,`-`),Kg(),Jc(966,`td`,25)(967,`em`)(968,`strong`),Mk(969,`(opcional)`),Kg()(),Jc(970,`p`),Mk(971,`Evento disparado ao clicar no título definido em `),Jc(972,`code`),Mk(973,`p-title`),Kg(),Mk(974,`.`),Kg()()()(),Jc(975,`h3`),Mk(976,`Interfaces`),Kg(),Jc(977,`h4`,68)(978,`code`,5),Mk(979,`PoPopupAction`),Kg()(),Jc(980,`div`,2)(981,`p`),Mk(982,`Interface para lista de ações do componente.`),Kg()(),Jc(983,`h4`,14),Mk(984,`Propriedades`),Kg(),Jc(985,`table`,15)(986,`tr`,16)(987,`th`,17),Mk(988,`Nome`),Kg(),Jc(989,`th`,17),Mk(990,`Tipo`),Kg(),Jc(991,`th`,17),Mk(992,`Descrição`),Kg()(),Jc(993,`tr`,69)(994,`td`,19)(995,`div`,20)(996,`span`,21),Mk(997,` action`),_u(998,`br`),Kg()()(),Jc(999,`td`,22)(1e3,`code`,70),Mk(1001,`Function`),Kg()(),Jc(1002,`td`,25)(1003,`em`)(1004,`strong`),Mk(1005,`(opcional)`),Kg()(),Jc(1006,`p`),Mk(1007,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),Kg(),Jc(1008,`p`),Mk(1009,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Jc(1010,`code`),Mk(1011,`subItems`),Kg(),Mk(1012,`.`),Kg(),Jc(1013,`blockquote`)(1014,`p`),Mk(1015,`Para que a função seja executada no contexto do componente, utilize `),Jc(1016,`em`),Mk(1017,`bind`),Kg(),Mk(1018,`:
`),Jc(1019,`code`),Mk(1020,`action: this.myFunction.bind(this)`),Kg()()()()(),Jc(1021,`tr`,71)(1022,`td`,19)(1023,`div`,20)(1024,`span`,21),Mk(1025,` disabled`),_u(1026,`br`),Kg()()(),Jc(1027,`td`,22)(1028,`code`,40),Mk(1029,`boolean `),Kg(),Jc(1030,`code`,70),Mk(1031,` Function`),Kg()(),Jc(1032,`td`,25)(1033,`em`)(1034,`strong`),Mk(1035,`(opcional)`),Kg()(),Jc(1036,`p`),Mk(1037,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),Kg()()(),Jc(1038,`tr`,72)(1039,`td`,19)(1040,`div`,20)(1041,`span`,21),Mk(1042,` icon`),_u(1043,`br`),Kg()()(),Jc(1044,`td`,22)(1045,`code`,31),Mk(1046,`string `),Kg(),Jc(1047,`code`,60),Mk(1048,` TemplateRef<void>`),Kg()(),Jc(1049,`td`,25)(1050,`em`)(1051,`strong`),Mk(1052,`(opcional)`),Kg()(),Jc(1053,`p`),Mk(1054,`Ícone exibido ao lado esquerdo do rótulo.`),Kg(),Jc(1055,`p`),Mk(1056,`Aceita ícones da `),Jc(1057,`a`,61),Mk(1058,`Biblioteca de ícones`),Kg(),Mk(1059,`, fontes externas (ex: Font Awesome)
ou um `),Jc(1060,`code`),Mk(1061,`TemplateRef`),Kg(),Mk(1062,` para ícones customizados.`),Kg(),Jc(1063,`pre`)(1064,`code`),Mk(1065,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),Kg()()()(),Jc(1066,`tr`,73)(1067,`td`,19)(1068,`div`,20)(1069,`span`,21),Mk(1070,` label`),_u(1071,`br`),Kg()()(),Jc(1072,`td`,22)(1073,`code`,31),Mk(1074,`string`),Kg()(),Jc(1075,`td`,25)(1076,`p`),Mk(1077,`Rótulo da ação.`),Kg(),Jc(1078,`p`),Mk(1079,`A label também pode representar o agrupador de subitens quando a ação possuir `),Jc(1080,`code`),Mk(1081,`subItems`),Kg(),Mk(1082,`.`),Kg()()(),Jc(1083,`tr`,74)(1084,`td`,19)(1085,`div`,20)(1086,`span`,21),Mk(1087,` selected`),_u(1088,`br`),Kg()()(),Jc(1089,`td`,22)(1090,`code`,40),Mk(1091,`boolean`),Kg()(),Jc(1092,`td`,25)(1093,`em`)(1094,`strong`),Mk(1095,`(opcional)`),Kg()(),Jc(1096,`p`),Mk(1097,`Define se a ação está selecionada.`),Kg()()(),Jc(1098,`tr`,75)(1099,`td`,19)(1100,`div`,20)(1101,`span`,21),Mk(1102,` separator`),_u(1103,`br`),Kg()()(),Jc(1104,`td`,22)(1105,`code`,40),Mk(1106,`boolean`),Kg()(),Jc(1107,`td`,25)(1108,`em`)(1109,`strong`),Mk(1110,`(opcional)`),Kg()(),Jc(1111,`p`),Mk(1112,`Atribui uma linha separadora acima do item.`),Kg()()(),Jc(1113,`tr`,76)(1114,`td`,19)(1115,`div`,20)(1116,`span`,21),Mk(1117,` subItems`),_u(1118,`br`),Kg()()(),Jc(1119,`td`,22)(1120,`code`,27),Mk(1121,`Array<PoPopupAction>`),Kg()(),Jc(1122,`td`,25)(1123,`em`)(1124,`strong`),Mk(1125,`(opcional)`),Kg()(),Jc(1126,`p`),Mk(1127,`Define uma lista de subitens para criação de menus aninhados.`),Kg(),Jc(1128,`pre`)(1129,`code`),Mk(1130,`{ label: 'Relat\xF3rios', subItems: [{ label: 'Mensal' }, { label: 'Anual' }] }
`),Kg()(),Jc(1131,`p`),Mk(1132,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),Kg(),Jc(1133,`blockquote`)(1134,`p`),Mk(1135,`As propriedades `),Jc(1136,`code`),Mk(1137,`disabled`),Kg(),Mk(1138,`, `),Jc(1139,`code`),Mk(1140,`type`),Kg(),Mk(1141,` e `),Jc(1142,`code`),Mk(1143,`visible`),Kg(),Mk(1144,` não são aplicadas visualmente ao item agrupador.`),Kg()(),Jc(1145,`blockquote`)(1146,`p`),Mk(1147,`Quando `),Jc(1148,`code`),Mk(1149,`url`),Kg(),Mk(1150,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),Kg()(),Jc(1151,`blockquote`)(1152,`p`),Mk(1153,`Em subníveis aninhados, o `),Jc(1154,`code`),Mk(1155,`icon`),Kg(),Mk(1156,` do agrupador é substituído pelo indicador de navegação (seta).`),Kg()()()(),Jc(1157,`tr`,77)(1158,`td`,19)(1159,`div`,20)(1160,`span`,21),Mk(1161,` subItemsLazy`),_u(1162,`br`),Kg()()(),Jc(1163,`td`,22)(1164,`code`,78),Mk(1165,`(item: PoPopupAction) => Observable<Array<PoPopupAction>>`),Kg()(),Jc(1166,`td`,25)(1167,`em`)(1168,`strong`),Mk(1169,`(opcional)`),Kg()(),Jc(1170,`p`),Mk(1171,`Define o carregamento assíncrono (lazy loading) dos subitens de um agrupador.`),Kg(),Jc(1172,`p`),Mk(1173,`Recebe o item agrupador e retorna um `),Jc(1174,`code`),Mk(1175,`Observable<Array<PoPopupAction>>`),Kg(),Mk(1176,`. A requisi\xE7\xE3o \xE9 disparada
`),Jc(1177,`strong`),Mk(1178,`apenas`),Kg(),Mk(1179,` no momento da expansão (clique ou atalho de teclado), exibindo placeholders com `),Jc(1180,`code`),Mk(1181,`po-skeleton`),Kg(),Mk(1182,`
enquanto os dados s\xE3o carregados:`),Kg(),Jc(1183,`pre`)(1184,`code`),Mk(1185,`{
  label: 'Relat\xF3rios',
  subItemsLazy: (item) => this.reportService.getReports(item)
}
`),Kg()(),Jc(1186,`blockquote`)(1187,`p`),Mk(1188,`O resultado \xE9 armazenado em cache ap\xF3s o primeiro carregamento bem-sucedido.
Em caso de falha, \xE9 exibida uma mensagem com a op\xE7\xE3o de tentar novamente.`),Kg()(),Jc(1189,`p`),Mk(1190,`Ao definir esta propriedade, o item exibirá um ícone indicador de subnível.`),Kg()()(),Jc(1191,`tr`,79)(1192,`td`,19)(1193,`div`,20)(1194,`span`,21),Mk(1195,` type`),_u(1196,`br`),Kg()()(),Jc(1197,`td`,22)(1198,`code`,31),Mk(1199,`string`),Kg()(),Jc(1200,`td`,25)(1201,`em`)(1202,`strong`),Mk(1203,`(opcional)`),Kg()(),Jc(1204,`p`),Mk(1205,`Define a cor do item.`),Kg(),Jc(1206,`p`),Mk(1207,`Valores válidos:`),Kg(),Jc(1208,`ul`)(1209,`li`)(1210,`code`),Mk(1211,`default`),Kg()(),Jc(1212,`li`)(1213,`code`),Mk(1214,`danger`),Kg()()()()(),Jc(1215,`tr`,80)(1216,`td`,19)(1217,`div`,20)(1218,`span`,21),Mk(1219,` url`),_u(1220,`br`),Kg()()(),Jc(1221,`td`,22)(1222,`code`,31),Mk(1223,`string`),Kg()(),Jc(1224,`td`,25)(1225,`em`)(1226,`strong`),Mk(1227,`(opcional)`),Kg()(),Jc(1228,`p`),Mk(1229,`URL para redirecionamento. Aceita rotas internas e links externos.`),Kg(),Jc(1230,`p`),Mk(1231,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Jc(1232,`code`),Mk(1233,`url`),Kg(),Mk(1234,` é informada em um agrupador, o clique `),Jc(1235,`strong`),Mk(1236,`não abrirá os subitens`),Kg(),Mk(1237,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),Kg(),Jc(1238,`blockquote`)(1239,`p`),Mk(1240,`Quando informada, tem prioridade sobre a propriedade `),Jc(1241,`code`),Mk(1242,`action`),Kg(),Mk(1243,`.`),Kg()()()(),Jc(1244,`tr`,81)(1245,`td`,19)(1246,`div`,20)(1247,`span`,21),Mk(1248,` visible`),_u(1249,`br`),Kg()()(),Jc(1250,`td`,22)(1251,`code`,40),Mk(1252,`boolean `),Kg(),Jc(1253,`code`,70),Mk(1254,` Function`),Kg()(),Jc(1255,`td`,25)(1256,`em`)(1257,`strong`),Mk(1258,`(opcional)`),Kg()(),Jc(1259,`p`),Mk(1260,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),Kg()()()(),Jc(1261,`h4`,82)(1262,`code`,5),Mk(1263,`PoWidgetAvatar`),Kg()(),Jc(1264,`div`,2)(1265,`p`),Mk(1266,`Interface para definição do avatar no `),Jc(1267,`code`),Mk(1268,`po-widget`),Kg(),Mk(1269,`.`),Kg()(),Jc(1270,`h4`,14),Mk(1271,`Propriedades`),Kg(),Jc(1272,`table`,15)(1273,`tr`,16)(1274,`th`,17),Mk(1275,`Nome`),Kg(),Jc(1276,`th`,17),Mk(1277,`Tipo`),Kg(),Jc(1278,`th`,17),Mk(1279,`Descrição`),Kg()(),Jc(1280,`tr`,83)(1281,`td`,19)(1282,`div`,20)(1283,`span`,21),Mk(1284,` customTemplate`),_u(1285,`br`),Kg()()(),Jc(1286,`td`,22)(1287,`code`,23),Mk(1288,`TemplateRef<any>`),Kg()(),Jc(1289,`td`,25)(1290,`em`)(1291,`strong`),Mk(1292,`(opcional)`),Kg()(),Jc(1293,`p`),Mk(1294,`Permite a criação de template customizado para o avatar`),Kg(),Jc(1295,`pre`)(1296,`code`),Mk(1297,`<po-widget
 [p-avatar]="{ customTemplate: customAvatar }"
/>

<ng-template #customAvatar>
  ...
</ng-template>
`),Kg()()()(),Jc(1298,`tr`,84)(1299,`td`,19)(1300,`div`,20)(1301,`span`,21),Mk(1302,` size`),_u(1303,`br`),Kg()()(),Jc(1304,`td`,22)(1305,`code`,31),Mk(1306,`string`),Kg()(),Jc(1307,`td`,25)(1308,`em`)(1309,`strong`),Mk(1310,`(opcional)`),Kg()(),Jc(1311,`p`),Mk(1312,`Tamanho de exibição do componente `),Jc(1313,`code`),Mk(1314,`po-avatar`),Kg(),Mk(1315,`.`),Kg(),Jc(1316,`p`),Mk(1317,`Valores válidos:`),Kg(),Jc(1318,`ul`)(1319,`li`)(1320,`code`),Mk(1321,`xs`),Kg(),Mk(1322,` (24x24)`),Kg(),Jc(1323,`li`)(1324,`code`),Mk(1325,`sm`),Kg(),Mk(1326,` (32x32)`),Kg(),Jc(1327,`li`)(1328,`code`),Mk(1329,`md`),Kg(),Mk(1330,` (64x64)`),Kg(),Jc(1331,`li`)(1332,`code`),Mk(1333,`lg`),Kg(),Mk(1334,` (96x96)`),Kg(),Jc(1335,`li`)(1336,`code`),Mk(1337,`xl`),Kg(),Mk(1338,` (144x144)`),Kg()()()(),Jc(1339,`tr`,85)(1340,`td`,19)(1341,`div`,20)(1342,`span`,21),Mk(1343,` src`),_u(1344,`br`),Kg()()(),Jc(1345,`td`,22)(1346,`code`,31),Mk(1347,`string`),Kg()(),Jc(1348,`td`,25)(1349,`em`)(1350,`strong`),Mk(1351,`(opcional)`),Kg()(),Jc(1352,`p`),Mk(1353,`Fonte da imagem que pode ser um caminho local (`),Jc(1354,`code`),Mk(1355,`./assets/images/logo-black-small.png`),Kg(),Mk(1356,`)
ou um servidor externo (`),Jc(1357,`code`),Mk(1358,`https://po-ui.io/assets/images/logo-black-small.png`),Kg(),Mk(1359,`).`),Kg()()(),Jc(1360,`tr`,86)(1361,`td`,19)(1362,`div`,20)(1363,`span`,21),Mk(1364,` widthCustomTemplate`),_u(1365,`br`),Kg()()(),Jc(1366,`td`,22)(1367,`code`,31),Mk(1368,`string`),Kg()(),Jc(1369,`td`,25)(1370,`em`)(1371,`strong`),Mk(1372,`(opcional)`),Kg()(),Jc(1373,`p`),Mk(1374,`Define a largura em porcentagem do `),Jc(1375,`code`),Mk(1376,`customTemplate`),Kg(),Mk(1377,`.`),Kg(),Jc(1378,`p`),Mk(1379,`O valor máximo aceito é `),Jc(1380,`code`),Mk(1381,`50%`),Kg(),Mk(1382,`.`),Kg()()()(),Jc(1383,`h3`),Mk(1384,`Enums`),Kg(),Jc(1385,`h4`,87)(1386,`code`,5),Mk(1387,`PoButtonKind`),Kg()(),Jc(1388,`div`,2)(1389,`p`),Mk(1390,`Estilos disponíveis do button.`),Kg()(),Jc(1391,`h4`,14),Mk(1392,`Propriedades`),Kg(),Jc(1393,`table`,15)(1394,`tr`,16)(1395,`th`,17),Mk(1396,`Nome`),Kg(),Jc(1397,`th`,17),Mk(1398,`Descrição`),Kg()(),Jc(1399,`tr`,88)(1400,`td`,19)(1401,`div`,20)(1402,`span`,21),Mk(1403,` primary`),_u(1404,`br`),Kg()()(),Jc(1405,`td`,25)(1406,`p`),Mk(1407,`Estilo primário, usado para ações principais que requerem maior destaque.`),Kg()()(),Jc(1408,`tr`,89)(1409,`td`,19)(1410,`div`,20)(1411,`span`,21),Mk(1412,` secondary`),_u(1413,`br`),Kg()()(),Jc(1414,`td`,25)(1415,`p`),Mk(1416,`Estilo secundário, usado como padrão, para ações comuns.`),Kg()()(),Jc(1417,`tr`,90)(1418,`td`,19)(1419,`div`,20)(1420,`span`,21),Mk(1421,` tertiary`),_u(1422,`br`),Kg()()(),Jc(1423,`td`,25)(1424,`p`),Mk(1425,`Estilo terciário, ideal para ações menos importantes, sem fundo preenchido.`),Kg()()(),Jc(1426,`tr`,91)(1427,`td`,19)(1428,`div`,20)(1429,`span`,21),Mk(1430,` glow`),_u(1431,`br`),Kg()()(),Jc(1432,`td`,25)(1433,`p`),Mk(1434,`Estilo com brilho animado que percorre a borda do botão, usado para destacar uma chamada para ação.`),Kg(),Jc(1435,`blockquote`)(1436,`p`),Mk(1437,`Incompatível com a propriedade `),Jc(1438,`code`),Mk(1439,`p-danger`),Kg(),Mk(1440,`.`),Kg()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function $e(o,A){if(o&1&&(Jc(0,`div`,1),_u(1,`sample-po-widget-basic-view`)(2,`sample-po-widget-labs-view`)(3,`sample-po-widget-finance-dashboard-view`)(4,`sample-po-widget-card-view`),Kg()),o&2){let d=tk();Ab(`hidden`,d.activeTab!==`web`)}}var et=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;title=`Widget`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:r||`web`,this.title=`Widget · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(r,i){r&1&&(Jc(0,`po-page-default`,0),LO(1,$e,5,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-widget-doc`),Kg()()),r&2&&(Ab(`p-title`,i.title)(`p-actions`,i.actions),wg(),jO(i.hidePoWebSample?-1:1),wg(),Ab(`hidden`,i.activeTab!==`doc`))},dependencies:[Mze,Ce,_e,Ae,We,Te],encapsulation:2,changeDetection:1})}return o})()}];var Le=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[GV.forChild(et),GV]})}return o})();var Nt=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[M,Le]})}return o})();export{Nt as DocPoWidgetModule};