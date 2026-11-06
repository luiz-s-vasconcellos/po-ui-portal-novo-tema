import{$n as Ak,A as Hoe,Ar as Ig,B as L4,Cn as oi,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Lf,Hi as ar,Hr as Me$1,Ia as sk,Ja as vt,Li as ZO,Mr as Jc,Ni as Y0,Ri as Zg,Rr as Kb,T as Gte,Ti as W0,Vi as _u,Xt as ere,Yi as eF,Zt as fae,b as Fu,cn as iie,di as RZ,ea as ge$1,er as An,fi as Rb,gi as Tk,hi as TZ,ht as U4,jr as JL,ka as qL,kr as I,mt as Tze,no as yk,nr as BO,o as Aze,or as Bk,qi as de$1,qr as NZ,rt as Qae,va as nk,wa as p,xi as VO,xt as Woe,ya as nm,yi as U_}from"./chunk-DvS_Nb_w.js";import{n as P,t as M}from"./main-HXZZSDJT.js";var me=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-toolbar-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Toolbar`]],template:function(p,n){p&1&&_u(0,`po-toolbar`,0)},dependencies:[Aze],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a});var ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-toolbar-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Toolbar Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-toolbar-basic/sample-po-toolbar-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-toolbar p-title="PO Toolbar"></po-toolbar>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-toolbar-basic/sample-po-toolbar-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-toolbar-basic',
  templateUrl: './sample-po-toolbar-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToolbarBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-toolbar-basic`),Zg(),_u(23,`hr`)),p&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ve,n.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,me],encapsulation:2,changeDetection:1})}return a})();var de=(()=>{class a{poNotification=p(Fu);action;actions;actionsIcon;notificationActions;notificationNumber;profile;profileActions;showNotification;title;toolbarActionType;actionTypes=[{value:`danger`,label:`Danger`},{value:`default`,label:`Default`}];iconOptions=[{value:`an an-chats`,label:`an an-chats`},{value:`an an-clock`,label:`an an-clock`},{value:`an an-sign-out`,label:`an an-sign-out`},{value:`an an-lock`,label:`an an-lock`},{value:`fa fa-calculator`,label:`fa fa-calculator`},{value:`far fa-comment-alt`,label:`far fa-comment-alt`}];actionsIconOptions=[{value:`an an-clock`,label:`an an-clock`},{value:`an an-sign-out`,label:`an an-sign-out`},{value:`an an-lock`,label:`an an-lock`},{value:`an an-gear`,label:`an an-gear`},{value:`far fa-comment-alt`,label:`far fa-comment-alt`}];toolbarActionTypes=[{label:`Actions`,value:`actions`},{label:`Profile`,value:`profile`},{label:`Notification`,value:`notification`}];ngOnInit(){this.restore()}addAction(l,p){let n=Object.assign({},l);n.action=n.action?this.showAction.bind(this,n.action):void 0,this.toolbarActionType===`profile`?this.profileActions.push(n):this.toolbarActionType===`notification`?this.notificationActions.push(n):this.actions.push(n),p.reset()}restore(){this.action={label:void 0},this.profile={avatar:``,subtitle:``,title:``},this.actions=[],this.actionsIcon=void 0,this.profileActions=[],this.notificationActions=[],this.notificationNumber=void 0,this.showNotification=!0,this.title=`PO Toolbar`}showAction(l){this.poNotification.success(`Action clicked: ${l}`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-toolbar-labs`]],standalone:!1,decls:33,vars:27,consts:[[`formAction`,`ngForm`],[`formProfile`,`ngForm`],[`formToolbar`,`ngForm`],[3,`p-actions`,`p-actions-icon`,`p-profile`,`p-profile-actions`,`p-notification-actions`,`p-notification-number`,`p-show-notification`,`p-title`],[1,`sample-container`],[1,`po-row`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionIcon`,`p-clean`,``,`p-label`,`Action icon`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`actionLabel`,`p-clean`,``,`p-label`,`Action label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionUrl`,`p-clean`,``,`p-label`,`Action url`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionType`,`p-label`,`Action type`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`actionDisabled`,`p-clean`,``,`p-label`,`Action separator`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`toolbarActionType`,`p-columns`,`3`,`p-label`,`Toolbar action type`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add Action`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`actionsIcon`,`p-clean`,``,`p-label`,`Actions icon`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`profileTitle`,`p-clean`,``,`p-label`,`Profile title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`profileSubtitle`,`p-clean`,``,`p-label`,`Profile subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`profileAvatar`,`p-clean`,``,`p-label`,`Profile avatar`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`notificationNumber`,`p-clean`,``,`p-label`,`Notification number`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`showNotification`,`p-clean`,``,`p-label`,`Show notification`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(p,n){if(p&1){let s=ZO();_u(0,`po-toolbar`,3),Jc(1,`div`,4)(2,`form`,null,0)(4,`div`,5)(5,`po-input`,6),W0(),Kb(`ngModelChange`,function(i){return U_(s),Ak(n.action.action,i)||(n.action.action=i),H_(i)}),Zg(),Jc(6,`po-select`,7),W0(),Kb(`ngModelChange`,function(i){return U_(s),Ak(n.action.icon,i)||(n.action.icon=i),H_(i)}),Zg(),Jc(7,`po-input`,8),W0(),Kb(`ngModelChange`,function(i){return U_(s),Ak(n.action.label,i)||(n.action.label=i),H_(i)}),Zg(),Jc(8,`po-input`,9),W0(),Kb(`ngModelChange`,function(i){return U_(s),Ak(n.action.url,i)||(n.action.url=i),H_(i)}),Zg(),Jc(9,`po-radio-group`,10),W0(),Kb(`ngModelChange`,function(i){return U_(s),Ak(n.action.type,i)||(n.action.type=i),H_(i)}),Zg(),Jc(10,`po-switch`,11),W0(),Kb(`ngModelChange`,function(i){return U_(s),Ak(n.action.separator,i)||(n.action.separator=i),H_(i)}),Zg(),Jc(11,`po-radio-group`,12),W0(),Kb(`ngModelChange`,function(i){return U_(s),Ak(n.toolbarActionType,i)||(n.toolbarActionType=i),H_(i)}),Zg()(),Jc(12,`div`,5)(13,`po-button`,13),vt(`p-click`,function(){U_(s);let i=sk(3);return H_(n.addAction(n.action,i))}),Zg()()(),_u(14,`po-divider`),Jc(15,`div`,5)(16,`po-select`,14),W0(),Kb(`ngModelChange`,function(i){return U_(s),Ak(n.actionsIcon,i)||(n.actionsIcon=i),H_(i)}),Zg()(),_u(17,`po-divider`),Jc(18,`form`,null,1)(20,`div`,5)(21,`po-input`,15),W0(),Kb(`ngModelChange`,function(i){return U_(s),Ak(n.profile.title,i)||(n.profile.title=i),H_(i)}),Zg(),Jc(22,`po-input`,16),W0(),Kb(`ngModelChange`,function(i){return U_(s),Ak(n.profile.subtitle,i)||(n.profile.subtitle=i),H_(i)}),Zg(),Jc(23,`po-input`,17),W0(),Kb(`ngModelChange`,function(i){return U_(s),Ak(n.profile.avatar,i)||(n.profile.avatar=i),H_(i)}),Zg()()(),_u(24,`po-divider`),Jc(25,`form`,null,2)(27,`div`,5)(28,`po-input`,18),W0(),Kb(`ngModelChange`,function(i){return U_(s),Ak(n.title,i)||(n.title=i),H_(i)}),Zg(),Jc(29,`po-number`,19),W0(),Kb(`ngModelChange`,function(i){return U_(s),Ak(n.notificationNumber,i)||(n.notificationNumber=i),H_(i)}),Zg(),Jc(30,`po-switch`,20),W0(),Kb(`ngModelChange`,function(i){return U_(s),Ak(n.showNotification,i)||(n.showNotification=i),H_(i)}),Zg()(),Jc(31,`div`,5)(32,`po-button`,21),vt(`p-click`,function(){U_(s);let i=sk(3),Se=sk(19);return sk(26).reset(),Se.reset(),i.reset(),H_(n.restore())}),Zg()()()()}if(p&2){let s=sk(3);Rb(`p-actions`,n.actions)(`p-actions-icon`,n.actionsIcon)(`p-profile`,n.profile)(`p-profile-actions`,n.profileActions)(`p-notification-actions`,n.notificationActions)(`p-notification-number`,n.notificationNumber)(`p-show-notification`,n.showNotification)(`p-title`,n.title),Ig(5),Yb(`ngModel`,n.action.action),Y0(),Ig(),Yb(`ngModel`,n.action.icon),Rb(`p-options`,n.iconOptions),Y0(),Ig(),Yb(`ngModel`,n.action.label),Y0(),Ig(),Yb(`ngModel`,n.action.url),Y0(),Ig(),Yb(`ngModel`,n.action.type),Rb(`p-options`,n.actionTypes),Y0(),Ig(),Yb(`ngModel`,n.action.separator),Y0(),Ig(),Yb(`ngModel`,n.toolbarActionType),Rb(`p-options`,n.toolbarActionTypes),Y0(),Ig(2),Rb(`p-disabled`,s.invalid),Ig(3),Yb(`ngModel`,n.actionsIcon),Rb(`p-options`,n.actionsIconOptions),Y0(),Ig(5),Yb(`ngModel`,n.profile.title),Y0(),Ig(),Yb(`ngModel`,n.profile.subtitle),Y0(),Ig(),Yb(`ngModel`,n.profile.avatar),Y0(),Ig(5),Yb(`ngModel`,n.title),Y0(),Ig(),Yb(`ngModel`,n.notificationNumber),Y0(),Ig(),Yb(`ngModel`,n.showNotification),Y0()}},dependencies:[NZ,TZ,RZ,JL,qL,oi,Lf,U4,Hoe,Gte,Woe,L4,Aze],styles:[`.sample-container[_ngcontent-%COMP%]{margin-top:50px}`],changeDetection:1})}return a})();var xe=a=>({"docs-sample-code-tabs":a});var ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-toolbar-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Toolbar Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-toolbar-labs/sample-po-toolbar-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<style>
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-toolbar-labs/sample-po-toolbar-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-toolbar-labs`),Zg(),_u(23,`hr`)),p&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,xe,n.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,de],encapsulation:2,changeDetection:1})}return a})();var be=(()=>{class a{poDialog=p(iie);poNotification=p(Fu);notificationActions=[{icon:`an an-newspaper`,label:`PO news, stay tuned!`,type:`danger`,action:l=>this.onClickNotification(l)},{icon:`an an-chat`,label:`New message`,type:`danger`,action:l=>this.openDialog(l)}];profile={avatar:`https://via.placeholder.com/48x48?text=AVATAR`,subtitle:`dev@po-ui.com.br`,title:`Mr. Dev PO`};profileActions=[{icon:`an an-user`,label:`User data`,action:l=>this.showAction(l)},{icon:`an an-building-apartment`,label:`Company data`,action:l=>this.showAction(l)},{icon:`an an-gear`,label:`Settings`,action:l=>this.showAction(l)},{icon:`an an-sign-out`,label:`Exit`,type:`danger`,separator:!0,action:l=>this.showAction(l)}];actions=[{label:`Start cash register`,action:l=>this.showAction(l)},{label:`Finalize cash register`,action:l=>this.showAction(l)},{label:`Cash register options`,action:l=>this.showAction(l)}];title=`PO Toolbar Logged`;getNotificationNumber(){return this.notificationActions.filter(l=>l.type===`danger`).length}onClickNotification(l){window.open(`https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md`,`_blank`),l.type=`default`}openDialog(l){this.poDialog.alert({title:`Welcome`,message:`Hello Mr. Dev! Congratulations, you are a TOTVS!`,ok:void 0}),l.type=`default`}showAction(l){this.poNotification.success(`Action clicked: ${l.label}`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-toolbar-logged`]],standalone:!1,features:[Me$1([Fu])],decls:8,vars:7,consts:[[`p-actions-icon`,`an an-shopping-cart-simple`,3,`p-actions`,`p-profile`,`p-profile-actions`,`p-notification-actions`,`p-notification-number`,`p-title`],[1,`po-row`],[1,`sample-container`],[1,`po-sm-12`],[1,`po-font-title`],[1,`po-font-subtitle`]],template:function(p,n){p&1&&(_u(0,`po-toolbar`,0),Jc(1,`div`,1)(2,`div`,2)(3,`po-widget`,3)(4,`div`,4),Tk(5),Zg(),Jc(6,`div`,5),Tk(7,`Let's work hard!`),Zg()()()()),p&2&&(Rb(`p-actions`,n.actions)(`p-profile`,n.profile)(`p-profile-actions`,n.profileActions)(`p-notification-actions`,n.notificationActions)(`p-notification-number`,n.getNotificationNumber())(`p-title`,n.title),Ig(5),nm(`Hello, `,n.profile.title,`.`))},dependencies:[Aze,fae],styles:[`.sample-container[_ngcontent-%COMP%]{margin-top:50px}`],changeDetection:1})}return a})();var Ae=a=>({"docs-sample-code-tabs":a});var fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-toolbar-logged-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Toolbar - Logged`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-toolbar-logged/sample-po-toolbar-logged.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<style>
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-toolbar-logged/sample-po-toolbar-logged.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-toolbar-logged`),Zg(),_u(23,`hr`)),p&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ae,n.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,be],encapsulation:2,changeDetection:1})}return a})();var ge=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-toolbar-doc`]],standalone:!1,decls:567,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoToolbarAction>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoToolbarProfile`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`pan`,``,1,`docs-api-property-type`,`(item:`,`PoPopupAction)`,`=>`,`Observable<Array<PoPopupAction>>`]],template:function(p,n){p&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoToolbarModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente po-toolbar`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoToolbarComponent`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`O componente `),Jc(15,`code`),Tk(16,`po-toolbar`),Zg(),Tk(17,` é um cabeçalho para o título da aplicação e informações de usuário e notificações quando houver necessidade. `),Zg()(),Jc(18,`div`,6)(19,`h4`,7),Tk(20,`Seletor`),Zg(),Jc(21,`pre`,8),Tk(22,`<po-toolbar
    p-actions="Array<PoToolbarAction>"
    p-actions-icon="string | TemplateRef<void>"
    p-notification-actions="Array<PoToolbarAction>"
    p-notification-number="number"
    p-profile="PoToolbarProfile"
    p-profile-actions="Array<PoToolbarAction>"
    p-show-notification="boolean"
    p-title="string" >
</po-toolbar>
`),Zg()(),Jc(23,`h4`,9),Tk(24,`Propriedades`),Zg(),Jc(25,`table`,10)(26,`tr`,11)(27,`th`,12),Tk(28,`Nome`),Zg(),Jc(29,`th`,12),Tk(30,`Tipo`),Zg(),Jc(31,`th`,12),Tk(32,`Padrão`),Zg(),Jc(33,`th`,12),Tk(34,`Descrição`),Zg()(),Jc(35,`tr`,13)(36,`td`,14)(37,`div`,15)(38,`span`,16),Tk(39,` p-actions`),_u(40,`br`),Zg()()(),Jc(41,`td`,17)(42,`code`,18),Tk(43,`Array<PoToolbarAction>`),Zg()(),Jc(44,`td`,19),Tk(45,`-`),Zg(),Jc(46,`td`,20)(47,`em`)(48,`strong`),Tk(49,`(opcional)`),Zg()(),Jc(50,`p`),Tk(51,`Define uma lista de ações que serão exibidas ao clicar no ícone declarado em `),Jc(52,`code`),Tk(53,`p-actions-icon`),Zg(),Tk(54,`.`),Zg()()(),Jc(55,`tr`,13)(56,`td`,14)(57,`div`,15)(58,`span`,16),Tk(59,` p-actions-icon`),_u(60,`br`),Zg()()(),Jc(61,`td`,17)(62,`code`,21),Tk(63,`string `),Zg(),Jc(64,`code`,22),Tk(65,` TemplateRef<void>`),Zg()(),Jc(66,`td`,19)(67,`p`)(68,`code`),Tk(69,`an-dots-three`),Zg()()(),Jc(70,`td`,20)(71,`em`)(72,`strong`),Tk(73,`(opcional)`),Zg()(),Jc(74,`p`),Tk(75,`Define um `),Jc(76,`a`,23),Tk(77,`ícone`),Zg(),Tk(78,` para a propriedade `),Jc(79,`code`),Tk(80,`p-actions`),Zg(),Tk(81,`.`),Zg(),Jc(82,`p`),Tk(83,`É possível usar qualquer um dos ícones da `),Jc(84,`a`,23),Tk(85,`Biblioteca de ícones`),Zg(),Tk(86,`. conforme exemplo abaixo:`),Zg(),Jc(87,`pre`)(88,`code`),Tk(89,`<po-toolbar p-actions-icon="an an-user" [p-actions]="actions"></po-toolbar>
`),Zg()(),Jc(90,`p`),Tk(91,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Jc(92,`em`),Tk(93,`Font Awesome`),Zg(),Tk(94,`, da seguinte forma:`),Zg(),Jc(95,`pre`)(96,`code`),Tk(97,`<po-toolbar p-actions-icon="far fa-comment-alt" [p-actions]="actions"></po-toolbar>
`),Zg()(),Jc(98,`p`),Tk(99,`Outra opção seria a customização do ícone através do `),Jc(100,`code`),Tk(101,`TemplateRef`),Zg(),Tk(102,`, conforme exemplo abaixo:`),Zg(),Jc(103,`pre`)(104,`code`),Tk(105,`<po-toolbar [p-actions-icon]="template" [p-actions]="actions"></po-toolbar>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),Zg()(),Jc(106,`blockquote`)(107,`p`),Tk(108,`Para o ícone enquadrar corretamente, deve-se utilizar `),Jc(109,`code`),Tk(110,`font-size: inherit`),Zg(),Tk(111,` caso o ícone utilizado não aplique-o.`),Zg()(),Jc(112,`blockquote`)(113,`p`),Tk(114,`Caso não haja ações definidas em `),Jc(115,`code`),Tk(116,`p-actions`),Zg(),Tk(117,`, o ícone não será exibido.`),Zg()()()(),Jc(118,`tr`,13)(119,`td`,14)(120,`div`,15)(121,`span`,16),Tk(122,` p-notification-actions`),_u(123,`br`),Zg()()(),Jc(124,`td`,17)(125,`code`,18),Tk(126,`Array<PoToolbarAction>`),Zg()(),Jc(127,`td`,19),Tk(128,`-`),Zg(),Jc(129,`td`,20)(130,`em`)(131,`strong`),Tk(132,`(opcional)`),Zg()(),Jc(133,`p`),Tk(134,`Lista de ações da notificação.`),Zg()()(),Jc(135,`tr`,13)(136,`td`,14)(137,`div`,15)(138,`span`,16),Tk(139,` p-notification-number`),_u(140,`br`),Zg()()(),Jc(141,`td`,17)(142,`code`,24),Tk(143,`number`),Zg()(),Jc(144,`td`,19),Tk(145,`-`),Zg(),Jc(146,`td`,20)(147,`em`)(148,`strong`),Tk(149,`(opcional)`),Zg()(),Jc(150,`p`),Tk(151,`Número de notificações.`),Zg()()(),Jc(152,`tr`,13)(153,`td`,14)(154,`div`,15)(155,`span`,16),Tk(156,` p-profile`),_u(157,`br`),Zg()()(),Jc(158,`td`,17)(159,`code`,25),Tk(160,`PoToolbarProfile`),Zg()(),Jc(161,`td`,19),Tk(162,`-`),Zg(),Jc(163,`td`,20)(164,`em`)(165,`strong`),Tk(166,`(opcional)`),Zg()(),Jc(167,`p`),Tk(168,`Define o objeto que será o cabeçalho da lista de ações com as informações do perfil.`),Zg()()(),Jc(169,`tr`,13)(170,`td`,14)(171,`div`,15)(172,`span`,16),Tk(173,` p-profile-actions`),_u(174,`br`),Zg()()(),Jc(175,`td`,17)(176,`code`,18),Tk(177,`Array<PoToolbarAction>`),Zg()(),Jc(178,`td`,19),Tk(179,`-`),Zg(),Jc(180,`td`,20)(181,`em`)(182,`strong`),Tk(183,`(opcional)`),Zg()(),Jc(184,`p`),Tk(185,`Define uma lista de ações que serão exibidas ao clicar no ícone do perfil.`),Zg()()(),Jc(186,`tr`,13)(187,`td`,14)(188,`div`,15)(189,`span`,16),Tk(190,` p-show-notification`),_u(191,`br`),Zg()()(),Jc(192,`td`,17)(193,`code`,26),Tk(194,`boolean`),Zg()(),Jc(195,`td`,19),Tk(196,`-`),Zg(),Jc(197,`td`,20)(198,`em`)(199,`strong`),Tk(200,`(opcional)`),Zg()(),Jc(201,`p`),Tk(202,`Se falso, oculta o ícone de notificações.`),Zg()()(),Jc(203,`tr`,13)(204,`td`,14)(205,`div`,15)(206,`span`,16),Tk(207,` p-title`),_u(208,`br`),Zg()()(),Jc(209,`td`,17)(210,`code`,21),Tk(211,`string`),Zg()(),Jc(212,`td`,19),Tk(213,`-`),Zg(),Jc(214,`td`,20)(215,`p`),Tk(216,`Título do `),Jc(217,`em`),Tk(218,`toolbar`),Zg(),Tk(219,` e aplicação.`),Zg()()()(),Jc(220,`h3`),Tk(221,`Interfaces`),Zg(),Jc(222,`h4`,27)(223,`code`,5),Tk(224,`PoToolbarAction`),Zg()(),Jc(225,`div`,2)(226,`p`),Tk(227,`Interface para lista de ações do componente. `),Zg()(),Jc(228,`h4`,9),Tk(229,`Propriedades`),Zg(),Jc(230,`table`,10)(231,`tr`,11)(232,`th`,12),Tk(233,`Nome`),Zg(),Jc(234,`th`,12),Tk(235,`Tipo`),Zg(),Jc(236,`th`,12),Tk(237,`Descrição`),Zg()(),Jc(238,`tr`,13)(239,`td`,14)(240,`div`,15)(241,`span`,16),Tk(242,` action`),_u(243,`br`),Zg()()(),Jc(244,`td`,17)(245,`code`,28),Tk(246,`Function`),Zg()(),Jc(247,`td`,20)(248,`em`)(249,`strong`),Tk(250,`(opcional)`),Zg()(),Jc(251,`p`),Tk(252,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),Zg(),Jc(253,`p`),Tk(254,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Jc(255,`code`),Tk(256,`subItems`),Zg(),Tk(257,`.`),Zg(),Jc(258,`blockquote`)(259,`p`),Tk(260,`Para que a função seja executada no contexto do componente, utilize `),Jc(261,`em`),Tk(262,`bind`),Zg(),Tk(263,`:
`),Jc(264,`code`),Tk(265,`action: this.myFunction.bind(this)`),Zg()()()()(),Jc(266,`tr`,13)(267,`td`,14)(268,`div`,15)(269,`span`,16),Tk(270,` disabled`),_u(271,`br`),Zg()()(),Jc(272,`td`,17)(273,`code`,26),Tk(274,`boolean `),Zg(),Jc(275,`code`,28),Tk(276,` Function`),Zg()(),Jc(277,`td`,20)(278,`em`)(279,`strong`),Tk(280,`(opcional)`),Zg()(),Jc(281,`p`),Tk(282,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),Zg()()(),Jc(283,`tr`,13)(284,`td`,14)(285,`div`,15)(286,`span`,16),Tk(287,` icon`),_u(288,`br`),Zg()()(),Jc(289,`td`,17)(290,`code`,21),Tk(291,`string `),Zg(),Jc(292,`code`,22),Tk(293,` TemplateRef<void>`),Zg()(),Jc(294,`td`,20)(295,`em`)(296,`strong`),Tk(297,`(opcional)`),Zg()(),Jc(298,`p`),Tk(299,`Ícone exibido ao lado esquerdo do rótulo.`),Zg(),Jc(300,`p`),Tk(301,`Aceita ícones da `),Jc(302,`a`,23),Tk(303,`Biblioteca de ícones`),Zg(),Tk(304,`, fontes externas (ex: Font Awesome)
ou um `),Jc(305,`code`),Tk(306,`TemplateRef`),Zg(),Tk(307,` para ícones customizados.`),Zg(),Jc(308,`pre`)(309,`code`),Tk(310,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),Zg()()()(),Jc(311,`tr`,13)(312,`td`,14)(313,`div`,15)(314,`span`,16),Tk(315,` label`),_u(316,`br`),Zg()()(),Jc(317,`td`,17)(318,`code`,21),Tk(319,`string`),Zg()(),Jc(320,`td`,20)(321,`p`),Tk(322,`Rótulo da ação.`),Zg(),Jc(323,`p`),Tk(324,`A label também pode representar o agrupador de subitens quando a ação possuir `),Jc(325,`code`),Tk(326,`subItems`),Zg(),Tk(327,`.`),Zg()()(),Jc(328,`tr`,13)(329,`td`,14)(330,`div`,15)(331,`span`,16),Tk(332,` selected`),_u(333,`br`),Zg()()(),Jc(334,`td`,17)(335,`code`,26),Tk(336,`boolean`),Zg()(),Jc(337,`td`,20)(338,`em`)(339,`strong`),Tk(340,`(opcional)`),Zg()(),Jc(341,`p`),Tk(342,`Define se a ação está selecionada.`),Zg()()(),Jc(343,`tr`,13)(344,`td`,14)(345,`div`,15)(346,`span`,16),Tk(347,` separator`),_u(348,`br`),Zg()()(),Jc(349,`td`,17)(350,`code`,26),Tk(351,`boolean`),Zg()(),Jc(352,`td`,20)(353,`em`)(354,`strong`),Tk(355,`(opcional)`),Zg()(),Jc(356,`p`),Tk(357,`Atribui uma linha separadora acima do item.`),Zg()()(),Jc(358,`tr`,13)(359,`td`,14)(360,`div`,15)(361,`span`,16),Tk(362,` subItems`),_u(363,`br`),Zg()()(),Jc(364,`td`,17)(365,`code`,29),Tk(366,`Array<PoPopupAction>`),Zg()(),Jc(367,`td`,20)(368,`em`)(369,`strong`),Tk(370,`(opcional)`),Zg()(),Jc(371,`p`),Tk(372,`Define uma lista de subitens para criação de menus aninhados.`),Zg(),Jc(373,`pre`)(374,`code`),Tk(375,`{ label: 'Relat\xF3rios', subItems: [{ label: 'Mensal' }, { label: 'Anual' }] }
`),Zg()(),Jc(376,`p`),Tk(377,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),Zg(),Jc(378,`blockquote`)(379,`p`),Tk(380,`As propriedades `),Jc(381,`code`),Tk(382,`disabled`),Zg(),Tk(383,`, `),Jc(384,`code`),Tk(385,`type`),Zg(),Tk(386,` e `),Jc(387,`code`),Tk(388,`visible`),Zg(),Tk(389,` não são aplicadas visualmente ao item agrupador.`),Zg()(),Jc(390,`blockquote`)(391,`p`),Tk(392,`Quando `),Jc(393,`code`),Tk(394,`url`),Zg(),Tk(395,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),Zg()(),Jc(396,`blockquote`)(397,`p`),Tk(398,`Em subníveis aninhados, o `),Jc(399,`code`),Tk(400,`icon`),Zg(),Tk(401,` do agrupador é substituído pelo indicador de navegação (seta).`),Zg()()()(),Jc(402,`tr`,13)(403,`td`,14)(404,`div`,15)(405,`span`,16),Tk(406,` subItemsLazy`),_u(407,`br`),Zg()()(),Jc(408,`td`,17)(409,`code`,30),Tk(410,`(item: PoPopupAction) => Observable<Array<PoPopupAction>>`),Zg()(),Jc(411,`td`,20)(412,`em`)(413,`strong`),Tk(414,`(opcional)`),Zg()(),Jc(415,`p`),Tk(416,`Define o carregamento assíncrono (lazy loading) dos subitens de um agrupador.`),Zg(),Jc(417,`p`),Tk(418,`Recebe o item agrupador e retorna um `),Jc(419,`code`),Tk(420,`Observable<Array<PoPopupAction>>`),Zg(),Tk(421,`. A requisi\xE7\xE3o \xE9 disparada
`),Jc(422,`strong`),Tk(423,`apenas`),Zg(),Tk(424,` no momento da expansão (clique ou atalho de teclado), exibindo placeholders com `),Jc(425,`code`),Tk(426,`po-skeleton`),Zg(),Tk(427,`
enquanto os dados s\xE3o carregados:`),Zg(),Jc(428,`pre`)(429,`code`),Tk(430,`{
  label: 'Relat\xF3rios',
  subItemsLazy: (item) => this.reportService.getReports(item)
}
`),Zg()(),Jc(431,`blockquote`)(432,`p`),Tk(433,`O resultado \xE9 armazenado em cache ap\xF3s o primeiro carregamento bem-sucedido.
Em caso de falha, \xE9 exibida uma mensagem com a op\xE7\xE3o de tentar novamente.`),Zg()(),Jc(434,`p`),Tk(435,`Ao definir esta propriedade, o item exibirá um ícone indicador de subnível.`),Zg()()(),Jc(436,`tr`,13)(437,`td`,14)(438,`div`,15)(439,`span`,16),Tk(440,` type`),_u(441,`br`),Zg()()(),Jc(442,`td`,17)(443,`code`,21),Tk(444,`string`),Zg()(),Jc(445,`td`,20)(446,`em`)(447,`strong`),Tk(448,`(opcional)`),Zg()(),Jc(449,`p`),Tk(450,`Define a cor do item.`),Zg(),Jc(451,`p`),Tk(452,`Valores válidos:`),Zg(),Jc(453,`ul`)(454,`li`)(455,`code`),Tk(456,`default`),Zg()(),Jc(457,`li`)(458,`code`),Tk(459,`danger`),Zg()()()()(),Jc(460,`tr`,13)(461,`td`,14)(462,`div`,15)(463,`span`,16),Tk(464,` url`),_u(465,`br`),Zg()()(),Jc(466,`td`,17)(467,`code`,21),Tk(468,`string`),Zg()(),Jc(469,`td`,20)(470,`em`)(471,`strong`),Tk(472,`(opcional)`),Zg()(),Jc(473,`p`),Tk(474,`URL para redirecionamento. Aceita rotas internas e links externos.`),Zg(),Jc(475,`p`),Tk(476,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Jc(477,`code`),Tk(478,`url`),Zg(),Tk(479,` é informada em um agrupador, o clique `),Jc(480,`strong`),Tk(481,`não abrirá os subitens`),Zg(),Tk(482,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),Zg(),Jc(483,`blockquote`)(484,`p`),Tk(485,`Quando informada, tem prioridade sobre a propriedade `),Jc(486,`code`),Tk(487,`action`),Zg(),Tk(488,`.`),Zg()()()(),Jc(489,`tr`,13)(490,`td`,14)(491,`div`,15)(492,`span`,16),Tk(493,` visible`),_u(494,`br`),Zg()()(),Jc(495,`td`,17)(496,`code`,26),Tk(497,`boolean `),Zg(),Jc(498,`code`,28),Tk(499,` Function`),Zg()(),Jc(500,`td`,20)(501,`em`)(502,`strong`),Tk(503,`(opcional)`),Zg()(),Jc(504,`p`),Tk(505,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),Zg()()()(),Jc(506,`h4`,27)(507,`code`,5),Tk(508,`PoToolbarProfile`),Zg()(),Jc(509,`div`,2)(510,`p`),Tk(511,`Interface que define o perfil do `),Jc(512,`code`),Tk(513,`PoToolbarComponent`),Zg(),Tk(514,`.`),Zg()(),Jc(515,`h4`,9),Tk(516,`Propriedades`),Zg(),Jc(517,`table`,10)(518,`tr`,11)(519,`th`,12),Tk(520,`Nome`),Zg(),Jc(521,`th`,12),Tk(522,`Tipo`),Zg(),Jc(523,`th`,12),Tk(524,`Descrição`),Zg()(),Jc(525,`tr`,13)(526,`td`,14)(527,`div`,15)(528,`span`,16),Tk(529,` avatar`),_u(530,`br`),Zg()()(),Jc(531,`td`,17)(532,`code`,21),Tk(533,`string`),Zg()(),Jc(534,`td`,20)(535,`em`)(536,`strong`),Tk(537,`(opcional)`),Zg()(),Jc(538,`p`),Tk(539,`Define o caminho da imagem do perfil.`),Zg()()(),Jc(540,`tr`,13)(541,`td`,14)(542,`div`,15)(543,`span`,16),Tk(544,` subtitle`),_u(545,`br`),Zg()()(),Jc(546,`td`,17)(547,`code`,21),Tk(548,`string`),Zg()(),Jc(549,`td`,20)(550,`em`)(551,`strong`),Tk(552,`(opcional)`),Zg()(),Jc(553,`p`),Tk(554,`Define um texto com menor destaque ao lado da imagem do perfil, como por exemplo o e-mail de usuário.`),Zg()()(),Jc(555,`tr`,13)(556,`td`,14)(557,`div`,15)(558,`span`,16),Tk(559,` title`),_u(560,`br`),Zg()()(),Jc(561,`td`,17)(562,`code`,21),Tk(563,`string`),Zg()(),Jc(564,`td`,20)(565,`p`),Tk(566,`Define um texto com maior destaque ao lado da imagem do perfil, como por exemplo o nome de usuário.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function Me(a,Le){if(a&1){let l=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(l);let n=nk();return H_(n.changeTab(`web`))}),_u(1,`sample-po-toolbar-basic-view`)(2,`sample-po-toolbar-labs-view`)(3,`sample-po-toolbar-logged-view`),Zg()}if(a&2){let l=nk();Rb(`p-active`,l.activeTab===`web`)}}var ke=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,p){this.route=l,this.router=p}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let p=l.view;this.activeTab=p||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Toolbar`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(p,n){p&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Me,4,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return n.changeTab(`doc`)}),_u(4,`sample-po-toolbar-doc`),Zg()()()),p&2&&(Rb(`p-actions`,n.actions),Ig(2),BO(n.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,n.activeTab===`doc`))},dependencies:[Tze,Qae,ere,ce,ue,fe,ge],encapsulation:2,changeDetection:1})}return a})()}];var Ee=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=ge$1({type:a});static ɵinj=de$1({imports:[WV.forChild(ke),WV]})}return a})();var dt=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=ge$1({type:a});static ɵinj=de$1({imports:[M,Ee]})}return a})();export{dt as DocPoToolbarModule};