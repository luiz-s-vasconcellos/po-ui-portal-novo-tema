import{$r as RK,Ai as Zn,Br as MK,C as G4,Ca as o0,Ci as Xx,Cn as rie,Et as Yoe,Ia as rg,Ii as ab,Jr as Ok,Ka as vx,La as sb,Li as b,Mi as __,Mn as ure,Nr as I1,Oa as pe,Pa as r0,Qa as xF,Ra as uO,Sa as nu,Sn as ri,Tr as Fx,Ua as v_,Wn as yae,Xa as wg,Ya as we,Yn as zu,_r as Dx,_t as Vze,a as $oe,aa as ir,ca as jc,di as UE,ea as h,fr as DO,ha as lO,ii as SK,ir as Ax,ln as lre,mt as V4,oi as Sn,ri as SF,rr as Ag,sr as Bx,tt as Qte,x as Ff,xt as Wze,ya as mt,za as ue$1}from"./chunk-CtaZqRb_.js";import{n as P,t as M}from"./main-ZQ7GH27Y.js";var me=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-toolbar-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Toolbar`]],template:function(p,n){p&1&&nu(0,`po-toolbar`,0)},dependencies:[Wze],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a});var ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-toolbar-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Toolbar Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-toolbar-basic/sample-po-toolbar-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-toolbar p-title="PO Toolbar"></po-toolbar>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-toolbar-basic/sample-po-toolbar-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-toolbar-basic',
  templateUrl: './sample-po-toolbar-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToolbarBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-toolbar-basic`),wg(),nu(23,`hr`)),p&2&&(rg(5),Xx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,ve,n.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,me],encapsulation:2,changeDetection:1})}return a})();var de=(()=>{class a{poNotification=h(zu);action;actions;actionsIcon;notificationActions;notificationNumber;profile;profileActions;showNotification;title;toolbarActionType;actionTypes=[{value:`danger`,label:`Danger`},{value:`default`,label:`Default`}];iconOptions=[{value:`an an-chats`,label:`an an-chats`},{value:`an an-clock`,label:`an an-clock`},{value:`an an-sign-out`,label:`an an-sign-out`},{value:`an an-lock`,label:`an an-lock`},{value:`fa fa-calculator`,label:`fa fa-calculator`},{value:`far fa-comment-alt`,label:`far fa-comment-alt`}];actionsIconOptions=[{value:`an an-clock`,label:`an an-clock`},{value:`an an-sign-out`,label:`an an-sign-out`},{value:`an an-lock`,label:`an an-lock`},{value:`an an-gear`,label:`an an-gear`},{value:`far fa-comment-alt`,label:`far fa-comment-alt`}];toolbarActionTypes=[{label:`Actions`,value:`actions`},{label:`Profile`,value:`profile`},{label:`Notification`,value:`notification`}];ngOnInit(){this.restore()}addAction(l,p){let n=Object.assign({},l);n.action=n.action?this.showAction.bind(this,n.action):void 0,this.toolbarActionType===`profile`?this.profileActions.push(n):this.toolbarActionType===`notification`?this.notificationActions.push(n):this.actions.push(n),p.reset()}restore(){this.action={label:void 0},this.profile={avatar:``,subtitle:``,title:``},this.actions=[],this.actionsIcon=void 0,this.profileActions=[],this.notificationActions=[],this.notificationNumber=void 0,this.showNotification=!0,this.title=`PO Toolbar`}showAction(l){this.poNotification.success(`Action clicked: ${l}`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-toolbar-labs`]],standalone:!1,decls:33,vars:27,consts:[[`formAction`,`ngForm`],[`formProfile`,`ngForm`],[`formToolbar`,`ngForm`],[3,`p-actions`,`p-actions-icon`,`p-profile`,`p-profile-actions`,`p-notification-actions`,`p-notification-number`,`p-show-notification`,`p-title`],[1,`sample-container`],[1,`po-row`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionIcon`,`p-clean`,``,`p-label`,`Action icon`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`actionLabel`,`p-clean`,``,`p-label`,`Action label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionUrl`,`p-clean`,``,`p-label`,`Action url`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionType`,`p-label`,`Action type`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`actionDisabled`,`p-clean`,``,`p-label`,`Action separator`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`toolbarActionType`,`p-columns`,`3`,`p-label`,`Toolbar action type`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add Action`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`actionsIcon`,`p-clean`,``,`p-label`,`Actions icon`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`profileTitle`,`p-clean`,``,`p-label`,`Profile title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`profileSubtitle`,`p-clean`,``,`p-label`,`Profile subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`profileAvatar`,`p-clean`,``,`p-label`,`Profile avatar`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`notificationNumber`,`p-clean`,``,`p-label`,`Notification number`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`showNotification`,`p-clean`,``,`p-label`,`Show notification`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(p,n){if(p&1){let s=Ax();nu(0,`po-toolbar`,3),jc(1,`div`,4)(2,`form`,null,0)(4,`div`,5)(5,`po-input`,6),r0(),ab(`ngModelChange`,function(i){return v_(s),uO(n.action.action,i)||(n.action.action=i),__(i)}),wg(),jc(6,`po-select`,7),r0(),ab(`ngModelChange`,function(i){return v_(s),uO(n.action.icon,i)||(n.action.icon=i),__(i)}),wg(),jc(7,`po-input`,8),r0(),ab(`ngModelChange`,function(i){return v_(s),uO(n.action.label,i)||(n.action.label=i),__(i)}),wg(),jc(8,`po-input`,9),r0(),ab(`ngModelChange`,function(i){return v_(s),uO(n.action.url,i)||(n.action.url=i),__(i)}),wg(),jc(9,`po-radio-group`,10),r0(),ab(`ngModelChange`,function(i){return v_(s),uO(n.action.type,i)||(n.action.type=i),__(i)}),wg(),jc(10,`po-switch`,11),r0(),ab(`ngModelChange`,function(i){return v_(s),uO(n.action.separator,i)||(n.action.separator=i),__(i)}),wg(),jc(11,`po-radio-group`,12),r0(),ab(`ngModelChange`,function(i){return v_(s),uO(n.toolbarActionType,i)||(n.toolbarActionType=i),__(i)}),wg()(),jc(12,`div`,5)(13,`po-button`,13),mt(`p-click`,function(){v_(s);let i=Bx(3);return __(n.addAction(n.action,i))}),wg()()(),nu(14,`po-divider`),jc(15,`div`,5)(16,`po-select`,14),r0(),ab(`ngModelChange`,function(i){return v_(s),uO(n.actionsIcon,i)||(n.actionsIcon=i),__(i)}),wg()(),nu(17,`po-divider`),jc(18,`form`,null,1)(20,`div`,5)(21,`po-input`,15),r0(),ab(`ngModelChange`,function(i){return v_(s),uO(n.profile.title,i)||(n.profile.title=i),__(i)}),wg(),jc(22,`po-input`,16),r0(),ab(`ngModelChange`,function(i){return v_(s),uO(n.profile.subtitle,i)||(n.profile.subtitle=i),__(i)}),wg(),jc(23,`po-input`,17),r0(),ab(`ngModelChange`,function(i){return v_(s),uO(n.profile.avatar,i)||(n.profile.avatar=i),__(i)}),wg()()(),nu(24,`po-divider`),jc(25,`form`,null,2)(27,`div`,5)(28,`po-input`,18),r0(),ab(`ngModelChange`,function(i){return v_(s),uO(n.title,i)||(n.title=i),__(i)}),wg(),jc(29,`po-number`,19),r0(),ab(`ngModelChange`,function(i){return v_(s),uO(n.notificationNumber,i)||(n.notificationNumber=i),__(i)}),wg(),jc(30,`po-switch`,20),r0(),ab(`ngModelChange`,function(i){return v_(s),uO(n.showNotification,i)||(n.showNotification=i),__(i)}),wg()(),jc(31,`div`,5)(32,`po-button`,21),mt(`p-click`,function(){v_(s);let i=Bx(3),Se=Bx(19);return Bx(26).reset(),Se.reset(),i.reset(),__(n.restore())}),wg()()()()}if(p&2){let s=Bx(3);UE(`p-actions`,n.actions)(`p-actions-icon`,n.actionsIcon)(`p-profile`,n.profile)(`p-profile-actions`,n.profileActions)(`p-notification-actions`,n.notificationActions)(`p-notification-number`,n.notificationNumber)(`p-show-notification`,n.showNotification)(`p-title`,n.title),rg(5),sb(`ngModel`,n.action.action),o0(),rg(),sb(`ngModel`,n.action.icon),UE(`p-options`,n.iconOptions),o0(),rg(),sb(`ngModel`,n.action.label),o0(),rg(),sb(`ngModel`,n.action.url),o0(),rg(),sb(`ngModel`,n.action.type),UE(`p-options`,n.actionTypes),o0(),rg(),sb(`ngModel`,n.action.separator),o0(),rg(),sb(`ngModel`,n.toolbarActionType),UE(`p-options`,n.toolbarActionTypes),o0(),rg(2),UE(`p-disabled`,s.invalid),rg(3),sb(`ngModel`,n.actionsIcon),UE(`p-options`,n.actionsIconOptions),o0(),rg(5),sb(`ngModel`,n.profile.title),o0(),rg(),sb(`ngModel`,n.profile.subtitle),o0(),rg(),sb(`ngModel`,n.profile.avatar),o0(),rg(5),sb(`ngModel`,n.title),o0(),rg(),sb(`ngModel`,n.notificationNumber),o0(),rg(),sb(`ngModel`,n.showNotification),o0()}},dependencies:[RK,SK,MK,xF,SF,ri,Ff,G4,$oe,Qte,Yoe,V4,Wze],styles:[`.sample-container[_ngcontent-%COMP%]{margin-top:50px}`],changeDetection:1})}return a})();var xe=a=>({"docs-sample-code-tabs":a});var ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-toolbar-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Toolbar Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-toolbar-labs/sample-po-toolbar-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<style>
  .sample-container {
    margin-top: 50px;
  }
</style>

<po-toolbar
  [p-actions]="actions"
  [p-actions-icon]="actionsIcon"
  [p-profile]="profile"
  [p-profile-actions]="profileActions"
  [p-notification-actions]="notificationActions"
  [p-notification-number]="notificationNumber"
  [p-show-notification]="showNotification"
  [p-title]="title"
>
</po-toolbar>

<div class="sample-container">
  <form #formAction="ngForm">
    <div class="po-row">
      <po-input class="po-md-6" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action"> </po-input>

      <po-select
        class="po-md-6"
        name="actionIcon"
        [(ngModel)]="action.icon"
        p-clean
        p-label="Action icon"
        [p-options]="iconOptions"
      >
      </po-select>

      <po-input class="po-md-6" name="actionLabel" [(ngModel)]="action.label" p-clean p-label="Action label" p-required>
      </po-input>

      <po-input class="po-md-6" name="actionUrl" [(ngModel)]="action.url" p-clean p-label="Action url"> </po-input>

      <po-radio-group
        class="po-md-6"
        name="actionType"
        [(ngModel)]="action.type"
        p-label="Action type"
        [p-options]="actionTypes"
      >
      </po-radio-group>

      <po-switch
        class="po-md-6"
        name="actionDisabled"
        [(ngModel)]="action.separator"
        p-clean
        p-label="Action separator"
      >
      </po-switch>

      <po-radio-group
        class="po-md-6"
        name="toolbarActionType"
        [(ngModel)]="toolbarActionType"
        p-columns="3"
        p-label="Toolbar action type"
        [p-options]="toolbarActionTypes"
      >
      </po-radio-group>
    </div>

    <div class="po-row">
      <po-button
        class="po-md-3"
        p-label="Add Action"
        [p-disabled]="formAction.invalid"
        (p-click)="addAction(action, formAction)"
      >
      </po-button>
    </div>
  </form>

  <po-divider />

  <div class="po-row">
    <po-select
      class="po-md-6"
      name="actionsIcon"
      [(ngModel)]="actionsIcon"
      p-clean
      p-label="Actions icon"
      [p-options]="actionsIconOptions"
    >
    </po-select>
  </div>

  <po-divider />

  <form #formProfile="ngForm">
    <div class="po-row">
      <po-input
        class="po-md-6"
        name="profileTitle"
        [(ngModel)]="profile.title"
        p-clean
        p-label="Profile title"
        p-required
      >
      </po-input>

      <po-input
        class="po-md-6"
        name="profileSubtitle"
        [(ngModel)]="profile.subtitle"
        p-clean
        p-label="Profile subtitle"
      >
      </po-input>

      <po-input class="po-md-6" name="profileAvatar" [(ngModel)]="profile.avatar" p-clean p-label="Profile avatar">
      </po-input>
    </div>
  </form>

  <po-divider />

  <form #formToolbar="ngForm">
    <div class="po-row">
      <po-input class="po-md-4" name="title" [(ngModel)]="title" p-clean p-label="Title" p-required> </po-input>

      <po-number
        class="po-md-4"
        name="notificationNumber"
        [(ngModel)]="notificationNumber"
        p-clean
        p-label="Notification number"
      >
      </po-number>

      <po-switch
        class="po-md-4"
        name="showNotification"
        [(ngModel)]="showNotification"
        p-clean
        p-label="Show notification"
      >
      </po-switch>
    </div>

    <div class="po-row">
      <po-button
        class="po-md-3"
        p-label="Sample Restore"
        (p-click)="formToolbar.reset(); formProfile.reset(); formAction.reset(); restore()"
      >
      </po-button>
    </div>
  </form>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-toolbar-labs/sample-po-toolbar-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import {
  PoNotificationService,
  PoRadioGroupOption,
  PoSelectOption,
  PoToolbarAction,
  PoToolbarProfile
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-toolbar-labs',
  templateUrl: './sample-po-toolbar-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToolbarLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action: PoToolbarAction;
  actions: Array<PoToolbarAction>;
  actionsIcon: string;
  notificationActions: Array<PoToolbarAction>;
  notificationNumber: number;
  profile: PoToolbarProfile;
  profileActions: Array<PoToolbarAction>;
  showNotification: boolean;
  title: string;
  toolbarActionType: string;

  public readonly actionTypes: Array<PoRadioGroupOption> = [
    { value: 'danger', label: 'Danger' },
    { value: 'default', label: 'Default' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-chats', label: 'an an-chats' },
    { value: 'an an-clock', label: 'an an-clock' },
    { value: 'an an-sign-out', label: 'an an-sign-out' },
    { value: 'an an-lock', label: 'an an-lock' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' },
    { value: 'far fa-comment-alt', label: 'far fa-comment-alt' }
  ];

  public readonly actionsIconOptions: Array<PoSelectOption> = [
    { value: 'an an-clock', label: 'an an-clock' },
    { value: 'an an-sign-out', label: 'an an-sign-out' },
    { value: 'an an-lock', label: 'an an-lock' },
    { value: 'an an-gear', label: 'an an-gear' },
    { value: 'far fa-comment-alt', label: 'far fa-comment-alt' }
  ];

  public readonly toolbarActionTypes: Array<PoRadioGroupOption> = [
    { label: 'Actions', value: 'actions' },
    { label: 'Profile', value: 'profile' },
    { label: 'Notification', value: 'notification' }
  ];

  ngOnInit() {
    this.restore();
  }

  addAction(action, form: NgForm) {
    const newAction = Object.assign({}, action);

    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;

    if (this.toolbarActionType === 'profile') {
      this.profileActions.push(newAction);
    } else if (this.toolbarActionType === 'notification') {
      this.notificationActions.push(newAction);
    } else {
      this.actions.push(newAction);
    }
    form.reset();
  }

  restore() {
    this.action = { label: undefined };
    this.profile = { avatar: '', subtitle: '', title: '' };
    this.actions = [];
    this.actionsIcon = undefined;
    this.profileActions = [];
    this.notificationActions = [];
    this.notificationNumber = undefined;
    this.showNotification = true;
    this.title = 'PO Toolbar';
  }

  showAction(label: string): void {
    this.poNotification.success(\`Action clicked: \${label}\`);
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-toolbar-labs`),wg(),nu(23,`hr`)),p&2&&(rg(5),Xx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,xe,n.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,de],encapsulation:2,changeDetection:1})}return a})();var be=(()=>{class a{poDialog=h(rie);poNotification=h(zu);notificationActions=[{icon:`an an-newspaper`,label:`PO news, stay tuned!`,type:`danger`,action:l=>this.onClickNotification(l)},{icon:`an an-chat`,label:`New message`,type:`danger`,action:l=>this.openDialog(l)}];profile={avatar:`https://via.placeholder.com/48x48?text=AVATAR`,subtitle:`dev@po-ui.com.br`,title:`Mr. Dev PO`};profileActions=[{icon:`an an-user`,label:`User data`,action:l=>this.showAction(l)},{icon:`an an-building-apartment`,label:`Company data`,action:l=>this.showAction(l)},{icon:`an an-gear`,label:`Settings`,action:l=>this.showAction(l)},{icon:`an an-sign-out`,label:`Exit`,type:`danger`,separator:!0,action:l=>this.showAction(l)}];actions=[{label:`Start cash register`,action:l=>this.showAction(l)},{label:`Finalize cash register`,action:l=>this.showAction(l)},{label:`Cash register options`,action:l=>this.showAction(l)}];title=`PO Toolbar Logged`;getNotificationNumber(){return this.notificationActions.filter(l=>l.type===`danger`).length}onClickNotification(l){window.open(`https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md`,`_blank`),l.type=`default`}openDialog(l){this.poDialog.alert({title:`Welcome`,message:`Hello Mr. Dev! Congratulations, you are a TOTVS!`,ok:void 0}),l.type=`default`}showAction(l){this.poNotification.success(`Action clicked: ${l.label}`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-toolbar-logged`]],standalone:!1,features:[we([zu])],decls:8,vars:7,consts:[[`p-actions-icon`,`an an-shopping-cart-simple`,3,`p-actions`,`p-profile`,`p-profile-actions`,`p-notification-actions`,`p-notification-number`,`p-title`],[1,`po-row`],[1,`sample-container`],[1,`po-sm-12`],[1,`po-font-title`],[1,`po-font-subtitle`]],template:function(p,n){p&1&&(nu(0,`po-toolbar`,0),jc(1,`div`,1)(2,`div`,2)(3,`po-widget`,3)(4,`div`,4),lO(5),wg(),jc(6,`div`,5),lO(7,`Let's work hard!`),wg()()()()),p&2&&(UE(`p-actions`,n.actions)(`p-profile`,n.profile)(`p-profile-actions`,n.profileActions)(`p-notification-actions`,n.notificationActions)(`p-notification-number`,n.getNotificationNumber())(`p-title`,n.title),rg(5),Ag(`Hello, `,n.profile.title,`.`))},dependencies:[Wze,yae],styles:[`.sample-container[_ngcontent-%COMP%]{margin-top:50px}`],changeDetection:1})}return a})();var Ae=a=>({"docs-sample-code-tabs":a});var fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-toolbar-logged-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Toolbar - Logged`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-toolbar-logged/sample-po-toolbar-logged.component.html`),wg(),jc(13,`pre`,7),lO(14,`<style>
  .sample-container {
    margin-top: 50px;
  }
</style>

<po-toolbar
  p-actions-icon="an an-shopping-cart-simple"
  [p-actions]="actions"
  [p-profile]="profile"
  [p-profile-actions]="profileActions"
  [p-notification-actions]="notificationActions"
  [p-notification-number]="getNotificationNumber()"
  [p-title]="title"
>
</po-toolbar>

<div class="po-row">
  <div class="sample-container">
    <po-widget class="po-sm-12">
      <div class="po-font-title">Hello, { { profile.title }}.</div>
      <div class="po-font-subtitle">Let's work hard!</div>
    </po-widget>
  </div>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-toolbar-logged/sample-po-toolbar-logged.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoDialogService, PoNotificationService, PoToolbarAction, PoToolbarProfile } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-toolbar-logged',
  templateUrl: './sample-po-toolbar-logged.component.html',
  providers: [PoNotificationService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToolbarLoggedComponent {
  private poDialog = inject(PoDialogService);
  private poNotification = inject(PoNotificationService);

  notificationActions: Array<PoToolbarAction> = [
    {
      icon: 'an an-newspaper',
      label: 'PO news, stay tuned!',
      type: 'danger',
      action: item => this.onClickNotification(item)
    },
    { icon: 'an an-chat', label: 'New message', type: 'danger', action: item => this.openDialog(item) }
  ];

  profile: PoToolbarProfile = {
    avatar: 'https://via.placeholder.com/48x48?text=AVATAR',
    subtitle: 'dev@po-ui.com.br',
    title: 'Mr. Dev PO'
  };

  profileActions: Array<PoToolbarAction> = [
    { icon: 'an an-user', label: 'User data', action: item => this.showAction(item) },
    { icon: 'an an-building-apartment', label: 'Company data', action: item => this.showAction(item) },
    { icon: 'an an-gear', label: 'Settings', action: item => this.showAction(item) },
    { icon: 'an an-sign-out', label: 'Exit', type: 'danger', separator: true, action: item => this.showAction(item) }
  ];

  actions: Array<PoToolbarAction> = [
    { label: 'Start cash register', action: item => this.showAction(item) },
    { label: 'Finalize cash register', action: item => this.showAction(item) },
    { label: 'Cash register options', action: item => this.showAction(item) }
  ];

  title: string = 'PO Toolbar Logged';

  getNotificationNumber() {
    return this.notificationActions.filter(not => not.type === 'danger').length;
  }

  onClickNotification(item: PoToolbarAction) {
    window.open('https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md', '_blank');

    item.type = 'default';
  }

  openDialog(item: PoToolbarAction) {
    this.poDialog.alert({
      title: 'Welcome',
      message: \`Hello Mr. Dev! Congratulations, you are a TOTVS!\`,
      ok: undefined
    });

    item.type = 'default';
  }

  showAction(item: PoToolbarAction): void {
    this.poNotification.success(\`Action clicked: \${item.label}\`);
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-toolbar-logged`),wg(),nu(23,`hr`)),p&2&&(rg(5),Xx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Ae,n.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,be],encapsulation:2,changeDetection:1})}return a})();var ge=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-toolbar-doc`]],standalone:!1,decls:567,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoToolbarAction>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoToolbarProfile`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`pan`,``,1,`docs-api-property-type`,`(item:`,`PoPopupAction)`,`=>`,`Observable<Array<PoPopupAction>>`]],template:function(p,n){p&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoToolbarModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do componente po-toolbar`),wg()(),jc(7,`h3`,3),lO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),lO(11,`PoToolbarComponent`),wg()(),jc(12,`div`,2)(13,`p`),lO(14,`O componente `),jc(15,`code`),lO(16,`po-toolbar`),wg(),lO(17,` é um cabeçalho para o título da aplicação e informações de usuário e notificações quando houver necessidade. `),wg()(),jc(18,`div`,6)(19,`h4`,7),lO(20,`Seletor`),wg(),jc(21,`pre`,8),lO(22,`<po-toolbar
    p-actions="Array<PoToolbarAction>"
    p-actions-icon="string | TemplateRef<void>"
    p-notification-actions="Array<PoToolbarAction>"
    p-notification-number="number"
    p-profile="PoToolbarProfile"
    p-profile-actions="Array<PoToolbarAction>"
    p-show-notification="boolean"
    p-title="string" >
</po-toolbar>
`),wg()(),jc(23,`h4`,9),lO(24,`Propriedades`),wg(),jc(25,`table`,10)(26,`tr`,11)(27,`th`,12),lO(28,`Nome`),wg(),jc(29,`th`,12),lO(30,`Tipo`),wg(),jc(31,`th`,12),lO(32,`Padrão`),wg(),jc(33,`th`,12),lO(34,`Descrição`),wg()(),jc(35,`tr`,13)(36,`td`,14)(37,`div`,15)(38,`span`,16),lO(39,` p-actions`),nu(40,`br`),wg()()(),jc(41,`td`,17)(42,`code`,18),lO(43,`Array<PoToolbarAction>`),wg()(),jc(44,`td`,19),lO(45,`-`),wg(),jc(46,`td`,20)(47,`em`)(48,`strong`),lO(49,`(opcional)`),wg()(),jc(50,`p`),lO(51,`Define uma lista de ações que serão exibidas ao clicar no ícone declarado em `),jc(52,`code`),lO(53,`p-actions-icon`),wg(),lO(54,`.`),wg()()(),jc(55,`tr`,13)(56,`td`,14)(57,`div`,15)(58,`span`,16),lO(59,` p-actions-icon`),nu(60,`br`),wg()()(),jc(61,`td`,17)(62,`code`,21),lO(63,`string `),wg(),jc(64,`code`,22),lO(65,` TemplateRef<void>`),wg()(),jc(66,`td`,19)(67,`p`)(68,`code`),lO(69,`an-dots-three`),wg()()(),jc(70,`td`,20)(71,`em`)(72,`strong`),lO(73,`(opcional)`),wg()(),jc(74,`p`),lO(75,`Define um `),jc(76,`a`,23),lO(77,`ícone`),wg(),lO(78,` para a propriedade `),jc(79,`code`),lO(80,`p-actions`),wg(),lO(81,`.`),wg(),jc(82,`p`),lO(83,`É possível usar qualquer um dos ícones da `),jc(84,`a`,23),lO(85,`Biblioteca de ícones`),wg(),lO(86,`. conforme exemplo abaixo:`),wg(),jc(87,`pre`)(88,`code`),lO(89,`<po-toolbar p-actions-icon="an an-user" [p-actions]="actions"></po-toolbar>
`),wg()(),jc(90,`p`),lO(91,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),jc(92,`em`),lO(93,`Font Awesome`),wg(),lO(94,`, da seguinte forma:`),wg(),jc(95,`pre`)(96,`code`),lO(97,`<po-toolbar p-actions-icon="far fa-comment-alt" [p-actions]="actions"></po-toolbar>
`),wg()(),jc(98,`p`),lO(99,`Outra opção seria a customização do ícone através do `),jc(100,`code`),lO(101,`TemplateRef`),wg(),lO(102,`, conforme exemplo abaixo:`),wg(),jc(103,`pre`)(104,`code`),lO(105,`<po-toolbar [p-actions-icon]="template" [p-actions]="actions"></po-toolbar>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),wg()(),jc(106,`blockquote`)(107,`p`),lO(108,`Para o ícone enquadrar corretamente, deve-se utilizar `),jc(109,`code`),lO(110,`font-size: inherit`),wg(),lO(111,` caso o ícone utilizado não aplique-o.`),wg()(),jc(112,`blockquote`)(113,`p`),lO(114,`Caso não haja ações definidas em `),jc(115,`code`),lO(116,`p-actions`),wg(),lO(117,`, o ícone não será exibido.`),wg()()()(),jc(118,`tr`,13)(119,`td`,14)(120,`div`,15)(121,`span`,16),lO(122,` p-notification-actions`),nu(123,`br`),wg()()(),jc(124,`td`,17)(125,`code`,18),lO(126,`Array<PoToolbarAction>`),wg()(),jc(127,`td`,19),lO(128,`-`),wg(),jc(129,`td`,20)(130,`em`)(131,`strong`),lO(132,`(opcional)`),wg()(),jc(133,`p`),lO(134,`Lista de ações da notificação.`),wg()()(),jc(135,`tr`,13)(136,`td`,14)(137,`div`,15)(138,`span`,16),lO(139,` p-notification-number`),nu(140,`br`),wg()()(),jc(141,`td`,17)(142,`code`,24),lO(143,`number`),wg()(),jc(144,`td`,19),lO(145,`-`),wg(),jc(146,`td`,20)(147,`em`)(148,`strong`),lO(149,`(opcional)`),wg()(),jc(150,`p`),lO(151,`Número de notificações.`),wg()()(),jc(152,`tr`,13)(153,`td`,14)(154,`div`,15)(155,`span`,16),lO(156,` p-profile`),nu(157,`br`),wg()()(),jc(158,`td`,17)(159,`code`,25),lO(160,`PoToolbarProfile`),wg()(),jc(161,`td`,19),lO(162,`-`),wg(),jc(163,`td`,20)(164,`em`)(165,`strong`),lO(166,`(opcional)`),wg()(),jc(167,`p`),lO(168,`Define o objeto que será o cabeçalho da lista de ações com as informações do perfil.`),wg()()(),jc(169,`tr`,13)(170,`td`,14)(171,`div`,15)(172,`span`,16),lO(173,` p-profile-actions`),nu(174,`br`),wg()()(),jc(175,`td`,17)(176,`code`,18),lO(177,`Array<PoToolbarAction>`),wg()(),jc(178,`td`,19),lO(179,`-`),wg(),jc(180,`td`,20)(181,`em`)(182,`strong`),lO(183,`(opcional)`),wg()(),jc(184,`p`),lO(185,`Define uma lista de ações que serão exibidas ao clicar no ícone do perfil.`),wg()()(),jc(186,`tr`,13)(187,`td`,14)(188,`div`,15)(189,`span`,16),lO(190,` p-show-notification`),nu(191,`br`),wg()()(),jc(192,`td`,17)(193,`code`,26),lO(194,`boolean`),wg()(),jc(195,`td`,19),lO(196,`-`),wg(),jc(197,`td`,20)(198,`em`)(199,`strong`),lO(200,`(opcional)`),wg()(),jc(201,`p`),lO(202,`Se falso, oculta o ícone de notificações.`),wg()()(),jc(203,`tr`,13)(204,`td`,14)(205,`div`,15)(206,`span`,16),lO(207,` p-title`),nu(208,`br`),wg()()(),jc(209,`td`,17)(210,`code`,21),lO(211,`string`),wg()(),jc(212,`td`,19),lO(213,`-`),wg(),jc(214,`td`,20)(215,`p`),lO(216,`Título do `),jc(217,`em`),lO(218,`toolbar`),wg(),lO(219,` e aplicação.`),wg()()()(),jc(220,`h3`),lO(221,`Interfaces`),wg(),jc(222,`h4`,27)(223,`code`,5),lO(224,`PoToolbarAction`),wg()(),jc(225,`div`,2)(226,`p`),lO(227,`Interface para lista de ações do componente. `),wg()(),jc(228,`h4`,9),lO(229,`Propriedades`),wg(),jc(230,`table`,10)(231,`tr`,11)(232,`th`,12),lO(233,`Nome`),wg(),jc(234,`th`,12),lO(235,`Tipo`),wg(),jc(236,`th`,12),lO(237,`Descrição`),wg()(),jc(238,`tr`,13)(239,`td`,14)(240,`div`,15)(241,`span`,16),lO(242,` action`),nu(243,`br`),wg()()(),jc(244,`td`,17)(245,`code`,28),lO(246,`Function`),wg()(),jc(247,`td`,20)(248,`em`)(249,`strong`),lO(250,`(opcional)`),wg()(),jc(251,`p`),lO(252,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),wg(),jc(253,`p`),lO(254,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),jc(255,`code`),lO(256,`subItems`),wg(),lO(257,`.`),wg(),jc(258,`blockquote`)(259,`p`),lO(260,`Para que a função seja executada no contexto do componente, utilize `),jc(261,`em`),lO(262,`bind`),wg(),lO(263,`:
`),jc(264,`code`),lO(265,`action: this.myFunction.bind(this)`),wg()()()()(),jc(266,`tr`,13)(267,`td`,14)(268,`div`,15)(269,`span`,16),lO(270,` disabled`),nu(271,`br`),wg()()(),jc(272,`td`,17)(273,`code`,26),lO(274,`boolean `),wg(),jc(275,`code`,28),lO(276,` Function`),wg()(),jc(277,`td`,20)(278,`em`)(279,`strong`),lO(280,`(opcional)`),wg()(),jc(281,`p`),lO(282,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),wg()()(),jc(283,`tr`,13)(284,`td`,14)(285,`div`,15)(286,`span`,16),lO(287,` icon`),nu(288,`br`),wg()()(),jc(289,`td`,17)(290,`code`,21),lO(291,`string `),wg(),jc(292,`code`,22),lO(293,` TemplateRef<void>`),wg()(),jc(294,`td`,20)(295,`em`)(296,`strong`),lO(297,`(opcional)`),wg()(),jc(298,`p`),lO(299,`Ícone exibido ao lado esquerdo do rótulo.`),wg(),jc(300,`p`),lO(301,`Aceita ícones da `),jc(302,`a`,23),lO(303,`Biblioteca de ícones`),wg(),lO(304,`, fontes externas (ex: Font Awesome)
ou um `),jc(305,`code`),lO(306,`TemplateRef`),wg(),lO(307,` para ícones customizados.`),wg(),jc(308,`pre`)(309,`code`),lO(310,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),wg()()()(),jc(311,`tr`,13)(312,`td`,14)(313,`div`,15)(314,`span`,16),lO(315,` label`),nu(316,`br`),wg()()(),jc(317,`td`,17)(318,`code`,21),lO(319,`string`),wg()(),jc(320,`td`,20)(321,`p`),lO(322,`Rótulo da ação.`),wg(),jc(323,`p`),lO(324,`A label também pode representar o agrupador de subitens quando a ação possuir `),jc(325,`code`),lO(326,`subItems`),wg(),lO(327,`.`),wg()()(),jc(328,`tr`,13)(329,`td`,14)(330,`div`,15)(331,`span`,16),lO(332,` selected`),nu(333,`br`),wg()()(),jc(334,`td`,17)(335,`code`,26),lO(336,`boolean`),wg()(),jc(337,`td`,20)(338,`em`)(339,`strong`),lO(340,`(opcional)`),wg()(),jc(341,`p`),lO(342,`Define se a ação está selecionada.`),wg()()(),jc(343,`tr`,13)(344,`td`,14)(345,`div`,15)(346,`span`,16),lO(347,` separator`),nu(348,`br`),wg()()(),jc(349,`td`,17)(350,`code`,26),lO(351,`boolean`),wg()(),jc(352,`td`,20)(353,`em`)(354,`strong`),lO(355,`(opcional)`),wg()(),jc(356,`p`),lO(357,`Atribui uma linha separadora acima do item.`),wg()()(),jc(358,`tr`,13)(359,`td`,14)(360,`div`,15)(361,`span`,16),lO(362,` subItems`),nu(363,`br`),wg()()(),jc(364,`td`,17)(365,`code`,29),lO(366,`Array<PoPopupAction>`),wg()(),jc(367,`td`,20)(368,`em`)(369,`strong`),lO(370,`(opcional)`),wg()(),jc(371,`p`),lO(372,`Define uma lista de subitens para criação de menus aninhados.`),wg(),jc(373,`pre`)(374,`code`),lO(375,`{ label: 'Relat\xF3rios', subItems: [{ label: 'Mensal' }, { label: 'Anual' }] }
`),wg()(),jc(376,`p`),lO(377,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),wg(),jc(378,`blockquote`)(379,`p`),lO(380,`As propriedades `),jc(381,`code`),lO(382,`disabled`),wg(),lO(383,`, `),jc(384,`code`),lO(385,`type`),wg(),lO(386,` e `),jc(387,`code`),lO(388,`visible`),wg(),lO(389,` não são aplicadas visualmente ao item agrupador.`),wg()(),jc(390,`blockquote`)(391,`p`),lO(392,`Quando `),jc(393,`code`),lO(394,`url`),wg(),lO(395,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),wg()(),jc(396,`blockquote`)(397,`p`),lO(398,`Em subníveis aninhados, o `),jc(399,`code`),lO(400,`icon`),wg(),lO(401,` do agrupador é substituído pelo indicador de navegação (seta).`),wg()()()(),jc(402,`tr`,13)(403,`td`,14)(404,`div`,15)(405,`span`,16),lO(406,` subItemsLazy`),nu(407,`br`),wg()()(),jc(408,`td`,17)(409,`code`,30),lO(410,`(item: PoPopupAction) => Observable<Array<PoPopupAction>>`),wg()(),jc(411,`td`,20)(412,`em`)(413,`strong`),lO(414,`(opcional)`),wg()(),jc(415,`p`),lO(416,`Define o carregamento assíncrono (lazy loading) dos subitens de um agrupador.`),wg(),jc(417,`p`),lO(418,`Recebe o item agrupador e retorna um `),jc(419,`code`),lO(420,`Observable<Array<PoPopupAction>>`),wg(),lO(421,`. A requisi\xE7\xE3o \xE9 disparada
`),jc(422,`strong`),lO(423,`apenas`),wg(),lO(424,` no momento da expansão (clique ou atalho de teclado), exibindo placeholders com `),jc(425,`code`),lO(426,`po-skeleton`),wg(),lO(427,`
enquanto os dados s\xE3o carregados:`),wg(),jc(428,`pre`)(429,`code`),lO(430,`{
  label: 'Relat\xF3rios',
  subItemsLazy: (item) => this.reportService.getReports(item)
}
`),wg()(),jc(431,`blockquote`)(432,`p`),lO(433,`O resultado \xE9 armazenado em cache ap\xF3s o primeiro carregamento bem-sucedido.
Em caso de falha, \xE9 exibida uma mensagem com a op\xE7\xE3o de tentar novamente.`),wg()(),jc(434,`p`),lO(435,`Ao definir esta propriedade, o item exibirá um ícone indicador de subnível.`),wg()()(),jc(436,`tr`,13)(437,`td`,14)(438,`div`,15)(439,`span`,16),lO(440,` type`),nu(441,`br`),wg()()(),jc(442,`td`,17)(443,`code`,21),lO(444,`string`),wg()(),jc(445,`td`,20)(446,`em`)(447,`strong`),lO(448,`(opcional)`),wg()(),jc(449,`p`),lO(450,`Define a cor do item.`),wg(),jc(451,`p`),lO(452,`Valores válidos:`),wg(),jc(453,`ul`)(454,`li`)(455,`code`),lO(456,`default`),wg()(),jc(457,`li`)(458,`code`),lO(459,`danger`),wg()()()()(),jc(460,`tr`,13)(461,`td`,14)(462,`div`,15)(463,`span`,16),lO(464,` url`),nu(465,`br`),wg()()(),jc(466,`td`,17)(467,`code`,21),lO(468,`string`),wg()(),jc(469,`td`,20)(470,`em`)(471,`strong`),lO(472,`(opcional)`),wg()(),jc(473,`p`),lO(474,`URL para redirecionamento. Aceita rotas internas e links externos.`),wg(),jc(475,`p`),lO(476,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),jc(477,`code`),lO(478,`url`),wg(),lO(479,` é informada em um agrupador, o clique `),jc(480,`strong`),lO(481,`não abrirá os subitens`),wg(),lO(482,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),wg(),jc(483,`blockquote`)(484,`p`),lO(485,`Quando informada, tem prioridade sobre a propriedade `),jc(486,`code`),lO(487,`action`),wg(),lO(488,`.`),wg()()()(),jc(489,`tr`,13)(490,`td`,14)(491,`div`,15)(492,`span`,16),lO(493,` visible`),nu(494,`br`),wg()()(),jc(495,`td`,17)(496,`code`,26),lO(497,`boolean `),wg(),jc(498,`code`,28),lO(499,` Function`),wg()(),jc(500,`td`,20)(501,`em`)(502,`strong`),lO(503,`(opcional)`),wg()(),jc(504,`p`),lO(505,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),wg()()()(),jc(506,`h4`,27)(507,`code`,5),lO(508,`PoToolbarProfile`),wg()(),jc(509,`div`,2)(510,`p`),lO(511,`Interface que define o perfil do `),jc(512,`code`),lO(513,`PoToolbarComponent`),wg(),lO(514,`.`),wg()(),jc(515,`h4`,9),lO(516,`Propriedades`),wg(),jc(517,`table`,10)(518,`tr`,11)(519,`th`,12),lO(520,`Nome`),wg(),jc(521,`th`,12),lO(522,`Tipo`),wg(),jc(523,`th`,12),lO(524,`Descrição`),wg()(),jc(525,`tr`,13)(526,`td`,14)(527,`div`,15)(528,`span`,16),lO(529,` avatar`),nu(530,`br`),wg()()(),jc(531,`td`,17)(532,`code`,21),lO(533,`string`),wg()(),jc(534,`td`,20)(535,`em`)(536,`strong`),lO(537,`(opcional)`),wg()(),jc(538,`p`),lO(539,`Define o caminho da imagem do perfil.`),wg()()(),jc(540,`tr`,13)(541,`td`,14)(542,`div`,15)(543,`span`,16),lO(544,` subtitle`),nu(545,`br`),wg()()(),jc(546,`td`,17)(547,`code`,21),lO(548,`string`),wg()(),jc(549,`td`,20)(550,`em`)(551,`strong`),lO(552,`(opcional)`),wg()(),jc(553,`p`),lO(554,`Define um texto com menor destaque ao lado da imagem do perfil, como por exemplo o e-mail de usuário.`),wg()()(),jc(555,`tr`,13)(556,`td`,14)(557,`div`,15)(558,`span`,16),lO(559,` title`),nu(560,`br`),wg()()(),jc(561,`td`,17)(562,`code`,21),lO(563,`string`),wg()(),jc(564,`td`,20)(565,`p`),lO(566,`Define um texto com maior destaque ao lado da imagem do perfil, como por exemplo o nome de usuário.`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function Me(a,Le){if(a&1){let l=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(l);let n=Fx();return __(n.changeTab(`web`))}),nu(1,`sample-po-toolbar-basic-view`)(2,`sample-po-toolbar-labs-view`)(3,`sample-po-toolbar-logged-view`),wg()}if(a&2){let l=Fx();UE(`p-active`,l.activeTab===`web`)}}var ke=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,p){this.route=l,this.router=p}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let p=l.view;this.activeTab=p||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||a)(b(ir),b(Sn))};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Toolbar`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(p,n){p&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,Me,4,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return n.changeTab(`doc`)}),nu(4,`sample-po-toolbar-doc`),wg()()()),p&2&&(UE(`p-actions`,n.actions),rg(2),Dx(n.hidePoWebSample?-1:2),rg(),UE(`p-active`,n.activeTab===`doc`))},dependencies:[Vze,lre,ure,ce,ue,fe,ge],encapsulation:2,changeDetection:1})}return a})()}];var Ee=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=pe({type:a});static ɵinj=ue$1({imports:[I1.forChild(ke),I1]})}return a})();var dt=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=pe({type:a});static ɵinj=ue$1({imports:[M,Ee]})}return a})();export{dt as DocPoToolbarModule};