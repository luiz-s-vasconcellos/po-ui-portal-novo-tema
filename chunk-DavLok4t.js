import{m as P,p as M}from"./main-5NWS7DIP.js";import{$i as ar,Ar as G0,At as Zte,Ca as j_,Ci as Rk,Fn as tre,Ga as q0,Gr as Kb,Hr as Jn,Ia as nm,Ir as H_,It as bae,Kr as Kg,L as Koe,Li as WL,Oi as U_,Pt as are,Qr as Mk,Ra as ok,Sa as jO,Si as RZ,St as Vze,U as Mze,Va as p,Vr as Jc,W as Nf,Wr as KO,Xi as _t,Yr as LO,Zi as _u,aa as de$1,ar as Ab,bn as oi,co as wg,eo as tk,fo as xZ,jn as sie,jr as GV,k as Goe,mi as QL,or as An,pa as ge$1,qi as Zb,rr as AZ,rt as Ru,sn as j4,so as we,tt as R4,ur as B_,zr as I}from"./chunk-DdK63a0t.js";var pe=(()=>{class l{static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-toolbar-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Toolbar`]],template:function(p,n){p&1&&_u(0,`po-toolbar`,0)},dependencies:[Vze],encapsulation:2,changeDetection:1})}return l})();var se=(()=>{class l{static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-toolbar-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-toolbar-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-toolbar-basic/sample-po-toolbar-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-toolbar-basic/sample-po-toolbar-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,n){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Toolbar Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-toolbar-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-toolbar-basic/sample-po-toolbar-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-toolbar p-title="PO Toolbar"></po-toolbar>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-toolbar-basic/sample-po-toolbar-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-toolbar-basic',
  templateUrl: './sample-po-toolbar-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToolbarBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,pe],encapsulation:2,changeDetection:1})}return l})();var me=(()=>{class l{poNotification=p(Ru);action;actions;actionsIcon;notificationActions;notificationNumber;profile;profileActions;showNotification;title;toolbarActionType;actionTypes=[{value:`danger`,label:`Danger`},{value:`default`,label:`Default`}];iconOptions=[{value:`an an-chats`,label:`an an-chats`},{value:`an an-clock`,label:`an an-clock`},{value:`an an-sign-out`,label:`an an-sign-out`},{value:`an an-lock`,label:`an an-lock`},{value:`fa fa-calculator`,label:`fa fa-calculator`},{value:`far fa-comment-alt`,label:`far fa-comment-alt`}];actionsIconOptions=[{value:`an an-clock`,label:`an an-clock`},{value:`an an-sign-out`,label:`an an-sign-out`},{value:`an an-lock`,label:`an an-lock`},{value:`an an-gear`,label:`an an-gear`},{value:`far fa-comment-alt`,label:`far fa-comment-alt`}];toolbarActionTypes=[{label:`Actions`,value:`actions`},{label:`Profile`,value:`profile`},{label:`Notification`,value:`notification`}];ngOnInit(){this.restore()}addAction(a,p){let n=Object.assign({},a);n.action=n.action?this.showAction.bind(this,n.action):void 0,this.toolbarActionType===`profile`?this.profileActions.push(n):this.toolbarActionType===`notification`?this.notificationActions.push(n):this.actions.push(n),p.reset()}restore(){this.action={label:void 0},this.profile={avatar:``,subtitle:``,title:``},this.actions=[],this.actionsIcon=void 0,this.profileActions=[],this.notificationActions=[],this.notificationNumber=void 0,this.showNotification=!0,this.title=`PO Toolbar`}showAction(a){this.poNotification.success(`Action clicked: ${a}`)}static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-toolbar-labs`]],standalone:!1,decls:33,vars:27,consts:[[`formAction`,`ngForm`],[`formProfile`,`ngForm`],[`formToolbar`,`ngForm`],[3,`p-actions`,`p-actions-icon`,`p-profile`,`p-profile-actions`,`p-notification-actions`,`p-notification-number`,`p-show-notification`,`p-title`],[1,`sample-container`],[1,`po-row`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionIcon`,`p-clean`,``,`p-label`,`Action icon`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`actionLabel`,`p-clean`,``,`p-label`,`Action label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionUrl`,`p-clean`,``,`p-label`,`Action url`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionType`,`p-label`,`Action type`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`actionDisabled`,`p-clean`,``,`p-label`,`Action separator`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`toolbarActionType`,`p-columns`,`3`,`p-label`,`Toolbar action type`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add Action`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`actionsIcon`,`p-clean`,``,`p-label`,`Actions icon`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`profileTitle`,`p-clean`,``,`p-label`,`Profile title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`profileSubtitle`,`p-clean`,``,`p-label`,`Profile subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`profileAvatar`,`p-clean`,``,`p-label`,`Profile avatar`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`notificationNumber`,`p-clean`,``,`p-label`,`Notification number`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`showNotification`,`p-clean`,``,`p-label`,`Show notification`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(p,n){if(p&1){let m=KO();_u(0,`po-toolbar`,3),Jc(1,`div`,4)(2,`form`,null,0)(4,`div`,5)(5,`po-input`,6),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.action.action,i)||(n.action.action=i),H_(i)}),Kg(),Jc(6,`po-select`,7),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.action.icon,i)||(n.action.icon=i),H_(i)}),Kg(),Jc(7,`po-input`,8),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.action.label,i)||(n.action.label=i),H_(i)}),Kg(),Jc(8,`po-input`,9),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.action.url,i)||(n.action.url=i),H_(i)}),Kg(),Jc(9,`po-radio-group`,10),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.action.type,i)||(n.action.type=i),H_(i)}),Kg(),Jc(10,`po-switch`,11),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.action.separator,i)||(n.action.separator=i),H_(i)}),Kg(),Jc(11,`po-radio-group`,12),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.toolbarActionType,i)||(n.toolbarActionType=i),H_(i)}),Kg()(),Jc(12,`div`,5)(13,`po-button`,13),_t(`p-click`,function(){U_(m);let i=ok(3);return H_(n.addAction(n.action,i))}),Kg()()(),_u(14,`po-divider`),Jc(15,`div`,5)(16,`po-select`,14),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.actionsIcon,i)||(n.actionsIcon=i),H_(i)}),Kg()(),_u(17,`po-divider`),Jc(18,`form`,null,1)(20,`div`,5)(21,`po-input`,15),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.profile.title,i)||(n.profile.title=i),H_(i)}),Kg(),Jc(22,`po-input`,16),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.profile.subtitle,i)||(n.profile.subtitle=i),H_(i)}),Kg(),Jc(23,`po-input`,17),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.profile.avatar,i)||(n.profile.avatar=i),H_(i)}),Kg()()(),_u(24,`po-divider`),Jc(25,`form`,null,2)(27,`div`,5)(28,`po-input`,18),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.title,i)||(n.title=i),H_(i)}),Kg(),Jc(29,`po-number`,19),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.notificationNumber,i)||(n.notificationNumber=i),H_(i)}),Kg(),Jc(30,`po-switch`,20),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.showNotification,i)||(n.showNotification=i),H_(i)}),Kg()(),Jc(31,`div`,5)(32,`po-button`,21),_t(`p-click`,function(){U_(m);let i=ok(3),Ee=ok(19);return ok(26).reset(),Ee.reset(),i.reset(),H_(n.restore())}),Kg()()()()}if(p&2){let m=ok(3);Ab(`p-actions`,n.actions)(`p-actions-icon`,n.actionsIcon)(`p-profile`,n.profile)(`p-profile-actions`,n.profileActions)(`p-notification-actions`,n.notificationActions)(`p-notification-number`,n.notificationNumber)(`p-show-notification`,n.showNotification)(`p-title`,n.title),wg(5),Kb(`ngModel`,n.action.action),q0(),wg(),Kb(`ngModel`,n.action.icon),Ab(`p-options`,n.iconOptions),q0(),wg(),Kb(`ngModel`,n.action.label),q0(),wg(),Kb(`ngModel`,n.action.url),q0(),wg(),Kb(`ngModel`,n.action.type),Ab(`p-options`,n.actionTypes),q0(),wg(),Kb(`ngModel`,n.action.separator),q0(),wg(),Kb(`ngModel`,n.toolbarActionType),Ab(`p-options`,n.toolbarActionTypes),q0(),wg(2),Ab(`p-disabled`,m.invalid),wg(3),Kb(`ngModel`,n.actionsIcon),Ab(`p-options`,n.actionsIconOptions),q0(),wg(5),Kb(`ngModel`,n.profile.title),q0(),wg(),Kb(`ngModel`,n.profile.subtitle),q0(),wg(),Kb(`ngModel`,n.profile.avatar),q0(),wg(5),Kb(`ngModel`,n.title),q0(),wg(),Kb(`ngModel`,n.notificationNumber),q0(),wg(),Kb(`ngModel`,n.showNotification),q0()}},dependencies:[xZ,RZ,AZ,QL,WL,oi,Nf,j4,Goe,Zte,Koe,R4,Vze],styles:[`.sample-container[_ngcontent-%COMP%]{margin-top:50px}`],changeDetection:1})}return l})();var ce=(()=>{class l{static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-toolbar-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-toolbar-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-toolbar-labs/sample-po-toolbar-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-toolbar-labs/sample-po-toolbar-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,n){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Toolbar Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-toolbar-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-toolbar-labs/sample-po-toolbar-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<style>
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-toolbar-labs/sample-po-toolbar-labs.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,me],encapsulation:2,changeDetection:1})}return l})();var de=(()=>{class l{poDialog=p(sie);poNotification=p(Ru);notificationActions=[{icon:`an an-newspaper`,label:`PO news, stay tuned!`,type:`danger`,action:a=>this.onClickNotification(a)},{icon:`an an-chat`,label:`New message`,type:`danger`,action:a=>this.openDialog(a)}];profile={avatar:`https://via.placeholder.com/48x48?text=AVATAR`,subtitle:`dev@po-ui.com.br`,title:`Mr. Dev PO`};profileActions=[{icon:`an an-user`,label:`User data`,action:a=>this.showAction(a)},{icon:`an an-building-apartment`,label:`Company data`,action:a=>this.showAction(a)},{icon:`an an-gear`,label:`Settings`,action:a=>this.showAction(a)},{icon:`an an-sign-out`,label:`Exit`,type:`danger`,separator:!0,action:a=>this.showAction(a)}];actions=[{label:`Start cash register`,action:a=>this.showAction(a)},{label:`Finalize cash register`,action:a=>this.showAction(a)},{label:`Cash register options`,action:a=>this.showAction(a)}];title=`PO Toolbar Logged`;getNotificationNumber(){return this.notificationActions.filter(a=>a.type===`danger`).length}onClickNotification(a){window.open(`https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md`,`_blank`),a.type=`default`}openDialog(a){this.poDialog.alert({title:`Welcome`,message:`Hello Mr. Dev! Congratulations, you are a TOTVS!`,ok:void 0}),a.type=`default`}showAction(a){this.poNotification.success(`Action clicked: ${a.label}`)}static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-toolbar-logged`]],standalone:!1,features:[we([Ru])],decls:8,vars:7,consts:[[`p-actions-icon`,`an an-shopping-cart-simple`,3,`p-actions`,`p-profile`,`p-profile-actions`,`p-notification-actions`,`p-notification-number`,`p-title`],[1,`po-row`],[1,`sample-container`],[1,`po-sm-12`],[1,`po-font-title`],[1,`po-font-subtitle`]],template:function(p,n){p&1&&(_u(0,`po-toolbar`,0),Jc(1,`div`,1)(2,`div`,2)(3,`po-widget`,3)(4,`div`,4),Mk(5),Kg(),Jc(6,`div`,5),Mk(7,`Let's work hard!`),Kg()()()()),p&2&&(Ab(`p-actions`,n.actions)(`p-profile`,n.profile)(`p-profile-actions`,n.profileActions)(`p-notification-actions`,n.notificationActions)(`p-notification-number`,n.getNotificationNumber())(`p-title`,n.title),wg(5),nm(`Hello, `,n.profile.title,`.`))},dependencies:[Vze,bae],styles:[`.sample-container[_ngcontent-%COMP%]{margin-top:50px}`],changeDetection:1})}return l})();var ue=(()=>{class l{static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-toolbar-logged-view`]],standalone:!1,decls:30,vars:0,consts:[[`id`,`sample-po-toolbar-logged`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-toolbar-logged/sample-po-toolbar-logged.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-toolbar-logged/sample-po-toolbar-logged.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,n){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Toolbar - Logged`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-toolbar-logged`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-toolbar-logged/sample-po-toolbar-logged.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<style>
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
      <div class="po-font-title">Hello, `),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` profile.title `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,`.</div>
      <div class="po-font-subtitle">Let's work hard!</div>
    </po-widget>
  </div>
</div>
`),Kg()()()(),Jc(22,`po-tab`,10)(23,`div`)(24,`label`,7),Mk(25,`sample-po-toolbar-logged/sample-po-toolbar-logged.component.ts`),Kg(),Jc(26,`div`,11)(27,`pre`,12),Mk(28,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(29,`hr`))},dependencies:[P,tre,are,de],encapsulation:2,changeDetection:1})}return l})();var be=(()=>{class l{router=p(An);openDoc(a){this.router.navigate([`/documentation`,a],{queryParams:{view:`doc`}})}static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-toolbar-doc`]],standalone:!1,decls:567,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-toolbar-component`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-actions`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoToolbarAction>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-actions-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`prop-p-notification-actions`,1,`docs-api-properties-row`],[`id`,`prop-p-notification-number`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-profile`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoToolbarProfile`],[`id`,`prop-p-profile-actions`,1,`docs-api-properties-row`],[`id`,`prop-p-show-notification`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-title`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-toolbar-action-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-toolbar-action-disabled`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-icon`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-label`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-selected`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-separator`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-sub-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`id`,`interface-po-toolbar-action-sub-items-lazy`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`(item:`,`PoPopupAction)`,`=>`,`Observable<Array<PoPopupAction>>`],[`id`,`interface-po-toolbar-action-type`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-url`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-visible`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-profile`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-toolbar-profile-avatar`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-profile-subtitle`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-profile-title`,1,`docs-api-properties-row`]],template:function(p,n){p&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoToolbarModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do componente po-toolbar`),Kg()(),Jc(7,`h3`,3),Mk(8,`Componente`),Kg(),Jc(9,`h4`,4)(10,`code`,5),Mk(11,`PoToolbarComponent`),Kg()(),Jc(12,`div`,2)(13,`p`),Mk(14,`O componente `),Jc(15,`code`),Mk(16,`po-toolbar`),Kg(),Mk(17,` é um cabeçalho para o título da aplicação e informações de usuário e notificações quando houver necessidade. `),Kg()(),Jc(18,`div`,6)(19,`h4`,7),Mk(20,`Seletor`),Kg(),Jc(21,`pre`,8),Mk(22,`<po-toolbar
    p-actions="Array<PoToolbarAction>"
    p-actions-icon="string | TemplateRef<void>"
    p-notification-actions="Array<PoToolbarAction>"
    p-notification-number="number"
    p-profile="PoToolbarProfile"
    p-profile-actions="Array<PoToolbarAction>"
    p-show-notification="boolean"
    p-title="string" >
</po-toolbar>
`),Kg()(),Jc(23,`h4`,9),Mk(24,`Propriedades`),Kg(),Jc(25,`table`,10)(26,`tr`,11)(27,`th`,12),Mk(28,`Nome`),Kg(),Jc(29,`th`,12),Mk(30,`Tipo`),Kg(),Jc(31,`th`,12),Mk(32,`Padrão`),Kg(),Jc(33,`th`,12),Mk(34,`Descrição`),Kg()(),Jc(35,`tr`,13)(36,`td`,14)(37,`div`,15)(38,`span`,16),Mk(39,` p-actions`),_u(40,`br`),Kg()()(),Jc(41,`td`,17)(42,`code`,18),Mk(43,`Array<PoToolbarAction>`),Kg()(),Jc(44,`td`,19),Mk(45,`-`),Kg(),Jc(46,`td`,20)(47,`em`)(48,`strong`),Mk(49,`(opcional)`),Kg()(),Jc(50,`p`),Mk(51,`Define uma lista de ações que serão exibidas ao clicar no ícone declarado em `),Jc(52,`code`),Mk(53,`p-actions-icon`),Kg(),Mk(54,`.`),Kg()()(),Jc(55,`tr`,21)(56,`td`,14)(57,`div`,15)(58,`span`,16),Mk(59,` p-actions-icon`),_u(60,`br`),Kg()()(),Jc(61,`td`,17)(62,`code`,22),Mk(63,`string `),Kg(),Jc(64,`code`,23),Mk(65,` TemplateRef<void>`),Kg()(),Jc(66,`td`,19)(67,`p`)(68,`code`),Mk(69,`an-dots-three`),Kg()()(),Jc(70,`td`,20)(71,`em`)(72,`strong`),Mk(73,`(opcional)`),Kg()(),Jc(74,`p`),Mk(75,`Define um `),Jc(76,`a`,24),Mk(77,`ícone`),Kg(),Mk(78,` para a propriedade `),Jc(79,`code`),Mk(80,`p-actions`),Kg(),Mk(81,`.`),Kg(),Jc(82,`p`),Mk(83,`É possível usar qualquer um dos ícones da `),Jc(84,`a`,24),Mk(85,`Biblioteca de ícones`),Kg(),Mk(86,`. conforme exemplo abaixo:`),Kg(),Jc(87,`pre`)(88,`code`),Mk(89,`<po-toolbar p-actions-icon="an an-user" [p-actions]="actions"></po-toolbar>
`),Kg()(),Jc(90,`p`),Mk(91,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Jc(92,`em`),Mk(93,`Font Awesome`),Kg(),Mk(94,`, da seguinte forma:`),Kg(),Jc(95,`pre`)(96,`code`),Mk(97,`<po-toolbar p-actions-icon="far fa-comment-alt" [p-actions]="actions"></po-toolbar>
`),Kg()(),Jc(98,`p`),Mk(99,`Outra opção seria a customização do ícone através do `),Jc(100,`code`),Mk(101,`TemplateRef`),Kg(),Mk(102,`, conforme exemplo abaixo:`),Kg(),Jc(103,`pre`)(104,`code`),Mk(105,`<po-toolbar [p-actions-icon]="template" [p-actions]="actions"></po-toolbar>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),Kg()(),Jc(106,`blockquote`)(107,`p`),Mk(108,`Para o ícone enquadrar corretamente, deve-se utilizar `),Jc(109,`code`),Mk(110,`font-size: inherit`),Kg(),Mk(111,` caso o ícone utilizado não aplique-o.`),Kg()(),Jc(112,`blockquote`)(113,`p`),Mk(114,`Caso não haja ações definidas em `),Jc(115,`code`),Mk(116,`p-actions`),Kg(),Mk(117,`, o ícone não será exibido.`),Kg()()()(),Jc(118,`tr`,25)(119,`td`,14)(120,`div`,15)(121,`span`,16),Mk(122,` p-notification-actions`),_u(123,`br`),Kg()()(),Jc(124,`td`,17)(125,`code`,18),Mk(126,`Array<PoToolbarAction>`),Kg()(),Jc(127,`td`,19),Mk(128,`-`),Kg(),Jc(129,`td`,20)(130,`em`)(131,`strong`),Mk(132,`(opcional)`),Kg()(),Jc(133,`p`),Mk(134,`Lista de ações da notificação.`),Kg()()(),Jc(135,`tr`,26)(136,`td`,14)(137,`div`,15)(138,`span`,16),Mk(139,` p-notification-number`),_u(140,`br`),Kg()()(),Jc(141,`td`,17)(142,`code`,27),Mk(143,`number`),Kg()(),Jc(144,`td`,19),Mk(145,`-`),Kg(),Jc(146,`td`,20)(147,`em`)(148,`strong`),Mk(149,`(opcional)`),Kg()(),Jc(150,`p`),Mk(151,`Número de notificações.`),Kg()()(),Jc(152,`tr`,28)(153,`td`,14)(154,`div`,15)(155,`span`,16),Mk(156,` p-profile`),_u(157,`br`),Kg()()(),Jc(158,`td`,17)(159,`code`,29),Mk(160,`PoToolbarProfile`),Kg()(),Jc(161,`td`,19),Mk(162,`-`),Kg(),Jc(163,`td`,20)(164,`em`)(165,`strong`),Mk(166,`(opcional)`),Kg()(),Jc(167,`p`),Mk(168,`Define o objeto que será o cabeçalho da lista de ações com as informações do perfil.`),Kg()()(),Jc(169,`tr`,30)(170,`td`,14)(171,`div`,15)(172,`span`,16),Mk(173,` p-profile-actions`),_u(174,`br`),Kg()()(),Jc(175,`td`,17)(176,`code`,18),Mk(177,`Array<PoToolbarAction>`),Kg()(),Jc(178,`td`,19),Mk(179,`-`),Kg(),Jc(180,`td`,20)(181,`em`)(182,`strong`),Mk(183,`(opcional)`),Kg()(),Jc(184,`p`),Mk(185,`Define uma lista de ações que serão exibidas ao clicar no ícone do perfil.`),Kg()()(),Jc(186,`tr`,31)(187,`td`,14)(188,`div`,15)(189,`span`,16),Mk(190,` p-show-notification`),_u(191,`br`),Kg()()(),Jc(192,`td`,17)(193,`code`,32),Mk(194,`boolean`),Kg()(),Jc(195,`td`,19),Mk(196,`-`),Kg(),Jc(197,`td`,20)(198,`em`)(199,`strong`),Mk(200,`(opcional)`),Kg()(),Jc(201,`p`),Mk(202,`Se falso, oculta o ícone de notificações.`),Kg()()(),Jc(203,`tr`,33)(204,`td`,14)(205,`div`,15)(206,`span`,16),Mk(207,` p-title`),_u(208,`br`),Kg()()(),Jc(209,`td`,17)(210,`code`,22),Mk(211,`string`),Kg()(),Jc(212,`td`,19),Mk(213,`-`),Kg(),Jc(214,`td`,20)(215,`p`),Mk(216,`Título do `),Jc(217,`em`),Mk(218,`toolbar`),Kg(),Mk(219,` e aplicação.`),Kg()()()(),Jc(220,`h3`),Mk(221,`Interfaces`),Kg(),Jc(222,`h4`,34)(223,`code`,5),Mk(224,`PoToolbarAction`),Kg()(),Jc(225,`div`,2)(226,`p`),Mk(227,`Interface para lista de ações do componente. `),Kg()(),Jc(228,`h4`,9),Mk(229,`Propriedades`),Kg(),Jc(230,`table`,10)(231,`tr`,11)(232,`th`,12),Mk(233,`Nome`),Kg(),Jc(234,`th`,12),Mk(235,`Tipo`),Kg(),Jc(236,`th`,12),Mk(237,`Descrição`),Kg()(),Jc(238,`tr`,35)(239,`td`,14)(240,`div`,15)(241,`span`,16),Mk(242,` action`),_u(243,`br`),Kg()()(),Jc(244,`td`,17)(245,`code`,36),Mk(246,`Function`),Kg()(),Jc(247,`td`,20)(248,`em`)(249,`strong`),Mk(250,`(opcional)`),Kg()(),Jc(251,`p`),Mk(252,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),Kg(),Jc(253,`p`),Mk(254,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Jc(255,`code`),Mk(256,`subItems`),Kg(),Mk(257,`.`),Kg(),Jc(258,`blockquote`)(259,`p`),Mk(260,`Para que a função seja executada no contexto do componente, utilize `),Jc(261,`em`),Mk(262,`bind`),Kg(),Mk(263,`:
`),Jc(264,`code`),Mk(265,`action: this.myFunction.bind(this)`),Kg()()()()(),Jc(266,`tr`,37)(267,`td`,14)(268,`div`,15)(269,`span`,16),Mk(270,` disabled`),_u(271,`br`),Kg()()(),Jc(272,`td`,17)(273,`code`,32),Mk(274,`boolean `),Kg(),Jc(275,`code`,36),Mk(276,` Function`),Kg()(),Jc(277,`td`,20)(278,`em`)(279,`strong`),Mk(280,`(opcional)`),Kg()(),Jc(281,`p`),Mk(282,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),Kg()()(),Jc(283,`tr`,38)(284,`td`,14)(285,`div`,15)(286,`span`,16),Mk(287,` icon`),_u(288,`br`),Kg()()(),Jc(289,`td`,17)(290,`code`,22),Mk(291,`string `),Kg(),Jc(292,`code`,23),Mk(293,` TemplateRef<void>`),Kg()(),Jc(294,`td`,20)(295,`em`)(296,`strong`),Mk(297,`(opcional)`),Kg()(),Jc(298,`p`),Mk(299,`Ícone exibido ao lado esquerdo do rótulo.`),Kg(),Jc(300,`p`),Mk(301,`Aceita ícones da `),Jc(302,`a`,24),Mk(303,`Biblioteca de ícones`),Kg(),Mk(304,`, fontes externas (ex: Font Awesome)
ou um `),Jc(305,`code`),Mk(306,`TemplateRef`),Kg(),Mk(307,` para ícones customizados.`),Kg(),Jc(308,`pre`)(309,`code`),Mk(310,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),Kg()()()(),Jc(311,`tr`,39)(312,`td`,14)(313,`div`,15)(314,`span`,16),Mk(315,` label`),_u(316,`br`),Kg()()(),Jc(317,`td`,17)(318,`code`,22),Mk(319,`string`),Kg()(),Jc(320,`td`,20)(321,`p`),Mk(322,`Rótulo da ação.`),Kg(),Jc(323,`p`),Mk(324,`A label também pode representar o agrupador de subitens quando a ação possuir `),Jc(325,`code`),Mk(326,`subItems`),Kg(),Mk(327,`.`),Kg()()(),Jc(328,`tr`,40)(329,`td`,14)(330,`div`,15)(331,`span`,16),Mk(332,` selected`),_u(333,`br`),Kg()()(),Jc(334,`td`,17)(335,`code`,32),Mk(336,`boolean`),Kg()(),Jc(337,`td`,20)(338,`em`)(339,`strong`),Mk(340,`(opcional)`),Kg()(),Jc(341,`p`),Mk(342,`Define se a ação está selecionada.`),Kg()()(),Jc(343,`tr`,41)(344,`td`,14)(345,`div`,15)(346,`span`,16),Mk(347,` separator`),_u(348,`br`),Kg()()(),Jc(349,`td`,17)(350,`code`,32),Mk(351,`boolean`),Kg()(),Jc(352,`td`,20)(353,`em`)(354,`strong`),Mk(355,`(opcional)`),Kg()(),Jc(356,`p`),Mk(357,`Atribui uma linha separadora acima do item.`),Kg()()(),Jc(358,`tr`,42)(359,`td`,14)(360,`div`,15)(361,`span`,16),Mk(362,` subItems`),_u(363,`br`),Kg()()(),Jc(364,`td`,17)(365,`code`,43),Mk(366,`Array<PoPopupAction>`),Kg()(),Jc(367,`td`,20)(368,`em`)(369,`strong`),Mk(370,`(opcional)`),Kg()(),Jc(371,`p`),Mk(372,`Define uma lista de subitens para criação de menus aninhados.`),Kg(),Jc(373,`pre`)(374,`code`),Mk(375,`{ label: 'Relat\xF3rios', subItems: [{ label: 'Mensal' }, { label: 'Anual' }] }
`),Kg()(),Jc(376,`p`),Mk(377,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),Kg(),Jc(378,`blockquote`)(379,`p`),Mk(380,`As propriedades `),Jc(381,`code`),Mk(382,`disabled`),Kg(),Mk(383,`, `),Jc(384,`code`),Mk(385,`type`),Kg(),Mk(386,` e `),Jc(387,`code`),Mk(388,`visible`),Kg(),Mk(389,` não são aplicadas visualmente ao item agrupador.`),Kg()(),Jc(390,`blockquote`)(391,`p`),Mk(392,`Quando `),Jc(393,`code`),Mk(394,`url`),Kg(),Mk(395,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),Kg()(),Jc(396,`blockquote`)(397,`p`),Mk(398,`Em subníveis aninhados, o `),Jc(399,`code`),Mk(400,`icon`),Kg(),Mk(401,` do agrupador é substituído pelo indicador de navegação (seta).`),Kg()()()(),Jc(402,`tr`,44)(403,`td`,14)(404,`div`,15)(405,`span`,16),Mk(406,` subItemsLazy`),_u(407,`br`),Kg()()(),Jc(408,`td`,17)(409,`code`,45),Mk(410,`(item: PoPopupAction) => Observable<Array<PoPopupAction>>`),Kg()(),Jc(411,`td`,20)(412,`em`)(413,`strong`),Mk(414,`(opcional)`),Kg()(),Jc(415,`p`),Mk(416,`Define o carregamento assíncrono (lazy loading) dos subitens de um agrupador.`),Kg(),Jc(417,`p`),Mk(418,`Recebe o item agrupador e retorna um `),Jc(419,`code`),Mk(420,`Observable<Array<PoPopupAction>>`),Kg(),Mk(421,`. A requisi\xE7\xE3o \xE9 disparada
`),Jc(422,`strong`),Mk(423,`apenas`),Kg(),Mk(424,` no momento da expansão (clique ou atalho de teclado), exibindo placeholders com `),Jc(425,`code`),Mk(426,`po-skeleton`),Kg(),Mk(427,`
enquanto os dados s\xE3o carregados:`),Kg(),Jc(428,`pre`)(429,`code`),Mk(430,`{
  label: 'Relat\xF3rios',
  subItemsLazy: (item) => this.reportService.getReports(item)
}
`),Kg()(),Jc(431,`blockquote`)(432,`p`),Mk(433,`O resultado \xE9 armazenado em cache ap\xF3s o primeiro carregamento bem-sucedido.
Em caso de falha, \xE9 exibida uma mensagem com a op\xE7\xE3o de tentar novamente.`),Kg()(),Jc(434,`p`),Mk(435,`Ao definir esta propriedade, o item exibirá um ícone indicador de subnível.`),Kg()()(),Jc(436,`tr`,46)(437,`td`,14)(438,`div`,15)(439,`span`,16),Mk(440,` type`),_u(441,`br`),Kg()()(),Jc(442,`td`,17)(443,`code`,22),Mk(444,`string`),Kg()(),Jc(445,`td`,20)(446,`em`)(447,`strong`),Mk(448,`(opcional)`),Kg()(),Jc(449,`p`),Mk(450,`Define a cor do item.`),Kg(),Jc(451,`p`),Mk(452,`Valores válidos:`),Kg(),Jc(453,`ul`)(454,`li`)(455,`code`),Mk(456,`default`),Kg()(),Jc(457,`li`)(458,`code`),Mk(459,`danger`),Kg()()()()(),Jc(460,`tr`,47)(461,`td`,14)(462,`div`,15)(463,`span`,16),Mk(464,` url`),_u(465,`br`),Kg()()(),Jc(466,`td`,17)(467,`code`,22),Mk(468,`string`),Kg()(),Jc(469,`td`,20)(470,`em`)(471,`strong`),Mk(472,`(opcional)`),Kg()(),Jc(473,`p`),Mk(474,`URL para redirecionamento. Aceita rotas internas e links externos.`),Kg(),Jc(475,`p`),Mk(476,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Jc(477,`code`),Mk(478,`url`),Kg(),Mk(479,` é informada em um agrupador, o clique `),Jc(480,`strong`),Mk(481,`não abrirá os subitens`),Kg(),Mk(482,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),Kg(),Jc(483,`blockquote`)(484,`p`),Mk(485,`Quando informada, tem prioridade sobre a propriedade `),Jc(486,`code`),Mk(487,`action`),Kg(),Mk(488,`.`),Kg()()()(),Jc(489,`tr`,48)(490,`td`,14)(491,`div`,15)(492,`span`,16),Mk(493,` visible`),_u(494,`br`),Kg()()(),Jc(495,`td`,17)(496,`code`,32),Mk(497,`boolean `),Kg(),Jc(498,`code`,36),Mk(499,` Function`),Kg()(),Jc(500,`td`,20)(501,`em`)(502,`strong`),Mk(503,`(opcional)`),Kg()(),Jc(504,`p`),Mk(505,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),Kg()()()(),Jc(506,`h4`,49)(507,`code`,5),Mk(508,`PoToolbarProfile`),Kg()(),Jc(509,`div`,2)(510,`p`),Mk(511,`Interface que define o perfil do `),Jc(512,`code`),Mk(513,`PoToolbarComponent`),Kg(),Mk(514,`.`),Kg()(),Jc(515,`h4`,9),Mk(516,`Propriedades`),Kg(),Jc(517,`table`,10)(518,`tr`,11)(519,`th`,12),Mk(520,`Nome`),Kg(),Jc(521,`th`,12),Mk(522,`Tipo`),Kg(),Jc(523,`th`,12),Mk(524,`Descrição`),Kg()(),Jc(525,`tr`,50)(526,`td`,14)(527,`div`,15)(528,`span`,16),Mk(529,` avatar`),_u(530,`br`),Kg()()(),Jc(531,`td`,17)(532,`code`,22),Mk(533,`string`),Kg()(),Jc(534,`td`,20)(535,`em`)(536,`strong`),Mk(537,`(opcional)`),Kg()(),Jc(538,`p`),Mk(539,`Define o caminho da imagem do perfil.`),Kg()()(),Jc(540,`tr`,51)(541,`td`,14)(542,`div`,15)(543,`span`,16),Mk(544,` subtitle`),_u(545,`br`),Kg()()(),Jc(546,`td`,17)(547,`code`,22),Mk(548,`string`),Kg()(),Jc(549,`td`,20)(550,`em`)(551,`strong`),Mk(552,`(opcional)`),Kg()(),Jc(553,`p`),Mk(554,`Define um texto com menor destaque ao lado da imagem do perfil, como por exemplo o e-mail de usuário.`),Kg()()(),Jc(555,`tr`,52)(556,`td`,14)(557,`div`,15)(558,`span`,16),Mk(559,` title`),_u(560,`br`),Kg()()(),Jc(561,`td`,17)(562,`code`,22),Mk(563,`string`),Kg()(),Jc(564,`td`,20)(565,`p`),Mk(566,`Define um texto com maior destaque ao lado da imagem do perfil, como por exemplo o nome de usuário.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return l})();function Ce(l,Ae){if(l&1&&(Jc(0,`div`,1),_u(1,`sample-po-toolbar-basic-view`)(2,`sample-po-toolbar-labs-view`)(3,`sample-po-toolbar-logged-view`),Kg()),l&2){let a=tk();Ab(`hidden`,a.activeTab!==`web`)}}var Te=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;title=`Toolbar`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(a,p){this.route=a,this.router=p}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let p=a.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:p||`web`,this.title=`Toolbar · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||l)(I(ar),I(An))};static ɵcmp=Jn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[3,`hidden`]],template:function(p,n){p&1&&(Jc(0,`po-page-default`,0),LO(1,Ce,4,1,`div`,1),Jc(2,`div`,1),_u(3,`sample-po-toolbar-doc`),Kg()()),p&2&&(Ab(`p-title`,n.title)(`p-actions`,n.actions),wg(),jO(n.hidePoWebSample?-1:1),wg(),Ab(`hidden`,n.activeTab!==`doc`))},dependencies:[Mze,se,ce,ue,be],encapsulation:2,changeDetection:1})}return l})()}];var ge=(()=>{class l{static ɵfac=function(p){return new(p||l)};static ɵmod=ge$1({type:l});static ɵinj=de$1({imports:[GV.forChild(Te),GV]})}return l})();var ct=(()=>{class l{static ɵfac=function(p){return new(p||l)};static ɵmod=ge$1({type:l});static ɵinj=de$1({imports:[M,ge]})}return l})();export{ct as DocPoToolbarModule};