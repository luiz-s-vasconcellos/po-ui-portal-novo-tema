import{m as P,p as M}from"./main-MOTCU2CE.js";import{An as sie,Ar as I,At as Zte,G as Nf,Ii as WL,Ir as Kb,It as bae,L as Koe,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Sa as j_,St as Vze,Ti as U_,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,ao as we$1,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,gi as Rb,go as z0,io as vu,ji as Vk,k as Goe,ki as V_,li as Qc,na as de,oo as wg,ro as vt,rr as AZ,rt as Ru,sa as ek,si as QL,sn as j4,tt as R4,ua as ge$1,va as ik,vi as Sk,wr as GV,xi as Tk,xr as FO}from"./chunk-DtUf9FxZ.js";var ce=(()=>{class l{static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-toolbar-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Toolbar`]],template:function(p,n){p&1&&vu(0,`po-toolbar`,0)},dependencies:[Vze],encapsulation:2,changeDetection:1})}return l})();var we=l=>({"docs-sample-code-tabs":l});var ue=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-toolbar-basic-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-toolbar-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-toolbar-basic/sample-po-toolbar-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-toolbar-basic/sample-po-toolbar-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Toolbar Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-toolbar-basic/sample-po-toolbar-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-toolbar p-title="PO Toolbar"></po-toolbar>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-toolbar-basic/sample-po-toolbar-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-toolbar-basic',
  templateUrl: './sample-po-toolbar-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToolbarBasicComponent {}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-toolbar-basic`),Kg(),vu(25,`hr`)),p&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,we,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ce],encapsulation:2,changeDetection:1})}return l})();var be=(()=>{class l{poNotification=p(Ru);action;actions;actionsIcon;notificationActions;notificationNumber;profile;profileActions;showNotification;title;toolbarActionType;actionTypes=[{value:`danger`,label:`Danger`},{value:`default`,label:`Default`}];iconOptions=[{value:`an an-chats`,label:`an an-chats`},{value:`an an-clock`,label:`an an-clock`},{value:`an an-sign-out`,label:`an an-sign-out`},{value:`an an-lock`,label:`an an-lock`},{value:`fa fa-calculator`,label:`fa fa-calculator`},{value:`far fa-comment-alt`,label:`far fa-comment-alt`}];actionsIconOptions=[{value:`an an-clock`,label:`an an-clock`},{value:`an an-sign-out`,label:`an an-sign-out`},{value:`an an-lock`,label:`an an-lock`},{value:`an an-gear`,label:`an an-gear`},{value:`far fa-comment-alt`,label:`far fa-comment-alt`}];toolbarActionTypes=[{label:`Actions`,value:`actions`},{label:`Profile`,value:`profile`},{label:`Notification`,value:`notification`}];ngOnInit(){this.restore()}addAction(i,p){let n=Object.assign({},i);n.action=n.action?this.showAction.bind(this,n.action):void 0,this.toolbarActionType===`profile`?this.profileActions.push(n):this.toolbarActionType===`notification`?this.notificationActions.push(n):this.actions.push(n),p.reset()}restore(){this.action={label:void 0},this.profile={avatar:``,subtitle:``,title:``},this.actions=[],this.actionsIcon=void 0,this.profileActions=[],this.notificationActions=[],this.notificationNumber=void 0,this.showNotification=!0,this.title=`PO Toolbar`}showAction(i){this.poNotification.success(`Action clicked: ${i}`)}static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-toolbar-labs`]],standalone:!1,decls:33,vars:27,consts:[[`formAction`,`ngForm`],[`formProfile`,`ngForm`],[`formToolbar`,`ngForm`],[3,`p-actions`,`p-actions-icon`,`p-profile`,`p-profile-actions`,`p-notification-actions`,`p-notification-number`,`p-show-notification`,`p-title`],[1,`sample-container`],[1,`po-row`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionIcon`,`p-clean`,``,`p-label`,`Action icon`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`actionLabel`,`p-clean`,``,`p-label`,`Action label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionUrl`,`p-clean`,``,`p-label`,`Action url`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionType`,`p-label`,`Action type`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`actionDisabled`,`p-clean`,``,`p-label`,`Action separator`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`toolbarActionType`,`p-columns`,`3`,`p-label`,`Toolbar action type`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add Action`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`actionsIcon`,`p-clean`,``,`p-label`,`Actions icon`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`profileTitle`,`p-clean`,``,`p-label`,`Profile title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`profileSubtitle`,`p-clean`,``,`p-label`,`Profile subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`profileAvatar`,`p-clean`,``,`p-label`,`Profile avatar`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`notificationNumber`,`p-clean`,``,`p-label`,`Notification number`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`showNotification`,`p-clean`,``,`p-label`,`Show notification`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(p,n){if(p&1){let m=YO();vu(0,`po-toolbar`,3),Qc(1,`div`,4)(2,`form`,null,0)(4,`div`,5)(5,`po-input`,6),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.action.action,a)||(n.action.action=a),U_(a)}),Kg(),Qc(6,`po-select`,7),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.action.icon,a)||(n.action.icon=a),U_(a)}),Kg(),Qc(7,`po-input`,8),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.action.label,a)||(n.action.label=a),U_(a)}),Kg(),Qc(8,`po-input`,9),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.action.url,a)||(n.action.url=a),U_(a)}),Kg(),Qc(9,`po-radio-group`,10),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.action.type,a)||(n.action.type=a),U_(a)}),Kg(),Qc(10,`po-switch`,11),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.action.separator,a)||(n.action.separator=a),U_(a)}),Kg(),Qc(11,`po-radio-group`,12),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.toolbarActionType,a)||(n.toolbarActionType=a),U_(a)}),Kg()(),Qc(12,`div`,5)(13,`po-button`,13),vt(`p-click`,function(){B_(m);let a=ik(3);return U_(n.addAction(n.action,a))}),Kg()()(),vu(14,`po-divider`),Qc(15,`div`,5)(16,`po-select`,14),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.actionsIcon,a)||(n.actionsIcon=a),U_(a)}),Kg()(),vu(17,`po-divider`),Qc(18,`form`,null,1)(20,`div`,5)(21,`po-input`,15),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.profile.title,a)||(n.profile.title=a),U_(a)}),Kg(),Qc(22,`po-input`,16),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.profile.subtitle,a)||(n.profile.subtitle=a),U_(a)}),Kg(),Qc(23,`po-input`,17),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.profile.avatar,a)||(n.profile.avatar=a),U_(a)}),Kg()()(),vu(24,`po-divider`),Qc(25,`form`,null,2)(27,`div`,5)(28,`po-input`,18),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.title,a)||(n.title=a),U_(a)}),Kg(),Qc(29,`po-number`,19),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.notificationNumber,a)||(n.notificationNumber=a),U_(a)}),Kg(),Qc(30,`po-switch`,20),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.showNotification,a)||(n.showNotification=a),U_(a)}),Kg()(),Qc(31,`div`,5)(32,`po-button`,21),vt(`p-click`,function(){B_(m);let a=ik(3),ve=ik(19);return ik(26).reset(),ve.reset(),a.reset(),U_(n.restore())}),Kg()()()()}if(p&2){let m=ik(3);Rb(`p-actions`,n.actions)(`p-actions-icon`,n.actionsIcon)(`p-profile`,n.profile)(`p-profile-actions`,n.profileActions)(`p-notification-actions`,n.notificationActions)(`p-notification-number`,n.notificationNumber)(`p-show-notification`,n.showNotification)(`p-title`,n.title),wg(5),Yb(`ngModel`,n.action.action),W0(),wg(),Yb(`ngModel`,n.action.icon),Rb(`p-options`,n.iconOptions),W0(),wg(),Yb(`ngModel`,n.action.label),W0(),wg(),Yb(`ngModel`,n.action.url),W0(),wg(),Yb(`ngModel`,n.action.type),Rb(`p-options`,n.actionTypes),W0(),wg(),Yb(`ngModel`,n.action.separator),W0(),wg(),Yb(`ngModel`,n.toolbarActionType),Rb(`p-options`,n.toolbarActionTypes),W0(),wg(2),Rb(`p-disabled`,m.invalid),wg(3),Yb(`ngModel`,n.actionsIcon),Rb(`p-options`,n.actionsIconOptions),W0(),wg(5),Yb(`ngModel`,n.profile.title),W0(),wg(),Yb(`ngModel`,n.profile.subtitle),W0(),wg(),Yb(`ngModel`,n.profile.avatar),W0(),wg(5),Yb(`ngModel`,n.title),W0(),wg(),Yb(`ngModel`,n.notificationNumber),W0(),wg(),Yb(`ngModel`,n.showNotification),W0()}},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,j4,Goe,Zte,Koe,R4,Vze],styles:[`.sample-container[_ngcontent-%COMP%]{margin-top:50px}`],changeDetection:1})}return l})();var Pe=l=>({"docs-sample-code-tabs":l});var fe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-toolbar-labs-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-toolbar-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-toolbar-labs/sample-po-toolbar-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-toolbar-labs/sample-po-toolbar-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Toolbar Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-toolbar-labs/sample-po-toolbar-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<style>
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-toolbar-labs/sample-po-toolbar-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-toolbar-labs`),Kg(),vu(25,`hr`)),p&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Pe,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,be],encapsulation:2,changeDetection:1})}return l})();var ge=(()=>{class l{poDialog=p(sie);poNotification=p(Ru);notificationActions=[{icon:`an an-newspaper`,label:`PO news, stay tuned!`,type:`danger`,action:i=>this.onClickNotification(i)},{icon:`an an-chat`,label:`New message`,type:`danger`,action:i=>this.openDialog(i)}];profile={avatar:`https://via.placeholder.com/48x48?text=AVATAR`,subtitle:`dev@po-ui.com.br`,title:`Mr. Dev PO`};profileActions=[{icon:`an an-user`,label:`User data`,action:i=>this.showAction(i)},{icon:`an an-building-apartment`,label:`Company data`,action:i=>this.showAction(i)},{icon:`an an-gear`,label:`Settings`,action:i=>this.showAction(i)},{icon:`an an-sign-out`,label:`Exit`,type:`danger`,separator:!0,action:i=>this.showAction(i)}];actions=[{label:`Start cash register`,action:i=>this.showAction(i)},{label:`Finalize cash register`,action:i=>this.showAction(i)},{label:`Cash register options`,action:i=>this.showAction(i)}];title=`PO Toolbar Logged`;getNotificationNumber(){return this.notificationActions.filter(i=>i.type===`danger`).length}onClickNotification(i){window.open(`https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md`,`_blank`),i.type=`default`}openDialog(i){this.poDialog.alert({title:`Welcome`,message:`Hello Mr. Dev! Congratulations, you are a TOTVS!`,ok:void 0}),i.type=`default`}showAction(i){this.poNotification.success(`Action clicked: ${i.label}`)}static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-toolbar-logged`]],standalone:!1,features:[we$1([Ru])],decls:8,vars:7,consts:[[`p-actions-icon`,`an an-shopping-cart-simple`,3,`p-actions`,`p-profile`,`p-profile-actions`,`p-notification-actions`,`p-notification-number`,`p-title`],[1,`po-row`],[1,`sample-container`],[1,`po-sm-12`],[1,`po-font-title`],[1,`po-font-subtitle`]],template:function(p,n){p&1&&(vu(0,`po-toolbar`,0),Qc(1,`div`,1)(2,`div`,2)(3,`po-widget`,3)(4,`div`,4),Sk(5),Kg(),Qc(6,`div`,5),Sk(7,`Let's work hard!`),Kg()()()()),p&2&&(Rb(`p-actions`,n.actions)(`p-profile`,n.profile)(`p-profile-actions`,n.profileActions)(`p-notification-actions`,n.notificationActions)(`p-notification-number`,n.getNotificationNumber())(`p-title`,n.title),wg(5),tm(`Hello, `,n.profile.title,`.`))},dependencies:[Vze,bae],styles:[`.sample-container[_ngcontent-%COMP%]{margin-top:50px}`],changeDetection:1})}return l})();var De=l=>({"docs-sample-code-tabs":l});var he=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-toolbar-logged-view`]],standalone:!1,decls:32,vars:6,consts:[[`id`,`sample-po-toolbar-logged`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-toolbar-logged/sample-po-toolbar-logged.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-toolbar-logged/sample-po-toolbar-logged.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Toolbar - Logged`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-toolbar-logged/sample-po-toolbar-logged.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<style>
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
      <div class="po-font-title">Hello, `),Qc(16,`span`),j_(),Sk(17,`{{`),V_(),Kg(),Sk(18,` profile.title `),Qc(19,`span`),j_(),Sk(20,`}}`),V_(),Kg(),Sk(21,`.</div>
      <div class="po-font-subtitle">Let's work hard!</div>
    </po-widget>
  </div>
</div>
`),Kg()()()(),Qc(22,`po-tab`,9)(23,`div`)(24,`label`,6),Sk(25,`sample-po-toolbar-logged/sample-po-toolbar-logged.component.ts`),Kg(),Qc(26,`div`,10)(27,`pre`,11),Sk(28,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),Qc(29,`div`,12),vu(30,`sample-po-toolbar-logged`),Kg(),vu(31,`hr`)),p&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,De,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ge],encapsulation:2,changeDetection:1})}return l})();var Ee=(()=>{class l{router=p(An);openDoc(i){this.router.navigate([`/documentation`,i],{queryParams:{view:`doc`}})}static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-toolbar-doc`]],standalone:!1,decls:567,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-toolbar-component`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-actions`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoToolbarAction>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-actions-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`prop-p-notification-actions`,1,`docs-api-properties-row`],[`id`,`prop-p-notification-number`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-profile`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoToolbarProfile`],[`id`,`prop-p-profile-actions`,1,`docs-api-properties-row`],[`id`,`prop-p-show-notification`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-title`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-toolbar-action-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-toolbar-action-disabled`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-icon`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-label`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-selected`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-separator`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-sub-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`id`,`interface-po-toolbar-action-sub-items-lazy`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`(item:`,`PoPopupAction)`,`=>`,`Observable<Array<PoPopupAction>>`],[`id`,`interface-po-toolbar-action-type`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-url`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-visible`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-profile`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-toolbar-profile-avatar`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-profile-subtitle`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-profile-title`,1,`docs-api-properties-row`]],template:function(p,n){p&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoToolbarModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-toolbar`),Kg()(),Qc(7,`h3`,3),Sk(8,`Componente`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoToolbarComponent`),Kg()(),Qc(12,`div`,2)(13,`p`),Sk(14,`O componente `),Qc(15,`code`),Sk(16,`po-toolbar`),Kg(),Sk(17,` é um cabeçalho para o título da aplicação e informações de usuário e notificações quando houver necessidade. `),Kg()(),Qc(18,`div`,6)(19,`h4`,7),Sk(20,`Seletor`),Kg(),Qc(21,`pre`,8),Sk(22,`<po-toolbar
    p-actions="Array<PoToolbarAction>"
    p-actions-icon="string | TemplateRef<void>"
    p-notification-actions="Array<PoToolbarAction>"
    p-notification-number="number"
    p-profile="PoToolbarProfile"
    p-profile-actions="Array<PoToolbarAction>"
    p-show-notification="boolean"
    p-title="string" >
</po-toolbar>
`),Kg()(),Qc(23,`h4`,9),Sk(24,`Propriedades`),Kg(),Qc(25,`table`,10)(26,`tr`,11)(27,`th`,12),Sk(28,`Nome`),Kg(),Qc(29,`th`,12),Sk(30,`Tipo`),Kg(),Qc(31,`th`,12),Sk(32,`Padrão`),Kg(),Qc(33,`th`,12),Sk(34,`Descrição`),Kg()(),Qc(35,`tr`,13)(36,`td`,14)(37,`div`,15)(38,`span`,16),Sk(39,` p-actions`),vu(40,`br`),Kg()()(),Qc(41,`td`,17)(42,`code`,18),Sk(43,`Array<PoToolbarAction>`),Kg()(),Qc(44,`td`,19),Sk(45,`-`),Kg(),Qc(46,`td`,20)(47,`em`)(48,`strong`),Sk(49,`(opcional)`),Kg()(),Qc(50,`p`),Sk(51,`Define uma lista de ações que serão exibidas ao clicar no ícone declarado em `),Qc(52,`code`),Sk(53,`p-actions-icon`),Kg(),Sk(54,`.`),Kg()()(),Qc(55,`tr`,21)(56,`td`,14)(57,`div`,15)(58,`span`,16),Sk(59,` p-actions-icon`),vu(60,`br`),Kg()()(),Qc(61,`td`,17)(62,`code`,22),Sk(63,`string `),Kg(),Qc(64,`code`,23),Sk(65,` TemplateRef<void>`),Kg()(),Qc(66,`td`,19)(67,`p`)(68,`code`),Sk(69,`an-dots-three`),Kg()()(),Qc(70,`td`,20)(71,`em`)(72,`strong`),Sk(73,`(opcional)`),Kg()(),Qc(74,`p`),Sk(75,`Define um `),Qc(76,`a`,24),Sk(77,`ícone`),Kg(),Sk(78,` para a propriedade `),Qc(79,`code`),Sk(80,`p-actions`),Kg(),Sk(81,`.`),Kg(),Qc(82,`p`),Sk(83,`É possível usar qualquer um dos ícones da `),Qc(84,`a`,24),Sk(85,`Biblioteca de ícones`),Kg(),Sk(86,`. conforme exemplo abaixo:`),Kg(),Qc(87,`pre`)(88,`code`),Sk(89,`<po-toolbar p-actions-icon="an an-user" [p-actions]="actions"></po-toolbar>
`),Kg()(),Qc(90,`p`),Sk(91,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Qc(92,`em`),Sk(93,`Font Awesome`),Kg(),Sk(94,`, da seguinte forma:`),Kg(),Qc(95,`pre`)(96,`code`),Sk(97,`<po-toolbar p-actions-icon="far fa-comment-alt" [p-actions]="actions"></po-toolbar>
`),Kg()(),Qc(98,`p`),Sk(99,`Outra opção seria a customização do ícone através do `),Qc(100,`code`),Sk(101,`TemplateRef`),Kg(),Sk(102,`, conforme exemplo abaixo:`),Kg(),Qc(103,`pre`)(104,`code`),Sk(105,`<po-toolbar [p-actions-icon]="template" [p-actions]="actions"></po-toolbar>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),Kg()(),Qc(106,`blockquote`)(107,`p`),Sk(108,`Para o ícone enquadrar corretamente, deve-se utilizar `),Qc(109,`code`),Sk(110,`font-size: inherit`),Kg(),Sk(111,` caso o ícone utilizado não aplique-o.`),Kg()(),Qc(112,`blockquote`)(113,`p`),Sk(114,`Caso não haja ações definidas em `),Qc(115,`code`),Sk(116,`p-actions`),Kg(),Sk(117,`, o ícone não será exibido.`),Kg()()()(),Qc(118,`tr`,25)(119,`td`,14)(120,`div`,15)(121,`span`,16),Sk(122,` p-notification-actions`),vu(123,`br`),Kg()()(),Qc(124,`td`,17)(125,`code`,18),Sk(126,`Array<PoToolbarAction>`),Kg()(),Qc(127,`td`,19),Sk(128,`-`),Kg(),Qc(129,`td`,20)(130,`em`)(131,`strong`),Sk(132,`(opcional)`),Kg()(),Qc(133,`p`),Sk(134,`Lista de ações da notificação.`),Kg()()(),Qc(135,`tr`,26)(136,`td`,14)(137,`div`,15)(138,`span`,16),Sk(139,` p-notification-number`),vu(140,`br`),Kg()()(),Qc(141,`td`,17)(142,`code`,27),Sk(143,`number`),Kg()(),Qc(144,`td`,19),Sk(145,`-`),Kg(),Qc(146,`td`,20)(147,`em`)(148,`strong`),Sk(149,`(opcional)`),Kg()(),Qc(150,`p`),Sk(151,`Número de notificações.`),Kg()()(),Qc(152,`tr`,28)(153,`td`,14)(154,`div`,15)(155,`span`,16),Sk(156,` p-profile`),vu(157,`br`),Kg()()(),Qc(158,`td`,17)(159,`code`,29),Sk(160,`PoToolbarProfile`),Kg()(),Qc(161,`td`,19),Sk(162,`-`),Kg(),Qc(163,`td`,20)(164,`em`)(165,`strong`),Sk(166,`(opcional)`),Kg()(),Qc(167,`p`),Sk(168,`Define o objeto que será o cabeçalho da lista de ações com as informações do perfil.`),Kg()()(),Qc(169,`tr`,30)(170,`td`,14)(171,`div`,15)(172,`span`,16),Sk(173,` p-profile-actions`),vu(174,`br`),Kg()()(),Qc(175,`td`,17)(176,`code`,18),Sk(177,`Array<PoToolbarAction>`),Kg()(),Qc(178,`td`,19),Sk(179,`-`),Kg(),Qc(180,`td`,20)(181,`em`)(182,`strong`),Sk(183,`(opcional)`),Kg()(),Qc(184,`p`),Sk(185,`Define uma lista de ações que serão exibidas ao clicar no ícone do perfil.`),Kg()()(),Qc(186,`tr`,31)(187,`td`,14)(188,`div`,15)(189,`span`,16),Sk(190,` p-show-notification`),vu(191,`br`),Kg()()(),Qc(192,`td`,17)(193,`code`,32),Sk(194,`boolean`),Kg()(),Qc(195,`td`,19),Sk(196,`-`),Kg(),Qc(197,`td`,20)(198,`em`)(199,`strong`),Sk(200,`(opcional)`),Kg()(),Qc(201,`p`),Sk(202,`Se falso, oculta o ícone de notificações.`),Kg()()(),Qc(203,`tr`,33)(204,`td`,14)(205,`div`,15)(206,`span`,16),Sk(207,` p-title`),vu(208,`br`),Kg()()(),Qc(209,`td`,17)(210,`code`,22),Sk(211,`string`),Kg()(),Qc(212,`td`,19),Sk(213,`-`),Kg(),Qc(214,`td`,20)(215,`p`),Sk(216,`Título do `),Qc(217,`em`),Sk(218,`toolbar`),Kg(),Sk(219,` e aplicação.`),Kg()()()(),Qc(220,`h3`),Sk(221,`Interfaces`),Kg(),Qc(222,`h4`,34)(223,`code`,5),Sk(224,`PoToolbarAction`),Kg()(),Qc(225,`div`,2)(226,`p`),Sk(227,`Interface para lista de ações do componente. `),Kg()(),Qc(228,`h4`,9),Sk(229,`Propriedades`),Kg(),Qc(230,`table`,10)(231,`tr`,11)(232,`th`,12),Sk(233,`Nome`),Kg(),Qc(234,`th`,12),Sk(235,`Tipo`),Kg(),Qc(236,`th`,12),Sk(237,`Descrição`),Kg()(),Qc(238,`tr`,35)(239,`td`,14)(240,`div`,15)(241,`span`,16),Sk(242,` action`),vu(243,`br`),Kg()()(),Qc(244,`td`,17)(245,`code`,36),Sk(246,`Function`),Kg()(),Qc(247,`td`,20)(248,`em`)(249,`strong`),Sk(250,`(opcional)`),Kg()(),Qc(251,`p`),Sk(252,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),Kg(),Qc(253,`p`),Sk(254,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Qc(255,`code`),Sk(256,`subItems`),Kg(),Sk(257,`.`),Kg(),Qc(258,`blockquote`)(259,`p`),Sk(260,`Para que a função seja executada no contexto do componente, utilize `),Qc(261,`em`),Sk(262,`bind`),Kg(),Sk(263,`:
`),Qc(264,`code`),Sk(265,`action: this.myFunction.bind(this)`),Kg()()()()(),Qc(266,`tr`,37)(267,`td`,14)(268,`div`,15)(269,`span`,16),Sk(270,` disabled`),vu(271,`br`),Kg()()(),Qc(272,`td`,17)(273,`code`,32),Sk(274,`boolean `),Kg(),Qc(275,`code`,36),Sk(276,` Function`),Kg()(),Qc(277,`td`,20)(278,`em`)(279,`strong`),Sk(280,`(opcional)`),Kg()(),Qc(281,`p`),Sk(282,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),Kg()()(),Qc(283,`tr`,38)(284,`td`,14)(285,`div`,15)(286,`span`,16),Sk(287,` icon`),vu(288,`br`),Kg()()(),Qc(289,`td`,17)(290,`code`,22),Sk(291,`string `),Kg(),Qc(292,`code`,23),Sk(293,` TemplateRef<void>`),Kg()(),Qc(294,`td`,20)(295,`em`)(296,`strong`),Sk(297,`(opcional)`),Kg()(),Qc(298,`p`),Sk(299,`Ícone exibido ao lado esquerdo do rótulo.`),Kg(),Qc(300,`p`),Sk(301,`Aceita ícones da `),Qc(302,`a`,24),Sk(303,`Biblioteca de ícones`),Kg(),Sk(304,`, fontes externas (ex: Font Awesome)
ou um `),Qc(305,`code`),Sk(306,`TemplateRef`),Kg(),Sk(307,` para ícones customizados.`),Kg(),Qc(308,`pre`)(309,`code`),Sk(310,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),Kg()()()(),Qc(311,`tr`,39)(312,`td`,14)(313,`div`,15)(314,`span`,16),Sk(315,` label`),vu(316,`br`),Kg()()(),Qc(317,`td`,17)(318,`code`,22),Sk(319,`string`),Kg()(),Qc(320,`td`,20)(321,`p`),Sk(322,`Rótulo da ação.`),Kg(),Qc(323,`p`),Sk(324,`A label também pode representar o agrupador de subitens quando a ação possuir `),Qc(325,`code`),Sk(326,`subItems`),Kg(),Sk(327,`.`),Kg()()(),Qc(328,`tr`,40)(329,`td`,14)(330,`div`,15)(331,`span`,16),Sk(332,` selected`),vu(333,`br`),Kg()()(),Qc(334,`td`,17)(335,`code`,32),Sk(336,`boolean`),Kg()(),Qc(337,`td`,20)(338,`em`)(339,`strong`),Sk(340,`(opcional)`),Kg()(),Qc(341,`p`),Sk(342,`Define se a ação está selecionada.`),Kg()()(),Qc(343,`tr`,41)(344,`td`,14)(345,`div`,15)(346,`span`,16),Sk(347,` separator`),vu(348,`br`),Kg()()(),Qc(349,`td`,17)(350,`code`,32),Sk(351,`boolean`),Kg()(),Qc(352,`td`,20)(353,`em`)(354,`strong`),Sk(355,`(opcional)`),Kg()(),Qc(356,`p`),Sk(357,`Atribui uma linha separadora acima do item.`),Kg()()(),Qc(358,`tr`,42)(359,`td`,14)(360,`div`,15)(361,`span`,16),Sk(362,` subItems`),vu(363,`br`),Kg()()(),Qc(364,`td`,17)(365,`code`,43),Sk(366,`Array<PoPopupAction>`),Kg()(),Qc(367,`td`,20)(368,`em`)(369,`strong`),Sk(370,`(opcional)`),Kg()(),Qc(371,`p`),Sk(372,`Define uma lista de subitens para criação de menus aninhados.`),Kg(),Qc(373,`pre`)(374,`code`),Sk(375,`{ label: 'Relat\xF3rios', subItems: [{ label: 'Mensal' }, { label: 'Anual' }] }
`),Kg()(),Qc(376,`p`),Sk(377,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),Kg(),Qc(378,`blockquote`)(379,`p`),Sk(380,`As propriedades `),Qc(381,`code`),Sk(382,`disabled`),Kg(),Sk(383,`, `),Qc(384,`code`),Sk(385,`type`),Kg(),Sk(386,` e `),Qc(387,`code`),Sk(388,`visible`),Kg(),Sk(389,` não são aplicadas visualmente ao item agrupador.`),Kg()(),Qc(390,`blockquote`)(391,`p`),Sk(392,`Quando `),Qc(393,`code`),Sk(394,`url`),Kg(),Sk(395,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),Kg()(),Qc(396,`blockquote`)(397,`p`),Sk(398,`Em subníveis aninhados, o `),Qc(399,`code`),Sk(400,`icon`),Kg(),Sk(401,` do agrupador é substituído pelo indicador de navegação (seta).`),Kg()()()(),Qc(402,`tr`,44)(403,`td`,14)(404,`div`,15)(405,`span`,16),Sk(406,` subItemsLazy`),vu(407,`br`),Kg()()(),Qc(408,`td`,17)(409,`code`,45),Sk(410,`(item: PoPopupAction) => Observable<Array<PoPopupAction>>`),Kg()(),Qc(411,`td`,20)(412,`em`)(413,`strong`),Sk(414,`(opcional)`),Kg()(),Qc(415,`p`),Sk(416,`Define o carregamento assíncrono (lazy loading) dos subitens de um agrupador.`),Kg(),Qc(417,`p`),Sk(418,`Recebe o item agrupador e retorna um `),Qc(419,`code`),Sk(420,`Observable<Array<PoPopupAction>>`),Kg(),Sk(421,`. A requisi\xE7\xE3o \xE9 disparada
`),Qc(422,`strong`),Sk(423,`apenas`),Kg(),Sk(424,` no momento da expansão (clique ou atalho de teclado), exibindo placeholders com `),Qc(425,`code`),Sk(426,`po-skeleton`),Kg(),Sk(427,`
enquanto os dados s\xE3o carregados:`),Kg(),Qc(428,`pre`)(429,`code`),Sk(430,`{
  label: 'Relat\xF3rios',
  subItemsLazy: (item) => this.reportService.getReports(item)
}
`),Kg()(),Qc(431,`blockquote`)(432,`p`),Sk(433,`O resultado \xE9 armazenado em cache ap\xF3s o primeiro carregamento bem-sucedido.
Em caso de falha, \xE9 exibida uma mensagem com a op\xE7\xE3o de tentar novamente.`),Kg()(),Qc(434,`p`),Sk(435,`Ao definir esta propriedade, o item exibirá um ícone indicador de subnível.`),Kg()()(),Qc(436,`tr`,46)(437,`td`,14)(438,`div`,15)(439,`span`,16),Sk(440,` type`),vu(441,`br`),Kg()()(),Qc(442,`td`,17)(443,`code`,22),Sk(444,`string`),Kg()(),Qc(445,`td`,20)(446,`em`)(447,`strong`),Sk(448,`(opcional)`),Kg()(),Qc(449,`p`),Sk(450,`Define a cor do item.`),Kg(),Qc(451,`p`),Sk(452,`Valores válidos:`),Kg(),Qc(453,`ul`)(454,`li`)(455,`code`),Sk(456,`default`),Kg()(),Qc(457,`li`)(458,`code`),Sk(459,`danger`),Kg()()()()(),Qc(460,`tr`,47)(461,`td`,14)(462,`div`,15)(463,`span`,16),Sk(464,` url`),vu(465,`br`),Kg()()(),Qc(466,`td`,17)(467,`code`,22),Sk(468,`string`),Kg()(),Qc(469,`td`,20)(470,`em`)(471,`strong`),Sk(472,`(opcional)`),Kg()(),Qc(473,`p`),Sk(474,`URL para redirecionamento. Aceita rotas internas e links externos.`),Kg(),Qc(475,`p`),Sk(476,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Qc(477,`code`),Sk(478,`url`),Kg(),Sk(479,` é informada em um agrupador, o clique `),Qc(480,`strong`),Sk(481,`não abrirá os subitens`),Kg(),Sk(482,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),Kg(),Qc(483,`blockquote`)(484,`p`),Sk(485,`Quando informada, tem prioridade sobre a propriedade `),Qc(486,`code`),Sk(487,`action`),Kg(),Sk(488,`.`),Kg()()()(),Qc(489,`tr`,48)(490,`td`,14)(491,`div`,15)(492,`span`,16),Sk(493,` visible`),vu(494,`br`),Kg()()(),Qc(495,`td`,17)(496,`code`,32),Sk(497,`boolean `),Kg(),Qc(498,`code`,36),Sk(499,` Function`),Kg()(),Qc(500,`td`,20)(501,`em`)(502,`strong`),Sk(503,`(opcional)`),Kg()(),Qc(504,`p`),Sk(505,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),Kg()()()(),Qc(506,`h4`,49)(507,`code`,5),Sk(508,`PoToolbarProfile`),Kg()(),Qc(509,`div`,2)(510,`p`),Sk(511,`Interface que define o perfil do `),Qc(512,`code`),Sk(513,`PoToolbarComponent`),Kg(),Sk(514,`.`),Kg()(),Qc(515,`h4`,9),Sk(516,`Propriedades`),Kg(),Qc(517,`table`,10)(518,`tr`,11)(519,`th`,12),Sk(520,`Nome`),Kg(),Qc(521,`th`,12),Sk(522,`Tipo`),Kg(),Qc(523,`th`,12),Sk(524,`Descrição`),Kg()(),Qc(525,`tr`,50)(526,`td`,14)(527,`div`,15)(528,`span`,16),Sk(529,` avatar`),vu(530,`br`),Kg()()(),Qc(531,`td`,17)(532,`code`,22),Sk(533,`string`),Kg()(),Qc(534,`td`,20)(535,`em`)(536,`strong`),Sk(537,`(opcional)`),Kg()(),Qc(538,`p`),Sk(539,`Define o caminho da imagem do perfil.`),Kg()()(),Qc(540,`tr`,51)(541,`td`,14)(542,`div`,15)(543,`span`,16),Sk(544,` subtitle`),vu(545,`br`),Kg()()(),Qc(546,`td`,17)(547,`code`,22),Sk(548,`string`),Kg()(),Qc(549,`td`,20)(550,`em`)(551,`strong`),Sk(552,`(opcional)`),Kg()(),Qc(553,`p`),Sk(554,`Define um texto com menor destaque ao lado da imagem do perfil, como por exemplo o e-mail de usuário.`),Kg()()(),Qc(555,`tr`,52)(556,`td`,14)(557,`div`,15)(558,`span`,16),Sk(559,` title`),vu(560,`br`),Kg()()(),Qc(561,`td`,17)(562,`code`,22),Sk(563,`string`),Kg()(),Qc(564,`td`,20)(565,`p`),Sk(566,`Define um texto com maior destaque ao lado da imagem do perfil, como por exemplo o nome de usuário.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return l})();function Ne(l,Ve){if(l&1){let i=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(i);let n=ek();return U_(n.changeTab(`web`))}),vu(1,`sample-po-toolbar-basic-view`)(2,`sample-po-toolbar-labs-view`)(3,`sample-po-toolbar-logged-view`),Kg()}if(l&2){let i=ek();Rb(`p-active`,i.activeTab===`web`)}}var Le=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(i,p){this.route=i,this.router=p}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let p=i.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:p||`web`})}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:`merge`}),this.activeTab=i}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||l)(I(ar),I(An))};static ɵcmp=Jn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Toolbar`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(p,n){p&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,Ne,4,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return n.changeTab(`doc`)}),vu(4,`sample-po-toolbar-doc`),Kg()()()),p&2&&(Rb(`p-actions`,n.actions),wg(2),VO(n.hidePoWebSample?-1:2),wg(),Rb(`p-active`,n.activeTab===`doc`))},dependencies:[Mze,tre,are,ue,fe,he,Ee],encapsulation:2,changeDetection:1})}return l})()}];var Ce=(()=>{class l{static ɵfac=function(p){return new(p||l)};static ɵmod=ge$1({type:l});static ɵinj=de({imports:[GV.forChild(Le),GV]})}return l})();var Et=(()=>{class l{static ɵfac=function(p){return new(p||l)};static ɵmod=ge$1({type:l});static ɵinj=de({imports:[M,Ce]})}return l})();export{Et as DocPoToolbarModule};