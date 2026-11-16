import{m as P,p as M}from"./main-5ZHUK4IE.js";import{$ as Pze,Ar as I,At as Zte,Bi as Xk,Ci as UO,Ei as Uk,G as Nf,Hr as Lk,Ii as WL,Ir as Kb,Lr as Kg,Oi as VO,Or as HO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Ta as jk,Ti as U_,Ui as YO,W as Mze,Wi as Yb,Wr as MZ,Y as Or,Zi as ar,Zr as No,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,do as xo,gi as Rb,go as z0,hr as Db,io as vu,ji as Vk,k as Goe,li as Qc,lr as Be$1,na as de,oo as wg,q as Nze,ro as vt,rr as AZ,rt as Ru,sa as ek,si as QL,sn as j4,tt as R4,ua as ge,vi as Sk,wr as GV,xi as Tk,xr as FO,yr as Du}from"./chunk-DtUf9FxZ.js";import{n as s,t as r}from"./chunk-zystk1pz.js";var fe=(()=>{class r{poNotification;headerBrand={title:`Minha empresa`,logo:`../../../assets/po-logos/po_color.png`,action:this.myAction.bind(this,`Logo ação`)};constructor(i){this.poNotification=i}myAction(i){this.poNotification.success(`Action clicked: ${i}`)}static ɵfac=function(l){return new(l||r)(I(Ru))};static ɵcmp=Jn({type:r,selectors:[[`sample-po-header-basic`]],standalone:!1,decls:1,vars:2,consts:[[3,`p-brand`,`p-side-menu-only-action`]],template:function(l,o){l&1&&vu(0,`po-header`,0),l&2&&Rb(`p-brand`,o.headerBrand)(`p-side-menu-only-action`,!0)},dependencies:[Nze],styles:[`po-header[_ngcontent-%COMP%]{--%NS%nav-position: flex}`],changeDetection:1})}return r})();var Ne=r=>({"docs-sample-code-tabs":r});var ve=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-header-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-header-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Header Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-header-basic/sample-po-header-basic.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-header [p-brand]="headerBrand" [p-side-menu-only-action]="true"></po-header>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-header-basic/sample-po-header-basic.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoHeaderBrand, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-header-basic',
  templateUrl: './sample-po-header-basic.component.html',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: \`
    /* alterado apenas para demonstra\xE7\xE3o no portal*/
    po-header {
      --nav-position: flex;
    }
  \`
})
export class SamplePoHeaderBasicComponent {
  headerBrand: PoHeaderBrand = {
    title: 'Minha empresa',
    logo: '../../../assets/po-logos/po_color.png',
    action: this.myAction.bind(this, 'Logo a\xE7\xE3o')
  };

  constructor(private poNotification: PoNotificationService) {}

  myAction(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-header-basic`),Kg(),vu(23,`hr`)),l&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ne,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,fe],encapsulation:2,changeDetection:1})}return r})();var Be=()=>({label:`Positive`,value:`positive`});var Le=()=>({label:`Negative`,value:`negative`});var Me=()=>({label:`Warning`,value:`warning`});var De=()=>({label:`Disabled`,value:`disabled`});var Fe=(r,C,i,l)=>[r,C,i,l];var Ve=()=>({label:`Medium`,value:`medium`});var Ie=()=>({label:`Small`,value:`small`});var Ue=(r,C)=>[r,C];var Ce=(()=>{class r$1{poNotification;headerBrandTitle=``;headerBrandLogo=``;headerBrandSmallLogo=``;headerBrand={};menuActionLabel=``;menuActionEvent=``;menuActions=[];actionNewTool={tooltip:``,icon:``,badge:null,action:null,label:``};actionNewToolEvent=!1;actionTools=[];newActionUser={avatar:``,customerBrand:``,status:`positive`};actionUser={avatar:``,customerBrand:``,status:`positive`};size=`medium`;constructor(i){this.poNotification=i}addBrand(){this.headerBrand={logo:this.headerBrandLogo,title:this.headerBrandTitle,smallLogo:this.headerBrandSmallLogo},this.headerBrandTitle=``,this.headerBrandLogo=``,this.headerBrandSmallLogo=``}addAction(){this.menuActions=[...this.menuActions,{label:this.menuActionLabel,action:this.menuActionEvent?this.showAction.bind(this,this.menuActionEvent):null}],this.menuActionLabel=``,this.menuActionEvent=``}addTool(i){let l=i;i.label=`${this.actionTools.length}`,this.actionNewToolEvent&&(l.action=this.showAction.bind(this,`Tool Actions!`)),this.actionTools=[...this.actionTools,i],this.actionNewTool={}}addUser(){this.actionUser=r({},this.newActionUser),this.newActionUser={avatar:``,customerBrand:``,status:`positive`}}showAction(i){this.poNotification.success(`Action clicked: ${i}`)}reset(){this.headerBrand={},this.menuActions=[],this.actionNewTool={},this.actionTools=[],this.actionUser={avatar:``,customerBrand:``,status:`positive`},this.newActionUser={avatar:``,customerBrand:``,status:`positive`},this.size=`medium`}static ɵfac=function(l){return new(l||r$1)(I(Ru))};static ɵcmp=Jn({type:r$1,selectors:[[`sample-po-header-labs`]],standalone:!1,decls:40,vars:38,consts:[[`formAction`,`ngForm`],[3,`p-side-menu-only-action`,`p-brand`,`p-menu-items`,`p-actions-tools`,`p-header-user`,`p-size`],[1,`po-row`,`po-mt-4`],[`p-clean`,``,`p-label`,`Título da marca`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-clean`,``,`p-label`,`Logo da marca`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-clean`,``,`p-label`,`Logo da marca - small`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[1,`po-row`,`po-mt-1`],[`p-label`,`Add Brand`,1,`po-lg-6`,`po-md-6`,3,`p-click`],[1,`po-row`,`po-mt-2`],[1,`po-lg-12`,`po-mb-2`],[`p-clean`,``,`p-label`,`Action`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-clean`,``,`p-label`,`Label`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Action`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`icon`,`p-clean`,``,`p-label`,`Icon`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`tooltip`,`p-clean`,``,`p-label`,`Tooltip`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`badge`,`p-clean`,``,`p-label`,`Badge`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`switch`,`name`,`action`,`p-label`,`Action`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add settings`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`brand`,`p-clean`,``,`p-label`,`Logo Brand`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`avatar`,`p-clean`,``,`p-label`,`Avatar`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`radioGroupBasic`,`p-label`,`Status`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Reset`,1,`po-md-3`,3,`p-click`]],template:function(l,o){if(l&1){let p=YO();vu(0,`po-header`,1),Qc(1,`div`,2)(2,`po-input`,3),z0(),Kb(`ngModelChange`,function(d){return B_(p),Tk(o.headerBrandTitle,d)||(o.headerBrandTitle=d),U_(d)}),Kg(),Qc(3,`po-input`,4),z0(),Kb(`ngModelChange`,function(d){return B_(p),Tk(o.headerBrandLogo,d)||(o.headerBrandLogo=d),U_(d)}),Kg(),Qc(4,`po-input`,5),z0(),Kb(`ngModelChange`,function(d){return B_(p),Tk(o.headerBrandSmallLogo,d)||(o.headerBrandSmallLogo=d),U_(d)}),Kg(),Qc(5,`div`,6)(6,`po-button`,7),vt(`p-click`,function(){return o.addBrand()}),Kg()()(),vu(7,`hr`),Qc(8,`div`,8)(9,`h3`,9),Sk(10,`Ações dos itens de menu`),Kg(),Qc(11,`po-input`,10),z0(),Kb(`ngModelChange`,function(d){return B_(p),Tk(o.menuActionEvent,d)||(o.menuActionEvent=d),U_(d)}),Kg(),Qc(12,`po-input`,11),z0(),Kb(`ngModelChange`,function(d){return B_(p),Tk(o.menuActionLabel,d)||(o.menuActionLabel=d),U_(d)}),Kg(),Qc(13,`po-button`,12),vt(`p-click`,function(){return o.addAction()}),Kg()(),vu(14,`hr`),Qc(15,`h3`,9),Sk(16,`Ações das configurações`),Kg(),Qc(17,`form`,8,0)(19,`po-input`,13),z0(),Kb(`ngModelChange`,function(d){return B_(p),Tk(o.actionNewTool.icon,d)||(o.actionNewTool.icon=d),U_(d)}),Kg(),Qc(20,`po-input`,14),z0(),Kb(`ngModelChange`,function(d){return B_(p),Tk(o.actionNewTool.tooltip,d)||(o.actionNewTool.tooltip=d),U_(d)}),Kg(),Qc(21,`po-number`,15),z0(),Kb(`ngModelChange`,function(d){return B_(p),Tk(o.actionNewTool.badge,d)||(o.actionNewTool.badge=d),U_(d)}),Kg(),Qc(22,`po-switch`,16),z0(),Kb(`ngModelChange`,function(d){return B_(p),Tk(o.actionNewToolEvent,d)||(o.actionNewToolEvent=d),U_(d)}),Kg(),Qc(23,`po-button`,17),vt(`p-click`,function(){return o.addTool(o.actionNewTool)}),Kg()(),vu(24,`hr`),Qc(25,`h3`,9),Sk(26,`Ações do Usuário`),Kg(),Qc(27,`form`,8,0)(29,`po-input`,18),z0(),Kb(`ngModelChange`,function(d){return B_(p),Tk(o.newActionUser.customerBrand,d)||(o.newActionUser.customerBrand=d),U_(d)}),Kg(),Qc(30,`po-input`,19),z0(),Kb(`ngModelChange`,function(d){return B_(p),Tk(o.newActionUser.avatar,d)||(o.newActionUser.avatar=d),U_(d)}),Kg(),Qc(31,`po-radio-group`,20),z0(),Kb(`ngModelChange`,function(d){return B_(p),Tk(o.newActionUser.status,d)||(o.newActionUser.status=d),U_(d)}),Kg(),Qc(32,`po-button`,17),vt(`p-click`,function(){return o.addUser()}),Kg(),vu(33,`hr`),Qc(34,`h3`,9),Sk(35,`Variações de tamanho`),Kg(),Qc(36,`div`,8)(37,`po-radio-group`,21),z0(),Kb(`ngModelChange`,function(d){return B_(p),Tk(o.size,d)||(o.size=d),U_(d)}),Kg()(),vu(38,`hr`),Qc(39,`po-button`,22),vt(`p-click`,function(){return o.reset()}),Kg()()}l&2&&(Rb(`p-side-menu-only-action`,!0)(`p-brand`,o.headerBrand)(`p-menu-items`,o.menuActions)(`p-actions-tools`,o.actionTools)(`p-header-user`,o.actionUser)(`p-size`,o.size),wg(2),Yb(`ngModel`,o.headerBrandTitle),W0(),wg(),Yb(`ngModel`,o.headerBrandLogo),W0(),wg(),Yb(`ngModel`,o.headerBrandSmallLogo),W0(),wg(7),Yb(`ngModel`,o.menuActionEvent),W0(),wg(),Yb(`ngModel`,o.menuActionLabel),W0(),wg(),Rb(`p-disabled`,!o.menuActionLabel),wg(6),Yb(`ngModel`,o.actionNewTool.icon),W0(),wg(),Yb(`ngModel`,o.actionNewTool.tooltip),W0(),wg(),Yb(`ngModel`,o.actionNewTool.badge),W0(),wg(),Yb(`ngModel`,o.actionNewToolEvent),W0(),wg(),Rb(`p-disabled`,o.actionTools.length>2),wg(6),Yb(`ngModel`,o.newActionUser.customerBrand),W0(),wg(),Yb(`ngModel`,o.newActionUser.avatar),W0(),wg(),Yb(`ngModel`,o.newActionUser.status),Rb(`p-options`,Uk(28,Fe,Lk(24,Be),Lk(25,Le),Lk(26,Me),Lk(27,De))),W0(),wg(),Rb(`p-disabled`,!o.newActionUser.avatar||o.newActionUser.customerBrand),wg(5),Yb(`ngModel`,o.size),Rb(`p-options`,jk(35,Ue,Lk(33,Ve),Lk(34,Ie))),W0())},dependencies:[AZ,MZ,TZ,QL,WL,oi,j4,Goe,Zte,R4,Nze],styles:[`po-header[_ngcontent-%COMP%]{--%NS%nav-position: flex}`],changeDetection:1})}return r$1})();var Oe=r=>({"docs-sample-code-tabs":r});var we=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-header-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-header-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Header Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-header-labs/sample-po-header-labs.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-header
  [p-side-menu-only-action]="true"
  [p-brand]="headerBrand"
  [p-menu-items]="menuActions"
  [p-actions-tools]="actionTools"
  [p-header-user]="actionUser"
  [p-size]="size"
></po-header>

<div class="po-row po-mt-4">
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="headerBrandTitle" p-clean p-label="T\xEDtulo da marca"> </po-input>
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="headerBrandLogo" p-clean p-label="Logo da marca"> </po-input>
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="headerBrandSmallLogo" p-clean p-label="Logo da marca - small">
  </po-input>
  <div class="po-row po-mt-1">
    <po-button class="po-lg-6 po-md-6" p-label="Add Brand" (p-click)="addBrand()"></po-button>
  </div>
</div>
<hr />
<div class="po-row po-mt-2">
  <h3 class="po-lg-12 po-mb-2">A\xE7\xF5es dos itens de menu</h3>
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="menuActionEvent" p-clean p-label="Action"> </po-input>
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="menuActionLabel" p-clean p-label="Label"> </po-input>
  <po-button [p-disabled]="!menuActionLabel" class="po-md-3" p-label="Add Action" (p-click)="addAction()"></po-button>
</div>
<hr />
<h3 class="po-lg-12 po-mb-2">A\xE7\xF5es das configura\xE7\xF5es</h3>
<form #formAction="ngForm" class="po-row po-mt-2">
  <po-input class="po-lg-6 po-md-6" name="icon" [(ngModel)]="actionNewTool.icon" p-clean p-label="Icon"> </po-input>
  <po-input class="po-lg-6 po-md-6" name="tooltip" [(ngModel)]="actionNewTool.tooltip" p-clean p-label="Tooltip">
  </po-input>
  <po-number class="po-lg-6 po-md-6" name="badge" [(ngModel)]="actionNewTool.badge" p-clean p-label="Badge">
  </po-number>
  <po-switch class="po-lg-6 po-md-6" name="switch" [(ngModel)]="actionNewToolEvent" name="action" p-label="Action">
  </po-switch>
  <po-button
    [p-disabled]="actionTools.length > 2"
    class="po-md-3"
    p-label="Add settings"
    (p-click)="addTool(actionNewTool)"
  ></po-button>
</form>
<hr />
<h3 class="po-lg-12 po-mb-2">A\xE7\xF5es do Usu\xE1rio</h3>
<form #formAction="ngForm" class="po-row po-mt-2">
  <po-input class="po-lg-6 po-md-6" name="brand" [(ngModel)]="newActionUser.customerBrand" p-clean p-label="Logo Brand">
  </po-input>
  <po-input class="po-lg-6 po-md-6" name="avatar" [(ngModel)]="newActionUser.avatar" p-clean p-label="Avatar">
  </po-input>

  <po-radio-group
    name="radioGroupBasic"
    class="po-lg-12"
    p-label="Status"
    [(ngModel)]="newActionUser.status"
    [p-options]="[
      { label: 'Positive', value: 'positive' },
      { label: 'Negative', value: 'negative' },
      { label: 'Warning', value: 'warning' },
      { label: 'Disabled', value: 'disabled' }
    ]"
  >
  </po-radio-group>
  <po-button
    [p-disabled]="!newActionUser.avatar || newActionUser.customerBrand"
    class="po-md-3"
    p-label="Add settings"
    (p-click)="addUser()"
  ></po-button>

  <hr />
  <h3 class="po-lg-12 po-mb-2">Varia\xE7\xF5es de tamanho</h3>
  <div class="po-row po-mt-2">
    <po-radio-group
      class="po-md-12 po-lg-12"
      name="size"
      [(ngModel)]="size"
      p-columns="4"
      p-label="Size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="[
        { label: 'Medium', value: 'medium' },
        { label: 'Small', value: 'small' }
      ]"
    >
    </po-radio-group>
  </div>

  <hr />

  <po-button class="po-md-3" p-label="Reset" (p-click)="reset()"></po-button>
</form>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-header-labs/sample-po-header-labs.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import {
  PoHeaderActions,
  PoHeaderActionTool,
  PoHeaderBrand,
  PoHeaderUser,
  PoNotificationService
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-header-labs',
  templateUrl: './sample-po-header-labs.component.html',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: \`
    /* alterado apenas para demonstra\xE7\xE3o no portal*/
    po-header {
      --nav-position: flex;
    }
  \`
})
export class SamplePoHeaderLabsComponent {
  headerBrandTitle = '';
  headerBrandLogo = '';
  headerBrandSmallLogo = '';
  headerBrand: PoHeaderBrand = {};

  menuActionLabel = '';
  menuActionEvent = '';
  menuActions: Array<PoHeaderActions> = [];

  actionNewTool: PoHeaderActionTool = {
    tooltip: '',
    icon: '',
    badge: null,
    action: null,
    label: ''
  };
  actionNewToolEvent = false;
  actionTools: Array<PoHeaderActionTool> = [];

  newActionUser: any = {
    avatar: '',
    customerBrand: '',
    status: 'positive'
  };

  actionUser: PoHeaderUser = {
    avatar: '',
    customerBrand: '',
    status: 'positive'
  };

  size: string = 'medium';

  constructor(private poNotification: PoNotificationService) {}

  addBrand() {
    this.headerBrand = {
      logo: this.headerBrandLogo,
      title: this.headerBrandTitle,
      smallLogo: this.headerBrandSmallLogo
    };
    this.headerBrandTitle = '';
    this.headerBrandLogo = '';
    this.headerBrandSmallLogo = '';
  }

  addAction() {
    this.menuActions = [
      ...this.menuActions,
      {
        label: this.menuActionLabel,
        action: this.menuActionEvent ? this.showAction.bind(this, this.menuActionEvent) : null
      }
    ];
    this.menuActionLabel = '';
    this.menuActionEvent = '';
  }

  addTool(action: PoHeaderActionTool) {
    const newAction = action;
    action.label = \`\${this.actionTools.length}\`;
    if (this.actionNewToolEvent) {
      newAction.action = this.showAction.bind(this, 'Tool Actions!');
    }
    this.actionTools = [...this.actionTools, action];
    this.actionNewTool = {};
  }

  addUser() {
    this.actionUser = { ...this.newActionUser };
    this.newActionUser = {
      avatar: '',
      customerBrand: '',
      status: 'positive'
    };
  }

  private showAction(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }

  reset() {
    this.headerBrand = {};
    this.menuActions = [];
    this.actionNewTool = {};
    this.actionTools = [];
    this.actionUser = {
      avatar: '',
      customerBrand: '',
      status: 'positive'
    };
    this.newActionUser = {
      avatar: '',
      customerBrand: '',
      status: 'positive'
    };
    this.size = 'medium';
  }
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-header-labs`),Kg(),vu(23,`hr`)),l&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Oe,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ce],encapsulation:2,changeDetection:1})}return r})();var We=[`meuTemplate`];var je=[`notificationTemplate`];var Re=(r,C)=>C.icon;function Qe(r,C){if(r&1&&vu(0,`po-button`,5),r&2){let i=C.$implicit;Rb(`p-icon`,i.icon)}}function Ge(r,C){if(r&1&&(Qc(0,`div`,3)(1,`p`),Sk(2,`Meus aplicativos`),Kg(),vu(3,`br`),Qc(4,`div`,4),UO(5,Qe,1,1,`po-button`,5,Re),Kg()()),r&2){let i=ek();wg(5),HO(i.systemApps)}}function Je(r,C){if(r&1){let i=YO();Qc(0,`div`,6)(1,`div`,7)(2,`span`,8),Sk(3,`Notificações`),Kg()(),Qc(4,`div`,9)(5,`po-button`,10),vt(`p-click`,function(){B_(i);let o=ek();return U_(o.markAllAsRead())}),Kg()()(),vu(6,`po-divider`),Qc(7,`po-list-view`,11),vt(`p-item-click`,function(o){B_(i);let p=ek();return U_(p.readNotification(o))}),Kg(),vu(8,`po-divider`),Qc(9,`div`,12)(10,`div`,13)(11,`po-button`,14),vt(`p-click`,function(){B_(i);let o=ek();return U_(o.resetNotifications())}),Kg(),Qc(12,`po-button`,15),vt(`p-click`,function(){B_(i);let o=ek();return U_(o.markAllAsUnread())}),Kg()()()}if(r&2){let i=ek();wg(5),Rb(`p-disabled`,!i.hasNotifications),wg(2),Rb(`p-field-properties`,i.fieldProperties)(`p-items`,i.notificationList)(`p-select`,!1)(`p-literals`,i.notificationLiterals)}}var ye=(()=>{class r$2{poNotification;cd;meuTemplate;notificationTemplate;fieldProperties={title:`title`,subtitle:`content`,avatar:`avatar`,highlighted:`checked`,tag:{value:`tag`,type:`tagType`}};initialNotifications=[{title:`Relatório de faturamento`,content:`O arquivo solicitado já está disponível para download`,tag:`Concluído`,tagType:`success`,avatar:{progress:100,status:`success`,showPercentage:!0,size:`large`,radius:35},checked:!0},{title:`Folha de pagamento`,content:`O cálculo da folha de pagamento está em andamento`,tag:`Em andamento`,tagType:`info`,avatar:{progress:80,showPercentage:!0,size:`large`,radius:35},checked:!0},{title:`Nova versão TOTVS 2.1`,content:`Atualize seu sistema para a versão TOTVS 2.1`,tag:`Novidade`,tagType:`neutral`,avatar:{icon:`an an-arrow-circle-up`,color:`#ffffff`,backgroundColor:`#000000`},checked:!0},{title:`6 novos colaboradores`,content:`Você tem 6 novos colaboradores cadastrados`,tag:`Info`,tagType:`info`,avatar:{icon:`an an-user`,color:`#753399`,backgroundColor:`#f0e6f5`},checked:!0},{title:`Novo usuário`,content:`Novo usuário adicionado ao grupo Financeiro`,tag:`Info`,tagType:`info`,avatar:`https://i.pravatar.cc/150?img=12`,checked:!0}];allNotifications=this.initialNotifications.map(i=>r({},i));notificationList=this.allNotifications.filter(i=>i.checked);get hasNotifications(){return this.notificationList.some(i=>i.checked)}notificationLiterals={noData:`Você está atualizado! Você não tem novas notificações no momento. Assim que surgirem novidades ou alertas, eles aparecerão aqui.`};listItem=[{label:`Ação 1`,action:this.myAction.bind(this,`Ação 1`)},{label:`Ação 2`,action:this.myAction.bind(this,`Ação 2`)},{label:`Ação 3`,action:this.myAction.bind(this,`Ação 3`)}];headerBrand={title:`PO UI`,logo:`../../../assets/po-logos/po_color.png`,action:this.myAction.bind(this,`Logo ação`)};menuItems=[{label:`Item 1`,action:this.myAction.bind(this,`Item 1`)},{label:`Item 2`,action:this.myAction.bind(this,`Item 2`)},{label:`Item 3`,action:this.myAction.bind(this,`Item 3`)}];actionTools=[{label:`Configurações`,icon:`an an-gear-six`,tooltip:`Configurações do sistema`,action:this.myAction.bind(this,`Configuração`)},{label:`Aplicativos`,icon:`an an-dots-nine`,tooltip:`Aplicativos do sistema`,popover:{content:this.meuTemplate},onOpen:i=>this.onOpenTool(i),onClose:i=>this.onCloseTool(i)},{label:`Notificações`,icon:`an an-bell`,tooltip:`Notificações do usuário`,badge:5,popover:{content:this.notificationTemplate,width:480},onOpen:i=>this.onOpenTool(i),onClose:i=>this.onCloseTool(i)}];headerUser={avatar:`../../../assets/graphics/avatar1.png`,customerBrand:`../../../assets/po-logos/po_black.png`,status:`positive`,items:[{label:`Meu perfil`,action:this.myAction.bind(this,`Meu perfil`)},{label:`Configurações`,action:this.myAction.bind(this,`Configurações`)},{label:`Sair`,action:this.myAction.bind(this,`Sair`)}],onOpen:()=>this.onOpenUser(),onClose:()=>this.onCloseUser()};systemApps=[{icon:`an an-reddit-logo`,action:this.myAction.bind(this,`Aplicativo 1`)},{icon:`an an-twitter-logo`,action:this.myAction.bind(this,`Aplicativo 2`)},{icon:`an an-twitch-logo`,action:this.myAction.bind(this,`Aplicativo 3`)},{icon:`an an-facebook-logo`,action:this.myAction.bind(this,`Aplicativo 4`)},{icon:`an an-meta-logo`,action:this.myAction.bind(this,`Aplicativo 5`)},{icon:`an an-amazon-logo`,action:this.myAction.bind(this,`Aplicativo 6`)}];constructor(i,l){this.poNotification=i,this.cd=l}ngAfterViewInit(){this.actionTools=this.actionTools.map(i=>i.label===`Aplicativos`&&i.popover?s(r({},i),{popover:s(r({},i.popover),{content:this.meuTemplate})}):i.label===`Notificações`&&i.popover?s(r({},i),{popover:s(r({},i.popover),{content:this.notificationTemplate})}):i),this.cd.detectChanges()}myAction(i){this.poNotification.success({message:`Action clicked: ${i}`,orientation:Or.Bottom})}markAllAsRead(){this.allNotifications.forEach(i=>i.checked=!1),this.notificationList=this.allNotifications.filter(i=>i.checked),this.setNotificationBadge(void 0),this.poNotification.success({message:`Todas as notificações foram marcadas como lidas.`,orientation:Or.Top})}readNotification(i){let l=this.allNotifications.find(o=>o.title===i?.title);l&&(l.checked=!1),setTimeout(()=>{this.notificationList=this.allNotifications.filter(p=>p.checked);let o=this.notificationList.length;this.setNotificationBadge(o>0?o:void 0)}),this.poNotification.information({message:`Notifica\xE7\xE3o lida: ${i?.title}`,orientation:Or.Top})}resetNotifications(){this.notificationList=this.allNotifications.map(i=>r({},i))}markAllAsUnread(){this.allNotifications.forEach(i=>i.checked=!0),this.notificationList=this.allNotifications.filter(i=>i.checked),this.setNotificationBadge(this.allNotifications.length),this.poNotification.information({message:`Todas as notificações foram marcadas como não lidas.`,orientation:Or.Top})}setNotificationBadge(i){setTimeout(()=>{this.actionTools=this.actionTools.map(l=>l.label===`Notificações`?s(r({},l),{badge:i}):l),this.cd.detectChanges()})}onOpenTool(i){this.poNotification.information({message:`Opened: ${i} (p-actions-tools)`,orientation:Or.Top})}onCloseTool(i){this.poNotification.warning({message:`Closed: ${i} (p-actions-tools)`,orientation:Or.Top})}onOpenUser(){this.poNotification.information({message:`Opened: User menu (p-header-user)`,orientation:Or.Top})}onCloseUser(){this.poNotification.warning({message:`Closed: User menu (p-header-user)`,orientation:Or.Top})}static ɵfac=function(l){return new(l||r$2)(I(Ru),I(Be$1))};static ɵcmp=Jn({type:r$2,selectors:[[`sample-po-header-apps`]],viewQuery:function(l,o){if(l&1&&Du(We,5)(je,5),l&2){let p;No(p=xo())&&(o.meuTemplate=p.first),No(p=xo())&&(o.notificationTemplate=p.first)}},standalone:!1,decls:5,vars:5,consts:[[`meuTemplate`,``],[`notificationTemplate`,``],[1,`example-notification-header`,3,`p-brand`,`p-menu-items`,`p-actions-tools`,`p-header-user`,`p-side-menu-only-action`],[1,`custom-template`],[1,`app-wrapper`],[3,`p-icon`],[1,`po-row`,`po-pr-1`,`po-pl-1`,`po-pt-2`,`po-pb-0`],[1,`po-md-6`],[1,`po-font-subtitle`],[1,`po-md-6`,`po-text-right`],[`p-icon`,`an an-checks`,`p-label`,`Marcar todas como lidas`,`p-kind`,`tertiary`,3,`p-click`,`p-disabled`],[`p-tag-position`,`top`,`p-avatar-size`,`md`,3,`p-item-click`,`p-field-properties`,`p-items`,`p-select`,`p-literals`],[1,`po-row`,`po-pr-1`,`po-pl-1`,`po-pt-0`,`po-pb-2`],[1,`po-md-12`,`po-text-right`],[`p-label`,`Ver todas notificações`,`p-kind`,`primary`,1,`po-mr-1`,3,`p-click`],[`p-icon`,`an an-arrow-counter-clockwise`,`p-kind`,`tertiary`,`p-aria-label`,`Marcar todas como não lidas`,3,`p-click`]],template:function(l,o){l&1&&(vu(0,`po-header`,2),Db(1,Ge,7,0,`ng-template`,null,0,Xk)(3,Je,13,5,`ng-template`,null,1,Xk)),l&2&&Rb(`p-brand`,o.headerBrand)(`p-menu-items`,o.menuItems)(`p-actions-tools`,o.actionTools)(`p-header-user`,o.headerUser)(`p-side-menu-only-action`,!0)},dependencies:[oi,Nf,Pze,Nze],styles:[`sample-po-header-apps{display:block;min-height:768px}sample-po-header-apps .app-wrapper{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;justify-items:center}sample-po-header-apps .custom-template{padding:.5rem}sample-po-header-apps .custom-template p{text-align:center;font-weight:700;color:var(--%NS%color-neutral-dark-90)}sample-po-header-apps po-header{--%NS%nav-position: flex}po-header.example-notification-header po-list-view{--%NS%po-density-gap-spacing: 0px;--%NS%po-density-content-padding: 0px;--%NS%list-item-shadow: none;--%NS%list-item-border-radius: 0px;--%NS%list-item-border-color: transparent}po-header.example-notification-header po-divider{--%NS%po-density-gap-spacing: 0}
`],encapsulation:2,changeDetection:1})}return r$2})();var Xe=r=>({"docs-sample-code-tabs":r});var Te=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-header-apps-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-header-apps`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Header Apps`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-header-apps/sample-po-header-apps.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-header
  class="example-notification-header"
  [p-brand]="headerBrand"
  [p-menu-items]="menuItems"
  [p-actions-tools]="actionTools"
  [p-header-user]="headerUser"
  [p-side-menu-only-action]="true"
></po-header>

<ng-template #meuTemplate>
  <div class="custom-template">
    <p>Meus aplicativos</p>
    <br />
    <div class="app-wrapper">
      @for (app of systemApps; track app.icon) {
        <po-button [p-icon]="app.icon"></po-button>
      }
    </div>
  </div>
</ng-template>

<ng-template #notificationTemplate>
  <div class="po-row po-pr-1 po-pl-1 po-pt-2 po-pb-0">
    <div class="po-md-6">
      <span class="po-font-subtitle">Notifica\xE7\xF5es</span>
    </div>
    <div class="po-md-6 po-text-right">
      <po-button
        p-icon="an an-checks"
        p-label="Marcar todas como lidas"
        p-kind="tertiary"
        [p-disabled]="!hasNotifications"
        (p-click)="markAllAsRead()"
      ></po-button>
    </div>
  </div>

  <po-divider></po-divider>

  <po-list-view
    p-tag-position="top"
    p-avatar-size="md"
    [p-field-properties]="fieldProperties"
    [p-items]="notificationList"
    [p-select]="false"
    [p-literals]="notificationLiterals"
    (p-item-click)="readNotification($event)"
  >
  </po-list-view>

  <po-divider></po-divider>

  <div class="po-row po-pr-1 po-pl-1 po-pt-0 po-pb-2">
    <div class="po-md-12 po-text-right">
      <po-button
        class="po-mr-1"
        p-label="Ver todas notifica\xE7\xF5es"
        p-kind="primary"
        (p-click)="resetNotifications()"
      ></po-button>
      <po-button
        p-icon="an an-arrow-counter-clockwise"
        p-kind="tertiary"
        p-aria-label="Marcar todas como n\xE3o lidas"
        (p-click)="markAllAsUnread()"
      ></po-button>
    </div>
  </div>
</ng-template>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-header-apps/sample-po-header-apps.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';

import {
  PoHeaderActions,
  PoHeaderActionTool,
  PoHeaderActionToolItem,
  PoHeaderBrand,
  PoHeaderUser,
  PoListViewFieldProperties,
  PoNotificationService,
  PoToasterOrientation
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-header-apps',
  templateUrl: './sample-po-header-apps.component.html',
  standalone: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: \`
    sample-po-header-apps {
      display: block;
      min-height: 768px;
    }

    sample-po-header-apps .app-wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      justify-items: center;
    }

    sample-po-header-apps .custom-template {
      padding: 0.5rem;
    }

    sample-po-header-apps .custom-template p {
      text-align: center;
      font-weight: bold;
      color: var(--color-neutral-dark-90);
    }

    sample-po-header-apps po-header {
      --nav-position: flex;
    }

    po-header.example-notification-header po-list-view {
      --po-density-gap-spacing: 0px;
      --po-density-content-padding: 0px;

      --list-item-shadow: none;
      --list-item-border-radius: 0px;
      --list-item-border-color: transparent;
    }

    po-header.example-notification-header po-divider {
      --po-density-gap-spacing: 0;
    }
  \`
})
export class SamplePoHeaderAppsComponent implements AfterViewInit {
  @ViewChild('meuTemplate') meuTemplate!: TemplateRef<any>;
  @ViewChild('notificationTemplate') notificationTemplate!: TemplateRef<any>;

  fieldProperties: PoListViewFieldProperties = {
    title: 'title',
    subtitle: 'content',
    avatar: 'avatar',
    highlighted: 'checked',
    tag: { value: 'tag', type: 'tagType' }
  };

  private readonly initialNotifications = [
    {
      title: 'Relat\xF3rio de faturamento',
      content: 'O arquivo solicitado j\xE1 est\xE1 dispon\xEDvel para download',
      tag: 'Conclu\xEDdo',
      tagType: 'success',
      avatar: { progress: 100, status: 'success', showPercentage: true, size: 'large', radius: 35 },
      checked: true
    },
    {
      title: 'Folha de pagamento',
      content: 'O c\xE1lculo da folha de pagamento est\xE1 em andamento',
      tag: 'Em andamento',
      tagType: 'info',
      avatar: { progress: 80, showPercentage: true, size: 'large', radius: 35 },
      checked: true
    },
    {
      title: 'Nova vers\xE3o TOTVS 2.1',
      content: 'Atualize seu sistema para a vers\xE3o TOTVS 2.1',
      tag: 'Novidade',
      tagType: 'neutral',
      avatar: { icon: 'an an-arrow-circle-up', color: '#ffffff', backgroundColor: '#000000' },
      checked: true
    },
    {
      title: '6 novos colaboradores',
      content: 'Voc\xEA tem 6 novos colaboradores cadastrados',
      tag: 'Info',
      tagType: 'info',
      avatar: { icon: 'an an-user', color: '#753399', backgroundColor: '#f0e6f5' },
      checked: true
    },
    {
      title: 'Novo usu\xE1rio',
      content: 'Novo usu\xE1rio adicionado ao grupo Financeiro',
      tag: 'Info',
      tagType: 'info',
      avatar: 'https://i.pravatar.cc/150?img=12',
      checked: true
    }
  ];

  private allNotifications = this.initialNotifications.map(item => ({ ...item }));

  notificationList = this.allNotifications.filter(item => item.checked);

  get hasNotifications(): boolean {
    return this.notificationList.some(item => item.checked);
  }

  readonly notificationLiterals = {
    noData:
      'Voc\xEA est\xE1 atualizado! Voc\xEA n\xE3o tem novas notifica\xE7\xF5es no momento. Assim que surgirem novidades ou alertas, eles aparecer\xE3o aqui.'
  };

  readonly listItem: Array<PoHeaderActionToolItem> = [
    {
      label: 'A\xE7\xE3o 1',
      action: this.myAction.bind(this, 'A\xE7\xE3o 1')
    },
    { label: 'A\xE7\xE3o 2', action: this.myAction.bind(this, 'A\xE7\xE3o 2') },
    { label: 'A\xE7\xE3o 3', action: this.myAction.bind(this, 'A\xE7\xE3o 3') }
  ];

  readonly headerBrand: PoHeaderBrand = {
    title: 'PO UI',
    logo: '../../../assets/po-logos/po_color.png',
    action: this.myAction.bind(this, 'Logo a\xE7\xE3o')
  };

  readonly menuItems: Array<PoHeaderActions> = [
    {
      label: 'Item 1',
      action: this.myAction.bind(this, 'Item 1')
    },
    { label: 'Item 2', action: this.myAction.bind(this, 'Item 2') },
    { label: 'Item 3', action: this.myAction.bind(this, 'Item 3') }
  ];

  actionTools: Array<PoHeaderActionTool> = [
    {
      label: 'Configura\xE7\xF5es',
      icon: 'an an-gear-six',
      tooltip: 'Configura\xE7\xF5es do sistema',
      action: this.myAction.bind(this, 'Configura\xE7\xE3o')
    },
    {
      label: 'Aplicativos',
      icon: 'an an-dots-nine',
      tooltip: 'Aplicativos do sistema',
      popover: {
        content: this.meuTemplate
      },
      onOpen: (label?: string) => this.onOpenTool(label),
      onClose: (label?: string) => this.onCloseTool(label)
    },
    {
      label: 'Notifica\xE7\xF5es',
      icon: 'an an-bell',
      tooltip: 'Notifica\xE7\xF5es do usu\xE1rio',
      badge: 5,
      popover: {
        content: this.notificationTemplate,
        width: 480
      },
      onOpen: (label?: string) => this.onOpenTool(label),
      onClose: (label?: string) => this.onCloseTool(label)
    }
  ];

  readonly headerUser: PoHeaderUser = {
    avatar: '../../../assets/graphics/avatar1.png',
    customerBrand: '../../../assets/po-logos/po_black.png',
    status: 'positive',
    items: [
      { label: 'Meu perfil', action: this.myAction.bind(this, 'Meu perfil') },
      { label: 'Configura\xE7\xF5es', action: this.myAction.bind(this, 'Configura\xE7\xF5es') },
      { label: 'Sair', action: this.myAction.bind(this, 'Sair') }
    ],
    onOpen: () => this.onOpenUser(),
    onClose: () => this.onCloseUser()
  };

  readonly systemApps = [
    {
      icon: 'an an-reddit-logo',
      action: this.myAction.bind(this, 'Aplicativo 1')
    },
    {
      icon: 'an an-twitter-logo',
      action: this.myAction.bind(this, 'Aplicativo 2')
    },
    {
      icon: 'an an-twitch-logo',
      action: this.myAction.bind(this, 'Aplicativo 3')
    },
    {
      icon: 'an an-facebook-logo',
      action: this.myAction.bind(this, 'Aplicativo 4')
    },
    {
      icon: 'an an-meta-logo',
      action: this.myAction.bind(this, 'Aplicativo 5')
    },
    {
      icon: 'an an-amazon-logo',
      action: this.myAction.bind(this, 'Aplicativo 6')
    }
  ];

  constructor(
    private poNotification: PoNotificationService,
    private cd: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.actionTools = this.actionTools.map(action => {
      if (action.label === 'Aplicativos' && action.popover) {
        return { ...action, popover: { ...action.popover, content: this.meuTemplate } };
      }
      if (action.label === 'Notifica\xE7\xF5es' && action.popover) {
        return { ...action, popover: { ...action.popover, content: this.notificationTemplate } };
      }
      return action;
    });

    this.cd.detectChanges();
  }

  myAction(action: string): any {
    this.poNotification.success({ message: \`Action clicked: \${action}\`, orientation: PoToasterOrientation.Bottom });
  }

  markAllAsRead(): void {
    this.allNotifications.forEach(item => (item.checked = false));
    this.notificationList = this.allNotifications.filter(item => item.checked);
    this.setNotificationBadge(undefined);

    this.poNotification.success({
      message: 'Todas as notifica\xE7\xF5es foram marcadas como lidas.',
      orientation: PoToasterOrientation.Top
    });
  }

  readNotification(item: any): void {
    const notification = this.allNotifications.find(current => current.title === item?.title);
    if (notification) {
      notification.checked = false;
    }

    setTimeout(() => {
      this.notificationList = this.allNotifications.filter(current => current.checked);
      const unread = this.notificationList.length;
      this.setNotificationBadge(unread > 0 ? unread : undefined);
    });

    this.poNotification.information({
      message: \`Notifica\xE7\xE3o lida: \${item?.title}\`,
      orientation: PoToasterOrientation.Top
    });
  }

  resetNotifications(): void {
    this.notificationList = this.allNotifications.map(current => ({ ...current }));
  }

  markAllAsUnread(): void {
    this.allNotifications.forEach(item => (item.checked = true));
    this.notificationList = this.allNotifications.filter(item => item.checked);
    this.setNotificationBadge(this.allNotifications.length);

    this.poNotification.information({
      message: 'Todas as notifica\xE7\xF5es foram marcadas como n\xE3o lidas.',
      orientation: PoToasterOrientation.Top
    });
  }

  private setNotificationBadge(badge: number | undefined): void {
    setTimeout(() => {
      this.actionTools = this.actionTools.map(action =>
        action.label === 'Notifica\xE7\xF5es' ? { ...action, badge } : action
      );
      this.cd.detectChanges();
    });
  }

  /** Callback de abertura para a\xE7\xF5es do \`p-actions-tools\`. Recebe o \`label\` da a\xE7\xE3o. */
  onOpenTool(label?: string): void {
    this.poNotification.information({
      message: \`Opened: \${label} (p-actions-tools)\`,
      orientation: PoToasterOrientation.Top
    });
  }

  /** Callback de fechamento para a\xE7\xF5es do \`p-actions-tools\`. Recebe o \`label\` da a\xE7\xE3o. */
  onCloseTool(label?: string): void {
    this.poNotification.warning({
      message: \`Closed: \${label} (p-actions-tools)\`,
      orientation: PoToasterOrientation.Top
    });
  }

  /** Callback de abertura para o \`p-header-user\`. */
  onOpenUser(): void {
    this.poNotification.information({
      message: 'Opened: User menu (p-header-user)',
      orientation: PoToasterOrientation.Top
    });
  }

  /** Callback de fechamento para o \`p-header-user\`. */
  onCloseUser(): void {
    this.poNotification.warning({
      message: 'Closed: User menu (p-header-user)',
      orientation: PoToasterOrientation.Top
    });
  }
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-header-apps`),Kg(),vu(23,`hr`)),l&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Xe,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ye],encapsulation:2,changeDetection:1})}return r})();var Ae=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-header-doc`]],standalone:!1,decls:1489,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-header-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-actions-tools`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoHeaderActionTool>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-amount-more`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-brand`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHeaderBrand`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`event-p-colapsed-menu`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-filter-menu`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-header-template`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<any>`],[`id`,`prop-p-header-user`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHeaderUser`],[`id`,`prop-p-hide-button-menu`,1,`docs-api-properties-row`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHeaderLiterals`],[`href`,`/documentation/po-i18n`],[`id`,`prop-p-menus`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMenuItem>`],[`id`,`prop-p-menu-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoHeaderActions>`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`interface-po-header-action-tool`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-header-action-tool-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-header-action-tool-badge`,1,`docs-api-properties-row`],[`id`,`interface-po-header-action-tool-icon`,1,`docs-api-properties-row`],[`id`,`interface-po-header-action-tool-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoHeaderActionToolItem>`],[`id`,`interface-po-header-action-tool-label`,1,`docs-api-properties-row`],[`id`,`interface-po-header-action-tool-link`,1,`docs-api-properties-row`],[`id`,`interface-po-header-action-tool-on-close`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`(label?:`,`string)`,`=>`,`void`],[`id`,`interface-po-header-action-tool-on-open`,1,`docs-api-properties-row`],[`id`,`interface-po-header-action-tool-popover`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHeaderActionPopoverAction`],[`id`,`interface-po-header-action-tool-tooltip`,1,`docs-api-properties-row`],[`id`,`interface-po-header-action-popover-action`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-header-action-popover-action-content`,1,`docs-api-properties-row`],[`id`,`interface-po-header-action-popover-action-width`,1,`docs-api-properties-row`],[`id`,`interface-po-header-action-tool-item`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-header-action-tool-item-action`,1,`docs-api-properties-row`],[`id`,`interface-po-header-action-tool-item-label`,1,`docs-api-properties-row`],[`id`,`interface-po-header-actions`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-header-actions-action`,1,`docs-api-properties-row`],[`id`,`interface-po-header-actions-id`,1,`docs-api-properties-row`],[`id`,`interface-po-header-actions-label`,1,`docs-api-properties-row`],[`id`,`interface-po-header-actions-link`,1,`docs-api-properties-row`],[`id`,`interface-po-header-brand`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-header-brand-action`,1,`docs-api-properties-row`],[`id`,`interface-po-header-brand-link`,1,`docs-api-properties-row`],[`id`,`interface-po-header-brand-logo`,1,`docs-api-properties-row`],[`id`,`interface-po-header-brand-small-logo`,1,`docs-api-properties-row`],[`id`,`interface-po-header-brand-title`,1,`docs-api-properties-row`],[`id`,`interface-po-header-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-header-literals-header-links`,1,`docs-api-properties-row`],[`id`,`interface-po-header-literals-notifications`,1,`docs-api-properties-row`],[`id`,`interface-po-header-user`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-header-user-action`,1,`docs-api-properties-row`],[`id`,`interface-po-header-user-avatar`,1,`docs-api-properties-row`],[`id`,`interface-po-header-user-customer-brand`,1,`docs-api-properties-row`],[`id`,`interface-po-header-user-items`,1,`docs-api-properties-row`],[`id`,`interface-po-header-user-on-close`,1,`docs-api-properties-row`],[`id`,`interface-po-header-user-on-open`,1,`docs-api-properties-row`],[`id`,`interface-po-header-user-popover`,1,`docs-api-properties-row`],[`id`,`interface-po-header-user-status`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`'positive'`],[`pan`,``,1,`docs-api-property-type`,`'negative'`],[`pan`,``,1,`docs-api-property-type`,`'warning'`],[`pan`,``,1,`docs-api-property-type`,`'disabled'`]],template:function(l,o){l&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoHeaderModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente `),Qc(7,`code`),Sk(8,`po-header`),Kg(),Sk(9,`.`),Kg()(),Qc(10,`h3`,3),Sk(11,`Componente`),Kg(),Qc(12,`h4`,4)(13,`code`,5),Sk(14,`PoHeaderComponent`),Kg()(),Qc(15,`div`,2)(16,`p`),Sk(17,`O componente `),Qc(18,`code`),Sk(19,`po-header`),Kg(),Sk(20,` é um cabeçalho fixo que permite apresentar itens com ações, divididos em `),Qc(21,`code`),Sk(22,`p-brand`),Kg(),Sk(23,`, `),Qc(24,`code`),Sk(25,`p-menu-items`),Kg(),Sk(26,`, `),Qc(27,`code`),Sk(28,`p-actions-tools`),Kg(),Sk(29,` e `),Qc(30,`code`),Sk(31,`p-header-user`),Kg(),Sk(32,`.`),Kg(),Qc(33,`ul`)(34,`li`)(35,`code`),Sk(36,`p-brand`),Kg(),Sk(37,`: Possibilita a inclusão de uma imagem e o titulo do header.`),Kg(),Qc(38,`li`)(39,`code`),Sk(40,`p-menu-items`),Kg(),Sk(41,`: Possibilita a inclusão de uma lista de itens com ações ou links.`),Kg(),Qc(42,`li`)(43,`code`),Sk(44,`p-actions-tools`),Kg(),Sk(45,`: Possibilita a inclusão de até 3 botões com ações.`),Kg(),Qc(46,`li`)(47,`code`),Sk(48,`p-header-user`),Kg(),Sk(49,`: Possibilita a inclusão de uma imagem representando a marca e avatar.`),Kg()(),Qc(50,`p`),Sk(51,`O componente `),Qc(52,`code`),Sk(53,`po-header`),Kg(),Sk(54,` pode ser usado de duas formas:`),Kg(),Qc(55,`p`),Sk(56,`Com `),Qc(57,`code`),Sk(58,`po-menu`),Kg(),Sk(59,` definido pelo usuário:`),Kg(),Qc(60,`pre`)(61,`code`),Sk(62,`...
<po-header
  [p-brand]="brand"
  [p-menu-items]="items"
  [p-actions-tools]="actions"
  [p-header-user]="user"
></po-header>

<div class="po-wrapper">
  <po-menu [p-menus]="itemsMenu">
  </po-menu>

  <po-page-default>
      <router-outlet></router-outlet>
  </po-page-default>
</div>
...
`),Kg()(),Qc(63,`p`),Sk(64,`Passando os itens diretamente para o `),Qc(65,`code`),Sk(66,`po-header`),Kg(),Sk(67,` pela propriedade `),Qc(68,`code`),Sk(69,`p-menus`),Kg(),Sk(70,`:`),Kg(),Qc(71,`pre`)(72,`code`),Sk(73,`...
<po-header
  [p-brand]="brand"
  [p-menu-items]="items"
  [p-actions-tools]="actions"
  [p-header-user]="user"
  [p-menus]="itensMenu"
></po-header>

<div class="po-wrapper">
  <po-page-default>
      <router-outlet></router-outlet>
  </po-page-default>
</div>
...
`),Kg()(),Qc(74,`h4`),Sk(75,`Tokens customizáveis`),Kg(),Qc(76,`p`),Sk(77,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(78,`blockquote`)(79,`p`),Sk(80,`Para maiores informações, acesse o guia `),Qc(81,`a`,6),Sk(82,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(83,`.`),Kg()(),Qc(84,`table`)(85,`thead`)(86,`tr`)(87,`th`),Sk(88,`Propriedade`),Kg(),Qc(89,`th`),Sk(90,`Descrição`),Kg(),Qc(91,`th`),Sk(92,`Valor Padrão`),Kg()()(),Qc(93,`tbody`)(94,`tr`)(95,`td`)(96,`code`),Sk(97,`--font-family`),Kg()(),Qc(98,`td`),Sk(99,`Família tipográfica usada`),Kg(),Qc(100,`td`)(101,`code`),Sk(102,`var(--font-family-theme)`),Kg()()(),Qc(103,`tr`)(104,`td`)(105,`code`),Sk(106,`--font-weight`),Kg()(),Qc(107,`td`),Sk(108,`Peso da fonte`),Kg(),Qc(109,`td`)(110,`code`),Sk(111,`var(--font-weight-bold)`),Kg()()(),Qc(112,`tr`)(113,`td`)(114,`code`),Sk(115,`--text-color`),Kg()(),Qc(116,`td`),Sk(117,`Cor do texto`),Kg(),Qc(118,`td`)(119,`code`),Sk(120,`var(--color-neutral-dark-70)`),Kg()()(),Qc(121,`tr`)(122,`td`)(123,`code`),Sk(124,`--outline-color-focused`),Kg()(),Qc(125,`td`),Sk(126,`Cor do outline dos itens de sub-menu e customer`),Kg(),Qc(127,`td`)(128,`code`),Sk(129,`var(--color-neutral-dark-95)`),Kg()()(),Qc(130,`tr`)(131,`td`)(132,`code`),Sk(133,`--object-fit-brand`),Kg()(),Qc(134,`td`),Sk(135,`Valor do object-fit da imagem do logo`),Kg(),Qc(136,`td`)(137,`code`),Sk(138,`contain`),Kg()()(),Qc(139,`tr`)(140,`td`)(141,`code`),Sk(142,`--object-fit-customer`),Kg()(),Qc(143,`td`),Sk(144,`Valor do object-fit da imagem do logo na seção customer`),Kg(),Qc(145,`td`)(146,`code`),Sk(147,`contain`),Kg()()(),Qc(148,`tr`)(149,`td`)(150,`code`),Sk(151,`--object-fit-customer-user`),Kg()(),Qc(152,`td`),Sk(153,`Valor do object-fit da imagem do avatar`),Kg(),Qc(154,`td`)(155,`code`),Sk(156,`cover`),Kg()()(),Qc(157,`tr`)(158,`td`)(159,`strong`),Sk(160,`Header`),Kg()(),vu(161,`td`)(162,`td`),Kg(),Qc(163,`tr`)(164,`td`)(165,`code`),Sk(166,`--background-color`),Kg()(),Qc(167,`td`),Sk(168,`Cor de background do header`),Kg(),Qc(169,`td`)(170,`code`),Sk(171,`var(--color-neutral-light-05)`),Kg()()(),Qc(172,`tr`)(173,`td`)(174,`code`),Sk(175,`--border-radius-bottom-left`),Kg()(),Qc(176,`td`),Sk(177,`Valor do radius do lado esquerdo do header`),Kg(),Qc(178,`td`)(179,`code`),Sk(180,`var(--border-radius-md)`),Kg()()(),Qc(181,`tr`)(182,`td`)(183,`code`),Sk(184,`--border-radius-bottom-right`),Kg()(),Qc(185,`td`),Sk(186,`Valor do radius do lado direito do header`),Kg(),Qc(187,`td`)(188,`code`),Sk(189,`var(--border-radius-md)`),Kg()()(),Qc(190,`tr`)(191,`td`)(192,`code`),Sk(193,`--base shadow`),Kg()(),Qc(194,`td`),Sk(195,`Cor da sombra do header`),Kg(),Qc(196,`td`)(197,`code`),Sk(198,`0 1px 8px rgba(0, 0, 0, 0.1)`),Kg()()(),Qc(199,`tr`)(200,`td`)(201,`code`),Sk(202,`--stroke-color`),Kg()(),Qc(203,`td`),Sk(204,`Cor da borda inferior do header`),Kg(),Qc(205,`td`)(206,`code`),Sk(207,`var(--color-brand-01-base)`),Kg()()(),Qc(208,`tr`)(209,`td`)(210,`strong`),Sk(211,`Sub-menu`),Kg()(),vu(212,`td`)(213,`td`),Kg(),Qc(214,`tr`)(215,`td`)(216,`code`),Sk(217,`--border-radius`),Kg()(),Qc(218,`td`),Sk(219,`Valor do radius dos itens do sub-menu`),Kg(),Qc(220,`td`)(221,`code`),Sk(222,`var(--border-radius-md);`),Kg()()(),Qc(223,`tr`)(224,`td`)(225,`code`),Sk(226,`--text-color-submenu`),Kg()(),Qc(227,`td`),Sk(228,`Cor do texto dos itens do sub-menu`),Kg(),Qc(229,`td`)(230,`code`),Sk(231,`var(--color-brand-01-base)`),Kg()()(),Qc(232,`tr`)(233,`td`)(234,`code`),Sk(235,`--icon-color`),Kg()(),Qc(236,`td`),Sk(237,`Cor do ícone do sub-menu com itens`),Kg(),Qc(238,`td`)(239,`code`),Sk(240,`var(--color-brand-01-base)`),Kg()()(),Qc(241,`tr`)(242,`td`)(243,`code`),Sk(244,`--border-color`),Kg()(),Qc(245,`td`),Sk(246,`Cor da borda`),Kg(),Qc(247,`td`)(248,`code`),Sk(249,`var(--color-transparent)`),Kg()()(),Qc(250,`tr`)(251,`td`)(252,`code`),Sk(253,`--shadow`),Kg()(),Qc(254,`td`),Sk(255,`Contém o valor da sombra do elemento`),Kg(),Qc(256,`td`)(257,`code`),Sk(258,`var(--shadow-none)`),Kg()()(),Qc(259,`tr`)(260,`td`)(261,`code`),Sk(262,`--font-family-submenu`),Kg()(),Qc(263,`td`),Sk(264,`Fonte do texto dos itens de sub-menu`),Kg(),Qc(265,`td`)(266,`code`),Sk(267,`var(--font-family-theme)`),Kg()()(),Qc(268,`tr`)(269,`td`)(270,`code`),Sk(271,`--font-weight-submenu`),Kg()(),Qc(272,`td`),Sk(273,`Peso da fonte do texto dos itens de sub-menu`),Kg(),Qc(274,`td`)(275,`code`),Sk(276,`var(--font-weight-bold)`),Kg()()(),Qc(277,`tr`)(278,`td`)(279,`strong`),Sk(280,`Sub-menu - Hover`),Kg()(),vu(281,`td`)(282,`td`),Kg(),Qc(283,`tr`)(284,`td`)(285,`code`),Sk(286,`--background-hover`),Kg()(),Qc(287,`td`),Sk(288,`Cor de background dos itens do sub-menu no estado hover`),Kg(),Qc(289,`td`)(290,`code`),Sk(291,`var(--color-brand-01-lighter)`),Kg()()(),Qc(292,`tr`)(293,`td`)(294,`code`),Sk(295,`--icon-color-hover`),Kg()(),Qc(296,`td`),Sk(297,`Cor do ícone dos itens de sub-menu no estado hover`),Kg(),Qc(298,`td`)(299,`code`),Sk(300,`var(--color-brand-01-darkest)`),Kg()()(),Qc(301,`tr`)(302,`td`)(303,`code`),Sk(304,`--text-color-hover`),Kg()(),Qc(305,`td`),Sk(306,`Cor do texto dos itens de sub-menu no estado hover`),Kg(),Qc(307,`td`)(308,`code`),Sk(309,`var(--color-brand-01-darkest)`),Kg()()(),Qc(310,`tr`)(311,`td`)(312,`strong`),Sk(313,`Sub-menu - pressed`),Kg()(),vu(314,`td`)(315,`td`),Kg(),Qc(316,`tr`)(317,`td`)(318,`code`),Sk(319,`--background-pressed`),Kg()(),Qc(320,`td`),Sk(321,`Cor de background dos itens do sub-menu no estado pressed`),Kg(),Qc(322,`td`)(323,`code`),Sk(324,`var(--color-brand-01-light)`),Kg()()(),Qc(325,`tr`)(326,`td`)(327,`code`),Sk(328,`--icon-color-pressed`),Kg()(),Qc(329,`td`),Sk(330,`Cor do ícone dos itens de sub-menu no estado pressed`),Kg(),Qc(331,`td`)(332,`code`),Sk(333,`var(--color-brand-01-darkest)`),Kg()()(),Qc(334,`tr`)(335,`td`)(336,`code`),Sk(337,`--text-color-pressed`),Kg()(),Qc(338,`td`),Sk(339,`Cor do texto dos itens de sub-menu no estado pressed`),Kg(),Qc(340,`td`)(341,`code`),Sk(342,`var(--color-brand-01-darkest)`),Kg()()(),Qc(343,`tr`)(344,`td`)(345,`strong`),Sk(346,`Sub-menu - selected`),Kg()(),vu(347,`td`)(348,`td`),Kg(),Qc(349,`tr`)(350,`td`)(351,`code`),Sk(352,`--background-selected`),Kg()(),Qc(353,`td`),Sk(354,`Cor de background dos itens do sub-menu no estado selected`),Kg(),Qc(355,`td`)(356,`code`),Sk(357,`var(--color-brand-01-light)`),Kg()()(),Qc(358,`tr`)(359,`td`)(360,`code`),Sk(361,`--icon-color-selected`),Kg()(),Qc(362,`td`),Sk(363,`Cor do ícone dos itens de sub-menu no estado selected`),Kg(),Qc(364,`td`)(365,`code`),Sk(366,`var(--color-neutral-dark-95)`),Kg()()(),Qc(367,`tr`)(368,`td`)(369,`code`),Sk(370,`--text-color-selected`),Kg()(),Qc(371,`td`),Sk(372,`Cor do texto dos itens de sub-menu no estado selected`),Kg(),Qc(373,`td`)(374,`code`),Sk(375,`var(--color-brand-01-darkest)`),Kg()()(),Qc(376,`tr`)(377,`td`)(378,`strong`),Sk(379,`Customer`),Kg()(),vu(380,`td`)(381,`td`),Kg(),Qc(382,`tr`)(383,`td`)(384,`code`),Sk(385,`--background-color-customer`),Kg()(),Qc(386,`td`),Sk(387,`Cor do background da seção customer`),Kg(),Qc(388,`td`)(389,`code`),Sk(390,`var(--color-neutral-light-00)`),Kg()()(),Qc(391,`tr`)(392,`td`)(393,`code`),Sk(394,`--border-color`),Kg()(),Qc(395,`td`),Sk(396,`Cor da borda da seção customer`),Kg(),Qc(397,`td`)(398,`code`),Sk(399,`var(--color-neutral-light-10)`),Kg()()(),Qc(400,`tr`)(401,`td`)(402,`code`),Sk(403,`--border-style`),Kg()(),Qc(404,`td`),Sk(405,`Estilo da borda da seção customer`),Kg(),Qc(406,`td`)(407,`code`),Sk(408,`solid`),Kg()()(),Qc(409,`tr`)(410,`td`)(411,`code`),Sk(412,`--border-width`),Kg()(),Qc(413,`td`),Sk(414,`Largura da borda da seção customer`),Kg(),Qc(415,`td`)(416,`code`),Sk(417,`var(--border-width-sm)`),Kg()()(),Qc(418,`tr`)(419,`td`)(420,`strong`),Sk(421,`Customer - hover`),Kg()(),vu(422,`td`)(423,`td`),Kg(),Qc(424,`tr`)(425,`td`)(426,`code`),Sk(427,`--background-color-customer-hover`),Kg()(),Qc(428,`td`),Sk(429,`Cor do background da seção customer no estado hover`),Kg(),Qc(430,`td`)(431,`code`),Sk(432,`var(--color-brand-01-lighter)`),Kg()()(),Qc(433,`tr`)(434,`td`)(435,`strong`),Sk(436,`Customer - pressed`),Kg()(),vu(437,`td`)(438,`td`),Kg(),Qc(439,`tr`)(440,`td`)(441,`code`),Sk(442,`--background-color-customer-pressed`),Kg()(),Qc(443,`td`),Sk(444,`Cor do background da seção customer no estado pressed`),Kg(),Qc(445,`td`)(446,`code`),Sk(447,`var(--color-brand-01-light)`),Kg()()(),Qc(448,`tr`)(449,`td`)(450,`code`),Sk(451,`--border-width-pressed`),Kg()(),Qc(452,`td`),Sk(453,`Largura da borda da seção customer no estado pressed`),Kg(),Qc(454,`td`)(455,`code`),Sk(456,`var(--border-width-md)`),Kg()()()()()(),Qc(457,`div`,7)(458,`h4`,8),Sk(459,`Seletor`),Kg(),Qc(460,`pre`,9),Sk(461,`<po-header
    p-actions-tools="Array<PoHeaderActionTool>"
    p-amount-more="number"
    p-brand="PoHeaderBrand | string"
    (p-colapsed-menu)="EventEmitter"
    p-filter-menu="boolean"
    p-header-template="TemplateRef<any>"
    p-header-user="PoHeaderUser"
    p-hide-button-menu="boolean"
    p-literals="PoHeaderLiterals"
    p-menus="Array<PoMenuItem>"
    p-menu-items="Array<PoHeaderActions>"
    p-size="string" >
</po-header>
`),Kg()(),Qc(462,`h4`,10),Sk(463,`Propriedades`),Kg(),Qc(464,`table`,11)(465,`tr`,12)(466,`th`,13),Sk(467,`Nome`),Kg(),Qc(468,`th`,13),Sk(469,`Tipo`),Kg(),Qc(470,`th`,13),Sk(471,`Padrão`),Kg(),Qc(472,`th`,13),Sk(473,`Descrição`),Kg()(),Qc(474,`tr`,14)(475,`td`,15)(476,`div`,16)(477,`span`,17),Sk(478,` p-actions-tools`),vu(479,`br`),Kg()()(),Qc(480,`td`,18)(481,`code`,19),Sk(482,`Array<PoHeaderActionTool>`),Kg()(),Qc(483,`td`,20),Sk(484,`-`),Kg(),Qc(485,`td`,21)(486,`em`)(487,`strong`),Sk(488,`(opcional)`),Kg()(),Qc(489,`p`),Sk(490,`Propriedade para configurar a seção de tools do `),Qc(491,`code`),Sk(492,`po-header`),Kg()(),Qc(493,`blockquote`)(494,`p`),Sk(495,`Máximo de 3 itens, o componente irá ignorar os itens caso seja mandado mais itens que o suportado.`),Kg()()()(),Qc(496,`tr`,22)(497,`td`,15)(498,`div`,16)(499,`span`,17),Sk(500,` p-amount-more`),vu(501,`br`),Kg()()(),Qc(502,`td`,18)(503,`code`,23),Sk(504,`number`),Kg()(),Qc(505,`td`,20),Sk(506,`-`),Kg(),Qc(507,`td`,21)(508,`em`)(509,`strong`),Sk(510,`(opcional)`),Kg()(),Qc(511,`p`),Sk(512,`N\xFAmero de itens dentro do bot\xE3o de overflow. Caso a largura do header n\xE3o suportar a quantidade de itens passadas, um bot\xE3o com itens ser\xE1 criado.
Essa propriedade possibilita a escolha de quantos itens estar\xE3o dentro do bot\xE3o de overflow.`),Kg(),Qc(513,`blockquote`)(514,`p`),Sk(515,`Ao utilizar essa propriedade o `),Qc(516,`code`),Sk(517,`po-header`),Kg(),Sk(518,` não irá realizar o calculo automatíco de itens.`),Kg()()()(),Qc(519,`tr`,24)(520,`td`,15)(521,`div`,16)(522,`span`,17),Sk(523,` p-brand`),vu(524,`br`),Kg()()(),Qc(525,`td`,18)(526,`code`,25),Sk(527,`PoHeaderBrand `),Kg(),Qc(528,`code`,26),Sk(529,` string`),Kg()(),Qc(530,`td`,20),Sk(531,`-`),Kg(),Qc(532,`td`,21)(533,`em`)(534,`strong`),Sk(535,`(opcional)`),Kg()(),Qc(536,`p`),Sk(537,`Propriedade para configurar a seção de brand do `),Qc(538,`code`),Sk(539,`po-header`),Kg()(),Qc(540,`p`),Sk(541,`Caso seja enviada uma string, apenas o logo sera mostrado com o valor da string passada.`),Kg()()(),Qc(542,`tr`,27)(543,`td`,15)(544,`div`,28)(545,`span`,29),Sk(546,` (p-colapsed-menu)`),vu(547,`br`),Kg()()(),Qc(548,`td`,18)(549,`code`,30),Sk(550,`EventEmitter`),Kg()(),Qc(551,`td`,20),Sk(552,`-`),Kg(),Qc(553,`td`,21)(554,`em`)(555,`strong`),Sk(556,`(opcional)`),Kg()(),Qc(557,`p`),Sk(558,`Evento emitido ao clicar no botão para colapsar ou expandir menu.`),Kg()()(),Qc(559,`tr`,31)(560,`td`,15)(561,`div`,16)(562,`span`,17),Sk(563,` p-filter-menu`),vu(564,`br`),Kg()()(),Qc(565,`td`,18)(566,`code`,32),Sk(567,`boolean`),Kg()(),Qc(568,`td`,20),Sk(569,`-`),Kg(),Qc(570,`td`,21)(571,`em`)(572,`strong`),Sk(573,`(opcional)`),Kg()(),Qc(574,`p`),Sk(575,`Habilita campo para filtrar itens no menu`),Kg()()(),Qc(576,`tr`,33)(577,`td`,15)(578,`div`,16)(579,`span`,17),Sk(580,` p-header-template`),vu(581,`br`),Kg()()(),Qc(582,`td`,18)(583,`code`,34),Sk(584,`TemplateRef<any>`),Kg()(),Qc(585,`td`,20),Sk(586,`-`),Kg(),Qc(587,`td`,21)(588,`em`)(589,`strong`),Sk(590,`(opcional)`),Kg()(),Qc(591,`p`),Sk(592,`Template customiado que será renderizado após os itens definidos na propriedade `),Qc(593,`code`),Sk(594,`p-menu-items`),Kg()()()(),Qc(595,`tr`,35)(596,`td`,15)(597,`div`,16)(598,`span`,17),Sk(599,` p-header-user`),vu(600,`br`),Kg()()(),Qc(601,`td`,18)(602,`code`,36),Sk(603,`PoHeaderUser`),Kg()(),Qc(604,`td`,20),Sk(605,`-`),Kg(),Qc(606,`td`,21)(607,`em`)(608,`strong`),Sk(609,`(opcional)`),Kg()(),Qc(610,`p`),Sk(611,`Propriedade para configurar a seção de headerUser do `),Qc(612,`code`),Sk(613,`po-header`),Kg()()()(),Qc(614,`tr`,37)(615,`td`,15)(616,`div`,16)(617,`span`,17),Sk(618,` p-hide-button-menu`),vu(619,`br`),Kg()()(),Qc(620,`td`,18)(621,`code`,32),Sk(622,`boolean`),Kg()(),Qc(623,`td`,20),Sk(624,`-`),Kg(),Qc(625,`td`,21)(626,`em`)(627,`strong`),Sk(628,`(opcional)`),Kg()(),Qc(629,`p`),Sk(630,`Esconde o botão de menu colapsado.`),Kg()()(),Qc(631,`tr`,38)(632,`td`,15)(633,`div`,16)(634,`span`,17),Sk(635,` p-literals`),vu(636,`br`),Kg()()(),Qc(637,`td`,18)(638,`code`,39),Sk(639,`PoHeaderLiterals`),Kg()(),Qc(640,`td`,20),Sk(641,`-`),Kg(),Qc(642,`td`,21)(643,`em`)(644,`strong`),Sk(645,`(opcional)`),Kg()(),Qc(646,`p`),Sk(647,`Objeto com a literal usada na propriedade `),Qc(648,`code`),Sk(649,`p-literals`),Kg(),Sk(650,`.`),Kg(),Qc(651,`p`),Sk(652,`Para customizar a literal, basta declarar um objeto do tipo `),Qc(653,`code`),Sk(654,`PoHeaderLiterals`),Kg(),Sk(655,` conforme exemplo abaixo:`),Kg(),Qc(656,`pre`)(657,`code`),Sk(658,`const customLiterals: PoHeaderLiterals = {
  headerLinks: 'Itens de navega\xE7\xE3o',
  notifications: 'Mensagens'
};
`),Kg()(),Qc(659,`p`),Sk(660,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),Kg(),Qc(661,`pre`)(662,`code`),Sk(663,`<po-header
  [p-literals]="customLiterals">
</po-header>
`),Kg()(),Qc(664,`blockquote`)(665,`p`),Sk(666,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Qc(667,`a`,40)(668,`code`),Sk(669,`PoI18nService`),Kg()(),Sk(670,` ou do browser.`),Kg()()()(),Qc(671,`tr`,41)(672,`td`,15)(673,`div`,16)(674,`span`,17),Sk(675,` p-menus`),vu(676,`br`),Kg()()(),Qc(677,`td`,18)(678,`code`,42),Sk(679,`Array<PoMenuItem>`),Kg()(),Qc(680,`td`,20),Sk(681,`-`),Kg(),Qc(682,`td`,21)(683,`em`)(684,`strong`),Sk(685,`(opcional)`),Kg()(),Qc(686,`p`),Sk(687,`Lista dos itens do menu. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio.`),Kg(),Qc(688,`blockquote`)(689,`p`),Sk(690,`O menu poderá ser aberto via botão hamburguer quando a tela tiver menos que 960px`),Kg()()()(),Qc(691,`tr`,43)(692,`td`,15)(693,`div`,16)(694,`span`,17),Sk(695,` p-menu-items`),vu(696,`br`),Kg()()(),Qc(697,`td`,18)(698,`code`,44),Sk(699,`Array<PoHeaderActions>`),Kg()(),Qc(700,`td`,20),Sk(701,`-`),Kg(),Qc(702,`td`,21)(703,`em`)(704,`strong`),Sk(705,`(opcional)`),Kg()(),Qc(706,`p`),Sk(707,`Propriedade para configurar a seção de menu do `),Qc(708,`code`),Sk(709,`po-header`),Kg(),Sk(710,`.
Cada item pode receber uma label e uma a\xE7\xE3o`),Kg(),Qc(711,`blockquote`)(712,`p`),Sk(713,`Os itens irão ficar visíveis em uma tela de até 960px`),Kg()()()(),Qc(714,`tr`,45)(715,`td`,15)(716,`div`,16)(717,`span`,17),Sk(718,` p-size`),vu(719,`br`),Kg()()(),Qc(720,`td`,18)(721,`code`,26),Sk(722,`string`),Kg()(),Qc(723,`td`,20)(724,`p`)(725,`code`),Sk(726,`medium`),Kg()()(),Qc(727,`td`,21)(728,`em`)(729,`strong`),Sk(730,`(opcional)`),Kg()(),Qc(731,`p`),Sk(732,`Define o tamanho do componente:`),Kg(),Qc(733,`ul`)(734,`li`)(735,`code`),Sk(736,`small`),Kg(),Sk(737,`: altura de 44px (disponível apenas para acessibilidade AA).`),Kg(),Qc(738,`li`)(739,`code`),Sk(740,`medium`),Kg(),Sk(741,`: altura de 56px.`),Kg()(),Qc(742,`blockquote`)(743,`p`),Sk(744,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(745,`code`),Sk(746,`medium`),Kg(),Sk(747,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(748,`a`,46),Sk(749,`po-theme`),Kg(),Sk(750,`.`),Kg()()()()(),Qc(751,`h3`),Sk(752,`Interfaces`),Kg(),Qc(753,`h4`,47)(754,`code`,5),Sk(755,`PoHeaderActionTool`),Kg()(),Qc(756,`div`,2)(757,`p`)(758,`em`),Sk(759,`Interface`),Kg(),Sk(760,` que define a seção de Actions do header.`),Kg(),Qc(761,`p`),Sk(762,`Indicação de uso:`),Kg(),Qc(763,`ul`)(764,`li`),Sk(765,`Primeira ação destinada à app launcher.`),Kg(),Qc(766,`li`),Sk(767,`Segunda ação (terceiro ícone) destinada à notificações.`),Kg(),Qc(768,`li`),Sk(769,`Terceira ação (segundo ícone) destinada para agrupamento de ações.`),Kg()(),Qc(770,`blockquote`)(771,`p`),Sk(772,`Caso seja passado items e popover, o componente irá renderizar o popover e os itens serão ignorados.`),Kg()()(),Qc(773,`h4`,10),Sk(774,`Propriedades`),Kg(),Qc(775,`table`,11)(776,`tr`,12)(777,`th`,13),Sk(778,`Nome`),Kg(),Qc(779,`th`,13),Sk(780,`Tipo`),Kg(),Qc(781,`th`,13),Sk(782,`Descrição`),Kg()(),Qc(783,`tr`,48)(784,`td`,15)(785,`div`,16)(786,`span`,17),Sk(787,` action`),vu(788,`br`),Kg()()(),Qc(789,`td`,18)(790,`code`,49),Sk(791,`Function`),Kg()(),Qc(792,`td`,21)(793,`em`)(794,`strong`),Sk(795,`(opcional)`),Kg()(),Qc(796,`p`),Sk(797,`Evento emitido ao clicar em uma ação`),Kg(),Qc(798,`p`),Sk(799,`Exemplo: `),Qc(800,`code`),Sk(801,`action: this.myFunction.bind(this)`),Kg()()()(),Qc(802,`tr`,50)(803,`td`,15)(804,`div`,16)(805,`span`,17),Sk(806,` badge`),vu(807,`br`),Kg()()(),Qc(808,`td`,18)(809,`code`,23),Sk(810,`number`),Kg()(),Qc(811,`td`,21)(812,`em`)(813,`strong`),Sk(814,`(opcional)`),Kg()(),Qc(815,`p`),Sk(816,`Valor númerico com a repsentação de notificações`),Kg()()(),Qc(817,`tr`,51)(818,`td`,15)(819,`div`,16)(820,`span`,17),Sk(821,` icon`),vu(822,`br`),Kg()()(),Qc(823,`td`,18)(824,`code`,26),Sk(825,`string`),Kg()(),Qc(826,`td`,21)(827,`em`)(828,`strong`),Sk(829,`(opcional)`),Kg()(),Qc(830,`p`),Sk(831,`Ícone do botão de ação`),Kg()()(),Qc(832,`tr`,52)(833,`td`,15)(834,`div`,16)(835,`span`,17),Sk(836,` items`),vu(837,`br`),Kg()()(),Qc(838,`td`,18)(839,`code`,53),Sk(840,`Array<PoHeaderActionToolItem>`),Kg()(),Qc(841,`td`,21)(842,`em`)(843,`strong`),Sk(844,`(opcional)`),Kg()(),Qc(845,`p`),Sk(846,`Itens de ações`),Kg()()(),Qc(847,`tr`,54)(848,`td`,15)(849,`div`,16)(850,`span`,17),Sk(851,` label`),vu(852,`br`),Kg()()(),Qc(853,`td`,18)(854,`code`,26),Sk(855,`string`),Kg()(),Qc(856,`td`,21)(857,`em`)(858,`strong`),Sk(859,`(opcional)`),Kg()(),Qc(860,`p`),Sk(861,`Título da ação`),Kg()()(),Qc(862,`tr`,55)(863,`td`,15)(864,`div`,16)(865,`span`,17),Sk(866,` link`),vu(867,`br`),Kg()()(),Qc(868,`td`,18)(869,`code`,26),Sk(870,`string`),Kg()(),Qc(871,`td`,21)(872,`em`)(873,`strong`),Sk(874,`(opcional)`),Kg()(),Qc(875,`p`),Sk(876,`link utilizado no redirecionamento das páginas.`),Kg()()(),Qc(877,`tr`,56)(878,`td`,15)(879,`div`,16)(880,`span`,17),Sk(881,` onClose`),vu(882,`br`),Kg()()(),Qc(883,`td`,18)(884,`code`,57),Sk(885,`(label?: string) => void`),Kg()(),Qc(886,`td`,21)(887,`em`)(888,`strong`),Sk(889,`(opcional)`),Kg()(),Qc(890,`p`),Sk(891,`Função executada quando o popup ou popover da ação é fechado.`),Kg(),Qc(892,`p`),Sk(893,`Esse evento é disparado toda vez que o popup (quando há `),Qc(894,`code`),Sk(895,`items`),Kg(),Sk(896,`) ou o popover (quando há `),Qc(897,`code`),Sk(898,`popover`),Kg(),Sk(899,`)
\xE9 ocultado, seja por clique fora do elemento ou por a\xE7\xE3o program\xE1tica.`),Kg(),Qc(900,`p`),Sk(901,`O callback recebe como parâmetro o `),Qc(902,`code`),Sk(903,`label`),Kg(),Sk(904,` da ação que disparou o evento.`),Kg(),Qc(905,`p`),Sk(906,`Exemplo: `),Qc(907,`code`),Sk(908,`onClose: (label) => console.log('Fechado:', label)`),Kg()()()(),Qc(909,`tr`,58)(910,`td`,15)(911,`div`,16)(912,`span`,17),Sk(913,` onOpen`),vu(914,`br`),Kg()()(),Qc(915,`td`,18)(916,`code`,57),Sk(917,`(label?: string) => void`),Kg()(),Qc(918,`td`,21)(919,`em`)(920,`strong`),Sk(921,`(opcional)`),Kg()(),Qc(922,`p`),Sk(923,`Função executada quando o popup ou popover da ação é aberto.`),Kg(),Qc(924,`p`),Sk(925,`Esse evento é disparado toda vez que o usuário clica no botão da ação e o popup (quando há `),Qc(926,`code`),Sk(927,`items`),Kg(),Sk(928,`)
ou o popover (quando h\xE1 `),Qc(929,`code`),Sk(930,`popover`),Kg(),Sk(931,`) é exibido.`),Kg(),Qc(932,`p`),Sk(933,`O callback recebe como parâmetro o `),Qc(934,`code`),Sk(935,`label`),Kg(),Sk(936,` da ação que disparou o evento.`),Kg(),Qc(937,`p`),Sk(938,`Exemplo: `),Qc(939,`code`),Sk(940,`onOpen: (label) => console.log('Aberto:', label)`),Kg()()()(),Qc(941,`tr`,59)(942,`td`,15)(943,`div`,16)(944,`span`,17),Sk(945,` popover`),vu(946,`br`),Kg()()(),Qc(947,`td`,18)(948,`code`,60),Sk(949,`PoHeaderActionPopoverAction`),Kg()(),Qc(950,`td`,21)(951,`em`)(952,`strong`),Sk(953,`(opcional)`),Kg()(),Qc(954,`p`),Sk(955,`Template que será utilizado na ação`),Kg()()(),Qc(956,`tr`,61)(957,`td`,15)(958,`div`,16)(959,`span`,17),Sk(960,` tooltip`),vu(961,`br`),Kg()()(),Qc(962,`td`,18)(963,`code`,26),Sk(964,`string`),Kg()(),Qc(965,`td`,21)(966,`em`)(967,`strong`),Sk(968,`(opcional)`),Kg()(),Qc(969,`p`),Sk(970,`Texto que será apresentado na tooltip`),Kg()()()(),Qc(971,`h4`,62)(972,`code`,5),Sk(973,`PoHeaderActionPopoverAction`),Kg()(),Qc(974,`div`,2)(975,`p`)(976,`em`),Sk(977,`Interface`),Kg(),Sk(978,` que define um template para uma ação.`),Kg()(),Qc(979,`h4`,10),Sk(980,`Propriedades`),Kg(),Qc(981,`table`,11)(982,`tr`,12)(983,`th`,13),Sk(984,`Nome`),Kg(),Qc(985,`th`,13),Sk(986,`Tipo`),Kg(),Qc(987,`th`,13),Sk(988,`Descrição`),Kg()(),Qc(989,`tr`,63)(990,`td`,15)(991,`div`,16)(992,`span`,17),Sk(993,` content`),vu(994,`br`),Kg()()(),Qc(995,`td`,18)(996,`code`,34),Sk(997,`TemplateRef<any>`),Kg()(),Qc(998,`td`,21)(999,`p`),Sk(1e3,`Template que será renderizado dentro do popover.`),Kg()()(),Qc(1001,`tr`,64)(1002,`td`,15)(1003,`div`,16)(1004,`span`,17),Sk(1005,` width`),vu(1006,`br`),Kg()()(),Qc(1007,`td`,18)(1008,`code`,23),Sk(1009,`number`),Kg()(),Qc(1010,`td`,21)(1011,`em`)(1012,`strong`),Sk(1013,`(opcional)`),Kg()(),Qc(1014,`p`),Sk(1015,`Largura, em pixels, do template renderizado dentro do popover.`),Kg(),Qc(1016,`p`),Sk(1017,`Valores permitidos: de 240 a 800.`),Kg()()()(),Qc(1018,`h4`,65)(1019,`code`,5),Sk(1020,`PoHeaderActionToolItem`),Kg()(),Qc(1021,`div`,2)(1022,`p`)(1023,`em`),Sk(1024,`Interface`),Kg(),Sk(1025,` que define uma lista de ações.`),Kg()(),Qc(1026,`h4`,10),Sk(1027,`Propriedades`),Kg(),Qc(1028,`table`,11)(1029,`tr`,12)(1030,`th`,13),Sk(1031,`Nome`),Kg(),Qc(1032,`th`,13),Sk(1033,`Tipo`),Kg(),Qc(1034,`th`,13),Sk(1035,`Descrição`),Kg()(),Qc(1036,`tr`,66)(1037,`td`,15)(1038,`div`,16)(1039,`span`,17),Sk(1040,` action`),vu(1041,`br`),Kg()()(),Qc(1042,`td`,18)(1043,`code`,49),Sk(1044,`Function`),Kg()(),Qc(1045,`td`,21)(1046,`p`),Sk(1047,`Evento emitido ao clicar em uma ação`),Kg(),Qc(1048,`p`),Sk(1049,`Exemplo: `),Qc(1050,`code`),Sk(1051,`action: this.myFunction.bind(this)`),Kg()()()(),Qc(1052,`tr`,67)(1053,`td`,15)(1054,`div`,16)(1055,`span`,17),Sk(1056,` label`),vu(1057,`br`),Kg()()(),Qc(1058,`td`,18)(1059,`code`,26),Sk(1060,`string`),Kg()(),Qc(1061,`td`,21)(1062,`p`),Sk(1063,`Label da ação`),Kg()()()(),Qc(1064,`h4`,68)(1065,`code`,5),Sk(1066,`PoHeaderActions`),Kg()(),Qc(1067,`div`,2)(1068,`p`)(1069,`em`),Sk(1070,`Interface`),Kg(),Sk(1071,` que define uma lista de ações no sub-menu.`),Kg()(),Qc(1072,`h4`,10),Sk(1073,`Propriedades`),Kg(),Qc(1074,`table`,11)(1075,`tr`,12)(1076,`th`,13),Sk(1077,`Nome`),Kg(),Qc(1078,`th`,13),Sk(1079,`Tipo`),Kg(),Qc(1080,`th`,13),Sk(1081,`Descrição`),Kg()(),Qc(1082,`tr`,69)(1083,`td`,15)(1084,`div`,16)(1085,`span`,17),Sk(1086,` action`),vu(1087,`br`),Kg()()(),Qc(1088,`td`,18)(1089,`code`,49),Sk(1090,`Function`),Kg()(),Qc(1091,`td`,21)(1092,`em`)(1093,`strong`),Sk(1094,`(opcional)`),Kg()(),Qc(1095,`p`),Sk(1096,`Evento da ação`),Kg(),Qc(1097,`p`),Sk(1098,` Exemplo: `),Qc(1099,`code`),Sk(1100,`action: this.myFunction.bind(this)`),Kg()()()(),Qc(1101,`tr`,70)(1102,`td`,15)(1103,`div`,16)(1104,`span`,17),Sk(1105,` id`),vu(1106,`br`),Kg()()(),Qc(1107,`td`,18)(1108,`code`,26),Sk(1109,`string`),Kg()(),Qc(1110,`td`,21)(1111,`em`)(1112,`strong`),Sk(1113,`(opcional)`),Kg()(),Qc(1114,`p`),Sk(1115,`Identificador da ação`),Kg()()(),Qc(1116,`tr`,71)(1117,`td`,15)(1118,`div`,16)(1119,`span`,17),Sk(1120,` label`),vu(1121,`br`),Kg()()(),Qc(1122,`td`,18)(1123,`code`,26),Sk(1124,`string`),Kg()(),Qc(1125,`td`,21)(1126,`p`),Sk(1127,`Label da ação`),Kg()()(),Qc(1128,`tr`,72)(1129,`td`,15)(1130,`div`,16)(1131,`span`,17),Sk(1132,` link`),vu(1133,`br`),Kg()()(),Qc(1134,`td`,18)(1135,`code`,26),Sk(1136,`string`),Kg()(),Qc(1137,`td`,21)(1138,`em`)(1139,`strong`),Sk(1140,`(opcional)`),Kg()(),Qc(1141,`p`),Sk(1142,`link utilizado no redirecionamento das páginas.`),Kg()()()(),Qc(1143,`h4`,73)(1144,`code`,5),Sk(1145,`PoHeaderBrand`),Kg()(),Qc(1146,`div`,2)(1147,`p`)(1148,`em`),Sk(1149,`Interface`),Kg(),Sk(1150,` que define a seção de brand.`),Kg()(),Qc(1151,`h4`,10),Sk(1152,`Propriedades`),Kg(),Qc(1153,`table`,11)(1154,`tr`,12)(1155,`th`,13),Sk(1156,`Nome`),Kg(),Qc(1157,`th`,13),Sk(1158,`Tipo`),Kg(),Qc(1159,`th`,13),Sk(1160,`Descrição`),Kg()(),Qc(1161,`tr`,74)(1162,`td`,15)(1163,`div`,16)(1164,`span`,17),Sk(1165,` action`),vu(1166,`br`),Kg()()(),Qc(1167,`td`,18)(1168,`code`,49),Sk(1169,`Function`),Kg()(),Qc(1170,`td`,21)(1171,`em`)(1172,`strong`),Sk(1173,`(opcional)`),Kg()(),Qc(1174,`p`),Sk(1175,`Evento da ação`),Kg(),Qc(1176,`p`),Sk(1177,` Exemplo: `),Qc(1178,`code`),Sk(1179,`action: this.myFunction.bind(this)`),Kg()()()(),Qc(1180,`tr`,75)(1181,`td`,15)(1182,`div`,16)(1183,`span`,17),Sk(1184,` link`),vu(1185,`br`),Kg()()(),Qc(1186,`td`,18)(1187,`code`,26),Sk(1188,`string`),Kg()(),Qc(1189,`td`,21)(1190,`em`)(1191,`strong`),Sk(1192,`(opcional)`),Kg()(),Qc(1193,`p`),Sk(1194,`link utilizado no redirecionamento das páginas.`),Kg()()(),Qc(1195,`tr`,76)(1196,`td`,15)(1197,`div`,16)(1198,`span`,17),Sk(1199,` logo`),vu(1200,`br`),Kg()()(),Qc(1201,`td`,18)(1202,`code`,26),Sk(1203,`string`),Kg()(),Qc(1204,`td`,21)(1205,`em`)(1206,`strong`),Sk(1207,`(opcional)`),Kg()(),Qc(1208,`p`),Sk(1209,`Imagem da marca`),Kg()()(),Qc(1210,`tr`,77)(1211,`td`,15)(1212,`div`,16)(1213,`span`,17),Sk(1214,` smallLogo`),vu(1215,`br`),Kg()()(),Qc(1216,`td`,18)(1217,`code`,26),Sk(1218,`string`),Kg()(),Qc(1219,`td`,21)(1220,`em`)(1221,`strong`),Sk(1222,`(opcional)`),Kg()(),Qc(1223,`p`),Sk(1224,`Imagem da marca quando a tela é menor que 960px`),Kg()()(),Qc(1225,`tr`,78)(1226,`td`,15)(1227,`div`,16)(1228,`span`,17),Sk(1229,` title`),vu(1230,`br`),Kg()()(),Qc(1231,`td`,18)(1232,`code`,26),Sk(1233,`string`),Kg()(),Qc(1234,`td`,21)(1235,`em`)(1236,`strong`),Sk(1237,`(opcional)`),Kg()(),Qc(1238,`p`),Sk(1239,`Título da marca`),Kg()()()(),Qc(1240,`h4`,79)(1241,`code`,5),Sk(1242,`PoHeaderLiterals`),Kg()(),Qc(1243,`div`,2)(1244,`p`),Sk(1245,`Interface para definição das literais usadas no `),Qc(1246,`code`),Sk(1247,`po-header`),Kg(),Sk(1248,`.`),Kg()(),Qc(1249,`h4`,10),Sk(1250,`Propriedades`),Kg(),Qc(1251,`table`,11)(1252,`tr`,12)(1253,`th`,13),Sk(1254,`Nome`),Kg(),Qc(1255,`th`,13),Sk(1256,`Tipo`),Kg(),Qc(1257,`th`,13),Sk(1258,`Descrição`),Kg()(),Qc(1259,`tr`,80)(1260,`td`,15)(1261,`div`,16)(1262,`span`,17),Sk(1263,` headerLinks`),vu(1264,`br`),Kg()()(),Qc(1265,`td`,18)(1266,`code`,26),Sk(1267,`string`),Kg()(),Qc(1268,`td`,21)(1269,`em`)(1270,`strong`),Sk(1271,`(opcional)`),Kg()(),Qc(1272,`p`),Sk(1273,`Texto exibido no item de menu no qual os itens do header são agrupados quando está no modo responsivo.`),Kg()()(),Qc(1274,`tr`,81)(1275,`td`,15)(1276,`div`,16)(1277,`span`,17),Sk(1278,` notifications`),vu(1279,`br`),Kg()()(),Qc(1280,`td`,18)(1281,`code`,26),Sk(1282,`string`),Kg()(),Qc(1283,`td`,21)(1284,`em`)(1285,`strong`),Sk(1286,`(opcional)`),Kg()(),Qc(1287,`p`),Sk(1288,`Texto para indicação de notificação, caso seja passado um valor válido na propriedade `),Qc(1289,`code`),Sk(1290,`badge`),Kg()()()()(),Qc(1291,`h4`,82)(1292,`code`,5),Sk(1293,`PoHeaderUser`),Kg()(),Qc(1294,`div`,2)(1295,`p`)(1296,`em`),Sk(1297,`Interface`),Kg(),Sk(1298,` que define a seção de Customer do header.`),Kg()(),Qc(1299,`h4`,10),Sk(1300,`Propriedades`),Kg(),Qc(1301,`table`,11)(1302,`tr`,12)(1303,`th`,13),Sk(1304,`Nome`),Kg(),Qc(1305,`th`,13),Sk(1306,`Tipo`),Kg(),Qc(1307,`th`,13),Sk(1308,`Descrição`),Kg()(),Qc(1309,`tr`,83)(1310,`td`,15)(1311,`div`,16)(1312,`span`,17),Sk(1313,` action`),vu(1314,`br`),Kg()()(),Qc(1315,`td`,18)(1316,`code`,49),Sk(1317,`Function`),Kg()(),Qc(1318,`td`,21)(1319,`em`)(1320,`strong`),Sk(1321,`(opcional)`),Kg()(),Qc(1322,`p`),Sk(1323,`Evento emitido ao clicar na seção`),Kg(),Qc(1324,`p`),Sk(1325,`Exemplo: `),Qc(1326,`code`),Sk(1327,`action: this.myFunction.bind(this)`),Kg()()()(),Qc(1328,`tr`,84)(1329,`td`,15)(1330,`div`,16)(1331,`span`,17),Sk(1332,` avatar`),vu(1333,`br`),Kg()()(),Qc(1334,`td`,18)(1335,`code`,26),Sk(1336,`string`),Kg()(),Qc(1337,`td`,21)(1338,`p`),Sk(1339,`Logo representando o perfil`),Kg()()(),Qc(1340,`tr`,85)(1341,`td`,15)(1342,`div`,16)(1343,`span`,17),Sk(1344,` customerBrand`),vu(1345,`br`),Kg()()(),Qc(1346,`td`,18)(1347,`code`,26),Sk(1348,`string`),Kg()(),Qc(1349,`td`,21)(1350,`p`),Sk(1351,`Imagem da marca`),Kg()()(),Qc(1352,`tr`,86)(1353,`td`,15)(1354,`div`,16)(1355,`span`,17),Sk(1356,` items`),vu(1357,`br`),Kg()()(),Qc(1358,`td`,18)(1359,`code`,53),Sk(1360,`Array<PoHeaderActionToolItem>`),Kg()(),Qc(1361,`td`,21)(1362,`em`)(1363,`strong`),Sk(1364,`(opcional)`),Kg()(),Qc(1365,`p`),Sk(1366,`Itens de ações`),Kg(),Qc(1367,`blockquote`)(1368,`p`),Sk(1369,`Caso seja passado items e popover, o componente irá renderizar o popover e os itens serão ignorados`),Kg()()()(),Qc(1370,`tr`,87)(1371,`td`,15)(1372,`div`,16)(1373,`span`,17),Sk(1374,` onClose`),vu(1375,`br`),Kg()()(),Qc(1376,`td`,18)(1377,`code`,49),Sk(1378,`Function`),Kg()(),Qc(1379,`td`,21)(1380,`em`)(1381,`strong`),Sk(1382,`(opcional)`),Kg()(),Qc(1383,`p`),Sk(1384,`Função executada quando o popup ou popover da seção de Customer é fechado.`),Kg(),Qc(1385,`p`),Sk(1386,`Esse evento é disparado toda vez que o popup (quando há `),Qc(1387,`code`),Sk(1388,`items`),Kg(),Sk(1389,`) ou o popover (quando há `),Qc(1390,`code`),Sk(1391,`popover`),Kg(),Sk(1392,`)
\xE9 ocultado, seja por clique fora do elemento ou por a\xE7\xE3o program\xE1tica.`),Kg(),Qc(1393,`p`),Sk(1394,`Exemplo: `),Qc(1395,`code`),Sk(1396,`onClose: this.onCloseNotifications.bind(this)`),Kg()()()(),Qc(1397,`tr`,88)(1398,`td`,15)(1399,`div`,16)(1400,`span`,17),Sk(1401,` onOpen`),vu(1402,`br`),Kg()()(),Qc(1403,`td`,18)(1404,`code`,49),Sk(1405,`Function`),Kg()(),Qc(1406,`td`,21)(1407,`em`)(1408,`strong`),Sk(1409,`(opcional)`),Kg()(),Qc(1410,`p`),Sk(1411,`Função executada quando o popup ou popover da seção de Customer é aberto.`),Kg(),Qc(1412,`p`),Sk(1413,`Esse evento \xE9 disparado toda vez que o usu\xE1rio clica no bot\xE3o da se\xE7\xE3o de Customer e o popup
(quando h\xE1 `),Qc(1414,`code`),Sk(1415,`items`),Kg(),Sk(1416,`) ou o popover (quando há `),Qc(1417,`code`),Sk(1418,`popover`),Kg(),Sk(1419,`) é exibido.`),Kg(),Qc(1420,`p`),Sk(1421,`Exemplo: `),Qc(1422,`code`),Sk(1423,`onOpen: this.onOpenNotifications.bind(this)`),Kg()()()(),Qc(1424,`tr`,89)(1425,`td`,15)(1426,`div`,16)(1427,`span`,17),Sk(1428,` popover`),vu(1429,`br`),Kg()()(),Qc(1430,`td`,18)(1431,`code`,60),Sk(1432,`PoHeaderActionPopoverAction`),Kg()(),Qc(1433,`td`,21)(1434,`em`)(1435,`strong`),Sk(1436,`(opcional)`),Kg()(),Qc(1437,`p`),Sk(1438,`Template que será utilizado na ação`),Kg()()(),Qc(1439,`tr`,90)(1440,`td`,15)(1441,`div`,16)(1442,`span`,17),Sk(1443,` status`),vu(1444,`br`),Kg()()(),Qc(1445,`td`,18)(1446,`code`,91),Sk(1447,`'positive' `),Kg(),Qc(1448,`code`,92),Sk(1449,` 'negative' `),Kg(),Qc(1450,`code`,93),Sk(1451,` 'warning' `),Kg(),Qc(1452,`code`,94),Sk(1453,` 'disabled'`),Kg()(),Qc(1454,`td`,21)(1455,`em`)(1456,`strong`),Sk(1457,`(opcional)`),Kg()(),Qc(1458,`p`),Sk(1459,`Indica\xE7\xE3o representando o estado do usu\xE1rio
Valores v\xE1lidos:`),Kg(),Qc(1460,`ul`)(1461,`li`)(1462,`code`),Sk(1463,`positive`),Kg(),Sk(1464,`: Define a cor do `),Qc(1465,`code`),Sk(1466,`status`),Kg(),Sk(1467,` com a cor de feedback positivo.`),Kg(),Qc(1468,`li`)(1469,`code`),Sk(1470,`negative`),Kg(),Sk(1471,`: Define a cor do `),Qc(1472,`code`),Sk(1473,`status`),Kg(),Sk(1474,` com a cor de feedback negative.`),Kg(),Qc(1475,`li`)(1476,`code`),Sk(1477,`warning`),Kg(),Sk(1478,`: Define a cor do `),Qc(1479,`code`),Sk(1480,`status`),Kg(),Sk(1481,` com a cor de feedback warning.`),Kg(),Qc(1482,`li`)(1483,`code`),Sk(1484,`disabled`),Kg(),Sk(1485,`: Define a cor do `),Qc(1486,`code`),Sk(1487,`status`),Kg(),Sk(1488,` com a cor de feedback disabled`),Kg()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return r})();function $e(r,C){if(r&1){let i=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(i);let o=ek();return U_(o.changeTab(`web`))}),vu(1,`sample-po-header-basic-view`)(2,`sample-po-header-labs-view`)(3,`sample-po-header-apps-view`),Kg()}if(r&2){let i=ek();Rb(`p-active`,i.activeTab===`web`)}}var et=[{path:``,component:(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(i,l){this.route=i,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let l=i.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`})}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:`merge`}),this.activeTab=i}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||r)(I(ar),I(An))};static ɵcmp=Jn({type:r,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Header`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,o){l&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,$e,4,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return o.changeTab(`doc`)}),vu(4,`sample-po-header-doc`),Kg()()()),l&2&&(Rb(`p-actions`,o.actions),wg(2),VO(o.hidePoWebSample?-1:2),wg(),Rb(`p-active`,o.activeTab===`doc`))},dependencies:[Mze,tre,are,ve,we,Te,Ae],encapsulation:2,changeDetection:1})}return r})()}];var _e=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=ge({type:r});static ɵinj=de({imports:[GV.forChild(et),GV]})}return r})();var _t=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=ge({type:r});static ɵinj=de({imports:[M,_e]})}return r})();export{_t as DocPoHeaderModule};